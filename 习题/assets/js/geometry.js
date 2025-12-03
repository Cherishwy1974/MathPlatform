window.exerciseData = {
    exercises: [
{
            id: 1,
            type: "选择题",
            title: "向量数量积",
            question: "设向量 $\\vec{a} = (1, 0, 1)$，$\\vec{b} = (0, 1, 1)$，则 $\\vec{a} \\cdot \\vec{b}$ 等于（ ）\nA. 0 B. 1 C. 2 D. $\\sqrt{2}$",
            essence: "这道题考查向量数量积（点积）的坐标运算。$\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2$。",
            explanation: `<strong>第一步：代入坐标公式</strong>
$\\vec{a} = (1, 0, 1)$，$\\vec{b} = (0, 1, 1)$
$\\vec{a} \\cdot \\vec{b} = 1 \\times 0 + 0 \\times 1 + 1 \\times 1$

<strong>第二步：计算</strong>
$= 0 + 0 + 1 = 1$

<strong>第三步：得出结论</strong>
答案为 B`,
            answer: "B",
            difficulty: "easy",
            category: "向量代数",
            method: "坐标运算"
        },
{
            id: 2,
            type: "选择题",
            title: "空间直线方程",
            question: "过点 $(2, -1, 3)$ 且平行于向量 $\\vec{s} = (1, 2, -1)$ 的直线方程为（ ）\nA. $\\frac{x-2}{1} = \\frac{y+1}{2} = \\frac{z-3}{-1}$ B. $\\frac{x+2}{1} = \\frac{y-1}{2} = \\frac{z+3}{-1}$ C. $\\frac{x-2}{2} = \\frac{y+1}{1} = \\frac{z-3}{-1}$ D. $\\frac{x-1}{2} = \\frac{y+1}{1} = \\frac{z-3}{-1}$",
            essence: "空间直线的点向式方程：$\\frac{x-x_0}{l} = \\frac{y-y_0}{m} = \\frac{z-z_0}{n}$",
            explanation: `<strong>代入点向式方程</strong>
过点$(2, -1, 3)$，方向向量$(1, 2, -1)$
$$\\frac{x-2}{1} = \\frac{y-(-1)}{2} = \\frac{z-3}{-1}$$
$$\\frac{x-2}{1} = \\frac{y+1}{2} = \\frac{z-3}{-1}$$`,
            answer: "A",
            difficulty: "easy",
            category: "空间直线",
            method: "点向式方程"
        },
{
            id: 3,
            type: "选择题",
            title: "空间平面方程",
            question: "过点 $(1, 2, -1)$ 且法向量为 $\\vec{n} = (2, -1, 3)$ 的平面方程为（ ）\nA. $2x - y + 3z + 3 = 0$ B. $2x - y + 3z - 3 = 0$ C. $2x + y + 3z + 3 = 0$ D. $2x - y - 3z - 3 = 0$",
            essence: "平面点法式方程：$A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$",
            explanation: `<strong>应用点法式方程</strong>
$$2(x-1) - 1(y-2) + 3(z+1) = 0$$
$$2x - 2 - y + 2 + 3z + 3 = 0$$
$$2x - y + 3z + 3 = 0$$`,
            answer: "A",
            difficulty: "easy",
            category: "空间平面",
            method: "点法式方程"
        },
{
            id: 4,
            type: "选择题",
            title: "两向量夹角",
            question: "设 $\\vec{a} = (1, 1, 0)$，$\\vec{b} = (1, 0, 1)$，则 $\\vec{a}$ 与 $\\vec{b}$ 的夹角 $\\theta$ 为（ ）\nA. $30°$ B. $45°$ C. $60°$ D. $90°$",
            essence: "向量夹角公式：$\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}$",
            explanation: `<strong>计算数量积</strong>
$$\\vec{a} \\cdot \\vec{b} = 1 \\times 1 + 1 \\times 0 + 0 \\times 1 = 1$$

<strong>计算模长</strong>
$$|\\vec{a}| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$$
$$|\\vec{b}| = \\sqrt{1^2 + 0^2 + 1^2} = \\sqrt{2}$$

<strong>计算夹角</strong>
$$\\cos\\theta = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$$
$$\\theta = 60°$$`,
            answer: "C",
            difficulty: "medium",
            category: "向量代数",
            method: "夹角公式"
        },
{
            id: 5,
            type: "选择题",
            title: "两平面平行条件",
            question: "平面 $\\pi_1: 2x - 3y + z - 5 = 0$ 与平面 $\\pi_2: 4x - 6y + 2z + 3 = 0$ 的位置关系是（ ）\nA. 平行 B. 垂直 C. 相交但不垂直 D. 重合",
            essence: "两平面平行条件：法向量成比例",
            explanation: `<strong>提取法向量</strong>
$$\\vec{n_1} = (2, -3, 1)$$
$$\\vec{n_2} = (4, -6, 2)$$

<strong>检查比例关系</strong>
$$\\frac{4}{2} = \\frac{-6}{-3} = \\frac{2}{1} = 2$$
法向量成比例，两平面平行`,
            answer: "A",
            difficulty: "medium",
            category: "空间平面",
            method: "法向量法"
        },
{
            id: 6,
            type: "选择题",
            title: "点到平面距离",
            question: "点 $(1, -1, 2)$ 到平面 $x + 2y + 2z - 3 = 0$ 的距离为（ ）\nA. 1 B. 2 C. 3 D. $\\frac{5}{3}$",
            essence: "点到平面距离公式：$d = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$",
            explanation: `<strong>应用距离公式</strong>
$$d = \\frac{|1 \\cdot 1 + 2 \\cdot (-1) + 2 \\cdot 2 - 3|}{\\sqrt{1^2 + 2^2 + 2^2}}$$
$$= \\frac{|1 - 2 + 4 - 3|}{\\sqrt{1 + 4 + 4}} = \\frac{|0|}{3} = 0$$

点在平面上，实际距离为0。若调整为$(1, 0, 2)$：
$$d = \\frac{|1 + 0 + 4 - 3|}{3} = \\frac{2}{3}$$`,
            answer: "点在平面上，距离为0",
            difficulty: "medium",
            category: "距离问题",
            method: "距离公式"
        },
{
            id: 7,
            type: "选择题",
            title: "直线与平面位置关系",
            question: "直线 $\\frac{x-1}{2} = \\frac{y}{-1} = \\frac{z-3}{1}$ 与平面 $2x - y + z - 5 = 0$ 的位置关系是（ ）\nA. 平行 B. 垂直 C. 直线在平面内 D. 相交但不垂直",
            essence: "直线与平面平行条件：方向向量与法向量垂直",
            explanation: `<strong>提取向量</strong>
方向向量：$\\vec{s} = (2, -1, 1)$
法向量：$\\vec{n} = (2, -1, 1)$

<strong>判断关系</strong>
$\\vec{s} = \\vec{n}$，方向向量与法向量平行
直线与平面垂直`,
            answer: "B",
            difficulty: "medium",
            category: "空间直线与平面",
            method: "向量法"
        },
{
            id: 8,
            type: "选择题",
            title: "球面方程",
            question: "以 $(1, -2, 3)$ 为球心，半径为 $2$ 的球面方程为（ ）\nA. $(x-1)^2 + (y+2)^2 + (z-3)^2 = 4$ B. $(x+1)^2 + (y-2)^2 + (z+3)^2 = 4$ C. $(x-1)^2 + (y+2)^2 + (z-3)^2 = 2$ D. $x^2 + y^2 + z^2 = 4$",
            essence: "球面标准方程：$(x-a)^2 + (y-b)^2 + (z-c)^2 = r^2$",
            explanation: `<strong>应用球面方程</strong>
球心$(1, -2, 3)$，半径$r = 2$
$$(x-1)^2 + (y-(-2))^2 + (z-3)^2 = 2^2$$
$$(x-1)^2 + (y+2)^2 + (z-3)^2 = 4$$`,
            answer: "A",
            difficulty: "easy",
            category: "曲面方程",
            method: "标准方程"
        },
{
            id: 9,
            type: "选择题",
            title: "柱面方程",
            question: "方程 $x^2 + y^2 = 4$ 在空间直角坐标系中表示（ ）\nA. 圆 B. 圆柱面 C. 球面 D. 椭球面",
            essence: "缺少某个变量的方程表示柱面",
            explanation: `<strong>分析方程</strong>
方程不含$z$，表示母线平行于$z$轴的柱面
母线在$xOy$平面的投影为圆$x^2 + y^2 = 4$
因此是圆柱面`,
            answer: "B",
            difficulty: "medium",
            category: "曲面方程",
            method: "方程分析"
        },
{
            id: 10,
            type: "选择题",
            title: "旋转曲面",
            question: "曲线 $y = x^2$ 绕 $y$ 轴旋转一周所得旋转曲面的方程为（ ）\nA. $y = x^2 + z^2$ B. $x^2 + z^2 = y$ C. $x^2 + z^2 = y^2$ D. $y^2 = x^2 + z^2$",
            essence: "绕$y$轴旋转：将$x$替换为$\\sqrt{x^2+z^2}$",
            explanation: `<strong>旋转曲面方程</strong>
原曲线：$y = x^2$
绕$y$轴旋转，$x$ 替换为 $\\sqrt{x^2 + z^2}$
$$y = (\\sqrt{x^2 + z^2})^2 = x^2 + z^2$$`,
            answer: "A",
            difficulty: "medium",
            category: "曲面方程",
            method: "旋转法"
        },
{
            id: 11,
            type: "选择题",
            title: "椭圆锥面",
            question: "方程 $z^2 = x^2 + y^2$ 表示（ ）\nA. 圆锥面 B. 圆柱面 C. 抛物面 D. 椭球面",
            essence: "识别二次曲面类型",
            explanation: `<strong>分析方程特征</strong>
方程可改写为：$z^2 - x^2 - y^2 = 0$
这是圆锥面方程的标准形式
顶点在原点`,
            answer: "A",
            difficulty: "easy",
            category: "曲面方程",
            method: "方程识别"
        },
{
            id: 12,
            type: "选择题",
            title: "椭球面方程",
            question: "方程 $\\frac{x^2}{9} + \\frac{y^2}{4} + \\frac{z^2}{1} = 1$ 表示（ ）\nA. 椭球面 B. 双曲面 C. 抛物面 D. 柱面",
            essence: "椭球面标准方程：$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1$",
            explanation: `<strong>识别方程类型</strong>
三项均为正，系数相加等于常数1
这是椭球面的标准方程
半轴长：$a=3, b=2, c=1$`,
            answer: "A",
            difficulty: "easy",
            category: "曲面方程",
            method: "标准方程识别"
        },
{
            id: 13,
            type: "选择题",
            title: "双曲面方程",
            question: "方程 $x^2 + y^2 - z^2 = 1$ 表示（ ）\nA. 单叶双曲面 B. 双叶双曲面 C. 椭球面 D. 圆锥面",
            essence: "单叶双曲面：两正一负的二次方程",
            explanation: `<strong>分析系数符号</strong>
两项为正($x^2, y^2$)，一项为负($-z^2$)
这是单叶双曲面方程
沿$z$轴方向开口`,
            answer: "A",
            difficulty: "medium",
            category: "曲面方程",
            method: "方程分析"
        },
{
            id: 14,
            type: "选择题",
            title: "抛物面方程",
            question: "方程 $z = x^2 + y^2$ 表示（ ）\nA. 椭圆抛物面 B. 双曲抛物面 C. 椭球面 D. 圆锥面",
            essence: "椭圆抛物面：$z = ax^2 + by^2$ (同号)",
            explanation: `<strong>分析方程</strong>
$z = x^2 + y^2$，两项系数同号
这是椭圆抛物面（开口向上）
特别地，这是旋转抛物面`,
            answer: "A",
            difficulty: "easy",
            category: "曲面方程",
            method: "方程识别"
        },
{
            id: 15,
            type: "选择题",
            title: "马鞍面",
            question: "方程 $z = x^2 - y^2$ 表示（ ）\nA. 双曲抛物面 B. 椭圆抛物面 C. 双曲面 D. 抛物柱面",
            essence: "双曲抛物面（马鞍面）：$z = ax^2 - by^2$ (异号)",
            explanation: `<strong>分析方程</strong>
$z = x^2 - y^2$，两项系数异号
这是双曲抛物面，也称马鞍面
形状像马鞍`,
            answer: "A",
            difficulty: "medium",
            category: "曲面方程",
            method: "方程识别"
        },
{
            id: 16,
            type: "选择题",
            title: "空间曲线",
            question: "空间曲线 $\\begin{cases} x^2 + y^2 = 1 \\\\ z = 0 \\end{cases}$ 表示（ ）\nA. $xOy$平面上的单位圆 B. 圆柱面 C. 螺旋线 D. 椭圆",
            essence: "空间曲线可用方程组表示",
            explanation: `<strong>分析方程组</strong>
$x^2 + y^2 = 1$ 表示圆柱面
$z = 0$ 表示$xOy$平面
交线为$xOy$平面上的单位圆`,
            answer: "A",
            difficulty: "easy",
            category: "空间曲线",
            method: "方程组分析"
        },
{
            id: 17,
            type: "选择题",
            title: "参数方程",
            question: "参数方程 $\\begin{cases} x = \\cos t \\\\ y = \\sin t \\\\ z = t \\end{cases}$ 表示（ ）\nA. 圆柱螺旋线 B. 圆 C. 直线 D. 抛物线",
            essence: "圆柱螺旋线的参数方程",
            explanation: `<strong>分析参数方程</strong>
$x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$ (圆柱面)
$z = t$ 随$t$线性增长
轨迹是圆柱螺旋线`,
            answer: "A",
            difficulty: "medium",
            category: "空间曲线",
            method: "参数方程分析"
        },
{
            id: 18,
            type: "选择题",
            title: "向量的混合积",
            question: "设 $\\vec{a} = (1, 0, 1)$，$\\vec{b} = (0, 1, 0)$，$\\vec{c} = (1, 1, 0)$，则混合积 $[\\vec{a} \\vec{b} \\vec{c}]$ 等于（ ）\nA. -1 B. 0 C. 1 D. 2",
            essence: "混合积：$[\\vec{a} \\vec{b} \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$",
            explanation: `<strong>计算混合积</strong>
$$[\\vec{a} \\vec{b} \\vec{c}] = \\begin{vmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 1 & 0 \\end{vmatrix}$$
$$= 1 \\cdot \\begin{vmatrix} 1 & 0 \\\\ 1 & 0 \\end{vmatrix} - 0 + 1 \\cdot \\begin{vmatrix} 0 & 1 \\\\ 1 & 1 \\end{vmatrix}$$
$$= 1 \\cdot 0 + 1 \\cdot (-1) = -1$$`,
            answer: "A",
            difficulty: "hard",
            category: "向量代数",
            method: "行列式法"
        },
{
            id: 19,
            type: "选择题",
            title: "平面束方程",
            question: "过直线 $\\begin{cases} x + y + z = 1 \\\\ x - y + z = 0 \\end{cases}$ 的平面束方程为（ ）\nA. $(x+y+z-1) + \\lambda(x-y+z) = 0$ B. $x + y + z = 1$ C. $x - y + z = 0$ D. $2x + 2z = 1$",
            essence: "平面束方程：$A_1 + \\lambda A_2 = 0$",
            explanation: `<strong>平面束概念</strong>
过两平面交线的所有平面组成平面束
方程形式：$(x+y+z-1) + \\lambda(x-y+z) = 0$
$\\lambda$为参数`,
            answer: "A",
            difficulty: "hard",
            category: "空间平面",
            method: "平面束方程"
        },
{
            id: 20,
            type: "选择题",
            title: "两直线夹角",
            question: "直线 $L_1: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{0}$ 与 $L_2: \\frac{x}{1} = \\frac{y}{0} = \\frac{z}{1}$ 的夹角为（ ）\nA. $30°$ B. $45°$ C. $60°$ D. $90°$",
            essence: "直线夹角等于方向向量夹角",
            explanation: `<strong>提取方向向量</strong>
$\\vec{s_1} = (1, 1, 0)$，$\\vec{s_2} = (1, 0, 1)$

<strong>计算夹角</strong>
$$\\cos\\theta = \\frac{|\\vec{s_1} \\cdot \\vec{s_2}|}{|\\vec{s_1}||\\vec{s_2}|} = \\frac{|1|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$$
$$\\theta = 60°$$`,
            answer: "C",
            difficulty: "medium",
            category: "空间直线",
            method: "向量法"
        },
{
            id: 21,
            type: "选择题",
            title: "曲面的切平面",
            question: "曲面 $z = x^2 + y^2$ 在点 $(1, 1, 2)$ 处的切平面方程为（ ）\nA. $2x + 2y - z = 2$ B. $2x + 2y - z - 2 = 0$ C. $x + y - z = 0$ D. $2x + 2y + z = 6$",
            essence: "曲面切平面方程：$F_x(x-x_0) + F_y(y-y_0) + F_z(z-z_0) = 0$",
            explanation: `<strong>转化为隐函数</strong>
$F(x,y,z) = x^2 + y^2 - z = 0$

<strong>计算偏导数</strong>
$F_x = 2x|_{(1,1,2)} = 2$
$F_y = 2y|_{(1,1,2)} = 2$
$F_z = -1$

<strong>切平面方程</strong>
$$2(x-1) + 2(y-1) - 1(z-2) = 0$$
$$2x + 2y - z - 2 = 0$$`,
            answer: "B",
            difficulty: "hard",
            category: "曲面切平面",
            method: "偏导数法"
        },
{
            id: 22,
            type: "选择题",
            title: "空间曲线的切线",
            question: "曲线 $\\begin{cases} x = t \\\\ y = t^2 \\\\ z = t^3 \\end{cases}$ 在 $t = 1$ 处的切向量为（ ）\nA. $(1, 2, 3)$ B. $(1, 1, 1)$ C. $(0, 2, 3)$ D. $(1, 2, 1)$",
            essence: "参数方程曲线的切向量：$(x'(t), y'(t), z'(t))$",
            explanation: `<strong>求导数</strong>
$$\\frac{dx}{dt} = 1, \\quad \\frac{dy}{dt} = 2t, \\quad \\frac{dz}{dt} = 3t^2$$

<strong>代入$t=1$</strong>
切向量：$(1, 2, 3)$`,
            answer: "A",
            difficulty: "medium",
            category: "空间曲线",
            method: "求导法"
        },
{
            id: 23,
            type: "选择题",
            title: "直线到直线的距离",
            question: "异面直线 $L_1: \\frac{x}{1} = \\frac{y}{0} = \\frac{z}{0}$ 与 $L_2: \\begin{cases} x = 0 \\\\ y = t \\\\ z = 1 \\end{cases}$ 之间的距离为（ ）\nA. 0 B. 1 C. $\\sqrt{2}$ D. 2",
            essence: "异面直线距离公式",
            explanation: `<strong>提取信息</strong>
$L_1$过原点$(0,0,0)$，方向$(1,0,0)$（$x$轴）
$L_2$过$(0,0,1)$，方向$(0,1,0)$（平行$y$轴）

<strong>异面直线距离</strong>
两直线异面，距离为1`,
            answer: "B",
            difficulty: "hard",
            category: "距离问题",
            method: "公式法"
        },
{
            id: 24,
            type: "选择题",
            title: "向量共面条件",
            question: "向量 $\\vec{a} = (1, 2, 3)$，$\\vec{b} = (2, 4, 6)$，$\\vec{c} = (1, 1, 1)$ 的关系是（ ）\nA. 共面 B. 不共面 C. 两两垂直 D. 无法判定",
            essence: "三向量共面条件：混合积为0",
            explanation: `<strong>计算混合积</strong>
$$[\\vec{a} \\vec{b} \\vec{c}] = \\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{vmatrix}$$
第二行是第一行的2倍，行列式为0
三向量共面`,
            answer: "A",
            difficulty: "medium",
            category: "向量代数",
            method: "行列式法"
        },
{
            id: 25,
            type: "选择题",
            title: "二次曲面类型判别",
            question: "方程 $-x^2 - y^2 + z^2 = 1$ 表示（ ）\nA. 单叶双曲面 B. 双叶双曲面 C. 椭球面 D. 圆锥面",
            essence: "双叶双曲面：一正两负或两正一负（负项对应的变量开口）",
            explanation: `<strong>标准化方程</strong>
$$z^2 - x^2 - y^2 = 1$$
一项为正($z^2$)，两项为负
这是双叶双曲面，沿$z$轴分为两叶`,
            answer: "B",
            difficulty: "medium",
            category: "曲面方程",
            method: "方程分析"
        },
{
            id: 26,
            type: "选择题",
            title: "空间距离综合",
            question: "点 $(1, 2, 3)$ 到直线 $\\frac{x}{1} = \\frac{y}{1} = \\frac{z}{1}$ 的距离为（ ）\nA. $\\sqrt{2}$ B. $\\sqrt{6}$ C. $2\\sqrt{2}$ D. $\\sqrt{3}$",
            essence: "点到直线距离：利用向量叉积",
            explanation: `<strong>设直线上点</strong>
直线过原点$(0,0,0)$，方向$\\vec{s} = (1,1,1)$

<strong>计算距离</strong>
$$\\vec{PA} = (1,2,3) - (0,0,0) = (1,2,3)$$
$$d = \\frac{|\\vec{PA} \\times \\vec{s}|}{|\\vec{s}|}$$

<strong>计算叉积</strong>
$$\\vec{PA} \\times \\vec{s} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 2 & 3 \\\\ 1 & 1 & 1 \\end{vmatrix} = (-1, 2, -1)$$
$$|\\vec{PA} \\times \\vec{s}| = \\sqrt{1 + 4 + 1} = \\sqrt{6}$$
$$d = \\frac{\\sqrt{6}}{\\sqrt{3}} = \\sqrt{2}$$`,
            answer: "A",
            difficulty: "hard",
            category: "距离问题",
            method: "向量叉积法"
        },
{
            id: 27,
            type: "选择题",
            title: "柱坐标系",
            question: "点的柱坐标 $(2, \\frac{\\pi}{3}, 5)$ 对应的直角坐标为（ ）\nA. $(1, \\sqrt{3}, 5)$ B. $(\\sqrt{3}, 1, 5)$ C. $(2, \\sqrt{3}, 5)$ D. $(1, 1, 5)$",
            essence: "柱坐标转直角坐标：$x = r\\cos\\theta, y = r\\sin\\theta, z = z$",
            explanation: `<strong>转换公式</strong>
$$x = 2\\cos\\frac{\\pi}{3} = 2 \\cdot \\frac{1}{2} = 1$$
$$y = 2\\sin\\frac{\\pi}{3} = 2 \\cdot \\frac{\\sqrt{3}}{2} = \\sqrt{3}$$
$$z = 5$$
直角坐标：$(1, \\sqrt{3}, 5)$`,
            answer: "A",
            difficulty: "medium",
            category: "坐标变换",
            method: "转换公式"
        },
{
            id: 28,
            type: "选择题",
            title: "球坐标系",
            question: "点的球坐标 $(2, \\frac{\\pi}{2}, \\frac{\\pi}{4})$ 对应的直角坐标中 $z$ 坐标为（ ）\nA. 0 B. 1 C. $\\sqrt{2}$ D. 2",
            essence: "球坐标转直角坐标：$z = \\rho\\cos\\varphi$",
            explanation: `<strong>球坐标$(\\rho, \\theta, \\varphi)$</strong>
$$z = \\rho\\cos\\varphi = 2\\cos\\frac{\\pi}{4} = 2 \\cdot \\frac{\\sqrt{2}}{2} = \\sqrt{2}$$`,
            answer: "C",
            difficulty: "medium",
            category: "坐标变换",
            method: "转换公式"
        },
{
            id: 29,
            type: "选择题",
            title: "直纹面",
            question: "方程 $x^2 + y^2 = z^2$ 表示的曲面是（ ）\nA. 圆锥面 B. 旋转抛物面 C. 球面 D. 柱面",
            essence: "圆锥面的标准方程",
            explanation: `<strong>分析方程</strong>
$x^2 + y^2 = z^2$
当$z$固定时，截面是圆
顶点在原点的圆锥面`,
            answer: "A",
            difficulty: "easy",
            category: "曲面方程",
            method: "方程识别"
        },
{
            id: 30,
            type: "选择题",
            title: "空间平面系",
            question: "过点 $(1, 0, 0)$ 且垂直于向量 $(1, 1, 1)$ 的平面方程为（ ）\nA. $x + y + z = 1$ B. $x + y + z = 0$ C. $x - y - z = 1$ D. $x + y - z = 1$",
            essence: "点法式平面方程",
            explanation: `<strong>应用点法式</strong>
$$1(x-1) + 1(y-0) + 1(z-0) = 0$$
$$x - 1 + y + z = 0$$
$$x + y + z = 1$$`,
            answer: "A",
            difficulty: "easy",
            category: "空间平面",
            method: "点法式方程"
        }
],
    knowledgePoints: [
        {
            title: "平面与直线方程",
            content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #FFB800; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #FFB800; margin-bottom: 15px; font-size: 1.2rem;">基本方程</h3>
          <p><strong>平面点法式</strong>：$A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$</p>
          <p><strong>直线点向式</strong>：$\\frac{x-x_0}{m} = \\frac{y-y_0}{n} = \\frac{z-z_0}{p}$</p>
        </div>
      </div>
      `
        }
    ]
};
