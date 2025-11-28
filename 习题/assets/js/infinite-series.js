window.exerciseData = {
    exercises: [
        {
            id: 1,
            type: "选择题",
            title: "级数收敛必要条件",
            question: "若级数 $\\sum_{n=1}^{\\infty} u_n$ 收敛，则 $\\lim_{n \\to \\infty} u_n$ （ ）\nA. 等于 0  B. 不等于 0  C. 存在但不一定为 0  D. 不存在",
            essence: "这道题考查级数收敛的必要条件。若级数收敛，则通项趋于 0；反之不成立（如调和级数）。",
            explanation: `<strong>第一步：回顾定理</strong>
级数收敛的必要条件：若 $\\sum_{n=1}^{\\infty} u_n$ 收敛，则 $\\lim_{n \\to \\infty} u_n = 0$。

<strong>第二步：逆否命题</strong>
若 $\\lim_{n \\to \\infty} u_n \\neq 0$，则级数发散。

<strong>第三步：得出结论</strong>
答案为 A`,
            answer: "A",
            difficulty: "easy",
            category: "数项级数",
            method: "性质法"
        },
        {
            id: 2,
            type: "选择题",
            title: "几何级数",
            question: "级数 $\\sum_{n=1}^{\\infty} \\left(\\frac{1}{2}\\right)^n$ 的收敛性为（ ）\nA. 收敛  B. 发散  C. 条件收敛  D. 无法判定",
            essence: "考查几何级数（等比级数）的敛散性：当公比 $|q| < 1$ 时收敛",
            explanation: `<strong>第一步：识别级数类型</strong>
这是几何级数，公比 $q = \\frac{1}{2}$

<strong>第二步：应用判别法</strong>
几何级数 $\\sum q^n$ 当 $|q| < 1$ 时收敛
此处 $|q| = \\frac{1}{2} < 1$

<strong>第三步：计算和</strong>
$$S = \\frac{q}{1-q} = \\frac{1/2}{1-1/2} = \\frac{1/2}{1/2} = 1$$

<strong>第四步：得出结论</strong>
级数收敛，答案为 A`,
            answer: "A",
            difficulty: "easy",
            category: "数项级数",
            method: "几何级数判别法"
        },
        {
            id: 3,
            type: "选择题",
            title: "p-级数",
            question: "级数 $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ 的收敛性为（ ）\nA. 收敛  B. 发散  C. 条件收敛  D. 无法判定",
            essence: "考查p-级数的敛散性：$\\sum \\frac{1}{n^p}$ 当 $p > 1$ 时收敛，$p \\leq 1$ 时发散",
            explanation: `<strong>第一步：识别级数类型</strong>
这是p-级数，$p = 2$

<strong>第二步：应用判别法</strong>
p-级数：
- 当 $p > 1$ 时收敛
- 当 $p \\leq 1$ 时发散

<strong>第三步：判断</strong>
此处 $p = 2 > 1$，级数收敛

<strong>第四步：得出结论</strong>
答案为 A`,
            answer: "A",
            difficulty: "easy",
            category: "数项级数",
            method: "p-级数判别法"
        },
        {
            id: 4,
            type: "选择题",
            title: "调和级数",
            question: "级数 $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ 的收敛性为（ ）\nA. 收敛  B. 发散  C. 条件收敛  D. 绝对收敛",
            essence: "考查调和级数：这是最经典的发散级数",
            explanation: `<strong>第一步：识别级数</strong>
这是调和级数 $\\sum \\frac{1}{n}$

<strong>第二步：应用定理</strong>
调和级数是p-级数中 $p = 1$ 的特殊情况
当 $p = 1$ 时，p-级数发散

<strong>第三步：另一种证明</strong>
可用积分判别法：
$$\\int_1^{\\infty} \\frac{1}{x} dx = \\ln x \\Big|_1^{\\infty} = \\infty$$

<strong>第四步：得出结论</strong>
调和级数发散，答案为 B`,
            answer: "B",
            difficulty: "medium",
            category: "数项级数",
            method: "p-级数判别法"
        },
        {
            id: 5,
            type: "选择题",
            title: "比值判别法",
            question: "用比值判别法判断级数 $\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$ 的收敛性（ ）\nA. 收敛  B. 发散  C. 无法判定  D. 条件收敛",
            essence: "考查比值判别法（达朗贝尔判别法）：计算 $\\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n}$",
            explanation: `<strong>第一步：设通项</strong>
$$u_n = \\frac{2^n}{n!}$$

<strong>第二步：计算比值</strong>
$$\\frac{u_{n+1}}{u_n} = \\frac{2^{n+1}/(n+1)!}{2^n/n!} = \\frac{2^{n+1} \\cdot n!}{2^n \\cdot (n+1)!} = \\frac{2}{n+1}$$

<strong>第三步：求极限</strong>
$$\\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n} = \\lim_{n \\to \\infty} \\frac{2}{n+1} = 0 < 1$$

<strong>第四步：得出结论</strong>
比值小于1，级数收敛，答案为 A`,
            answer: "A",
            difficulty: "medium",
            category: "数项级数",
            method: "比值判别法"
        },
        {
            id: 6,
            type: "选择题",
            title: "交错级数",
            question: "级数 $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ 的收敛性为（ ）\nA. 绝对收敛  B. 条件收敛  C. 发散  D. 无法判定",
            essence: "考查交错级数和条件收敛：该级数收敛但其绝对值级数（调和级数）发散",
            explanation: `<strong>第一步：识别级数类型</strong>
这是交错级数（莱布尼茨级数）

<strong>第二步：检验莱布尼茨判别法条件</strong>
1. $u_n = \\frac{1}{n}$ 单调递减
2. $\\lim_{n \\to \\infty} u_n = 0$
满足条件，级数收敛

<strong>第三步：检验绝对收敛性</strong>
$$\\sum_{n=1}^{\\infty} \\left|\\frac{(-1)^{n+1}}{n}\\right| = \\sum_{n=1}^{\\infty} \\frac{1}{n}$$
这是调和级数，发散

<strong>第四步：得出结论</strong>
级数收敛但不绝对收敛，即条件收敛
答案为 B`,
            answer: "B",
            difficulty: "medium",
            category: "数项级数",
            method: "莱布尼茨判别法"
        },
        {
            id: 7,
            type: "解答题",
            title: "幂级数收敛半径",
            question: "求幂级数 $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ 的收敛半径和收敛域",
            essence: "考查幂级数收敛域的求法：先求收敛半径，再判断端点",
            explanation: `<strong>第一步：求收敛半径</strong>
$$\\rho = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right| = \\lim_{n \\to \\infty} \\frac{1/n}{1/(n+1)} = \\lim_{n \\to \\infty} \\frac{n+1}{n} = 1$$
收敛半径 $R = 1$

<strong>第二步：判断 $x = -1$ 端点</strong>
$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$
这是交错级数，收敛

<strong>第三步：判断 $x = 1$ 端点</strong>
$$\\sum_{n=1}^{\\infty} \\frac{1}{n}$$
这是调和级数，发散

<strong>第四步：得出结论</strong>
收敛域为 $[-1, 1)$`,
            answer: "收敛半径 $R = 1$，收敛域为 $[-1, 1)$",
            difficulty: "hard",
            category: "幂级数",
            method: "比值法+端点判别"
        },
        {
            id: 8,
            type: "选择题",
            title: "傅里叶级数",
            question: "函数 $f(x) = x$（$-\\pi < x < \\pi$）的傅里叶级数在 $x = \\pi$ 处收敛于（ ）\nA. 0  B. $\\pi$  C. $-\\pi$  D. 不收敛",
            essence: "考查傅里叶级数的收敛性：在间断点处收敛于左右极限的平均值",
            explanation: `<strong>第一步：分析函数性质</strong>
$f(x) = x$ 在 $(-\\pi, \\pi)$ 上连续

<strong>第二步：考虑端点</strong>
在 $x = \\pi$ 处（边界点）：
- 左极限：$\\lim_{x \\to \\pi^-} f(x) = \\pi$
- 右极限（周期延拓）：$\\lim_{x \\to \\pi^+} f(x) = -\\pi$

<strong>第三步：应用狄利克雷定理</strong>
傅里叶级数在间断点收敛于左右极限的平均值：
$$S(\\pi) = \\frac{\\pi + (-\\pi)}{2} = 0$$

<strong>第四步：得出结论</strong>
答案为 A`,
            answer: "A",
            difficulty: "hard",
            category: "傅里叶级数",
            method: "狄利克雷定理"
        }
    ],
    knowledgePoints: [
        {
            title: "常见级数敛散性",
            content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #00C896; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #00C896; margin-bottom: 15px; font-size: 1.2rem;">重要级数</h3>
          <p><strong>几何级数</strong> $\\sum q^n$：$|q|<1$ 收敛，$|q| \\geq 1$ 发散。</p>
          <p><strong>P-级数</strong> $\\sum \\frac{1}{n^p}$：$p>1$ 收敛，$p \\leq 1$ 发散。</p>
          <p><strong>调和级数</strong> $\\sum \\frac{1}{n}$：发散。</p>
        </div>
      </div>
      `
        }
    ]
};
