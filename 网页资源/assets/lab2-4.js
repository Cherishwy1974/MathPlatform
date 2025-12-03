// lab2-4.js - 左右极限与存在性判定实验室专用脚本

// --- MathJax渲染辅助 ---
function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('渲染错误:', err));
    }
}

// 全局变量
let currentTestFunction = 1;
let currentX0 = 0;
let approachDistance = 0.5;
let animationId = null;
let epsilonValue = 0.1;
let paramA = 1;
let paramB = 0;
let currentFunctionType = 1;

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

// --- 页面切换 ---
function switchPanel(panel) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(panel).classList.add('active');
    
    setTimeout(() => {
        renderMath();
        if (panel === 'theorem') {
            drawTheoremGraph();
        } else if (panel === 'visual') {
            drawApproachGraph();
            updateApproachTable();
        } else if (panel === 'verify') {
            drawEpsilonGraph();
        }
    }, 50);
}

// --- 选择测试函数 ---
function selectTestFunction(num) {
    currentTestFunction = num;
    document.querySelectorAll('#theorem .func-btn').forEach(b => b.classList.remove('active'));
    const buttons = document.querySelectorAll('#theorem .func-btn');
    if (buttons[num - 1]) {
        buttons[num - 1].classList.add('active');
    }
    
    const descriptions = [
        '在 x = 0 处，左右极限都等于 0，极限存在',
        '在 x = 0 处，左极限 = -1，右极限 = 1，极限不存在',
        '在 x = 0 处，左右极限都等于 1，极限存在',
        '在 x = 0 处，左右极限都趋向 +∞，极限为无穷'
    ];
    
    const leftLimits = ['0', '-1', '1', '+∞'];
    const rightLimits = ['0', '1', '1', '+∞'];
    
    document.getElementById('funcDescription').textContent = descriptions[num - 1];
    document.getElementById('leftLimitValue').textContent = leftLimits[num - 1];
    document.getElementById('rightLimitValue').textContent = rightLimits[num - 1];
    
    const compResult = document.getElementById('comparisonResult');
    if (num === 1 || num === 3) {
        compResult.className = 'comparison-result equal';
        if (num === 1) {
            compResult.innerHTML = '左极限 = 右极限 = 0<br><strong>极限存在：$\\displaystyle\\lim_{x \\to 0} f(x) = 0$</strong>';
        } else {
            compResult.innerHTML = '左极限 = 右极限 = 1<br><strong>极限存在：$\\displaystyle\\lim_{x \\to 0} f(x) = 1$</strong>';
        }
    } else if (num === 2) {
        compResult.className = 'comparison-result not-equal';
        compResult.innerHTML = '左极限 ≠ 右极限<br><strong>极限不存在</strong>';
    } else {
        compResult.className = 'comparison-result equal';
        compResult.innerHTML = '左极限 = 右极限 = +∞<br><strong>极限为无穷大</strong>';
    }
    
    renderMath();
    drawTheoremGraph();
}

// --- 绘制定理图像（规范坐标系）---
function drawTheoremGraph() {
    const canvas = document.getElementById('theoremGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const margin = 30;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    
    // Y轴
    drawArrow(ctx, centerX, height - margin, centerX, margin);
    // X轴
    drawArrow(ctx, margin, centerY, width - margin, centerY);
    
    // 轴标签
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - margin - 5, centerY + 15);
    ctx.textAlign = 'right';
    ctx.fillText('y', centerX - 8, margin + 10);
    ctx.fillText('O', centerX - 5, centerY + 15);
    
    // 定义函数
    const functions = [
        x => x * x,
        x => x < 0 ? -1 : (x > 0 ? 1 : 0),
        x => x === 0 ? 1 : Math.sin(x) / x,
        x => 1 / (x * x)
    ];
    
    const func = functions[currentTestFunction - 1];
    const scale = 100;
    const yScale = 30;
    
    // 绘制左侧曲线（蓝色）
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
    
    // 绘制右侧曲线（红色）
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
    
    // 标记x=0点
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // 图例
    ctx.font = '11px Arial';
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(width - 90, margin + 5, 12, 12);
    ctx.fillStyle = '#374151';
    ctx.textAlign = 'left';
    ctx.fillText('x→0⁻', width - 75, margin + 15);
    
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(width - 90, margin + 22, 12, 12);
    ctx.fillStyle = '#374151';
    ctx.fillText('x→0⁺', width - 75, margin + 32);
}

// --- 开始逼近 ---
function startApproach() {
    const targetX = parseFloat(document.getElementById('targetPoint').value);
    let distance = 1;
    
    function animate() {
        distance *= 0.95;
        if (distance < 0.001) distance = 1;
        
        document.getElementById('approachSlider').value = distance;
        document.getElementById('approachValue').textContent = distance.toFixed(2);
        
        updateApproachTable();
        drawApproachGraph();
        
        animationId = requestAnimationFrame(animate);
    }
    
    if (animationId) cancelAnimationFrame(animationId);
    animate();
}

