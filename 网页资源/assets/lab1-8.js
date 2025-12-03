// lab1-8.js - 函数艺术与运动实验室专用脚本

// --- 核心逻辑 ---
let currentPanel = 'art';
let animationId = null;
let currentMotionType = 'linear';

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

    // 切换时停止动画
    if (panelId !== 'motion') cancelAnimationFrame(animationId);
    if (panelId === 'art') startRoseAnimation();
    
    requestAnimationFrame(() => {
        renderMath();
    });
}

function openDesmosGallery() {
    window.open('https://www.desmos.com/art?lang=zh-CN', '_blank');
}

// --- 艺术面板：玫瑰曲线动画 ---
let roseAnimId;
function startRoseAnimation() {
    const canvas = document.getElementById('roseCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    let k = 2;
    let kDir = 0.005;

    function drawRose() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = '#4f46e5';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        
        for (let theta = 0; theta <= Math.PI * 2 * 10; theta += 0.05) {
            const r = 80 * Math.sin(k * theta);
            const x = cx + r * Math.cos(theta);
            const y = cy + r * Math.sin(theta);
            if (theta === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        k += kDir;
        if (k > 7 || k < 2) kDir *= -1;
        
        if (currentPanel === 'art') roseAnimId = requestAnimationFrame(drawRose);
    }
    cancelAnimationFrame(roseAnimId);
    drawRose();
}

// --- 运动面板逻辑 ---
const motionData = {
    'linear': {
        title: '线性函数 (Linear)',
        desc: '就像匀速行驶的汽车，步伐稳健，不急不躁。<br>变化率（速度）是恒定的。',
        formula: '$s(t) = v \\cdot t$',
        func: (t) => t
    },
    'quadratic': {
        title: '二次函数 (Quadratic)',
        desc: '如同自由落体或加速跑，速度越来越快。<br>变化率（速度）本身在均匀增加。',
        formula: '$s(t) = \\frac{1}{2}at^2$',
        func: (t) => t * t
    },
    'exponential': {
        title: '指数函数 (Exponential)',
        desc: '起步缓慢，随后爆发式增长。<br>就像细胞分裂或病毒传播，越往后越惊人。',
        formula: '$s(t) = a^t - 1$',
        func: (t) => (Math.pow(10, t) - 1) / 9
    },
    'sine': {
        title: '正弦函数 (Sine)',
        desc: '往复运动，如钟摆或弹簧振子。<br>速度时快时慢，方向周期性改变。',
        formula: '$s(t) = \\sin(\\omega t)$',
        func: (t) => (Math.sin(t * Math.PI * 2 - Math.PI/2) + 1) / 2
    }
};

function selectMotion(type) {
    currentMotionType = type;
    
    // 更新按钮状态
    document.querySelectorAll('.func-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'border-indigo-200', 'active-func');
        btn.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
    });
    const btns = document.querySelectorAll('.func-btn');
    const idx = ['linear', 'quadratic', 'exponential', 'sine'].indexOf(type);
    if(btns[idx]) {
        btns[idx].classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
        btns[idx].classList.add('bg-indigo-50', 'text-indigo-700', 'border-indigo-200', 'active-func');
    }

    // 更新描述
    const data = motionData[type];
    const container = document.getElementById('motion-desc-container');
    container.innerHTML = `
        <div class="slide-animate">
            <h4 class="font-bold text-gray-800 mb-2 text-lg">${data.title}</h4>
            <p class="text-sm text-gray-600 leading-relaxed mb-3">${data.desc}</p>
            <div class="font-mono text-indigo-600 bg-white px-3 py-1 rounded border border-indigo-100 inline-block">
                ${data.formula}
            </div>
        </div>
    `;
    renderMath();
    
    // 重置小球
    resetBall();
}

function resetBall() {
    cancelAnimationFrame(animationId);
    const ball = document.getElementById('motion-ball');
    const trail = document.getElementById('motion-trail');
    if (ball) ball.style.left = '16px';
    if (trail) trail.innerHTML = '';
    document.getElementById('time-display').innerText = 't = 0.0s';
}

function playMotion() {
    resetBall();
    const ball = document.getElementById('motion-ball');
    const stage = document.getElementById('motion-stage');
    const trailSvg = document.getElementById('motion-trail');
    const timeDisplay = document.getElementById('time-display');
    
    if (!ball || !stage) return;

    const width = stage.clientWidth - 64;
    const startX = 16;
    const duration = 2000;
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        let progress = Math.min(elapsed / duration, 1);

        const func = motionData[currentMotionType].func;
        const val = func(progress);
        
        const currentX = startX + val * width;
        ball.style.left = `${currentX}px`;
        timeDisplay.innerText = `t = ${(elapsed/1000).toFixed(1)}s`;

        // 绘制轨迹
        if (progress < 1) {
            if (elapsed % 100 < 17) {
                const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                dot.setAttribute("cx", currentX + 16);
                dot.setAttribute("cy", "50%");
                dot.setAttribute("r", "2");
                dot.setAttribute("fill", "rgba(99,102,241,0.5)");
                trailSvg.appendChild(dot);
            }
            animationId = requestAnimationFrame(animate);
        } else {
            if (currentMotionType === 'sine') {
                startTime = timestamp;
                trailSvg.innerHTML = '';
                animationId = requestAnimationFrame(animate);
            }
        }
    }
    animationId = requestAnimationFrame(animate);
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
    selectMotion('linear');
    startRoseAnimation();
    renderMath();
});

window.addEventListener('resize', () => {
    if(currentPanel === 'art') startRoseAnimation();
});

