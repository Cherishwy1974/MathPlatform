// lab2-13.js - 极限与连续大师挑战脚本

// --- Data & Config ---
const PROBLEMS = [
    // Level 1: 基础极限 (Direct Substitution & Basic Infinite)
    [
        { q: "\\lim_{x \\to 2} (x^2+1)", a: "5" },
        { q: "\\lim_{x \\to 0} \\cos x", a: "1" },
        { q: "\\lim_{x \\to 1} \\frac{1}{x}", a: "1" },
        { q: "\\lim_{x \\to \\infty} \\frac{1}{x}", a: "0" },
        { q: "\\lim_{x \\to 0^+} \\frac{1}{x}", a: "+\\infty" },
        { q: "\\lim_{x \\to 3} 2x", a: "6" }
    ],
    // Level 2: 0/0型 (Factorization & Basic Trig)
    [
        { q: "\\lim_{x \\to 2} \\frac{x^2-4}{x-2}", a: "4" },
        { q: "\\lim_{x \\to 1} \\frac{x-1}{x^2-1}", a: "\\frac{1}{2}" },
        { q: "\\lim_{x \\to 0} \\frac{\\sin x}{x}", a: "1" },
        { q: "\\lim_{x \\to 0} \\frac{\\tan x}{x}", a: "1" },
        { q: "\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2}", a: "\\frac{1}{2}" },
        { q: "\\lim_{x \\to 0} \\frac{e^x-1}{x}", a: "1" }
    ],
    // Level 3: 无穷大与连续性
    [
        { q: "\\lim_{x \\to \\infty} \\frac{2x^2+1}{x^2-3}", a: "2" },
        { q: "\\lim_{x \\to \\infty} \\frac{3x+1}{2x-5}", a: "\\frac{3}{2}" },
        { q: "f(x)=x^2 \\text{在} x=1 \\text{处}", a: "\\text{连续}" },
        { q: "f(x)=\\frac{1}{x} \\text{在} x=0 \\text{处}", a: "\\text{间断}" },
        { q: "\\lim_{x \\to \\infty} (1+\\frac{1}{x})^x", a: "e" },
        { q: "\\lim_{x \\to 0} (1+x)^{\\frac{1}{x}}", a: "e" }
    ],
    // Level 4: 综合挑战
    [
        { q: "\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x}", a: "1" },
        { q: "\\lim_{x \\to 0} \\frac{\\sqrt{1+x}-1}{x}", a: "\\frac{1}{2}" },
        { q: "\\lim_{x \\to \\infty} \\frac{\\sin x}{x}", a: "0" },
        { q: "f(x)=|x| \\text{在} x=0 \\text{处}", a: "\\text{连续}" },
        { q: "\\lim_{x \\to \\infty} \\arctan x", a: "\\frac{\\pi}{2}" },
        { q: "\\lim_{x \\to 0^+} x \\ln x", a: "0" },
        { q: "\\lim_{x \\to 0} x \\sin(\\frac{1}{x})", a: "0" },
        { q: "\\lim_{n \\to \\infty} \\sqrt[n]{n}", a: "1" }
    ]
];

// --- Game Logic ---
class Game {
    constructor() {
        this.currentLevelIdx = 0;
        this.score = 0;
        this.pairs = [];
        this.grid = document.getElementById('grid');
        this.firstSelection = null;
        this.isProcessing = false;
        
        this.dom = {
            level: document.getElementById('level-display'),
            score: document.getElementById('score-display'),
            total: document.getElementById('total-display'),
            levelOverlay: document.getElementById('level-overlay'),
            endOverlay: document.getElementById('end-overlay')
        };

        this.initLevel();
    }

