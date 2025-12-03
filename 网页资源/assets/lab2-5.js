// lab2-5.js - 无穷大与无穷小倒数关系可视化脚本

// --- 全局状态 ---
let state = {
    currentTab: 'concept',
    caseId: 1,
    practiceFunc: '1/x',
    practiceLimit: '0+',
    animationId: null
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
    
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.lineTo(width - 8, originY - 4);
    ctx.moveTo(width, originY);
    ctx.lineTo(width - 8, originY + 4);

    ctx.moveTo(originX, height);
    ctx.lineTo(originX, 0);
    ctx.lineTo(originX - 4, 8);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX + 4, 8);
    
    ctx.stroke();

    ctx.fillStyle = '#1f2937';
    ctx.font = '14px sans-serif';
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

// --- 概念标签页 ---
function drawConcept() {
    const { ctx, width, height } = setupCanvas('conceptCanvas');
    const originX = 40;
    const originY = height - 40;
    const scaleX = (width - 60) / 4;
    const scaleY = (height - 60) / 4;

    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, width, height, scaleX/2, originX, originY);
    drawAxes(ctx, width, height, originX, originY);

    ctx.fillStyle = '#6b7280';
    ctx.font = '10px sans-serif';
    for(let i=1; i<=4; i++) {
        const px = originX + i*scaleX;
        ctx.fillText(i, px-3, originY + 15);
        const py = originY - i*scaleY;
        ctx.fillText(i, originX - 15, py + 3);
    }

    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    let startX = 0.1; 
    for (let x = startX; x <= 4.2; x += 0.05) {
        let y = 1 / x;
        if (y > 10) y = 10; 
        const { px, py } = toCanvasCoords(x, y, originX, originY, scaleX, scaleY);
        if (x === startX) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();

    const sliderVal = parseFloat(document.getElementById('conceptSlider').value);
    const currentX = sliderVal;
    const currentY = 1 / currentX;
    
    const p = toCanvasCoords(currentX, currentY, originX, originY, scaleX, scaleY);
    
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 1;
    ctx.moveTo(p.px, originY);
    ctx.lineTo(p.px, p.py);
    ctx.lineTo(originX, p.py);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.fillStyle = '#dc2626';
    ctx.arc(p.px, p.py, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    document.getElementById('conceptXVal').textContent = currentX.toFixed(2);
    document.getElementById('conceptXVal2').textContent = currentX.toFixed(2);
    document.getElementById('conceptYVal').textContent = currentY.toFixed(2);
}

function resetConceptGraph() {
    document.getElementById('conceptSlider').value = 1;
    drawConcept();
}

// --- 案例标签页 ---
function selectCase(id) {
    state.caseId = id;
    document.querySelectorAll('.case-btn').forEach(btn => {
        const isActive = btn.dataset.id == id;
        if (isActive) {
            btn.classList.add('border-indigo-600', 'bg-indigo-50', 'active');
            btn.classList.remove('border-gray-100', 'bg-white');
            btn.querySelector('.font-bold').classList.add('text-indigo-900');
            btn.querySelector('.font-bold').classList.remove('text-gray-800');
        } else {
            btn.classList.remove('border-indigo-600', 'bg-indigo-50', 'active');
            btn.classList.add('border-gray-100', 'bg-white');
            btn.querySelector('.font-bold').classList.remove('text-indigo-900');
            btn.querySelector('.font-bold').classList.add('text-gray-800');
        }
    });

    const texts = {
        1: { title: "案例 1: 当 $x \\to 0$ 时，$y = 1/x$", desc: "无穷小的倒数是无穷大", analysis: "随着 $x$ 从右侧无限接近 $0$（无穷小），函数值 $y=1/x$ 迅速上升，超过任何预定的正数，表现为无穷大（$\\infty$）。<strong>结论：</strong>$0$ 的倒数趋势是 $\\infty$。" },
        2: { title: "案例 2: 当 $x \\to \\infty$ 时，$y = 1/x$", desc: "无穷大的倒数是无穷小", analysis: "随着 $x$ 向右无限延伸（无穷大），函数值 $y=1/x$ 越来越接近 $x$ 轴，即无限接近 $0$。<strong>结论：</strong>$\\infty$ 的倒数趋势是 $0$。" },
        3: { title: "案例 3: 当 $x \\to 0$ 时，$y = x$", desc: "本身是无穷小", analysis: "这是最基本的无穷小量。当 $x$ 趋近于 $0$ 时，函数值也趋近于 $0$。在此处，我们关注它作为分母时的作用（如案例1）。" },
        4: { title: "案例 4: 当 $x \\to \\infty$ 时，$y = x$", desc: "本身是无穷大", analysis: "这是最基本的无穷大量。当 $x$ 增大时，函数值同步增大。在此处，我们关注它作为分母时的作用（如案例2）。" }
    };
    
    const data = texts[id];
    document.getElementById('caseTitle').innerHTML = data.title;
    document.getElementById('caseDesc').textContent = data.desc;
    document.getElementById('caseAnalysis').innerHTML = data.analysis;
    
    if(window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        MathJax.typesetPromise().then(fixInlineMath);
    } else if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
        window.MathJax.startup.promise.then(() => {
            if (typeof window.MathJax.typesetPromise === 'function') {
                MathJax.typesetPromise().then(fixInlineMath);
            }
        });
    }

    if (state.animationId) cancelAnimationFrame(state.animationId);
    drawCase(0); 
}

