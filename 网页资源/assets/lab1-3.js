// lab1-3.js - 区间分类实验室专用脚本

// --- 核心应用逻辑 ---
let currentPanel = 'basic';
let resizeTimeout;

// 渲染MathJax辅助函数
function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('MathJax Error:', err));
    }
}

// 导航切换
function switchPanel(panelId) {
    // 更新按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-indigo-50', 'text-indigo-700', 'font-medium');
        btn.classList.add('text-gray-600', 'hover:bg-gray-100');
    });
    const activeBtn = document.querySelector(`button[onclick="switchPanel('${panelId}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-600', 'hover:bg-gray-100');
        activeBtn.classList.add('bg-indigo-50', 'text-indigo-700', 'font-medium');
    }

    // 更新面板
    document.querySelectorAll('.panel-content').forEach(el => el.classList.remove('active'));
    document.getElementById(panelId).classList.add('active');
    
    currentPanel = panelId;

    // 触发刷新
    requestAnimationFrame(() => {
        renderMath();
        if (panelId === 'basic') drawNumberLine();
        if (panelId === 'queue') updateQueueScene();
    });
}

// --- 面板1: 基础逻辑 ---
function updateInterval() {
    const left = parseFloat(document.getElementById('leftPoint').value);
    const right = parseFloat(document.getElementById('rightPoint').value);
    const type = document.getElementById('intervalType').value;
    
    let notation = '', desc = '';
    
    if (left > right) {
        document.getElementById('intervalNotation').textContent = "无效区间";
        document.getElementById('intervalDesc').textContent = "左端点必须小于右端点";
        return;
    }

    switch(type) {
        case 'closed':
            notation = `[${left}, ${right}]`;
            desc = `包含 ${left} 和 ${right} 以及中间所有数`;
            break;
        case 'open':
            notation = `(${left}, ${right})`;
            desc = `不包含 ${left} 和 ${right}，只含中间数`;
            break;
        case 'left-open':
            notation = `(${left}, ${right}]`;
            desc = `不含 ${left}，但包含 ${right}`;
            break;
        case 'right-open':
            notation = `[${left}, ${right})`;
            desc = `包含 ${left}，但不含 ${right}`;
            break;
    }
    
    document.getElementById('intervalNotation').textContent = notation;
    document.getElementById('intervalDesc').textContent = desc;
    
    drawNumberLine();
    updateTestPoint();
}

function drawNumberLine() {
    const canvas = document.getElementById('numberLine');
    const container = document.getElementById('canvas-container');
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    // 确保宽度有效
    const width = rect.width || 300;
    const height = rect.height || 200;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const leftVal = parseFloat(document.getElementById('leftPoint').value);
    const rightVal = parseFloat(document.getElementById('rightPoint').value);
    const type = document.getElementById('intervalType').value;
    
    // 验证
    if (leftVal > rightVal) return;

    // 设置比例：两边各留2个单位的边距
    const range = rightVal - leftVal;
    const viewMin = leftVal - (range || 1) * 0.5;
    const viewMax = rightVal + (range || 1) * 0.5;
    const viewRange = viewMax - viewMin;
    
    const paddingX = 40;
    const scaleX = (width - 2 * paddingX) / viewRange;
    const cy = height / 2;

    function toPixel(val) {
        return paddingX + (val - viewMin) * scaleX;
    }

    // 绘制坐标轴
    ctx.strokeStyle = '#94a3b8'; // Slate 400
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(10, cy);
    ctx.lineTo(width - 10, cy);
    ctx.stroke();

    // 绘制箭头
    ctx.beginPath();
    ctx.moveTo(width - 15, cy - 5);
    ctx.lineTo(width - 5, cy);
    ctx.lineTo(width - 15, cy + 5);
    ctx.stroke();

    // 绘制刻度
    ctx.fillStyle = '#64748b';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    const tickStep = viewRange > 10 ? 2 : (viewRange > 5 ? 1 : 0.5);
    const startTick = Math.ceil(viewMin);
    const endTick = Math.floor(viewMax);
    
    for (let i = startTick; i <= endTick; i++) {
        const x = toPixel(i);
        ctx.beginPath();
        ctx.moveTo(x, cy - 5);
        ctx.lineTo(x, cy + 5);
        ctx.stroke();
        ctx.fillText(i, x, cy + 20);
    }

    // 绘制区间
    const startX = toPixel(leftVal);
    const endX = toPixel(rightVal);
    
    ctx.strokeStyle = '#4f46e5'; // Indigo 600
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(startX, cy);
    ctx.lineTo(endX, cy);
    ctx.stroke();

    // 绘制端点
    const drawEndpoint = (x, filled) => {
        ctx.beginPath();
        ctx.arc(x, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = filled ? '#4f46e5' : '#ffffff';
        ctx.strokeStyle = '#4f46e5';
        ctx.lineWidth = 2;
        if (filled) ctx.fill();
        else { ctx.fill(); ctx.stroke(); }
    };

    const leftFilled = (type === 'closed' || type === 'right-open');
    const rightFilled = (type === 'closed' || type === 'left-open');

    drawEndpoint(startX, leftFilled);
    drawEndpoint(endX, rightFilled);

    // 绘制测试点
    const testVal = parseFloat(document.getElementById('testPoint').value);
    const testX = toPixel(testVal);
    
    // 测试点线
    ctx.strokeStyle = '#ef4444'; // Red 500
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(testX, cy - 20);
    ctx.lineTo(testX, cy + 20);
    ctx.stroke();
    ctx.setLineDash([]);

    // 测试点圆
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(testX, cy - 25, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // 标签
    ctx.fillText(testVal.toFixed(1), testX, cy - 35);
}

function updateTestPoint() {
    const left = parseFloat(document.getElementById('leftPoint').value);
    const right = parseFloat(document.getElementById('rightPoint').value);
    const type = document.getElementById('intervalType').value;
    const testVal = parseFloat(document.getElementById('testPoint').value);
    
    document.getElementById('testValueDisplay').textContent = testVal.toFixed(1);
    
    let inInterval = false;
    switch(type) {
        case 'closed': inInterval = testVal >= left && testVal <= right; break;
        case 'open': inInterval = testVal > left && testVal < right; break;
        case 'left-open': inInterval = testVal > left && testVal <= right; break;
        case 'right-open': inInterval = testVal >= left && testVal < right; break;
    }
    
    const resultEl = document.getElementById('testResult');
    if (inInterval) {
        resultEl.innerHTML = `<span class="text-green-600 flex items-center gap-1"><span class="material-symbols-outlined text-sm">check_circle</span> 在区间内</span>`;
    } else {
        resultEl.innerHTML = `<span class="text-red-500 flex items-center gap-1"><span class="material-symbols-outlined text-sm">cancel</span> 不在区间内</span>`;
    }
    
    drawNumberLine();
}

// --- 面板2: 排队游戏 ---
function updateQueueScene() {
    const scenario = document.getElementById('queueScenario').value;
    const display = document.getElementById('queueDisplay');
    const explain = document.getElementById('queueExplanation');
    
    const people = ['小王', '张三', '小明', '李四', '小刘'];
    const startIdx = 1; // 张三
    const endIdx = 3;   // 李四
    
    display.innerHTML = '';
    
    people.forEach((name, idx) => {
        let status = 'excluded'; // excluded, included, boundary-included, boundary-excluded
        
        // 逻辑映射
        if (idx > startIdx && idx < endIdx) status = 'included';
        else if (idx === startIdx) {
            if (scenario === 'closed' || scenario === 'right-open') status = 'boundary-included';
            else status = 'boundary-excluded';
        }
        else if (idx === endIdx) {
            if (scenario === 'closed' || scenario === 'left-open') status = 'boundary-included';
            else status = 'boundary-excluded';
        }
        
        // 样式
        let bgClass = 'bg-gray-100 border-gray-300 text-gray-400';
        let scaleClass = 'scale-95 opacity-50 grayscale';
        let icon = 'person';
        
        if (status === 'included') {
            bgClass = 'bg-indigo-500 border-indigo-600 text-white shadow-lg';
            scaleClass = 'scale-110 -translate-y-2';
            icon = 'hail';
        } else if (status === 'boundary-included') {
            bgClass = 'bg-indigo-600 border-indigo-800 text-white shadow-lg ring-2 ring-indigo-300';
            scaleClass = 'scale-110 -translate-y-2';
            icon = 'accessibility_new';
        } else if (status === 'boundary-excluded') {
            bgClass = 'bg-red-50 border-red-200 text-red-400 border-dashed';
            scaleClass = 'scale-95 opacity-60';
            icon = 'person_off';
        }

        const personHTML = `
            <div class="person-card flex flex-col items-center gap-2 p-2 rounded-lg border-2 ${bgClass} ${scaleClass} w-16 md:w-20">
                <span class="material-symbols-outlined text-3xl md:text-4xl">${icon}</span>
                <span class="text-xs font-bold whitespace-nowrap">${name}</span>
            </div>
        `;
        display.insertAdjacentHTML('beforeend', personHTML);
    });

    // 说明文本
    const texts = {
        'closed': '<strong>[张三, 李四]</strong>：闭区间。<br>边界上的张三和李四都要出列，中间的小明也要出列。',
        'open': '<strong>(张三, 李四)</strong>：开区间。<br>边界上的张三和李四不用动，只有夹在中间的小明出列。',
        'left-open': '<strong>(张三, 李四]</strong>：左开右闭。<br>左边的张三不动，右边的李四要出列，中间的小明也要出列。',
        'right-open': '<strong>[张三, 李四)</strong>：左闭右开。<br>左边的张三要出列，右边的李四不动，中间的小明也要出列。'
    };
    explain.innerHTML = texts[scenario];
}

// --- 面板3: 区间类型 ---
function showIntervalExample(interval) {
    const examples = {
        '[3,7]': {
            title: '闭区间 [3, 7]',
            points: '包含：3, 3.5, 4, 5, 6, 7',
            desc: '这是最"实在"的区间，两端的边界值都算在范围内。'
        },
        '(3,7)': {
            title: '开区间 (3, 7)',
            points: '包含：3.01, 4, 5, 6, 6.99...',
            desc: '两头都不算，无限接近3和7，但永远到不了3和7。'
        },
        '(3,7]': {
            title: '左开右闭 (3, 7]',
            points: '包含：3.01... 到 7',
            desc: '不含左端点3，但包含右端点7。'
        },
        '[3,7)': {
            title: '左闭右开 [3, 7)',
            points: '包含：3 到 6.99...',
            desc: '包含左端点3，但不含右端点7。'
        },
        '[3,+∞)': {
            title: '无穷闭区间 [3, +∞)',
            points: '包含：3, 4, 100, 10000...',
            desc: '从3开始，一直往大数走，没有尽头。'
        },
        '(-∞,7)': {
            title: '无穷开区间 (-∞, 7)',
            points: '包含：... -5, 0, 5, 6.99...',
            desc: '比7小的所有数字，一直往负无穷走。'
        },
        '(-∞,+∞)': {
            title: '全体实数 R',
            points: '包含：所有数字',
            desc: '整个数轴，没有任何边界限制。'
        }
    };
    
    const data = examples[interval];
    const box = document.getElementById('example-box');
    
    // 高亮按钮
    document.querySelectorAll('.interval-type-btn').forEach(b => {
        b.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50');
    });
    event.currentTarget.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50');

    box.innerHTML = `
        <div class="text-2xl font-bold text-indigo-700 mb-2">${data.title}</div>
        <div class="text-lg font-medium text-gray-800 mb-2">${data.points}</div>
        <div class="text-sm text-gray-500">${data.desc}</div>
    `;
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

// 事件监听器
document.getElementById('testPoint').addEventListener('input', updateTestPoint);

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if(currentPanel === 'basic') drawNumberLine();
    }, 100);
});

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    updateInterval();
    updateQueueScene();
    // 预选第一个类型示例
    const firstBtn = document.querySelector('.interval-type-btn');
    if (firstBtn) firstBtn.click();
});

