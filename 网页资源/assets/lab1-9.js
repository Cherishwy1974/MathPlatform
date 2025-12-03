// lab1-9.js - 函数大师游戏专用脚本

// --- 1. 星空背景逻辑 ---
function createStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    starfield.innerHTML = '';
    const count = 60;
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const r = Math.random();
        if (r < 0.6) star.classList.add('small');
        else if (r < 0.9) star.classList.add('medium');
        else star.classList.add('large');
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        if (Math.random() < 0.3) {
            star.classList.add('pulse');
            star.style.animationDelay = Math.random() * 4 + 's';
        }
        
        starfield.appendChild(star);
    }
}

// --- 2. 高难度题库 ---
function generateMegaDatabase() {
    const db = [];
    
    // ===== 第一部分：复合函数与内外层识别 =====
    // 复合函数内层识别
    db.push({ q: "$\\sin(x^2+1)$ 的内层函数", a: "$x^2+1$" });
    db.push({ q: "$e^{\\ln x}$ 的内层函数", a: "$\\ln x$" });
    db.push({ q: "$\\ln(\\sin x)$ 的内层函数", a: "$\\sin x$" });
    db.push({ q: "$\\cos(e^x)$ 的内层函数", a: "$e^x$" });
    db.push({ q: "$(2x+1)^5$ 的内层函数", a: "$2x+1$" });
    db.push({ q: "$\\sqrt{\\ln x}$ 的内层函数", a: "$\\ln x$" });
    db.push({ q: "$e^{x^2-1}$ 的内层函数", a: "$x^2-1$" });
    db.push({ q: "$\\tan(2x)$ 的内层函数", a: "$2x$" });
    
    // 复合函数外层识别
    db.push({ q: "$\\sin(x^2+1)$ 的外层函数", a: "$\\sin u$" });
    db.push({ q: "$e^{\\cos x}$ 的外层函数", a: "$e^u$" });
    db.push({ q: "$\\ln(x^3)$ 的外层函数", a: "$\\ln u$" });
    db.push({ q: "$(\\sin x)^4$ 的外层函数", a: "$u^4$" });
    
    // ===== 第二部分：函数定义域 =====
    db.push({ q: "$y=\\sqrt{x-2}$ 定义域", a: "$[2,+\\infty)$" });
    db.push({ q: "$y=\\ln(x+1)$ 定义域", a: "$(-1,+\\infty)$" });
    db.push({ q: "$y=\\frac{1}{x-3}$ 定义域", a: "$\\{x|x\\neq 3\\}$" });
    db.push({ q: "$y=\\sqrt{4-x^2}$ 定义域", a: "$[-2,2]$" });
    db.push({ q: "$y=\\lg(2x-1)$ 定义域", a: "$(\\frac{1}{2},+\\infty)$" });
    db.push({ q: "$y=\\frac{1}{\\sqrt{x}}$ 定义域", a: "$(0,+\\infty)$" });
    db.push({ q: "$y=\\arcsin x$ 定义域", a: "$[-1,1]$" });
    db.push({ q: "$y=\\tan x$ 定义域限制", a: "$x\\neq\\frac{\\pi}{2}+k\\pi$" });
    
    // ===== 第三部分：函数值域 =====
    db.push({ q: "$y=x^2$ 值域", a: "$[0,+\\infty)$" });
    db.push({ q: "$y=e^x$ 值域", a: "$(0,+\\infty)$" });
    db.push({ q: "$y=\\sin x$ 值域", a: "$[-1,1]$" });
    db.push({ q: "$y=\\ln x$ 值域", a: "$\\mathbb{R}$" });
    db.push({ q: "$y=|x|$ 值域", a: "$[0,+\\infty)$" });
    db.push({ q: "$y=\\arctan x$ 值域", a: "$(-\\frac{\\pi}{2},\\frac{\\pi}{2})$" });
    
    // ===== 第四部分：函数奇偶性 =====
    db.push({ q: "$f(x)=x^3$ 奇偶性", a: "奇函数" });
    db.push({ q: "$f(x)=x^2$ 奇偶性", a: "偶函数" });
    db.push({ q: "$f(x)=e^x$ 奇偶性", a: "非奇非偶" });
    db.push({ q: "$f(x)=\\sin x$ 奇偶性", a: "奇函数" });
    db.push({ q: "$f(x)=\\cos x$ 奇偶性", a: "偶函数" });
    db.push({ q: "$f(x)=|x|$ 奇偶性", a: "偶函数" });
    db.push({ q: "$f(x)=x+\\frac{1}{x}$ 奇偶性", a: "奇函数" });
    db.push({ q: "$f(x)=\\ln|x|$ 奇偶性", a: "偶函数" });
    db.push({ q: "$f(x)=x^3+x$ 奇偶性", a: "奇函数" });
    db.push({ q: "$f(x)=x^2+1$ 奇偶性", a: "偶函数" });
    
    // ===== 第五部分：函数单调性 =====
    db.push({ q: "$y=2^x$ 单调性", a: "单调递增" });
    db.push({ q: "$y=(\\frac{1}{2})^x$ 单调性", a: "单调递减" });
    db.push({ q: "$y=\\log_2 x$ 单调性", a: "单调递增" });
    db.push({ q: "$y=\\log_{0.5} x$ 单调性", a: "单调递减" });
    db.push({ q: "$y=-x^2$ 在$(0,+\\infty)$", a: "单调递减" });
    db.push({ q: "$y=x^3$ 单调性", a: "单调递增" });
    
    // ===== 第六部分：特殊函数值计算 =====
    db.push({ q: "$\\sin 0$", a: "$0$" });
    db.push({ q: "$\\cos 0$", a: "$1$" });
    db.push({ q: "$\\sin\\frac{\\pi}{6}$", a: "$\\frac{1}{2}$" });
    db.push({ q: "$\\cos\\frac{\\pi}{3}$", a: "$\\frac{1}{2}$" });
    db.push({ q: "$\\sin\\frac{\\pi}{4}$", a: "$\\frac{\\sqrt{2}}{2}$" });
    db.push({ q: "$\\cos\\frac{\\pi}{4}$", a: "$\\frac{\\sqrt{2}}{2}$" });
    db.push({ q: "$\\tan\\frac{\\pi}{4}$", a: "$1$" });
    db.push({ q: "$\\sin\\frac{\\pi}{2}$", a: "$1$" });
    db.push({ q: "$\\cos\\frac{\\pi}{2}$", a: "$0$" });
    db.push({ q: "$\\sin\\pi$", a: "$0$" });
    db.push({ q: "$\\cos\\pi$", a: "$-1$" });
    db.push({ q: "$e^0$", a: "$1$" });
    db.push({ q: "$\\ln 1$", a: "$0$" });
    db.push({ q: "$\\ln e$", a: "$1$" });
    db.push({ q: "$\\lg 10$", a: "$1$" });
    db.push({ q: "$\\lg 100$", a: "$2$" });
    db.push({ q: "$\\log_2 8$", a: "$3$" });
    db.push({ q: "$\\log_3 27$", a: "$3$" });
    db.push({ q: "$\\log_4 16$", a: "$2$" });
    db.push({ q: "$2^{-1}$", a: "$\\frac{1}{2}$" });
    db.push({ q: "$3^{-2}$", a: "$\\frac{1}{9}$" });
    db.push({ q: "$4^{0.5}$", a: "$2$" });
    db.push({ q: "$8^{\\frac{1}{3}}$", a: "$2$" });
    db.push({ q: "$27^{\\frac{2}{3}}$", a: "$9$" });
    db.push({ q: "$16^{0.25}$", a: "$2$" });
    
    // ===== 第七部分：反函数 =====
    db.push({ q: "$y=e^x$ 的反函数", a: "$y=\\ln x$" });
    db.push({ q: "$y=\\ln x$ 的反函数", a: "$y=e^x$" });
    db.push({ q: "$y=10^x$ 的反函数", a: "$y=\\lg x$" });
    db.push({ q: "$y=2^x$ 的反函数", a: "$y=\\log_2 x$" });
    db.push({ q: "$y=x^3$ 的反函数", a: "$y=\\sqrt[3]{x}$" });
    db.push({ q: "$y=\\sin x$ 的反函数", a: "$y=\\arcsin x$" });
    
    // ===== 第八部分：函数图像特征 =====
    db.push({ q: "$y=x^2$ 图像开口方向", a: "向上" });
    db.push({ q: "$y=-x^2$ 图像开口方向", a: "向下" });
    db.push({ q: "$y=x^2$ 对称轴", a: "$x=0$" });
    db.push({ q: "$y=(x-1)^2$ 对称轴", a: "$x=1$" });
    db.push({ q: "$y=|x|$ 图像形状", a: "V形" });
    db.push({ q: "$y=e^x$ 过定点", a: "$(0,1)$" });
    db.push({ q: "$y=\\ln x$ 过定点", a: "$(1,0)$" });
    db.push({ q: "$y=a^x(a>0,a\\neq 1)$ 过定点", a: "$(0,1)$" });
    db.push({ q: "$y=\\log_a x$ 过定点", a: "$(1,0)$" });
    db.push({ q: "$y=\\sin x$ 周期", a: "$2\\pi$" });
    db.push({ q: "$y=\\cos x$ 周期", a: "$2\\pi$" });
    db.push({ q: "$y=\\tan x$ 周期", a: "$\\pi$" });
    db.push({ q: "$y=\\sin 2x$ 周期", a: "$\\pi$" });
    db.push({ q: "$y=|\\sin x|$ 周期", a: "$\\pi$" });
    
    // ===== 第九部分：函数性质综合 =====
    db.push({ q: "$y=\\frac{1}{x}$ 渐近线", a: "$x=0,y=0$" });
    db.push({ q: "$y=e^x$ 的水平渐近线", a: "$y=0$" });
    db.push({ q: "$y=\\arctan x$ 水平渐近线", a: "$y=\\pm\\frac{\\pi}{2}$" });
    db.push({ q: "幂函数通过的定点", a: "$(1,1)$" });
    db.push({ q: "$y=x^n(n>0)$ 在第一象限", a: "单调递增" });
    
    // ===== 第十部分：函数变换 =====
    db.push({ q: "$y=f(x)$ 向右平移2单位", a: "$y=f(x-2)$" });
    db.push({ q: "$y=f(x)$ 向左平移3单位", a: "$y=f(x+3)$" });
    db.push({ q: "$y=f(x)$ 向上平移1单位", a: "$y=f(x)+1$" });
    db.push({ q: "$y=f(x)$ 关于$x$轴对称", a: "$y=-f(x)$" });
    db.push({ q: "$y=f(x)$ 关于$y$轴对称", a: "$y=f(-x)$" });
    db.push({ q: "$y=f(x)$ 关于原点对称", a: "$y=-f(-x)$" });
    db.push({ q: "$y=f(x)$ 横坐标压缩一半", a: "$y=f(2x)$" });
    db.push({ q: "$y=f(x)$ 纵坐标拉伸2倍", a: "$y=2f(x)$" });
    
    // ===== 第十一部分：高级运算 =====
    db.push({ q: "$\\log_2 4 + \\log_2 8$", a: "$5$" });
    db.push({ q: "$\\lg 2 + \\lg 5$", a: "$1$" });
    db.push({ q: "$e^{\\ln 3}$", a: "$3$" });
    db.push({ q: "$\\ln e^5$", a: "$5$" });
    db.push({ q: "$10^{\\lg 7}$", a: "$7$" });
    db.push({ q: "$2^{\\log_2 9}$", a: "$9$" });
    db.push({ q: "$\\log_3 9 \\cdot \\log_9 27$", a: "$3$" });
    db.push({ q: "$\\sin^2\\frac{\\pi}{6}+\\cos^2\\frac{\\pi}{6}$", a: "$1$" });
    db.push({ q: "$\\sin 30°\\cos 60°$", a: "$\\frac{1}{4}$" });
    db.push({ q: "$\\tan 45°+\\cot 45°$", a: "$2$" });
    
    // ===== 第十二部分：极限与连续 =====
    db.push({ q: "$\\lim_{x\\to 0}\\frac{\\sin x}{x}$", a: "$1$" });
    db.push({ q: "$\\lim_{x\\to\\infty}(1+\\frac{1}{x})^x$", a: "$e$" });
    db.push({ q: "$\\lim_{x\\to 0}\\frac{e^x-1}{x}$", a: "$1$" });
    db.push({ q: "$\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x}$", a: "$1$" });
    
    // ===== 第十三部分：导数基础 =====
    db.push({ q: "$(x^n)'$", a: "$nx^{n-1}$" });
    db.push({ q: "$(e^x)'$", a: "$e^x$" });
    db.push({ q: "$(\\ln x)'$", a: "$\\frac{1}{x}$" });
    db.push({ q: "$(\\sin x)'$", a: "$\\cos x$" });
    db.push({ q: "$(\\cos x)'$", a: "$-\\sin x$" });
    db.push({ q: "$(\\tan x)'$", a: "$\\sec^2 x$" });
    db.push({ q: "$(a^x)'$", a: "$a^x\\ln a$" });
    db.push({ q: "$(\\log_a x)'$", a: "$\\frac{1}{x\\ln a}$" });
    db.push({ q: "常数$C$的导数", a: "$0$" });
    db.push({ q: "$(x^2+3x)'$", a: "$2x+3$" });
    db.push({ q: "$(e^{2x})'$", a: "$2e^{2x}$" });
    db.push({ q: "$(\\ln 2x)'$", a: "$\\frac{1}{x}$" });
    
    // ===== 第十四部分：积分基础 =====
    db.push({ q: "$\\int x^n dx$ ($n\\neq -1$)", a: "$\\frac{x^{n+1}}{n+1}+C$" });
    db.push({ q: "$\\int e^x dx$", a: "$e^x+C$" });
    db.push({ q: "$\\int \\frac{1}{x} dx$", a: "$\\ln|x|+C$" });
    db.push({ q: "$\\int \\sin x dx$", a: "$-\\cos x+C$" });
    db.push({ q: "$\\int \\cos x dx$", a: "$\\sin x+C$" });
    db.push({ q: "$\\int 1 dx$", a: "$x+C$" });
    db.push({ q: "$\\int x dx$", a: "$\\frac{x^2}{2}+C$" });
    
    // ===== 第十五部分：三角恒等式 =====
    db.push({ q: "$\\sin^2 x + \\cos^2 x$", a: "$1$" });
    db.push({ q: "$1 + \\tan^2 x$", a: "$\\sec^2 x$" });
    db.push({ q: "$\\sin 2x$", a: "$2\\sin x\\cos x$" });
    db.push({ q: "$\\cos 2x$ (余弦形式)", a: "$\\cos^2 x-\\sin^2 x$" });
    db.push({ q: "$\\tan x$ 的定义", a: "$\\frac{\\sin x}{\\cos x}$" });
    db.push({ q: "$\\sin(-x)$", a: "$-\\sin x$" });
    db.push({ q: "$\\cos(-x)$", a: "$\\cos x$" });
    db.push({ q: "$\\sin(\\frac{\\pi}{2}-x)$", a: "$\\cos x$" });
    db.push({ q: "$\\cos(\\frac{\\pi}{2}-x)$", a: "$\\sin x$" });
    db.push({ q: "$\\sin(\\pi-x)$", a: "$\\sin x$" });
    db.push({ q: "$\\cos(\\pi-x)$", a: "$-\\cos x$" });
    
    return db;
}

