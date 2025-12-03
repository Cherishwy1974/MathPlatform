// lab1-7.js - 复合函数实验室专用脚本

// --- 核心逻辑 ---
let currentPanel = 'first-jump';

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
        if (panelId === 'first-jump') firstJump();
        if (panelId === 'second-jump') secondJump();
        if (panelId === 'composite') compositeDemo();
    });
}

// --- 面板1: 第一跳 ---
function firstJump() {
    const x = parseFloat(document.getElementById('x-value').value);
    const func = document.getElementById('g-function').value;
    
    let u;
    let isValid = true;
    let msg = '';

    switch(func) {
        case 'cos': u = Math.cos(x); break;
        case 'sin': u = Math.sin(x); break;
        case 'exp': u = Math.exp(x); break;
        case 'log': 
            if(x <= 0) { isValid=false; msg='x必须>0'; }
            else u = Math.log(x);
            break;
        case 'sqrt':
            if(x < 0) { isValid=false; msg='x必须≥0'; }
            else u = Math.sqrt(x);
            break;
        case 'square': u = x*x; break;
    }

    const resDiv = document.getElementById('first-result');
    const stepDiv = document.getElementById('first-steps');

    if (isValid) {
        resDiv.innerHTML = `$u \\approx ${u.toFixed(3)}$`;
        stepDiv.innerHTML = `计算过程：$x=${x} \\xrightarrow{g} u=${u.toFixed(3)}$`;
        drawAxisCanvas('axisCanvas', x, u, 'x', 'u');
    } else {
        resDiv.innerHTML = '<span class="text-red-500">无定义</span>';
        stepDiv.innerHTML = `<span class="text-red-500">错误：${msg}</span>`;
        drawAxisCanvas('axisCanvas', x, null, 'x', 'u');
    }
    renderMath();
}

// --- 面板2: 第二跳 ---
function secondJump() {
    const u = parseFloat(document.getElementById('u-value').value);
    const func = document.getElementById('f-function').value;
    
    let y;
    let isValid = true;
    let msg = '';

    switch(func) {
        case 'square': y = u*u; break;
        case 'sqrt':
            if(u < 0) { isValid=false; msg='u必须≥0'; }
            else y = Math.sqrt(u);
            break;
        case 'exp': y = Math.exp(u); break;
        case 'log':
            if(u <= 0) { isValid=false; msg='u必须>0'; }
            else y = Math.log(u);
            break;
        case 'recip':
            if(u === 0) { isValid=false; msg='u不能为0'; }
            else y = 1/u;
            break;
    }

    const resDiv = document.getElementById('y-result');

    if (isValid) {
        resDiv.innerHTML = `$y \\approx ${y.toFixed(3)}$`;
    } else {
        resDiv.innerHTML = '<span class="text-red-500">无定义</span>';
    }
    
    drawAxisCanvas('secondAxisCanvas', u, isValid ? y : null, 'u', 'y');
    renderMath();
}

// --- 面板3: 复合函数 ---
function compositeDemo() {
    const x = parseFloat(document.getElementById('composite-x').value);
    document.getElementById('compXVal').textContent = `x = ${x}`;
    
    const gFunc = document.getElementById('comp-g').value;
    const fFunc = document.getElementById('comp-f').value;
    
    // 计算 u
    let u;
    switch(gFunc) {
        case 'sin': u = Math.sin(x); break;
        case 'cos': u = Math.cos(x); break;
        case 'exp': u = Math.exp(x); break;
        case 'sqrt': u = (x>=0) ? Math.sqrt(x) : NaN; break;
    }

    // 计算 y
    let y;
    if (!isNaN(u)) {
        switch(fFunc) {
            case 'cos': y = Math.cos(u); break;
            case 'sin': y = Math.sin(u); break;
            case 'square': y = u*u; break;
            case 'log': y = (u>0) ? Math.log(u) : NaN; break;
        }
    } else {
        y = NaN;
    }

    // 结果文本
    document.getElementById('composite-result').innerHTML = `输入 $x=${x}$ <br> $\\to u=${isNaN(u)?'无':u.toFixed(2)}$ <br> $\\to y=${isNaN(y)?'无':y.toFixed(2)}$`;
    
    renderMath();
    drawCompositeStatic(x, u, y);
}

// --- 可视化 ---

