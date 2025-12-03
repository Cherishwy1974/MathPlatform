// lab2-8.js - 函数增量实验室脚本

// --- 全局状态 ---
let state = {
    visualFunc: 'x^2',
    x0: 1.0,
    dx: 1.0,
    animating: false
};

// --- 标签页切换 ---
function switchTab(tabId) {
    // 桌面端导航
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.id === `btn-${tabId}`) {
            btn.classList.add('bg-indigo-50', 'text-indigo-700');
            btn.classList.remove('text-gray-600', 'hover:bg-gray-50');
        } else {
            btn.classList.remove('bg-indigo-50', 'text-indigo-700');
            btn.classList.add('text-gray-600', 'hover:bg-gray-50');
        }
    });

    // 移动端导航
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        if (btn.dataset.target === tabId) {
            btn.classList.add('text-indigo-600');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('text-indigo-600');
            btn.classList.add('text-gray-400');
        }
    });

    // 内容切换
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');

    // 渲染Canvas
    if (tabId === 'concept') {
        requestAnimationFrame(drawConceptGraph);
    } else if (tabId === 'visual') {
        requestAnimationFrame(updateVisualGraph);
    }
}

// --- Canvas辅助函数 ---
function setupCanvas(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    return { ctx, width: rect.width, height: rect.height };
}

function drawAxes(ctx, width, height, originX, originY) {
    ctx.strokeStyle = '#374151'; // Gray-700
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    
    // X轴
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    // X轴箭头
    ctx.lineTo(width - 8, originY - 4);
    ctx.moveTo(width, originY);
    ctx.lineTo(width - 8, originY + 4);

    // Y轴
    ctx.moveTo(originX, height);
    ctx.lineTo(originX, 0);
    // Y轴箭头
    ctx.lineTo(originX - 4, 8);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX + 4, 8);
    
    ctx.stroke();

    // 轴标签
    ctx.fillStyle = '#1f2937';
    ctx.font = '14px sans-serif';
    ctx.fillText('x', width - 15, originY + 20);
    ctx.fillText('y', originX + 10, 15);
    ctx.fillText('O', originX - 15, originY + 15);
}

function drawGrid(ctx, width, height, scale, originX, originY) {
    ctx.strokeStyle = '#f3f4f6';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let x = originX; x < width; x += scale) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
    for(let x = originX; x > 0; x -= scale) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
    for(let y = originY; y < height; y += scale) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
    for(let y = originY; y > 0; y -= scale) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
    ctx.stroke();
}

