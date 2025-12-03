window.exerciseData = {
    exercises: [
{
            id: 1,
            type: "选择题",
            title: "互斥事件概率",
            question: "设 $A, B$ 为互斥事件，且 $P(A)=0.3, P(B)=0.4$，则 $P(A \\cup B)$ 等于（  ）\nA. 0.12  B. 0.7  C. 0.1  D. 0.5",
            essence: "这道题考查互斥事件概率加法公式。若 $A, B$ 互斥，则 $P(A \\cup B) = P(A) + P(B)$。",
            explanation: `<strong>第一步：回顾公式</strong>
互斥事件加法公式：$P(A \\cup B) = P(A) + P(B)$

<strong>第二步：代入计算</strong>
$P(A \\cup B) = 0.3 + 0.4 = 0.7$

<strong>第三步：得出结论</strong>
答案为 B`,
            answer: "B",
            difficulty: "easy",
            category: "随机事件",
            method: "公式法"
        },
{
            id: 2,
            type: "选择题",
            title: "独立事件概率",
            question: "设 $A, B$ 为两个独立事件，$P(A)=0.6, P(B)=0.5$，则 $P(AB)$ 等于（  ）\nA. 0.11  B. 0.3  C. 0.5  D. 1.1",
            essence: "考查独立事件的乘法公式：若 $A, B$ 独立，则 $P(AB) = P(A) \\cdot P(B)$。",
            explanation: `<strong>第一步：应用独立事件乘法公式</strong>
$$P(AB) = P(A) \\cdot P(B)$$

<strong>第二步：代入计算</strong>
$$P(AB) = 0.6 \\times 0.5 = 0.3$$

<strong>第三步：得出结论</strong>
答案为 B`,
            answer: "B",
            difficulty: "easy",
            category: "概率计算",
            method: "乘法公式"
        },
{
            id: 3,
            type: "选择题",
            title: "条件概率",
            question: "设 $P(A)=0.5, P(B)=0.6, P(AB)=0.3$，则 $P(A|B)$ 等于（  ）\nA. 0.3  B. 0.5  C. 0.6  D. 0.9",
            essence: "考查条件概率公式：$P(A|B) = \\frac{P(AB)}{P(B)}$",
            explanation: `<strong>第一步：应用条件概率公式</strong>
$$P(A|B) = \\frac{P(AB)}{P(B)}$$

<strong>第二步：代入计算</strong>
$$P(A|B) = \\frac{0.3}{0.6} = 0.5$$

<strong>第三步：得出结论</strong>
答案为 B`,
            answer: "B",
            difficulty: "medium",
            category: "概率计算",
            method: "条件概率公式"
        },
{
            id: 4,
            type: "解答题",
            title: "全概率公式",
            question: "设事件 $B_1, B_2, B_3$ 构成样本空间的一个划分，且 $P(B_1)=0.3, P(B_2)=0.5, P(B_3)=0.2$，又知 $P(A|B_1)=0.2, P(A|B_2)=0.3, P(A|B_3)=0.4$，求 $P(A)$。",
            essence: "考查全概率公式：$P(A) = \\sum_{i=1}^{n} P(B_i)P(A|B_i)$",
            explanation: `<strong>第一步：应用全概率公式</strong>
$$P(A) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2) + P(B_3)P(A|B_3)$$

<strong>第二步：代入数据</strong>
$$P(A) = 0.3 \\times 0.2 + 0.5 \\times 0.3 + 0.2 \\times 0.4$$

<strong>第三步：计算</strong>
$$P(A) = 0.06 + 0.15 + 0.08 = 0.29$$`,
            answer: "$P(A) = 0.29$",
            difficulty: "hard",
            category: "概率计算",
            method: "全概率公式"
        },
{
            id: 5,
            type: "选择题",
            title: "二项分布期望",
            question: "设随机变量 $X \\sim B(10, 0.3)$，则 $E(X)$ 等于（  ）\nA. 2.1  B. 3  C. 5  D. 10",
            essence: "考查二项分布的数学期望：$E(X) = np$",
            explanation: `<strong>第一步：回顾公式</strong>
若 $X \\sim B(n, p)$，则 $E(X) = np$

<strong>第二步：代入计算</strong>
$$E(X) = 10 \\times 0.3 = 3$$

<strong>第三步：得出结论</strong>
答案为 B`,
            answer: "B",
            difficulty: "easy",
            category: "数字特征",
            method: "公式法"
        },
{
            id: 6,
            type: "选择题",
            title: "正态分布概率",
            question: "设 $X \\sim N(0, 1)$，已知 $\\Phi(1.96) = 0.975$，则 $P(|X| \\leq 1.96)$ 等于（  ）\nA. 0.025  B. 0.5  C. 0.95  D. 0.975",
            essence: "考查标准正态分布的概率计算和对称性",
            explanation: `<strong>第一步：利用对称性</strong>
$$P(|X| \\leq 1.96) = P(-1.96 \\leq X \\leq 1.96)$$

<strong>第二步：应用标准正态分布性质</strong>
$$= \\Phi(1.96) - \\Phi(-1.96)$$
$$= \\Phi(1.96) - [1 - \\Phi(1.96)]$$

<strong>第三步：代入计算</strong>
$$= 2\\Phi(1.96) - 1 = 2 \\times 0.975 - 1 = 0.95$$

<strong>第四步：得出结论</strong>
答案为 C`,
            answer: "C",
            difficulty: "medium",
            category: "随机变量",
            method: "分布函数法"
        },
{
            id: 7,
            type: "解答题",
            title: "样本均值与方差",
            question: "从总体 $X \\sim N(\\mu, \\sigma^2)$ 中抽取容量为 $n$ 的样本 $X_1, X_2, \\ldots, X_n$，求样本均值 $\\bar{X}$ 的期望和方差。",
            essence: "考查样本均值的数字特征",
            explanation: `<strong>第一步：样本均值定义</strong>
$$\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n}X_i$$

<strong>第二步：计算期望</strong>
$$E(\\bar{X}) = E\\left(\\frac{1}{n}\\sum_{i=1}^{n}X_i\\right) = \\frac{1}{n}\\sum_{i=1}^{n}E(X_i) = \\frac{1}{n} \\cdot n\\mu = \\mu$$

<strong>第三步：计算方差</strong>
由于样本独立，
$$D(\\bar{X}) = D\\left(\\frac{1}{n}\\sum_{i=1}^{n}X_i\\right) = \\frac{1}{n^2}\\sum_{i=1}^{n}D(X_i) = \\frac{1}{n^2} \\cdot n\\sigma^2 = \\frac{\\sigma^2}{n}$$`,
            answer: "$E(\\bar{X}) = \\mu, D(\\bar{X}) = \\frac{\\sigma^2}{n}$",
            difficulty: "hard",
            category: "统计推断",
            method: "期望与方差性质"
        },
{
            id: 8,
            type: "选择题",
            title: "泊松分布",
            question: "设 $X \\sim P(2)$，则 $P(X=2)$ 等于（  ）\nA. $\\frac{2}{e^2}$  B. $\\frac{4}{e^2}$  C. $\\frac{2}{e}$  D. $\\frac{4}{e}$",
            essence: "考查泊松分布概率计算：$P(X=k) = \\frac{\\lambda^k}{k!}e^{-\\lambda}$",
            explanation: `<strong>第一步：应用泊松分布公式</strong>
$$P(X=k) = \\frac{\\lambda^k}{k!}e^{-\\lambda}$$

<strong>第二步：代入 $\\lambda=2, k=2$</strong>
$$P(X=2) = \\frac{2^2}{2!}e^{-2} = \\frac{4}{2}e^{-2} = 2e^{-2} = \\frac{2}{e^2}$$

<strong>第三步：得出结论</strong>
答案为 A`,
            answer: "A",
            difficulty: "medium",
            category: "随机变量",
            method: "公式法"
        },
{
            id: 9,
            type: "选择题",
            title: "贝叶斯公式",
            question: "设 $P(A) = 0.3, P(B|A) = 0.8, P(B|\\bar{A}) = 0.6$，求 $P(A|B)$ 等于（  ）\nA. 0.4  B. 0.5  C. 0.6  D. 0.3",
            essence: "考查贝叶斯公式：$P(A|B) = \\frac{P(A)P(B|A)}{P(B)}$",
            explanation: `<strong>第一步：计算$P(B)$</strong>
$$P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$$
$$= 0.3 \\times 0.8 + 0.7 \\times 0.6 = 0.24 + 0.42 = 0.66$$

<strong>第二步：应用贝叶斯公式</strong>
$$P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0.3 \\times 0.8}{0.66} = \\frac{0.24}{0.66} \\approx 0.364$$`,
            answer: "A",
            difficulty: "hard",
            category: "概率计算",
            method: "贝叶斯公式"
        },
{
            id: 10,
            type: "选择题",
            title: "二项分布方差",
            question: "设 $X \\sim B(10, 0.4)$，则 $D(X)$ 等于（  ）\nA. 2.4  B. 4  C. 6  D. 10",
            essence: "二项分布方差：$D(X) = np(1-p)$",
            explanation: `<strong>应用公式</strong>
$$D(X) = np(1-p) = 10 \\times 0.4 \\times 0.6 = 2.4$$`,
            answer: "A",
            difficulty: "easy",
            category: "数字特征",
            method: "公式法"
        },
{
            id: 11,
            type: "选择题",
            title: "几何分布",
            question: "首次成功试验在第3次发生的概率，成功概率为0.2，则该概率等于（  ）\nA. 0.008  B. 0.128  C. 0.2  D. 0.32",
            essence: "几何分布：$P(X=k) = (1-p)^{k-1}p$",
            explanation: `<strong>应用几何分布</strong>
前2次失败，第3次成功
$$P(X=3) = (1-0.2)^{3-1} \\times 0.2 = 0.8^2 \\times 0.2 = 0.64 \\times 0.2 = 0.128$$`,
            answer: "B",
            difficulty: "medium",
            category: "随机变量",
            method: "几何分布"
        },
{
            id: 12,
            type: "选择题",
            title: "均匀分布",
            question: "设 $X \\sim U(0, 4)$，则 $P(1 < X < 3)$ 等于（  ）\nA. 0.25  B. 0.5  C. 0.75  D. 1",
            essence: "均匀分布概率：区间长度之比",
            explanation: `<strong>均匀分布性质</strong>
$$P(1 < X < 3) = \\frac{3-1}{4-0} = \\frac{2}{4} = 0.5$$`,
            answer: "B",
            difficulty: "easy",
            category: "随机变量",
            method: "几何概率"
        },
{
            id: 13,
            type: "选择题",
            title: "指数分布",
            question: "设 $X \\sim E(\\lambda=2)$，则 $E(X)$ 等于（  ）\nA. 0.5  B. 1  C. 2  D. 4",
            essence: "指数分布期望：$E(X) = \\frac{1}{\\lambda}$",
            explanation: `<strong>应用公式</strong>
$$E(X) = \\frac{1}{\\lambda} = \\frac{1}{2} = 0.5$$`,
            answer: "A",
            difficulty: "easy",
            category: "数字特征",
            method: "公式法"
        },
{
            id: 14,
            type: "选择题",
            title: "协方差",
            question: "若 $X, Y$ 独立，$E(X) = 2, E(Y) = 3$，则 $Cov(X, Y)$ 等于（  ）\nA. 0  B. 5  C. 6  D. -1",
            essence: "独立随机变量协方差为0",
            explanation: `<strong>独立性质</strong>
若$X, Y$独立，则$Cov(X, Y) = 0$`,
            answer: "A",
            difficulty: "easy",
            category: "数字特征",
            method: "独立性"
        },
{
            id: 15,
            type: "选择题",
            title: "相关系数",
            question: "设 $X, Y$ 的相关系数 $\\rho_{XY} = 1$，则（  ）\nA. $X$与$Y$独立  B. $Y$与$X$线性相关  C. $X = Y$  D. $Y = -X$",
            essence: "相关系数为1表示完全正线性相关",
            explanation: `<strong>相关系数性质</strong>
$\\rho_{XY} = 1$ 表示$Y$与$X$完全正线性相关
存在$a > 0, b$使得$Y = aX + b$`,
            answer: "B",
            difficulty: "medium",
            category: "数字特征",
            method: "相关性"
        },
{
            id: 16,
            type: "选择题",
            title: "切比雪夫不等式",
            question: "设 $E(X) = 10, D(X) = 4$，则 $P(|X-10| \\geq 4)$ 的上界为（  ）\nA. 0.25  B. 0.5  C. 0.75  D. 1",
            essence: "切比雪夫不等式：$P(|X-\\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2}$",
            explanation: `<strong>应用切比雪夫不等式</strong>
$$P(|X-10| \\geq 4) \\leq \\frac{D(X)}{4^2} = \\frac{4}{16} = 0.25$$`,
            answer: "A",
            difficulty: "medium",
            category: "概率不等式",
            method: "切比雪夫不等式"
        },
{
            id: 17,
            type: "选择题",
            title: "中心极限定理",
            question: "设 $X_1, X_2, \\ldots, X_{100}$ 独立同分布，$E(X_i) = 5, D(X_i) = 4$，则 $\\sum_{i=1}^{100}X_i$ 近似服从（  ）\nA. $N(500, 400)$  B. $N(500, 40)$  C. $N(5, 4)$  D. $N(100, 400)$",
            essence: "中心极限定理：$\\sum X_i \\sim N(n\\mu, n\\sigma^2)$",
            explanation: `<strong>应用中心极限定理</strong>
$$E(\\sum X_i) = 100 \\times 5 = 500$$
$$D(\\sum X_i) = 100 \\times 4 = 400$$
$$\\sum X_i \\sim N(500, 400)$$`,
            answer: "A",
            difficulty: "hard",
            category: "极限定理",
            method: "中心极限定理"
        },
{
            id: 18,
            type: "选择题",
            title: "大数定律",
            question: "大数定律说明当样本量$n$很大时，样本均值$\\bar{X}$依概率收敛于（  ）\nA. 总体均值$\\mu$  B. 样本方差  C. 0  D. 1",
            essence: "大数定律：$\\bar{X} \\xrightarrow{P} \\mu$",
            explanation: `<strong>大数定律</strong>
当$n \\to \\infty$时，$\\bar{X} \\xrightarrow{P} \\mu$
样本均值依概率收敛于总体均值`,
            answer: "A",
            difficulty: "easy",
            category: "极限定理",
            method: "大数定律"
        },
{
            id: 19,
            type: "选择题",
            title: "点估计",
            question: "样本 $(x_1, x_2, \\ldots, x_n)$ 的样本均值 $\\bar{x} = \\frac{1}{n}\\sum x_i$ 是总体均值$\\mu$的（  ）\nA. 无偏估计  B. 有偏估计  C. 最大似然估计  D. A和C",
            essence: "样本均值是总体均值的无偏估计",
            explanation: `<strong>无偏性</strong>
$$E(\\bar{X}) = E\\left(\\frac{1}{n}\\sum X_i\\right) = \\mu$$
$\\bar{X}$是$\\mu$的无偏估计`,
            answer: "A",
            difficulty: "medium",
            category: "统计推断",
            method: "无偏性"
        },
{
            id: 20,
            type: "选择题",
            title: "样本方差",
            question: "样本方差 $S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2$ 是总体方差$\\sigma^2$的（  ）\nA. 无偏估计  B. 有偏估计  C. 矩估计  D. 极大似然估计",
            essence: "样本方差是总体方差的无偏估计",
            explanation: `<strong>无偏性</strong>
$$E(S^2) = \\sigma^2$$
除以$n-1$使其成为无偏估计`,
            answer: "A",
            difficulty: "medium",
            category: "统计推断",
            method: "无偏估计"
        },
{
            id: 21,
            type: "选择题",
            title: "假设检验类型",
            question: "假设检验中，拒绝原假设$H_0$而实际$H_0$为真，这种错误称为（  ）\nA. 第一类错误  B. 第二类错误  C. 抽样误差  D. 系统误差",
            essence: "第一类错误（弃真）：拒绝真的原假设",
            explanation: `<strong>两类错误</strong>
- 第一类错误（$\\alpha$错误）：弃真
- 第二类错误（$\\beta$错误）：取伪`,
            answer: "A",
            difficulty: "easy",
            category: "假设检验",
            method: "概念"
        },
{
            id: 22,
            type: "选择题",
            title: "置信区间",
            question: "在其他条件不变时，提高置信水平会使置信区间（  ）\nA. 变宽  B. 变窄  C. 不变  D. 无法确定",
            essence: "置信水平越高，置信区间越宽",
            explanation: `<strong>置信区间与置信水平</strong>
置信水平$(1-\\alpha)$越高，临界值越大
置信区间越宽`,
            answer: "A",
            difficulty: "easy",
            category: "区间估计",
            method: "概念"
        },
{
            id: 23,
            type: "选择题",
            title: "$t$分布",
            question: "设总体 $X \\sim N(\\mu, \\sigma^2)$，$\\sigma^2$未知，样本量$n=16$，则 $\\frac{\\bar{X} - \\mu}{S/\\sqrt{n}}$ 服从（  ）\nA. $t(15)$  B. $N(0,1)$  C. $\\chi^2(15)$  D. $t(16)$",
            essence: "$t$分布：自由度为$n-1$",
            explanation: `<strong>$t$统计量</strong>
$$\\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} \\sim t(n-1) = t(15)$$`,
            answer: "A",
            difficulty: "medium",
            category: "统计分布",
            method: "$t$分布"
        },
{
            id: 24,
            type: "选择题",
            title: "$\\chi^2$分布",
            question: "设 $X_1, X_2, \\ldots, X_n$ 独立同分布于 $N(0, 1)$，则 $\\sum_{i=1}^{n}X_i^2$ 服从（  ）\nA. $\\chi^2(n)$  B. $N(0,1)$  C. $t(n)$  D. $F(n,n)$",
            essence: "$\\chi^2$分布定义",
            explanation: `<strong>$\\chi^2$分布</strong>
$n$个独立标准正态变量平方和
$$\\sum_{i=1}^{n}X_i^2 \\sim \\chi^2(n)$$`,
            answer: "A",
            difficulty: "medium",
            category: "统计分布",
            method: "$\\chi^2$分布"
        },
{
            id: 25,
            type: "选择题",
            title: "显著性水平",
            question: "显著性水平$\\alpha = 0.05$表示（  ）\nA. 犯第一类错误的概率  B. 犯第二类错误的概率  C. 置信水平  D. 样本量",
            essence: "显著性水平是第一类错误概率",
            explanation: `<strong>显著性水平</strong>
$$\\alpha = P(\\text{拒绝}H_0 | H_0\\text{为真}) = P(\\text{第一类错误})$$`,
            answer: "A",
            difficulty: "easy",
            category: "假设检验",
            method: "概念"
        },
{
            id: 26,
            type: "选择题",
            title: "最大似然估计",
            question: "设总体 $X \\sim B(1, p)$，样本$(X_1, \\ldots, X_n)$，则$p$的最大似然估计为（  ）\nA. $\\bar{X}$  B. $S^2$  C. $\\frac{n+1}{n}\\bar{X}$  D. $\\frac{\\sum X_i}{n+1}$",
            essence: "伯努利分布参数的MLE",
            explanation: `<strong>最大似然估计</strong>
似然函数：$L(p) = p^{\\sum x_i}(1-p)^{n-\\sum x_i}$
对$p$求导并令为0，得$\\hat{p} = \\frac{\\sum x_i}{n} = \\bar{x}$`,
            answer: "A",
            difficulty: "hard",
            category: "参数估计",
            method: "最大似然法"
        },
{
            id: 27,
            type: "选择题",
            title: "矩估计",
            question: "矩估计法的基本思想是用（  ）\nA. 样本矩估计总体矩  B. 样本均值估计总体方差  C. 极大似然  D. 贝叶斯方法",
            essence: "矩估计：样本矩替代总体矩",
            explanation: `<strong>矩估计法</strong>
用样本的$k$阶矩$A_k$估计总体的$k$阶矩$\\mu_k$
$$A_k = \\frac{1}{n}\\sum X_i^k \\to \\mu_k = E(X^k)$$`,
            answer: "A",
            difficulty: "easy",
            category: "参数估计",
            method: "矩估计"
        },
{
            id: 28,
            type: "选择题",
            title: "正态总体检验",
            question: "对正态总体均值进行假设检验，当总体方差已知时，应使用（  ）\nA. $Z$检验  B. $t$检验  C. $\\chi^2$检验  D. $F$检验",
            essence: "方差已知用$Z$检验",
            explanation: `<strong>检验选择</strong>
- $\\sigma^2$已知：$Z$检验（标准正态）
- $\\sigma^2$未知：$t$检验`,
            answer: "A",
            difficulty: "easy",
            category: "假设检验",
            method: "检验选择"
        },
{
            id: 29,
            type: "选择题",
            title: "方差齐性检验",
            question: "比较两个正态总体方差是否相等，应使用（  ）\nA. $F$检验  B. $t$检验  C. $\\chi^2$检验  D. $Z$检验",
            essence: "$F$检验用于方差比较",
            explanation: `<strong>方差齐性检验</strong>
$$F = \\frac{S_1^2}{S_2^2} \\sim F(n_1-1, n_2-1)$$
用于检验两总体方差是否相等`,
            answer: "A",
            difficulty: "medium",
            category: "假设检验",
            method: "$F$检验"
        },
{
            id: 30,
            type: "选择题",
            title: "抽样分布",
            question: "设总体 $X \\sim N(\\mu, \\sigma^2)$，样本量$n$，则样本均值$\\bar{X}$服从（  ）\nA. $N(\\mu, \\frac{\\sigma^2}{n})$  B. $N(\\mu, \\sigma^2)$  C. $N(0, 1)$  D. $t(n-1)$",
            essence: "样本均值的分布",
            explanation: `<strong>正态总体性质</strong>
$$\\bar{X} \\sim N(\\mu, \\frac{\\sigma^2}{n})$$
均值不变，方差除以样本量`,
            answer: "A",
            difficulty: "medium",
            category: "抽样分布",
            method: "正态分布性质"
        }
],
    knowledgePoints: [
        {
            title: "概率基础",
            content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e74c3c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #e74c3c; margin-bottom: 15px; font-size: 1.2rem;">基本概念</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>样本空间</strong>：所有可能结果的集合 $\\Omega$</li>
            <li style="margin-bottom: 10px;"><strong>事件</strong>：样本空间的子集</li>
            <li style="margin-bottom: 10px;"><strong>概率三公理</strong>：非负性、规范性、可列可加性</li>
            <li style="margin-bottom: 10px;"><strong>条件概率</strong>：$P(A|B) = \\frac{P(AB)}{P(B)}$</li>
            <li style="margin-bottom: 10px;"><strong>独立性</strong>：$P(AB) = P(A)P(B)$</li>
          </ul>
        </div>
      </div>
      `
        },
        {
            title: "常用分布",
            content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #8B5CF6; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #8B5CF6; margin-bottom: 15px; font-size: 1.2rem;">重要分布</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>二项分布</strong> $B(n, p)$：$P(X=k) = C_n^k p^k (1-p)^{n-k}$</li>
            <li style="margin-bottom: 10px;"><strong>泊松分布</strong> $P(\\lambda)$：$P(X=k) = \\frac{\\lambda^k}{k!} e^{-\\lambda}$</li>
            <li style="margin-bottom: 10px;"><strong>正态分布</strong> $N(\\mu, \\sigma^2)$：密度函数 $f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$</li>
            <li style="margin-bottom: 10px;"><strong>均匀分布</strong> $U(a, b)$：$f(x) = \\frac{1}{b-a}, x \\in (a,b)$</li>
          </ul>
        </div>
      </div>
      `
        },
        {
            title: "数字特征",
            content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #3498db; margin-bottom: 15px; font-size: 1.2rem;">期望与方差</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>期望</strong>：$E(X) = \\sum x_i p_i$ 或 $E(X) = \\int_{-\\infty}^{+\\infty} xf(x)dx$</li>
            <li style="margin-bottom: 10px;"><strong>方差</strong>：$D(X) = E[(X-E(X))^2] = E(X^2) - [E(X)]^2$</li>
            <li style="margin-bottom: 10px;"><strong>性质</strong>：$E(aX+b) = aE(X)+b$, $D(aX+b) = a^2D(X)$</li>
            <li style="margin-bottom: 10px;"><strong>协方差</strong>：$Cov(X,Y) = E[(X-EX)(Y-EY)]$</li>
          </ul>
        </div>
      </div>
      `
        }
    ]
};
