// lab3-1.js - 导数定义与几何意义可视化脚本

// --- 全局状态 ---
let state = {
    currentFunc: 'x^2',
    x0: 1.0,
    dx: 1.5,
    animating: false,
    tangentX: 0.5
};

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
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    
    // X轴
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.lineTo(width - 8, originY - 4);
    ctx.moveTo(width, originY);
    ctx.lineTo(width - 8, originY + 4);

    // Y轴
    ctx.moveTo(originX, height);
    ctx.lineTo(originX, 0);
    ctx.lineTo(originX - 4, 8);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX + 4, 8);
    
    ctx.stroke();
    
    // 标签
    ctx.fillStyle = '#475569';
    ctx.font = '12px sans-serif';
    ctx.fillText('x', width - 15, originY + 20);
    ctx.fillText('y', originX + 10, 15);
    ctx.fillText('O', originX - 15, originY + 15);
}

function toCanvasCoords(x, y, originX, originY, scaleX, scaleY) {
    return {
        px: originX + x * scaleX,
        py: originY - y * scaleY
    };
}

// --- 函数定义 ---
const FUNCS = {
    'x^2': { f: x => x*x, df: x => 2*x },
    'x^3/3': { f: x => (x*x*x)/3, df: x => x*x },
    'sin': { f: x => Math.sin(x), df: x => Math.cos(x) },
    'exp': { f: x => Math.exp(0.5*x), df: x => 0.5*Math.exp(0.5*x) }
};

