window.exerciseData = {
  // 知识点
  knowledgePoints: [
    {
      title: "概率论基础",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>随机事件</strong>：样本空间、事件的概率</li>
            <li style="margin-bottom: 10px;"><strong>随机变量</strong>：离散型和连续型随机变量</li>
            <li style="margin-bottom: 10px;"><strong>概率分布</strong>：常见分布（二项分布、正态分布等）</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "线性代数基础",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>矩阵运算</strong>：加法、乘法、转置</li>
            <li style="margin-bottom: 10px;"><strong>行列式</strong>：计算和性质</li>
            <li style="margin-bottom: 10px;"><strong>线性方程组</strong>：高斯消元法</li>
          </ul>
        </div>
      </div>
    `
    }
  ]
};

window.exerciseData.exercises = [
,

,

,

,

{
    id: 37,

    type: "计算题",

    title: "条件概率",

    question: "袋中有5个红球3个白球，先取1球不放回，再取1球。已知第一次取到红球，求第二次也取到红球的概率",

    essence: "这道题考查条件概率。$P(B|A) = \\frac{P(AB)}{P(A)}$",

    explanation: `设$A$：第一次取红球，$B$：第二次取红球；$P(A) = \\frac{5}{8}$；在$A$发生的条件下，袋中剩4个红球3个白球；$P(B|A) = \\frac{4}{7}$`,

    answer: "$\\frac{4}{7}$",

    difficulty: "medium",

    category: "概率与统计",

    method: "条件概率"

  },,

{
    id: 38,

    type: "计算题",

    title: "全概率公式",

    question: "甲乙两箱，甲箱3红2白，乙箱2红3白。随机取一箱再从中取球，求取到红球的概率",

    essence: "这道题考查全概率公式。$P(A) = \\sum P(B_i)P(A|B_i)$",

    explanation: `设$B_1$：取甲箱，$B_2$：取乙箱，$A$：取到红球；$P(B_1) = P(B_2) = \\frac{1}{2}$；$P(A|B_1) = \\frac{3}{5}$，$P(A|B_2) = \\frac{2}{5}$；全概率公式：$P(A) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2)$；$= \\frac{1}{2} \\times \\frac{3}{5} + \\frac{1}{2} \\times \\frac{2}{5} = \\frac{3}{10} + \\frac{2}{10} = \\frac{1}{2}$`,

    answer: "$\\frac{1}{2}$",

    difficulty: "medium",

    category: "概率与统计",

    method: "全概率公式"

  },,

{
    id: 39,

    type: "计算题",

    title: "贝叶斯公式",

    question: "袋中5红3白球，取2球都是红球，求第一次取到红球的概率",

    essence: "这道题考查贝叶斯公式。$P(B_i|A) = \\frac{P(B_i)P(A|B_i)}{\\sum P(B_j)P(A|B_j)}$",

    explanation: `设$A$：两次都是红球，$B_1$：第一次红球，$B_2$：第一次白球；$P(B_1) = \\frac{5}{8}$，$P(A|B_1) = \\frac{4}{7}$；$P(B_2) = \\frac{3}{8}$，$P(A|B_2) = 0$；$P(B_1|A) = \\frac{P(B_1)P(A|B_1)}{P(B_1)P(A|B_1)+P(B_2)P(A|B_2)} = \\frac{\\frac{5}{8} \\times \\frac{4}{7}}{\\frac{5}{8} \\times \\frac{4}{7} + 0} = 1$`,

    answer: "$1$",

    difficulty: "medium",

    category: "概率与统计",

    method: "贝叶斯公式"

  },,

{
    id: 40,

    type: "计算题",

    title: "独立事件概率",

    question: "事件$A$、$B$独立，$P(A)=0.6$，$P(B)=0.5$，求$P(AB)$",

    essence: "这道题考查独立事件的概率。$P(AB) = P(A)P(B)$",

    explanation: `独立事件：$P(AB) = P(A)P(B)$；$P(AB) = 0.6 \\times 0.5 = 0.3$`,

    answer: "$0.3$",

    difficulty: "easy",

    category: "概率与统计",

    method: "独立事件"

  },,

{
    id: 41,

    type: "计算题",

    title: "互斥事件概率",

    question: "事件$A$、$B$互斥，$P(A)=0.3$，$P(B)=0.4$，求$P(A+B)$",

    essence: "这道题考查互斥事件的概率加法公式",

    explanation: `互斥事件：$P(A+B) = P(A) + P(B)$；$P(A+B) = 0.3 + 0.4 = 0.7$`,

    answer: "$0.7$",

    difficulty: "easy",

    category: "概率与统计",

    method: "互斥事件"

  },,

{
    id: 42,

    type: "计算题",

    title: "对立事件概率",

    question: "事件$A$发生的概率为$0.35$，求$A$的对立事件$\\bar{A}$的概率",

    essence: "这道题考查对立事件的概率",

    explanation: `对立事件：$P(\\bar{A}) = 1 - P(A)$；$P(\\bar{A}) = 1 - 0.35 = 0.65$`,

    answer: "$0.65$",

    difficulty: "easy",

    category: "概率与统计",

    method: "对立事件"

  },,

{
    id: 43,

    type: "计算题",

    title: "概率加法公式",

    question: "已知$P(A)=0.5$，$P(B)=0.6$，$P(AB)=0.3$，求$P(A+B)$",

    essence: "这道题考查概率加法公式。$P(A+B) = P(A) + P(B) - P(AB)$",

    explanation: `概率加法公式：$P(A+B) = P(A) + P(B) - P(AB)$；$P(A+B) = 0.5 + 0.6 - 0.3 = 0.8$`,

    answer: "$0.8$",

    difficulty: "easy",

    category: "概率与统计",

    method: "概率加法公式"

  },,

{
    id: 44,

    type: "计算题",

    title: "概率乘法公式",

    question: "已知$P(A)=0.6$，$P(B|A)=0.5$，求$P(AB)$",

    essence: "这道题考查概率乘法公式。$P(AB) = P(A)P(B|A)$",

    explanation: `概率乘法公式：$P(AB) = P(A)P(B|A)$；$P(AB) = 0.6 \\times 0.5 = 0.3$`,

    answer: "$0.3$",

    difficulty: "easy",

    category: "概率与统计",

    method: "概率乘法公式"

  },,

{
    id: 45,

    type: "计算题",

    title: "德摩根定律",

    question: "已知$P(A)=0.7$，$P(B)=0.6$，$P(AB)=0.5$，求$P(\\overline{A+B})$",

    essence: "这道题考查德摩根定律。$\\overline{A+B} = \\bar{A}\\bar{B}$",

    explanation: `先求$P(A+B) = P(A) + P(B) - P(AB) = 0.7 + 0.6 - 0.5 = 0.8$；德摩根定律：$P(\\overline{A+B}) = 1 - P(A+B) = 1 - 0.8 = 0.2$`,

    answer: "$0.2$",

    difficulty: "medium",

    category: "概率与统计",

    method: "德摩根定律"

  },,

{
    id: 46,

    type: "计算题",

    title: "几何概型-长度",

    question: "在区间$[0, 10]$上随机取一点，求该点落在$[2, 5]$上的概率",

    essence: "这道题考查几何概型。概率与长度成正比",

    explanation: `几何概型：$P = \\frac{有利区域长度}{总区域长度}$；$P = \\frac{5-2}{10-0} = \\frac{3}{10} = 0.3$`,

    answer: "$0.3$",

    difficulty: "easy",

    category: "概率与统计",

    method: "几何概型"

  },,

{
    id: 47,

    type: "计算题",

    title: "几何概型-面积",

    question: "在边长为2的正方形内随机取一点，求该点到正方形中心距离小于1的概率",

    essence: "这道题考查几何概型。概率与面积成正比",

    explanation: `总面积：$2 \\times 2 = 4$；有利区域：以中心为圆心、半径为1的圆，面积$\\pi \\times 1^2 = \\pi$；$P = \\frac{\\pi}{4}$`,

    answer: "$\\frac{\\pi}{4}$",

    difficulty: "medium",

    category: "概率与统计",

    method: "几何概型"

  },,

{
    id: 48,

    type: "计算题",

    title: "超几何分布",

    question: "10个产品中有3个次品，随机抽取4个，求恰好抽到1个次品的概率",

    essence: "这道题考查超几何分布。$P(X=k) = \\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$",

    explanation: `超几何分布：$N=10$，$M=3$（次品），$n=4$，$k=1$；$P(X=1) = \\frac{C_3^1 C_7^3}{C_{10}^4} = \\frac{3 \\times 35}{210} = \\frac{105}{210} = \\frac{1}{2}$`,

    answer: "$\\frac{1}{2}$",

    difficulty: "medium",

    category: "概率与统计",

    method: "超几何分布"

  },
];
