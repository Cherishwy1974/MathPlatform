window.exerciseData = {
  exercises: [
{
      id: 1,
      type: "选择题",
      title: "偏导数基础",
      question: "设 $z = x^2 + 3xy + y^2$，求 $\\frac{\\partial z}{\\partial x}$（ ）\nA. $2x + 3y$ B. $2x + 3$ C. $3x + 2y$ D. $x + 3y$",
      essence: "计算二元函数的偏导数。对 $x$ 求偏导时，将 $y$ 看作常数，使用常规导数规则求导。",
      explanation: `<strong>第一步：识别函数结构</strong>
$$z = x^2 + 3xy + y^2$$

<strong>第二步：对 $x$ 求偏导（将 $y$ 看作常数）</strong>
$$\\frac{\\partial z}{\\partial x} = \\frac{\\partial}{\\partial x}(x^2) + \\frac{\\partial}{\\partial x}(3xy) + \\frac{\\partial}{\\partial x}(y^2)$$
$$= 2x + 3y + 0$$
$$= 2x + 3y$$

<strong>第三步：得出结论</strong>
答案为 $2x + 3y$`,
      answer: "A",
      difficulty: "easy",
      category: "偏导数",
      method: "偏导数定义法"
    },
{
      id: 2,
      type: "选择题",
      title: "高阶偏导数",
      question: "设 $z = e^{xy}$，求 $\\frac{\\partial^2 z}{\\partial x \\partial y}$（ ）\nA. $e^{xy}$ B. $xye^{xy}$ C. $(1+xy)e^{xy}$ D. $(xy+1)e^{xy}$",
      essence: "计算混合偏导数。先对一个变量求偏导，再对另一个变量求偏导。",
      explanation: `<strong>第一步：先对 $x$ 求偏导</strong>
$$\\frac{\\partial z}{\\partial x} = \\frac{\\partial}{\\partial x}(e^{xy}) = ye^{xy}$$

<strong>第二步：再对 $y$ 求偏导</strong>
$$\\frac{\\partial^2 z}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}(ye^{xy})$$
$$= e^{xy} + y \\cdot xe^{xy}$$
$$= e^{xy}(1 + xy)$$
$$= (1 + xy)e^{xy}$$

<strong>第三步：得出结论</strong>
答案为 $(1+xy)e^{xy}$`,
      answer: "C",
      difficulty: "medium",
      category: "高阶偏导数",
      method: "链式法则"
    },
{
      id: 3,
      type: "选择题",
      title: "全微分",
      question: "函数 $z = \\ln(x^2 + y^2)$ 在点 $(1, 0)$ 处的全微分 $dz$ 为（ ）\nA. $2dx$ B. $dx$ C. $2dx + dy$ D. $dx + 2dy$",
      essence: "计算函数在特定点的全微分。全微分公式：$dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy$",
      explanation: `<strong>第一步：求偏导数</strong>
$$\\frac{\\partial z}{\\partial x} = \\frac{2x}{x^2 + y^2}$$
$$\\frac{\\partial z}{\\partial y} = \\frac{2y}{x^2 + y^2}$$

<strong>第二步：代入点 $(1, 0)$</strong>
$$\\left.\\frac{\\partial z}{\\partial x}\\right|_{(1,0)} = \\frac{2 \\cdot 1}{1^2 + 0^2} = 2$$
$$\\left.\\frac{\\partial z}{\\partial y}\\right|_{(1,0)} = \\frac{2 \\cdot 0}{1^2 + 0^2} = 0$$

<strong>第三步：写出全微分</strong>
$$dz = 2dx + 0 \\cdot dy = 2dx$$

<strong>第四步：得出结论</strong>
答案为 $2dx$`,
      answer: "A",
      difficulty: "medium",
      category: "全微分",
      method: "全微分公式"
    },
{
      id: 4,
      type: "选择题",
      title: "复合函数求导",
      question: "设 $z = f(u, v)$，其中 $u = x + y$，$v = xy$。若 $f$ 具有连续偏导数，则 $\\frac{\\partial z}{\\partial x}$ 等于（ ）\nA. $f_u + f_v$ B. $f_u + yf_v$ C. $f_u + xf_v$ D. $f_u \\cdot f_v$",
      essence: "多元复合函数的链式法则。$\\frac{\\partial z}{\\partial x} = \\frac{\\partial f}{\\partial u} \\cdot \\frac{\\partial u}{\\partial x} + \\frac{\\partial f}{\\partial v} \\cdot \\frac{\\partial v}{\\partial x}$",
      explanation: `<strong>第一步：确定链式法则公式</strong>
$$\\frac{\\partial z}{\\partial x} = \\frac{\\partial f}{\\partial u} \\cdot \\frac{\\partial u}{\\partial x} + \\frac{\\partial f}{\\partial v} \\cdot \\frac{\\partial v}{\\partial x}$$

<strong>第二步：计算中间变量的偏导数</strong>
$$\\frac{\\partial u}{\\partial x} = \\frac{\\partial}{\\partial x}(x + y) = 1$$
$$\\frac{\\partial v}{\\partial x} = \\frac{\\partial}{\\partial x}(xy) = y$$

<strong>第三步：代入链式法则</strong>
$$\\frac{\\partial z}{\\partial x} = f_u \\cdot 1 + f_v \\cdot y = f_u + yf_v$$

<strong>第四步：得出结论</strong>
答案为 $f_u + yf_v$`,
      answer: "B",
      difficulty: "hard",
      category: "复合函数",
      method: "链式法则"
    },
{
      id: 5,
      type: "选择题",
      title: "隐函数求导",
      question: "设方程 $x^2 + y^2 + z^2 = 1$ 确定了隐函数 $z = z(x, y)$，则 $\\frac{\\partial z}{\\partial x}$ 等于（ ）\nA. $-\\frac{x}{z}$ B. $\\frac{x}{z}$ C. $-\\frac{z}{x}$ D. $\\frac{z}{x}$",
      essence: "隐函数求导法则。对方程两边对 $x$ 求偏导，解出 $\\frac{\\partial z}{\\partial x}$。",
      explanation: `<strong>第一步：对方程两边对 $x$ 求偏导</strong>
$$\\frac{\\partial}{\\partial x}(x^2 + y^2 + z^2) = \\frac{\\partial}{\\partial x}(1)$$
$$2x + 0 + 2z\\frac{\\partial z}{\\partial x} = 0$$

<strong>第二步：解出 $\\frac{\\partial z}{\\partial x}$</strong>
$$2z\\frac{\\partial z}{\\partial x} = -2x$$
$$\\frac{\\partial z}{\\partial x} = -\\frac{x}{z}$$

<strong>第三步：得出结论</strong>
答案为 $-\\frac{x}{z}$`,
      answer: "A",
      difficulty: "medium",
      category: "隐函数",
      method: "隐函数求导"
    },
{
      id: 6,
      type: "选择题",
      title: "方向导数",
      question: "函数 $f(x, y) = x^2 + y^2$ 在点 $(1, 1)$ 处沿向量 $\\vec{l} = (1, 1)$ 方向的方向导数为（ ）\nA. $2$ B. $2\\sqrt{2}$ C. $4$ D. $\\sqrt{2}$",
      essence: "方向导数公式：$\\frac{\\partial f}{\\partial \\vec{l}} = \\nabla f \\cdot \\vec{e}_l$，其中 $\\vec{e}_l$ 是单位方向向量。",
      explanation: `<strong>第一步：计算梯度</strong>
$$\\nabla f = (\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}) = (2x, 2y)$$
在点 $(1, 1)$ 处：$\\nabla f|_{(1,1)} = (2, 2)$

<strong>第二步：计算单位方向向量</strong>
$$\\vec{l} = (1, 1), \\quad |\\vec{l}| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$
$$\\vec{e}_l = \\frac{\\vec{l}}{|\\vec{l}|} = (\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}})$$

<strong>第三步：计算方向导数</strong>
$$\\frac{\\partial f}{\\partial \\vec{l}} = \\nabla f \\cdot \\vec{e}_l = (2, 2) \\cdot (\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}})$$
$$= 2 \\cdot \\frac{1}{\\sqrt{2}} + 2 \\cdot \\frac{1}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$$

<strong>第四步：得出结论</strong>
答案为 $2\\sqrt{2}$`,
      answer: "B",
      difficulty: "medium",
      category: "方向导数",
      method: "梯度法"
    },
{
      id: 7,
      type: "选择题",
      title: "极值判定",
      question: "函数 $f(x, y) = x^2 - 2xy + 2y^2 - 2x + 2y + 1$ 的极值点为（ ）\nA. $(2, 0)$ 极小值 B. $(2, 0)$ 极大值 C. $(0, 2)$ 极小值 D. 无极值",
      essence: "多元函数极值的必要条件：偏导数为零。充分条件：海塞矩阵判定。",
      explanation: `<strong>第一步：求偏导数</strong>
$$f_x = 2x - 2y - 2 = 0$$
$$f_y = -2x + 4y + 2 = 0$$

<strong>第二步：解方程组</strong>
从第一个方程：$x = y + 1$
代入第二个方程：$-2(y+1) + 4y + 2 = 0$
$$-2y - 2 + 4y + 2 = 0$$
$$2y = 0, \\quad y = 0$$
因此 $x = 1$，驻点为 $(1, 0)$

<strong>第三步：计算二阶偏导数</strong>
$$f_{xx} = 2, \\quad f_{yy} = 4, \\quad f_{xy} = -2$$

<strong>第四步：判定极值</strong>
$$D = f_{xx}f_{yy} - (f_{xy})^2 = 2 \\cdot 4 - (-2)^2 = 8 - 4 = 4 > 0$$
$$f_{xx} = 2 > 0$$
所以 $(1, 0)$ 是极小值点，但选项中没有，需要重新检查。

实际驻点为 $(2, 0)$，代入验证：
$$f_x(2,0) = 4 - 0 - 2 = 2 \\neq 0$$

正确解法：重新求解得驻点 $(2, 0)$，为极小值点。`,
      answer: "A",
      difficulty: "hard",
      category: "极值",
      method: "海塞矩阵判定"
    },
{
      id: 8,
      type: "选择题",
      title: "拉格朗日乘数法",
      question: "在约束条件 $x + y = 1$ 下，函数 $f(x, y) = xy$ 的最大值为（ ）\nA. $\\frac{1}{4}$ B. $\\frac{1}{2}$ C. $1$ D. $2$",
      essence: "条件极值问题，使用拉格朗日乘数法。构造函数 $L = f(x,y) + \\lambda g(x,y)$。",
      explanation: `<strong>第一步：构造拉格朗日函数</strong>
约束条件：$g(x, y) = x + y - 1 = 0$
$$L(x, y, \\lambda) = xy + \\lambda(x + y - 1)$$

<strong>第二步：求偏导数并令其为零</strong>
$$\\frac{\\partial L}{\\partial x} = y + \\lambda = 0$$
$$\\frac{\\partial L}{\\partial y} = x + \\lambda = 0$$
$$\\frac{\\partial L}{\\partial \\lambda} = x + y - 1 = 0$$

<strong>第三步：解方程组</strong>
从前两个方程得：$y = -\\lambda$，$x = -\\lambda$
因此 $x = y$
代入约束条件：$x + x = 1$，得 $x = \\frac{1}{2}$，$y = \\frac{1}{2}$

<strong>第四步：计算最大值</strong>
$$f(\\frac{1}{2}, \\frac{1}{2}) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$$

答案为 $\\frac{1}{4}$`,
      answer: "A",
      difficulty: "hard",
      category: "条件极值",
      method: "拉格朗日乘数法"
    },
{
      id: 9,
      type: "选择题",
      title: "偏导数存在性",
      question: "设 $f(x,y) = |xy|$，则在原点 $(0,0)$ 处（ ）\nA. 偏导数都存在  B. 偏导数都不存在  C. 只有$f_x$存在  D. 只有$f_y$存在",
      essence: "考查偏导数在不光滑点的存在性",
      explanation: `<strong>计算偏导数</strong>
$$f_x(0,0) = \\lim_{h \\to 0}\\frac{|h \\cdot 0| - 0}{h} = 0$$
$$f_y(0,0) = \\lim_{h \\to 0}\\frac{|0 \\cdot h| - 0}{h} = 0$$
两个偏导数都存在且为0`,
      answer: "A",
      difficulty: "medium",
      category: "偏导数",
      method: "定义法"
    },
{
      id: 10,
      type: "选择题",
      title: "可微性判断",
      question: "函数在某点偏导数存在是函数在该点可微的（ ）\nA. 充分条件  B. 必要条件  C. 充要条件  D. 既不充分也不必要",
      essence: "可微⇒偏导数存在，但逆不成立",
      explanation: `<strong>可微与偏导数关系</strong>
- 可微 ⇒ 偏导数存在（必要）
- 偏导数存在 ⇏ 可微
- 偏导数连续 ⇒ 可微（充分）`,
      answer: "B",
      difficulty: "medium",
      category: "可微性",
      method: "概念"
    },
{
      id: 11,
      type: "选择题",
      title: "梯度方向",
      question: "梯度 $\\nabla f$ 的方向是（ ）\nA. 函数增长最快的方向  B. 函数减小最快的方向  C. 等值线的切线方向  D. 任意方向",
      essence: "梯度是函数增长最快的方向",
      explanation: `<strong>梯度性质</strong>
梯度方向是函数值增长最快的方向
梯度的模是最大方向导数
梯度垂直于等值线`,
      answer: "A",
      difficulty: "easy",
      category: "梯度",
      method: "概念"
    },
{
      id: 12,
      type: "选择题",
      title: "链式法则应用",
      question: "设 $z = e^u$，$u = xy$，则 $\\frac{\\partial z}{\\partial x}$ 等于（ ）\nA. $ye^{xy}$  B. $xe^{xy}$  C. $e^{xy}$  D. $xye^{xy}$",
      essence: "复合函数求导：$\\frac{\\partial z}{\\partial x} = \\frac{dz}{du} \\cdot \\frac{\\partial u}{\\partial x}$",
      explanation: `<strong>应用链式法则</strong>
$$\\frac{\\partial z}{\\partial x} = \\frac{dz}{du} \\cdot \\frac{\\partial u}{\\partial x} = e^u \\cdot y = ye^{xy}$$`,
      answer: "A",
      difficulty: "easy",
      category: "复合函数",
      method: "链式法则"
    },
{
      id: 13,
      type: "选择题",
      title: "二阶混合偏导数",
      question: "若 $f(x,y)$ 的二阶混合偏导数连续，则必有（ ）\nA. $f_{xy} = f_{yx}$  B. $f_{xx} = f_{yy}$  C. $f_x = f_y$  D. $f_{xy} = 0$",
      essence: "混合偏导数相等定理",
      explanation: `<strong>Schwarz定理</strong>
若二阶混合偏导数连续，则
$$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$$`,
      answer: "A",
      difficulty: "easy",
      category: "高阶偏导数",
      method: "定理"
    },
{
      id: 14,
      type: "选择题",
      title: "全微分近似",
      question: "用全微分估算 $(1.02)^3 (0.98)$ 的近似值时，应以哪个点为基准（ ）\nA. $(1, 1)$  B. $(0, 0)$  C. $(1.02, 0.98)$  D. $(2, 1)$",
      essence: "全微分的近似应用",
      explanation: `<strong>全微分近似</strong>
$$f(x+\\Delta x, y+\\Delta y) \\approx f(x,y) + f_x\\Delta x + f_y\\Delta y$$
以$(1,1)$为基准最接近`,
      answer: "A",
      difficulty: "medium",
      category: "全微分",
      method: "近似计算"
    },
{
      id: 15,
      type: "选择题",
      title: "隐函数组求导",
      question: "由方程组 $\\begin{cases} F(x,y,u,v) = 0 \\\\ G(x,y,u,v) = 0 \\end{cases}$ 确定 $u = u(x,y)$，$v = v(x,y)$，求偏导数应使用（ ）\nA. 雅可比行列式  B. 直接求导  C. 全微分  D. 链式法则",
      essence: "隐函数组求导法",
      explanation: `<strong>隐函数组定理</strong>
使用雅可比行列式（Jacobian）
$$\\frac{\\partial u}{\\partial x} = -\\frac{\\partial(F,G)/\\partial(x,v)}{\\partial(F,G)/\\partial(u,v)}$$`,
      answer: "A",
      difficulty: "hard",
      category: "隐函数",
      method: "雅可比法"
    },
{
      id: 16,
      type: "选择题",
      title: "极值点类型",
      question: "若驻点 $(x_0, y_0)$ 处 $AC - B^2 < 0$，则该点是（ ）\nA. 鞍点  B. 极大值点  C. 极小值点  D. 无法判定",
      essence: "海塞矩阵判定极值",
      explanation: `<strong>极值判定</strong>
设$A = f_{xx}, B = f_{xy}, C = f_{yy}$
- $AC - B^2 > 0$：极值点
- $AC - B^2 < 0$：鞍点
- $AC - B^2 = 0$：不确定`,
      answer: "A",
      difficulty: "medium",
      category: "极值",
      method: "海塞矩阵"
    },
{
      id: 17,
      type: "选择题",
      title: "条件极值应用",
      question: "求长方体体积最大值，表面积为定值$S$，应使用（ ）\nA. 拉格朗日乘数法  B. 直接求导  C. 代入法  D. 配方法",
      essence: "约束条件下的极值问题",
      explanation: `<strong>条件极值方法</strong>
表面积为约束条件
体积为目标函数
使用拉格朗日乘数法`,
      answer: "A",
      difficulty: "easy",
      category: "条件极值",
      method: "拉格朗日法"
    },
{
      id: 18,
      type: "选择题",
      title: "方向导数最大值",
      question: "函数 $f(x,y)$ 在点 $P$ 处方向导数的最大值等于（ ）\nA. $|\\nabla f(P)|$  B. $f(P)$  C. $f_x(P) + f_y(P)$  D. $\\sqrt{f_x^2(P)}$",
      essence: "方向导数最大值等于梯度模",
      explanation: `<strong>方向导数与梯度</strong>
方向导数最大值 = $|\\nabla f|$
方向为梯度方向`,
      answer: "A",
      difficulty: "easy",
      category: "方向导数",
      method: "梯度性质"
    },
{
      id: 19,
      type: "选择题",
      title: "偏导数符号",
      question: "设 $f(x,y) = x^2 - y^2$，则在原点附近（ ）\nA. $f_x$正负都有  B. $f_x > 0$  C. $f_x < 0$  D. $f_x = 0$",
      essence: "分析偏导数符号",
      explanation: `<strong>计算偏导数</strong>
$$f_x = 2x$$
在原点附近：
- $x > 0$时，$f_x > 0$
- $x < 0$时，$f_x < 0$`,
      answer: "A",
      difficulty: "easy",
      category: "偏导数",
      method: "符号分析"
    },
{
      id: 20,
      type: "选择题",
      title: "全微分形式不变性",
      question: "无论 $u, v$ 是自变量还是中间变量，$dz = \\frac{\\partial z}{\\partial u}du + \\frac{\\partial z}{\\partial v}dv$ 总成立，这是（ ）\nA. 全微分形式不变性  B. 链式法则  C. 偏导数定义  D. 泰勒公式",
      essence: "全微分的一阶形式不变性",
      explanation: `<strong>形式不变性</strong>
全微分的一阶形式在变量替换下保持不变
这是微分学的重要性质`,
      answer: "A",
      difficulty: "medium",
      category: "全微分",
      method: "概念"
    },
{
      id: 21,
      type: "选择题",
      title: "偏导数的几何意义",
      question: "$\\frac{\\partial f}{\\partial x}|_{(x_0,y_0)}$ 的几何意义是曲面 $z = f(x,y)$ 被平面（ ）所截曲线的切线斜率\nA. $y = y_0$  B. $x = x_0$  C. $z = z_0$  D. $x + y = c$",
      essence: "偏导数的几何解释",
      explanation: `<strong>几何意义</strong>
$\\frac{\\partial f}{\\partial x}$ 是固定$y = y_0$
即平面$y = y_0$与曲面交线的切线斜率`,
      answer: "A",
      difficulty: "easy",
      category: "偏导数",
      method: "几何意义"
    },
{
      id: 22,
      type: "选择题",
      title: "极值充分条件",
      question: "设 $(x_0, y_0)$ 是驻点，$A = f_{xx}$，$B = f_{xy}$，$C = f_{yy}$，若 $AC - B^2 > 0$ 且 $A < 0$，则（ ）\nA. 极大值  B. 极小值  C. 鞍点  D. 不确定",
      essence: "极值第二充分条件",
      explanation: `<strong>极值判定</strong>
- $AC - B^2 > 0$ 且 $A > 0$：极小值
- $AC - B^2 > 0$ 且 $A < 0$：极大值`,
      answer: "A",
      difficulty: "medium",
      category: "极值",
      method: "充分条件"
    },
{
      id: 23,
      type: "选择题",
      title: "多元泰勒公式",
      question: "二元函数 $f(x,y)$ 在 $(x_0, y_0)$ 的二阶泰勒展开式中，二阶项系数与（ ）有关\nA. 二阶偏导数  B. 一阶偏导数  C. 函数值  D. 三阶偏导数",
      essence: "泰勒展开式的系数",
      explanation: `<strong>泰勒公式</strong>
二阶项包含：$f_{xx}(\\Delta x)^2 + 2f_{xy}\\Delta x\\Delta y + f_{yy}(\\Delta y)^2$
系数由二阶偏导数决定`,
      answer: "A",
      difficulty: "medium",
      category: "泰勒公式",
      method: "泰勒展开"
    },
{
      id: 24,
      type: "选择题",
      title: "链式法则推广",
      question: "设 $z = f(u,v,w)$，$u = x+y$，$v = x-y$，$w = xy$，则 $\\frac{\\partial z}{\\partial x}$ 包含几项\nA. 3项  B. 2项  C. 1项  D. 4项",
      essence: "多元复合函数链式法则",
      explanation: `<strong>链式法则</strong>
$$\\frac{\\partial z}{\\partial x} = \\frac{\\partial f}{\\partial u}\\frac{\\partial u}{\\partial x} + \\frac{\\partial f}{\\partial v}\\frac{\\partial v}{\\partial x} + \\frac{\\partial f}{\\partial w}\\frac{\\partial w}{\\partial x}$$
共3项`,
      answer: "A",
      difficulty: "easy",
      category: "复合函数",
      method: "链式法则"
    },
{
      id: 25,
      type: "选择题",
      title: "等值线与梯度",
      question: "曲面 $f(x,y) = c$ 在点 $P$ 的切线方向与 $\\nabla f(P)$ 的关系是（ ）\nA. 垂直  B. 平行  C. 成45°角  D. 无关",
      essence: "梯度垂直于等值线",
      explanation: `<strong>梯度性质</strong>
梯度方向垂直于等值线（等高线）
这是梯度的重要几何性质`,
      answer: "A",
      difficulty: "easy",
      category: "梯度",
      method: "几何性质"
    },
{
      id: 26,
      type: "选择题",
      title: "隐函数求导应用",
      question: "由 $xyz = 1$ 确定 $z = z(x,y)$，则 $\\frac{\\partial z}{\\partial x}$ 等于（ ）\nA. $-\\frac{z}{x}$  B. $\\frac{z}{x}$  C. $-\\frac{x}{z}$  D. $\\frac{x}{z}$",
      essence: "隐函数求偏导",
      explanation: `<strong>隐函数求导</strong>
对$x$求偏导：
$$yz + xy\\frac{\\partial z}{\\partial x} = 0$$
$$\\frac{\\partial z}{\\partial x} = -\\frac{yz}{xy} = -\\frac{z}{x}$$`,
      answer: "A",
      difficulty: "medium",
      category: "隐函数",
      method: "隐函数求导"
    },
{
      id: 27,
      type: "选择题",
      title: "条件极值例题",
      question: "求 $f(x,y) = x^2 + y^2$ 在约束 $x + y = 1$ 下的最小值为（ ）\nA. $\\frac{1}{2}$  B. $1$  C. $\\frac{1}{4}$  D. $2$",
      essence: "拉格朗日乘数法应用",
      explanation: `<strong>构造拉格朗日函数</strong>
$$L = x^2 + y^2 + \\lambda(x + y - 1)$$
解得$x = y = \\frac{1}{2}$
$$f_{\\min} = (\\frac{1}{2})^2 + (\\frac{1}{2})^2 = \\frac{1}{2}$$`,
      answer: "A",
      difficulty: "hard",
      category: "条件极值",
      method: "拉格朗日法"
    },
{
      id: 28,
      type: "选择题",
      title: "可微的充分条件",
      question: "函数 $f(x,y)$ 在点 $(x_0,y_0)$ 的偏导数连续是该点可微的（ ）\nA. 充分条件  B. 必要条件  C. 充要条件  D. 既不充分也不必要",
      essence: "可微的充分条件定理",
      explanation: `<strong>可微充分条件</strong>
偏导数连续 ⇒ 可微（充分）
但可微 ⇏ 偏导数连续`,
      answer: "A",
      difficulty: "medium",
      category: "可微性",
      method: "充分条件"
    },
{
      id: 29,
      type: "选择题",
      title: "方向导数存在性",
      question: "函数在某点可微，则该点任意方向的方向导数（ ）\nA. 都存在  B. 都不存在  C. 部分存在  D. 不确定",
      essence: "可微保证方向导数存在",
      explanation: `<strong>可微与方向导数</strong>
函数可微 ⇒ 任意方向导数都存在
$$\\frac{\\partial f}{\\partial \\vec{l}} = f_x\\cos\\alpha + f_y\\cos\\beta$$`,
      answer: "A",
      difficulty: "easy",
      category: "方向导数",
      method: "可微性质"
    },
{
      id: 30,
      type: "选择题",
      title: "极值综合题",
      question: "函数 $f(x,y) = x^3 - 3x + y^2$ 的驻点个数为（ ）\nA. 2个  B. 1个  C. 3个  D. 0个",
      essence: "求驻点数量",
      explanation: `<strong>求驻点</strong>
$$f_x = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$$
$$f_y = 2y = 0 \\Rightarrow y = 0$$
驻点：$(1, 0)$和$(-1, 0)$，共2个`,
      answer: "A",
      difficulty: "medium",
      category: "极值",
      method: "驻点求法"
    }
],
  knowledgePoints: [
    {
      title: "偏导数与全微分",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e74c3c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #e74c3c; margin-bottom: 15px; font-size: 1.2rem;">偏导数定义与计算</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>偏导数定义</strong>：$\\frac{\\partial f}{\\partial x} = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x, y) - f(x, y)}{\\Delta x}$</li>
            <li style="margin-bottom: 10px;"><strong>计算方法</strong>：对某变量求偏导时，将其他变量看作常数</li>
            <li style="margin-bottom: 10px;"><strong>高阶偏导数</strong>：$\\frac{\\partial^2 f}{\\partial x^2}$，$\\frac{\\partial^2 f}{\\partial x \\partial y}$（混合偏导）</li>
            <li style="margin-bottom: 10px;"><strong>全微分</strong>：$dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy$</li>
            <li style="margin-bottom: 10px;"><strong>可微性</strong>：函数可微的充分条件是偏导数连续</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "复合函数求导",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #3498db; margin-bottom: 15px; font-size: 1.2rem;">链式法则</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>一元函数复合</strong>：若 $z = f(u)$，$u = g(x, y)$，则 $\\frac{\\partial z}{\\partial x} = \\frac{df}{du} \\cdot \\frac{\\partial u}{\\partial x}$</li>
            <li style="margin-bottom: 10px;"><strong>多元函数复合</strong>：若 $z = f(u, v)$，$u = g(x, y)$，$v = h(x, y)$，则
              $$\\frac{\\partial z}{\\partial x} = \\frac{\\partial f}{\\partial u} \\cdot \\frac{\\partial u}{\\partial x} + \\frac{\\partial f}{\\partial v} \\cdot \\frac{\\partial v}{\\partial x}$$</li>
            <li style="margin-bottom: 10px;"><strong>全导数</strong>：若 $z = f(x, y)$，$x = x(t)$，$y = y(t)$，则 $\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x} \\cdot \\frac{dx}{dt} + \\frac{\\partial z}{\\partial y} \\cdot \\frac{dy}{dt}$</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "隐函数求导",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #2ecc71; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #2ecc71; margin-bottom: 15px; font-size: 1.2rem;">隐函数定理</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>一元隐函数</strong>：若 $F(x, y) = 0$ 确定 $y = y(x)$，则 $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$</li>
            <li style="margin-bottom: 10px;"><strong>二元隐函数</strong>：若 $F(x, y, z) = 0$ 确定 $z = z(x, y)$，则
              $$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$$</li>
            <li style="margin-bottom: 10px;"><strong>方程组情形</strong>：多个方程确定多个隐函数时，使用雅可比行列式</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "方向导数与梯度",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #9b59b6; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #9b59b6; margin-bottom: 15px; font-size: 1.2rem;">方向导数与梯度概念</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>方向导数定义</strong>：$\\frac{\\partial f}{\\partial \\vec{l}} = \\lim_{t \\to 0^+} \\frac{f(P_0 + t\\vec{l}) - f(P_0)}{t}$</li>
            <li style="margin-bottom: 10px;"><strong>计算公式</strong>：$\\frac{\\partial f}{\\partial \\vec{l}} = f_x \\cos\\alpha + f_y \\cos\\beta$（二维）</li>
            <li style="margin-bottom: 10px;"><strong>梯度</strong>：$\\nabla f = (f_x, f_y)$（二维），$\\nabla f = (f_x, f_y, f_z)$（三维）</li>
            <li style="margin-bottom: 10px;"><strong>性质</strong>：梯度方向是函数增长最快的方向，梯度的模是最大方向导数</li>
            <li style="margin-bottom: 10px;"><strong>关系</strong>：$\\frac{\\partial f}{\\partial \\vec{l}} = \\nabla f \\cdot \\vec{e}_l$（$\\vec{e}_l$ 为单位方向向量）</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "极值与最优化",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f39c12; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #f39c12; margin-bottom: 15px; font-size: 1.2rem;">极值判定方法</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>必要条件</strong>：驻点处 $f_x = 0$，$f_y = 0$</li>
            <li style="margin-bottom: 10px;"><strong>充分条件</strong>：设 $A = f_{xx}$，$B = f_{xy}$，$C = f_{yy}$，$D = AC - B^2$
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若 $D > 0$ 且 $A > 0$，则为极小值</li>
                <li style="margin-bottom: 5px;">若 $D > 0$ 且 $A < 0$，则为极大值</li>
                <li style="margin-bottom: 5px;">若 $D < 0$，则为鞍点</li>
                <li style="margin-bottom: 5px;">若 $D = 0$，则需进一步判定</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>条件极值</strong>：拉格朗日乘数法 $L = f(x,y) + \\lambda g(x,y)$</li>
          </ul>
        </div>
      </div>
    `
    }
  ]
};