function drawCase(progress = 0) {
    const { ctx, width, height } = setupCanvas('caseCanvas');
    const originX = 40;
    const originY = height - 40;
    const scaleX = (width - 60) / 10; 
    const scaleY = (height - 60) / 10;

    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, width, height, scaleX, originX, originY);
    drawAxes(ctx, width, height, originX, originY);

    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 3;

    let func = (x) => 0;
    let startX = 0, endX = 10, step = 0.1;
    
    if (state.caseId === 1 || state.caseId === 2) {
        func = (x) => 1/x;
        startX = 0.1;
    } else {
        func = (x) => x;
        startX = 0;
    }

    for(let x = startX; x <= endX; x += step) {
        let y = func(x);
        if (y > 10) y = 10;
        const { px, py } = toCanvasCoords(x, y, originX, originY, scaleX, scaleY);
        if (x === startX) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();

    let animX = 0;
    if (state.caseId === 1 || state.caseId === 3) {
        animX = 4 - (progress * 3.9); 
        if (animX < 0.1) animX = 0.1;
    } else {
        animX = 0.5 + (progress * 9.5);
    }

    let animY = func(animX);
    let displayY = animY;
    if (animY > 20) displayY = 20;

    const p = toCanvasCoords(animX, displayY, originX, originY, scaleX, scaleY);
    
    ctx.beginPath();
    ctx.fillStyle = '#ef4444';
    ctx.shadowColor = "rgba(239, 68, 68, 0.5)";
    ctx.shadowBlur = 10;
    ctx.arc(p.px, p.py, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    const overlay = document.getElementById('caseOverlay');
    if (progress > 0) {
        overlay.classList.remove('hidden');
        document.getElementById('overlayPoint').textContent = `x=${animX.toFixed(2)}, y=${animY.toFixed(2)}`;
        let stateText = "";
        if (state.caseId === 1) stateText = "x减小 → y增大 (无穷大)";
        if (state.caseId === 2) stateText = "x增大 → y减小 (无穷小)";
        if (state.caseId === 3) stateText = "x减小 → y减小 (无穷小)";
        if (state.caseId === 4) stateText = "x增大 → y增大 (无穷大)";
        document.getElementById('overlayState').textContent = stateText;
    } else {
        overlay.classList.add('hidden');
    }
}

function animateCase() {
    if (state.animationId) cancelAnimationFrame(state.animationId);
    let start = null;
    const duration = 3000;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        drawCase(progress);
        if (progress < 1) {
            state.animationId = requestAnimationFrame(step);
        }
    }
    state.animationId = requestAnimationFrame(step);
}

// --- 练习标签页 ---
function setPracticeFunc(f) {
    state.practiceFunc = f;
    document.querySelectorAll('.practice-func-btn').forEach(btn => {
        if (btn.innerText === f || (f === 'sqrt' && btn.innerText === '√x')) {
            btn.classList.add('bg-indigo-100', 'border-indigo-500', 'text-indigo-700', 'active');
            btn.classList.remove('bg-white', 'border-gray-300');
        } else {
            btn.classList.remove('bg-indigo-100', 'border-indigo-500', 'text-indigo-700', 'active');
            btn.classList.add('bg-white', 'border-gray-300');
        }
    });
    drawPractice();
    document.getElementById('practiceResultBox').classList.add('hidden');
}

function updatePractice() {
    state.practiceLimit = document.getElementById('practiceLimit').value;
    document.getElementById('practiceResultBox').classList.add('hidden');
}

