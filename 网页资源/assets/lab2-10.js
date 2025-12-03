// lab2-10.js - 连续与间断：函数分类大作战脚本

// --- Starfield Background ---
function initStars() {
    const container = document.getElementById('starfield');
    if (!container) return;
    
    // 清空现有星星
    container.innerHTML = '';
    
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 5;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        container.appendChild(star);
    }
}

// --- Game Logic ---
class FunctionCard {
    constructor(id, type, name, drawFunc) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.drawFunc = drawFunc;
        this.x = 0;
        this.y = -150;
        this.speed = 1.5;
        this.width = 160;
        this.height = 100;
        this.element = null;
    }

    createDOM(parent) {
        const el = document.createElement('div');
        el.className = 'falling-card absolute bg-slate-800 rounded-lg border border-slate-600 flex flex-col items-center justify-center p-2 z-10';
        el.style.width = `${this.width}px`;
        el.style.height = `${this.height}px`;
        el.style.left = `${this.x}px`;
        el.style.top = `${this.y}px`;

        const canvas = document.createElement('canvas');
        canvas.width = 140;
        canvas.height = 70;
        this.drawFunc(canvas.getContext('2d'), 140, 70);
        
        const label = document.createElement('div');
        label.className = 'text-xs text-gray-300 mt-1 font-mono';
        label.innerText = this.name;

        el.appendChild(canvas);
        el.appendChild(label);
        
        parent.appendChild(el);
        this.element = el;
    }

    update(speedMultiplier) {
        this.y += this.speed * speedMultiplier;
        if (this.element) {
            this.element.style.top = `${this.y}px`;
        }
    }

    remove() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}

