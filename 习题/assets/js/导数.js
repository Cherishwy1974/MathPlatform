// 知识点数据
window.exerciseData = {
  knowledgePoints: [
    {
      title: "导数的概念",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>导数的定义</strong>：设函数 $y = f(x)$ 在点 $x_0$ 的某个邻域内有定义，如果极限 $\\lim\\limits_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$ 存在，则称此极限为函数 $f(x)$ 在点 $x_0$ 处的导数，记作 $f'(x_0)$ 或 $\\frac{dy}{dx}\\bigg|_{x=x_0}$</li>
            <li style="margin-bottom: 10px;"><strong>导数的几何意义</strong>：函数 $f(x)$ 在点 $x_0$ 处的导数 $f'(x_0)$ 就是曲线 $y = f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率</li>
            <li style="margin-bottom: 10px;"><strong>导数的物理意义</strong>：如果 $s = s(t)$ 表示质点的位移函数，则 $s'(t_0)$ 表示质点在时刻 $t_0$ 的瞬时速度</li>
            <li style="margin-bottom: 10px;"><strong>可导与连续的关系</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">如果函数 $f(x)$ 在点 $x_0$ 处可导，则 $f(x)$ 在点 $x_0$ 处连续</li>
                <li style="margin-bottom: 5px;">连续不一定可导（如 $f(x) = |x|$ 在 $x = 0$ 处）</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "基本导数公式",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>常数函数</strong>：$(C)' = 0$</li>
            <li style="margin-bottom: 10px;"><strong>幂函数</strong>：$(x^n)' = nx^{n-1}$</li>
            <li style="margin-bottom: 10px;"><strong>指数函数</strong>：$(e^x)' = e^x$，$(a^x)' = a^x \\ln a$</li>
            <li style="margin-bottom: 10px;"><strong>对数函数</strong>：$(\\ln x)' = \\frac{1}{x}$，$(\\log_a x)' = \\frac{1}{x \\ln a}$</li>
            <li style="margin-bottom: 10px;"><strong>三角函数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(\\sin x)' = \\cos x$</li>
                <li style="margin-bottom: 5px;">$(\\cos x)' = -\\sin x$</li>
                <li style="margin-bottom: 5px;">$(\\tan x)' = \\sec^2 x$</li>
                <li style="margin-bottom: 5px;">$(\\cot x)' = -\\csc^2 x$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>反三角函数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}$</li>
                <li style="margin-bottom: 5px;">$(\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}$</li>
                <li style="margin-bottom: 5px;">$(\\arctan x)' = \\frac{1}{1+x^2}$</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "导数的运算法则",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>线性运算法则</strong>：
              <div class="formula-container">
                $[af(x) + bg(x)]' = af'(x) + bg'(x)$
              </div>
              其中 $a, b$ 为常数
            </li>
            <li style="margin-bottom: 10px;"><strong>乘积法则</strong>：
              <div class="formula-container">
                $[f(x)g(x)]' = f'(x)g(x) + f(x)g'(x)$
              </div>
            </li>
            <li style="margin-bottom: 10px;"><strong>商的法则</strong>：
              <div class="formula-container">
                $\\left[\\frac{f(x)}{g(x)}\\right]' = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
              </div>
              其中 $g(x) \\neq 0$
            </li>
            <li style="margin-bottom: 10px;"><strong>复合函数求导法则（链式法则）</strong>：
              <div class="formula-container">
                $[f(g(x))]' = f'(g(x)) \\cdot g'(x)$
              </div>
              或记作：$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$
            </li>
            <li style="margin-bottom: 10px;"><strong>反函数求导法则</strong>：
              <div class="formula-container">
                $\\frac{dx}{dy} = \\frac{1}{\\frac{dy}{dx}}$
              </div>
              前提是 $\\frac{dy}{dx} \\neq 0$
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "高阶导数",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>高阶导数</strong>：函数 $f(x)$ 的导数 $f'(x)$ 的导数称为 $f(x)$ 的二阶导数，记作 $f''(x)$ 或 $\\frac{d^2y}{dx^2}$</li>
            <li style="margin-bottom: 10px;"><strong>常见函数的高阶导数</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">$(x^n)^{(k)} = n(n-1)\\cdots(n-k+1)x^{n-k}$</li>
                <li style="margin-bottom: 5px;">$(e^x)^{(n)} = e^x$</li>
                <li style="margin-bottom: 5px;">$(\\sin x)^{(n)} = \\sin(x + \\frac{n\\pi}{2})$</li>
                <li style="margin-bottom: 5px;">$(\\cos x)^{(n)} = \\cos(x + \\frac{n\\pi}{2})$</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "导数的应用",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>函数的单调性</strong>：在区间 $I$ 上，若 $f'(x) > 0$，则 $f(x)$ 在 $I$ 上单调递增；若 $f'(x) < 0$，则 $f(x)$ 在 $I$ 上单调递减</li>
            <li style="margin-bottom: 10px;"><strong>函数的极值</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><strong>必要条件</strong>：若 $f(x)$ 在 $x_0$ 处取得极值，且 $f'(x_0)$ 存在，则 $f'(x_0) = 0$</li>
                <li style="margin-bottom: 5px;"><strong>第一充分条件</strong>：若 $f'(x_0) = 0$，且在 $x_0$ 左侧 $f'(x) > 0$，右侧 $f'(x) < 0$，则 $x_0$ 为极大值点</li>
                <li style="margin-bottom: 5px;"><strong>第二充分条件</strong>：若 $f'(x_0) = 0$，$f''(x_0) \\neq 0$，则当 $f''(x_0) < 0$ 时为极大值，$f''(x_0) > 0$ 时为极小值</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>函数的凹凸性</strong>：在区间 $I$ 上，若 $f''(x) > 0$，则曲线凹向上（凸函数）；若 $f''(x) < 0$，则曲线凹向下（凹函数）</li>
            <li style="margin-bottom: 10px;"><strong>拐点</strong>：使 $f''(x) = 0$ 或 $f''(x)$ 不存在的点可能是拐点，需要检验 $f''(x)$ 在该点两侧的符号是否改变</li>
            <li style="margin-bottom: 10px;"><strong>渐近线</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><strong>垂直渐近线</strong>：$x = a$，当 $\\lim\\limits_{x \\to a} f(x) = \\infty$</li>
                <li style="margin-bottom: 5px;"><strong>水平渐近线</strong>：$y = b$，当 $\\lim\\limits_{x \\to \\infty} f(x) = b$</li>
                <li style="margin-bottom: 5px;"><strong>斜渐近线</strong>：$y = kx + b$，当 $k = \\lim\\limits_{x \\to \\infty} \\frac{f(x)}{x}$，$b = \\lim\\limits_{x \\to \\infty} [f(x) - kx]$</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    }
  ]
};