const megaDatabase = generateMegaDatabase();

// --- 3. 游戏核心逻辑 ---
let currentLevel = 1;
let levelScore = 0;
let totalAnswered = 0;
let usedProblems = new Set();
let selectedTile = null;
let isProcessing = false;

function getLevelPairs() {
    return Math.min(4 + Math.floor(currentLevel / 2), 12);
}

function initLevel() {
    levelScore = 0;
    selectedTile = null;
    isProcessing = false;
    
    const pairs = getLevelPairs();
    document.getElementById('currentLevel').textContent = currentLevel;
    document.getElementById('levelScore').textContent = '0';
    document.getElementById('levelTotal').textContent = pairs;
    
    const grid = document.getElementById('gameGrid');
    grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(140px, 1fr))`;

    // 选题
    const levelProblems = [];
    const availableIdx = [];
    
    for(let i=0; i<megaDatabase.length; i++) {
        if(!usedProblems.has(i)) availableIdx.push(i);
    }
    
    if(availableIdx.length < pairs) {
        usedProblems.clear();
        for(let i=0; i<megaDatabase.length; i++) availableIdx.push(i);
    }

    for(let i=0; i<pairs; i++) {
        const r = Math.floor(Math.random() * availableIdx.length);
        const pIdx = availableIdx[r];
        levelProblems.push({ ...megaDatabase[pIdx], id: pIdx });
        usedProblems.add(pIdx);
        availableIdx.splice(r, 1);
    }

    // 生成瓷砖
    let tiles = [];
    levelProblems.forEach(p => {
        tiles.push({ type: 'question', text: p.q, matchId: p.id });
        tiles.push({ type: 'answer', text: p.a, matchId: p.id });
    });
    
    tiles.sort(() => Math.random() - 0.5);
    
    grid.innerHTML = '';
    tiles.forEach((t, idx) => {
        const el = document.createElement('div');
        el.className = `tile ${t.type}`;
        el.innerHTML = t.text;
        el.dataset.idx = idx;
        el.dataset.matchId = t.matchId;
        el.onclick = () => onTileClick(el);
        grid.appendChild(el);
    });

    // MathJax渲染
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function onTileClick(el) {
    if (isProcessing || el.classList.contains('matched') || el.classList.contains('selected')) return;

    el.classList.add('selected');

    if (!selectedTile) {
        selectedTile = el;
    } else {
        const id1 = selectedTile.dataset.matchId;
        const id2 = el.dataset.matchId;
        const type1 = selectedTile.classList.contains('question');
        const type2 = el.classList.contains('question');

        isProcessing = true;

        if (id1 === id2 && type1 !== type2) {
            handleMatch(selectedTile, el);
        } else {
            handleMismatch(selectedTile, el);
        }
    }
}

function handleMatch(el1, el2) {
    createParticles(el1);
    createParticles(el2);
    
    setTimeout(() => {
        el1.classList.remove('selected');
        el2.classList.remove('selected');
        el1.classList.add('matched');
        el2.classList.add('matched');
        
        levelScore++;
        totalAnswered++;
        document.getElementById('levelScore').textContent = levelScore;
        
        selectedTile = null;
        isProcessing = false;

        if (levelScore >= getLevelPairs()) {
            setTimeout(levelComplete, 800);
        }
    }, 300);
}

function handleMismatch(el1, el2) {
    el1.style.animation = 'shake 0.4s';
    el2.style.animation = 'shake 0.4s';
    
    setTimeout(() => {
        el1.classList.remove('selected');
        el2.classList.remove('selected');
        el1.style.animation = '';
        el2.style.animation = '';
        selectedTile = null;
        isProcessing = false;
    }, 400);
}

function createParticles(target) {
    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    for(let i=0; i<8; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = cx + 'px';
        p.style.top = cy + 'px';
        p.style.background = target.classList.contains('question') ? '#4f46e5' : '#ec4899';
        
        const angle = (Math.PI * 2 * i) / 8;
        const dist = 60;
        p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 800);
    }
}

function levelComplete() {
    document.getElementById('completedLevel').textContent = currentLevel;
    document.getElementById('totalAnswered').textContent = totalAnswered;
    document.getElementById('levelComplete').classList.add('show');
}

function nextLevel() {
    document.getElementById('levelComplete').classList.remove('show');
    currentLevel++;
    initLevel();
}

function restartGame() {
    document.getElementById('gameComplete').classList.remove('show');
    currentLevel = 1;
    totalAnswered = 0;
    usedProblems.clear();
    initLevel();
}

function toggleReturnLinks() {
    const links = document.querySelector('.return-links');
    if (links.style.display === 'flex') {
        links.style.opacity = '0';
        setTimeout(() => links.style.display = 'none', 160);
    } else {
        links.style.display = 'flex';
        setTimeout(() => links.style.opacity = '1', 10);
    }
}

// --- 4. 初始化 ---
window.onload = () => {
    createStarfield();
    initLevel();
};