// --- 重置逼近 ---
function resetApproach() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    document.getElementById('approachSlider').value = 0.5;
    document.getElementById('approachValue').textContent = '0.50';
    updateApproachTable();
    drawApproachGraph();
}

// --- 更新逼近表 ---
function updateApproachTable() {
    const x0 = parseFloat(document.getElementById('targetPoint').value);
    const dist = parseFloat(document.getElementById('approachSlider').value);
    
    const tbody = document.getElementById('approachTableBody');
    const func = x => x * x;
    
    let html = '';
    const steps = [dist, dist/2, dist/4, dist/8, dist/16];
    
    steps.forEach(d => {
        const leftX = x0 - d;
        const rightX = x0 + d;
        const leftY = func(leftX);
        const rightY = func(rightX);
        
        html += `
            <tr>
                <td class="left-approach">${leftX.toFixed(4)}</td>
                <td class="left-approach">${leftY.toFixed(4)}</td>
                <td class="right-approach">${rightX.toFixed(4)}</td>
                <td class="right-approach">${rightY.toFixed(4)}</td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
    
    // 更新状态
    document.getElementById('currentDistance').textContent = dist.toFixed(2);
    document.getElementById('leftPoint').textContent = (x0 - dist).toFixed(2);
    document.getElementById('rightPoint').textContent = (x0 + dist).toFixed(2);
    document.getElementById('leftValue').textContent = func(x0 - dist).toFixed(2);
    document.getElementById('rightValue').textContent = func(x0 + dist).toFixed(2);
}

// --- 绘制逼近图（规范坐标系）---
function drawApproachGraph() {
    const canvas = document.getElementById('approachGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const marginLeft = 50;
    const marginRight = 30;
    const marginTop = 30;
    const marginBottom = 40;
    const centerX = width / 2;
    
    // 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    
    // X轴
    drawArrow(ctx, marginLeft, height - marginBottom, width - marginRight + 10, height - marginBottom);
    // Y轴
    drawArrow(ctx, centerX, height - marginBottom, centerX, marginTop - 10);
    
    // 轴标签
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - marginRight + 5, height - marginBottom + 15);
    ctx.textAlign = 'right';
    ctx.fillText('y', centerX - 8, marginTop);
    ctx.fillText('O', centerX - 5, height - marginBottom + 15);
    
    const x0 = parseFloat(document.getElementById('targetPoint').value);
    const dist = parseFloat(document.getElementById('approachSlider').value);
    const func = x => x * x;
    
    // 绘制函数曲线
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let px = marginLeft; px < width - marginRight; px++) {
        const x = (px - centerX) / 100 + x0;
        const y = func(x);
        const py = height - marginBottom - (y + 1) * 50;
        if(px === marginLeft) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // 绘制逼近区间
    const leftPx = centerX - dist * 100;
    const rightPx = centerX + dist * 100;
    
    ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
    ctx.fillRect(leftPx, marginTop, rightPx - leftPx, height - marginTop - marginBottom);
    
    // 绘制逼近点
    // 左侧点
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(leftPx, height - marginBottom - (func(x0 - dist) + 1) * 50, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // 右侧点
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(rightPx, height - marginBottom - (func(x0 + dist) + 1) * 50, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // 目标点
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(centerX, height - marginBottom - (func(x0) + 1) * 50, 10, 0, Math.PI * 2);
    ctx.fill();
}

// --- 绘制参数验证图（规范坐标系）---
function drawEpsilonGraph() {
    const canvas = document.getElementById('epsilonGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    const marginLeft = 50;
    const marginRight = 30;
    const marginTop = 30;
    const marginBottom = 40;
    
    // 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.fillStyle = '#374151';
    ctx.lineWidth = 2;
    
    // X轴
    drawArrow(ctx, marginLeft, height - marginBottom, width - marginRight + 10, height - marginBottom);
    // Y轴
    drawArrow(ctx, marginLeft, height - marginBottom, marginLeft, marginTop - 10);
    
    // 轴标签
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', width - marginRight + 5, height - marginBottom + 18);
    ctx.textAlign = 'right';
    ctx.fillText('y', marginLeft - 10, marginTop);
    ctx.fillText('O', marginLeft - 5, height - marginBottom + 15);
    
    const func = getCurrentFunction();
    const x0 = parseFloat(document.getElementById('testPoint').value) || 0;
    const distance = parseFloat(document.getElementById('testDistance').value) || 0.1;
    
    // 计算绘制范围
    const xMin = -3, xMax = 3;
    
    // 计算y的范围
    const samples = [];
    for(let x = xMin; x <= xMax; x += 0.01) {
        samples.push({x: x, y: func(x)});
    }
    const yMin = Math.min(...samples.map(s => s.y));
    const yMax = Math.max(...samples.map(s => s.y));
    const graphWidth = width - marginLeft - marginRight;
    const graphHeight = height - marginTop - marginBottom;
    
    // 绘制函数图像
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 3;
    
    if (currentFunctionType === 1) {
        // 连续函数
        ctx.beginPath();
        for(let px = marginLeft; px < width - marginRight; px++) {
            const x = xMin + (xMax - xMin) * (px - marginLeft) / graphWidth;
            const y = func(x);
            const py = height - marginBottom - (y - yMin) * graphHeight / (yMax - yMin);
            if(px === marginLeft) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();
    } else {
        // 分段函数
        ctx.beginPath();
        let lastY = null;
        for(let i = 0; i < samples.length; i++) {
            const px = marginLeft + (samples[i].x - xMin) * graphWidth / (xMax - xMin);
            const py = height - marginBottom - (samples[i].y - yMin) * graphHeight / (yMax - yMin);
            
            if (lastY !== null && Math.abs(samples[i].y - lastY) > 0.5) {
                ctx.stroke();
                ctx.beginPath();
            }
            
            if (i === 0 || Math.abs(samples[i].y - lastY) > 0.5) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
            lastY = samples[i].y;
        }
        ctx.stroke();
    }
    
    // 绘制测试点
    const testPx = marginLeft + (x0 - xMin) * graphWidth / (xMax - xMin);
    const testPy = height - marginBottom - (func(x0) - yMin) * graphHeight / (yMax - yMin);
    
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(testPx, testPy, 10, 0, Math.PI * 2);
    ctx.fill();
    
    // 绘制左右极限点
    const leftX = x0 - distance;
    const rightX = x0 + distance;
    const leftY = func(leftX);
    const rightY = func(rightX);
    
    const leftPx = marginLeft + (leftX - xMin) * graphWidth / (xMax - xMin);
    const rightPx = marginLeft + (rightX - xMin) * graphWidth / (xMax - xMin);
    const leftPy = height - marginBottom - (leftY - yMin) * graphHeight / (yMax - yMin);
    const rightPy = height - marginBottom - (rightY - yMin) * graphHeight / (yMax - yMin);
    
    // 左极限点
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(leftPx, leftPy, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // 右极限点
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(rightPx, rightPy, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // 添加标签
    ctx.font = 'bold 12px Arial';
    
    ctx.fillStyle = '#10b981';
    ctx.textAlign = 'left';
    ctx.fillText(`测试点: (${x0.toFixed(1)}, ${func(x0).toFixed(1)})`, testPx + 15, testPy - 15);
    
    ctx.fillStyle = '#3b82f6';
    ctx.textAlign = 'right';
    ctx.fillText(`左极限: ${leftY.toFixed(2)}`, leftPx - 10, leftPy - 15);
    
    ctx.fillStyle = '#ef4444';
    ctx.textAlign = 'left';
    ctx.fillText(`右极限: ${rightY.toFixed(2)}`, rightPx + 10, rightPy - 15);
}

// --- 选择函数类型 ---
function selectFunctionType(type) {
    currentFunctionType = type;
    document.querySelectorAll('#verify .func-btn').forEach(b => b.classList.remove('active'));
    
    const buttons = document.querySelectorAll('#verify .func-btn');
    if (buttons[type - 1]) {
        buttons[type - 1].classList.add('active');
    }
    
    updateParametric();
    calculateLimits();
}

// --- 获取当前函数 ---
function getCurrentFunction() {
    const b = paramB;
    const a = paramA;
    
    switch(currentFunctionType) {
        case 1:
            return x => x + b;
        case 2:
            return x => x >= 0 ? x + b : x + b + a;
        case 3:
            return x => x === 0 ? b + a : x + b;
        default:
            return x => x + b;
    }
}

// --- 更新参数函数 ---
function updateParametric() {
    paramA = parseFloat(document.getElementById('paramA').value);
    paramB = parseFloat(document.getElementById('paramB').value);
    
    document.getElementById('paramAValue').textContent = paramA.toFixed(1);
    document.getElementById('paramBValue').textContent = paramB.toFixed(1);
    
    let formula;
    switch(currentFunctionType) {
        case 1:
            formula = `$f(x) = x ${paramB >= 0 ? '+' : ''} ${paramB}$`;
            break;
        case 2:
            formula = `$f(x) = \\begin{cases} x ${paramB >= 0 ? '+' : ''} ${paramB} & x \\geq 0 \\\\ x ${paramB + paramA >= 0 ? '+' : ''} ${paramB + paramA} & x < 0 \\end{cases}$`;
            break;
        case 3:
            formula = `$f(x) = \\begin{cases} x ${paramB >= 0 ? '+' : ''} ${paramB} & x \\neq 0 \\\\ ${paramB + paramA} & x = 0 \\end{cases}$`;
            break;
        default:
            formula = `$f(x) = x ${paramB >= 0 ? '+' : ''} ${paramB}$`;
    }
    
    document.getElementById('paramFunction').innerHTML = formula;
    
    renderMath();
    drawEpsilonGraph();
}

// --- 计算极限 ---
function calculateLimits() {
    const x0 = parseFloat(document.getElementById('testPoint').value);
    const distance = parseFloat(document.getElementById('testDistance').value);
    
    const func = getCurrentFunction();
    
    const smallDistance = Math.min(distance, 0.001);
    const leftLim = func(x0 - smallDistance);
    const rightLim = func(x0 + smallDistance);
    const funcValue = func(x0);
    
    let actualLeftLim, actualRightLim;
    
    if (currentFunctionType === 1) {
        actualLeftLim = funcValue;
        actualRightLim = funcValue;
    } else if (currentFunctionType === 2) {
        if (x0 === 0) {
            actualLeftLim = paramB + paramA;
            actualRightLim = paramB;
        } else {
            actualLeftLim = leftLim;
            actualRightLim = rightLim;
        }
    } else if (currentFunctionType === 3) {
        if (x0 === 0) {
            actualLeftLim = paramB;
            actualRightLim = paramB;
        } else {
            actualLeftLim = leftLim;
            actualRightLim = rightLim;
        }
    } else {
        actualLeftLim = leftLim;
        actualRightLim = rightLim;
    }
    
    document.getElementById('verifyLeft').textContent = actualLeftLim.toFixed(3);
    document.getElementById('verifyRight').textContent = actualRightLim.toFixed(3);
    
    const isEqual = Math.abs(actualLeftLim - actualRightLim) < 0.001;
    const resultDiv = document.getElementById('verificationResult');
    const conclusionSpan = document.getElementById('verifyConclusion');
    
    if (isEqual) {
        resultDiv.textContent = '左右极限相等，极限存在';
        resultDiv.className = 'result';
        conclusionSpan.textContent = '✓ 极限存在';
        conclusionSpan.style.color = 'var(--success)';
        
        const isContinuous = Math.abs(actualLeftLim - funcValue) < 0.001;
        if (currentFunctionType === 1) {
            conclusionSpan.textContent += '（连续函数）';
            resultDiv.textContent += '，函数连续';
        } else if (currentFunctionType === 3 && x0 === 0 && !isContinuous) {
            conclusionSpan.textContent += '（可去间断点）';
            resultDiv.textContent += '，但函数不连续';
        } else if (currentFunctionType === 3 && x0 !== 0) {
            conclusionSpan.textContent += '（可去间断函数，但测试点不在间断处）';
            resultDiv.textContent += '，在非间断点处连续';
        } else if (isContinuous) {
            conclusionSpan.textContent += '（连续）';
            resultDiv.textContent += '，函数连续';
        }
    } else {
        resultDiv.textContent = '左右极限不相等，极限不存在';
        resultDiv.className = 'result';
        conclusionSpan.textContent = '✗ 极限不存在';
        conclusionSpan.style.color = 'var(--danger)';
        
        if (currentFunctionType === 2) {
            conclusionSpan.textContent += '（跳跃间断）';
        }
    }
    
    drawEpsilonGraph();
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
    const approachSlider = document.getElementById('approachSlider');
    if (approachSlider) {
        approachSlider.addEventListener('input', function() {
            document.getElementById('approachValue').textContent = parseFloat(this.value).toFixed(2);
            updateApproachTable();
            drawApproachGraph();
        });
    }

    const testDistance = document.getElementById('testDistance');
    if (testDistance) {
        testDistance.addEventListener('input', function() {
            document.getElementById('testDistanceValue').textContent = parseFloat(this.value).toFixed(2);
            drawEpsilonGraph();
        });
    }

    const testPoint = document.getElementById('testPoint');
    if (testPoint) {
        testPoint.addEventListener('input', function() {
            drawEpsilonGraph();
        });
    }

    const paramA = document.getElementById('paramA');
    if (paramA) {
        paramA.addEventListener('input', updateParametric);
    }

    const paramB = document.getElementById('paramB');
    if (paramB) {
        paramB.addEventListener('input', updateParametric);
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
            if (panelId === 'theorem') {
                drawTheoremGraph();
            } else if (panelId === 'visual') {
                drawApproachGraph();
            } else if (panelId === 'verify') {
                drawEpsilonGraph();
            }
        }
    }, 150);
});

// --- 初始化 ---
window.addEventListener('DOMContentLoaded', function() {
    initSliders();
    setTimeout(() => {
        selectTestFunction(1);
        updateApproachTable();
        updateParametric();
        calculateLimits();
        renderMath();
    }, 100);
});

