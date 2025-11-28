window.exerciseData = {
    exercises: [
        {
            id: 1,
            type: "选择题",
            title: "行列式性质",
            question: "若行列式 $D$ 中有两行元素对应成比例，则 $D$ 的值为（ ）\nA. 0  B. 1  C. -1  D. 不确定",
            essence: "这道题考查行列式的基本性质。行列式中若有两行（或两列）元素对应成比例，则该行列式的值为零。",
            explanation: `<strong>第一步：回顾行列式性质</strong>
性质：如果行列式中有两行（列）完全相同，或两行（列）元素对应成比例，则行列式的值为 0。

<strong>第二步：分析</strong>
题目已知两行元素对应成比例，直接应用性质。

<strong>第三步：得出结论</strong>
答案为 A`,
            answer: "A",
            difficulty: "easy",
            category: "行列式",
            method: "性质法"
        },
        {
            id: 2,
            type: "选择题",
            title: "二阶行列式计算",
            question: "计算二阶行列式 $\\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix}$ 的值为（ ）\nA. 5  B. 8  C. 11  D. -5",
            essence: "考查二阶行列式的计算公式：$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$",
            explanation: `<strong>第一步：应用公式</strong>
$$\\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix} = 2 \\times 4 - 3 \\times 1$$

<strong>第二步：计算</strong>
$$= 8 - 3 = 5$$

<strong>第三步：得出结论</strong>
答案为 A`,
            answer: "A",
            difficulty: "easy",
            category: "行列式",
            method: "公式法"
        },
        {
            id: 3,
            type: "选择题",
            title: "矩阵加法",
            question: "设 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，$B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$，则 $A + B$ 等于（ ）\nA. $\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$  B. $\\begin{pmatrix} 5 & 8 \\\\ 10 & 12 \\end{pmatrix}$  C. $\\begin{pmatrix} 6 & 7 \\\\ 10 & 12 \\end{pmatrix}$  D. $\\begin{pmatrix} 6 & 8 \\\\ 9 & 12 \\end{pmatrix}$",
            essence: "考查矩阵加法：对应元素相加",
            explanation: `<strong>第一步：应用矩阵加法</strong>
$$A + B = \\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix}$$

<strong>第二步：计算各元素</strong>
$$= \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$$

<strong>第三步：得出结论</strong>
答案为 A`,
            answer: "A",
            difficulty: "easy",
            category: "矩阵运算",
            method: "直接计算"
        },
        {
            id: 4,
            type: "解答题",
            title: "矩阵乘法",
            question: "计算矩阵乘积 $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$",
            essence: "考查矩阵乘法：第一个矩阵的第 i 行与第二个矩阵的第 j 列对应元素乘积之和",
            explanation: `<strong>第一步：计算第一行第一列元素</strong>
$$(1)(2) + (2)(1) = 2 + 2 = 4$$

<strong>第二步：计算第一行第二列元素</strong>
$$(1)(0) + (2)(3) = 0 + 6 = 6$$

<strong>第三步：计算第二行第一列元素</strong>
$$(3)(2) + (4)(1) = 6 + 4 = 10$$

<strong>第四步：计算第二行第二列元素</strong>
$$(3)(0) + (4)(3) = 0 + 12 = 12$$

<strong>第五步：写出结果矩阵</strong>
$$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$$`,
            answer: "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
            difficulty: "medium",
            category: "矩阵运算",
            method: "矩阵乘法法则"
        },
        {
            id: 5,
            type: "选择题",
            title: "矩阵的秩",
            question: "矩阵 $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 0 & 1 & 2 \\end{pmatrix}$ 的秩为（ ）\nA. 1  B. 2  C. 3  D. 0",
            essence: "考查矩阵的秩：矩阵中非零子式的最高阶数，观察第二行是第一行的2倍",
            explanation: `<strong>第一步：观察矩阵</strong>
注意到第二行是第一行的2倍

<strong>第二步：行化简</strong>
$$\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 0 & 1 & 2 \\end{pmatrix} \\rightarrow \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 1 & 2 \\end{pmatrix} \\rightarrow \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$$

<strong>第三步：得出结论</strong>
有2个非零行，秩为2
答案为 B`,
            answer: "B",
            difficulty: "medium",
            category: "矩阵的秩",
            method: "行化简法"
        },
        {
            id: 6,
            type: "解答题",
            title: "逆矩阵",
            question: "求矩阵 $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$ 的逆矩阵",
            essence: "考查二阶矩阵逆矩阵的求法：$A^{-1} = \\frac{1}{|A|} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$，其中 $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$",
            explanation: `<strong>第一步：计算行列式</strong>
$$|A| = 2 \\times 1 - 1 \\times 1 = 2 - 1 = 1$$

<strong>第二步：应用逆矩阵公式</strong>
$$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$

<strong>第三步：得出结论</strong>
$$A^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$$`,
            answer: "$\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$",
            difficulty: "medium",
            category: "逆矩阵",
            method: "伴随矩阵法"
        },
        {
            id: 7,
            type: "选择题",
            title: "线性方程组解的判定",
            question: "齐次线性方程组 $AX = 0$ 有非零解的充要条件是（ ）\nA. $|A| = 0$  B. $|A| \\neq 0$  C. $A$ 可逆  D. $A$ 不可逆",
            essence: "考查齐次线性方程组解的判定：有非零解等价于系数矩阵行列式为0",
            explanation: `<strong>第一步：回顾定理</strong>
齐次线性方程组 $AX = 0$：
- 若 $|A| \\neq 0$，只有零解
- 若 $|A| = 0$，有非零解

<strong>第二步：分析选项</strong>
- A：$|A| = 0$ ✓
- B：$|A| \\neq 0$ 只有零解
- C：$A$ 可逆 $\\Leftrightarrow |A| \\neq 0$ 只有零解
- D：$A$ 不可逆 $\\Leftrightarrow |A| = 0$ ✓

<strong>第三步：得出结论</strong>
A和D都正确，但A更直接
答案为 A`,
            answer: "A",
            difficulty: "medium",
            category: "线性方程组",
            method: "判别法"
        },
        {
            id: 8,
            type: "选择题",
            title: "向量线性相关性",
            question: "向量组 $\\alpha_1 = (1, 0, 0)$，$\\alpha_2 = (0, 1, 0)$，$\\alpha_3 = (1, 1, 0)$ 的线性相关性为（ ）\nA. 线性相关  B. 线性无关  C. 无法判定  D. 部分相关",
            essence: "考查向量线性相关的判定：观察 $\\alpha_3 = \\alpha_1 + \\alpha_2$",
            explanation: `<strong>第一步：观察向量关系</strong>
$$\\alpha_3 = (1, 1, 0) = (1, 0, 0) + (0, 1, 0) = \\alpha_1 + \\alpha_2$$

<strong>第二步：应用定义</strong>
存在不全为零的数 $k_1 = 1, k_2 = 1, k_3 = -1$ 使得：
$$k_1\\alpha_1 + k_2\\alpha_2 + k_3\\alpha_3 = \\vec{0}$$

<strong>第三步：得出结论</strong>
向量组线性相关
答案为 A`,
            answer: "A",
            difficulty: "medium",
            category: "向量空间",
            method: "定义法"
        },
        {
            id: 9,
            type: "选择题",
            title: "特征值与特征向量",
            question: "矩阵 $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$ 的特征值为（ ）\nA. 3, 2  B. 5  C. 6  D. 3, 3",
            essence: "对角矩阵的特征值就是对角元素",
            explanation: `<strong>对角矩阵特征值</strong>
对角矩阵的特征值就是对角线上的元素
特征值：$\\lambda_1 = 3, \\lambda_2 = 2$`,
            answer: "A",
            difficulty: "easy",
            category: "特征值",
            method: "对角矩阵性质"
        },
        {
            id: 10,
            type: "选择题",
            title: "单位矩阵",
            question: "单位矩阵 $E$ 的所有特征值为（ ）\nA. 都是1  B. 都是0  C. 都是-1  D. 不确定",
            essence: "单位矩阵的特征值",
            explanation: `<strong>单位矩阵性质</strong>
$E\\vec{x} = 1 \\cdot \\vec{x}$
所有特征值都是1`,
            answer: "A",
            difficulty: "easy",
            category: "特征值",
            method: "定义"
        },
        {
            id: 11,
            type: "选择题",
            title: "矩阵的迹",
            question: "矩阵的迹等于（ ）\nA. 所有特征值之和  B. 所有特征值之积  C. 行列式  D. 对角元素之积",
            essence: "迹的性质",
            explanation: `<strong>迹的定义</strong>
$tr(A) = \\sum a_{ii}$ (对角元素之和)
$tr(A) = \\sum \\lambda_i$ (特征值之和)`,
            answer: "A",
            difficulty: "easy",
            category: "矩阵的迹",
            method: "定义"
        },
        {
            id: 12,
            type: "选择题",
            title: "相似矩阵",
            question: "若矩阵 $A$ 与 $B$ 相似，则它们的（ ）相同\nA. 特征值  B. 特征向量  C. 元素  D. 秩不一定相同",
            essence: "相似矩阵的性质",
            explanation: `<strong>相似矩阵性质</strong>
相似矩阵有相同的：
- 特征值
- 行列式
- 迹
- 秩`,
            answer: "A",
            difficulty: "medium",
            category: "相似矩阵",
            method: "性质"
        },
        {
            id: 13,
            type: "选择题",
            title: "对角化条件",
            question: "矩阵可对角化的充分条件是（ ）\nA. 有n个线性无关的特征向量  B. 行列式不为0  C. 可逆  D. 对称",
            essence: "可对角化条件",
            explanation: `<strong>对角化充要条件</strong>
$n$阶矩阵可对角化 ⟺ 有$n$个线性无关的特征向量
实对称矩阵必可对角化`,
            answer: "A",
            difficulty: "medium",
            category: "对角化",
            method: "定理"
        },
        {
            id: 14,
            type: "选择题",
            title: "实对称矩阵",
            question: "实对称矩阵的特征值为（ ）\nA. 实数  B. 复数  C. 纯虚数  D. 不确定",
            essence: "实对称矩阵性质",
            explanation: `<strong>实对称矩阵性质</strong>
实对称矩阵的特征值都是实数
不同特征值对应的特征向量正交`,
            answer: "A",
            difficulty: "easy",
            category: "对称矩阵",
            method: "性质"
        },
        {
            id: 15,
            type: "选择题",
            title: "正交矩阵",
            question: "正交矩阵 $Q$ 满足（ ）\nA. $Q^TQ = E$  B. $Q^2 = E$  C. $|Q| = 0$  D. $Q = Q^T$",
            essence: "正交矩阵定义",
            explanation: `<strong>正交矩阵</strong>
$Q^TQ = E$（定义）
$|Q| = \\pm 1$
$Q^{-1} = Q^T$`,
            answer: "A",
            difficulty: "easy",
            category: "正交矩阵",
            method: "定义"
        },
        {
            id: 16,
            type: "选择题",
            title: "二次型标准形",
            question: "二次型 $f = x_1^2 + 2x_2^2 + 3x_3^2$ 的矩阵为（ ）\nA. $\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$  B. $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$  C. $\\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 2 \\\\ 1 & 2 & 3 \\end{pmatrix}$  D. 不能确定",
            essence: "二次型的矩阵表示",
            explanation: `<strong>二次型矩阵</strong>
标准形的矩阵是对角矩阵
对角元素是各项系数`,
            answer: "A",
            difficulty: "easy",
            category: "二次型",
            method: "定义"
        },
        {
            id: 17,
            type: "选择题",
            title: "正定二次型",
            question: "二次型 $f = x_1^2 + x_2^2 + x_3^2$ 是（ ）\nA. 正定  B. 负定  C. 不定  D. 半正定",
            essence: "正定性判定",
            explanation: `<strong>正定二次型</strong>
所有系数都为正
对任意非零向量，$f > 0$
因此是正定的`,
            answer: "A",
            difficulty: "easy",
            category: "二次型",
            method: "定义"
        },
        {
            id: 18,
            type: "选择题",
            title: "向量组的秩",
            question: "向量组的秩是指（ ）\nA. 最大线性无关组所含向量个数  B. 向量个数  C. 向量维数  D. 行列式的值",
            essence: "秩的定义",
            explanation: `<strong>向量组的秩</strong>
秩 = 最大线性无关组所含向量个数
也等于矩阵的秩`,
            answer: "A",
            difficulty: "easy",
            category: "向量空间",
            method: "定义"
        },
        {
            id: 19,
            type: "选择题",
            title: "克拉默法则",
            question: "用克拉默法则解线性方程组 $AX = b$ 的前提是（ ）\nA. $|A| \\neq 0$  B. $|A| = 0$  C. $A$ 是方阵  D. $b = 0$",
            essence: "克拉默法则适用条件",
            explanation: `<strong>克拉默法则</strong>
适用于：系数矩阵可逆（$|A| \\neq 0$）的方程组
$$x_i = \\frac{|A_i|}{|A|}$$`,
            answer: "A",
            difficulty: "easy",
            category: "线性方程组",
            method: "定理"
        },
        {
            id: 20,
            type: "选择题",
            title: "矩阵的秩与方程组",
            question: "若 $r(A) = r(A|b) < n$，则方程组 $AX = b$ 有（ ）\nA. 无穷多解  B. 唯一解  C. 无解  D. 不确定",
            essence: "方程组解的判定",
            explanation: `<strong>解的判定定理</strong>
- $r(A) = r(A|b) = n$：唯一解
- $r(A) = r(A|b) < n$：无穷多解
- $r(A) < r(A|b)$：无解`,
            answer: "A",
            difficulty: "medium",
            category: "线性方程组",
            method: "秩判定法"
        },
        {
            id: 21,
            type: "选择题",
            title: "向量空间的基",
            question: "$\\mathbb{R}^3$ 的一组基包含（ ）个向量\nA. 3  B. 2  C. 4  D. 任意",
            essence: "向量空间基的个数",
            explanation: `<strong>基的定义</strong>
$n$维向量空间的基包含$n$个线性无关向量
$\\mathbb{R}^3$的基包含3个向量`,
            answer: "A",
            difficulty: "easy",
            category: "向量空间",
            method: "定义"
        },
        {
            id: 22,
            type: "选择题",
            title: "伴随矩阵",
            question: "设 $A$ 是 $n$ 阶可逆矩阵，则 $AA^* = $（ ）\nA. $|A|E$  B. $E$  C. $A$  D. $A^{-1}$",
            essence: "伴随矩阵性质",
            explanation: `<strong>伴随矩阵公式</strong>
$$AA^* = A^*A = |A|E$$
$$A^{-1} = \\frac{1}{|A|}A^*$$`,
            answer: "A",
            difficulty: "medium",
            category: "伴随矩阵",
            method: "公式"
        },
        {
            id: 23,
            type: "选择题",
            title: "矩阵的幂",
            question: "若 $A^2 = A$，则 $A$ 称为（ ）\nA. 幂等矩阵  B. 幂零矩阵  C. 对合矩阵  D. 正交矩阵",
            essence: "特殊矩阵类型",
            explanation: `<strong>特殊矩阵</strong>
- $A^2 = A$：幂等矩阵
- $A^k = O$：幂零矩阵
- $A^2 = E$：对合矩阵`,
            answer: "A",
            difficulty: "easy",
            category: "特殊矩阵",
            method: "定义"
        },
        {
            id: 24,
            type: "选择题",
            title: "矩阵分块",
            question: "分块矩阵乘法满足（ ）\nA. 结合律  B. 交换律  C. 不满足结合律  D. 不满足分配律",
            essence: "分块矩阵运算",
            explanation: `<strong>分块矩阵性质</strong>
分块矩阵乘法满足：
- 结合律
- 分配律
但不满足交换律`,
            answer: "A",
            difficulty: "easy",
            category: "分块矩阵",
            method: "性质"
        },
        {
            id: 25,
            type: "选择题",
            title: "初等变换",
            question: "初等行变换不改变矩阵的（ ）\nA. 行秩  B. 列秩  C. 行向量  D. 所有元素",
            essence: "初等变换的性质",
            explanation: `<strong>初等变换性质</strong>
初等行变换不改变：
- 矩阵的秩
- 行秩
- 方程组的解`,
            answer: "A",
            difficulty: "easy",
            category: "初等变换",
            method: "性质"
        },
        {
            id: 26,
            type: "选择题",
            title: "齐次方程组基础解系",
            question: "若齐次方程组 $AX = 0$ 的系数矩阵秩为 $r$，则基础解系包含（ ）个解向量\nA. $n - r$  B. $r$  C. $n$  D. $r - n$",
            essence: "基础解系个数",
            explanation: `<strong>基础解系定理</strong>
基础解系所含向量个数 = $n - r$
其中$n$是未知数个数，$r$是系数矩阵的秩`,
            answer: "A",
            difficulty: "medium",
            category: "线性方程组",
            method: "定理"
        },
        {
            id: 27,
            type: "选择题",
            title: "正交变换",
            question: "正交变换保持向量的（ ）不变\nA. 长度  B. 方向  C. 分量  D. 秩",
            essence: "正交变换性质",
            explanation: `<strong>正交变换</strong>
$Y = QX$，其中$Q$是正交矩阵
保持：
- 向量长度
- 向量夹角
- 向量内积`,
            answer: "A",
            difficulty: "easy",
            category: "正交变换",
            method: "性质"
        },
        {
            id: 28,
            type: "选择题",
            title: "惯性指数",
            question: "二次型标准形中正系数的个数称为（ ）\nA. 正惯性指数  B. 负惯性指数  C. 秩  D. 符号差",
            essence: "惯性定理",
            explanation: `<strong>惯性定理</strong>
- 正惯性指数$p$：正系数个数
- 负惯性指数$q$：负系数个数
- 符号差：$p - q$`,
            answer: "A",
            difficulty: "easy",
            category: "二次型",
            method: "定义"
        },
        {
            id: 29,
            type: "选择题",
            title: "相似对角化",
            question: "若 $A$ 可相似对角化为 $\\Lambda$，则 $\\Lambda$ 的对角元素是（ ）\nA. $A$ 的特征值  B. $A$ 的对角元素  C. $A$ 的迹  D. $A$ 的行列式",
            essence: "对角化性质",
            explanation: `<strong>相似对角化</strong>
$$P^{-1}AP = \\Lambda = \\begin{pmatrix} \\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n \\end{pmatrix}$$
对角元素是特征值`,
            answer: "A",
            difficulty: "easy",
            category: "对角化",
            method: "定理"
        },
        {
            id: 30,
            type: "选择题",
            title: "线性空间维数",
            question: "所有 $2 \\times 2$ 矩阵构成的线性空间的维数是（ ）\nA. 4  B. 2  C. 3  D. 1",
            essence: "线性空间维数",
            explanation: `<strong>矩阵空间</strong>
$2 \\times 2$ 矩阵有4个独立元素
$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$
维数为4`,
            answer: "A",
            difficulty: "medium",
            category: "线性空间",
            method: "定义"
        }
    ],
    knowledgePoints: [
        {
            title: "矩阵运算",
            content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #FF6B9D; padding-left: 10px; margin-bottom: 20px; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <h3 style="color: #FF6B9D; margin-bottom: 15px; font-size: 1.2rem;">基本运算</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>加法</strong>：对应元素相加，需同型</li>
            <li style="margin-bottom: 10px;"><strong>数乘</strong>：数 $k$ 乘以矩阵所有元素</li>
            <li style="margin-bottom: 10px;"><strong>乘法</strong>：$A_{m \\times n} B_{n \\times p} = C_{m \\times p}$，不满足交换律</li>
            <li style="margin-bottom: 10px;"><strong>转置</strong>：$(AB)^T = B^T A^T$</li>
          </ul>
        </div>
      </div>
      `
        }
    ]
};
