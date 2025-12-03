// lab2-1.js - 图像压缩与数列极限实验室专用脚本

// --- MathJax渲染辅助 ---
function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.log('渲染错误:', err));
    }
}

// --- 页面切换 ---
function switchPanel(panel) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(panel).classList.add('active');
    
    setTimeout(() => {
        renderMath();
        if (panel === 'concept') {
            updateSequence();
            drawSequenceGraph();
        } else if (panel === 'compress') {
            loadImage();
        } else if (panel === 'limit') {
            initApproximation();
        }
    }, 50);
}

// --- 更新数列显示 ---
function updateSequence() {
    const type = document.getElementById('seqType').value;
    const display = document.getElementById('seqDisplay');
    const formula = document.getElementById('seqFormula');
    
    display.innerHTML = '';
    let items = [];
    let formulaText = '';
    
    switch(type) {
        case 'arithmetic':
            formulaText = '$a_n = 2 + 3(n-1) = 3n - 1$';
            for(let i = 1; i <= 10; i++) {
                items.push(2 + 3 * (i - 1));
            }
            break;
        case 'geometric':
            formulaText = '$a_n = 2 \\cdot 3^{n-1}$';
            for(let i = 1; i <= 8; i++) {
                items.push(2 * Math.pow(3, i - 1));
            }
            break;
        case 'harmonic':
            formulaText = '$a_n = \\frac{1}{n}$';
            for(let i = 1; i <= 10; i++) {
                items.push((1/i).toFixed(3));
            }
            break;
        case 'converge':
            formulaText = '$a_n = 1 + \\frac{1}{2^n}$';
            for(let i = 1; i <= 10; i++) {
                items.push((1 + 1/Math.pow(2, i)).toFixed(4));
            }
            break;
    }
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'sequence-item';
        div.textContent = item;
        display.appendChild(div);
    });
    
    formula.innerHTML = formulaText;
    renderMath();
    drawSequenceGraph();
}

