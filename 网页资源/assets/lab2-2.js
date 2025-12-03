// lab2-2.js - 数列极限案例探索实验室专用脚本

// --- MathJax渲染辅助 ---
function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('渲染错误:', err));
    }
}

// 当前选中的案例
let currentCase = 1;
let animationFrame = null;

// --- 页面切换 ---
function switchPanel(panel) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(panel).classList.add('active');
    
    setTimeout(() => {
        renderMath();
        if (panel === 'overview') {
            updateCase();
        } else if (panel === 'analysis') {
            drawAllDetailGraphs();
        } else if (panel === 'comparison') {
            drawComparisonGraph();
        }
    }, 50);
}

// --- 选择案例 ---
function selectCase(caseNum) {
    currentCase = caseNum;
    document.querySelectorAll('.case-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.case-btn')[caseNum - 1].classList.add('active');
    updateCase();
}

// --- 更新案例显示 ---
function updateCase() {
    const formulas = [
        '$x_n = n$',
        '$x_n = \\dfrac{n}{n+1}$',
        '$x_n = \\dfrac{1}{2}[1+(-1)^n]$',
        '$x_n = \\dfrac{1}{(-3)^n}$'
    ];
    
    const descriptions = [
        '当 $n$ 无限增大时，$x_n$ 逐渐增大，没有一个固定的值。',
        '当 $n$ 无限增大时，$x_n$ 逐渐接近 1。',
        '数列的项在 0 和 1 之间跳动，没有趋近于某一个固定值。',
        '随着 $n$ 增大，数列的项逐渐趋近于 0（虽然符号交替变化）。'
    ];
    
    const explanations = [
        '数列的项依次为：$1, 2, 3, 4, 5, \\ldots, n, \\ldots$<br>显然，随着 $n$ 的增加，数列中的每一项越来越大。',
        '数列的项依次为：$\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}, \\dfrac{4}{5}, \\ldots$<br>随着 $n$ 的增加，数列中的每一项越来越接近 1。',
        '数列的项依次为：$0, 1, 0, 1, 0, 1, \\ldots$<br>因为数列的项在 0 和 1 之间跳动。',
        '数列的项依次为：$-\\dfrac{1}{3}, \\dfrac{1}{9}, -\\dfrac{1}{27}, \\dfrac{1}{81}, \\ldots$<br>项的绝对值越来越小。'
    ];
    
    const hasLimit = [false, true, false, true];
    const limitValues = ['不存在', '1', '不存在', '0'];
    
    document.getElementById('caseFormula').innerHTML = formulas[currentCase - 1];
    document.getElementById('caseDescription').innerHTML = descriptions[currentCase - 1];
    document.getElementById('mathExplanation').innerHTML = explanations[currentCase - 1];
    
    const conclusion = document.getElementById('conclusion');
    const limitResult = document.getElementById('limitResult');
    
    if (hasLimit[currentCase - 1]) {
        conclusion.className = 'conclusion-box exists';
        conclusion.innerHTML = `极限存在：$\\displaystyle\\lim_{n \\to \\infty} x_n = ${limitValues[currentCase - 1]}$`;
        limitResult.className = 'result success';
        limitResult.innerHTML = `极限 = ${limitValues[currentCase - 1]}`;
    } else {
        conclusion.className = 'conclusion-box not-exists';
        conclusion.innerHTML = '极限不存在';
        limitResult.className = 'result danger';
        limitResult.innerHTML = '极限不存在';
    }
    
    updateSequenceTerms();
    drawCaseGraph();
    renderMath();
}

// --- 更新数列项显示 ---
function updateSequenceTerms() {
    const display = document.getElementById('sequenceTerms');
    const count = parseInt(document.getElementById('termSlider').value);
    display.innerHTML = '';
    
    for (let n = 1; n <= count; n++) {
        const item = document.createElement('div');
        let value;
        
        switch(currentCase) {
            case 1:
                value = n;
                item.className = 'sequence-item';
                break;
            case 2:
                value = (n / (n + 1)).toFixed(3);
                item.className = 'sequence-item';
                break;
            case 3:
                value = n % 2 === 0 ? 1 : 0;
                item.className = 'sequence-item alternating';
                break;
            case 4:
                value = (1 / Math.pow(-3, n)).toFixed(5);
                item.className = n % 2 === 0 ? 'sequence-item' : 'sequence-item negative';
                break;
        }
        
        item.textContent = value;
        display.appendChild(item);
    }
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
    
    // 箭头
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
}

