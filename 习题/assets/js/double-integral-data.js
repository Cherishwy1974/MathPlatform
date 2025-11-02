window.exerciseData = {
  // 知识点
  knowledgePoints: [
    {
      title: "二重积分的概念",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>二重积分定义</strong>：$\iint_D f(x,y) dA$ 表示在区域D上对函数f(x,y)进行积分</li>
            <li style="margin-bottom: 10px;"><strong>几何意义</strong>：表示曲面z=f(x,y)与xy平面之间的体积</li>
            <li style="margin-bottom: 10px;"><strong>计算方法</strong>：直角坐标系、极坐标系</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "二重积分的计算",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>直角坐标系</strong>：$\iint_D f(x,y) dx dy$</li>
            <li style="margin-bottom: 10px;"><strong>极坐标系</strong>：$\iint_D f(r\cos\theta, r\sin\theta) r dr d\theta$</li>
            <li style="margin-bottom: 10px;"><strong>换序积分</strong>：改变积分次序以简化计算</li>
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

,

,

,

,

,

,

{
    id: 24,
    type: "计算题",
    title: "二重积分估值1",
    question: "估计积分 $I = \\iint_D xy(x+y+1) d\\delta$ 的值，其中 $D = \\{(x,y) | 0 \\le x \\le 1, 0 \\le y \\le 2\\}$",
    essence: "积分估值定理",
    explanation: `在D上：$0 \\le xy(x+y+1) \\le 1 \\cdot 2 \\cdot 4 = 8$；D的面积$\\sigma = 2$；$0 \\le I \\le 16$`,
    answer: "$0 \\le I \\le 16$",
    difficulty: "easy",
    category: "二重积分性质",
    method: "积分估值定理"
  },,

{
    id: 25,
    type: "计算题",
    title: "二重积分估值2",
    question: "估计积分 $I = \\iint_D (x^2 + 4y^2 + 9) d\\delta$ 的值，其中 $D = \\{(x,y) | x^2 + y^2 \\le 4\\}$",
    essence: "积分估值定理",
    explanation: `在D上：$9 \\le x^2 + 4y^2 + 9 \\le 4 + 16 + 9 = 29$；D的面积$\\sigma = 4\\pi$；$36\\pi \\le I \\le 116\\pi$`,
    answer: "$36\\pi \\le I \\le 116\\pi$",
    difficulty: "medium",
    category: "二重积分性质",
    method: "积分估值定理"
  },,

{
    id: 26,
    type: "计算题",
    title: "半球体积",
    question: "求二重积分 $\\iint\\limits_{x^2+y^2 \\le 1} \\sqrt{1-x^2-y^2} d\\delta$",
    essence: "几何意义-体积",
    explanation: `该积分表示上半球体体积；$V = \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi \\cdot 1^3 = \\frac{2\\pi}{3}$`,
    answer: "$\\frac{2\\pi}{3}$",
    difficulty: "easy",
    category: "二重积分应用",
    method: "几何意义"
  },
];