// --- 绘制数列图像（坐标系标注规范） ---
function drawSequenceGraph() {
    const canvas = document.getElementById('seqGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const n = parseInt(document.getElementById('nSlider').value);
    const type = document.getElementById('seqType').value;
    
    // 边距设置
    const marginLeft = 50;
    const marginRight = 30;
    const marginTop = 30;
    const marginBottom = 40;
    const plotWidth = width - marginLeft - marginRight;
    const plotHeight = height - marginTop - marginBottom;
    
    ctx.clearRect(0, 0, width, height);
    
    // 计算数列值
    let values = [];
    let maxVal = 0;
    let minVal = Infinity;
    for(let i = 1; i <= n; i++) {
        let val = 0;
        switch(type) {
            case 'arithmetic':
                val = 3 * i - 1;
                break;
            case 'geometric':
                val = 2 * Math.pow(1.5, i - 1);
                break;
            case 'harmonic':
                val = 1 / i;
                break;
            case 'converge':
                val = 1 + 1 / Math.pow(2, i);
                break;
        }
        values.push(val);
        maxVal = Math.max(maxVal, val);
        minVal = Math.min(minVal, val);
    }
    
    // 调整Y轴范围
    const yPadding = (maxVal - minVal) * 0.1 || 1;
    const yMin = Math.max(0, minVal - yPadding);
    const yMax = maxVal + yPadding;
    const yRange = yMax - yMin;
    
    // 绘制背景网格
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // 水平网格线
    const yTickCount = 5;
    for(let i = 0; i <= yTickCount; i++) {
        const y = marginTop + (plotHeight * i / yTickCount);
        ctx.beginPath();
        ctx.moveTo(marginLeft, y);
        ctx.lineTo(width - marginRight, y);
        ctx.stroke();
    }
    
    // 垂直网格线
    const xTickCount = Math.min(n, 10);
    for(let i = 0; i <= xTickCount; i++) {
        const x = marginLeft + (plotWidth * i / xTickCount);
        ctx.beginPath();
        ctx.moveTo(x, marginTop);
        ctx.lineTo(x, height - marginBottom);
        ctx.stroke();
    }
    
    // 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // X轴
    ctx.moveTo(marginLeft, height - marginBottom);
    ctx.lineTo(width - marginRight, height - marginBottom);
    // Y轴
    ctx.moveTo(marginLeft, marginTop);
    ctx.lineTo(marginLeft, height - marginBottom);
    ctx.stroke();
    
    // 绘制坐标轴箭头
    ctx.fillStyle = '#374151';
    // X轴箭头
    ctx.beginPath();
    ctx.moveTo(width - marginRight, height - marginBottom);
    ctx.lineTo(width - marginRight - 8, height - marginBottom - 4);
    ctx.lineTo(width - marginRight - 8, height - marginBottom + 4);
    ctx.closePath();
    ctx.fill();
    // Y轴箭头
    ctx.beginPath();
    ctx.moveTo(marginLeft, marginTop);
    ctx.lineTo(marginLeft - 4, marginTop + 8);
    ctx.lineTo(marginLeft + 4, marginTop + 8);
    ctx.closePath();
    ctx.fill();
    
    // 绘制轴标签
    ctx.fillStyle = '#374151';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('n', width - marginRight + 10, height - marginBottom - 5);
    
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText('aₙ', marginLeft - 8, marginTop - 5);
    
    // 绘制原点标签
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText('O', marginLeft - 5, height - marginBottom + 5);
    
    // 绘制X轴刻度
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const xStep = plotWidth / n;
    for(let i = 1; i <= n; i += Math.ceil(n / 10)) {
        const x = marginLeft + i * xStep;
        ctx.fillText(i.toString(), x, height - marginBottom + 8);
        // 刻度线
        ctx.beginPath();
        ctx.moveTo(x, height - marginBottom);
        ctx.lineTo(x, height - marginBottom + 4);
        ctx.stroke();
    }
    
    // 绘制Y轴刻度
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for(let i = 0; i <= yTickCount; i++) {
        const yVal = yMax - (yRange * i / yTickCount);
        const y = marginTop + (plotHeight * i / yTickCount);
        let label = yVal.toFixed(yVal < 1 ? 3 : 1);
        if (yVal >= 100) label = Math.round(yVal).toString();
        ctx.fillText(label, marginLeft - 8, y);
        // 刻度线
        ctx.beginPath();
        ctx.moveTo(marginLeft - 4, y);
        ctx.lineTo(marginLeft, y);
        ctx.stroke();
    }
    
    // 绘制数列点和连线
    ctx.strokeStyle = '#4f46e5';
    ctx.fillStyle = '#4f46e5';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    values.forEach((val, i) => {
        const x = marginLeft + (i + 1) * xStep;
        const y = marginTop + plotHeight * (1 - (val - yMin) / yRange);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // 绘制数据点
    values.forEach((val, i) => {
        const x = marginLeft + (i + 1) * xStep;
        const y = marginTop + plotHeight * (1 - (val - yMin) / yRange);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // 如果是收敛数列，画极限线
    if (type === 'converge') {
        const limitY = marginTop + plotHeight * (1 - (1 - yMin) / yRange);
        ctx.strokeStyle = '#ef4444';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(marginLeft, limitY);
        ctx.lineTo(width - marginRight, limitY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // 极限值标注
        ctx.fillStyle = '#ef4444';
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('L = 1', width - marginRight - 40, limitY - 8);
    }
    
    // 如果是调和数列，画极限线 y=0
    if (type === 'harmonic') {
        const limitY = marginTop + plotHeight * (1 - (0 - yMin) / yRange);
        if (limitY <= height - marginBottom) {
            ctx.strokeStyle = '#ef4444';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(marginLeft, limitY);
            ctx.lineTo(width - marginRight, limitY);
            ctx.stroke();
            ctx.setLineDash([]);
            
            ctx.fillStyle = '#ef4444';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('L = 0', width - marginRight - 40, limitY - 8);
        }
    }
}

// --- 加载图像 ---
function loadImage() {
    const originalCanvas = document.getElementById('originalImage');
    const compressedCanvas = document.getElementById('compressedImage');
    const diffCanvas = document.getElementById('diffImage');
    const dctCanvas = document.getElementById('dctImage');
    
    if (!originalCanvas) return;
    
    const imageType = document.getElementById('imageSelect').value;
    
    [originalCanvas, compressedCanvas, diffCanvas, dctCanvas].forEach(canvas => {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 200, 200);
    });
    
    const ctx = originalCanvas.getContext('2d');
    
    switch(imageType) {
        case 'landscape':
            // 绘制风景
            ctx.fillStyle = '#87CEEB';
            ctx.fillRect(0, 0, 200, 100);
            ctx.fillStyle = '#228B22';
            ctx.fillRect(0, 100, 200, 100);
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(150, 50, 30, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'portrait':
            // 绘制人像
            ctx.fillStyle = '#FDB5A6';
            ctx.beginPath();
            ctx.arc(100, 80, 40, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#4169E1';
            ctx.fillRect(60, 120, 80, 80);
            break;
        case 'abstract':
            // 绘制抽象图案
            for(let i = 0; i < 5; i++) {
                ctx.fillStyle = `hsl(${i * 72}, 70%, 50%)`;
                ctx.fillRect(i * 40, i * 40, 40, 40);
            }
            break;
    }
    
    compressImage();
}

// --- 压缩图像 ---
function compressImage() {
    const quality = parseInt(document.getElementById('qualitySlider').value);
    const originalCanvas = document.getElementById('originalImage');
    const compressedCanvas = document.getElementById('compressedImage');
    const diffCanvas = document.getElementById('diffImage');
    const dctCanvas = document.getElementById('dctImage');
    
    if (!originalCanvas) return;
    
    const ctxComp = compressedCanvas.getContext('2d');
    ctxComp.drawImage(originalCanvas, 0, 0);
    
    const imageData = ctxComp.getImageData(0, 0, 200, 200);
    const data = imageData.data;
    const blockSize = Math.floor(10 - quality / 12);
    
    if (blockSize > 1) {
        for(let y = 0; y < 200; y += blockSize) {
            for(let x = 0; x < 200; x += blockSize) {
                let r = 0, g = 0, b = 0, count = 0;
                
                for(let dy = 0; dy < blockSize && y + dy < 200; dy++) {
                    for(let dx = 0; dx < blockSize && x + dx < 200; dx++) {
                        const idx = ((y + dy) * 200 + (x + dx)) * 4;
                        r += data[idx];
                        g += data[idx + 1];
                        b += data[idx + 2];
                        count++;
                    }
                }
                
                r = Math.floor(r / count);
                g = Math.floor(g / count);
                b = Math.floor(b / count);
                
                for(let dy = 0; dy < blockSize && y + dy < 200; dy++) {
                    for(let dx = 0; dx < blockSize && x + dx < 200; dx++) {
                        const idx = ((y + dy) * 200 + (x + dx)) * 4;
                        data[idx] = r;
                        data[idx + 1] = g;
                        data[idx + 2] = b;
                    }
                }
            }
        }
    }
    
    ctxComp.putImageData(imageData, 0, 0);
    document.getElementById('qLabel').textContent = quality;
    
    // 计算差异图
    const ctxDiff = diffCanvas.getContext('2d');
    const origData = originalCanvas.getContext('2d').getImageData(0, 0, 200, 200);
    const diffData = ctxDiff.createImageData(200, 200);
    
    for(let i = 0; i < data.length; i += 4) {
        const diff = Math.abs(origData.data[i] - data[i]) + 
                     Math.abs(origData.data[i+1] - data[i+1]) + 
                     Math.abs(origData.data[i+2] - data[i+2]);
        diffData.data[i] = diff;
        diffData.data[i+1] = diff;
        diffData.data[i+2] = diff;
        diffData.data[i+3] = 255;
    }
    
    ctxDiff.putImageData(diffData, 0, 0);
    
    // 模拟DCT频域
    const ctxDCT = dctCanvas.getContext('2d');
    ctxDCT.fillStyle = '#000';
    ctxDCT.fillRect(0, 0, 200, 200);
    
    for(let i = 0; i < 20; i++) {
        for(let j = 0; j < 20; j++) {
            const intensity = Math.max(0, 255 - (i + j) * 10 * (100 - quality) / 100);
            ctxDCT.fillStyle = `rgb(${intensity}, ${intensity}, ${intensity})`;
            ctxDCT.fillRect(i * 10, j * 10, 10, 10);
        }
    }
    
    const compressionRate = (100 - quality) * 0.8;
    const fileSize = Math.floor(100 - compressionRate);
    document.getElementById('compressionInfo').textContent = 
        `压缩率: ${compressionRate.toFixed(1)}% | 文件大小: ${fileSize}KB`;
    
    updateDiffSequence(quality);
}

// --- 更新差异值数列 ---
function updateDiffSequence(quality) {
    const display = document.getElementById('diffSequence');
    if (!display) return;
    
    display.innerHTML = '';
    for(let i = 1; i <= 10; i++) {
        const diff = (100 - quality) * Math.pow(0.9, i);
        const div = document.createElement('div');
        div.className = 'sequence-item';
        div.textContent = diff.toFixed(2);
        display.appendChild(div);
    }
    
    const progress = document.getElementById('progressBar');
    progress.style.width = quality + '%';
    progress.textContent = quality + '%';
}

// --- 动画演示压缩 ---
function animateCompression() {
    let quality = 100;
    const interval = setInterval(() => {
        quality -= 5;
        if (quality < 10) {
            quality = 100;
        }
        document.getElementById('qualitySlider').value = quality;
        document.getElementById('qualityValue').textContent = quality + '%';
        compressImage();
        
        if (quality === 100) {
            clearInterval(interval);
        }
    }, 200);
}

// --- 初始化逼近 ---
function initApproximation() {
    const canvas = document.getElementById('approxCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 400, 400);
    
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, 300, 300);
    
    ctx.fillStyle = '#9ca3af';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('点击"开始演示"观看逼近过程', 200, 200);
    
    drawConvergenceGraph();
}

// --- 绘制收敛图（坐标系标注规范）---
function drawConvergenceGraph() {
    const canvas = document.getElementById('convergenceGraph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const marginLeft = 40;
    const marginRight = 20;
    const marginTop = 15;
    const marginBottom = 30;
    const plotWidth = width - marginLeft - marginRight;
    const plotHeight = height - marginTop - marginBottom;
    
    ctx.clearRect(0, 0, width, height);
    
    // 背景网格
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for(let i = 0; i <= 4; i++) {
        const y = marginTop + (plotHeight * i / 4);
        ctx.beginPath();
        ctx.moveTo(marginLeft, y);
        ctx.lineTo(width - marginRight, y);
        ctx.stroke();
    }
    
    // 坐标轴
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(marginLeft, height - marginBottom);
    ctx.lineTo(width - marginRight, height - marginBottom);
    ctx.moveTo(marginLeft, marginTop);
    ctx.lineTo(marginLeft, height - marginBottom);
    ctx.stroke();
    
    // 轴标签
    ctx.fillStyle = '#374151';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('迭代次数 n', width / 2, height - 5);
    
    ctx.save();
    ctx.translate(12, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('误差 ε', 0, 0);
    ctx.restore();
    
    // 收敛曲线
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for(let i = 0; i <= 20; i++) {
        const x = marginLeft + (plotWidth * i / 20);
        const y = marginTop + plotHeight * (1 - Math.exp(-i * 0.3));
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // 极限线
    ctx.strokeStyle = '#ef4444';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(marginLeft, marginTop);
    ctx.lineTo(width - marginRight, marginTop);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#ef4444';
    ctx.font = '10px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('ε → 0', width - marginRight - 5, marginTop + 12);
}

let approxInterval;
let currentIteration = 0;
let isPaused = false;

// --- 开始逼近 ---
function startApproximation() {
    currentIteration = 0;
    isPaused = false;
    const iterations = parseInt(document.getElementById('iterations').value);
    const speed = parseInt(document.getElementById('speedSlider').value);
    
    clearInterval(approxInterval);
    
    approxInterval = setInterval(() => {
        if (!isPaused && currentIteration < iterations) {
            currentIteration++;
            updateApproximation(currentIteration, iterations);
        } else if (currentIteration >= iterations) {
            clearInterval(approxInterval);
            document.getElementById('approxStatus').textContent = '逼近完成';
        }
    }, speed);
}

// --- 暂停/继续逼近 ---
function pauseApproximation() {
    isPaused = !isPaused;
    document.getElementById('approxStatus').textContent = 
        isPaused ? '已暂停' : '逼近中...';
}

// --- 更新逼近显示 ---
function updateApproximation(current, total) {
    const canvas = document.getElementById('approxCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const progress = current / total;
    
    ctx.clearRect(0, 0, 400, 400);
    
    const blockSize = Math.max(2, Math.floor(20 * (1 - progress)));
    
    for(let y = 50; y < 350; y += blockSize) {
        for(let x = 50; x < 350; x += blockSize) {
            const intensity = Math.floor(255 * progress);
            const hue = (x + y) / 5;
            ctx.fillStyle = `hsl(${hue}, 70%, ${50 + intensity/10}%)`;
            ctx.fillRect(x, y, blockSize - 1, blockSize - 1);
        }
    }
    
    const error = ((1 - progress) * 100).toFixed(1);
    document.getElementById('approxInfo').textContent = 
        `当前迭代: ${current} | 误差: ${error}%`;
    document.getElementById('approxStatus').textContent = 
        `逼近中... (${current}/${total})`;
    document.getElementById('convergenceInfo').textContent = 
        `逼近效果: ${(progress * 100).toFixed(1)}%`;
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
    const nSlider = document.getElementById('nSlider');
    if (nSlider) {
        nSlider.addEventListener('input', function() {
            document.getElementById('nValue').textContent = this.value;
            drawSequenceGraph();
        });
    }

    const qualitySlider = document.getElementById('qualitySlider');
    if (qualitySlider) {
        qualitySlider.addEventListener('input', function() {
            document.getElementById('qualityValue').textContent = this.value + '%';
            compressImage();
        });
    }

    const speedSlider = document.getElementById('speedSlider');
    if (speedSlider) {
        speedSlider.addEventListener('input', function() {
            document.getElementById('speedValue').textContent = this.value + 'ms';
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
            if (panelId === 'concept') {
                drawSequenceGraph();
            } else if (panelId === 'compress') {
                loadImage();
            } else if (panelId === 'limit') {
                initApproximation();
            }
        }
    }, 150);
});

// --- 初始化 ---
window.addEventListener('DOMContentLoaded', function() {
    initSliders();
    setTimeout(() => {
        updateSequence();
        drawSequenceGraph();
        renderMath();
    }, 100);
});