window.exerciseData.exercises = [
{
      id: 1,
      type: "选择题",
      title: "可微与可导的关系",
      question: "（黑龙江2022年）函数在某点处可微是其在该点处可导的（）\nA. 必要不充分条件\nB. 充分不充分条件\nC. 充分必要条件\nD. 既非充分也非必要条件",
      essence: "这道题考查一元函数可微与可导的关系。对于一元函数，可微与可导是等价的，即充分必要条件。需要理解可微和可导的定义及其等价性。",
      explanation: `本题考查可微与可导的关系

定理：一元函数可微与可导的关系

对于一元函数：
- 可导的定义：$\\lim\\limits_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$ 存在
- 可微的定义：$\\Delta y = A\\Delta x + o(\\Delta x)$，其中 A 是常数

证明等价性：
1. 若函数在某点可导，设导数为 $f'(x_0)$，则：
   $$\\Delta y = f'(x_0)\\Delta x + o(\\Delta x)$$
   因此函数可微

2. 若函数在某点可微，即 $\\Delta y = A\\Delta x + o(\\Delta x)$，则：
   $$\\lim\\limits_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = A$$
   因此函数可导，且导数为 A

结论：一元函数可导与可微是充分必要条件`,
      answer: "C",
      difficulty: "easy",
      category: "可微与可导",
      method: "概念判断"
    },
{
      id: 2,
      type: "选择题",
      title: "函数的微分",
      question: "（山东高数三2020年）函数 $y = \\sqrt[3]{x} + \\sqrt{x}$ 的微分 $dy = $ （）\nA. $\\left(3x^2 + \\frac{\\sqrt{x}}{2}\\right)dx$ \nB. $\\left(\\frac{1}{3\\sqrt[3]{x^2}} + \\frac{1}{2\\sqrt{x}}\\right)dx$ \nC. $\\left(x^2 + \\frac{\\sqrt{x}}{2}\\right)dx$ \nD. $\\left(\\frac{1}{2\\sqrt{x}} + x^2\\right)dx$",
      essence: "这道题考查函数的微分计算。需要先求导数，然后写出微分形式 $dy = y'dx$。注意幂函数的求导公式和根式的指数表示。",
      explanation: `第一步：求导数
$$y = x^{\\frac{1}{3}} + x^{\\frac{1}{2}}$$

第二步：应用幂函数求导公式
$$y' = \\frac{1}{3}x^{-\\frac{2}{3}} + \\frac{1}{2}x^{-\\frac{1}{2}}$$

第三步：化简
$$y' = \\frac{1}{3x^{\\frac{2}{3}}} + \\frac{1}{2\\sqrt{x}}$$
$$= \\frac{1}{3\\sqrt[3]{x^2}} + \\frac{1}{2\\sqrt{x}}$$

第四步：写出微分
$$dy = y'dx = \\left(\\frac{1}{3\\sqrt[3]{x^2}} + \\frac{1}{2\\sqrt{x}}\\right)dx$$`,
      answer: "B",
      difficulty: "easy",
      category: "微分",
      method: "微分公式"
    },
{
      id: 3,
      type: "选择题",
      title: "复合函数的微分",
      question: "（黑龙江2022年）设 $f'(x) = g(x)$，则 $df(\\sin^2 x) = $ （）\nA. $2g(x)\\sin x dx$ \nB. $f(x)\\sin 2x dx$ \nC. $g(\\sin^2 x)\\sin 2x dx$ \nD. $g(\\sin 2x) dx$",
      essence: "这道题考查复合函数的微分计算。需要使用链式法则求导，然后写出微分形式。注意 $f'(x) = g(x)$ 这个条件的使用。",
      explanation: `第一步：设置复合函数
令 $u = \\sin^2 x$，则 $f(\\sin^2 x) = f(u)$

第二步：求导数
由链式法则：
$$\\frac{d}{dx}f(\\sin^2 x) = f'(\\sin^2 x) \\cdot \\frac{d}{dx}(\\sin^2 x)$$

第三步：计算内函数导数
$$\\frac{d}{dx}(\\sin^2 x) = 2\\sin x \\cos x = \\sin 2x$$

第四步：由条件 $f'(x) = g(x)$
$$f'(\\sin^2 x) = g(\\sin^2 x)$$

第五步：写出微分
$$df(\\sin^2 x) = g(\\sin^2 x) \\sin 2x dx$$`,
      answer: "C",
      difficulty: "medium",
      category: "复合函数微分",
      method: "链式法则"
    },
{
      id: 4,
      type: "选择题",
      title: "复合函数导数",
      question: "设 $f(\\sin^2 x) = \\cos^2 x + 1$，则 $f'(1) = $ （）\nA. -1 \nB. 1 \nC. -2 \nD. 2",
      essence: "这道题考查复合函数的导数计算。关键是通过换元法求出 $f(x)$ 的表达式，然后求导。",
      explanation: `<strong>理解题意</strong>
题目给出了 $f(\\sin^2 x) = \\cos^2 x + 1$，要求 $f'(1)$
这意味着我们需要先找到 $f(x)$ 是什么函数，然后求它的导数

<strong>第一步：用换元法求 $f(x)$</strong>
设 $t = \\sin^2 x$（用 $t$ 代替 $\\sin^2 x$）

因为 $\\sin^2 x + \\cos^2 x = 1$（三角恒等式）
所以 $\\cos^2 x = 1 - \\sin^2 x = 1 - t$

将这个关系代入原式：
$$f(t) = \\cos^2 x + 1 = (1-t) + 1 = 2 - t$$

所以 $f(x) = 2 - x$

<strong>第二步：对 $f(x)$ 求导</strong>
$$f(x) = 2 - x$$
$$f'(x) = 0 - 1 = -1$$

<strong>第三步：计算 $f'(1)$</strong>
因为 $f'(x) = -1$ 对所有 $x$ 都成立
所以 $f'(1) = -1$`,
      answer: "A",
      difficulty: "medium",
      category: "复合函数",
      method: "换元法"
    },
{
      id: 5,
      type: "选择题",
      title: "指数函数切线",
      question: "曲线 $y = xe^x$ 在 $x = 0$ 处的切线方程是（）\nA. $y - 2x - 1 = 0$ \nB. $y - 2x - 2 = 0$ \nC. $y - x - 2 = 0$ \nD. $y - x = 0$",
      essence: "这道题考查指数函数乘积的切线方程求解。需要先求导数得到切线斜率，然后利用点斜式方程写出切线方程。注意乘积法则的应用。",
      explanation: `第一步：求切点
当 $x = 0$ 时，$y = 0 \\cdot e^0 = 0$
切点为 $(0, 0)$

第二步：求导数
$$y' = e^x + xe^x = e^x(1 + x)$$

第三步：求切线斜率
$$k = y'|_{x=0} = e^0(1 + 0) = 1$$

第四步：写切线方程
过点 $(0, 0)$，斜率为 1
$$y - 0 = 1(x - 0)$$
$$y = x$$

即 $y - x = 0$`,
      answer: "D",
      difficulty: "easy",
      category: "切线方程",
      method: "点斜式"
    },
{
      id: 6,
      type: "选择题",
      title: "复合函数求导",
      question: "设函数 $y = \\cos^2 x$，则 $dy = $ （） $dx$\nA. $-2\\sin^2 x$ \nB. $2\\cos^2 x$ \nC. $-2\\sin x \\cos x$ \nD. $2\\sin x \\cos x$",
      essence: "这道题考查三角函数的微分计算。需要使用链式法则求导，然后写出微分形式 $dy = y'dx$。注意 $\\cos^2 x$ 是复合函数。",
      explanation: `第一步：求导数
$$y = \\cos^2 x$$

第二步：应用链式法则
$$y' = 2\\cos x \\cdot (-\\sin x)$$
$$= -2\\sin x \\cos x$$

第三步：写出微分
$$dy = -2\\sin x \\cos x dx$$`,
      answer: "C",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 7,
      type: "选择题",
      title: "导数四则运算",
      question: "$y = x\\ln x$，则 $y''' = $ （）\nA. $\\ln x$ \nB. $x$ \nC. $\\frac{1}{x^2}$ \nD. $-\\frac{1}{x^2}$",
      essence: "这道题考查导数四则运算中的乘积法则和高阶导数计算。需要逐次求导，先求一阶导数，再求二阶导数，最后求三阶导数。注意乘积法则的应用。",
      explanation: `第一步：求一阶导数
$$y' = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$$

第二步：求二阶导数
$$y'' = \\frac{1}{x}$$

第三步：求三阶导数
$$y''' = -\\frac{1}{x^2}$$`,
      answer: "D",
      difficulty: "easy",
      category: "导数四则运算",
      method: "乘积法则与高阶导数"
    },
{
      id: 8,
      type: "选择题",
      title: "复合函数求导",
      question: "函数 $f(x) = \\arcsin(2x)$ 的导数是（）\nA. $\\frac{1}{\\sqrt{1-4x^2}}$ \nB. $\\frac{2}{\\sqrt{1-4x^2}}$ \nC. $\\frac{1}{\\sqrt{1-x^2}}$ \nD. $\\frac{2}{\\sqrt{1-x^2}}$",
      essence: "这道题考查反三角函数的复合函数求导。需要使用链式法则，先对外层反三角函数求导，再对内层线性函数求导。注意复合函数中内层函数导数的系数。",
      explanation: `使用链式法则：设 $u = 2x$，则 $f(x) = \\arcsin u$

第一步：求外层函数导数
$(\\arcsin u)' = \\frac{1}{\\sqrt{1-u^2}}$

第二步：求内层函数导数
$(2x)' = 2$

第三步：应用链式法则
$f'(x) = \\frac{1}{\\sqrt{1-u^2}} \\cdot 2 = \\frac{2}{\\sqrt{1-4x^2}}$`,
      answer: "B",
      difficulty: "medium",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 9,
      type: "选择题",
      title: "复合函数求导",
      question: "函数 $f(x) = \\arccos(x^2)$ 的导数是（）\nA. $\\frac{2x}{\\sqrt{1-x^4}}$ \nB. $-\\frac{2x}{\\sqrt{1-x^4}}$ \nC. $\\frac{1}{\\sqrt{1-x^4}}$ \nD. $-\\frac{1}{\\sqrt{1-x^4}}$",
      essence: "这道题考查反余弦函数的复合函数求导。需要使用链式法则，先对外层反余弦函数求导，再对内层幂函数求导。注意反余弦函数导数的负号。",
      explanation: `使用链式法则：设 $u = x^2$，则 $f(x) = \\arccos u$

第一步：求外层函数导数
$(\\arccos u)' = -\\frac{1}{\\sqrt{1-u^2}}$

第二步：求内层函数导数
$(x^2)' = 2x$

第三步：应用链式法则
$f'(x) = -\\frac{1}{\\sqrt{1-u^2}} \\cdot 2x = -\\frac{2x}{\\sqrt{1-x^4}}$`,
      answer: "B",
      difficulty: "medium",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 10,
      type: "选择题",
      title: "复合函数求导",
      question: "函数 $f(x) = \\ln(\\sin(e^x))$ 的导数是（）\nA. $\\frac{e^x \\cos(e^x)}{\\sin(e^x)}$ \nB. $\\frac{\\cos(e^x)}{\\sin(e^x)}$ \nC. $\\frac{e^x}{\\sin(e^x)}$ \nD. $\\frac{\\cos(e^x)}{e^x \\sin(e^x)}$",
      essence: "这道题考查对数、指数、三角函数的三层复合函数求导。需要多次应用链式法则，从外到内逐层求导。注意每层函数的导数公式。",
      explanation: `使用链式法则：设 $u = \\sin(e^x)$，则 $f(x) = \\ln u$

第一步：$(\\ln u)' = \\frac{1}{u}$

第二步：设 $v = e^x$，则 $u = \\sin v$
$u' = \\cos v \\cdot v' = \\cos(e^x) \\cdot e^x = e^x \\cos(e^x)$

第三步：$f'(x) = \\frac{1}{u} \\cdot u' = \\frac{1}{\\sin(e^x)} \\cdot e^x \\cos(e^x) = \\frac{e^x \\cos(e^x)}{\\sin(e^x)}$`,
      answer: "A",
      difficulty: "hard",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 11,
      type: "填空题",
      title: "高阶导数运算",
      question: "（福建2020年）若函数 $f(x) = x + \\sin x$，则 $f''(x) = $ ____________",
      essence: "这道题考查三角函数的高阶导数计算。需要逐次求导，先求一阶导数，再求二阶导数。注意常数项的导数为0。",
      explanation: `第一步：求一阶导数
$$f'(x) = 1 + \\cos x$$

第二步：求二阶导数
$$f''(x) = -\\sin x$$`,
      answer: "$-\\sin x$",
      difficulty: "easy",
      category: "高阶导数运算",
      method: "直接求导"
    },
{
      id: 12,
      type: "填空题",
      title: "复合函数求导",
      question: "函数 $f(x) = \\arctan(3x)$ 的导数是 ______",
      essence: "这道题考查反正切函数的复合函数求导。需要使用链式法则，先对外层反正切函数求导，再对内层线性函数求导。",
      explanation: `使用链式法则：设 $u = 3x$，则 $f(x) = \\arctan u$

第一步：$(\\arctan u)' = \\frac{1}{1+u^2}$
第二步：$(3x)' = 3$
第三步：$f'(x) = \\frac{1}{1+u^2} \\cdot 3 = \\frac{3}{1+9x^2}$`,
      answer: "$\\frac{3}{1+9x^2}$",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 13,
      type: "填空题",
      title: "复合函数求导",
      question: "函数 $f(x) = \\cos(x^2)$ 的导数是 ______",
      essence: "这道题考查余弦函数的复合函数求导。需要使用链式法则，先对外层余弦函数求导，再对内层幂函数求导。注意余弦函数导数的负号。",
      explanation: `使用链式法则：设 $u = x^2$，则 $f(x) = \\cos u$

第一步：$(\\cos u)' = -\\sin u$
第二步：$(x^2)' = 2x$
第三步：$f'(x) = -\\sin u \\cdot 2x = -2x\\sin(x^2)$`,
      answer: "$-2x\\sin(x^2)$",
      difficulty: "medium",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 14,
      type: "填空题",
      title: "复合函数求导",
      question: "函数 $f(x) = \\sqrt{\\sin(2x)}$ 的导数是 ______",
      essence: "这道题考查根式与三角函数的复合函数求导。需要将根式表示为幂函数形式，然后使用链式法则逐层求导。注意定义域的限制。",
      explanation: `$\\sqrt{\\sin(2x)} = [\\sin(2x)]^{1/2}$，使用链式法则：

第一步：设 $u = \\sin(2x)$，则 $f(x) = u^{1/2}$
$(u^{1/2})' = \\frac{1}{2}u^{-1/2} = \\frac{1}{2\\sqrt{u}}$

第二步：设 $v = 2x$，则 $u = \\sin v$
$u' = \\cos v \\cdot v' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$

第三步：$f'(x) = \\frac{1}{2\\sqrt{u}} \\cdot u' = \\frac{1}{2\\sqrt{\\sin(2x)}} \\cdot 2\\cos(2x) = \\frac{\\cos(2x)}{\\sqrt{\\sin(2x)}}$`,
      answer: "$\\frac{\\cos(2x)}{\\sqrt{\\sin(2x)}}$",
      difficulty: "hard",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 15,
      type: "填空题",
      title: "复合函数求导",
      question: "函数 $f(x) = \\arcsin(\\sqrt{x})$ 的导数是 ______",
      essence: "这道题考查反三角函数与根式函数的复合函数求导。需要使用链式法则，先对外层反三角函数求导，再对内层根式函数求导。注意定义域的限制。",
      explanation: `使用链式法则：设 $u = \\sqrt{x} = x^{1/2}$，则 $f(x) = \\arcsin u$

第一步：$(\\arcsin u)' = \\frac{1}{\\sqrt{1-u^2}} = \\frac{1}{\\sqrt{1-x}}$

第二步：$(x^{1/2})' = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$

第三步：$f'(x) = \\frac{1}{\\sqrt{1-x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{1}{2\\sqrt{x}\\sqrt{1-x}}$`,
      answer: "$\\frac{1}{2\\sqrt{x}\\sqrt{1-x}}$",
      difficulty: "hard",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 16,
      type: "计算题",
      title: "复合函数求导",
      question: "求函数 $y = \\ln(3-2x)$ 的导数",
      essence: "这道题考查对数函数的复合函数求导。需要使用链式法则，先对外层对数函数求导，再对内层线性函数求导。",
      explanation: `第一步：设中间变量
设 $u = 3-2x$，则 $y = \\ln u$

第二步：应用链式法则
$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$

第三步：分别求导
$\\frac{dy}{du} = \\frac{1}{u}$
$\\frac{du}{dx} = -2$

第四步：代入计算
$\\frac{dy}{dx} = \\frac{1}{u} \\cdot (-2) = \\frac{-2}{3-2x}$`,
      answer: "$y' = \\frac{-2}{3-2x}$",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 17,
      type: "计算题",
      title: "复合函数求导",
      question: "求函数 $y = \\arcsin\\sqrt{1-4x^2}$ 的导数",
      essence: "这道题考查反三角函数的复合函数求导。需要使用链式法则，先对外层反三角函数求导，再对内层根式函数求导。注意定义域的限制。",
      explanation: `第一步：设中间变量
设 $u = \\sqrt{1-4x^2}$，则 $y = \\arcsin u$

第二步：求 $\\frac{du}{dx}$
$u = (1-4x^2)^{1/2}$
$\\frac{du}{dx} = \\frac{1}{2}(1-4x^2)^{-1/2} \\cdot (-8x) = \\frac{-4x}{\\sqrt{1-4x^2}}$

第三步：求 $\\frac{dy}{du}$
$\\frac{dy}{du} = \\frac{1}{\\sqrt{1-u^2}}$

第四步：计算 $1-u^2$
$1-u^2 = 1-(1-4x^2) = 4x^2$

第五步：应用链式法则
当 $x > 0$ 时：
$y' = \\frac{1}{\\sqrt{4x^2}} \\cdot \\frac{-4x}{\\sqrt{1-4x^2}} = \\frac{1}{2x} \\cdot \\frac{-4x}{\\sqrt{1-4x^2}} = \\frac{-2}{\\sqrt{1-4x^2}}$`,
      answer: "$y' = \\frac{-2}{\\sqrt{1-4x^2}}$ （当$x > 0$）",
      difficulty: "hard",
      category: "反三角函数",
      method: "链式法则"
    },
{
      id: 18,
      type: "计算题",
      title: "微分计算",
      question: "设函数 $y = x^4\\sin x$，求 $dy$",
      essence: "这道题考查函数的微分计算。需要先使用乘积法则求导数，然后写出微分形式 $dy = y'dx$。注意乘积法则的应用和因式分解。",
      explanation: `第一步：求导数
应用乘积法则：
$y' = (x^4)'\\sin x + x^4(\\sin x)'$

第二步：计算各部分
$(x^4)' = 4x^3$
$(\\sin x)' = \\cos x$

第三步：代入
$y' = 4x^3\\sin x + x^4\\cos x$

第四步：提取公因子
$y' = x^3(4\\sin x + x\\cos x)$

第五步：写出微分
$dy = y'dx = x^3(4\\sin x + x\\cos x)dx$`,
      answer: "$dy = x^3(4\\sin x + x\\cos x)dx$",
      difficulty: "easy",
      category: "微分",
      method: "微分公式"
    },
{
      id: 19,
      type: "计算题",
      title: "复合函数求导",
      question: "设函数 $y = \\sin 2x$，求 $\\frac{dy}{dx}$",
      essence: "这道题考查复合函数的链式法则。$y = \\sin 2x$ 是由外层函数 $y = \\sin u$ 和内层函数 $u = 2x$ 复合而成。",
      explanation: `<strong>第一步：识别复合函数</strong>
  $y = \\sin 2x$ 是由 $y = \\sin u$ 和 $u = 2x$ 复合而成
  
  <strong>第二步：应用链式法则</strong>
  $$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$
  
  <strong>第三步：分别求导</strong>
  $$\\frac{dy}{du} = (\\sin u)' = \\cos u$$
  $$\\frac{du}{dx} = (2x)' = 2$$
  
  <strong>第四步：代入计算</strong>
  $$\\frac{dy}{dx} = \\cos u \\cdot 2 = 2\\cos 2x$$`,
      answer: "$2\\cos 2x$",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 20,
      type: "计算题",
      title: "复合函数求导",
      question: "设函数 $y = \\sqrt{x^2 + 1}$，求 $\\frac{dy}{dx}$",
      essence: "这道题考查复合函数的链式法则。根式函数求导需要将其转化为幂函数形式，然后应用复合函数求导法则。",
      explanation: `<strong>第一步：识别复合函数</strong>
  $y = \\sqrt{x^2 + 1}$ 是由 $y = \\sqrt{u}$ 和 $u = x^2 + 1$ 复合而成
  
  <strong>第二步：应用链式法则</strong>
  $$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$
  
  <strong>第三步：分别求导</strong>
  $$\\frac{dy}{du} = (\\sqrt{u})' = (u^{\\frac{1}{2}})' = \\frac{1}{2\\sqrt{u}}$$
  $$\\frac{du}{dx} = (x^2 + 1)' = 2x$$
  
  <strong>第四步：代入计算</strong>
  $$\\frac{dy}{dx} = \\frac{1}{2\\sqrt{u}} \\cdot 2x = \\frac{x}{\\sqrt{x^2 + 1}}$$
  
  <strong>说明：</strong>熟练后可不必写出中间变量，直接求导`,
      answer: "$\\frac{x}{\\sqrt{x^2 + 1}}$",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 21,
      type: "计算题",
      title: "复合函数求导",
      question: "设函数 $y = \\cos(3x+1)$，求 $y'$",
      essence: "这道题考查复合函数求导的简化写法。熟练掌握链式法则后，可以不写出中间变量，直接求导。",
      explanation: `<strong>直接应用链式法则：</strong>
  $$y' = [\\cos(3x+1)]' = -\\sin(3x+1) \\cdot (3x+1)' = -3\\sin(3x+1)$$`,
      answer: "$-3\\sin(3x+1)$",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 22,
      type: "计算题",
      title: "复合函数求导",
      question: "设函数 $y = \\ln(x^2 - 1)$，求 $y'$",
      essence: "这道题考查对数复合函数的求导。对数函数 $\\ln u$ 的导数是 $\\frac{1}{u}$，再乘以内层函数的导数。",
      explanation: `<strong>应用链式法则：</strong>
  $$y' = [\\ln(x^2 - 1)]' = \\frac{1}{x^2 - 1} \\cdot (x^2 - 1)' = \\frac{1}{x^2 - 1} \\cdot 2x = \\frac{2x}{x^2 - 1}$$`,
      answer: "$\\frac{2x}{x^2 - 1}$",
      difficulty: "easy",
      category: "复合函数求导",
      method: "链式法则"
    },
{
      id: 23,
      type: "计算题",
      title: "导数四则运算",
      question: "设函数 $y = x\\sqrt{1-x}$，求 $y'$",
      essence: "这道题综合考查乘积法则和复合函数求导。需要先用乘积法则，再对根式部分用链式法则。",
      explanation: `<strong>第一步：应用乘积法则</strong>
  $$y' = (x\\sqrt{1-x})' = x' \\cdot \\sqrt{1-x} + x \\cdot (\\sqrt{1-x})'$$
  
  <strong>第二步：计算各部分</strong>
  $$x' = 1$$
  $$(\\sqrt{1-x})' = \\frac{1}{2\\sqrt{1-x}} \\cdot (-1) = -\\frac{1}{2\\sqrt{1-x}}$$
  
  <strong>第三步：代入</strong>
  $$y' = \\sqrt{1-x} + x \\cdot \\left(-\\frac{1}{2\\sqrt{1-x}}\\right) = \\sqrt{1-x} - \\frac{x}{2\\sqrt{1-x}}$$
  
  <strong>第四步：通分化简</strong>
  $$= \\frac{2(1-x) - x}{2\\sqrt{1-x}} = \\frac{2-3x}{2\\sqrt{1-x}}$$`,
      answer: "$\\frac{2-3x}{2\\sqrt{1-x}}$",
      difficulty: "medium",
      category: "导数四则运算",
      method: "乘积法则与链式法则"
    },
{
      id: 24,
      type: "计算题",
      title: "高阶导数运算",
      question: "求函数 $y = 2x^4 - 3x^5 + \\sqrt{2}x^3 + 8$ 的二阶导数",
      essence: "二阶导数：对一阶导数再求导",
      explanation: `第一步：求一阶导数
$$y' = 8x^3 - 15x^4 + 3\\sqrt{2}x^2$$

第二步：求二阶导数
$$y'' = 24x^2 - 60x^3 + 6\\sqrt{2}x$$`,
      answer: "$y'' = 24x^2 - 60x^3 + 6\\sqrt{2}x$",
      difficulty: "easy",
      category: "高阶导数运算",
      method: "逐阶求导法"
    },
{
      id: 25,
      type: "计算题",
      title: "特定点的导数值",
      question: "求下列函数在指定点的导数：(1) $y = \\cos x$，$x = \\frac{\\pi}{2}$；(2) $y = 2^x$，$x = 1$",
      essence: "先求导函数，再代入点的坐标",
      explanation: `(1) $y' = (\\cos x)' = -\\sin x$
$$y'\\big|_{x=\\frac{\\pi}{2}} = -\\sin\\frac{\\pi}{2} = -1$$

(2) $y' = (2^x)' = 2^x \\ln 2$
$$y'|_{x=1} = 2^1 \\ln 2 = 2\\ln 2$$`,
      answer: "(1) $-1$；(2) $2\\ln 2$",
      difficulty: "easy",
      category: "导数计算",
      method: "基本求导公式"
    },
{
      id: 26,
      type: "应用题",
      title: "切线和法线方程",
      question: "求曲线 $y = x^3$ 在点 (2,8) 处的切线斜率，并写出切线方程和法线方程",
      essence: "导数的几何意义：切线斜率",
      explanation: `切线斜率：$k = y'|_{x=2} = 3x^2|_{x=2} = 12$

切线方程（点斜式）：$y - 8 = 12(x - 2)$
即：$12x - y - 16 = 0$

法线斜率：$k_{\\perp} = -\\frac{1}{12}$
法线方程：$y - 8 = -\\frac{1}{12}(x - 2)$
即：$x + 12y - 98 = 0$`,
      answer: "切线斜率：12；切线：$12x-y-16=0$；法线：$x+12y-98=0$",
      difficulty: "medium",
      category: "导数几何意义",
      method: "点斜式"
    },
{
      id: 27,
      type: "应用题",
      title: "正弦曲线的切线斜率",
      question: "求曲线 $y = \\sin x$ 在点 $\\left(\\frac{\\pi}{6}, \\frac{1}{2}\\right)$ 处的切线斜率",
      essence: "三角函数求导及切线斜率",
      explanation: `$y' = (\\sin x)' = \\cos x$

切线斜率 $k = y'|_{x=\\frac{\\pi}{6}} = \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$`,
      answer: "$\\frac{\\sqrt{3}}{2}$",
      difficulty: "easy",
      category: "导数几何意义",
      method: "基本求导公式"
    },
{
      id: 28,
      type: "应用题",
      title: "双曲线上的切线",
      question: "求双曲线 $y = \\frac{1}{x}$ 上哪一点的切线与直线 $y = -x + 3$ 平行",
      essence: "切线斜率相等",
      explanation: `直线 $y=-x+3$ 的斜率为 $-1$

$y' = \\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$

令 $-\\frac{1}{x^2} = -1$，得 $x^2 = 1$，即 $x = \\pm 1$

当 $x=1$ 时，$y=1$；当 $x=-1$ 时，$y=-1$

所求点为 $(1,1)$ 或 $(-1,-1)$`,
      answer: "$(1,1)$ 或 $(-1,-1)$",
      difficulty: "medium",
      category: "导数几何意义",
      method: "切线斜率相等"
    },
{
      id: 29,
      type: "计算题",
      title: "导数四则运算",
      question: "求下列函数的导数：(1) $y = 3x^2 - 2x + 1$；(2) $y = \\frac{2}{x} + 3\\cos x - e^x$；(3) $y = \\frac{x - 1}{x + 1}$",
      essence: "和差积商的导数运算法则",
      explanation: `(1) $y' = 6x - 2$

(2) $y' = 2(x^{-1})' + 3(\\cos x)' - (e^x)' = -\\frac{2}{x^2} - 3\\sin x - e^x$

(3) $y' = \\frac{1 \\cdot (x+1) - (x-1) \\cdot 1}{(x+1)^2} = \\frac{2}{(x+1)^2}$`,
      answer: "(1) $6x-2$；(2) $-\\frac{2}{x^2}-3\\sin x-e^x$；(3) $\\frac{2}{(x+1)^2}$",
      difficulty: "medium",
      category: "导数四则运算",
      method: "四则运算法则"
    },
{
      id: 30,
      type: "计算题",
      title: "导数四则运算",
      question: "设函数 $y = \\tan x$，求 $y'$",
      essence: "利用商法则推导正切函数导数",
      explanation: `$y' = (\\tan x)' = \\left(\\frac{\\sin x}{\\cos x}\\right)'$

$= \\frac{(\\sin x)'\\cos x - (\\cos x)'\\sin x}{\\cos^2 x}$

$= \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$

其他三角函数导数：
$(\\cot x)' = -\\csc^2 x$
$(\\sec x)' = \\sec x \\tan x$
$(\\csc x)' = -\\csc x \\cot x$`,
      answer: "$(\\tan x)' = \\sec^2 x$",
      difficulty: "medium",
      category: "导数四则运算",
      method: "商法则"
    },
{
      id: 31,
      type: "计算题",
      title: "导数四则运算",
      question: "设函数 $y = x \\tan x - 2 \\sec x$，求 $y'$",
      essence: "积法则与三角函数导数",
      explanation: `$y' = (x \\tan x)' - 2(\\sec x)'$

$= x'\\tan x + x(\\tan x)' - 2\\sec x \\tan x$

$= \\tan x + x\\sec^2 x - 2\\sec x \\tan x$`,
      answer: "$\\tan x + x\\sec^2 x - 2\\sec x \\tan x$",
      difficulty: "medium",
      category: "导数四则运算",
      method: "积法则"
    },
{
      id: 32,
      type: "计算题",
      title: "导数四则运算",
      question: "求下列函数的导数：(1) $y = x^5 + 2\\sqrt{x} - \\sin\\frac{1}{\\pi}$；(2) $y = 2x^3 - 5x^2 + 7x - 9$；(3) $y = 2^x - \\frac{1}{x} + 2^{10}$；(4) $y = \\sqrt{x\\sqrt{x}}$；(5) $y = (e^x + 1) \\tan x$；(6) $y = \\frac{\\sin x}{x}$；(7) $y = \\frac{x}{x^2 + 1}$",
      essence: "综合运用求导公式和法则",
      explanation: `(1) $y' = 5x^4 + x^{-\\frac{1}{2}} = 5x^4 + \\frac{1}{\\sqrt{x}}$（常数的导数为0）

(2) $y' = 6x^2 - 10x + 7$

(3) $y' = 2^x\\ln 2 + \\frac{1}{x^2}$（常数的导数为0）

(4) $y = x^{\\frac{3}{4}}$，$y' = \\frac{3}{4}x^{-\\frac{1}{4}}$

(5) $y' = e^x\\tan x + (e^x+1)\\sec^2 x$

(6) $y' = \\frac{x\\cos x - \\sin x}{x^2}$

(7) $y' = \\frac{1-x^2}{(x^2+1)^2}$`,
      answer: "见解析",
      difficulty: "medium",
      category: "导数四则运算",
      method: "综合运算"
    },
{
      id: 33,
      type: "计算题",
      title: "高阶导数运算",
      question: "设函数 $y = x^4 + x^3 - x^2 + 1$，求 $y''$",
      essence: "逐次求导",
      explanation: `$y' = 4x^3 + 3x^2 - 2x$

$y'' = 12x^2 + 6x - 2$`,
      answer: "$y'' = 12x^2 + 6x - 2$",
      difficulty: "easy",
      category: "高阶导数运算",
      method: "逐次求导"
    },
{
      id: 34,
      type: "计算题",
      title: "高阶导数运算",
      question: "设函数 $y = \\sin^2 x$，求 $y''$",
      essence: "复合函数求导与二倍角公式",
      explanation: `$y' = 2\\sin x \\cos x = \\sin 2x$

$y'' = (\\sin 2x)' = 2\\cos 2x$`,
      answer: "$y'' = 2\\cos 2x$",
      difficulty: "medium",
      category: "高阶导数运算",
      method: "链式法则"
    }
];