window.exerciseData = {
  // 知识点
  knowledgePoints: [
    {
      title: "级数的基本概念",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>级数定义</strong>：$\sum_{n=1}^{\infty} u_n = u_1 + u_2 + u_3 + \cdots$</li>
            <li style="margin-bottom: 10px;"><strong>收敛与发散</strong>：部分和数列的极限决定级数的收敛性</li>
            <li style="margin-bottom: 10px;"><strong>常见级数</strong>：几何级数、调和级数、p级数</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "级数的审敛法",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>比值审敛法</strong>：$\lim_{n\to\infty} \frac{u_{n+1}}{u_n}$</li>
            <li style="margin-bottom: 10px;"><strong>根值审敛法</strong>：$\lim_{n\to\infty} \sqrt[n]{u_n}$</li>
            <li style="margin-bottom: 10px;"><strong>交错级数</strong>：莱布尼茨判别法</li>
            <li style="margin-bottom: 10px;"><strong>幂级数</strong>：收敛半径和收敛域</li>
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
    type: "计算题",
    title: "反正切函数展开",
    question: "将函数 $f(x) = \\frac{1}{1+x^2}$ 展开成x的幂级数",
    essence: "变量替换",
    explanation: `$\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$；令$x \\to -x^2$：$\\frac{1}{1+x^2} = \\sum_{n=0}^{\\infty} (-1)^n x^{2n}$`,
    answer: "$\\frac{1}{1+x^2} = 1 - x^2 + x^4 - \\cdots + (-1)^n x^{2n} + \\cdots$，$(-1<x<1)$",
    difficulty: "medium",
    category: "函数展开",
    method: "变量替换"
  }
];