// --- 绘制案例图像（规范坐标系）---
function drawCaseGraph() {
    const canvas = document.getElementById('caseGraph');
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
    
    const maxN = 20;
    
    // 计算数据点
    let points = [];
    let maxY = 0, minY = 0;
    
    for (let n = 1; n <= maxN; n++) {
        let y;
        switch(currentCase) {
            case 1: y = n; break;
            case 2: y = n / (n + 1); break;
            case 3: y = n % 2 === 0 ? 1 : 0; break;
            case 4: y = 1 / Math.pow(-3, n); break;
        }
        points.push({n, y});
        maxY = Math.max(maxY, y);
        minY = Math.min(minY, y);
    }
    
    // 计算Y轴范围
    let yRangeMax = maxY;
    let yRangeMin = Math.min(0, minY);
    if (currentCase === 1) yRangeMax = maxN;
    else if (currentCase === 2 || currentCase === 3) { yRangeMax = 1.2; yRangeMin = -0.1; }
    else if (currentCase === 4) { yRangeMax = 0.5; yRangeMin = -0.5; }
    
    const yRange = yRangeMax - yRangeMin;
    const xScale = graphWidth / maxN;
    const yScale = graphHeight / yRange;
    
    // 绘制网格
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // 水平网格线
    const yTickCount = 5;
    for(let i = 0; i <= yTickCount; i++) {
        const y = marginTop + (graphHeight * i / yTickCount);
        ctx.beginPath();
        ctx.moveTo(marginLeft, y);
        ctx.lineTo(width - marginRight, y);
        ctx.stroke();
    }
    
    // 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    
    // X轴
    const xAxisY = marginTop + graphHeight * (yRangeMax / yRange);
    drawArrow(ctx, marginLeft, xAxisY, width - marginRight + 10, xAxisY);
    
    // Y轴
    drawArrow(ctx, marginLeft, height - marginBottom, marginLeft, marginTop - 10);
    
    // 轴标签
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('n', width - marginRight + 5, xAxisY + 20);
    
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText('xₙ', marginLeft - 8, marginTop - 5);
    
    // 原点标签
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText('O', marginLeft - 5, xAxisY + 5);
    
    // X轴刻度
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for(let i = 2; i <= maxN; i += 2) {
        const x = marginLeft + i * xScale;
        ctx.beginPath();
        ctx.moveTo(x, xAxisY);
        ctx.lineTo(x, xAxisY + 4);
        ctx.stroke();
        ctx.fillText(i.toString(), x, xAxisY + 6);
    }
    
    // Y轴刻度
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for(let i = 0; i <= yTickCount; i++) {
        const yVal = yRangeMax - (yRange * i / yTickCount);
        const y = marginTop + (graphHeight * i / yTickCount);
        if (Math.abs(yVal) < 0.001) continue; // 跳过0（原点已标）
        let label = yVal.toFixed(yVal < 1 && yVal > -1 ? 2 : 0);
        ctx.fillText(label, marginLeft - 8, y);
    }
    
    // 绘制极限线（如果存在）
    if (currentCase === 2) {
        const limitY = marginTop + graphHeight * (yRangeMax - 1) / yRange;
        ctx.strokeStyle = '#10b981';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(marginLeft, limitY);
        ctx.lineTo(width - marginRight, limitY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#10b981';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('L = 1', width - marginRight - 45, limitY - 8);
    } else if (currentCase === 4) {
        const limitY = marginTop + graphHeight * yRangeMax / yRange;
        ctx.strokeStyle = '#10b981';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(marginLeft, limitY);
        ctx.lineTo(width - marginRight, limitY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#10b981';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('L = 0', width - marginRight - 45, limitY - 8);
    }
    
    // 绘制数据点和连线
    ctx.strokeStyle = '#4f46e5';
    ctx.fillStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    
    points.forEach((point, i) => {
        const x = marginLeft + point.n * xScale;
        const y = marginTop + graphHeight * (yRangeMax - point.y) / yRange;
        
        // 画点
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // 连线（案例3不连线，强调离散性）
        if (currentCase !== 3 && i > 0) {
            const prevX = marginLeft + points[i-1].n * xScale;
            const prevY = marginTop + graphHeight * (yRangeMax - points[i-1].y) / yRange;
            
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    });
}

// --- 绘制所有详细图 ---
function drawAllDetailGraphs() {
    drawDetailGraph('case1Detail', 1);
    drawDetailGraph('case2Detail', 2);
    drawDetailGraph('case3Detail', 3);
    drawDetailGraph('case4Detail', 4);
}

// --- 绘制单个详细图 ---
function drawDetailGraph(canvasId, caseNum) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const margin = 25;
    const graphWidth = width - 2 * margin;
    const graphHeight = height - 2 * margin;
    
    // 坐标轴
    ctx.strokeStyle = '#9ca3af';
    ctx.fillStyle = '#9ca3af';
    ctx.lineWidth = 1.5;
    drawArrow(ctx, margin, height - margin, width - margin, height - margin);
    drawArrow(ctx, margin, height - margin, margin, margin);
    
    // 轴标签
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('n', width - margin - 5, height - margin + 12);
    ctx.textAlign = 'right';
    ctx.fillText('xₙ', margin - 5, margin + 5);
    
    // 数据
    const maxN = 15;
    ctx.fillStyle = '#4f46e5';
    
    for (let n = 1; n <= maxN; n++) {
        let yVal;
        switch(caseNum) {
            case 1: yVal = n / maxN; break;
            case 2: yVal = n / (n + 1); break;
            case 3: yVal = n % 2 === 0 ? 0.8 : 0.2; break;
            case 4: yVal = 0.5 + 0.4 * (1 / Math.pow(-3, n)); break;
        }
        
        const x = margin + (n / maxN) * graphWidth;
        const y = height - margin - yVal * graphHeight;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // 极限线
    if (caseNum === 2) {
        ctx.strokeStyle = '#10b981';
        ctx.setLineDash([3, 3]);
        const limitY = height - margin - graphHeight;
        ctx.beginPath();
        ctx.moveTo(margin, limitY);
        ctx.lineTo(width - margin, limitY);
        ctx.stroke();
        ctx.setLineDash([]);
    } else if (caseNum === 4) {
        ctx.strokeStyle = '#10b981';
        ctx.setLineDash([3, 3]);
        const limitY = height - margin - 0.5 * graphHeight;
        ctx.beginPath();
        ctx.moveTo(margin, limitY);
        ctx.lineTo(width - margin, limitY);
        ctx.stroke();
        ctx.setLineDash([]);
    }
}

// --- 绘制对比图 ---
function drawComparisonGraph() {
    const canvas = document.getElementById('comparisonGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const maxN = parseInt(document.getElementById('rangeSlider').value);
    
    ctx.clearRect(0, 0, width, height);
    
    const marginLeft = 50;
    const marginRight = 120;
    const marginTop = 30;
    const marginBottom = 40;
    const graphWidth = width - marginLeft - marginRight;
    const graphHeight = height - marginTop - marginBottom;
    
    // 坐标轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    drawArrow(ctx, marginLeft, height - marginBottom, width - marginRight + 10, height - marginBottom);
    drawArrow(ctx, marginLeft, height - marginBottom, marginLeft, marginTop - 10);
    
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('n', width - marginRight + 5, height - marginBottom + 20);
    ctx.textAlign = 'right';
    ctx.fillText('xₙ', marginLeft - 10, marginTop);
    
    // 网格
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for(let i = 0; i <= 5; i++) {
        const y = marginTop + (graphHeight * i / 5);
        ctx.beginPath();
        ctx.moveTo(marginLeft, y);
        ctx.lineTo(width - marginRight, y);
        ctx.stroke();
    }
    
    // 绘制四个案例
    const colors = ['#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];
    const cases = [
        n => Math.min(n / 5, 2),
        n => n / (n + 1),
        n => n % 2 === 0 ? 1 : 0,
        n => 0.5 + 0.5 * (1 / Math.pow(-3, n))
    ];
    
    cases.forEach((func, index) => {
        ctx.fillStyle = colors[index];
        
        for (let n = 1; n <= maxN; n++) {
            const x = marginLeft + (n / maxN) * graphWidth;
            const val = func(n);
            const y = height - marginBottom - (val / 2.2) * graphHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    });
    
    // 图例
    const legendX = width - marginRight + 15;
    const legendY = marginTop + 20;
    const legendItems = ['案例1', '案例2', '案例3', '案例4'];
    
    ctx.font = '11px Arial';
    legendItems.forEach((item, i) => {
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.arc(legendX + 5, legendY + i * 22, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#374151';
        ctx.textAlign = 'left';
        ctx.fillText(item, legendX + 15, legendY + i * 22 + 4);
    });
}

// --- 动画演示 ---
function animateSequence() {
    let n = 1;
    const maxN = 30;
    
    if (animationFrame) {
        clearTimeout(animationFrame);
    }
    
    function animate() {
        const canvas = document.getElementById('caseGraph');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // 边距设置
        const marginLeft = 50;
        const marginRight = 30;
        const marginTop = 30;
        const marginBottom = 40;
        const graphWidth = width - marginLeft - marginRight;
        const graphHeight = height - marginTop - marginBottom;
        
        ctx.clearRect(0, 0, width, height);
        
        // Y轴范围（固定以便动画平滑）
        let yRangeMax, yRangeMin;
        if (currentCase === 1) { yRangeMax = maxN; yRangeMin = 0; }
        else if (currentCase === 2 || currentCase === 3) { yRangeMax = 1.2; yRangeMin = -0.1; }
        else if (currentCase === 4) { yRangeMax = 0.5; yRangeMin = -0.5; }
        
        const yRange = yRangeMax - yRangeMin;
        const xScale = graphWidth / maxN;
        
        // 绘制网格
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        for(let i = 0; i <= 5; i++) {
            const y = marginTop + (graphHeight * i / 5);
            ctx.beginPath();
            ctx.moveTo(marginLeft, y);
            ctx.lineTo(width - marginRight, y);
            ctx.stroke();
        }
        
        // 坐标轴
        ctx.strokeStyle = '#374151';
        ctx.fillStyle = '#374151';
        ctx.lineWidth = 2;
        
        const xAxisY = marginTop + graphHeight * (yRangeMax / yRange);
        drawArrow(ctx, marginLeft, xAxisY, width - marginRight + 10, xAxisY);
        drawArrow(ctx, marginLeft, height - marginBottom, marginLeft, marginTop - 10);
        
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('n', width - marginRight + 5, xAxisY + 20);
        ctx.textAlign = 'right';
        ctx.fillText('xₙ', marginLeft - 8, marginTop - 5);
        
        // 计算当前点
        let points = [];
        for (let i = 1; i <= n; i++) {
            let y;
            switch(currentCase) {
                case 1: y = i; break;
                case 2: y = i / (i + 1); break;
                case 3: y = i % 2 === 0 ? 1 : 0; break;
                case 4: y = 1 / Math.pow(-3, i); break;
            }
            points.push({n: i, y});
        }
        
        // 绘制极限线
        if (currentCase === 2) {
            const limitY = marginTop + graphHeight * (yRangeMax - 1) / yRange;
            ctx.strokeStyle = '#10b981';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(marginLeft, limitY);
            ctx.lineTo(width - marginRight, limitY);
            ctx.stroke();
            ctx.setLineDash([]);
        } else if (currentCase === 4) {
            const limitY = marginTop + graphHeight * yRangeMax / yRange;
            ctx.strokeStyle = '#10b981';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(marginLeft, limitY);
            ctx.lineTo(width - marginRight, limitY);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        
        // 绘制数据点
        ctx.strokeStyle = '#4f46e5';
        ctx.fillStyle = '#4f46e5';
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        
        points.forEach((point, i) => {
            const x = marginLeft + point.n * xScale;
            const y = marginTop + graphHeight * (yRangeMax - point.y) / yRange;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
            
            if (currentCase !== 3 && i > 0) {
                const prevX = marginLeft + points[i-1].n * xScale;
                const prevY = marginTop + graphHeight * (yRangeMax - points[i-1].y) / yRange;
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        });
        
        n++;
        if (n <= maxN) {
            animationFrame = setTimeout(() => requestAnimationFrame(animate), 100);
        }
    }
    
    animate();
}

// --- 重置图像 ---
function resetGraph() {
    if (animationFrame) {
        clearTimeout(animationFrame);
        animationFrame = null;
    }
    drawCaseGraph();
}

// --- 计算数值 ---
function calculateValues() {
    const n = parseInt(document.getElementById('nInput').value);
    const values = [
        n,
        (n / (n + 1)).toFixed(6),
        n % 2 === 0 ? 1 : 0,
        (1 / Math.pow(-3, n)).toExponential(4)
    ];
    
    const display = document.getElementById('calculatedValues');
    display.innerHTML = `
        <strong>n = ${n} 时的值：</strong><br>
        案例一：${values[0]}<br>
        案例二：${values[1]}<br>
        案例三：${values[2]}<br>
        案例四：${values[3]}
    `;
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
    const termSlider = document.getElementById('termSlider');
    if (termSlider) {
        termSlider.addEventListener('input', function() {
            document.getElementById('termValue').textContent = this.value;
            updateSequenceTerms();
        });
    }

    const rangeSlider = document.getElementById('rangeSlider');
    if (rangeSlider) {
        rangeSlider.addEventListener('input', function() {
            document.getElementById('rangeValue').textContent = 'n=' + this.value;
            drawComparisonGraph();
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
            if (panelId === 'overview') {
                drawCaseGraph();
            } else if (panelId === 'analysis') {
                drawAllDetailGraphs();
            } else if (panelId === 'comparison') {
                drawComparisonGraph();
            }
        }
    }, 150);
});

// --- 初始化 ---
window.addEventListener('DOMContentLoaded', function() {
    initSliders();
    setTimeout(() => {
        updateCase();
        renderMath();
    }, 100);
});