class Game {
    constructor() {
        this.score = 0;
        this.combo = 0;
        this.lives = 3;
        this.isPlaying = false;
        this.isPaused = false;
        this.cards = [];
        this.gameArea = document.getElementById('gameArea');
        this.spawnTimer = null;
        this.gameLoopId = null;
        this.speedMultiplier = 1.0;
        this.lastSpawnTime = 0;
        this.spawnInterval = 3000;

        // Function Definitions
        this.funcDefs = [
            // Continuous
            { type: 'continuous', name: 'y = x²', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => x*x) },
            { type: 'continuous', name: 'y = sin(x)', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => Math.sin(x*4)) },
            { type: 'continuous', name: 'y = |x|', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => Math.abs(x)) },
            
            // Removable
            { type: 'removable', name: 'y = sin(x)/x', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => x===0 ? null : Math.sin(x*3)/(x*3), true) },
            { type: 'removable', name: 'y = (x²-1)/(x-1)', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => Math.abs(x-0.5)<0.1 ? null : (x-0.5)+1, true, 0.5) },
            
            // Jump
            { type: 'jump', name: 'y = sgn(x)', draw: (ctx, w, h) => this.drawJump(ctx, w, h, x => x>0 ? 1 : -1) },
            { type: 'jump', name: 'y = [x]', draw: (ctx, w, h) => this.drawJump(ctx, w, h, x => Math.floor(x)) },
            
            // Infinite
            { type: 'infinite', name: 'y = 1/x', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => 1/(x)) },
            { type: 'infinite', name: 'y = 1/x²', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => 1/(x*x)) },
            { type: 'infinite', name: 'y = tan(x)', draw: (ctx, w, h) => this.drawGraph(ctx, w, h, x => Math.tan(x*2)) }
        ];
    }

    drawGraph(ctx, w, h, func, hole = false, holeX = 0) {
        ctx.strokeStyle = '#a5b4fc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const scaleX = w / 4;
        const scaleY = h / 4; 
        const offsetX = w / 2;
        const offsetY = h / 2;

        let first = true;
        for(let px = 0; px <= w; px+=2) {
            const x = (px - offsetX) / scaleX;
            const val = func(x);
            
            if (val === null || Math.abs(val) > 3) {
                first = true;
                continue;
            }

            const py = offsetY - val * scaleY;
            
            if (first) {
                ctx.moveTo(px, py);
                first = false;
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.stroke();

        if (hole) {
            const hPx = offsetX + holeX * scaleX;
            let limitY = 0;
            if(func.toString().includes('sin')) limitY = 1;
            else if (func.toString().includes('+1')) limitY = holeX + 1;
            
            const hPy = offsetY - limitY * scaleY;
            ctx.fillStyle = '#1e293b';
            ctx.strokeStyle = '#a5b4fc';
            ctx.beginPath();
            ctx.arc(hPx, hPy, 3, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
        }
    }

    drawJump(ctx, w, h, func) {
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        const scaleX = w / 4;
        const scaleY = h / 4;
        const offsetX = w / 2;
        const offsetY = h / 2;

        ctx.beginPath();
        for(let px = 0; px < offsetX; px+=2) {
            const x = (px - offsetX) / scaleX;
            const y = func(x); 
            const py = offsetY - y * scaleY;
            if(px===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
        }
        ctx.stroke();
        
        ctx.beginPath();
        for(let px = offsetX; px <= w; px+=2) {
            const x = (px - offsetX) / scaleX;
            const y = func(x === 0 ? 0.01 : x);
            const py = offsetY - y * scaleY;
            if(px===offsetX) ctx.moveTo(px,py); else ctx.lineTo(px,py);
        }
        ctx.stroke();

        const y1 = func(-0.1);
        const y2 = func(0.1);
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath(); ctx.arc(offsetX, offsetY - y1*scaleY, 3, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#1e293b'; ctx.strokeStyle='#fbbf24';
        ctx.beginPath(); ctx.arc(offsetX, offsetY - y2*scaleY, 3, 0, Math.PI*2); ctx.fill(); ctx.stroke();
    }

    start() {
        document.getElementById('tutorialScreen').classList.add('hidden');
        document.getElementById('gameOverScreen').classList.add('hidden');
        document.getElementById('startBtn').innerText = "暂停游戏";
        this.resetStats();
        this.isPlaying = true;
        this.isPaused = false;
        this.loop();
    }

    restart() {
        this.cards.forEach(c => c.remove());
        this.cards = [];
        this.start();
    }

    resetStats() {
        this.score = 0;
        this.combo = 0;
        this.lives = 3;
        this.speedMultiplier = 1.0;
        this.updateUI();
    }

    togglePause() {
        if (!this.isPlaying) {
            this.start();
            return;
        }
        this.isPaused = !this.isPaused;
        document.getElementById('startBtn').innerText = this.isPaused ? "继续游戏" : "暂停游戏";
    }

    spawnCard() {
        const def = this.funcDefs[Math.floor(Math.random() * this.funcDefs.length)];
        const card = new FunctionCard(Date.now(), def.type, def.name, def.draw);
        
        const maxLeft = this.gameArea.clientWidth - card.width;
        card.x = Math.random() * maxLeft;
        
        card.createDOM(this.gameArea);
        this.cards.push(card);
    }

    triggerBucket(type) {
        if (!this.isPlaying || this.isPaused) return;

        const sortedCards = [...this.cards].sort((a, b) => b.y - a.y);
        const targetCard = sortedCards[0];

        if (!targetCard) return;

        const bucket = document.querySelector(`.bucket[data-type="${type}"]`);
        bucket.classList.add('scale-95');
        setTimeout(() => bucket.classList.remove('scale-95'), 100);

        if (targetCard.type === type) {
            this.handleSuccess(targetCard, bucket);
        } else {
            this.handleFail(targetCard, bucket);
        }
    }

    handleSuccess(card, bucket) {
        this.score += 10 + this.combo * 2;
        this.combo++;
        this.speedMultiplier += 0.02;
        this.showFloatingText(card.x, card.y, "+"+(10+this.combo*2), 'text-green-400');
        bucket.classList.add('pulse-green');
        setTimeout(() => bucket.classList.remove('pulse-green'), 500);
        this.removeCard(card);
        this.updateUI();
    }

    handleFail(card, bucket) {
        this.combo = 0;
        this.lives--;
        this.showFloatingText(card.x, card.y, "Miss!", 'text-red-500');
        bucket.classList.add('pulse-red');
        setTimeout(() => bucket.classList.remove('pulse-red'), 500);
        this.removeCard(card);
        this.updateUI();
        if (this.lives <= 0) this.gameOver();
    }

    removeCard(card) {
        card.remove();
        this.cards = this.cards.filter(c => c !== card);
    }

    showFloatingText(x, y, text, colorClass) {
        const el = document.createElement('div');
        el.className = `score-pop ${colorClass}`;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.innerText = text;
        this.gameArea.appendChild(el);
        setTimeout(() => el.remove(), 1000);
    }

    updateUI() {
        document.getElementById('score').innerText = this.score;
        document.getElementById('combo').innerText = this.combo;
        const hearts = document.getElementById('lives').children;
        for (let i = 0; i < 3; i++) {
            hearts[i].style.opacity = i < this.lives ? 1 : 0.2;
        }
    }

    gameOver() {
        this.isPlaying = false;
        document.getElementById('finalScore').innerText = this.score;
        document.getElementById('gameOverScreen').classList.remove('hidden');
        document.getElementById('startBtn').innerText = "重新开始";
    }

    loop() {
        if (!this.isPlaying) return;
        
        requestAnimationFrame(() => this.loop());

        if (this.isPaused) return;

        const now = Date.now();
        if (now - this.lastSpawnTime > this.spawnInterval / this.speedMultiplier) {
            this.spawnCard();
            this.lastSpawnTime = now;
        }

        const areaHeight = this.gameArea.clientHeight;

        for (let i = this.cards.length - 1; i >= 0; i--) {
            const card = this.cards[i];
            card.update(this.speedMultiplier);

            if (card.y > areaHeight) {
                this.combo = 0;
                this.lives--;
                this.showFloatingText(card.x, areaHeight - 50, "漏掉了!", 'text-gray-400');
                this.removeCard(card);
                this.updateUI();
                if (this.lives <= 0) this.gameOver();
            }
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
const game = new Game();
initStars();

