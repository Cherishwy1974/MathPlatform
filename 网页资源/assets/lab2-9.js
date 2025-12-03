// lab2-9.js - 等价无穷小倒水游戏脚本

// --- 游戏配置与数据 ---
const GAME_CONFIG = {
    maxBottleSize: 4,
    levels: {
        1: { groups: 2, empty: 2 }, // 2组公式，2个空瓶
        2: { groups: 3, empty: 2 },
        3: { groups: 4, empty: 2 },
        4: { groups: 5, empty: 2 } // 最高难度
    }
};

const FORMULA_GROUPS = [
    {
        id: 'x',
        latex: 'x',
        colorClass: 'bg-func-1', // 蓝色
        formulas: ['\\sin x', '\\tan x', '\\arcsin x', '\\arctan x', 'e^x - 1', '\\ln(1+x)']
    },
    {
        id: 'x2_2',
        latex: '\\frac{1}{2}x^2',
        colorClass: 'bg-func-2', // 红色
        formulas: ['1 - \\cos x', '\\frac{x^2}{2}', 'x - \\ln(1+x)']
    },
    {
        id: 'x3_6',
        latex: '\\frac{1}{6}x^3',
        colorClass: 'bg-func-3', // 绿色
        formulas: ['x - \\sin x', '\\arcsin x - x', '\\frac{x^3}{6}']
    },
    {
        id: 'x3_3',
        latex: '\\frac{1}{3}x^3',
        colorClass: 'bg-func-4', // 紫色
        formulas: ['\\tan x - x', 'x - \\arctan x', '\\frac{x^3}{3}']
    },
    {
        id: 'x_alpha',
        latex: '\\alpha x',
        colorClass: 'bg-func-5', // 琥珀色
        formulas: ['(1+x)^\\alpha - 1', '\\sqrt{1+x}-1', '\\sqrt[3]{1+x}-1']
    }
];

// --- 游戏逻辑类 ---
class WaterSortGame {
    constructor() {
        this.level = 1;
        this.moves = 0;
        this.bottles = []; // 瓶子数组(栈)
        this.selected = null;
        this.history = [];
        this.mode = 'math'; // 'math' 或 'color'
        this.animating = false;

        this.dom = {
            grid: document.getElementById('bottles-grid'),
            level: document.getElementById('level-display'),
            moves: document.getElementById('moves-display'),
            toast: document.getElementById('toast'),
            modal: document.getElementById('complete-modal'),
            modalContent: document.getElementById('modal-content')
        };

        this.initLevel();
        this.renderFormulaRef();
    }

    initLevel() {
        const config = GAME_CONFIG.levels[Math.min(this.level, 4)];
        const groupCount = config.groups;
        
        // 选择随机组
        let activeGroups = [...FORMULA_GROUPS].sort(() => 0.5 - Math.random()).slice(0, groupCount);
        
        // 创建液体段
        let liquids = [];
        activeGroups.forEach(group => {
            // 从该组获取4个随机公式(如果不足则重复)
            let forms = [];
            while(forms.length < 4) {
                forms = forms.concat([...group.formulas].sort(() => 0.5 - Math.random()));
            }
            forms = forms.slice(0, 4);
            
            forms.forEach(f => {
                liquids.push({
                    groupId: group.id,
                    latex: f,
                    colorClass: group.colorClass
                });
            });
        });

        // 打乱液体
        liquids.sort(() => 0.5 - Math.random());

        // 分配到瓶子
        this.bottles = [];
        const bottleCount = groupCount + config.empty;
        
        // 初始化空瓶
        for (let i = 0; i < bottleCount; i++) {
            this.bottles.push([]);
        }

        // 填充瓶子(留出空瓶)
        let liquidIdx = 0;
        for (let i = 0; i < groupCount; i++) {
            for (let j = 0; j < 4; j++) {
                this.bottles[i].push(liquids[liquidIdx++]);
            }
        }
        
        this.moves = 0;
        this.history = [];
        this.selected = null;
        this.updateUI();
    }

    setMode(mode) {
        if (this.mode === mode) return;
        this.mode = mode;
        
        // UI切换动画
        const indicator = document.getElementById('mode-indicator');
        const btnMath = document.getElementById('mode-btn-math');
        const btnColor = document.getElementById('mode-btn-color');
        
        if (mode === 'math') {
            indicator.style.transform = 'translateX(0)';
            btnMath.classList.replace('text-slate-500', 'text-slate-600');
            btnColor.classList.replace('text-slate-600', 'text-slate-500');
        } else {
            indicator.style.transform = 'translateX(100%)';
            btnColor.classList.replace('text-slate-500', 'text-slate-600');
            btnMath.classList.replace('text-slate-600', 'text-slate-500');
        }

        this.renderGrid();
    }

    // --- 核心游戏操作 ---

    selectBottle(index) {
        if (this.animating) return;

        // 点击同一个则取消选择
        if (this.selected === index) {
            this.selected = null;
            this.renderGrid();
            return;
        }

        // 第一次选择
        if (this.selected === null) {
            // 不能选择空瓶
            if (this.bottles[index].length === 0) return;
            this.selected = index;
            this.renderGrid();
            return;
        }

        // 第二次选择(目标)
        this.tryPour(this.selected, index);
    }

