window.exerciseData = {
  exercises: [
{
      id: 1,
      type: "选择题",
      title: "二重积分基础",
      question: "计算二重积分 $\\iint_D xy \\, dA$，其中 $D = \\{(x,y) | 0 \\leq x \\leq 1, 0 \\leq y \\leq 1\\}$（ ）\nA. $\\frac{1}{4}$ B. $\\frac{1}{2}$ C. $1$ D. $2$",
      essence: "计算矩形区域上的二重积分。使用累次积分的方法，先对一个变量积分，再对另一个变量积分。",
      explanation: `<strong>第一步：设置积分顺序</strong>
$$\\iint_D xy \\, dA = \\int_0^1 \\int_0^1 xy \\, dy \\, dx$$

<strong>第二步：先对 $y$ 积分</strong>
$$\\int_0^1 xy \\, dy = x \\cdot \\frac{y^2}{2}\\Big|_0^1 = \\frac{x}{2}$$

<strong>第三步：再对 $x$ 积分</strong>
$$\\int_0^1 \\frac{x}{2} \\, dx = \\frac{1}{2} \\cdot \\frac{x^2}{2}\\Big|_0^1 = \\frac{1}{4}$$

<strong>第四步：得出结论</strong>
答案为 $\\frac{1}{4}$`,
      answer: "A",
      difficulty: "easy",
      category: "二重积分",
      method: "累次积分"
    },
{
      id: 2,
      type: "选择题",
      title: "极坐标积分",
      question: "用极坐标计算 $\\iint_D \\sqrt{x^2 + y^2} \\, dA$，其中 $D$ 是单位圆盘（ ）\nA. $\\frac{\\pi}{3}$ B. $\\frac{2\\pi}{3}$ C. $\\frac{4\\pi}{3}$ D. $\\frac{8\\pi}{3}$",
      essence: "在极坐标下计算二重积分。记住极坐标下的面积元素是 $r \\, dr \\, d\\theta$。",
      explanation: `<strong>第一步：转换为极坐标</strong>
$$x = r\\cos\\theta, \\quad y = r\\sin\\theta$$
$$\\sqrt{x^2 + y^2} = r, \\quad dA = r \\, dr \\, d\\theta$$

<strong>第二步：确定积分限</strong>
单位圆盘：$0 \\leq r \\leq 1, \\quad 0 \\leq \\theta \\leq 2\\pi$

<strong>第三步：设置积分</strong>
$$\\iint_D r \\cdot r \\, dr \\, d\\theta = \\int_0^{2\\pi} \\int_0^1 r^2 \\, dr \\, d\\theta$$

<strong>第四步：计算积分</strong>
$$\\int_0^1 r^2 \\, dr = \\frac{r^3}{3}\\Big|_0^1 = \\frac{1}{3}$$
$$\\int_0^{2\\pi} \\frac{1}{3} \\, d\\theta = \\frac{1}{3} \\cdot 2\\pi = \\frac{2\\pi}{3}$$

答案为 $\\frac{2\\pi}{3}$`,
      answer: "B",
      difficulty: "medium",
      category: "极坐标积分",
      method: "坐标变换"
    },
{
      id: 3,
      type: "选择题",
      title: "积分换序",
      question: "交换积分次序：$\\int_0^1 \\int_x^1 f(x,y) \\, dy \\, dx$ 等于（ ）\nA. $\\int_0^1 \\int_0^y f(x,y) \\, dx \\, dy$ B. $\\int_0^1 \\int_y^1 f(x,y) \\, dx \\, dy$ \nC. $\\int_0^1 \\int_0^x f(x,y) \\, dy \\, dx$ D. $\\int_0^1 \\int_0^1 f(x,y) \\, dx \\, dy$",
      essence: "交换二重积分的积分次序。需要正确分析积分区域，画出区域图形。",
      explanation: `<strong>第一步：分析原积分区域</strong>
原积分：$0 \\leq x \\leq 1$，$x \\leq y \\leq 1$
区域 $D = \\{(x,y) | 0 \\leq x \\leq 1, x \\leq y \\leq 1\\}$

<strong>第二步：画出区域图</strong>
这是由直线 $y = x$、$y = 1$、$x = 0$ 围成的三角形区域

<strong>第三步：改变积分次序</strong>
按 $y$ 优先：$0 \\leq y \\leq 1$，$0 \\leq x \\leq y$

<strong>第四步：写出新积分</strong>
$$\\int_0^1 \\int_0^y f(x,y) \\, dx \\, dy$$

答案为 A`,
      answer: "A",
      difficulty: "medium",
      category: "积分换序",
      method: "区域分析法"
    },
{
      id: 4,
      type: "选择题",
      title: "三重积分",
      question: "计算三重积分 $\\iiint_V 1 \\, dV$，其中 $V$ 是半径为 $R$ 的球体，结果为（ ）\nA. $\\frac{4\\pi R^3}{3}$ B. $\\frac{2\\pi R^3}{3}$ C. $\\pi R^3$ D. $4\\pi R^3$",
      essence: "计算球体的体积。三重积分 $\\iiint_V 1 \\, dV$ 就是区域 $V$ 的体积。",
      explanation: `<strong>第一步：理解题意</strong>
$$\\iiint_V 1 \\, dV = \\text{球体的体积}$$

<strong>第二步：使用球坐标</strong>
球坐标：$x = r\\sin\\phi\\cos\\theta$，$y = r\\sin\\phi\\sin\\theta$，$z = r\\cos\\phi$
体积元素：$dV = r^2\\sin\\phi \\, dr \\, d\\phi \\, d\\theta$

<strong>第三步：设置积分限</strong>
$$0 \\leq r \\leq R, \\quad 0 \\leq \\phi \\leq \\pi, \\quad 0 \\leq \\theta \\leq 2\\pi$$

<strong>第四步：计算积分</strong>
$$\\int_0^{2\\pi} \\int_0^\\pi \\int_0^R r^2\\sin\\phi \\, dr \\, d\\phi \\, d\\theta$$
$$= \\int_0^{2\\pi} d\\theta \\cdot \\int_0^\\pi \\sin\\phi \\, d\\phi \\cdot \\int_0^R r^2 \\, dr$$
$$= 2\\pi \\cdot 2 \\cdot \\frac{R^3}{3} = \\frac{4\\pi R^3}{3}$$

答案为 $\\frac{4\\pi R^3}{3}$`,
      answer: "A",
      difficulty: "medium",
      category: "三重积分",
      method: "球坐标法"
    },
{
      id: 5,
      type: "选择题",
      title: "曲线积分",
      question: "计算曲线积分 $\\int_C x \\, ds$，其中 $C$ 是从 $(0,0)$ 到 $(1,1)$ 的直线段（ ）\nA. $\\frac{\\sqrt{2}}{2}$ B. $\\sqrt{2}$ C. $\\frac{1}{2}$ D. $1$",
      essence: "第一类曲线积分的计算。需要参数化曲线并计算弧长元素 $ds$。",
      explanation: `<strong>第一步：参数化曲线</strong>
直线段方程：$y = x$，从 $(0,0)$ 到 $(1,1)$
参数化：$x = t$，$y = t$，$0 \\leq t \\leq 1$

<strong>第二步：计算弧长元素</strong>
$$ds = \\sqrt{(dx)^2 + (dy)^2} = \\sqrt{1 + 1} \\, dt = \\sqrt{2} \\, dt$$

<strong>第三步：代入积分</strong>
$$\\int_C x \\, ds = \\int_0^1 t \\cdot \\sqrt{2} \\, dt = \\sqrt{2} \\int_0^1 t \\, dt$$

<strong>第四步：计算结果</strong>
$$= \\sqrt{2} \\cdot \\frac{t^2}{2}\\Big|_0^1 = \\frac{\\sqrt{2}}{2}$$

答案为 $\\frac{\\sqrt{2}}{2}$`,
      answer: "A",
      difficulty: "medium",
      category: "曲线积分",
      method: "参数化法"
    },
{
      id: 6,
      type: "选择题",
      title: "格林公式",
      question: "用格林公式计算 $\\oint_C (y \\, dx - x \\, dy)$，其中 $C$ 是单位圆周（逆时针）（ ）\nA. $0$ B. $\\pi$ C. $-2\\pi$ D. $2\\pi$",
      essence: "应用格林公式将曲线积分转化为二重积分。格林公式：$\\oint_C (P \\, dx + Q \\, dy) = \\iint_D (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}) \\, dA$",
      explanation: `<strong>第一步：识别 $P$ 和 $Q$</strong>
$$P = y, \\quad Q = -x$$

<strong>第二步：计算偏导数</strong>
$$\\frac{\\partial Q}{\\partial x} = -1, \\quad \\frac{\\partial P}{\\partial y} = 1$$

<strong>第三步：应用格林公式</strong>
$$\\oint_C (y \\, dx - x \\, dy) = \\iint_D (-1 - 1) \\, dA = -2 \\iint_D dA$$

<strong>第四步：计算面积积分</strong>
$D$ 是单位圆盘，面积为 $\\pi$
$$= -2 \\cdot \\pi = -2\\pi$$

答案为 $-2\\pi$`,
      answer: "C",
      difficulty: "hard",
      category: "格林公式",
      method: "格林公式"
    }
],
  knowledgePoints: [
    {
      title: "二重积分",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e74c3c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #e74c3c; margin-bottom: 15px; font-size: 1.2rem;">二重积分概念与计算</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>定义</strong>：$\\iint_D f(x,y) \\, dA = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i, y_i) \\Delta A_i$</li>
            <li style="margin-bottom: 10px;"><strong>直角坐标计算</strong>：
              $$\\iint_D f(x,y) \\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x,y) \\, dy \\, dx$$</li>
            <li style="margin-bottom: 10px;"><strong>极坐标计算</strong>：$x = r\\cos\\theta$，$y = r\\sin\\theta$，$dA = r \\, dr \\, d\\theta$</li>
            <li style="margin-bottom: 10px;"><strong>积分换序</strong>：根据积分区域重新确定积分限</li>
            <li style="margin-bottom: 10px;"><strong>对称性利用</strong>：奇函数在对称区域上积分为零</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "三重积分",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #3498db; margin-bottom: 15px; font-size: 1.2rem;">三重积分与坐标系</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>直角坐标</strong>：$\\iiint_V f(x,y,z) \\, dV = \\iiint_V f(x,y,z) \\, dx \\, dy \\, dz$</li>
            <li style="margin-bottom: 10px;"><strong>柱坐标</strong>：$x = r\\cos\\theta$，$y = r\\sin\\theta$，$z = z$
              $$dV = r \\, dr \\, d\\theta \\, dz$$</li>
            <li style="margin-bottom: 10px;"><strong>球坐标</strong>：$x = r\\sin\\phi\\cos\\theta$，$y = r\\sin\\phi\\sin\\theta$，$z = r\\cos\\phi$
              $$dV = r^2\\sin\\phi \\, dr \\, d\\phi \\, d\\theta$$</li>
            <li style="margin-bottom: 10px;"><strong>应用</strong>：计算体积、质量、质心、转动惯量等</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "曲线积分",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #2ecc71; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #2ecc71; margin-bottom: 15px; font-size: 1.2rem;">曲线积分类型</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>第一类（对弧长）</strong>：$\\int_C f(x,y) \\, ds$
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li>参数方程：$ds = \\sqrt{(x'(t))^2 + (y'(t))^2} \\, dt$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>第二类（对坐标）</strong>：$\\int_C P \\, dx + Q \\, dy$
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li>参数方程：$\\int_{t_1}^{t_2} [P(x(t),y(t))x'(t) + Q(x(t),y(t))y'(t)] \\, dt$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>路径无关条件</strong>：$\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "格林公式与斯托克斯定理",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #9b59b6; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #9b59b6; margin-bottom: 15px; font-size: 1.2rem;">重要定理</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>格林公式</strong>：
              $$\\oint_C P \\, dx + Q \\, dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) \\, dA$$</li>
            <li style="margin-bottom: 10px;"><strong>斯托克斯定理</strong>：
              $$\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S}$$</li>
            <li style="margin-bottom: 10px;"><strong>高斯定理</strong>：
              $$\\oiint_S \\vec{F} \\cdot d\\vec{S} = \\iiint_V \\nabla \\cdot \\vec{F} \\, dV$$</li>
            <li style="margin-bottom: 10px;"><strong>应用</strong>：简化积分计算，物理场的分析</li>
          </ul>
        </div>
      </div>
    `
    }
  ]
};