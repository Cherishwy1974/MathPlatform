// lab1-5.js - 函数概念实验室专用脚本

// --- 核心逻辑 ---
let currentPanel = 'basic';

// MathJax渲染辅助函数
function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('MathJax Error:', err));
    }
}

// 导航切换
function switchPanel(panelId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'font-medium');
        btn.classList.add('text-gray-600', 'hover:bg-gray-100');
    });
    const activeBtn = document.querySelector(`button[onclick="switchPanel('${panelId}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-600', 'hover:bg-gray-100');
        activeBtn.classList.add('bg-indigo-50', 'text-indigo-700', 'font-medium');
    }

    document.querySelectorAll('.panel-content').forEach(el => el.classList.remove('active'));
    document.getElementById(panelId).classList.add('active');
    
    currentPanel = panelId;

    requestAnimationFrame(() => {
        renderMath();
        if (panelId === 'basic') drawMapping();
    });
}

// --- 面板1: 基础概念 ---
function updateBasic() {
    const raw = document.getElementById('rawMaterial').value;
    const method = document.getElementById('processMethod').value;
    
    // 生成结果字符串
    let product = '';
    if (method === '豆浆') product = raw + '浆';
    else if (method === '豆粉') product = raw + '粉';
    else if (method === '豆芽') product = raw + '芽';
    
    document.getElementById('basicResult').innerHTML = `$f(\\text{${raw}}) = \\text{${product}}$`;
    renderMath();
}

function randomBasic() {
    const raws = ['黄豆', '黑豆', '红豆', '绿豆'];
    const methods = ['豆浆', '豆粉', '豆芽'];
    
    document.getElementById('rawMaterial').value = raws[Math.floor(Math.random() * raws.length)];
    document.getElementById('processMethod').value = methods[Math.floor(Math.random() * methods.length)];
    updateBasic();
}

function drawMapping() {
    const canvas = document.getElementById('mappingCanvas');
    const container = document.getElementById('mapping-container');
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const width = container.clientWidth;
    const height = 300;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const count = parseInt(document.getElementById('materialCount').value);
    document.getElementById('sliderValue').textContent = count;

    // 数据
    const materials = ['黄豆', '黑豆', '红豆', '绿豆', '花生'];
    const products = ['黄豆浆', '黑豆浆', '红豆浆', '绿豆浆', '花生浆'];

    // 布局
    const setWidth = 100;
    const setHeight = 220;
    const domainX = width * 0.25 - setWidth/2;
    const rangeX = width * 0.75 - setWidth/2;
    const topY = (height - setHeight) / 2;

    // 绘制集合（椭圆）
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    
    // 定义域集合
    ctx.beginPath();
    ctx.ellipse(domainX + setWidth/2, height/2, setWidth/2 + 20, setHeight/2 + 20, 0, 0, 2 * Math.PI);
    ctx.fillStyle = '#f8fafc';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('定义域 X', domainX + setWidth/2, topY - 30);

    // 值域集合
    ctx.beginPath();
    ctx.ellipse(rangeX + setWidth/2, height/2, setWidth/2 + 20, setHeight/2 + 20, 0, 0, 2 * Math.PI);
    ctx.fillStyle = '#f8fafc';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.fillText('值域 Y', rangeX + setWidth/2, topY - 30);

    // 绘制元素和箭头
    const stepY = setHeight / (count + 1);
    
    for (let i = 0; i < count; i++) {
        const y = topY + (i + 1) * stepY;
        const matX = domainX + setWidth/2;
        const prodX = rangeX + setWidth/2;

        // 箭头
        ctx.beginPath();
        ctx.moveTo(matX + 25, y);
        ctx.lineTo(prodX - 35, y);
        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 箭头头部
        ctx.beginPath();
        ctx.moveTo(prodX - 40, y - 4);
        ctx.lineTo(prodX - 35, y);
        ctx.lineTo(prodX - 40, y + 4);
        ctx.fillStyle = '#818cf8';
        ctx.fill();

        // 元素点
        ctx.beginPath();
        ctx.arc(matX, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#4f46e5';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(prodX, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#10b981';
        ctx.fill();

        // 标签
        ctx.fillStyle = '#1e293b';
        ctx.font = '12px sans-serif';
        ctx.fillText(materials[i], matX - 40, y + 4);
        ctx.fillText(products[i], prodX + 45, y + 4);
    }
    
    // 函数标签
    ctx.fillStyle = '#6366f1';
    ctx.font = 'italic bold 16px serif';
    ctx.fillText('f', width/2, height/2 - 10);
}

// --- 面板2: 豆浆机逻辑 ---
function runMachine() {
    const input = document.getElementById('machineInput').value;
    const program = document.getElementById('machineProgram').value;
    const logBox = document.getElementById('machineLog');
    const visualBox = document.getElementById('machineVisual');
    const resultBox = document.getElementById('machineResult');
    
    // 清除之前的内容
    visualBox.innerHTML = '';
    resultBox.textContent = '';
    logBox.innerHTML = '';

    const logs = [
        `> 系统就绪`,
        `> 投入原料：${input} (定义域元素)`,
        `> 加载程序：${program} (对应法则)`,
        `> 正在研磨...`,
        `> 正在加热...`,
        `> 加工完成！`
    ];

    const visualSteps = [
        { icon: 'input', text: '投入原料', sub: input, color: 'text-indigo-600' },
        { icon: 'settings_motion', text: '研磨中', sub: '法则执行', color: 'text-orange-500' },
        { icon: 'local_fire_department', text: '加热中', sub: '状态转换', color: 'text-red-500' },
        { icon: 'coffee', text: '出杯', sub: `${program}${input.replace('杂粮','')}浆`, color: 'text-green-600' }
    ];

    let step = 0;
    
    function nextStep() {
        if (step < logs.length) {
            logBox.innerHTML += `<div>${logs[step]}</div>`;
            logBox.scrollTop = logBox.scrollHeight;
        }

        if (step > 0 && step <= 4) {
            const vIndex = step - 1;
            const vData = visualSteps[vIndex];
            
            // 简单的可视化更新
            visualBox.innerHTML = `
                <div class="flex flex-col items-center justify-center animate-pulse">
                    <span class="material-symbols-outlined text-7xl mb-4 ${vData.color}">${vData.icon}</span>
                    <div class="text-xl font-bold text-gray-800">${vData.text}</div>
                    <div class="text-sm text-gray-500">${vData.sub}</div>
                </div>
            `;
        }

        if (step === 5) {
            resultBox.textContent = `产出成品：${program}${input.replace('杂粮','')}浆`;
            // 最终静态可视化
            visualBox.innerHTML = `
                <div class="flex flex-col items-center justify-center">
                    <span class="material-symbols-outlined text-8xl mb-4 text-green-600">check_circle</span>
                    <div class="text-lg font-bold text-gray-700">完成</div>
                </div>
            `;
            return;
        }

        step++;
        setTimeout(nextStep, 800);
    }

    nextStep();
}

// 返回链接切换
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

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    updateBasic();
    drawMapping();
});

window.addEventListener('resize', () => {
    if (currentPanel === 'basic') drawMapping();
});

