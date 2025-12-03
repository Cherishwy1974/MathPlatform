// lab2-11.js - 函数连续性实验室脚本

// --- 全局状态 ---
let state = {
    currentCase: 1,
    testPoint: 0
};

// --- 标签页切换 ---
function switchTab(tabId) {
    // 桌面端导航
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.id === `btn-${tabId}`) {
            btn.classList.add('bg-blue-50', 'text-blue-700');
            btn.classList.remove('text-gray-600', 'hover:bg-gray-50');
        } else {
            btn.classList.remove('bg-blue-50', 'text-blue-700');
            btn.classList.add('text-gray-600', 'hover:bg-gray-50');
        }
    });

    // 移动端导航
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        if (btn.dataset.target === tabId) {
            btn.classList.add('text-blue-600');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('text-blue-600');
            btn.classList.add('text-gray-400');
        }
    });

    // 内容切换
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');

    // 渲染逻辑
    if (tabId === 'definition') {
        requestAnimationFrame(drawContinuousGraph);
    } else if (tabId === 'types') {
        selectCase(state.currentCase);
    } else if (tabId === 'check') {
        runTest();
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

function drawAxes(ctx, width, height, originX, originY) {
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1.5;
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

    ctx.fillStyle = '#1f2937';
    ctx.font = '12px sans-serif';
    ctx.fillText('x', width - 15, originY + 20);
    ctx.fillText('y', originX + 10, 15);
    ctx.fillText('O', originX - 12, originY + 15);
}

// --- 连续函数图像 ---
function drawContinuousGraph() {
    const { ctx, width, height } = setupCanvas('continuousCanvas');
    const originX = width / 2;
    const originY = height / 2 + 20;
    const scale = 50;

    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, width, height, scale, originX, originY);
    drawAxes(ctx, width, height, originX, originY);

    // 绘制 f(x) = 0.5x^2 - 1
    ctx.beginPath();
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2.5;
    for (let px = 0; px <= width; px += 2) {
        const x = (px - originX) / scale;
        const y = 0.5 * x * x - 1;
        const py = originY - y * scale;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // 在 x=1 处绘制点
    const x0 = 1;
    const y0 = 0.5 * 1 * 1 - 1;
    const px0 = originX + x0 * scale;
    const py0 = originY - y0 * scale;

    ctx.fillStyle = '#10b981';
    ctx.beginPath(); ctx.arc(px0, py0, 6, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#374151';
    ctx.fillText(`(${x0}, ${y0})`, px0 + 10, py0);
}

// --- 不连续类型逻辑 ---
const CASES = {
    1: {
        title: '跳跃间断点',
        formula: 'f(x) = \\text{sgn}(x)',
        analysis: '$\\lim_{x \\to 0^-} f(x) = -1 \\neq \\lim_{x \\to 0^+} f(x) = 1$<br>左右极限存在但不相等。',
        tags: ['左右极限不等', '第一类间断点'],
        draw: (ctx, w, h, ox, oy, s) => {
            ctx.beginPath(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2.5;
            ctx.moveTo(0, oy + s); ctx.lineTo(ox, oy + s); ctx.stroke();
            ctx.fillStyle = '#fff'; ctx.strokeStyle='#ef4444'; ctx.beginPath(); ctx.arc(ox, oy+s, 4, 0, Math.PI*2); ctx.fill(); ctx.stroke();

            ctx.beginPath(); ctx.strokeStyle = '#ef4444';
            ctx.moveTo(ox, oy - s); ctx.lineTo(w, oy - s); ctx.stroke();
            ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ox, oy-s, 4, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        }
    },
    2: {
        title: '可去间断点',
        formula: 'f(x) = \\frac{x^2-1}{x-1}, x \\neq 1',
        analysis: '$\\lim_{x \\to 1} f(x) = 2$，但 $f(1)$ 无定义。<br>左右极限相等，但在该点无定义或定义值不等于极限值。',
        tags: ['左右极限相等', '第一类间断点'],
        draw: (ctx, w, h, ox, oy, s) => {
            const xHole = 1;
            const yHole = 2;
            const pHoleX = ox + xHole * s;
            const pHoleY = oy - yHole * s;

            ctx.beginPath(); ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.5;
            for(let px=0; px<=w; px+=2) {
                const x = (px - ox) / s;
                const y = x + 1;
                const py = oy - y * s;
                if(px===0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();

            ctx.fillStyle = '#fff'; ctx.strokeStyle='#ef4444'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(pHoleX, pHoleY, 5, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        }
    },
    3: {
        title: '无穷间断点',
        formula: 'f(x) = \\frac{1}{x}',
        analysis: '$\\lim_{x \\to 0^+} f(x) = +\\infty, \\lim_{x \\to 0^-} f(x) = -\\infty$<br>极限为无穷大。',
        tags: ['极限为无穷', '第二类间断点'],
        draw: (ctx, w, h, ox, oy, s) => {
            ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2.5;
            
            ctx.beginPath();
            for(let px=ox+1; px<=w; px+=2) {
                const x = (px - ox) / s;
                const y = 1/x;
                if(y > 10) continue; 
                const py = oy - y * s;
                if(px === ox+1) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();

            ctx.beginPath();
            for(let px=0; px<ox; px+=2) {
                const x = (px - ox) / s;
                const y = 1/x;
                if(y < -10) continue;
                const py = oy - y * s;
                if(px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();

            ctx.setLineDash([5,5]); ctx.strokeStyle = '#ef4444'; ctx.lineWidth=1;
            ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke();
            ctx.setLineDash([]);
        }
    }
};

function selectCase(id) {
    state.currentCase = id;
    
    document.querySelectorAll('.case-btn').forEach(btn => {
        if(btn.dataset.case == id) {
            btn.classList.add('border-blue-500', 'bg-blue-50');
            btn.classList.remove('border-transparent', 'bg-gray-50');
            btn.querySelector('.font-bold').classList.replace('text-gray-800', 'text-blue-900');
        } else {
            btn.classList.remove('border-blue-500', 'bg-blue-50');
            btn.classList.add('border-transparent', 'bg-gray-50');
            btn.querySelector('.font-bold').classList.replace('text-blue-900', 'text-gray-800');
        }
    });

    const data = CASES[id];
    document.getElementById('caseFormula').innerHTML = `$$ ${data.formula} $$`;
    document.getElementById('caseAnalysis').innerHTML = data.analysis;
    
    const tagsContainer = document.getElementById('caseTags');
    tagsContainer.innerHTML = data.tags.map(t => 
        `<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">${t}</span>`
    ).join('');

    if(window.MathJax && typeof window.MathJax.typesetPromise === 'function') MathJax.typesetPromise();

    const { ctx, width, height } = setupCanvas('discontinuousCanvas');
    const originX = width / 2;
    const originY = height / 2;
    const scale = 40;

    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, width, height, scale, originX, originY);
    drawAxes(ctx, width, height, originX, originY);
    data.draw(ctx, width, height, originX, originY, scale);
}

// --- 检验逻辑 ---
function updateTestPoint(val) {
    state.testPoint = parseFloat(val);
    document.getElementById('testPointSlider').value = state.testPoint;
    document.getElementById('testPointInput').value = state.testPoint;
    drawTestGraph();
}

function getFuncValue(type, x) {
    switch(type) {
        case 'poly': return x*x + 1;
        case 'rational': return x === 1 ? NaN : 1/(x-1);
        case 'piecewise': return x < 1 ? x : x + 1;
        case 'abs': return Math.abs(x);
        default: return 0;
    }
}

function checkContinuity(type, x0) {
    const epsilon = 0.0001;
    const f0 = getFuncValue(type, x0);
    const fLeft = getFuncValue(type, x0 - epsilon);
    const fRight = getFuncValue(type, x0 + epsilon);

    const isDefined = !isNaN(f0) && isFinite(f0);
    const limitExists = Math.abs(fLeft - fRight) < 0.1 && isFinite(fLeft); 
    const isContinuous = isDefined && limitExists && Math.abs(fLeft - f0) < 0.1;

    return { isDefined, limitExists, isContinuous, f0, fLeft, fRight };
}

function runTest() {
    const type = document.getElementById('testFunc').value;
    const x0 = state.testPoint;
    const result = checkContinuity(type, x0);

    const reportDiv = document.getElementById('testReport');
    const verdictDiv = document.getElementById('testVerdict');

    let reportHTML = '';
    
    reportHTML += `<div class="flex items-center gap-2 text-sm ${result.isDefined ? 'text-green-700' : 'text-red-700'}">
        <span class="material-symbols-outlined text-base">${result.isDefined ? 'check_circle' : 'cancel'}</span>
        1. 函数定义: ${result.isDefined ? `f(${x0}) = ${result.f0.toFixed(2)}` : '无定义'}
    </div>`;

    reportHTML += `<div class="flex items-center gap-2 text-sm ${result.limitExists ? 'text-green-700' : 'text-red-700'}">
        <span class="material-symbols-outlined text-base">${result.limitExists ? 'check_circle' : 'cancel'}</span>
        2. 极限存在: ${result.limitExists ? `左右极限 ≈ ${result.fLeft.toFixed(2)}` : `左 ${result.fLeft.toFixed(2)} ≠ 右 ${result.fRight.toFixed(2)}`}
    </div>`;

    const isEqual = result.isContinuous;
    reportHTML += `<div class="flex items-center gap-2 text-sm ${isEqual ? 'text-green-700' : 'text-red-700'}">
        <span class="material-symbols-outlined text-base">${isEqual ? 'check_circle' : 'cancel'}</span>
        3. 极限 = 函数值: ${isEqual ? '成立' : '不成立'}
    </div>`;

    reportDiv.innerHTML = reportHTML;
    
    verdictDiv.className = `mt-6 pt-4 border-t border-gray-200 text-center font-bold text-lg ${result.isContinuous ? 'text-green-600' : 'text-red-600'}`;
    verdictDiv.innerHTML = result.isContinuous ? '判定：连续' : '判定：不连续';

    if(window.MathJax && typeof window.MathJax.typesetPromise === 'function') MathJax.typesetPromise([reportDiv]);
    
    drawTestGraph();
}

function drawTestGraph() {
    const { ctx, width, height } = setupCanvas('testCanvas');
    const originX = width / 2;
    const originY = height / 2 + 40;
    const scale = 40;
    
    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, width, height, scale, originX, originY);
    drawAxes(ctx, width, height, originX, originY);

    const type = document.getElementById('testFunc').value;
    const x0 = state.testPoint;

    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;

    let start = true;
    for(let px = 0; px <= width; px+=2) {
        const x = (px - originX) / scale;
        if (type === 'rational' && Math.abs(x - 1) < 0.1) { start = true; continue; }
        if (type === 'piecewise' && Math.abs(x - 1) < 0.05) { start = true; continue; }

        const y = getFuncValue(type, x);
        if(isNaN(y) || Math.abs(y) > 10) { start = true; continue; }

        const py = originY - y * scale;
        if(start) { ctx.moveTo(px, py); start = false; }
        else { ctx.lineTo(px, py); }
    }
    ctx.stroke();

    const px0 = originX + x0 * scale;
    const yVal = getFuncValue(type, x0);
    
    ctx.strokeStyle = '#9333ea';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(px0, 0); ctx.lineTo(px0, height);
    ctx.stroke();
    ctx.setLineDash([]);

    if (!isNaN(yVal) && isFinite(yVal)) {
        const py0 = originY - yVal * scale;
        ctx.fillStyle = '#9333ea';
        ctx.beginPath(); ctx.arc(px0, py0, 6, 0, Math.PI*2); ctx.fill();
    } else {
        let limY = getFuncValue(type, x0 + 0.01);
        if(isFinite(limY)) {
             const py0 = originY - limY * scale;
             ctx.strokeStyle = '#ef4444'; ctx.lineWidth=2;
             ctx.beginPath(); ctx.arc(px0, py0, 6, 0, Math.PI*2); ctx.stroke();
        }
    }
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
    switchTab('definition');
    selectCase(1);
});

window.addEventListener('resize', () => {
    if (!document.getElementById('tab-definition').classList.contains('hidden')) drawContinuousGraph();
    if (!document.getElementById('tab-types').classList.contains('hidden')) selectCase(state.currentCase);
    if (!document.getElementById('tab-check').classList.contains('hidden')) drawTestGraph();
});

