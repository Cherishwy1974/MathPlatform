window.exerciseData = {
  exercises: [

], // 初始化为空数组
  knowledgePoints: [
    {
      title: "指数运算",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e74c3c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #e74c3c; margin-bottom: 15px; font-size: 1.2rem;">指数定义与性质</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>指数定义</strong>：$a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ 个}}$，其中 $a$ 是底数，$n$ 是指数</li>
            <li style="margin-bottom: 10px;"><strong>乘法法则</strong>：$a^m \\cdot a^n = a^{m+n}$（同底数幂相乘，底数不变，指数相加）</li>
            <li style="margin-bottom: 10px;"><strong>除法法则</strong>：$\\frac{a^m}{a^n} = a^{m-n}$（同底数幂相除，底数不变，指数相减）</li>
            <li style="margin-bottom: 10px;"><strong>幂的幂法则</strong>：$(a^m)^n = a^{m \\cdot n}$（幂的幂，底数不变，指数相乘）</li>
            <li style="margin-bottom: 10px;"><strong>零指数</strong>：$a^0 = 1$（$a \\neq 0$）</li>
            <li style="margin-bottom: 10px;"><strong>负指数</strong>：$a^{-n} = \\frac{1}{a^n}$</li>
            <li style="margin-bottom: 10px;"><strong>分数指数</strong>：$a^{\\frac{1}{n}} = \\sqrt[n]{a}$，$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "对数运算",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #3498db; margin-bottom: 15px; font-size: 1.2rem;">对数定义与性质</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>对数定义</strong>：如果 $a^x = b$（$a > 0, a \\neq 1$），则 $x = \\log_a b$</li>
            <li style="margin-bottom: 10px;"><strong>基本性质</strong>：$\\log_a a = 1$，$\\log_a 1 = 0$，$a^{\\log_a b} = b$</li>
            <li style="margin-bottom: 10px;"><strong>乘积对数</strong>：$\\log_a (xy) = \\log_a x + \\log_a y$</li>
            <li style="margin-bottom: 10px;"><strong>商的对数</strong>：$\\log_a \\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$</li>
            <li style="margin-bottom: 10px;"><strong>幂的对数</strong>：$\\log_a (x^n) = n \\log_a x$</li>
            <li style="margin-bottom: 10px;"><strong>换底公式</strong>：$\\log_a b = \\frac{\\log_c b}{\\log_c a}$</li>
            <li style="margin-bottom: 10px;"><strong>常用对数</strong>：$\\lg x = \\log_{10} x$，$\\ln x = \\log_e x$</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "常量与变量",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #2ecc71; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #2ecc71; margin-bottom: 15px; font-size: 1.2rem;">常量变量概念</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>常量</strong>：在某个过程中保持不变的量，如 $\\pi$、$e$、$2$ 等</li>
            <li style="margin-bottom: 10px;"><strong>变量</strong>：在某个过程中可以取不同值的量，如 $x$、$y$、$t$ 等</li>
            <li style="margin-bottom: 10px;"><strong>区间表示法</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">开区间：$(a, b) = \\{x | a < x < b\\}$</li>
                <li style="margin-bottom: 5px;">闭区间：$[a, b] = \\{x | a \\leq x \\leq b\\}$</li>
                <li style="margin-bottom: 5px;">半开区间：$[a, b) = \\{x | a \\leq x < b\\}$，$(a, b] = \\{x | a < x \\leq b\\}$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>无穷区间</strong>：$(-\\infty, a)$、$(a, +\\infty)$、$(-\\infty, +\\infty)$ 等</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数基础",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #9b59b6; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #9b59b6; margin-bottom: 15px; font-size: 1.2rem;">函数定义表示</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>函数定义</strong>：设 $A$、$B$ 是非空数集，如果按照某种确定的对应关系 $f$，使对于集合 $A$ 中的任意一个数 $x$，在集合 $B$ 中都有唯一确定的数 $f(x)$ 和它对应，那么就称 $f: A \\to B$ 为从集合 $A$ 到集合 $B$ 的一个函数</li>
            <li style="margin-bottom: 10px;"><strong>定义域</strong>：函数 $f(x)$ 中自变量 $x$ 的取值范围称为函数的定义域</li>
            <li style="margin-bottom: 10px;"><strong>值域</strong>：函数值的集合 $\\{f(x) | x \\in D\\}$ 称为函数的值域</li>
            <li style="margin-bottom: 10px;"><strong>函数相等</strong>：两个函数相等当且仅当它们的定义域相同且对应法则相同</li>
            <li style="margin-bottom: 10px;"><strong>函数表示法</strong>：解析法、图像法、列表法</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数性质",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f39c12; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #f39c12; margin-bottom: 15px; font-size: 1.2rem;">函数基本性质</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>单调性</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">单调递增：若对于定义域内任意 $x_1 < x_2$，都有 $f(x_1) \\leq f(x_2)$</li>
                <li style="margin-bottom: 5px;">单调递减：若对于定义域内任意 $x_1 < x_2$，都有 $f(x_1) \\geq f(x_2)$</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>奇偶性</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">奇函数：$f(-x) = -f(x)$，图像关于原点对称</li>
                <li style="margin-bottom: 5px;">偶函数：$f(-x) = f(x)$，图像关于 $y$ 轴对称</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>反函数</strong>：设函数 $y = f(x)$ 的定义域为 $D$，值域为 $R$。如果对于值域 $R$ 中每一个值 $y$，在 $D$ 中都有唯一的 $x$ 使得 $f(x) = y$，则可定义一个从 $R$ 到 $D$ 的函数，称为 $f$ 的反函数，记作 $x = f^{-1}(y)$</li>
            <li style="margin-bottom: 10px;"><strong>复合函数</strong>：设函数 $y = f(u)$ 的定义域为 $D_f$，函数 $u = g(x)$ 的定义域为 $D_g$，值域为 $R_g$，若 $R_g \\cap D_f \\neq \\emptyset$，则称函数 $y = f[g(x)]$ 为复合函数</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "基本初等函数",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e67e22; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #e67e22; margin-bottom: 15px; font-size: 1.2rem;">基本初等函数类型</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>常数函数</strong>：$y = C$（$C$ 为常数）</li>
            <li style="margin-bottom: 10px;"><strong>幂函数</strong>：$y = x^\\alpha$（$\\alpha$ 为常数）</li>
            <li style="margin-bottom: 10px;"><strong>指数函数</strong>：$y = a^x$（$a > 0, a \\neq 1$）</li>
            <li style="margin-bottom: 10px;"><strong>对数函数</strong>：$y = \\log_a x$（$a > 0, a \\neq 1$）</li>
            <li style="margin-bottom: 10px;"><strong>三角函数</strong>：$y = \\sin x$、$y = \\cos x$、$y = \\tan x$ 等</li>
            <li style="margin-bottom: 10px;"><strong>反三角函数</strong>：$y = \\arcsin x$、$y = \\arccos x$、$y = \\arctan x$ 等</li>
            <li style="margin-bottom: 10px;"><strong>函数性质</strong>：每种基本初等函数都有其特定的定义域、值域、单调性、奇偶性等性质</li>
          </ul>
        </div>
      </div>
    `
    }
  ]
};

window.exerciseData.exercises = [
  // 指数运算类题目
  {
    id: 1,
    type: "选择题",
    title: "指数运算基础",
    question: "计算$2^3 \\times 2^4$的值（ ）\nA. $2^7$ B. $2^{12}$ C. $8^7$ D. $16^3$",
    essence: "这道题考查同底数幂相乘的运算法则。当底数相同时，指数相加：$a^m \\times a^n = a^{m+n}$。需要将 $2^3 \\times 2^4$ 化为 $2^{3+4} = 2^7$。",
    explanation: `<strong>第一步：应用指数运算法则</strong>
$$2^3 \\times 2^4 = 2^{3+4} = 2^7$$

<strong>第二步：验证计算</strong>
$$2^3 = 8, \\quad 2^4 = 16$$
$$8 \\times 16 = 128 = 2^7$$

<strong>第三步：得出结论</strong>
答案为$2^7$`,
    answer: "A",
    difficulty: "easy",
    category: "指数运算",
    method: "同底数幂相乘法则"
  },
  {
    id: 2,
    type: "选择题",
    title: "分数指数运算",
    question: "计算$8^{\\frac{2}{3}}$的值（ ）\nA. $2$ B. $4$ C. $8$ D. $16$",
    essence: "这道题考查分数指数的运算法则。分数指数 $a^{\\frac{m}{n}}$ 等于 $\\sqrt[n]{a^m}$ 或 $(\\sqrt[n]{a})^m$。需要将 $8^{\\frac{2}{3}}$ 化为 $(\\sqrt[3]{8})^2$ 然后计算。",
    explanation: `<strong>第一步：将分数指数转换为根式</strong>
$$8^{\\frac{2}{3}} = (8^{\\frac{1}{3}})^2 = (\\sqrt[3]{8})^2$$

<strong>第二步：计算立方根</strong>
$$\\sqrt[3]{8} = 2$$

<strong>第三步：计算平方</strong>
$$2^2 = 4$$

<strong>第四步：得出结论</strong>
$8^{\\frac{2}{3}} = 4$`,
    answer: "B",
    difficulty: "medium",
    category: "指数运算",
    method: "分数指数运算法则"
  },
  {
    id: 3,
    type: "选择题",
    title: "零指数与负指数",
    question: "计算$3^0 + 2^{-1}$的值（ ）\nA. $\\frac{1}{2}$ B. $\\frac{3}{2}$ C. $1$ D. $2$",
    essence: "这道题考查零指数和负指数的运算法则。零指数：$a^0 = 1$（$a \\neq 0$）；负指数：$a^{-n} = \\frac{1}{a^n}$。需要分别计算 $3^0 = 1$ 和 $2^{-1} = \\frac{1}{2}$，然后相加。",
    explanation: `<strong>第一步：应用零指数法则</strong>
$$3^0 = 1$$

<strong>第二步：应用负指数法则</strong>
$$2^{-1} = \\frac{1}{2^1} = \\frac{1}{2}$$

<strong>第三步：相加</strong>
$$3^0 + 2^{-1} = 1 + \\frac{1}{2} = \\frac{3}{2}$$

<strong>第四步：得出结论</strong>
答案为$\\frac{3}{2}$`,
    answer: "B",
    difficulty: "easy",
    category: "指数运算",
    method: "零指数和负指数法则"
  },
  {
    id: 4,
    type: "选择题",
    title: "指数方程求解",
    question: "解方程$2^{x+1} = 8$，则$x$的值为（ ）\nA. $1$ B. $2$ C. $3$ D. $4$",
    essence: "这道题考查指数方程的求解方法。当底数相同时，指数相等：若 $a^x = a^y$，则 $x = y$。需要将方程两边化为同底数 $2$，然后比较指数求解。",
    explanation: `<strong>第一步：将方程两边化为同底数</strong>
$$2^{x+1} = 8 = 2^3$$

<strong>第二步：比较指数</strong>
$$x + 1 = 3$$

<strong>第三步：求解</strong>
$$x = 3 - 1 = 2$$

<strong>第四步：验证</strong>
$$2^{2+1} = 2^3 = 8 \\checkmark$$

<strong>第五步：得出结论</strong>
$x = 2$`,
    answer: "B",
    difficulty: "medium",
    category: "指数运算",
    method: "指数方程求解"
  },


  // 对数运算类题目
  {
    id: 5,
    type: "选择题",
    title: "对数基本运算",
    question: "计算$\\log_2 8 + \\log_2 4$的值（ ）\nA. $3$ B. $5$ C. $6$ D. $12$",
    essence: "这道题考查对数的基本运算法则。同底数对数相加：$\\log_a x + \\log_a y = \\log_a (xy)$。需要将 $\\log_2 8 + \\log_2 4$ 化为 $\\log_2 (8 \\times 4) = \\log_2 32$，然后化简。",
    explanation: `<strong>第一步：分别计算各对数</strong>
$$\\log_2 8 = \\log_2 2^3 = 3$$
$$\\log_2 4 = \\log_2 2^2 = 2$$

<strong>第二步：应用对数加法法则</strong>
$$\\log_2 8 + \\log_2 4 = \\log_2 (8 \\times 4) = \\log_2 32$$

<strong>第三步：化简</strong>
$$\\log_2 32 = \\log_2 2^5 = 5$$

<strong>第四步：得出结论</strong>
答案为$5$`,
    answer: "B",
    difficulty: "easy",
    category: "对数运算",
    method: "对数基本运算法则"
  },
  {
    id: 6,
    type: "选择题",
    title: "换底公式应用",
    question: "用换底公式计算$\\log_3 27$，以$2$为底（ ）\nA. $\\frac{\\log_2 27}{\\log_2 3}$ B. $\\frac{\\log_2 3}{\\log_2 27}$ C. $\\log_2 9$ D. $\\log_2 81$",
    essence: "这道题考查换底公式的应用。换底公式：$\\log_a b = \\frac{\\log_c b}{\\log_c a}$。需要将 $\\log_3 27$ 转换为以 $2$ 为底的对数形式。",
    explanation: `<strong>第一步：应用换底公式</strong>
$$\\log_3 27 = \\frac{\\log_2 27}{\\log_2 3}$$

<strong>第二步：验证计算</strong>
$$\\log_3 27 = \\log_3 3^3 = 3$$
$$\\frac{\\log_2 27}{\\log_2 3} = \\frac{\\log_2 3^3}{\\log_2 3} = \\frac{3\\log_2 3}{\\log_2 3} = 3 \\checkmark$$

<strong>第三步：得出结论</strong>
答案为$\\frac{\\log_2 27}{\\log_2 3}$`,
    answer: "A",
    difficulty: "medium",
    category: "对数运算",
    method: "换底公式"
  },
  {
    id: 7,
    type: "选择题",
    title: "对数方程求解",
    question: "解方程$\\log_2(x+1) = 3$，则$x$的值为（ ）\nA. $6$ B. $7$ C. $8$ D. $9$",
    essence: "这道题考查对数方程的求解方法。对数方程 $\\log_a x = b$ 等价于指数方程 $x = a^b$。需要将 $\\log_2(x+1) = 3$ 转化为 $x+1 = 2^3$ 求解。",
    explanation: `<strong>第一步：将对数方程转化为指数方程</strong>
$$\\log_2(x+1) = 3 \\Rightarrow x+1 = 2^3$$

<strong>第二步：计算指数</strong>
$$x+1 = 8$$

<strong>第三步：求解</strong>
$$x = 8 - 1 = 7$$

<strong>第四步：验证</strong>
$$\\log_2(7+1) = \\log_2 8 = \\log_2 2^3 = 3 \\checkmark$$

<strong>第五步：得出结论</strong>
$x = 7$`,
    answer: "B",
    difficulty: "medium",
    category: "对数运算",
    method: "对数方程求解"
  },
  {
    id: 8,
    type: "选择题",
    title: "对数性质综合",
    question: "已知$\\log_a x = 2$，$\\log_a y = 3$，则$\\log_a(x^2y^3)$等于（ ）\nA. $12$ B. $13$ C. $18$ D. $36$",
    essence: "这道题考查对数性质的综合应用。需要运用对数的乘法法则 $\\log_a(xy) = \\log_a x + \\log_a y$ 和幂运算法则 $\\log_a(x^n) = n\\log_a x$ 来化简 $\\log_a(x^2y^3)$。",
    explanation: `<strong>第一步：应用对数幂运算法则</strong>
$$\\log_a(x^2y^3) = \\log_a x^2 + \\log_a y^3$$

<strong>第二步：进一步展开</strong>
$$= 2\\log_a x + 3\\log_a y$$

<strong>第三步：代入已知条件</strong>
$$= 2 \\times 2 + 3 \\times 3 = 4 + 9 = 13$$

<strong>第四步：得出结论</strong>
答案为$13$`,
    answer: "B",
    difficulty: "hard",
    category: "对数运算",
    method: "对数性质综合应用"
  },
  {
    id: 9,
    type: "选择题",
    title: "自然对数运算",
    question: "计算$\\ln e^3 + \\ln 1$的值（ ）\nA. $0$ B. $1$ C. $3$ D. $e^3$",
    essence: "这道题考查自然对数的基本性质。需要运用 $\\ln e = 1$ 和 $\\ln 1 = 0$ 的基本性质，以及幂运算法则 $\\ln e^3 = 3\\ln e$ 来计算。",
    explanation: `<strong>第一步：分别计算各对数</strong>
$$\\ln e^3 = 3\\ln e = 3 \\times 1 = 3$$
$$\\ln 1 = 0$$

<strong>第二步：相加</strong>
$$\\ln e^3 + \\ln 1 = 3 + 0 = 3$$

<strong>第三步：得出结论</strong>
答案为$3$`,
    answer: "C",
    difficulty: "easy",
    category: "对数运算",
    method: "自然对数基本性质"
  },

  // 常量与变量类题目
  {
    id: 10,
    type: "选择题",
    title: "区间表示法",
    question: "用区间表示集合$\\{x | -2 < x \\leq 3\\}$（ ）\nA. $(-2, 3]$ B. $[-2, 3)$ C. $(-2, 3)$ D. $[-2, 3]$",
    essence: "这道题考查区间表示法的基本规则。开区间 $($ 表示不包含端点，闭区间 $]$ 表示包含端点。需要根据不等式的符号确定区间的开闭性。",
    explanation: `<strong>第一步：分析不等式</strong>
$$-2 < x \\leq 3$$
表示$x$大于$-2$且小于等于$3$

<strong>第二步：确定区间类型</strong>
- 左端点$-2$：不包含，用开区间$($
- 右端点$3$：包含，用闭区间$]$

<strong>第三步：写出区间</strong>
$$(-2, 3]$$

<strong>第四步：得出结论</strong>
答案为$(-2, 3]$`,
    answer: "A",
    difficulty: "easy",
    category: "常量与变量",
    method: "区间表示法"
  },


  // 函数基础类题目
  {
    id: 11,
    type: "选择题",
    title: "函数定义域",
    question: "设函数$f(x)$的定义域是$(1,5]$，则函数$f(3-2x)$的定义域是（ ）\nA. $(1,5]$ B. $(-1,1]$ C. $[-1,1)$ D. $[-7,1)$",
    essence: "这道题考查复合函数定义域的求解。对于 $f(g(x))$，需要满足 $g(x)$ 在 $f$ 的定义域内，即 $g(x) \\in D_f$。",
    explanation: `<strong>第一步：理解题意</strong>
$$\\text{已知}f(x)\\text{的定义域是}(1,5]，\\text{即}1 < x \\leq 5$$

<strong>第二步：求$f(3-2x)$的定义域</strong>
$$\\text{需要满足}1 < 3-2x \\leq 5$$

<strong>第三步：解不等式</strong>
$$1 < 3-2x \\leq 5$$
分成两部分：
- $1 < 3-2x$ → $-2 < -2x$ → $x < 1$
- $3-2x \\leq 5$ → $-2x \\leq 2$ → $x \\geq -1$

<strong>第四步：得出结论</strong>
$$\\text{因此}-1 \\leq x < 1，\\text{即}f(3-2x)\\text{的定义域是}[-1,1)$$`,
    answer: "C",
    difficulty: "medium",
    category: "函数基础",
    method: "复合函数定义域求解"
  },
  {
    id: 12,
    type: "选择题",
    title: "相同函数判断",
    question: "下列选项中，$f(x)$和$g(x)$为相同函数的是（ ）\nA. $f(x) = x^2$, $g(x) = (\\sqrt{x})^2$ \nB. $f(x) = \\sqrt[3]{x^3}$, $g(x) = x$ \nC. $f(x) = x+1$, $g(x) = \\frac{x^2-1}{x-1}$ \nD. $f(x) = \\ln x^2$, $g(x) = 2\\ln x$",
    essence: "这道题考查函数相同性的判断。两个函数相同当且仅当定义域相同且对应法则相同。需要逐一分析各选项的定义域和对应法则。",
    explanation: `<strong>判断两个函数是否相同需要满足：定义域相同且对应法则相同</strong>

<strong>选项A分析：</strong>
$$f(x) = x^2，\\text{定义域为}(-\\infty, +\\infty)$$
$$g(x) = (\\sqrt{x})^2 = x，\\text{定义域为}[0, +\\infty)$$
定义域不同，不是同一函数

<strong>选项B分析：</strong>
$$f(x) = \\sqrt[3]{x^3} = x，\\text{定义域为}(-\\infty, +\\infty)$$
$$g(x) = x，\\text{定义域为}(-\\infty, +\\infty)$$
定义域相同，对应法则相同，是同一函数

<strong>选项C分析：</strong>
$$f(x) = x+1，\\text{定义域为}(-\\infty, +\\infty)$$
$$g(x) = \\frac{x^2-1}{x-1}，\\text{定义域为}(-\\infty,1)\\cup(1,+\\infty)$$
定义域不同，不是同一函数

<strong>选项D分析：</strong>
$$f(x) = \\ln x^2，\\text{定义域为}(-\\infty,0)\\cup(0,+\\infty)$$
$$g(x) = 2\\ln x，\\text{定义域为}(0,+\\infty)$$
定义域不同，不是同一函数`,
    answer: "B",
    difficulty: "medium",
    category: "函数基础",
    method: "函数相同性判断"
  },
  {
    id: 13,
    type: "选择题",
    title: "函数表达式",
    question: "已知$f\\left(\\frac{1}{x}\\right) = \\frac{(1+x)^2}{x^2}$，则$f(x) =$（ ）\nA. $\\frac{x^2}{x+1}$ B. $\\frac{x+1}{x^2}$ C. $(1+x)^2$ D. $(1-x)^2$",
    essence: "这道题考查函数表达式的求解，使用换元法。通过设 $t = \\frac{1}{x}$，将复合函数转化为简单函数形式。",
    explanation: `<strong>方法：换元法</strong>

<strong>第一步：设置换元</strong>
$$\\text{令}t = \\frac{1}{x}，\\text{则}x = \\frac{1}{t}$$

<strong>第二步：代入原式</strong>
$$f(t) = \\frac{\\left(1+\\frac{1}{t}\\right)^2}{\\left(\\frac{1}{t}\\right)^2} = \\frac{\\left(\\frac{t+1}{t}\\right)^2}{\\frac{1}{t^2}} = \\frac{(t+1)^2}{t^2} \\cdot t^2 = (1+t)^2$$

<strong>第三步：得出结论</strong>
$$f(x) = (1+x)^2$$`,
    answer: "C",
    difficulty: "medium",
    category: "函数基础",
    method: "换元法"
  },
  {
    id: 14,
    type: "选择题",
    title: "函数值域",
    question: "函数$f(x) = \\sqrt{4-x^2}$的值域是（ ）\nA. $[0, 2]$ B. $[0, 4]$ C. $[-2, 2]$ D. $[0, +\\infty)$",
    essence: "这道题考查函数值域的求解。对于 $f(x) = \\sqrt{4-x^2}$，需要先确定定义域，然后分析函数在定义域内的取值范围。",
    explanation: `<strong>第一步：确定定义域</strong>
$$4-x^2 \\geq 0 \\Rightarrow x^2 \\leq 4 \\Rightarrow -2 \\leq x \\leq 2$$

<strong>第二步：分析函数性质</strong>
$$f(x) = \\sqrt{4-x^2}$$
当$x = 0$时，$f(0) = \\sqrt{4} = 2$（最大值）
当$x = \\pm 2$时，$f(\\pm 2) = \\sqrt{0} = 0$（最小值）

<strong>第三步：确定值域</strong>
由于$4-x^2$在$[-2, 2]$上的取值范围是$[0, 4]$，所以$\\sqrt{4-x^2}$的取值范围是$[0, 2]$

<strong>第四步：得出结论</strong>
值域为$[0, 2]$`,
    answer: "A",
    difficulty: "medium",
    category: "函数基础",
    method: "函数值域求解"
  },

  // 函数性质类题目
  {
    id: 15,
    type: "选择题",
    title: "奇偶性判断",
    question: "函数$f(x) = x^3 + x$的奇偶性是（ ）\nA. 奇函数 B. 偶函数 C. 非奇非偶 D. 既是奇函数又是偶函数",
    essence: "这道题考查函数奇偶性的判断。奇函数满足 $f(-x) = -f(x)$，偶函数满足 $f(-x) = f(x)$。需要计算 $f(-x)$ 并与 $f(x)$ 比较。",
    explanation: `<strong>第一步：应用奇偶性定义</strong>
奇函数：$f(-x) = -f(x)$
偶函数：$f(-x) = f(x)$

<strong>第二步：计算$f(-x)$</strong>
$$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x)$$

<strong>第三步：判断奇偶性</strong>
由于$f(-x) = -f(x)$，所以$f(x)$是奇函数

<strong>第四步：得出结论</strong>
$f(x) = x^3 + x$是奇函数`,
    answer: "A",
    difficulty: "easy",
    category: "函数性质",
    method: "奇偶性判断"
  },
  {
    id: 16,
    type: "选择题",
    title: "单调性分析",
    question: "函数$f(x) = x^2 - 2x + 1$在区间$(-\\infty, 1]$上的单调性是（ ）\nA. 单调递增 B. 单调递减 C. 先增后减 D. 先减后增",
    essence: "这道题考查函数单调性的分析。可以通过配方、求导或分析函数性质来判断函数在指定区间内的单调性。",
    explanation: `<strong>第一步：配方</strong>
$$f(x) = x^2 - 2x + 1 = (x-1)^2$$

<strong>第二步：分析函数性质</strong>
$f(x) = (x-1)^2$是开口向上的抛物线，顶点在$(1, 0)$

<strong>第三步：确定单调性</strong>
- 当$x < 1$时，$x-1 < 0$，随着$x$增大，$(x-1)^2$减小
- 当$x > 1$时，$x-1 > 0$，随着$x$增大，$(x-1)^2$增大

<strong>第四步：得出结论</strong>
在区间$(-\\infty, 1]$上，函数单调递减`,
    answer: "B",
    difficulty: "medium",
    category: "函数性质",
    method: "单调性分析"
  },
  {
    id: 17,
    type: "选择题",
    title: "反函数求解",
    question: "函数$f(x) = 2x + 3$的反函数是（ ）\nA. $f^{-1}(x) = \\frac{x-3}{2}$ B. $f^{-1}(x) = \\frac{x+3}{2}$ C. $f^{-1}(x) = 2x-3$ D. $f^{-1}(x) = \\frac{x}{2}-3$",
    essence: "这道题考查反函数的求解方法。反函数的求解步骤：1）设 $y = f(x)$；2）交换 $x$ 和 $y$；3）解出 $y$；4）写出反函数表达式。",
    explanation: `<strong>第一步：设$y = f(x)$</strong>
$$y = 2x + 3$$

<strong>第二步：交换$x$和$y$</strong>
$$x = 2y + 3$$

<strong>第三步：解出$y$</strong>
$$x = 2y + 3$$
$$x - 3 = 2y$$
$$y = \\frac{x-3}{2}$$

<strong>第四步：写出反函数</strong>
$$f^{-1}(x) = \\frac{x-3}{2}$$

<strong>第五步：验证</strong>
$$f(f^{-1}(x)) = f\\left(\\frac{x-3}{2}\\right) = 2 \\cdot \\frac{x-3}{2} + 3 = x-3+3 = x \\checkmark$$

<strong>第六步：得出结论</strong>
反函数为$f^{-1}(x) = \\frac{x-3}{2}$`,
    answer: "A",
    difficulty: "easy",
    category: "函数性质",
    method: "反函数求解"
  },
  {
    id: 18,
    type: "选择题",
    title: "复合函数",
    question: "设$f(x) = x^2$，$g(x) = x+1$，则$(f \\circ g)(x) =$（ ）\nA. $x^2 + 1$ B. $(x+1)^2$ C. $x^2 + 2x + 1$ D. $x^2 + x + 1$",
    essence: "这道题考查复合函数的运算。复合函数 $(f \\circ g)(x) = f(g(x))$，需要先计算内层函数 $g(x)$，再将结果代入外层函数 $f(x)$。",
    explanation: `<strong>第一步：理解复合函数定义</strong>
$$(f \\circ g)(x) = f(g(x))$$

<strong>第二步：代入$g(x)$</strong>
$$(f \\circ g)(x) = f(x+1)$$

<strong>第三步：应用$f(x) = x^2$</strong>
$$f(x+1) = (x+1)^2$$

<strong>第四步：展开</strong>
$$(x+1)^2 = x^2 + 2x + 1$$

<strong>第五步：得出结论</strong>
$(f \\circ g)(x) = (x+1)^2 = x^2 + 2x + 1$`,
    answer: "C",
    difficulty: "easy",
    category: "函数性质",
    method: "复合函数运算"
  },
 
  // 基本初等函数类题目
  {
    id: 19,
    type: "选择题",
    title: "幂函数性质",
    question: "函数$f(x) = x^{\\frac{1}{3}}$的图像经过点（ ）\nA. $(1, 1)$ B. $(0, 0)$ C. $(-1, -1)$ D. 以上都是",
    essence: "这道题考查幂函数的基本性质。$f(x) = x^{\\frac{1}{3}} = \\sqrt[3]{x}$ 是奇函数，定义域为 $\\mathbb{R}$，值域为 $\\mathbb{R}$，图像经过原点。",
    explanation: `<strong>第一步：分析幂函数</strong>
$$f(x) = x^{\\frac{1}{3}} = \\sqrt[3]{x}$$

<strong>第二步：验证各点</strong>
- $f(1) = 1^{\\frac{1}{3}} = 1$，经过$(1, 1)$ ✓
- $f(0) = 0^{\\frac{1}{3}} = 0$，经过$(0, 0)$ ✓  
- $f(-1) = (-1)^{\\frac{1}{3}} = -1$，经过$(-1, -1)$ ✓

<strong>第三步：分析函数性质</strong>
$f(x) = \\sqrt[3]{x}$是奇函数，定义域为$\\mathbb{R}$，值域为$\\mathbb{R}$

<strong>第四步：得出结论</strong>
函数经过所有三个点`,
    answer: "D",
    difficulty: "easy",
    category: "基本初等函数",
    method: "幂函数性质"
  },
  {
    id: 20,
    type: "选择题",
    title: "指数函数性质",
    question: "函数$f(x) = 2^x$与$g(x) = \\left(\\frac{1}{2}\\right)^x$的关系是（ ）\nA. 相同函数 B. 关于$x$轴对称 C. 关于$y$轴对称 D. 关于原点对称",
    essence: "这道题考查指数函数的对称性质。当 $g(x) = f(-x)$ 时，$g(x)$ 的图像是 $f(x)$ 关于 $y$ 轴的对称图形。需要分析 $g(x) = \\left(\\frac{1}{2}\\right)^x = 2^{-x}$ 与 $f(x) = 2^x$ 的关系。",
    explanation: `<strong>第一步：分析两个函数</strong>
$$f(x) = 2^x, \\quad g(x) = \\left(\\frac{1}{2}\\right)^x = 2^{-x}$$

<strong>第二步：比较函数关系</strong>
$$g(x) = 2^{-x} = f(-x)$$

<strong>第三步：确定对称关系</strong>
当$g(x) = f(-x)$时，$g(x)$的图像是$f(x)$关于$y$轴的对称图形

<strong>第四步：验证</strong>
- $f(1) = 2^1 = 2$，$g(-1) = 2^{-(-1)} = 2^1 = 2$ ✓
- $f(2) = 2^2 = 4$，$g(-2) = 2^{-(-2)} = 2^2 = 4$ ✓

<strong>第五步：得出结论</strong>
两个函数关于$y$轴对称`,
    answer: "C",
    difficulty: "medium",
    category: "基本初等函数",
    method: "指数函数性质"
  },
  {
    id: 21,
    type: "选择题",
    title: "对数函数定义域",
    question: "函数$f(x) = \\log_2(x-1)$的定义域是（ ）\nA. $(0, +\\infty)$ B. $(1, +\\infty)$ C. $[1, +\\infty)$ D. $(-\\infty, 1)$",
    essence: "这道题考查对数函数定义域的求解。对于 $\\log_a u(x)$，需要 $u(x) > 0$。需要解不等式 $x-1 > 0$ 来确定定义域。",
    explanation: `<strong>第一步：分析对数函数定义域</strong>
对于$\\log_a u(x)$，需要$u(x) > 0$

<strong>第二步：确定条件</strong>
$$f(x) = \\log_2(x-1)$$
需要$x-1 > 0$

<strong>第三步：解不等式</strong>
$$x-1 > 0 \\Rightarrow x > 1$$

<strong>第四步：用区间表示</strong>
定义域为$(1, +\\infty)$

<strong>第五步：验证</strong>
- 当$x = 2$时：$f(2) = \\log_2(2-1) = \\log_2 1 = 0$ ✓
- 当$x = 1$时：$f(1) = \\log_2(1-1) = \\log_2 0$无意义 ✗

<strong>第六步：得出结论</strong>
定义域为$(1, +\\infty)$`,
    answer: "B",
    difficulty: "easy",
    category: "基本初等函数",
    method: "对数函数定义域"
  },
  {
    id: 22,
    type: "选择题",
    title: "三角函数值",
    question: "计算$\\sin\\frac{\\pi}{6} + \\cos\\frac{\\pi}{3}$的值（ ）\nA. $\\frac{1}{2}$ B. $1$ C. $\\frac{\\sqrt{3}}{2}$ D. $\\frac{1+\\sqrt{3}}{2}$",
    essence: "这道题考查三角函数特殊值的计算。需要记忆或查表得到 $\\sin 30° = \\frac{1}{2}$ 和 $\\cos 60° = \\frac{1}{2}$，然后相加。",
    explanation: `<strong>第一步：查表或记忆特殊角值</strong>
$$\\sin\\frac{\\pi}{6} = \\sin 30° = \\frac{1}{2}$$
$$\\cos\\frac{\\pi}{3} = \\cos 60° = \\frac{1}{2}$$

<strong>第二步：计算和</strong>
$$\\sin\\frac{\\pi}{6} + \\cos\\frac{\\pi}{3} = \\frac{1}{2} + \\frac{1}{2} = 1$$

<strong>第三步：验证</strong>
- $\\sin 30° = \\frac{1}{2}$ ✓
- $\\cos 60° = \\frac{1}{2}$ ✓
- $\\frac{1}{2} + \\frac{1}{2} = 1$ ✓

<strong>第四步：得出结论</strong>
答案为$1$`,
    answer: "B",
    difficulty: "easy",
    category: "基本初等函数",
    method: "三角函数特殊值"
  },
  {
    id: 23,
    type: "选择题",
    title: "反三角函数",
    question: "函数$f(x) = \\arcsin x$的值域是（ ）\nA. $[0, \\pi]$ B. $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ C. $[-1, 1]$ D. $(-\\infty, +\\infty)$",
    essence: "这道题考查反三角函数的性质。$\\arcsin x$ 是 $\\sin x$ 在 $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ 上的反函数，其值域为 $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$。",
    explanation: `<strong>第一步：理解反三角函数定义</strong>
$\\arcsin x$是$\\sin x$在$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$上的反函数

<strong>第二步：分析定义域和值域</strong>
- 定义域：$[-1, 1]$（因为$\\sin x$的值域是$[-1, 1]$）
- 值域：$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$（因为$\\sin x$在$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$上单调）

<strong>第三步：验证</strong>
- $\\arcsin 0 = 0$，$0 \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ ✓
- $\\arcsin 1 = \\frac{\\pi}{2}$，$\\frac{\\pi}{2} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ ✓
- $\\arcsin(-1) = -\\frac{\\pi}{2}$，$-\\frac{\\pi}{2} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ ✓

<strong>第四步：得出结论</strong>
$\\arcsin x$的值域是$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$`,
    answer: "B",
    difficulty: "medium",
    category: "基本初等函数",
    method: "反三角函数性质"
  },
  {
    id: 24,
    type: "选择题",
    title: "函数综合应用",
    question: "函数$f(x) = e^{\\ln x}$的定义域是（ ）\nA. $\\mathbb{R}$ B. $(0, +\\infty)$ C. $[0, +\\infty)$ D. $(-\\infty, 0) \\cup (0, +\\infty)$",
    essence: "这道题考查复合函数定义域的求解。对于 $f(x) = e^{\\ln x}$，需要内层函数 $\\ln x$ 有意义，即 $x > 0$。虽然 $e^{\\ln x} = x$，但定义域仍受内层函数限制。",
    explanation: `<strong>第一步：分析复合函数</strong>
$$f(x) = e^{\\ln x}$$

<strong>第二步：确定内层函数定义域</strong>
$\\ln x$的定义域是$(0, +\\infty)$

<strong>第三步：分析外层函数</strong>
$e^u$的定义域是$\\mathbb{R}$，但这里$u = \\ln x$，所以需要$\\ln x$有意义

<strong>第四步：确定复合函数定义域</strong>
由于$\\ln x$要求$x > 0$，所以$f(x) = e^{\\ln x}$的定义域是$(0, +\\infty)$

<strong>第五步：简化函数</strong>
$$f(x) = e^{\\ln x} = x$$（当$x > 0$时）

<strong>第六步：得出结论</strong>
定义域为$(0, +\\infty)$`,
    answer: "B",
    difficulty: "hard",
    category: "基本初等函数",
    method: "复合函数定义域"
  },
  {
    id: 25,
    type: "选择题",
    title: "函数图像变换",
    question: "函数$y = 2^x$的图像向右平移2个单位，再向上平移1个单位后，得到的函数是（ ）\nA. $y = 2^{x-2} + 1$ B. $y = 2^{x+2} + 1$ C. $y = 2^{x-2} - 1$ D. $y = 2^{x+2} - 1$",
    essence: "这道题考查函数图像变换的规律。向右平移 $a$ 个单位：$y = f(x-a)$；向上平移 $b$ 个单位：$y = f(x) + b$。需要按顺序应用这两个变换。",
    explanation: `<strong>第一步：分析图像变换</strong>
原函数：$y = 2^x$

<strong>第二步：向右平移2个单位</strong>
$y = f(x-2) = 2^{x-2}$

<strong>第三步：向上平移1个单位</strong>
$y = f(x-2) + 1 = 2^{x-2} + 1$

<strong>第四步：验证变换</strong>
- 原函数过点$(0, 1)$
- 向右平移2个单位后过点$(2, 1)$
- 向上平移1个单位后过点$(2, 2)$
- 验证：$y = 2^{2-2} + 1 = 2^0 + 1 = 1 + 1 = 2$ ✓

<strong>第五步：得出结论</strong>
变换后的函数为$y = 2^{x-2} + 1$`,
    answer: "A",
    difficulty: "medium",
    category: "基本初等函数",
    method: "函数图像变换"
  },
  {
    id: 26,
    type: "选择题",
    title: "复合函数定义域",
    question: "设$f(x) = \\sqrt{x}$，$g(x) = x^2 - 1$，则复合函数$(f \\circ g)(x)$的定义域是（ ）\nA. $(-\\infty, -1] \\cup [1, +\\infty)$ B. $[-1, 1]$ C. $(-1, 1)$ D. $\\mathbb{R}$",
    essence: "这道题考查复合函数定义域的求解。对于 $(f \\circ g)(x) = f(g(x))$，需要满足 $g(x)$ 在 $f$ 的定义域内。需要解不等式 $g(x) \\geq 0$ 来确定复合函数的定义域。",
    explanation: `<strong>第一步：分析复合函数</strong>
$$(f \\circ g)(x) = f(g(x)) = \\sqrt{x^2 - 1}$$

<strong>第二步：确定内层函数$g(x)$的定义域</strong>
$g(x) = x^2 - 1$的定义域是$\\mathbb{R}$

<strong>第三步：确定外层函数$f(u)$的定义域</strong>
$f(u) = \\sqrt{u}$的定义域是$u \\geq 0$

<strong>第四步：求复合函数定义域</strong>
需要$g(x) \\geq 0$，即$x^2 - 1 \\geq 0$

<strong>第五步：解不等式</strong>
$$x^2 - 1 \\geq 0$$
$$x^2 \\geq 1$$
$$|x| \\geq 1$$
$$x \\leq -1 \\text{ 或 } x \\geq 1$$

<strong>第六步：得出结论</strong>
定义域为$(-\\infty, -1] \\cup [1, +\\infty)$`,
    answer: "A",
    difficulty: "medium",
    category: "函数性质",
    method: "复合函数定义域"
  },
  {
    id: 27,
    type: "选择题",
    title: "复合函数运算",
    question: "设$f(x) = \\frac{1}{x}$，$g(x) = x + 2$，则$(g \\circ f)(x) =$（ ）\nA. $\\frac{1}{x+2}$ B. $\\frac{1}{x} + 2$ C. $\\frac{x+2}{x}$ D. $\\frac{1}{x+2}$",
    essence: "这道题考查复合函数的运算。复合函数 $(g \\circ f)(x) = g(f(x))$，需要先计算内层函数 $f(x)$，再将结果代入外层函数 $g(x)$。",
    explanation: `<strong>第一步：理解复合函数定义</strong>
$$(g \\circ f)(x) = g(f(x))$$

<strong>第二步：代入$f(x)$</strong>
$$(g \\circ f)(x) = g\\left(\\frac{1}{x}\\right)$$

<strong>第三步：应用$g(x) = x + 2$</strong>
$$g\\left(\\frac{1}{x}\\right) = \\frac{1}{x} + 2$$

<strong>第四步：通分</strong>
$$\\frac{1}{x} + 2 = \\frac{1}{x} + \\frac{2x}{x} = \\frac{1 + 2x}{x}$$

<strong>第五步：得出结论</strong>
$(g \\circ f)(x) = \\frac{1}{x} + 2 = \\frac{1 + 2x}{x}$`,
    answer: "B",
    difficulty: "easy",
    category: "函数性质",
    method: "复合函数运算"
  },
  {
    id: 28,
    type: "选择题",
    title: "复合函数求值",
    question: "设$f(x) = 2x + 1$，$g(x) = x^2$，则$(f \\circ g)(2) =$（ ）\nA. $9$ B. $17$ C. $5$ D. $13$",
    essence: "这道题考查复合函数的求值。对于 $(f \\circ g)(x) = f(g(x))$，需要先计算内层函数 $g(x)$ 的值，再将结果代入外层函数 $f(x)$ 计算。",
    explanation: `<strong>第一步：理解复合函数</strong>
$$(f \\circ g)(x) = f(g(x)) = f(x^2)$$

<strong>第二步：代入$x = 2$</strong>
$$(f \\circ g)(2) = f(g(2)) = f(2^2) = f(4)$$

<strong>第三步：计算$f(4)$</strong>
$$f(4) = 2 \\times 4 + 1 = 8 + 1 = 9$$

<strong>第四步：验证</strong>
$$g(2) = 2^2 = 4$$
$$f(4) = 2 \\times 4 + 1 = 9$$

<strong>第五步：得出结论</strong>
$(f \\circ g)(2) = 9$`,
    answer: "A",
    difficulty: "easy",
    category: "函数性质",
    method: "复合函数求值"
  },
  {
    id: 29,
    type: "选择题",
    title: "复合函数定义域（对数）",
    question: "设$f(x) = \\ln x$，$g(x) = x^2 - 4$，则复合函数$(f \\circ g)(x)$的定义域是（ ）\nA. $(-\\infty, -2) \\cup (2, +\\infty)$ B. $[-2, 2]$ C. $(-2, 2)$ D. $\\mathbb{R}$",
    essence: "这道题考查含对数函数的复合函数定义域求解。对于 $(f \\circ g)(x) = \\ln(g(x))$，需要满足 $g(x) > 0$。需要解不等式 $x^2 - 4 > 0$ 来确定定义域。",
    explanation: `<strong>第一步：分析复合函数</strong>
$$(f \\circ g)(x) = f(g(x)) = \\ln(x^2 - 4)$$

<strong>第二步：确定内层函数$g(x)$的定义域</strong>
$g(x) = x^2 - 4$的定义域是$\\mathbb{R}$

<strong>第三步：确定外层函数$f(u)$的定义域</strong>
$f(u) = \\ln u$的定义域是$u > 0$

<strong>第四步：求复合函数定义域</strong>
需要$g(x) > 0$，即$x^2 - 4 > 0$

<strong>第五步：解不等式</strong>
$$x^2 - 4 > 0$$
$$x^2 > 4$$
$$|x| > 2$$
$$x < -2 \\text{ 或 } x > 2$$

<strong>第六步：得出结论</strong>
定义域为$(-\\infty, -2) \\cup (2, +\\infty)$`,
    answer: "A",
    difficulty: "medium",
    category: "函数性质",
    method: "复合函数定义域"
  },
  {
    id: 30,
    type: "选择题",
    title: "复合函数运算（三角函数）",
    question: "设$f(x) = \\sin x$，$g(x) = 2x$，则$(f \\circ g)(x) =$（ ）\nA. $\\sin(2x)$ B. $2\\sin x$ C. $\\sin^2 x$ D. $\\sin(x^2)$",
    essence: "这道题考查三角函数的复合函数运算。复合函数 $(f \\circ g)(x) = f(g(x))$，需要先计算内层函数 $g(x)$，再将结果代入外层函数 $f(x)$。",
    explanation: `<strong>第一步：理解复合函数定义</strong>
$$(f \\circ g)(x) = f(g(x))$$

<strong>第二步：代入$g(x)$</strong>
$$(f \\circ g)(x) = f(2x)$$

<strong>第三步：应用$f(x) = \\sin x$</strong>
$$f(2x) = \\sin(2x)$$

<strong>第四步：验证</strong>
$$g(x) = 2x$$
$$f(g(x)) = f(2x) = \\sin(2x)$$

<strong>第五步：得出结论</strong>
$(f \\circ g)(x) = \\sin(2x)$`,
    answer: "A",
    difficulty: "easy",
    category: "函数性质",
    method: "复合函数运算"
  },
  {
    id: 31,
    type: "选择题",
    title: "复合函数求值（指数）",
    question: "设$f(x) = e^x$，$g(x) = \\ln x$，则$(f \\circ g)(e) =$（ ）\nA. $e$ B. $1$ C. $e^e$ D. $\\ln e$",
    essence: "这道题考查指数函数和对数函数的复合函数求值。需要先计算内层函数 $g(e) = \\ln e = 1$，再将结果代入外层函数 $f(1) = e^1 = e$。",
    explanation: `<strong>第一步：理解复合函数</strong>
$$(f \\circ g)(x) = f(g(x)) = f(\\ln x)$$

<strong>第二步：代入$x = e$</strong>
$$(f \\circ g)(e) = f(g(e)) = f(\\ln e)$$

<strong>第三步：计算$\\ln e$</strong>
$$\\ln e = 1$$

<strong>第四步：计算$f(1)$</strong>
$$f(1) = e^1 = e$$

<strong>第五步：验证</strong>
$$g(e) = \\ln e = 1$$
$$f(1) = e^1 = e$$

<strong>第六步：得出结论</strong>
$(f \\circ g)(e) = e$`,
    answer: "A",
    difficulty: "medium",
    category: "函数性质",
    method: "复合函数求值"
  },
  {
    id: 32,
    type: "选择题",
    title: "复合函数定义域（分式）",
    question: "设$f(x) = \\frac{1}{x}$，$g(x) = x^2 - 1$，则复合函数$(f \\circ g)(x)$的定义域是（ ）\nA. $x \\neq \\pm 1$ B. $x \\neq 0$ C. $x \\neq 1$ D. $x \\neq -1$",
    essence: "这道题考查含分式函数的复合函数定义域求解。对于 $(f \\circ g)(x) = \\frac{1}{g(x)}$，需要满足 $g(x) \\neq 0$。需要解不等式 $x^2 - 1 \\neq 0$ 来确定定义域。",
    explanation: `<strong>第一步：分析复合函数</strong>
$$(f \\circ g)(x) = f(g(x)) = \\frac{1}{x^2 - 1}$$

<strong>第二步：确定内层函数$g(x)$的定义域</strong>
$g(x) = x^2 - 1$的定义域是$\\mathbb{R}$

<strong>第三步：确定外层函数$f(u)$的定义域</strong>
$f(u) = \\frac{1}{u}$的定义域是$u \\neq 0$

<strong>第四步：求复合函数定义域</strong>
需要$g(x) \\neq 0$，即$x^2 - 1 \\neq 0$

<strong>第五步：解不等式</strong>
$$x^2 - 1 \\neq 0$$
$$x^2 \\neq 1$$
$$x \\neq \\pm 1$$

<strong>第六步：得出结论</strong>
定义域为$x \\neq \\pm 1$，即$(-\\infty, -1) \\cup (-1, 1) \\cup (1, +\\infty)$`,
    answer: "A",
    difficulty: "medium",
    category: "函数性质",
    method: "复合函数定义域"
  },
  {
    id: 33,
    type: "选择题",
    title: "复合函数运算（幂函数）",
    question: "设$f(x) = x^3$，$g(x) = x + 1$，则$(f \\circ g)(x) =$（ ）\nA. $x^3 + 1$ B. $(x+1)^3$ C. $x^3 + 3x^2 + 3x + 1$ D. $x^3 + x + 1$",
    essence: "这道题考查幂函数的复合函数运算。复合函数 $(f \\circ g)(x) = f(g(x))$，需要先计算内层函数 $g(x)$，再将结果代入外层函数 $f(x)$，最后展开多项式。",
    explanation: `<strong>第一步：理解复合函数定义</strong>
$$(f \\circ g)(x) = f(g(x))$$

<strong>第二步：代入$g(x)$</strong>
$$(f \\circ g)(x) = f(x+1)$$

<strong>第三步：应用$f(x) = x^3$</strong>
$$f(x+1) = (x+1)^3$$

<strong>第四步：展开立方</strong>
$$(x+1)^3 = x^3 + 3x^2 + 3x + 1$$

<strong>第五步：验证</strong>
使用二项式定理：$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$
当$a = x$，$b = 1$时：
$$(x+1)^3 = x^3 + 3x^2 \\cdot 1 + 3x \\cdot 1^2 + 1^3 = x^3 + 3x^2 + 3x + 1$$

<strong>第六步：得出结论</strong>
$(f \\circ g)(x) = (x+1)^3 = x^3 + 3x^2 + 3x + 1$`,
    answer: "C",
    difficulty: "medium",
    category: "函数性质",
    method: "复合函数运算"
  },
  {
    id: 34,
    type: "选择题",
    title: "复合函数求值（对数）",
    question: "设$f(x) = \\log_2 x$，$g(x) = 2^x$，则$(f \\circ g)(3) =$（ ）\nA. $3$ B. $6$ C. $8$ D. $9$",
    essence: "这道题考查对数函数和指数函数的复合函数求值。需要先计算内层函数 $g(3) = 2^3 = 8$，再将结果代入外层函数 $f(8) = \\log_2 8 = 3$。",
    explanation: `<strong>第一步：理解复合函数</strong>
$$(f \\circ g)(x) = f(g(x)) = f(2^x)$$

<strong>第二步：代入$x = 3$</strong>
$$(f \\circ g)(3) = f(g(3)) = f(2^3) = f(8)$$

<strong>第三步：计算$f(8)$</strong>
$$f(8) = \\log_2 8$$

<strong>第四步：计算对数</strong>
$$\\log_2 8 = \\log_2 2^3 = 3$$

<strong>第五步：验证</strong>
$$g(3) = 2^3 = 8$$
$$f(8) = \\log_2 8 = 3$$

<strong>第六步：得出结论</strong>
$(f \\circ g)(3) = 3$`,
    answer: "A",
    difficulty: "medium",
    category: "函数性质",
    method: "复合函数求值"
  },
  {
    id: 35,
    type: "选择题",
    title: "复合函数定义域（根式）",
    question: "设$f(x) = \\sqrt{x}$，$g(x) = \\ln x$，则复合函数$(f \\circ g)(x)$的定义域是（ ）\nA. $(0, +\\infty)$ B. $[1, +\\infty)$ C. $(1, +\\infty)$ D. $[0, +\\infty)$",
    essence: "这道题考查含根式函数和对数函数的复合函数定义域求解。对于 $(f \\circ g)(x) = \\sqrt{\\ln x}$，需要同时满足 $\\ln x$ 有意义（$x > 0$）和 $\\ln x \\geq 0$（$x \\geq 1$）。",
    explanation: `<strong>第一步：分析复合函数</strong>
$$(f \\circ g)(x) = f(g(x)) = \\sqrt{\\ln x}$$

<strong>第二步：确定内层函数$g(x)$的定义域</strong>
$g(x) = \\ln x$的定义域是$(0, +\\infty)$

<strong>第三步：确定外层函数$f(u)$的定义域</strong>
$f(u) = \\sqrt{u}$的定义域是$u \\geq 0$

<strong>第四步：求复合函数定义域</strong>
需要$g(x) \\geq 0$，即$\\ln x \\geq 0$

<strong>第五步：解不等式</strong>
$$\\ln x \\geq 0$$
$$x \\geq e^0 = 1$$

<strong>第六步：结合内层函数定义域</strong>
内层函数要求$x > 0$，外层函数要求$x \\geq 1$
所以复合函数定义域为$[1, +\\infty)$

<strong>第七步：得出结论</strong>
定义域为$[1, +\\infty)$`,
    answer: "B",
    difficulty: "hard",
    category: "函数性质",
    method: "复合函数定义域"
  },

{
    id: 36,

    type: "判断题",

    title: "函数有界性",

    question: "判断函数 $\\cos x$ 在 $(-\\infty, +\\infty)$ 内是否有界",

    essence: "这道题考查三角函数的有界性。余弦函数的值域是[-1,1]，因此在整个定义域内有界。",

    explanation: `<strong>第一步：回顾余弦函数的性质</strong>

  余弦函数 $y = \\cos x$ 的值域为 $[-1,1]$

  

  <strong>第二步：判断有界性</strong>

  对于任意 $x \\in (-\\infty, +\\infty)$，都有：

  $$-1 \\le \\cos x \\le 1$$

  

  <strong>第三步：得出结论</strong>

  存在常数 $M = 1$，使得 $|\\cos x| \\le M$ 对所有 $x$ 成立

  

  因此，函数 $\\cos x$ 在 $(-\\infty, +\\infty)$ 内是有界的

  

  <strong>定义：</strong>若存在常数M>0，使得对定义域内所有x，都有|f(x)|≤M，则称函数f(x)有界`,

    answer: "有界",

    difficulty: "easy",

    category: "函数性质",

    method: "有界性判断"

  },

{
    id: 37,

    type: "说明题",

    title: "函数单调性分析",

    question: "说明函数 $f(x) = x^2$ 在不同区间上的单调性",

    essence: "这道题考查二次函数的单调性。通过导数或函数性质分析函数在不同区间上的单调性。",

    explanation: `<strong>第一步：分析函数类型</strong>

  $f(x) = x^2$ 是二次函数，开口向上，对称轴为 $x=0$

  

  <strong>第二步：利用导数判断</strong>

  $$f'(x) = 2x$$

  

  当 $x < 0$ 时，$f'(x) < 0$，函数单调递减

  当 $x > 0$ 时，$f'(x) > 0$，函数单调递增

  

  <strong>第三步：得出结论</strong>

  - 在区间 $(-\\infty, 0)$ 上，函数 $f(x) = x^2$ 单调递减

  - 在区间 $(0, +\\infty)$ 上，函数 $f(x) = x^2$ 单调递增

  - $x = 0$ 是函数的最小值点，$f(0) = 0$

  

  <strong>几何意义：</strong>抛物线在对称轴左侧递减，右侧递增`,

    answer: "在$(-\\infty, 0)$上单调递减，在$(0, +\\infty)$上单调递增",

    difficulty: "easy",

    category: "函数性质",

    method: "单调性分析"

  },


{
    id: 38,

    type: "判断题",

    title: "复合函数定义域",

    question: "判断函数 $y = \\arcsin u$ 与 $u = 2 + x^2$ 能否复合成函数",

    essence: "这道题考查复合函数的定义域条件。内层函数的值域必须在外层函数的定义域内，才能复合。",

    explanation: `<strong>第一步：分析内层函数</strong>

  $u = 2 + x^2$ 的定义域为 $(-\\infty, +\\infty)$

  对任何 $x$，都有 $u \\ge 2$

  

  <strong>第二步：分析外层函数</strong>

  $y = \\arcsin u$ 的定义域为 $[-1, 1]$

  要求 $-1 \\le u \\le 1$

  

  <strong>第三步：判断能否复合</strong>

  内层函数值域：$[2, +\\infty)$

  外层函数定义域：$[-1, 1]$

  两者没有交集

  

  <strong>第四步：得出结论</strong>

  因为 $u = 2 + x^2$ 的所有值都大于或等于2，使得 $y = \\arcsin u$ 都没有定义

  所以这两个函数不能复合

  

  <strong>复合条件：</strong>$y = f(u)$ 与 $u = g(x)$ 能复合的条件是 $g$ 的值域 $\\subseteq$ $f$ 的定义域`,

    answer: "不能复合",

    difficulty: "medium",

    category: "函数性质",

    method: "复合函数定义域"

  },

{
    id: 39,

    type: "判断题",

    title: "初等函数判定",

    question: "判断 $y = 2^{\\cos x} + \\ln(\\sqrt[3]{4^{3x} + 3} + \\sin 8x)$ 和 $y = |x|$ 是否为初等函数",

    essence: "这道题考查初等函数的定义。初等函数是由基本初等函数经有限次四则运算和复合而成的函数。",

    explanation: `<strong>第一步：分析第一个函数</strong>

  $y = 2^{\\cos x} + \\ln(\\sqrt[3]{4^{3x} + 3} + \\sin 8x)$

  

  包含的基本初等函数：

  - 指数函数：$2^u$、$4^{3x}$

  - 三角函数：$\\cos x$、$\\sin 8x$

  - 对数函数：$\\ln u$

  - 幂函数：$\\sqrt[3]{u}$

  

  通过有限次四则运算和复合得到，是初等函数

  

  <strong>第二步：分析第二个函数</strong>

  $y = |x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}$

  

  这是分段函数，不能用基本初等函数通过有限次运算和复合表示

  

  <strong>第三步：得出结论</strong>

  - $y = 2^{\\cos x} + \\ln(\\sqrt[3]{4^{3x} + 3} + \\sin 8x)$ 是初等函数

  - $y = |x|$ 不是初等函数

  

  <strong>定义：</strong>由基本初等函数经有限次四则运算和有限次复合而成的函数称为初等函数`,

    answer: "第一个是初等函数，第二个不是",

    difficulty: "medium",

    category: "函数性质",

    method: "初等函数判定"

  }

];