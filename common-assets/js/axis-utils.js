/**
 * 通用坐标轴绘制工具
 * @param {CanvasRenderingContext2D} ctx - Canvas上下文
 * @param {Object} params - 绘制参数
 * @param {number} params.width - Canvas宽度
 * @param {number} params.height - Canvas高度
 * @param {number} params.scale - 缩放比例 (像素/单位)
 * @param {number} params.centerX - 原点X坐标 (默认居中)
 * @param {number} params.centerY - 原点Y坐标 (默认居中)
 * @param {number} params.step - 刻度步长 (默认1)
 * @param {boolean} params.showGrid - 是否显示网格 (默认true)
 * @param {boolean} params.showTicks - 是否显示刻度 (默认true)
 * @param {boolean} params.showLabels - 是否显示数字标签 (默认true)
 */
/**
 * 通用坐标轴绘制工具
 * @param {CanvasRenderingContext2D} ctx - Canvas上下文
 * @param {Object} params - 绘制参数
 * @param {number} params.width - Canvas宽度
 * @param {number} params.height - Canvas高度
 * @param {number} [params.scale] - 统一缩放比例 (像素/单位)，如果提供了 xRange/yRange 则忽略此参数
 * @param {number[]} [params.xRange] - X轴范围 [min, max]
 * @param {number[]} [params.yRange] - Y轴范围 [min, max]
 * @param {number} [params.padding=40] - 画布边距 (用于计算绘图区域)
 * @param {number} [params.centerX] - 原点X坐标 (默认居中，如果提供了 xRange 则自动计算)
 * @param {number} [params.centerY] - 原点Y坐标 (默认居中，如果提供了 yRange 则自动计算)
 * @param {number} [params.step=1] - 刻度步长 (默认1)
 * @param {boolean} [params.showGrid=true] - 是否显示网格 (默认true)
 * @param {boolean} [params.showTicks=true] - 是否显示刻度 (默认true)
 * @param {boolean} [params.showLabels=true] - 是否显示数字标签 (默认true)
 */
