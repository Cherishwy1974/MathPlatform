// lab2-14.js - 直接代入法求极限脚本

// --- Data ---
const QUESTIONS = [
    {
        q: "\\lim_{x \\to 2} (3x^2 - 5x + 1)",
        func: x => 3*x*x - 5*x + 1,
        target: 2,
        range: [-1, 5],
        steps: [
            { text: "步骤 1: 检查函数类型", desc: "该函数 $f(x) = 3x^2 - 5x + 1$ 是多项式函数。" },
            { text: "步骤 2: 确认连续性", desc: "多项式函数在实数域内处处连续，因此在 $x=2$ 处连续。" },
            { text: "步骤 3: 代入求值", desc: "直接将 $x=2$ 代入函数表达式。" },
            { text: "计算过程", desc: "$$ f(2) = 3(2)^2 - 5(2) + 1 $$" },
            { text: "化简", desc: "$$ = 3(4) - 10 + 1 = 12 - 10 + 1 $$" },
            { text: "最终结果", desc: "$$ = 3 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 1} (2x^3 + 3x - 1)",
        func: x => 2*Math.pow(x,3) + 3*x - 1,
        target: 1,
        range: [-1, 3],
        steps: [
            { text: "步骤 1: 检查函数类型", desc: "函数为三次多项式。" },
            { text: "步骤 2: 确认连续性", desc: "多项式在 $x=1$ 处连续。" },
            { text: "步骤 3: 代入求值", desc: "代入 $x=1$。" },
            { text: "计算过程", desc: "$$ 2(1)^3 + 3(1) - 1 $$" },
            { text: "最终结果", desc: "$$ = 2 + 3 - 1 = 4 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 3} \\frac{x^2 + 2x - 3}{x + 1}",
        func: x => (x*x + 2*x - 3)/(x + 1),
        target: 3,
        range: [0, 6],
        steps: [
            { text: "步骤 1: 检查分母", desc: "当 $x=3$ 时，分母 $3+1 = 4 \\neq 0$。" },
            { text: "步骤 2: 确认连续性", desc: "有理函数在分母不为零处连续。" },
            { text: "步骤 3: 代入求值", desc: "直接代入 $x=3$。" },
            { text: "计算过程", desc: "$$ \\frac{3^2 + 2(3) - 3}{3 + 1} = \\frac{9 + 6 - 3}{4} $$" },
            { text: "最终结果", desc: "$$ = \\frac{12}{4} = 3 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 0} \\sin(2x + \\frac{\\pi}{4})",
        func: x => Math.sin(2*x + Math.PI/4),
        target: 0,
        range: [-Math.PI, Math.PI],
        steps: [
            { text: "步骤 1: 检查函数", desc: "三角复合函数在定义域内连续。" },
            { text: "步骤 2: 代入求值", desc: "将 $x=0$ 代入。" },
            { text: "计算过程", desc: "$$ \\sin(2(0) + \\frac{\\pi}{4}) = \\sin(\\frac{\\pi}{4}) $$" },
            { text: "最终结果", desc: "$$ = \\frac{\\sqrt{2}}{2} $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 4} \\sqrt{x}",
        func: x => Math.sqrt(x),
        target: 4,
        range: [0, 8],
        steps: [
            { text: "步骤 1: 检查定义域", desc: "幂函数 $\\sqrt{x}$ 在 $x \\ge 0$ 定义且连续。" },
            { text: "步骤 2: 代入求值", desc: "代入 $x=4$。" },
            { text: "最终结果", desc: "$$ \\sqrt{4} = 2 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 1} e^{2x}",
        func: x => Math.exp(2*x),
        target: 1,
        range: [-1, 2],
        steps: [
            { text: "步骤 1: 检查连续性", desc: "指数函数处处连续。" },
            { text: "步骤 2: 代入求值", desc: "代入 $x=1$。" },
            { text: "最终结果", desc: "$$ e^{2(1)} = e^2 \\approx 7.39 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 2} \\ln(x)",
        func: x => Math.log(x),
        target: 2,
        range: [0.1, 5],
        steps: [
            { text: "步骤 1: 检查定义域", desc: "对数函数在 $x>0$ 时连续， $2>0$。" },
            { text: "步骤 2: 代入求值", desc: "$$ \\ln(2) $$" },
            { text: "最终结果", desc: "$$ \\approx 0.693 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 0} \\frac{3x + 5}{2x + 1}",
        func: x => (3*x+5)/(2*x+1),
        target: 0,
        range: [-2, 2],
        steps: [
            { text: "步骤 1: 检查分母", desc: "分母 $2(0)+1 = 1 \\neq 0$。" },
            { text: "步骤 2: 代入求值", desc: "直接代入 $x=0$。" },
            { text: "计算过程", desc: "$$ \\frac{3(0)+5}{2(0)+1} $$" },
            { text: "最终结果", desc: "$$ = 5 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to \\pi} \\cos(x)",
        func: x => Math.cos(x),
        target: Math.PI,
        range: [0, 2*Math.PI],
        steps: [
            { text: "步骤 1: 连续性", desc: "余弦函数连续。" },
            { text: "步骤 2: 代入", desc: "$$ \\cos(\\pi) $$" },
            { text: "最终结果", desc: "$$ = -1 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to -1} (x^3 - x)",
        func: x => x*x*x - x,
        target: -1,
        range: [-3, 1],
        steps: [
            { text: "步骤 1: 连续性", desc: "多项式连续。" },
            { text: "步骤 2: 代入", desc: "$$ (-1)^3 - (-1) $$" },
            { text: "计算", desc: "$$ -1 + 1 $$" },
            { text: "最终结果", desc: "$$ = 0 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 0} (e^x + 1)",
        func: x => Math.exp(x) + 1,
        target: 0,
        range: [-2, 2],
        steps: [
            { text: "步骤 1: 连续性", desc: "基本初等函数和连续。" },
            { text: "步骤 2: 代入", desc: "$$ e^0 + 1 $$" },
            { text: "最终结果", desc: "$$ = 1 + 1 = 2 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 2} |x - 2|",
        func: x => Math.abs(x-2),
        target: 2,
        range: [0, 4],
        steps: [
            { text: "步骤 1: 连续性", desc: "绝对值函数连续。" },
            { text: "步骤 2: 代入", desc: "$$ |2 - 2| $$" },
            { text: "最终结果", desc: "$$ = 0 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 1} \\sqrt{x^2 + 3}",
        func: x => Math.sqrt(x*x + 3),
        target: 1,
        range: [-2, 4],
        steps: [
            { text: "步骤 1: 连续性", desc: "复合函数连续（根号内恒正）。" },
            { text: "步骤 2: 代入", desc: "$$ \\sqrt{1^2 + 3} $$" },
            { text: "计算", desc: "$$ \\sqrt{4} $$" },
            { text: "最终结果", desc: "$$ = 2 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 0} \\frac{1}{x^2+1}",
        func: x => 1/(x*x + 1),
        target: 0,
        range: [-3, 3],
        steps: [
            { text: "步骤 1: 分母检查", desc: "$0^2+1 = 1 \\neq 0$。" },
            { text: "步骤 2: 代入", desc: "$$ \\frac{1}{0+1} $$" },
            { text: "最终结果", desc: "$$ = 1 $$", isAnswer: true }
        ]
    },
    {
        q: "\\lim_{x \\to 2} (x-2)^2",
        func: x => (x-2)*(x-2),
        target: 2,
        range: [0, 4],
        steps: [
            { text: "步骤 1: 连续性", desc: "多项式连续。" },
            { text: "步骤 2: 代入", desc: "$$ (2-2)^2 $$" },
            { text: "最终结果", desc: "$$ = 0 $$", isAnswer: true }
        ]
    }
];

// --- Game Logic ---
class Game {
    constructor() {
        this.qIndex = 0;
        this.stepIndex = -1;
        this.animId = null;
        
        this.dom = {
            question: document.getElementById('question-display'),
            counter: document.getElementById('question-counter'),
            steps: document.getElementById('steps-container'),
            canvas: document.getElementById('graphCanvas')
        };
        
        this.ctx = this.dom.canvas.getContext('2d');
        
        // Animation State
        this.animState = {
            t: 0,
            leftX: 0,
            rightX: 0,
            targetY: 0
        };

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('keydown', (e) => this.handleInput(e));
        
        this.loadQuestion();
    }

    resizeCanvas() {
        const container = document.getElementById('canvas-container');
        this.dom.canvas.width = container.clientWidth;
        this.dom.canvas.height = container.clientHeight;
        this.draw();
    }

    loadQuestion() {
        this.stepIndex = -1;
        const q = QUESTIONS[this.qIndex];
        
        // Update UI
        this.dom.question.innerHTML = `$$ ${q.q} $$`;
        this.dom.counter.innerText = `${this.qIndex + 1} / ${QUESTIONS.length}`;
        this.dom.steps.innerHTML = '';
        
        // Create Steps DOM
        q.steps.forEach((s, i) => {
            const el = document.createElement('div');
            el.className = `step p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-700`;
            if(s.isAnswer) el.classList.add('border-indigo-400', 'bg-indigo-50');
            
            const title = document.createElement('div');
            title.className = 'font-bold text-sm text-indigo-600 mb-1';
            title.innerText = s.isAnswer ? '最终答案' : (s.text.includes('步骤') ? s.text.split(':')[0] : '计算');
            
            const content = document.createElement('div');
            content.className = 'text-base';
            content.innerHTML = s.isAnswer ? s.desc : (s.text.includes('步骤') ? s.desc : s.desc);
            if (!s.text.includes('步骤') && !s.isAnswer) content.innerHTML = s.desc;
            
            el.appendChild(title);
            el.appendChild(content);
            this.dom.steps.appendChild(el);
        });

        // Reset Animation
        this.animState.t = 0;
        this.startAnimation();
        
        if (window.MathJax) window.MathJax.typesetPromise();
    }

    nextStep() {
        const q = QUESTIONS[this.qIndex];
        if (this.stepIndex < q.steps.length - 1) {
            this.stepIndex++;
            const steps = this.dom.steps.children;
            steps[this.stepIndex].classList.add('active');
            steps[this.stepIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    resetSteps() {
        this.stepIndex = -1;
        Array.from(this.dom.steps.children).forEach(el => el.classList.remove('active'));
    }

    nextQuestion() {
        this.qIndex = (this.qIndex + 1) % QUESTIONS.length;
        this.loadQuestion();
    }

    prevQuestion() {
        this.qIndex = (this.qIndex - 1 + QUESTIONS.length) % QUESTIONS.length;
        this.loadQuestion();
    }

    handleInput(e) {
        if (e.key === 'ArrowRight') this.nextQuestion();
        if (e.key === 'ArrowLeft') this.prevQuestion();
        if (e.key === 'ArrowDown') this.nextStep();
        if (e.key === 'ArrowUp') this.resetSteps();
    }

    startAnimation() {
        if (this.animId) cancelAnimationFrame(this.animId);
        const animate = () => {
            this.animState.t += 0.005;
            if (this.animState.t > 1) this.animState.t = 0;
            
            this.draw();
            this.animId = requestAnimationFrame(animate);
        };
        animate();
    }

    draw() {
        const ctx = this.ctx;
        const w = this.dom.canvas.width;
        const h = this.dom.canvas.height;
        const q = QUESTIONS[this.qIndex];

        ctx.clearRect(0, 0, w, h);

        // Coordinate System Setup
        const [minX, maxX] = q.range;
        const rangeX = maxX - minX;
        const scaleX = w / rangeX;
        
        // Auto Scale Y
        let minY = Infinity, maxY = -Infinity;
        for(let x = minX; x <= maxX; x += 0.1) {
            const y = q.func(x);
            if(isFinite(y)) {
                if(y < minY) minY = y;
                if(y > maxY) maxY = y;
            }
        }
        const rangeY = (maxY - minY) || 4; 
        const paddingY = rangeY * 0.5; 
        const safeMinY = minY - paddingY;
        const safeMaxY = maxY + paddingY;
        const scaleY = h / (safeMaxY - safeMinY);

        // Transform helper
        const toScreen = (x, y) => ({
            x: (x - minX) * scaleX,
            y: h - (y - safeMinY) * scaleY
        });

        // Draw Grid
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.lineWidth = 1;
        
        // Axis
        const origin = toScreen(0, 0);
        
        // X Axis
        if(origin.y >= 0 && origin.y <= h) {
            ctx.beginPath();
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 2;
            ctx.moveTo(0, origin.y);
            ctx.lineTo(w, origin.y);
            ctx.stroke();
        }
        
        // Y Axis
        if(origin.x >= 0 && origin.x <= w) {
            ctx.beginPath();
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 2;
            ctx.moveTo(origin.x, 0);
            ctx.lineTo(origin.x, h);
            ctx.stroke();
        }

        // Draw Function
        ctx.beginPath();
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 3;
        let first = true;
        for(let px = 0; px <= w; px+=2) {
            const mathX = (px / scaleX) + minX;
            const mathY = q.func(mathX);
            
            if (!isFinite(mathY)) {
                first = true;
                continue;
            }
            
            const py = h - (mathY - safeMinY) * scaleY;
            
            if (py < -h || py > 2*h) {
                 first = true;
                 continue;
            }

            if (first) {
                ctx.moveTo(px, py);
                first = false;
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.stroke();

        // Animation Logic: Approaching Limits
        const ease = t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const progress = ease(this.animState.t); 
        
        const dist = (maxX - minX) * 0.3;
        
        // Left Point
        const xL = q.target - dist * (1 - progress);
        const yL = q.func(xL);
        const pL = toScreen(xL, yL);
        
        // Right Point
        const xR = q.target + dist * (1 - progress);
        const yR = q.func(xR);
        const pR = toScreen(xR, yR);

        // Target Point
        const tY = q.func(q.target);
        const pT = toScreen(q.target, tY);

        // Draw Approach Points
        // Left (Emerald)
        ctx.fillStyle = '#10b981';
        ctx.beginPath(); ctx.arc(pL.x, pL.y, 6, 0, Math.PI*2); ctx.fill();
        
        // Right (Amber)
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(pR.x, pR.y, 6, 0, Math.PI*2); ctx.fill();

        // Target (Red - Final)
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(pT.x, pT.y, 6, 0, Math.PI*2); ctx.fill();
        
        // Draw Guidelines (Dashed)
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 1;
        
        // Target X Line
        ctx.beginPath(); ctx.moveTo(pT.x, pT.y); ctx.lineTo(pT.x, origin.y); ctx.stroke();
        
        // Target Y Line
        ctx.beginPath(); ctx.moveTo(pT.x, pT.y); ctx.lineTo(origin.x, pT.y); ctx.stroke();
        
        ctx.setLineDash([]);

        // Labels
        ctx.font = '14px monospace';
        ctx.fillStyle = '#64748b';
        ctx.fillText(`x → ${q.target}`, pT.x + 10, h - 10);
        ctx.fillText(`y → ${tY.toFixed(2)}`, 10, pT.y - 10);
    }
}

// --- Init ---
const game = new Game();

// Toggle Return Links
function toggleReturnLinks() {
    const panel = document.getElementById('returnHomePanel');
    if (panel) {
        panel.classList.toggle('hidden');
    }
}

