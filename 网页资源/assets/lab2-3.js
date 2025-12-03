// lab2-3.js - 函数极限与自变量变化实验室专用脚本

// --- MathJax渲染辅助 ---
function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('渲染错误:', err));
    }
}

// 全局变量
let currentMovement = 'right';
let currentFunction = 1;
let animationId = null;
let isPaused = false;
let xPosition = 2;

// --- 页面切换 ---
function switchPanel(panel) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(panel).classList.add('active');
    
    setTimeout(() => {
        renderMath();
        if (panel === 'movement') {
            drawNumberLine();
            drawMovementGraph();
        } else if (panel === 'approach') {
            drawApproachGraph();
            updateApproachTable();
        } else if (panel === 'types') {
            drawTypeGraphs();
        }
    }, 50);
}

// --- 辅助函数：绘制带箭头的坐标轴 ---
function drawArrow(ctx, fromX, fromY, toX, toY) {
    const headlen = 8;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);
    
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
}

// --- 绘制数轴 ---
function drawNumberLine() {
    const canvas = document.getElementById('numberLineCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // 绘制主轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    drawArrow(ctx, 20, height/2, width - 10, height/2);
    
    // 绘制刻度
    ctx.lineWidth = 1;
    for(let i = 0; i <= 10; i++) {
        const x = 20 + i * (width - 40) / 10;
        ctx.beginPath();
        ctx.moveTo(x, height/2 - 5);
        ctx.lineTo(x, height/2 + 5);
        ctx.stroke();
        
        // 标记重要点 a
        if(i === 5) {
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(x, height/2, 6, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#374151';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('a', x, height/2 + 22);
        }
    }
    
    // X轴标签
    ctx.fillStyle = '#374151';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - 15, height/2 + 20);
}

// --- 设置移动方式 ---
function setMovement(type) {
    currentMovement = type;
    document.querySelectorAll('.approach-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    
    const descriptions = {
        'right': 'x 从右侧趋近于 a',
        'left': 'x 从左侧趋近于 a',
        'both': 'x 从两侧趋近于 a',
        'infinity': 'x 趋向正无穷',
        'negInfinity': 'x 趋向负无穷',
        'oscillate': 'x 在 a 附近振荡'
    };
    
    document.getElementById('movementDesc').textContent = descriptions[type];
    drawMovementGraph();
}

// --- 绘制移动图像（规范坐标系）---
function drawMovementGraph() {
    const canvas = document.getElementById('movementGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // 边距设置
    const marginLeft = 50;
    const marginRight = 30;
    const marginTop = 30;
    const marginBottom = 40;
    const graphWidth = width - marginLeft - marginRight;
    const graphHeight = height - marginTop - marginBottom;
    
    // 绘制网格
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 0.5;
    for(let i = 1; i < 10; i++) {
        const x = marginLeft + i * graphWidth / 10;
        const y = marginTop + i * graphHeight / 10;
        ctx.beginPath();
        ctx.moveTo(x, marginTop);
        ctx.lineTo(x, height - marginBottom);
        ctx.moveTo(marginLeft, y);
        ctx.lineTo(width - marginRight, y);
        ctx.stroke();
    }
    
    // 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    
    // X轴
    drawArrow(ctx, marginLeft, height - marginBottom, width - marginRight + 10, height - marginBottom);
    // Y轴
    drawArrow(ctx, marginLeft, height - marginBottom, marginLeft, marginTop - 10);
    
    // 轴标签
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - marginRight + 5, height - marginBottom + 20);
    ctx.textAlign = 'right';
    ctx.fillText('f(x)', marginLeft - 8, marginTop - 5);
    
    // 原点标签
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText('O', marginLeft - 5, height - marginBottom + 5);
    
    // 定义函数
    const func = (x) => {
        switch(currentMovement) {
            case 'infinity':
            case 'negInfinity':
                return 2 / (1 + Math.exp(-x * 0.5)) - 1;
            case 'oscillate':
                return 2 + Math.sin(10 / (x - 3 + 0.01)) * 0.5;
            default:
                return (x - 3) * (x - 3) * 0.3 + 2;
        }
    };
    
    // 坐标变换参数
    const xMin = -1, xMax = 9;
    const yMin = 0, yMax = 4;
    const xScale = graphWidth / (xMax - xMin);
    const yScale = graphHeight / (yMax - yMin);
    
    const toCanvasX = (x) => marginLeft + (x - xMin) * xScale;
    const toCanvasY = (y) => height - marginBottom - (y - yMin) * yScale;
    
    // 绘制函数曲线
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    let firstPoint = true;
    for(let px = 0; px <= graphWidth; px++) {
        const x = xMin + px / xScale;
        const y = func(x);
        const canvasY = toCanvasY(y);
        
        if(canvasY > marginTop && canvasY < height - marginBottom) {
            if(firstPoint) {
                ctx.moveTo(marginLeft + px, canvasY);
                firstPoint = false;
            } else {
                ctx.lineTo(marginLeft + px, canvasY);
            }
        }
    }
    ctx.stroke();
    
    // 标记目标点（极限点）
    if(currentMovement !== 'infinity' && currentMovement !== 'negInfinity' && currentMovement !== 'oscillate') {
        const targetX = 3;
        const targetY = func(targetX);
        const targetCanvasX = toCanvasX(targetX);
        const targetCanvasY = toCanvasY(targetY);
        
        // 垂直虚线
        ctx.strokeStyle = '#ef4444';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(targetCanvasX, marginTop);
        ctx.lineTo(targetCanvasX, height - marginBottom);
        ctx.stroke();
        
        // 水平虚线
        ctx.beginPath();
        ctx.moveTo(marginLeft, targetCanvasY);
        ctx.lineTo(width - marginRight, targetCanvasY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // 目标点
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(targetCanvasX, targetCanvasY, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // 标签
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('目标点', targetCanvasX, targetCanvasY - 15);
        ctx.fillText('a', targetCanvasX, height - marginBottom + 15);
    }
    
    // 动画点
    if(xPosition !== undefined) {
        const funcValue = func(xPosition);
        const animX = toCanvasX(xPosition);
        const animY = toCanvasY(funcValue);
        
        // 垂直辅助线
        ctx.strokeStyle = '#3b82f6';
        ctx.setLineDash([3, 3]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(animX, height - marginBottom);
        ctx.lineTo(animX, animY);
        ctx.stroke();
        
        // 水平辅助线
        ctx.beginPath();
        ctx.moveTo(marginLeft, animY);
        ctx.lineTo(animX, animY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // 动画点
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(animX, animY, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // 白色边框
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(animX, animY, 8, 0, Math.PI * 2);
        ctx.stroke();
        
        // 坐标标签
        ctx.fillStyle = '#3b82f6';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`x=${xPosition.toFixed(2)}`, animX, height - marginBottom + 15);
        ctx.textAlign = 'left';
        ctx.fillText(`y=${funcValue.toFixed(2)}`, marginLeft + 5, animY - 5);
        
        // 更新状态显示
        const xValueEl = document.getElementById('xValue');
        const fxValueEl = document.getElementById('fxValue');
        if(xValueEl) xValueEl.textContent = xPosition.toFixed(2);
        if(fxValueEl) fxValueEl.textContent = funcValue.toFixed(2);
    }
}

// --- 选择函数 ---
function selectFunction(num) {
    currentFunction = num;
    document.querySelectorAll('.func-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.func-btn')[num - 1].classList.add('active');
    
    const formulas = [
        '$f(x) = \\dfrac{1}{x}$',
        '$f(x) = \\dfrac{x^2-1}{x-1}$',
        '$f(x) = \\sin\\left(\\dfrac{1}{x}\\right)$',
        '$f(x) = e^{-x^2}$'
    ];
    
    document.getElementById('selectedFunc').innerHTML = formulas[num - 1];
    renderMath();
    updateApproachTable();
    drawApproachGraph();
}

// --- 更新趋近表 ---
function updateApproachTable() {
    const tbody = document.getElementById('approachTable');
    if (!tbody) return;
    
    const values = [0.1, 0.01, 0.001];
    let html = '';
    
    values.forEach(x => {
        let fx;
        switch(currentFunction) {
            case 1:
                fx = 1 / x;
                break;
            case 2:
                fx = x !== 1 ? (x * x - 1) / (x - 1) : 'undefined';
                break;
            case 3:
                fx = Math.sin(1 / x);
                break;
            case 4:
                fx = Math.exp(-x * x);
                break;
        }
        
        const trend = fx > 10 ? '↑' : fx < -10 ? '↓' : '→';
        html += `<tr><td>${x}</td><td>${typeof fx === 'number' ? fx.toFixed(3) : fx}</td><td>${trend}</td></tr>`;
    });
    
    tbody.innerHTML = html;
    
    // 更新极限结论
    const conclusion = document.getElementById('limitConclusion');
    if(currentFunction === 1) {
        conclusion.innerHTML = '<span class="limit-indicator limit-not-exists">极限不存在（趋向无穷）</span>';
    } else if(currentFunction === 2) {
        conclusion.innerHTML = '<span class="limit-indicator limit-exists">极限存在：2</span>';
    } else if(currentFunction === 3) {
        conclusion.innerHTML = '<span class="limit-indicator limit-not-exists">极限不存在（振荡）</span>';
    } else {
        conclusion.innerHTML = '<span class="limit-indicator limit-exists">极限存在：1</span>';
    }
}

// --- 绘制趋近图（规范坐标系）---
function drawApproachGraph() {
    const canvas = document.getElementById('approachGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // 边距
    const margin = 30;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    
    // X轴
    drawArrow(ctx, margin, centerY, width - margin, centerY);
    // Y轴
    drawArrow(ctx, centerX, height - margin, centerX, margin);
    
    // 轴标签
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - margin - 5, centerY + 15);
    ctx.textAlign = 'right';
    ctx.fillText('y', centerX - 8, margin + 10);
    ctx.textAlign = 'right';
    ctx.fillText('O', centerX - 5, centerY + 15);
    
    // 定义函数
    const funcs = [
        x => 1 / x,
        x => x !== 1 ? (x * x - 1) / (x - 1) : NaN,
        x => Math.sin(1 / x),
        x => Math.exp(-x * x)
    ];
    
    const func = funcs[currentFunction - 1];
    const scale = 100;
    const yScale = 20;
    
    // 左侧曲线（蓝色）
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    let started = false;
    for(let px = margin; px < centerX - 2; px++) {
        const x = (px - centerX) / scale;
        const y = func(x);
        if(!isNaN(y) && Math.abs(y) < 10) {
            const py = centerY - y * yScale;
            if(!started) {
                ctx.moveTo(px, py);
                started = true;
            } else {
                ctx.lineTo(px, py);
            }
        }
    }
    ctx.stroke();
    
    // 右侧曲线（红色）
    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    started = false;
    for(let px = centerX + 2; px < width - margin; px++) {
        const x = (px - centerX) / scale;
        const y = func(x);
        if(!isNaN(y) && Math.abs(y) < 10) {
            const py = centerY - y * yScale;
            if(!started) {
                ctx.moveTo(px, py);
                started = true;
            } else {
                ctx.lineTo(px, py);
            }
        }
    }
    ctx.stroke();
    
    // 图例
    ctx.font = '11px Arial';
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(width - 100, margin + 10, 12, 12);
    ctx.fillStyle = '#374151';
    ctx.textAlign = 'left';
    ctx.fillText('x→0⁻', width - 85, margin + 20);
    
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(width - 100, margin + 28, 12, 12);
    ctx.fillStyle = '#374151';
    ctx.fillText('x→0⁺', width - 85, margin + 38);
    
    // 更新左右极限值
    const leftLimit = document.getElementById('leftLimit');
    const rightLimit = document.getElementById('rightLimit');
    if(currentFunction === 1) {
        if(leftLimit) leftLimit.textContent = '-∞';
        if(rightLimit) rightLimit.textContent = '+∞';
    } else if(currentFunction === 2) {
        if(leftLimit) leftLimit.textContent = '2';
        if(rightLimit) rightLimit.textContent = '2';
    } else if(currentFunction === 3) {
        if(leftLimit) leftLimit.textContent = '不存在';
        if(rightLimit) rightLimit.textContent = '不存在';
    } else {
        if(leftLimit) leftLimit.textContent = '1';
        if(rightLimit) rightLimit.textContent = '1';
    }
}

// --- 绘制类型图 ---
function drawTypeGraphs() {
    drawTypeGraph('finiteCanvas', (x) => x * x, 'finite');
    drawTypeGraph('infiniteCanvas', (x) => 1 / (x * x), 'infinite');
    drawTypeGraph('notExistCanvas', (x) => Math.sin(10 / x), 'notexist');
}

// --- 绘制单个类型图 ---
function drawTypeGraph(canvasId, func, type) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const margin = 25;
    const centerX = width / 2;
    
    // 坐标轴
    ctx.strokeStyle = '#9ca3af';
    ctx.fillStyle = '#9ca3af';
    ctx.lineWidth = 1.5;
    
    // X轴
    ctx.beginPath();
    ctx.moveTo(margin, height - margin);
    ctx.lineTo(width - margin, height - margin);
    ctx.stroke();
    
    // Y轴
    ctx.beginPath();
    ctx.moveTo(centerX, height - margin);
    ctx.lineTo(centerX, margin);
    ctx.stroke();
    
    // 绘制函数
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    let started = false;
    for(let px = margin; px < width - margin; px++) {
        const x = (px - centerX) / 50;
        const y = func(x);
        
        if(!isNaN(y) && Math.abs(y) < 10) {
            const py = height - margin - (y + 2) * 15;
            if(py > margin && py < height - margin) {
                if(!started) {
                    ctx.moveTo(px, py);
                    started = true;
                } else {
                    ctx.lineTo(px, py);
                }
            }
        }
    }
    ctx.stroke();
    
    // 标记特殊点
    if(type === 'finite') {
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(centerX, height - margin - 2 * 15, 4, 0, Math.PI * 2);
        ctx.fill();
    }
}

// --- 计算极限 ---
function calculateLimit() {
    const x = parseFloat(document.getElementById('xInput').value);
    const funcType = document.getElementById('funcSelect').value;
    
    let result;
    switch(funcType) {
        case '1/x':
            result = 1 / x;
            break;
        case 'sin(x)/x':
            result = x !== 0 ? Math.sin(x) / x : 1;
            break;
        case '(x^2-1)/(x-1)':
            result = x !== 1 ? (x * x - 1) / (x - 1) : 2;
            break;
        case 'e^x':
            result = Math.exp(x);
            break;
    }
    
    document.getElementById('calcResult').textContent = `f(${x}) = ${result.toFixed(6)}`;
}

// --- 开始动画 ---
function startAnimation() {
    isPaused = false;
    xPosition = currentMovement === 'right' ? 5 : 
                currentMovement === 'left' ? 1 :
                currentMovement === 'infinity' ? -2 : 2;
    
    function animate() {
        if (!isPaused) {
            const speed = parseInt(document.getElementById('speedSlider').value) / 200;
            
            switch(currentMovement) {
                case 'right':
                    xPosition -= speed;
                    if(xPosition < 3.1) xPosition = 5;
                    break;
                case 'left':
                    xPosition += speed;
                    if(xPosition > 2.9) xPosition = 1;
                    break;
                case 'both':
                    xPosition = 3 + Math.sin(Date.now() / 500) * 1.5;
                    break;
                case 'infinity':
                    xPosition += speed;
                    if(xPosition > 8) xPosition = -2;
                    break;
                case 'negInfinity':
                    xPosition -= speed;
                    if(xPosition < -8) xPosition = 2;
                    break;
                case 'oscillate':
                    xPosition = 3 + Math.sin(Date.now() / 200) * 0.3;
                    break;
            }
            
            drawMovementGraph();
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    if(animationId) cancelAnimationFrame(animationId);
    animate();
}

// --- 暂停动画 ---
function pauseAnimation() {
    isPaused = !isPaused;
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

// --- 滑块事件绑定 ---
function initSliders() {
    const speedSlider = document.getElementById('speedSlider');
    if (speedSlider) {
        speedSlider.addEventListener('input', function() {
            document.getElementById('speedValue').textContent = this.value;
        });
    }
}

// --- 窗口大小变化处理 ---
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const activePanel = document.querySelector('.content.active');
        if (activePanel) {
            const panelId = activePanel.id;
            if (panelId === 'movement') {
                drawNumberLine();
                drawMovementGraph();
            } else if (panelId === 'approach') {
                drawApproachGraph();
            } else if (panelId === 'types') {
                drawTypeGraphs();
            }
        }
    }, 150);
});

// --- 初始化 ---
window.addEventListener('DOMContentLoaded', function() {
    initSliders();
    setTimeout(() => {
        drawNumberLine();
        drawMovementGraph();
        renderMath();
    }, 100);
});