    tryPour(fromIdx, toIdx) {
        const fromStack = this.bottles[fromIdx];
        const toStack = this.bottles[toIdx];

        if (fromStack.length === 0) {
            this.selected = null; 
            this.renderGrid();
            return;
        }

        const liquid = fromStack[fromStack.length - 1];

        // 检查规则:
        // 1. 目标未满
        // 2. 目标为空 或 目标顶部颜色与源顶部颜色匹配
        // 在数学模式下,"颜色匹配"意味着"同阶无穷小组"
        
        if (toStack.length >= GAME_CONFIG.maxBottleSize) {
            this.showToast("瓶子已满");
            this.selected = null;
            this.renderGrid();
            return;
        }

        if (toStack.length > 0) {
            const targetTop = toStack[toStack.length - 1];
            if (targetTop.groupId !== liquid.groupId) {
                this.showToast("非同阶无穷小，不可混合");
                this.selected = null;
                this.renderGrid();
                return;
            }
        }

        // 执行倒水
        this.saveState();
        
        this.animating = true;
        
        // 计算要移动多少
        let moveCount = 0;
        for (let i = fromStack.length - 1; i >= 0; i--) {
            if (fromStack[i].groupId === liquid.groupId && (toStack.length + moveCount < GAME_CONFIG.maxBottleSize)) {
                moveCount++;
            } else {
                break;
            }
        }

        // 执行数据更新
        for(let k=0; k<moveCount; k++) {
            toStack.push(fromStack.pop());
        }

        this.moves++;
        this.selected = null;
        
        // 重新渲染并检查胜利
        this.renderGrid();
        this.updateStats();
        
        setTimeout(() => {
            this.animating = false;
            this.checkWin();
        }, 300);
    }

    saveState() {
        // 深拷贝
        this.history.push({
            bottles: JSON.parse(JSON.stringify(this.bottles)),
            moves: this.moves
        });
        if (this.history.length > 5) this.history.shift(); // 限制历史记录
    }

    undo() {
        if (this.history.length === 0 || this.animating) return;
        const state = this.history.pop();
        this.bottles = state.bottles;
        this.moves = state.moves;
        this.selected = null;
        this.updateUI();
    }

    checkWin() {
        const complete = this.bottles.every(stack => {
            if (stack.length === 0) return true;
            if (stack.length !== GAME_CONFIG.maxBottleSize) return false;
            const firstId = stack[0].groupId;
            return stack.every(l => l.groupId === firstId);
        });

        if (complete) {
            this.showCompleteModal();
        }
    }

    // --- 渲染与UI ---

    renderGrid() {
        this.dom.grid.innerHTML = '';
        this.dom.grid.className = `grid gap-x-4 gap-y-8 w-full max-w-2xl mx-auto transition-all duration-300 ${this.bottles.length > 4 ? 'grid-cols-4 md:grid-cols-5' : 'grid-cols-4'}`;

        this.bottles.forEach((stack, idx) => {
            const bottleEl = document.createElement('div');
            bottleEl.className = `bottle bottle-glass rounded-b-2xl rounded-t-lg h-48 w-full flex flex-col-reverse overflow-hidden ${this.selected === idx ? 'selected' : ''}`;
            bottleEl.onclick = () => this.selectBottle(idx);

            stack.forEach(liquid => {
                const liquidEl = document.createElement('div');
                // 高度相对于最大容量(每个25%)
                liquidEl.className = `liquid h-1/4 ${liquid.colorClass}`;
                
                if (this.mode === 'math') {
                    const texSpan = document.createElement('span');
                    texSpan.className = 'math-tex';
                    texSpan.innerText = `\\(${liquid.latex}\\)`;
                    liquidEl.appendChild(texSpan);
                }
                
                bottleEl.appendChild(liquidEl);
            });

            this.dom.grid.appendChild(bottleEl);
        });

        // 触发MathJax排版
        if (this.mode === 'math' && window.MathJax) {
            window.MathJax.typesetPromise([this.dom.grid]).catch(err => console.log(err));
        }
    }

    renderFormulaRef() {
        const container = document.getElementById('formula-list');
        container.innerHTML = '';
        FORMULA_GROUPS.forEach(group => {
            const item = document.createElement('div');
            item.className = 'bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-sm';
            const formulas = group.formulas.map(f => `\\(${f}\\)`).join(', ');
            item.innerHTML = `
                <div class="flex items-center gap-2 mb-2">
                    <div class="w-3 h-3 rounded-full ${group.colorClass}"></div>
                    <span class="font-bold text-sm text-slate-700">\\(${group.latex}\\) 阶</span>
                </div>
                <div class="text-xs text-slate-500 leading-relaxed">${formulas}</div>
            `;
            container.appendChild(item);
        });
        if (window.MathJax) window.MathJax.typesetPromise([container]);
    }

    updateUI() {
        this.renderGrid();
        this.updateStats();
    }

    updateStats() {
        this.dom.level.innerText = this.level;
        this.dom.moves.innerText = this.moves;
    }

    showToast(msg) {
        const t = this.dom.toast;
        t.innerText = msg;
        t.style.opacity = '1';
        setTimeout(() => t.style.opacity = '0', 2000);
    }

    showCompleteModal() {
        this.dom.modal.classList.remove('hidden');
        // 触发动画
        requestAnimationFrame(() => {
            this.dom.modalContent.classList.remove('scale-95', 'opacity-0');
            this.dom.modalContent.classList.add('scale-100', 'opacity-100');
        });
    }

    nextLevel() {
        this.level++;
        this.dom.modal.classList.add('hidden');
        this.dom.modalContent.classList.add('scale-95', 'opacity-0');
        this.dom.modalContent.classList.remove('scale-100', 'opacity-100');
        this.initLevel();
    }

    resetLevel() {
        this.initLevel();
    }
}

// --- 全局控制 ---
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new WaterSortGame();
});

function toggleReference() {
    const panel = document.getElementById('reference-panel');
    const current = panel.style.transform;
    if (current === 'translateY(0%)') {
        panel.style.transform = 'translateY(100%)';
    } else {
        panel.style.transform = 'translateY(0%)';
    }
}

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

