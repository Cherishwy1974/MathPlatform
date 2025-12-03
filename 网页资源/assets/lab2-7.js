// lab2-7.js - 无穷小比较可视化实验室脚本

// --- 状态管理 ---
let currentTab = 'concept';
let animationFrameId = null;

// --- 标签页切换 ---
function switchTab(tabId) {
    currentTab = tabId;
    
    // 隐藏所有内容
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(`tab-${tabId}`).classList.remove('hidden');
    
    // 更新桌面端导航
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn.id === `btn-${tabId}`) {
            btn.classList.remove('text-gray-600', 'hover:bg-gray-50');
            btn.classList.add('bg-indigo-50', 'text-indigo-700');
        } else {
            btn.classList.add('text-gray-600', 'hover:bg-gray-50');
            btn.classList.remove('bg-indigo-50', 'text-indigo-700');
        }
    });

    // 更新移动端导航
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        if(btn.dataset.target === tabId) {
            btn.classList.add('text-indigo-600');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.add('text-gray-400');
            btn.classList.remove('text-indigo-600');
        }
    });

    // 根据标签初始化可视化
    if(tabId === 'concept') {
        requestAnimationFrame(drawConceptGraph);
    } else if (tabId === 'compare') {
        requestAnimationFrame(updateComparison);
    }
}

// --- Canvas辅助函数 ---
function setupCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    return { ctx, width: rect.width, height: rect.height };
}

function drawAxes(ctx, width, height, scaleX, scaleY, originX, originY) {
    ctx.strokeStyle = '#9ca3af'; // Gray-400
    ctx.lineWidth = 1;
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = '#4b5563'; // Gray-600
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // X轴
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    // X轴箭头
    ctx.beginPath();
    ctx.moveTo(width, originY);
    ctx.lineTo(width - 8, originY - 4);
    ctx.lineTo(width - 8, originY + 4);
    ctx.fill();
    ctx.fillText('x', width - 15, originY + 15);

    // Y轴
    ctx.beginPath();
    ctx.moveTo(originX, height);
    ctx.lineTo(originX, 0);
    ctx.stroke();
    // Y轴箭头
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX - 4, 8);
    ctx.lineTo(originX + 4, 8);
    ctx.fill();
    ctx.fillText('y', originX + 15, 12);

    // 原点
    ctx.fillText('O', originX - 12, originY + 12);

    // X轴刻度
    const xStep = scaleX > 200 ? 0.5 : 1; 
    for(let x = -2; x <= 2; x+=xStep) {
        if (x === 0) continue;
        const px = originX + x * scaleX;
        if(px > 0 && px < width) {
            ctx.beginPath();
            ctx.moveTo(px, originY - 3);
            ctx.lineTo(px, originY + 3);
            ctx.stroke();
            ctx.fillText(x, px, originY + 15);
        }
    }

    // Y轴刻度
    const yStep = 1;
    for(let y = -2; y <= 2; y+=yStep) {
        if (y === 0) continue;
        const py = originY - y * scaleY;
        if(py > 0 && py < height) {
            ctx.beginPath();
            ctx.moveTo(originX - 3, py);
            ctx.lineTo(originX + 3, py);
            ctx.stroke();
            ctx.fillText(y, originX - 15, py);
        }
    }
}

// --- 概念图绘制 ---
function drawConceptGraph() {
    const { ctx, width, height } = setupCanvas('conceptCanvas');
    const originX = width / 2;
    const originY = height - 40; // 将原点下移以显示更多正y值
    const scaleX = width / 3; // 水平放大
    const scaleY = height / 2; 

    ctx.clearRect(0, 0, width, height);
    
    // 网格背景(浅色)
    ctx.strokeStyle = '#f3f4f6';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i=0; i<width; i+=20) { ctx.moveTo(i,0); ctx.lineTo(i,height); }
    for(let i=0; i<height; i+=20) { ctx.moveTo(0,i); ctx.lineTo(width,i); }
    ctx.stroke();

    drawAxes(ctx, width, height, scaleX, scaleY, originX, originY);

    // 要绘制的函数
    const funcs = [
        { f: x => x, color: '#3b82f6', width: 2, label: 'y=x' },
        { f: x => x*x, color: '#ef4444', width: 2, label: 'y=x²' },
        { f: x => x*x*x, color: '#a855f7', width: 2, label: 'y=x³' }
    ];

    funcs.forEach(item => {
        ctx.beginPath();
        ctx.strokeStyle = item.color;
        ctx.lineWidth = item.width;
        let start = true;
        for (let px = 0; px <= width; px++) {
            const x = (px - originX) / scaleX;
            const y = item.f(x);
            const py = originY - y * scaleY;
            if (start) { ctx.moveTo(px, py); start = false; }
            else { ctx.lineTo(px, py); }
        }
        ctx.stroke();
    });
}

// --- 比较逻辑 ---
function getFunc(name) {
    switch(name) {
        case 'x': return { f: x => x, latex: 'x', order: 1 };
        case 'x2': return { f: x => x*x, latex: 'x^2', order: 2 };
        case 'x3': return { f: x => x*x*x, latex: 'x^3', order: 3 };
        case 'sin': return { f: x => Math.sin(x), latex: '\\sin x', order: 1 };
        case 'tan': return { f: x => Math.tan(x), latex: '\\tan x', order: 1 };
        case '1-cos': return { f: x => 1 - Math.cos(x), latex: '1 - \\cos x', order: 2 };
        default: return { f: x => x, latex: 'x', order: 1 };
    }
}