// 辅助函数绘制坐标轴
function drawAxisCanvas(canvasId, val1, val2, label1, label2) {
    const canvas = document.getElementById(canvasId);
    const container = canvas.parentElement;
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

    const cy1 = height * 0.3;
    const cy2 = height * 0.7;
    const padding = 40;
    const axisWidth = width - 2 * padding;

    // 绘制坐标轴
    drawSingleAxis(ctx, padding, cy1, axisWidth, label1);
    drawSingleAxis(ctx, padding, cy2, axisWidth, label2);

    // 绘制点和连接线
    const mapX = (v) => padding + (v + 5) / 10 * axisWidth;

    // 点1
    if (val1 !== null && !isNaN(val1)) {
        let px1 = mapX(val1);
        if (px1 < padding) px1 = padding;
        if (px1 > width - padding) px1 = width - padding;

        drawPoint(ctx, px1, cy1, '#4f46e5', `${label1}=${val1.toFixed(2)}`);

        // 点2
        if (val2 !== null && !isNaN(val2)) {
            let px2 = mapX(val2);
            if (px2 < padding) px2 = padding;
            if (px2 > width - padding) px2 = width - padding;

            drawPoint(ctx, px2, cy2, '#10b981', `${label2}=${val2.toFixed(2)}`);
            drawArrowCurve(ctx, px1, cy1 + 10, px2, cy2 - 10);
        }
    }
}

function drawSingleAxis(ctx, x, y, w, label) {
    ctx.beginPath();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y);
    ctx.stroke();
    
    // 箭头
    ctx.beginPath();
    ctx.moveTo(x + w, y);
    ctx.lineTo(x + w - 10, y - 5);
    ctx.lineTo(x + w - 10, y + 5);
    ctx.fill();

    // 零点标记（中心）
    const cx = x + w/2;
    ctx.beginPath();
    ctx.moveTo(cx, y-5); ctx.lineTo(cx, y+5); ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.fillText('0', cx - 4, y + 20);
    
    // 标签
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(label, x - 30, y + 5);
}

function drawPoint(ctx, x, y, color, text) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = color;
    ctx.font = '12px sans-serif';
    ctx.fillText(text, x - 20, y - 15);
}

function drawArrowCurve(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    // 贝塞尔曲线
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x1, y1 + 50, x2, y2 - 50, x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // 箭头
    ctx.beginPath();
    ctx.fillStyle = '#6366f1';
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - 5, y2 - 10);
    ctx.lineTo(x2 + 5, y2 - 10);
    ctx.fill();
}

// 复合函数可视化
function drawCompositeStatic(x, u, y) {
    const canvas = document.getElementById('compositeCanvas');
    const container = document.getElementById('composite-container');
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

    // 三条坐标轴
    const cy1 = height * 0.2;
    const cy2 = height * 0.5;
    const cy3 = height * 0.8;
    const padding = 60;
    const w = width - 2 * padding;

    drawSingleAxis(ctx, padding, cy1, w, 'x');
    drawSingleAxis(ctx, padding, cy2, w, 'u');
    drawSingleAxis(ctx, padding, cy3, w, 'y');

    // 映射函数
    const mapX = (v) => padding + (v + 5) / 10 * w;

    // 绘制点
    if (!isNaN(x)) {
        let px = mapX(x);
        drawPoint(ctx, px, cy1, '#4f46e5', x.toFixed(2));
        
        if (!isNaN(u)) {
            let pu = mapX(u);
            drawPoint(ctx, pu, cy2, '#ef4444', u.toFixed(2));
            drawArrowCurve(ctx, px, cy1+10, pu, cy2-10);
            
            if (!isNaN(y)) {
                let py = mapX(y);
                drawPoint(ctx, py, cy3, '#10b981', y.toFixed(2));
                drawArrowCurve(ctx, pu, cy2+10, py, cy3-10);
            }
        }
    }
}

function animateJumps() {
    const info = document.getElementById('compositeInfo');
    const x = parseFloat(document.getElementById('composite-x').value);
    
    // 重新计算
    const gFunc = document.getElementById('comp-g').value;
    const fFunc = document.getElementById('comp-f').value;
    
    let u;
    switch(gFunc) {
        case 'sin': u = Math.sin(x); break;
        case 'cos': u = Math.cos(x); break;
        case 'exp': u = Math.exp(x); break;
        case 'sqrt': u = (x>=0) ? Math.sqrt(x) : NaN; break;
    }
    
    let y;
    if (!isNaN(u)) {
        switch(fFunc) {
            case 'cos': y = Math.cos(u); break;
            case 'sin': y = Math.sin(u); break;
            case 'square': y = u*u; break;
            case 'log': y = (u>0) ? Math.log(u) : NaN; break;
        }
    } else { y = NaN; }

    info.textContent = '第一跳：x 映射到 u ...';
    
    // 两步重绘
    drawCompositePartial(x, null, null);
    
    setTimeout(() => {
        drawCompositePartial(x, u, null);
        info.textContent = '第二跳：u 映射到 y ...';
    }, 800);

    setTimeout(() => {
        drawCompositeStatic(x, u, y);
        info.textContent = '复合完成！';
    }, 1600);
}

function drawCompositePartial(x, u, y) {
    drawCompositeStatic(x, u, y);
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
    firstJump();
    secondJump();
    compositeDemo();
});

window.addEventListener('resize', () => {
    if (currentPanel === 'first-jump') firstJump();
    if (currentPanel === 'second-jump') secondJump();
    if (currentPanel === 'composite') compositeDemo();
});

