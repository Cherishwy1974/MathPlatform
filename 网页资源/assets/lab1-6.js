// lab1-6.js - 基本初等函数实验室专用脚本

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
        if (panelId === 'basic') {
            updateInverse();
            drawInverseGraph();
        }
        if (panelId === 'tower') {
            updateAnchor();
        }
    });
}

// --- 面板1: 反函数 ---
function updateInverse() {
    const base = document.getElementById('baseSelect').value;
    const x = parseFloat(document.getElementById('inputValue').value);
    
    let a = (base === 'e') ? Math.E : parseFloat(base);
    let y = Math.pow(a, x);
    
    // 格式化显示
    let xDisp = Math.round(x * 100) / 100;
    let yDisp = (Math.abs(y) < 0.001 || Math.abs(y) > 10000) ? y.toExponential(3) : Math.round(y * 1000) / 1000;
    
    // 对数验算
    let check = Math.log(y) / Math.log(a);
    let checkDisp = Math.round(check * 100) / 100;

    let baseStr = base;
    
    document.getElementById('expResult').innerHTML = `$${baseStr}^{${xDisp}} \\approx ${yDisp}$`;
    
    let logBaseStr = base === 'e' ? '\\ln' : `\\log_{${baseStr}}`;
    if (base === '10') logBaseStr = '\\lg';
    
    document.getElementById('logResult').innerHTML = `$${logBaseStr}(${yDisp}) \\approx ${checkDisp}$`;
    
    drawInverseGraph();
    renderMath();
}

function randomCalc() {
    const r = (Math.random() * 4 - 1).toFixed(1); // -1 到 3
    document.getElementById('inputValue').value = r;
    updateInverse();
}

function updateTrig() {
    const x = parseFloat(document.getElementById('angleInput').value);
    const y = Math.sin(x);
    const check = Math.asin(y); // 主值
    
    document.getElementById('sinResult').innerHTML = `$\\sin(${x}) \\approx ${y.toFixed(3)}$`;
    document.getElementById('asinResult').innerHTML = `$\\arcsin(${y.toFixed(3)}) \\approx ${check.toFixed(3)}$`;
    
    renderMath();
}

function drawInverseGraph() {
    const canvas = document.getElementById('inverseGraph');
    const container = document.getElementById('graph-container');
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

    // 坐标系
    const cx = width / 2;
    const cy = height / 2;
    const scale = 40; 

    // 坐标轴和箭头
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    
    // X轴
    ctx.beginPath();
    ctx.moveTo(10, cy); ctx.lineTo(width - 10, cy);
    ctx.stroke();
    // X箭头
    ctx.beginPath();
    ctx.moveTo(width - 15, cy - 5); ctx.lineTo(width - 10, cy); ctx.lineTo(width - 15, cy + 5);
    ctx.stroke();
    ctx.fillStyle = '#64748b';
    ctx.fillText('x', width - 20, cy + 15);
    ctx.fillText('0', cx - 10, cy + 15); // 原点

    // Y轴
    ctx.beginPath();
    ctx.moveTo(cx, height - 10); ctx.lineTo(cx, 10);
    ctx.stroke();
    // Y箭头
    ctx.beginPath();
    ctx.moveTo(cx - 5, 15); ctx.lineTo(cx, 10); ctx.lineTo(cx + 5, 15);
    ctx.stroke();
    ctx.fillText('y', cx + 10, 20);

    // y=x 对称线
    ctx.strokeStyle = '#cbd5e1';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, height); ctx.lineTo(width, 0);
    const size = Math.max(width, height);
    ctx.moveTo(cx - size/2, cy + size/2);
    ctx.lineTo(cx + size/2, cy - size/2);
    ctx.stroke();
    ctx.setLineDash([]);

    // 函数
    const baseStr = document.getElementById('baseSelect').value;
    let a = (baseStr === 'e') ? Math.E : parseFloat(baseStr);

    // 指数函数: y = a^x
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    let first = true;
    for (let px = 0; px < width; px += 2) {
        const x = (px - cx) / scale;
        const y = Math.pow(a, x);
        const py = cy - y * scale;
        if (py > -100 && py < height + 100) {
            if(first) { ctx.moveTo(px, py); first=false; }
            else ctx.lineTo(px, py);
        }
    }
    ctx.stroke();

    // 对数函数: y = log_a(x)
    ctx.strokeStyle = '#16a34a';
    ctx.beginPath();
    first = true;
    for (let py = 0; py < height; py += 2) {
        const y = (cy - py) / scale;
        const x = Math.pow(a, y); // 反函数关系
        const px = cx + x * scale;
        if (px > -100 && px < width + 100) {
            if(first) { ctx.moveTo(px, py); first=false; }
            else ctx.lineTo(px, py);
        }
    }
    ctx.stroke();

    // 滑块点
    const sliderVal = parseFloat(document.getElementById('graphSlider').value);
    document.getElementById('sliderVal').textContent = sliderVal.toFixed(1);

    // 指数函数上的点
    const expY = Math.pow(a, sliderVal);
    const p1x = cx + sliderVal * scale;
    const p1y = cy - expY * scale;

    // 对数函数上的点（镜像）
    const p2x = cx + expY * scale;
    const p2y = cy - sliderVal * scale;

    // 绘制点
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath(); ctx.arc(p1x, p1y, 5, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = '#16a34a';
    ctx.beginPath(); ctx.arc(p2x, p2y, 5, 0, Math.PI*2); ctx.fill();

    // 连接线
    ctx.strokeStyle = '#94a3b8';
    ctx.setLineDash([2, 2]);
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(p1x, p1y); ctx.lineTo(p2x, p2y); ctx.stroke();
    ctx.setLineDash([]);
}