function updateComparison() {
    const alphaName = document.getElementById('alphaSelect').value;
    const betaName = document.getElementById('betaSelect').value;
    
    const alpha = getFunc(alphaName);
    const beta = getFunc(betaName);

    // 判断结果
    const resultBox = document.getElementById('resultCard');
    const resultTitle = document.getElementById('comparisonResult');
    const limitText = document.getElementById('limitValue');

    let resultHTML = "";
    let limitHTML = "";
    let borderColor = "";

    if (beta.order > alpha.order) {
        resultHTML = `<span class="text-emerald-600">$\\beta$ 是 $\\alpha$ 的高阶无穷小</span>`;
        limitHTML = `$\\displaystyle\\lim_{x \\to 0} \\dfrac{${beta.latex}}{${alpha.latex}} = 0$`;
        borderColor = "border-emerald-200 bg-emerald-50";
    } else if (beta.order < alpha.order) {
        resultHTML = `<span class="text-amber-600">$\\beta$ 是 $\\alpha$ 的低阶无穷小</span>`;
        limitHTML = `$\\displaystyle\\lim_{x \\to 0} \\frac{${beta.latex}}{${alpha.latex}} = \\infty$`;
        borderColor = "border-amber-200 bg-amber-50";
    } else {
        // 同阶检查等价性
        let isEquivalent = false;
        if ((alphaName === 'x' || alphaName === 'sin' || alphaName === 'tan') && 
            (betaName === 'x' || betaName === 'sin' || betaName === 'tan')) {
            isEquivalent = true;
        } else if (alphaName === betaName) {
            isEquivalent = true;
        }

        if (isEquivalent) {
            resultHTML = `<span class="text-indigo-600">$\\alpha$ 与 $\\beta$ 是等价无穷小</span>`;
            limitHTML = `$\\displaystyle\\lim_{x \\to 0} \\frac{${beta.latex}}{${alpha.latex}} = 1$`;
            borderColor = "border-indigo-200 bg-indigo-50";
        } else {
            resultHTML = `<span class="text-blue-600">$\\alpha$ 与 $\\beta$ 是同阶无穷小</span>`;
            limitHTML = `$\\displaystyle\\lim_{x \\to 0} \\frac{${beta.latex}}{${alpha.latex}} = C \\neq 0$`;
            borderColor = "border-blue-200 bg-blue-50";
        }
    }

    resultBox.className = `rounded-2xl shadow-sm border p-6 transition-all duration-500 transform translate-y-0 opacity-100 ${borderColor}`;
    resultTitle.innerHTML = resultHTML;
    limitText.innerHTML = limitHTML;

    // MathJax重新渲染
    if (window.MathJax) {
        MathJax.typesetPromise([resultTitle, limitText]).catch((err) => console.log(err));
    }

    drawCompareGraph(alpha, beta);
}

function drawCompareGraph(alpha, beta) {
    const { ctx, width, height } = setupCanvas('compareCanvas');
    const originX = width / 2;
    const originY = height / 2;
    const scaleX = width / 4; // 放大原点附近
    const scaleY = height / 4;

    ctx.clearRect(0, 0, width, height);
    drawAxes(ctx, width, height, scaleX, scaleY, originX, originY);

    // 绘制比值函数 y = beta/alpha
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 3;
    
    let isStarted = false;
    // 避免 x=0
    for (let px = 0; px <= width; px++) {
        const x = (px - originX) / scaleX;
        if (Math.abs(x) < 0.01) continue; // 视觉上跳过奇点

        const valAlpha = alpha.f(x);
        const valBeta = beta.f(x);
        const ratio = valBeta / valAlpha;

        // 限制绘制范围
        if (Math.abs(ratio) > 10) {
            isStarted = false;
            continue;
        }

        const py = originY - ratio * scaleY;

        if (!isStarted) {
            ctx.moveTo(px, py);
            isStarted = true;
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();

    // 高亮极限点(在(0, limit)处画圆)
    let limitY = 0;
    let drawLimit = true;
    if (beta.order > alpha.order) limitY = 0;
    else if (beta.order < alpha.order) drawLimit = false; // 无穷大
    else {
        // 近似C
        limitY = (beta.f(0.0001) / alpha.f(0.0001)); 
    }

    if (drawLimit) {
        const limitPy = originY - limitY * scaleY;
        ctx.beginPath();
        ctx.arc(originX, limitPy, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.strokeStyle = '#dc2626'; // 红色
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// --- 交互逻辑 ---
function toggleAnswer(id) {
    const el = document.getElementById(id);
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        el.classList.add('animate-fade-in');
    } else {
        el.classList.add('hidden');
    }
    if (window.MathJax) MathJax.typesetPromise();
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
    switchTab('concept');
});

window.addEventListener('resize', () => {
    if (currentTab === 'concept') drawConceptGraph();
    if (currentTab === 'compare') updateComparison();
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