    initLevel() {
        const problemSet = PROBLEMS[this.currentLevelIdx];
        this.pairs = [];
        this.score = 0;
        this.firstSelection = null;
        this.isProcessing = false;

        // Create pairs
        problemSet.forEach((p, i) => {
            this.pairs.push({ id: i, content: p.q, type: 'q' });
            this.pairs.push({ id: i, content: p.a, type: 'a' });
        });

        // Shuffle
        this.pairs.sort(() => Math.random() - 0.5);

        // Update UI
        this.dom.level.innerText = this.currentLevelIdx + 1;
        this.dom.score.innerText = 0;
        this.dom.total.innerText = problemSet.length;
        
        // Grid Layout
        this.renderGrid();
    }

    renderGrid() {
        this.grid.innerHTML = '';
        // Adaptive columns based on item count
        const count = this.pairs.length;
        let cols = 4;
        if (window.innerWidth < 640) cols = 2;
        else if (count > 12) cols = 5;
        else if (count <= 8) cols = 3;

        this.grid.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
        
        this.pairs.forEach((item, idx) => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.dataset.idx = idx;
            tile.dataset.id = item.id;
            
            const content = document.createElement('div');
            content.className = 'tile-content';
            content.innerHTML = `$$ ${item.content} $$`;
            
            tile.appendChild(content);
            tile.onclick = () => this.handleTileClick(tile);
            this.grid.appendChild(tile);
        });

        // Render Math - 安全调用
        if(window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            window.MathJax.typesetPromise([this.grid]).catch(err => console.log(err));
        } else if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
            // 等待 MathJax 完全加载
            window.MathJax.startup.promise.then(() => {
                if (typeof window.MathJax.typesetPromise === 'function') {
                    window.MathJax.typesetPromise([this.grid]).catch(err => console.log(err));
                }
            });
        }
    }

    handleTileClick(tile) {
        if (this.isProcessing || tile.classList.contains('matched') || tile.classList.contains('selected')) return;

        tile.classList.add('selected');

        if (!this.firstSelection) {
            this.firstSelection = tile;
        } else {
            this.checkMatch(this.firstSelection, tile);
            this.firstSelection = null;
        }
    }

    checkMatch(tile1, tile2) {
        this.isProcessing = true;
        const id1 = tile1.dataset.id;
        const id2 = tile2.dataset.id;

        if (id1 === id2) {
            // Match
            setTimeout(() => {
                tile1.classList.remove('selected');
                tile2.classList.remove('selected');
                tile1.classList.add('matched');
                tile2.classList.add('matched');
                
                this.score++;
                this.dom.score.innerText = this.score;
                this.isProcessing = false;

                this.checkLevelComplete();
            }, 300);
        } else {
            // No Match
            setTimeout(() => {
                tile1.classList.add('shake');
                tile2.classList.add('shake');
            }, 300);

            setTimeout(() => {
                tile1.classList.remove('selected', 'shake');
                tile2.classList.remove('selected', 'shake');
                this.isProcessing = false;
            }, 800);
        }
    }

    checkLevelComplete() {
        const target = PROBLEMS[this.currentLevelIdx].length;
        if (this.score >= target) {
            setTimeout(() => {
                if (this.currentLevelIdx < PROBLEMS.length - 1) {
                    this.dom.levelOverlay.classList.add('active');
                } else {
                    this.dom.endOverlay.classList.add('active');
                }
            }, 800);
        }
    }

    nextLevel() {
        this.dom.levelOverlay.classList.remove('active');
        this.currentLevelIdx++;
        this.initLevel();
    }

    restart() {
        this.dom.endOverlay.classList.remove('active');
        this.currentLevelIdx = 0;
        this.initLevel();
    }
    
    showExitConfirm() {
        if(confirm("确定要退出游戏吗？")) {
            window.location.href = '../index.html';
        }
    }
}

// --- Init ---
const game = new Game();

// Handle Resize for Grid
window.addEventListener('resize', () => {
    game.renderGrid();
});

// Toggle Return Links
function toggleReturnLinks() {
    const panel = document.getElementById('returnHomePanel');
    if (panel) {
        panel.classList.toggle('hidden');
    }
}