// --- 概念标签页 ---
function drawConcept() {
    const { ctx, width, height } = setupCanvas('conceptCanvas');
    const originX = width * 0.2;
    const originY = height * 0.8;
    const scaleX = width / 6;
    const scaleY = height / 6;

    ctx.clearRect(0, 0, width, height);
    drawAxes(ctx, width, height, originX, originY);

    // 绘制 f(x) = x^2/4
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    for(let px=0; px<=width; px+=2) {
        const x = (px - originX) / scaleX;
        const y = (x*x)/4;
        const py = originY - y * scaleY;
        if (px===0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // P点和Q点
    const x0 = 2, dx = 1.5;
    const y0 = (x0*x0)/4;
    const y1 = ((x0+dx)*(x0+dx))/4;
    
    const p0 = toCanvasCoords(x0, y0, originX, originY, scaleX, scaleY);
    const p1 = toCanvasCoords(x0+dx, y1, originX, originY, scaleX, scaleY);

    // 割线
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    const slope = (p1.py - p0.py) / (p1.px - p0.px);
    const startX = 0;
    const startY = p0.py - slope * (p0.px - startX);
    const endX = width;
    const endY = p0.py + slope * (endX - p0.px);
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);

    // 切线（近似）
    const slopeT = -((2*x0)/4) * scaleY / scaleX;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    const tanStartX = p0.px - 100;
    const tanStartY = p0.py - slopeT * (-100);
    const tanEndX = p0.px + 100;
    const tanEndY = p0.py - slopeT * (100);
    ctx.beginPath();
    ctx.moveTo(tanStartX, tanStartY);
    ctx.lineTo(tanEndX, tanEndY);
    ctx.stroke();

    // 绘制点
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath(); ctx.arc(p0.px, p0.py, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillText('P', p0.px - 10, p0.py - 10);
    
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath(); ctx.arc(p1.px, p1.py, 5, 0, Math.PI*2); ctx.fill();
    ctx.fillText('Q', p1.px + 10, p1.py - 10);
}

// --- 极限标签页 ---
function setFunc(name) {
    state.currentFunc = name;
    document.querySelectorAll('.func-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'border-indigo-200', 'active');
        btn.classList.add('text-gray-600', 'border-gray-200');
    });
    event.target.closest('.func-btn').classList.add('bg-indigo-50', 'text-indigo-700', 'border-indigo-200', 'active');
    event.target.closest('.func-btn').classList.remove('text-gray-600', 'border-gray-200');
    drawLimit();
}

function updateLimitParams() {
    state.x0 = parseFloat(document.getElementById('x0Slider').value);
    state.dx = parseFloat(document.getElementById('dxSlider').value);
    document.getElementById('x0Val').innerText = state.x0.toFixed(1);
    document.getElementById('dxVal').innerText = state.dx.toFixed(2);
    drawLimit();
}

function drawLimit() {
    const { ctx, width, height } = setupCanvas('limitCanvas');
    const originX = width / 2;
    const originY = height / 2;
    const scaleX = width / 8;
    const scaleY = height / 8;

    ctx.clearRect(0, 0, width, height);
    drawAxes(ctx, width, height, originX, originY);

    const funcObj = FUNCS[state.currentFunc];
    
    // 绘制函数
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    for (let px = 0; px <= width; px+=2) {
        const x = (px - originX) / scaleX;
        const y = funcObj.f(x);
        const py = originY - y * scaleY;
        if (py > -100 && py < height + 100) {
            if (px===0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
    }
    ctx.stroke();

    // 点
    const x0 = state.x0;
    const dx = state.dx;
    const x1 = x0 + dx;
    const y0 = funcObj.f(x0);
    const y1 = funcObj.f(x1);
    
    const p0 = toCanvasCoords(x0, y0, originX, originY, scaleX, scaleY);
    const p1 = toCanvasCoords(x1, y1, originX, originY, scaleX, scaleY);

    // 割线
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    
    const m_secant = (p1.py - p0.py) / (p1.px - p0.px);
    if(isFinite(m_secant)) {
        ctx.beginPath();
        ctx.moveTo(0, p0.py - m_secant * (0 - p0.px));
        ctx.lineTo(width, p0.py - m_secant * (width - p0.px));
        ctx.stroke();
    }

    // 切线（参考）
    const m_tangent = -funcObj.df(x0) * scaleY / scaleX;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, p0.py - m_tangent * (0 - p0.px));
    ctx.lineTo(width, p0.py - m_tangent * (width - p0.px));
    ctx.stroke();
    ctx.setLineDash([]);

    // 绘制点
    ctx.fillStyle = '#ef4444';
    ctx.beginPath(); ctx.arc(p0.px, p0.py, 5, 0, Math.PI*2); ctx.fill();
    
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath(); ctx.arc(p1.px, p1.py, 5, 0, Math.PI*2); ctx.fill();

    // 更新数据
    const dy = y1 - y0;
    const avgRate = dy / dx;
    const instRate = funcObj.df(x0);
    document.getElementById('avgRateVal').innerText = avgRate.toFixed(4);
    document.getElementById('instRateVal').innerText = instRate.toFixed(4);
}

function animateLimit() {
    if (state.animating) return;
    state.animating = true;
    let currentDx = 2.0;
    
    function loop() {
        if (!state.animating) return;
        currentDx *= 0.95;
        if (currentDx < 0.01) {
            currentDx = 0.01;
            state.animating = false;
        }
        
        state.dx = currentDx;
        document.getElementById('dxSlider').value = currentDx;
        document.getElementById('dxVal').innerText = currentDx.toFixed(2);
        drawLimit();
        
        if (state.animating) requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

// --- 切线标签页 ---
function drawTangent() {
    const { ctx, width, height } = setupCanvas('tangentCanvas');
    const originX = width / 2;
    const originY = height / 2;
    const scaleX = width / 8;
    const scaleY = height / 8;

    ctx.clearRect(0, 0, width, height);
    drawAxes(ctx, width, height, originX, originY);

    const funcObj = FUNCS[state.currentFunc];
    const x0 = state.tangentX;

    // 绘制 f(x)
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    for (let px = 0; px <= width; px+=2) {
        const x = (px - originX) / scaleX;
        const y = funcObj.f(x);
        const py = originY - y * scaleY;
        if (py > -100 && py < height + 100) {
            if (px===0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
    }
    ctx.stroke();
    
    const y0 = funcObj.f(x0);
    const slope = funcObj.df(x0);
    const p0 = toCanvasCoords(x0, y0, originX, originY, scaleX, scaleY);
    
    // 绘制切线
    const m_draw = -slope * scaleY / scaleX;
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, p0.py - m_draw * (0 - p0.px));
    ctx.lineTo(width, p0.py - m_draw * (width - p0.px));
    ctx.stroke();

    // 绘制点
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath(); ctx.arc(p0.px, p0.py, 6, 0, Math.PI*2); ctx.fill();

    // 更新信息
    document.getElementById('tanX').innerText = x0.toFixed(2);
    document.getElementById('tanSlope').innerText = slope.toFixed(2);
}

function handleTangentInteract(e) {
    const canvas = document.getElementById('tangentCanvas');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const px = (e.clientX - rect.left) * dpr;
    
    const width = canvas.width;
    const originX = width / 2;
    const scaleX = width / 8;
    
    const x = (px - originX) / scaleX;
    state.tangentX = Math.max(-4, Math.min(4, x));
    drawTangent();
}

// --- 标签页系统 ---
function switchTab(tabId) {
    // 桌面端导航
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const id = btn.id.replace('btn-', '');
        if(id === tabId) {
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
    
    // 隐藏所有内容
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    
    // 显示选中的内容
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');
    
    // 初始绘制
    if (tabId === 'concept') requestAnimationFrame(drawConcept);
    if (tabId === 'limit') requestAnimationFrame(drawLimit);
    if (tabId === 'tangent') requestAnimationFrame(drawTangent);
}

// --- 返回首页 ---
function toggleReturnLinks() {
    const panel = document.getElementById('returnHomePanel');
    if (panel) {
        panel.classList.toggle('hidden');
    }
}

// --- 初始化 ---
window.addEventListener('load', () => {
    switchTab('concept');
    
    // 滑块事件
    document.getElementById('x0Slider').addEventListener('input', updateLimitParams);
    document.getElementById('dxSlider').addEventListener('input', updateLimitParams);
    
    // 切线交互
    const tanCanvas = document.getElementById('tangentCanvas');
    tanCanvas.addEventListener('mousemove', (e) => {
        if(document.getElementById('tab-tangent').classList.contains('hidden')) return;
        handleTangentInteract(e);
    });
    tanCanvas.addEventListener('touchmove', (e) => {
        if(document.getElementById('tab-tangent').classList.contains('hidden')) return;
        e.preventDefault();
        handleTangentInteract(e.touches[0]);
    }, {passive: false});
});

window.addEventListener('resize', () => {
    if (!document.getElementById('tab-concept').classList.contains('hidden')) drawConcept();
    if (!document.getElementById('tab-limit').classList.contains('hidden')) drawLimit();
    if (!document.getElementById('tab-tangent').classList.contains('hidden')) drawTangent();
});

