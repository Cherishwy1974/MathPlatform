/**
 * 对数运算实验室 - JavaScript 文件
 * lab1-2.js
 */

// ========== 全局变量 ==========
let currentPanel = 'basic';
let resizeTimeout;

// ========== MathJax 渲染函数 ==========
function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('MathJax Error:', err));
    }
}

// ========== 面板导航切换 ==========
function switchPanel(panelId) {
    // 更新导航按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'font-medium');
        btn.classList.add('text-gray-600', 'hover:bg-gray-100');
    });
    
    const activeBtn = document.querySelector(`button[onclick="switchPanel('${panelId}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-600', 'hover:bg-gray-100');
        activeBtn.classList.add('bg-indigo-50', 'text-indigo-700', 'font-medium');
    }

    // 更新面板显示
    document.querySelectorAll('.panel-content').forEach(el => el.classList.remove('active'));
    document.getElementById(panelId).classList.add('active');
    
    currentPanel = panelId;

    // 触发各面板的绘图刷新
    requestAnimationFrame(() => {
        renderMath();
        if (panelId === 'basic') drawGraph();
        if (panelId === 'tower') updateTower();
        if (panelId === 'rules') drawRuleVisuals();
    });
}

// ========== 基础计算逻辑 ==========
function calculate() {
    const base = parseFloat(document.getElementById('base').value);
    const value = parseFloat(document.getElementById('value').value);
    
    if (isNaN(base) || isNaN(value) || base <= 0 || base === 1 || value <= 0) {
        document.getElementById('result').innerHTML = '<span class="text-red-500 text-sm">无效输入: 底数>0且≠1; 真数>0</span>';
        return;
    }
    
    const result = Math.log(value) / Math.log(base);
    const displayResult = Number.isInteger(result) ? result : result.toFixed(3);
    
    document.getElementById('result').innerHTML = `$\\log_{${base}} ${value} = ${displayResult}$`;
    
    // 生成步骤说明
    let stepsHTML = '';
    if (result === 0) {
        stepsHTML = `因为 $${base}^0 = 1$，所以 $\\log_{${base}} 1 = 0$`;
    } else if (result === 1) {
        stepsHTML = `因为 $${base}^1 = ${base}$，所以 $\\log_{${base}} ${base} = 1$`;
    } else if (Number.isInteger(result)) {
        if (result > 0 && result <= 10) {
            let calcStr = Array(result).fill(base).join(' \\times ');
            stepsHTML = `$${base}^{${result}} = ${calcStr} = ${value}$<br>所以需要乘 ${result} 次`;
        } else {
            stepsHTML = `$${base}^{${result}} = ${value}$`;
        }
    } else {
        stepsHTML = `$${base}^{\\approx ${displayResult}} \\approx ${value}$<br>非整数次幂，需要数值计算`;
    }
    
    document.getElementById('steps').innerHTML = stepsHTML;
    
    // 同步滑块
    if (base >= 0.1 && base <= 10) {
        document.getElementById('baseSlider').value = base;
        document.getElementById('sliderValue').textContent = base;
    }
    
    drawGraph();
    renderMath();
}

// ========== 随机计算 ==========
function randomCalc() {
    const bases = [2, 3, 4, 5, 10];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const power = Math.floor(Math.random() * 4) + 1;
    const value = Math.pow(base, power);
    
    document.getElementById('base').value = base;
    document.getElementById('value').value = value;
    calculate();
}

// ========== 函数图像绘制 ==========
function drawGraph() {
    const canvas = document.getElementById('graph');
    const container = document.getElementById('graph-container');
    if (!canvas || !container || container.clientWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    const width = rect.width;
    const height = rect.height;
    // 原点偏左以更好显示 x > 0 的部分
    const cx = width * 0.1;
    const cy = height / 2;
    const scale = Math.min(width, height) / 10;

    // 绘制坐标轴
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy); // X轴
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height); // Y轴
    ctx.stroke();

    // 绘制函数曲线
    const base = parseFloat(document.getElementById('base').value);
    if (base <= 0 || base === 1) return;

    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;

    let first = true;
    for (let px = cx + 1; px < width; px += 2) {
        const x = (px - cx) / scale;
        if (x <= 0) continue;
        
        const y = Math.log(x) / Math.log(base);
        const py = cy - (y * scale);

        if (py > -100 && py < height + 100) {
            if (first) {
                ctx.moveTo(px, py);
                first = false;
            } else {
                ctx.lineTo(px, py);
            }
        }
    }
    ctx.stroke();

    // 标记点 (1, 0)
    const p1x = cx + scale;
    const p1y = cy;
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(p1x, p1y, 4, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px sans-serif';
    ctx.fillText('(1, 0)', p1x + 6, p1y + 15);

    // 更新描述
    const desc = document.getElementById('funcDesc');
    if (base > 1) {
        desc.innerHTML = `$y = \\log_{${base}} x$ (单调递增)`;
    } else {
        desc.innerHTML = `$y = \\log_{${base}} x$ (单调递减)`;
    }
    renderMath();
}

// ========== 拆塔游戏逻辑 ==========
function updateTower() {
    const size = parseInt(document.getElementById('towerSize').value);
    const base = parseInt(document.getElementById('towerBase').value);
    const visual = document.getElementById('towerVisual');
    
    visual.innerHTML = '';
    visual.innerHTML = createTowerHTML(size, 0);
    
    const steps = Math.log(size) / Math.log(base);
    const isInteger = Number.isInteger(steps);
    
    document.getElementById('towerResult').innerHTML = 
        `$\\log_{${base}} ${size} = ${isInteger ? steps : steps.toFixed(2)}$`;
    document.getElementById('towerSteps').innerHTML = `准备就绪：目标是把 ${size} 拆到 1。<br>每次除以 ${base}。`;
    renderMath();
}

function createTowerHTML(val, level) {
    const height = Math.max(40, Math.min(160, val * 5 + 20));
    const colorClass = level % 2 === 0 ? 'bg-indigo-500' : 'bg-indigo-400';
    
    return `
        <div class="tower-block flex flex-col items-center justify-end mx-2" id="block-group-${level}">
            <div class="${colorClass} w-16 rounded-t-lg shadow-md border-b border-indigo-700 flex items-center justify-center text-white font-bold transition-all duration-500" style="height: ${height}px">
                ${val}
            </div>
            <div class="mt-2 text-xs font-mono text-gray-500">Step ${level}</div>
        </div>
    `;
}

function animateDismantling() {
    const size = parseInt(document.getElementById('towerSize').value);
    const base = parseInt(document.getElementById('towerBase').value);
    const visual = document.getElementById('towerVisual');
    const stepBox = document.getElementById('towerSteps');
    
    let currentVal = size;
    let step = 0;
    
    visual.innerHTML = '';
    
    function nextStep() {
        const blockHTML = createTowerHTML(currentVal, step);
        
        if (step > 0) {
            const arrow = `<div class="text-gray-400 mb-8 mx-1 material-symbols-outlined animate-pulse">arrow_forward</div>`;
            visual.insertAdjacentHTML('beforeend', arrow);
        }
        visual.insertAdjacentHTML('beforeend', blockHTML);
        
        stepBox.innerHTML = `第 ${step} 步：当前剩下 ${currentVal}`;
        
        visual.parentElement.scrollLeft = visual.parentElement.scrollWidth;

        if (currentVal <= 1) {
            stepBox.innerHTML += `<br><strong>完成！共拆解 ${step} 次。所以 $\\log_{${base}} ${size} = ${step}$</strong>`;
            renderMath();
            return;
        }
        
        if (currentVal % base !== 0) {
            stepBox.innerHTML += `<br>警告：${currentVal} 不能被 ${base} 整除，演示停止（实际对数是非整数）。`;
            return;
        }
        
        currentVal = currentVal / base;
        step++;
        setTimeout(nextStep, 1000);
    }
    
    nextStep();
}

// ========== 运算法则可视化 ==========
function drawRuleVisuals() {
    const mViz = document.getElementById('multiplyViz');
    if (mViz) {
        mViz.innerHTML = `
            <div class="flex items-end gap-2 text-center">
                <div>
                    <div class="w-8 bg-blue-400 rounded-sm" style="height: 30px"></div>
                    <div class="text-xs mt-1">H=2</div>
                </div>
                <div class="text-xl text-gray-400 mb-2">+</div>
                <div>
                    <div class="w-8 bg-blue-500 rounded-sm" style="height: 45px"></div>
                    <div class="text-xs mt-1">H=3</div>
                </div>
                <div class="text-xl text-gray-400 mb-2">=</div>
                <div>
                    <div class="w-8 bg-green-500 rounded-sm" style="height: 75px"></div>
                    <div class="text-xs mt-1">H=5</div>
                </div>
            </div>
        `;
    }

    const dViz = document.getElementById('divideViz');
    if (dViz) {
        dViz.innerHTML = `
            <div class="flex items-end gap-2 text-center">
                <div>
                    <div class="w-8 bg-blue-600 rounded-sm" style="height: 75px"></div>
                    <div class="text-xs mt-1">H=5</div>
                </div>
                <div class="text-xl text-gray-400 mb-2">-</div>
                <div>
                    <div class="w-8 bg-blue-400 rounded-sm" style="height: 30px"></div>
                    <div class="text-xs mt-1">H=2</div>
                </div>
                <div class="text-xl text-gray-400 mb-2">=</div>
                <div>
                    <div class="w-8 bg-green-500 rounded-sm" style="height: 45px"></div>
                    <div class="text-xs mt-1">H=3</div>
                </div>
            </div>
        `;
    }
}

// ========== 返回链接切换 ==========
function toggleReturnLinks() {
    const links = document.getElementById('return-links');
    if (links.classList.contains('hidden')) {
        links.classList.remove('hidden');
        links.classList.add('flex');
        setTimeout(() => {
            links.classList.remove('opacity-0', 'scale-95');
            links.classList.add('opacity-100', 'scale-100');
        }, 10);
    } else {
        links.classList.remove('opacity-100', 'scale-100');
        links.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            links.classList.add('hidden');
            links.classList.remove('flex');
        }, 300);
    }
}

// ========== 事件监听与初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    // 滑块事件
    const slider = document.getElementById('baseSlider');
    if (slider) {
        slider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            document.getElementById('sliderValue').textContent = val;
            document.getElementById('base').value = val;
            calculate();
        });
    }

    // 窗口大小调整
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (currentPanel === 'basic') drawGraph();
        }, 100);
    });

    // 初始化
    calculate();
    updateTower();
    drawRuleVisuals();
});