// --- 面板2: 锚点 ---
function updateAnchor() {
    const family = document.getElementById('funcFamily').value;
    const a = parseFloat(document.getElementById('paramSlider').value);
    document.getElementById('paramVal').textContent = `a = ${a.toFixed(1)}`;
    
    const canvas = document.getElementById('anchorCanvas');
    const container = document.getElementById('anchor-container');
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

    const cx = width / 2;
    const cy = height / 2;
    const scale = 50;

    // 坐标轴
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(10, cy); ctx.lineTo(width - 10, cy); // X
    ctx.moveTo(width - 15, cy - 5); ctx.lineTo(width - 10, cy); ctx.lineTo(width - 15, cy + 5); // X箭头
    ctx.moveTo(cx, height - 10); ctx.lineTo(cx, 10); // Y
    ctx.moveTo(cx - 5, 15); ctx.lineTo(cx, 10); ctx.lineTo(cx + 5, 15); // Y箭头
    ctx.stroke();
    
    // 标签
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.fillText('x', width - 20, cy + 15);
    ctx.fillText('y', cx + 10, 20);
    ctx.fillText('O', cx - 15, cy + 15);

    // 函数和锚点
    let func, anchorX, anchorY, label;
    
    ctx.strokeStyle = '#0891b2';
    ctx.lineWidth = 3;
    ctx.beginPath();

    let first = true;
    if (family === 'power') { // y = x^a
        anchorX = 1; anchorY = 1;
        label = `锚点 (1, 1)`;
        for (let px = cx; px < width; px += 2) {
            const x = (px - cx) / scale;
            if (x < 0) continue;
            const y = Math.pow(x, a);
            const py = cy - y * scale;
            if (py > -100 && py < height + 100) {
                if (first) { ctx.moveTo(px, py); first=false; }
                else ctx.lineTo(px, py);
            }
        }
    } else if (family === 'exp') { // y = a^x
        anchorX = 0; anchorY = 1;
        label = `锚点 (0, 1)`;
        for (let px = 0; px < width; px += 2) {
            const x = (px - cx) / scale;
            const y = Math.pow(a, x);
            const py = cy - y * scale;
            if (py > -100 && py < height + 100) {
                if (first) { ctx.moveTo(px, py); first=false; }
                else ctx.lineTo(px, py);
            }
        }
    } else if (family === 'log') { // y = log_a x
        anchorX = 1; anchorY = 0;
        label = `锚点 (1, 0)`;
        for (let py = 0; py < height; py += 2) {
            const y = (cy - py) / scale;
            const x = Math.pow(a, y);
            const px = cx + x * scale;
            if (px > -100 && px < width + 100) {
                if (first) { ctx.moveTo(px, py); first=false; }
                else ctx.lineTo(px, py);
            }
        }
    }
    ctx.stroke();

    // 绘制锚点
    const ax = cx + anchorX * scale;
    const ay = cy - anchorY * scale;
    
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(ax, ay, 6, 0, Math.PI*2);
    ctx.fill();
    
    // 文本
    document.getElementById('anchorResult').innerHTML = 
        `<span class="text-red-600">${label}</span> <span class="text-gray-500 text-sm ml-2">参数 a 变化时，此点不动</span>`;
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
    updateInverse();
    updateAnchor();
});

window.addEventListener('resize', () => {
    if (currentPanel === 'basic') drawInverseGraph();
    if (currentPanel === 'tower') updateAnchor();
});