function drawPractice() {
    const { ctx, width, height } = setupCanvas('practiceCanvas');
    const originX = 60;
    const originY = height - 40;
    const scaleX = (width - 80) / 12;
    const scaleY = (height - 80) / 12; 

    ctx.clearRect(0, 0, width, height);
    
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    const y0 = originY - 2 * scaleY;
    ctx.moveTo(0, y0); ctx.lineTo(width, y0);
    ctx.fillText('x', width-10, y0+20);
    const x0 = originX + 2 * scaleX;
    ctx.moveTo(x0, height); ctx.lineTo(x0, 0);
    ctx.fillText('y', x0+10, 15);
    ctx.stroke();

    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.fillText('0', x0-10, y0+15);
    ctx.fillText('1', x0 + scaleX - 3, y0+15);
    ctx.fillText('1', x0-10, y0 - scaleY + 3);

    ctx.beginPath();
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 2.5;

    let func = (x) => x;
    if (state.practiceFunc === '1/x') func = (x) => 1/x;
    if (state.practiceFunc === 'x^2') func = (x) => x*x;
    if (state.practiceFunc === '1/x^2') func = (x) => 1/(x*x);
    if (state.practiceFunc === 'sqrt') func = (x) => Math.sqrt(x);

    let started = false;
    for(let px = 0; px < width; px+=2) {
        const x = (px - originX) / scaleX - 2;
        
        if (state.practiceFunc === 'sqrt' && x < 0) continue;
        if ((state.practiceFunc === '1/x' || state.practiceFunc === '1/x^2') && Math.abs(x) < 0.05) {
            started = false;
            continue;
        }

        const y = func(x);
        if (isNaN(y)) continue;

        if (y > 12 || y < -2) {
            started = false;
            continue;
        }

        const py = originY - (y + 2) * scaleY;
        
        if (!started) {
            ctx.moveTo(px, py);
            started = true;
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();
}

function analyzePractice() {
    const func = state.practiceFunc;
    const lim = state.practiceLimit;
    let result = "";
    let detail = "";

    if (lim === '0+') {
        if (func === '1/x') { result = "无穷大量 (+∞)"; detail = "分母趋近0（正），分子为1，倒数趋向正无穷。"; }
        else if (func === '1/x^2') { result = "无穷大量 (+∞)"; detail = "分母趋近0（正），倒数趋向正无穷。"; }
        else if (func === 'x' || func === 'x^2' || func === 'sqrt') { result = "无穷小量 (0)"; detail = "函数连续且 f(0)=0，故为无穷小。"; }
    } else if (lim === 'inf') {
        if (func === '1/x' || func === '1/x^2') { result = "无穷小量 (0)"; detail = "分母趋向无穷大，分数值趋向0。"; }
        else if (func === 'x' || func === 'x^2' || func === 'sqrt') { result = "无穷大量 (+∞)"; detail = "x增大，函数值无限增大。"; }
    } else if (lim === '1') {
        result = "常数 (有限量)";
        detail = "函数在此点连续且有定义，不是无穷大也不是无穷小。";
    }

    const box = document.getElementById('practiceResultBox');
    box.classList.remove('hidden');
    document.getElementById('practiceResultText').textContent = result;
    document.getElementById('practiceResultDetail').textContent = detail;
}

// --- 标签页管理 ---
function switchTab(tab) {
    state.currentTab = tab;
    
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(`tab-${tab}`).classList.remove('hidden');

    // 更新导航按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const target = btn.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
        if (target === tab) {
            btn.classList.add('bg-indigo-50', 'text-indigo-700', 'font-bold', 'border-l-4', 'border-indigo-600');
            btn.classList.remove('text-gray-600', 'border-transparent');
        } else {
            btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'font-bold', 'border-l-4', 'border-indigo-600');
            btn.classList.add('text-gray-600', 'border-transparent');
        }
    });

    if (tab === 'concept') {
        requestAnimationFrame(() => drawConcept());
    } else if (tab === 'cases') {
        selectCase(state.caseId);
    } else if (tab === 'practice') {
        requestAnimationFrame(() => drawPractice());
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
window.onload = function() {
    // 滑块事件
    const slider = document.getElementById('conceptSlider');
    if (slider) {
        slider.addEventListener('input', drawConcept);
    }
    
    drawConcept();
    switchTab('concept');
};

window.addEventListener('resize', () => {
    if (state.currentTab === 'concept') drawConcept();
    if (state.currentTab === 'cases') drawCase(0);
    if (state.currentTab === 'practice') drawPractice();
});

// --- MathJax 行内公式修复 ---
function fixInlineMath() {
    document.querySelectorAll('mjx-container').forEach(el => {
        // 只处理行内公式（非 display 模式）
        if (!el.hasAttribute('display')) {
            el.style.display = 'inline';
            el.style.margin = '0';
            el.style.verticalAlign = 'middle';
        }
    });
}

// 页面加载后修复
document.addEventListener('DOMContentLoaded', () => {
    if (window.MathJax) {
        MathJax.startup.promise.then(fixInlineMath);
    }
});

// 监听 DOM 变化，处理动态渲染的公式
const mathObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
            fixInlineMath();
        }
    });
});
mathObserver.observe(document.body, { childList: true, subtree: true });