function drawEnhancedAxes(ctx, params) {
    let {
        width,
        height,
        scale = 40,
        centerX,
        centerY,
        xRange,
        yRange,
        padding = 40,
        step = 1,
        showGrid = true,
        showTicks = true,
        showLabels = true
    } = params;

    let scaleX = scale;
    let scaleY = scale;

    // 如果提供了范围，自动计算缩放比例和原点位置
    if (xRange && yRange) {
        const plotWidth = width - 2 * padding;
        const plotHeight = height - 2 * padding;

        scaleX = plotWidth / (xRange[1] - xRange[0]);
        scaleY = plotHeight / (yRange[1] - yRange[0]);

        // 计算原点位置 (0,0) 在画布上的坐标
        // canvasX = padding + (0 - xRange[0]) * scaleX
        centerX = padding - xRange[0] * scaleX;

        // canvasY = height - padding - (0 - yRange[0]) * scaleY
        centerY = height - padding + yRange[0] * scaleY;
    } else {
        // 兼容旧模式
        if (centerX === undefined) centerX = width / 2;
        if (centerY === undefined) centerY = height / 2;
    }

    const fontSize = 12;
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 1. 绘制网格
    if (showGrid) {
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 0.5;

        // 垂直网格
        // 从原点向右
        for (let x = centerX; x < width - padding + 1; x += scaleX * step) {
            if (x >= padding) {
                ctx.beginPath();
                ctx.moveTo(x, padding);
                ctx.lineTo(x, height - padding);
                ctx.stroke();
            }
        }
        // 从原点向左
        for (let x = centerX; x > padding - 1; x -= scaleX * step) {
            if (x <= width - padding) {
                ctx.beginPath();
                ctx.moveTo(x, padding);
                ctx.lineTo(x, height - padding);
                ctx.stroke();
            }
        }

        // 水平网格
        // 从原点向下 (y增加)
        for (let y = centerY; y < height - padding + 1; y += scaleY * step) {
            if (y >= padding) {
                ctx.beginPath();
                ctx.moveTo(padding, y);
                ctx.lineTo(width - padding, y);
                ctx.stroke();
            }
        }
        // 从原点向上 (y减少)
        for (let y = centerY; y > padding - 1; y -= scaleY * step) {
            if (y <= height - padding) {
                ctx.beginPath();
                ctx.moveTo(padding, y);
                ctx.lineTo(width - padding, y);
                ctx.stroke();
            }
        }
    }

    // 2. 绘制坐标轴
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1.5;
    ctx.fillStyle = '#374151';

    // X轴 (限制在绘图区域内)
    if (centerY >= padding && centerY <= height - padding) {
        ctx.beginPath();
        ctx.moveTo(padding, centerY);
        ctx.lineTo(width - padding, centerY);
        ctx.stroke();
    } else {
        // 如果原点不在可视区域，绘制在边缘
        // 这里简单处理，还是画出来，或者根据需求隐藏
        // 为了保持坐标系可见，通常还是画在绘图区边缘比较好，但这里先保持简单
    }

    // Y轴
    if (centerX >= padding && centerX <= width - padding) {
        ctx.beginPath();
        ctx.moveTo(centerX, padding);
        ctx.lineTo(centerX, height - padding);
        ctx.stroke();
    }

    // 3. 绘制箭头 (始终在轴的末端)
    const arrowSize = 8;
    // X轴箭头
    ctx.beginPath();
    ctx.moveTo(width - padding, centerY);
    ctx.lineTo(width - padding - arrowSize, centerY - arrowSize / 2);
    ctx.lineTo(width - padding - arrowSize, centerY + arrowSize / 2);
    ctx.fill();
    // Y轴箭头
    ctx.beginPath();
    ctx.moveTo(centerX, padding);
    ctx.lineTo(centerX - arrowSize / 2, padding + arrowSize);
    ctx.lineTo(centerX + arrowSize / 2, padding + arrowSize);
    ctx.fill();

    // 4. 绘制轴名称
    ctx.font = 'bold 14px Arial';
    ctx.fillText('x', width - padding + 15, centerY + 5); // X轴标签在右侧
    ctx.fillText('y', centerX, padding - 15); // Y轴标签在上方

    // 5. 绘制原点
    if (centerX >= padding && centerX <= width - padding && centerY >= padding && centerY <= height - padding) {
        ctx.font = '12px Arial';
        ctx.fillText('O', centerX - 12, centerY + 12);
    }

    // 6. 绘制刻度和标签
    if (showTicks || showLabels) {
        ctx.lineWidth = 1;
        const tickSize = 4;
        ctx.font = '12px Arial';

        // X轴刻度
        // 向右
        for (let x = centerX + scaleX * step; x < width - padding; x += scaleX * step) {
            if (x < padding) continue;
            if (showTicks) {
                ctx.beginPath();
                ctx.moveTo(x, centerY);
                ctx.lineTo(x, centerY - tickSize);
                ctx.stroke();
            }
            if (showLabels) {
                const val = Math.round((x - centerX) / scaleX);
                ctx.fillText(val, x, centerY + 15);
            }
        }
        // 向左
        for (let x = centerX - scaleX * step; x > padding; x -= scaleX * step) {
            if (x > width - padding) continue;
            if (showTicks) {
                ctx.beginPath();
                ctx.moveTo(x, centerY);
                ctx.lineTo(x, centerY - tickSize);
                ctx.stroke();
            }
            if (showLabels) {
                const val = Math.round((x - centerX) / scaleX);
                ctx.fillText(val, x, centerY + 15);
            }
        }

        // Y轴刻度
        // 向下 (数值减小)
        for (let y = centerY + scaleY * step; y < height - padding; y += scaleY * step) {
            if (y < padding) continue;
            if (showTicks) {
                ctx.beginPath();
                ctx.moveTo(centerX, y);
                ctx.lineTo(centerX + tickSize, y);
                ctx.stroke();
            }
            if (showLabels) {
                const val = Math.round(-(y - centerY) / scaleY);
                ctx.fillText(val, centerX - 15, y);
            }
        }
        // 向上 (数值增加)
        for (let y = centerY - scaleY * step; y > padding; y -= scaleY * step) {
            if (y > height - padding) continue;
            if (showTicks) {
                ctx.beginPath();
                ctx.moveTo(centerX, y);
                ctx.lineTo(centerX + tickSize, y);
                ctx.stroke();
            }
            if (showLabels) {
                const val = Math.round(-(y - centerY) / scaleY);
                ctx.fillText(val, centerX - 15, y);
            }
        }
    }
}
