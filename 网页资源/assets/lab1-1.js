/**
 * 指数运算实验室 - JavaScript 文件
 * lab1-1.js
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
        if (panelId === 'fraction') {
            drawSquare();
            drawCube();
        }
    });
}

// ========== 基础计算逻辑 ==========
function calculate() {
    const baseInput = document.getElementById('base');
    const expInput = document.getElementById('exp');
    const base = parseFloat(baseInput.value);
    const exp = parseFloat(expInput.value);
    
    if (isNaN(base) || isNaN(exp)) {
        document.getElementById('result').innerHTML = '<span class="text-red-500">请输入有效数字</span>';
        return;
    }
    
    const result = Math.pow(base, exp);
    const displayResult = Number.isInteger(result) ? result : result.toFixed(3);
    
    document.getElementById('result').innerHTML = `$${base}^{${exp}} = ${displayResult}$`;
    
    // 步骤解析逻辑
    let stepText = '';
    if (exp === 0) {
        stepText = '$a^0 = 1$ (任何非零数的零次幂为1)';
    } else if (exp === 1) {
        stepText = '$a^1 = a$ (任何数的一次幂等于其本身)';
    } else if (exp < 0) {
        stepText = `$${base}^{${exp}} = \\frac{1}{${base}^{${-exp}}} = \\frac{1}{${Math.pow(base, -exp).toFixed(3)}} = ${result.toFixed(3)}$`;
    } else if (Number.isInteger(exp) && exp > 0 && exp < 10) {
        stepText = `$${base}^{${exp}} = ` + Array(exp).fill(base).join(' \\times ') + ` = ${result}$`;
    } else {
        stepText = `$${base}^{${exp}} \\approx ${result.toFixed(4)}$`;
    }
    document.getElementById('steps').innerHTML = stepText;
    
    // 同步滑块
    if (base >= 0.1 && base <= 5) {
        document.getElementById('baseSlider').value = base;
        document.getElementById('sliderValue').textContent = base.toFixed(1);
    }
    
    drawGraph();
    renderMath();
}

// ========== 随机计算 ==========
function randomCalc() {
    const rBase = (Math.random() * 4 + 1).toFixed(1); // 1.0 到 5.0
    const rExp = Math.floor(Math.random() * 7 - 2);   // -2 到 4 整数
    document.getElementById('base').value = rBase;
    document.getElementById('exp').value = rExp;
    calculate();
}

// ========== 函数图像绘制 (Canvas) ==========
function drawGraph() {
    const canvas = document.getElementById('graph');
    const container = document.getElementById('graph-container');
    if (!canvas || !container || container.clientWidth === 0) return;

    // 调整画布尺寸
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
    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) / 8;

    // 绘制网格
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    
    for (let x = cx % scale; x < width; x += scale) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = cy % scale; y < height; y += scale) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    // 绘制坐标轴
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height);
    ctx.stroke();

    // 绘制函数曲线
    const base = parseFloat(document.getElementById('base').value) || 2;
    
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 3;
    
    let firstPoint = true;
    for (let px = 0; px < width; px += 2) {
        const x = (px - cx) / scale;
        const y = Math.pow(base, x);
        const py = cy - (y * scale);
        
        if (py > -100 && py < height + 100) {
            if (firstPoint) {
                ctx.moveTo(px, py);
                firstPoint = false;
            } else {
                ctx.lineTo(px, py);
            }
        }
    }
    ctx.stroke();

    // 标记点 (0, 1)
    const p0x = cx;
    const p0y = cy - scale;
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(p0x, p0y, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px sans-serif';
    ctx.fillText('(0, 1)', p0x + 8, p0y);

    // 更新函数描述
    const desc = document.getElementById('funcDesc');
    if (base > 1) {
        desc.innerHTML = `$y = ${base.toFixed(1)}^x$ (单调递增)`;
    } else if (base === 1) {
        desc.innerHTML = `$y = 1^x = 1$ (常函数)`;
    } else {
        desc.innerHTML = `$y = ${base.toFixed(1)}^x$ (单调递减)`;
    }
}

// ========== 平方根可视化 (点阵) ==========
function drawSquare() {
    const num = parseInt(document.getElementById('sqNum').value);
    const root = Math.sqrt(num);
    const grid = document.getElementById('squareGrid');
    
    grid.innerHTML = '';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${root}, 1fr)`;
    grid.style.gap = '8px';
    grid.style.width = 'fit-content';
    
    for (let i = 0; i < num; i++) {
        const dot = document.createElement('div');
        dot.className = 'w-6 h-6 rounded-full bg-indigo-500 shadow-sm transform scale-0 animate-pop';
        dot.style.animation = `popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${i * 0.02}s`;
        grid.appendChild(dot);
    }

    document.getElementById('sqExp').innerHTML = 
        `<div class="font-bold text-lg mb-1">${num}个点排成 ${root} × ${root} 正方形</div>` +
        `<div>边长 = ${root}，即 $${num}^{\\frac{1}{2}} = \\sqrt{${num}} = ${root}$</div>`;
    renderMath();
}

// ========== 立方根可视化 (等轴测图) ==========
function drawCube() {
    const num = parseInt(document.getElementById('cbNum').value);
    const root = Math.cbrt(num);
    const canvas = document.getElementById('cubeCanvas');
    const container = document.getElementById('cube-container');
    
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
    
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2 + (root * 10);
    const size = Math.min(w, h) / (root * 4);
    
    const isoX = (x, y) => (x - y) * size * Math.cos(Math.PI / 6);
    const isoY = (x, y, z) => (x + y) * size * Math.sin(Math.PI / 6) - z * size;

    ctx.lineWidth = 1;
    ctx.lineJoin = 'round';

    // 绘制方块（画家算法：从后到前）
    for (let z = 0; z < root; z++) {
        for (let y = root - 1; y >= 0; y--) {
            for (let x = root - 1; x >= 0; x--) {
                const px = cx + isoX(x, y);
                const py = cy + isoY(x, y, z);
                
                const topColor = '#818cf8';
                const rightColor = '#6366f1';
                const leftColor = '#4f46e5';
                const strokeColor = '#312e81';
                
                // 顶面
                ctx.fillStyle = topColor;
                ctx.strokeStyle = strokeColor;
                ctx.beginPath();
                ctx.moveTo(px, py - size);
                ctx.lineTo(px + size * 0.866, py - size * 1.5);
                ctx.lineTo(px, py - size * 2);
                ctx.lineTo(px - size * 0.866, py - size * 1.5);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // 右面
                ctx.fillStyle = rightColor;
                ctx.beginPath();
                ctx.moveTo(px + size * 0.866, py - size * 1.5);
                ctx.lineTo(px + size * 0.866, py - size * 0.5);
                ctx.lineTo(px, py);
                ctx.lineTo(px, py - size);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // 左面
                ctx.fillStyle = leftColor;
                ctx.beginPath();
                ctx.moveTo(px, py - size);
                ctx.lineTo(px, py);
                ctx.lineTo(px - size * 0.866, py - size * 0.5);
                ctx.lineTo(px - size * 0.866, py - size * 1.5);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }
    }
    
    document.getElementById('cbExp').innerHTML = 
        `<div class="font-bold text-lg mb-1">${num}个方块堆叠为 ${root} × ${root} × ${root} 立方体</div>` +
        `<div>棱长 = ${root}，即 $${num}^{\\frac{1}{3}} = \\sqrt[3]{${num}} = ${root}$</div>`;
    renderMath();
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
            document.getElementById('sliderValue').textContent = val.toFixed(1);
            document.getElementById('base').value = val;
            calculate();
        });
    }

    // 窗口大小调整
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (currentPanel === 'basic') drawGraph();
            if (currentPanel === 'fraction') drawCube();
        }, 100);
    });

    // 初始化计算和绘图
    calculate();
    drawGraph();
});