// --- 概念图绘制 ---
function drawConceptGraph() {
    const { ctx, width, height } = setupCanvas('conceptCanvas');
    const originX = 40;
    const originY = height - 40;
    const scaleX = (width - 80) / 4; 
    const scaleY = (height - 80) / 4; 

    ctx.clearRect(0, 0, width, height);
    drawAxes(ctx, width, height, originX, originY);

    // 绘制 y = x²/2
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    for (let px = 0; px <= width; px+=2) {
        const x = (px - originX) / scaleX;
        const y = (x * x) / 2;
        const py = originY - y * scaleY;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // 点
    const x0 = 1.5;
    const dx = 1.0;
    const x1 = x0 + dx;
    const y0 = (x0*x0)/2;
    const y1 = (x1*x1)/2;

    const p0 = { x: originX + x0*scaleX, y: originY - y0*scaleY };
    const p1 = { x: originX + x1*scaleX, y: originY - y1*scaleY };
    const pCorner = { x: p1.x, y: p0.y };

    // 三角形
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#9ca3af';
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(pCorner.x, pCorner.y); // 水平
    ctx.lineTo(p1.x, p1.y); // 垂直
    ctx.stroke();
    ctx.setLineDash([]);

    // 增量标签
    ctx.fillStyle = '#10b981'; // 绿色
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Δx', (p0.x + pCorner.x)/2 - 10, pCorner.y + 20);
    
    ctx.fillStyle = '#ef4444'; // 红色
    ctx.fillText('Δy', pCorner.x + 10, (p1.y + pCorner.y)/2);

    // 点
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath(); ctx.arc(p0.x, p0.y, 5, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(p1.x, p1.y, 5, 0, Math.PI*2); ctx.fill();

    // 点标签
    ctx.fillStyle = '#374151';
    ctx.font = '12px sans-serif';
    ctx.fillText('P(x₀, f(x₀))', p0.x - 60, p0.y - 10);
    ctx.fillText('Q(x₀+Δx, f(x₀+Δx))', p1.x - 80, p1.y - 10);
}

// --- 可视化实验 ---
function setVisualFunc(func) {
    state.visualFunc = func;
    document.querySelectorAll('.func-btn').forEach(btn => {
        if (btn.innerText.includes(func.replace('x^2', 'x²').replace('1/x', '1/x').replace('sqrt', '√'))) {
            btn.classList.add('bg-indigo-50', 'text-indigo-700', 'border-indigo-200');
            btn.classList.remove('text-gray-600', 'hover:bg-gray-50', 'border-gray-200');
        } else {
            btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'border-indigo-200');
            btn.classList.add('text-gray-600', 'hover:bg-gray-50', 'border-gray-200');
        }
    });
    updateVisualGraph();
}

function getFuncValue(funcStr, x) {
    switch(funcStr) {
        case 'x': return x;
        case 'x^2': return x * x;
        case 'sqrt': return x >= 0 ? Math.sqrt(x) : NaN;
        case '1/x': return x !== 0 ? 1/x : NaN;
        default: return x;
    }
}

function updateVisualGraph() {
    const { ctx, width, height } = setupCanvas('visualCanvas');
    const originX = width / 2;
    const originY = height / 2;
    const scale = 50; // 每单位像素数

    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, width, height, scale, originX, originY);
    drawAxes(ctx, width, height, originX, originY);

    // 绘制函数
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    
    let started = false;
    for (let px = 0; px <= width; px += 2) {
        const x = (px - originX) / scale;
        const y = getFuncValue(state.visualFunc, x);
        
        if (isNaN(y) || Math.abs(y) > 10) {
            started = false;
            continue;
        }

        const py = originY - y * scale;
        if (!started) {
            ctx.moveTo(px, py);
            started = true;
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();

    // 计算点
    const x0 = state.x0;
    const dx = state.dx;
    const x1 = x0 + dx;
    const y0 = getFuncValue(state.visualFunc, x0);
    const y1 = getFuncValue(state.visualFunc, x1);
    const dy = y1 - y0;

    // 更新数据面板
    document.getElementById('fx0Val').textContent = isNaN(y0) ? '-' : y0.toFixed(2);
    document.getElementById('fx1Val').textContent = isNaN(y1) ? '-' : y1.toFixed(2);
    document.getElementById('dyVal').textContent = isNaN(dy) ? '-' : dy.toFixed(2);

    if (isNaN(y0) || isNaN(y1)) return;

    const p0 = { x: originX + x0 * scale, y: originY - y0 * scale };
    const p1 = { x: originX + x1 * scale, y: originY - y1 * scale };
    const pCorner = { x: p1.x, y: p0.y };

    // 绘制三角形
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#9ca3af';
    
    // 水平线(dx)
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(pCorner.x, pCorner.y);
    ctx.stroke();

    // 垂直线(dy)
    ctx.beginPath();
    ctx.moveTo(pCorner.x, pCorner.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();
    ctx.setLineDash([]);

    // 高亮线
    // dx线(绿色)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(pCorner.x, pCorner.y);
    ctx.stroke();

    // dy线(红色)
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(pCorner.x, pCorner.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();

    // 点
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath(); ctx.arc(p0.x, p0.y, 5, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(p1.x, p1.y, 5, 0, Math.PI*2); ctx.fill();

    // 标签
    ctx.fillStyle = '#374151';
    ctx.font = '12px sans-serif';
    const midX = (p0.x + pCorner.x) / 2;
    ctx.fillText('Δx', midX - 8, pCorner.y + (dx >= 0 ? 15 : -5));
    
    const midY = (p1.y + pCorner.y) / 2;
    ctx.fillText('Δy', pCorner.x + (dx >= 0 ? 5 : -20), midY + 4);
}

function animateIncrement() {
    if (state.animating) return;
    state.animating = true;
    const targetDx = parseFloat(document.getElementById('dxSlider').value);
    let currentDx = 0;
    const step = targetDx / 50;
    
    function frame() {
        currentDx += step;
        if (Math.abs(currentDx) >= Math.abs(targetDx)) {
            state.dx = targetDx;
            state.animating = false;
            updateVisualGraph();
            return;
        }
        state.dx = currentDx;
        updateVisualGraph();
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

// --- 练习逻辑 ---
function checkAnswer(qId, correctVal) {
    const input = document.getElementById(`ans${qId}`);
    const feedback = document.getElementById(`feedback${qId}`);
    const solution = document.getElementById(`sol${qId}`);
    const userVal = parseFloat(input.value);

    if (Math.abs(userVal - correctVal) < 0.01) {
        feedback.textContent = "✅ 正确";
        feedback.className = "text-sm font-bold text-green-600 ml-2 animate-bounce";
        solution.classList.remove('hidden');
    } else {
        feedback.textContent = "❌ 错误，请重试";
        feedback.className = "text-sm font-bold text-red-600 ml-2";
        solution.classList.add('hidden');
    }
    feedback.classList.remove('hidden');
}

// --- 返回链接切换 ---
function toggleReturnLinks() {
    const p = document.querySelector('.return-links');
    if (!p) return;
    if (p.style.display === 'flex') {
        p.style.opacity = '0';
        setTimeout(() => p.style.display = 'none', 160);
    } else {
        p.style.display = 'flex';
        requestAnimationFrame(() => p.style.opacity = '1');
    }
}

// --- 初始化 ---
window.addEventListener('load', () => {
    // 滑块事件
    document.getElementById('x0Slider').addEventListener('input', (e) => {
        state.x0 = parseFloat(e.target.value);
        document.getElementById('x0Val').textContent = state.x0.toFixed(1);
        updateVisualGraph();
    });

    document.getElementById('dxSlider').addEventListener('input', (e) => {
        state.dx = parseFloat(e.target.value);
        document.getElementById('dxVal').textContent = state.dx.toFixed(1);
        updateVisualGraph();
    });

    // 初始渲染
    switchTab('concept');
});

window.addEventListener('resize', () => {
    if (!document.getElementById('tab-concept').classList.contains('hidden')) drawConceptGraph();
    if (!document.getElementById('tab-visual').classList.contains('hidden')) updateVisualGraph();
});

// --- MathJax 行内公式修复 ---
function fixInlineMath() {
    document.querySelectorAll('mjx-container').forEach(el => {
        if (!el.hasAttribute('display')) {
            el.style.display = 'inline';
            el.style.margin = '0';
            el.style.verticalAlign = 'middle';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.MathJax) {
        MathJax.startup.promise.then(fixInlineMath);
    }
});

const mathObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
            fixInlineMath();
        }
    });
});
mathObserver.observe(document.body, { childList: true, subtree: true });

