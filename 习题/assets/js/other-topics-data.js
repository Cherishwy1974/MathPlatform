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
  ],
  exercises: [
    {
      id: 1,
      type: "选择题",
      title: "复数的模",
      question: "复数 $z = 3 + 4i$ 的模为（  ）\nA. 5  B. 7  C. 3  D. 4",
      essence: "复数的模：$|z| = \\sqrt{a^2 + b^2}$",
      explanation: `<strong>计算模</strong>
$$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$`,
      answer: "A",
      difficulty: "easy",
      category: "复数",
      method: "公式法"
    },
    {
      id: 2,
      type: "选择题",
      title: "复数的共轭",
      question: "复数 $z = 2 - 3i$ 的共轭复数为（  ）\nA. $2 + 3i$  B. $-2 + 3i$  C. $-2 - 3i$  D. $3 - 2i$",
      essence: "共轭复数：实部不变，虚部变号",
      explanation: `<strong>共轭复数</strong>
$z = 2 - 3i$ 的共轭复数 $\\bar{z} = 2 + 3i$`,
      answer: "A",
      difficulty: "easy",
      category: "复数",
      method: "定义"
    },
    {
      id: 3,
      type: "选择题",
      title: "拉普拉斯变换",
      question: "$\\mathcal{L}\\{1\\}$ 等于（  ）\nA. $\\frac{1}{s}$  B. $s$  C. $1$  D. $0$",
      essence: "常数的拉普拉斯变换",
      explanation: `<strong>基本变换</strong>
$$\\mathcal{L}\\{1\\} = \\int_0^{\\infty} e^{-st} \\cdot 1 \\, dt = \\frac{1}{s}$$`,
      answer: "A",
      difficulty: "medium",
      category: "积分变换",
      method: "定义"
    },
    {
      id: 4,
      type: "选择题",
      title: "傅里叶变换",
      question: "傅里叶变换的核心是将信号分解为（  ）\nA. 正弦和余弦函数  B. 指数函数  C. 多项式  D. 对数函数",
      essence: "傅里叶变换的本质",
      explanation: `<strong>傅里叶变换</strong>
将信号分解为不同频率的正弦和余弦函数的叠加`,
      answer: "A",
      difficulty: "easy",
      category: "积分变换",
      method: "概念"
    },
    {
      id: 5,
      type: "选择题",
      title: "极坐标",
      question: "点 $(r, \\theta) = (2, \\frac{\\pi}{3})$ 的直角坐标为（  ）\nA. $(1, \\sqrt{3})$  B. $(\\sqrt{3}, 1)$  C. $(2, 2)$  D. $(\\sqrt{2}, \\sqrt{2})$",
      essence: "极坐标转直角坐标：$x = r\\cos\\theta, y = r\\sin\\theta$",
      explanation: `<strong>坐标转换</strong>
$$x = 2\\cos\\frac{\\pi}{3} = 2 \\cdot \\frac{1}{2} = 1$$
$$y = 2\\sin\\frac{\\pi}{3} = 2 \\cdot \\frac{\\sqrt{3}}{2} = \\sqrt{3}$$`,
      answer: "A",
      difficulty: "easy",
      category: "坐标系",
      method: "转换公式"
    },
    {
      id: 6,
      type: "选择题",
      title: "参数方程",
      question: "参数方程 $\\begin{cases} x = \\cos t \\\\ y = \\sin t \\end{cases}$ 表示（  ）\nA. 单位圆  B. 椭圆  C. 抛物线  D. 双曲线",
      essence: "参数方程消参",
      explanation: `<strong>消去参数</strong>
$$x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$$
这是单位圆方程`,
      answer: "A",
      difficulty: "easy",
      category: "参数方程",
      method: "消参法"
    },
    {
      id: 7,
      type: "选择题",
      title: "曲率",
      question: "直线的曲率为（  ）\nA. 0  B. 1  C. $\\infty$  D. 不确定",
      essence: "曲率的定义",
      explanation: `<strong>曲率概念</strong>
直线不弯曲，曲率为0`,
      answer: "A",
      difficulty: "easy",
      category: "曲率",
      method: "定义"
    },
    {
      id: 8,
      type: "选择题",
      title: "曲线积分类型",
      question: "第一型曲线积分的被积表达式为（  ）\nA. $f(x,y)ds$  B. $P(x,y)dx + Q(x,y)dy$  C. $f(x,y)dxdy$  D. $Pdydz + Qdzdx + Rdxdy$",
      essence: "两类曲线积分的区别",
      explanation: `<strong>曲线积分分类</strong>
第一型（对弧长）：$\\int_L f(x,y)ds$
第二型（对坐标）：$\\int_L Pdx + Qdy$`,
      answer: "A",
      difficulty: "easy",
      category: "曲线积分",
      method: "定义"
    },
    {
      id: 9,
      type: "选择题",
      title: "格林公式",
      question: "格林公式建立了（  ）之间的联系\nA. 二重积分与曲线积分  B. 三重积分与曲面积分  C. 定积分与不定积分  D. 极限与导数",
      essence: "格林公式的作用",
      explanation: `<strong>格林公式</strong>
$$\\oint_L Pdx + Qdy = \\iint_D (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})dxdy$$
连接了平面区域的二重积分与其边界曲线的曲线积分`,
      answer: "A",
      difficulty: "easy",
      category: "积分定理",
      method: "概念"
    },
    {
      id: 10,
      type: "选择题",
      title: "数值分析方法",
      question: "求方程近似根的二分法要求（  ）\nA. 区间端点函数值异号  B. 区间端点函数值同号  C. 函数可导  D. 函数连续可微",
      essence: "二分法的前提条件",
      explanation: `<strong>二分法条件</strong>
需要$f(a)f(b) < 0$，即端点函数值异号
由零点存在定理保证`,
      answer: "A",
      difficulty: "easy",
      category: "数值方法",
      method: "定理"
    },
    {
      id: 11,
      type: "选择题",
      title: "牛顿迭代法",
      question: "牛顿迭代法的迭代公式为（  ）\nA. $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$  B. $x_{n+1} = x_n + \\frac{f(x_n)}{f'(x_n)}$  C. $x_{n+1} = \\frac{x_n + a}{2}$  D. $x_{n+1} = \\frac{f(x_n)}{f'(x_n)}$",
      essence: "牛顿法公式",
      explanation: `<strong>牛顿迭代公式</strong>
$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
利用切线逼近零点`,
      answer: "A",
      difficulty: "medium",
      category: "数值方法",
      method: "公式"
    },
    {
      id: 12,
      type: "选择题",
      title: "梯形公式",
      question: "数值积分的梯形公式是（  ）阶方法\nA. 1阶  B. 2阶  C. 3阶  D. 4阶",
      essence: "梯形公式的精度",
      explanation: `<strong>梯形公式精度</strong>
$$\\int_a^b f(x)dx \\approx \\frac{b-a}{2}[f(a) + f(b)]$$
这是1阶精度方法`,
      answer: "A",
      difficulty: "medium",
      category: "数值积分",
      method: "精度分析"
    },
    {
      id: 13,
      type: "计算题",
      title: "条件概率",
      question: "袋中有5个红球3个白球，先取1球不放回，再取1球。已知第一次取到红球，求第二次也取到红球的概率",
      essence: "条件概率：$P(B|A) = \\frac{P(AB)}{P(A)}$",
      explanation: `<strong>条件概率计算</strong>
设$A$：第一次取红球，$B$：第二次取红球
在$A$发生的条件下，袋中剩4个红球3个白球
$$P(B|A) = \\frac{4}{7}$$`,
      answer: "$\\frac{4}{7}$",
      difficulty: "medium",
      category: "概率",
      method: "条件概率"
    },
    {
      id: 14,
      type: "计算题",
      title: "全概率公式",
      question: "甲乙两箱，甲箱3红2白，乙箱2红3白。随机取一箱再从中取球，求取到红球的概率",
      essence: "全概率公式：$P(A) = \\sum P(B_i)P(A|B_i)$",
      explanation: `<strong>应用全概率公式</strong>
$$P(红) = P(甲)P(红|甲) + P(乙)P(红|乙)$$
$$= \\frac{1}{2} \\times \\frac{3}{5} + \\frac{1}{2} \\times \\frac{2}{5} = \\frac{1}{2}$$`,
      answer: "$\\frac{1}{2}$",
      difficulty: "medium",
      category: "概率",
      method: "全概率公式"
    },
    {
      id: 15,
      type: "计算题",
      title: "独立事件概率",
      question: "事件$A$、$B$独立，$P(A)=0.6$，$P(B)=0.5$，求$P(AB)$",
      essence: "独立事件：$P(AB) = P(A)P(B)$",
      explanation: `<strong>独立事件概率</strong>
$$P(AB) = P(A) \\cdot P(B) = 0.6 \\times 0.5 = 0.3$$`,
      answer: "$0.3$",
      difficulty: "easy",
      category: "概率",
      method: "独立事件"
    },
    {
      id: 16,
      type: "计算题",
      title: "互斥事件概率",
      question: "事件$A$、$B$互斥，$P(A)=0.3$，$P(B)=0.4$，求$P(A+B)$",
      essence: "互斥事件加法公式",
      explanation: `<strong>互斥事件</strong>
$$P(A+B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$$`,
      answer: "$0.7$",
      difficulty: "easy",
      category: "概率",
      method: "互斥事件"
    },
    {
      id: 17,
      type: "计算题",
      title: "对立事件概率",
      question: "事件$A$发生的概率为$0.35$，求$A$的对立事件$\\bar{A}$的概率",
      essence: "对立事件：$P(\\bar{A}) = 1 - P(A)$",
      explanation: `<strong>对立事件</strong>
$$P(\\bar{A}) = 1 - P(A) = 1 - 0.35 = 0.65$$`,
      answer: "$0.65$",
      difficulty: "easy",
      category: "概率",
      method: "对立事件"
    },
    {
      id: 18,
      type: "计算题",
      title: "概率加法公式",
      question: "已知$P(A)=0.5$，$P(B)=0.6$，$P(AB)=0.3$，求$P(A+B)$",
      essence: "概率加法公式：$P(A+B) = P(A) + P(B) - P(AB)$",
      explanation: `<strong>加法公式</strong>
$$P(A+B) = P(A) + P(B) - P(AB)$$
$$= 0.5 + 0.6 - 0.3 = 0.8$$`,
      answer: "$0.8$",
      difficulty: "easy",
      category: "概率",
      method: "加法公式"
    },
    {
      id: 19,
      type: "计算题",
      title: "概率乘法公式",
      question: "已知$P(A)=0.6$，$P(B|A)=0.5$，求$P(AB)$",
      essence: "概率乘法公式：$P(AB) = P(A)P(B|A)$",
      explanation: `<strong>乘法公式</strong>
$$P(AB) = P(A)P(B|A) = 0.6 \\times 0.5 = 0.3$$`,
      answer: "$0.3$",
      difficulty: "easy",
      category: "概率",
      method: "乘法公式"
    },
    {
      id: 20,
      type: "计算题",
      title: "德摩根定律",
      question: "已知$P(A)=0.7$，$P(B)=0.6$，$P(AB)=0.5$，求$P(\\overline{A+B})$",
      essence: "德摩根定律：$\\overline{A+B} = \\bar{A}\\bar{B}$",
      explanation: `<strong>先求并集概率</strong>
$$P(A+B) = P(A) + P(B) - P(AB) = 0.7 + 0.6 - 0.5 = 0.8$$

<strong>再求对立事件</strong>
$$P(\\overline{A+B}) = 1 - P(A+B) = 1 - 0.8 = 0.2$$`,
      answer: "$0.2$",
      difficulty: "medium",
      category: "概率",
      method: "德摩根定律"
    },
    {
      id: 21,
      type: "计算题",
      title: "几何概型-长度",
      question: "在区间$[0, 10]$上随机取一点，求该点落在$[2, 5]$上的概率",
      essence: "几何概型：概率与长度成正比",
      explanation: `<strong>几何概型</strong>
$$P = \\frac{有利区域长度}{总区域长度} = \\frac{5-2}{10-0} = \\frac{3}{10} = 0.3$$`,
      answer: "$0.3$",
      difficulty: "easy",
      category: "概率",
      method: "几何概型"
    },
    {
      id: 22,
      type: "计算题",
      title: "几何概型-面积",
      question: "在边长为2的正方形内随机取一点，求该点到正方形中心距离小于1的概率",
      essence: "几何概型：概率与面积成正比",
      explanation: `<strong>计算面积</strong>
正方形面积：$2 \\times 2 = 4$
圆的面积：$\\pi \\times 1^2 = \\pi$

<strong>几何概型</strong>
$$P = \\frac{\\pi}{4}$$`,
      answer: "$\\frac{\\pi}{4}$",
      difficulty: "medium",
      category: "概率",
      method: "几何概型"
    },
    {
      id: 23,
      type: "计算题",
      title: "超几何分布",
      question: "10个产品中有3个次品，随机抽取4个，求恰好抽到1个次品的概率",
      essence: "超几何分布：$P(X=k) = \\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$",
      explanation: `<strong>超几何分布公式</strong>
$$P(X=1) = \\frac{C_3^1 C_7^3}{C_{10}^4}$$
$$= \\frac{3 \\times 35}{210} = \\frac{105}{210} = \\frac{1}{2}$$`,
      answer: "$\\frac{1}{2}$",
      difficulty: "medium",
      category: "概率",
      method: "超几何分布"
    },
    {
      id: 24,
      type: "选择题",
      title: "最小二乘法",
      question: "最小二乘法的目标是使（  ）最小\nA. 残差平方和  B. 残差和  C. 残差绝对值和  D. 最大残差",
      essence: "最小二乘法原理",
      explanation: `<strong>最小二乘法</strong>
目标：使残差平方和$\\sum(y_i - \\hat{y}_i)^2$最小`,
      answer: "A",
      difficulty: "easy",
      category: "数值方法",
      method: "概念"
    },
    {
      id: 25,
      type: "选择题",
      title: "辛普森公式",
      question: "辛普森（Simpson）求积公式是（  ）阶方法\nA. 3阶  B. 2阶  C. 1阶  D. 4阶",
      essence: "Simpson公式的精度",
      explanation: `<strong>Simpson公式</strong>
$$\\int_a^b f(x)dx \\approx \\frac{b-a}{6}[f(a) + 4f(\\frac{a+b}{2}) + f(b)]$$
这是3阶精度方法`,
      answer: "A",
      difficulty: "medium",
      category: "数值积分",
      method: "精度分析"
    },
    {
      id: 26,
      type: "选择题",
      title: "欧拉方法",
      question: "求解微分方程初值问题的欧拉方法是（  ）\nA. 显式一阶方法  B. 隐式二阶方法  C. 显式三阶方法  D. 隐式四阶方法",
      essence: "欧拉方法特点",
      explanation: `<strong>欧拉方法</strong>
$$y_{n+1} = y_n + hf(x_n, y_n)$$
这是显式一阶方法`,
      answer: "A",
      difficulty: "medium",
      category: "常微分方程数值解",
      method: "分类"
    },
    {
      id: 27,
      type: "选择题",
      title: "插值多项式",
      question: "通过$n+1$个点的插值多项式的次数最高为（  ）\nA. $n$  B. $n+1$  C. $n-1$  D. $2n$",
      essence: "插值多项式次数",
      explanation: `<strong>插值定理</strong>
通过$n+1$个点的插值多项式次数最高为$n$次`,
      answer: "A",
      difficulty: "easy",
      category: "插值",
      method: "定理"
    },
    {
      id: 28,
      type: "选择题",
      title: "龙格现象",
      question: "为避免高次插值的龙格现象，可采用（  ）\nA. 分段低次插值  B. 提高插值次数  C. 减少插值点  D. 改变插值点位置为等距",
      essence: "龙格现象的解决方法",
      explanation: `<strong>龙格现象</strong>
高次插值会产生振荡
解决方法：分段低次插值（如三次样条插值）`,
      answer: "A",
      difficulty: "medium",
      category: "插值",
      method: "概念"
    },
    {
      id: 29,
      type: "选择题",
      title: "误差传播",
      question: "在数值计算中，应避免（  ）运算以减小误差\nA. 相近数相减  B. 相近数相加  C. 大数乘小数  D. 大数除以大数",
      essence: "数值计算的稳定性",
      explanation: `<strong>误差分析</strong>
相近数相减会造成有效数字损失
应避免这种运算`,
      answer: "A",
      difficulty: "medium",
      category: "数值分析",
      method: "误差理论"
    },
    {
      id: 30,
      type: "选择题",
      title: "收敛阶",
      question: "若迭代法满足 $\\lim_{k\\to\\infty}\\frac{|x_{k+1}-x^*|}{|x_k-x^*|^p} = C \\neq 0$，则称该方法是（  ）收敛的\nA. $p$阶  B. $p-1$阶  C. $p+1$阶  D. 线性",
      essence: "收敛阶的定义",
      explanation: `<strong>收敛阶</strong>
满足上述条件时，称为$p$阶收敛
$p=1$为线性收敛，$p=2$为二阶收敛（平方收敛）`,
      answer: "A",
      difficulty: "hard",
      category: "数值方法",
      method: "定义"
    }
  ]
};
