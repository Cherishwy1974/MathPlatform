window.exerciseData = {
  title: "定积分知识点整理",
  knowledgePoints: [
    {
      title: "知识点01 - 定积分概念",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>定积分的极限定义来源于和式极限，对应面积累积。</p>
          <p><strong>要点2：</strong>函数在闭区间有界且可积即可定义定积分。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点02 - 几何意义",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>积分表示曲线与x轴所围的代数面积。</p>
          <p><strong>要点2：</strong>正区间取正面积，负区间记负值体现代数和。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点03 - 平均值与累计量",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>平均值公式 $\\frac{1}{b-a}\\int_a^b f(x) dx$。</p>
          <p><strong>要点2：</strong>可用来衡量总量与区间长度的比值。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点04 - 线性性质",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>常数因子可直接提出，积分对加减法分配。</p>
          <p><strong>要点2：</strong>计算时可将复杂函数拆分成多个基本积分。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点05 - 区间可加性",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #76b7b2; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>任意分点 c 都有 $\\int_a^b f = \\int_a^c f + \\int_c^b f$。</p>
          <p><strong>要点2：</strong>适合处理分段函数或变上限积分。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点06 - 奇偶函数与对称",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #edc948; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>奇函数在对称区间积分为0。</p>
          <p><strong>要点2：</strong>偶函数可转化为两倍半区间的积分。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点07 - 周期与移轴",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>周期函数可按完整周期拆分简化。</p>
          <p><strong>要点2：</strong>常用 $x\\mapsto a+b-x$ 进行对称换元。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点08 - 原函数库",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>熟记幂函数、指数、对数、三角函数的原函数。</p>
          <p><strong>要点2：</strong>合理拆分可快速运用牛顿-莱布尼茨公式。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点09 - 分段与绝对值",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>含绝对值或分段函数需拆分成多个积分。</p>
          <p><strong>要点2：</strong>拆分后分别计算再求和保证符号正确。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点10 - 换元基本步骤",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>选择新变量并求微分关系。</p>
          <p><strong>要点2：</strong>换元后必须同步替换积分上下限。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点11 - 三角换元",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>根式 $\\sqrt{a^2-x^2}$ 常令 $x=a\\sin\\theta$。</p>
          <p><strong>要点2：</strong>换元后得到三角积分再回代或直接换限。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点12 - 指数换元",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #76b7b2; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>指数与对数复合可设 $u=e^{x}$ 或 $u=\\ln x$。</p>
          <p><strong>要点2：</strong>单调关系保证换限简单清晰。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点13 - 对数换元",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #edc948; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>含 $1+x$、$1-x$ 可设 $u=1+x$ 等线性换元。</p>
          <p><strong>要点2：</strong>对数乘积可通过二次换元化为幂函数。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点14 - 对称换元技巧",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>常见令 $x=a+b-t$ 与原积分求和。</p>
          <p><strong>要点2：</strong>适合含 $\\frac{x}{x+1}$ 等结构的化简。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点15 - 分部积分策略",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>按 LIATE 次序选择 $u$，优先取对数、幂函数。</p>
          <p><strong>要点2：</strong>确保新的积分比原式更易求。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点16 - 分部积分递推",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>含高次多项式时可建立递推公式。</p>
          <p><strong>要点2：</strong>列方程求解常数，避免无限分部。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点17 - 三角函数分部",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>典型形式 $x\\sin x$、$x\\cos x$。</p>
          <p><strong>要点2：</strong>利用边界与周期性可快速得到结果。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点18 - 指数函数分部",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>形如 $x e^{ax}$ 只需一次分部积分。</p>
          <p><strong>要点2：</strong>注意指数函数积分保持自身形式。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点19 - 对数函数分部",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #76b7b2; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>处理 $\\ln x$ 时设 $u=\\ln x$ 易于求导。</p>
          <p><strong>要点2：</strong>端点若出现 $\\ln 0$ 需用极限判别收敛。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点20 - 积分估值定理",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #edc948; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>若 $m\\le f(x)\\le M$，则 $m(b-a)\\le\\int f\\le M(b-a)$。</p>
          <p><strong>要点2：</strong>可给出积分上下界或粗略估计。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点21 - 积分中值定理",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>存在 $\\xi$ 使 $\\int_a^b f(x)dx=f(\\xi)(b-a)$。</p>
          <p><strong>要点2：</strong>证明平均值点的存在性。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点22 - 比较判别法",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>广义积分可与已知收敛或发散积分比较。</p>
          <p><strong>要点2：</strong>需保证被比较函数符号一致或固定。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点23 - 区域面积模型",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>面积公式 $S=\\int_a^b |f(x)-g(x)| dx$，表示两曲线之间的面积。</p>
          <p><strong>要点2：</strong>当 $f(x) \\geq g(x)$ 时，$S=\\int_a^b [f(x)-g(x)] dx$，上函数减下函数。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点24 - 旋转体体积",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>盘法：$V=\\pi\\int y^2 dx$；壳法：$V=2\\pi\\int x y dx$。</p>
          <p><strong>要点2：</strong>根据旋转轴选择合适公式。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点25 - 弧长与曲率",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>弧长 $L=\\int\\sqrt{1+(y')^2} dx$。</p>
          <p><strong>要点2：</strong>确保 $y'$ 连续并适当换元降难度。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点26 - 物理应用-功",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #76b7b2; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>变力做功 $W=\\int F(x) dx$。</p>
          <p><strong>要点2：</strong>注意力与位移方向一致时公式成立。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点27 - 物理应用-质量",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #edc948; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>线密度或面密度积分求总质量。</p>
          <p><strong>要点2：</strong>质心公式需同时计算分子分母积分。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点28 - 概率密度应用",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>概率密度积分必须为1。</p>
          <p><strong>要点2：</strong>期望与方差可通过积分求得。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点29 - 广义积分-无穷区间",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>以上限趋于无穷的极限定义积分。</p>
          <p><strong>要点2：</strong>p-型积分 $p>1$ 收敛，$p\\le1$ 发散。</p>
        </div>
      </div>
    `
    },
    {
      title: "知识点30 - 广义积分-瑕积分",
      content: `
      <div style="padding: 8px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding: 12px; background: #fff; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <p><strong>要点1：</strong>在间断点左右取极限分段计算。</p>
          <p><strong>要点2：</strong>判断绝对收敛可用比较判别。</p>
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
    title: "多项式定积分基础",
    question: "1. 计算 $\\displaystyle \\int_{0}^{2} (2x^2 - 3x + 4)\\,dx$。",
    explanation: `<strong>第一步：分项积分</strong>
$\\int (2x^2 - 3x + 4) dx = \\frac{2}{3}x^3 - \\frac{3}{2}x^2 + 4x + C$。
<strong>第二步：套用牛顿-莱布尼茨公式</strong>
$\\left[\\frac{2}{3}x^3 - \\frac{3}{2}x^2 + 4x\\right]_0^2 = \\left(\\frac{16}{3} - 6 + 8\\right) - 0 = \\frac{34}{3}$。`,
    answer: "$\\dfrac{34}{3}$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "牛顿-莱布尼茨公式"
  },
{
    id: 2,
    type: "计算题",
    title: "三角函数混合积分",
    question: "2. 计算 $\\displaystyle \\int_{0}^{\\pi/2} (3\\sin x + 2\\cos x)\\,dx$。",
    explanation: `<strong>第一步：分别求原函数</strong>
$\\int 3\\sin x dx = -3\\cos x$，$\\int 2\\cos x dx = 2\\sin x$。
<strong>第二步：代入上下限</strong>
$\\left[-3\\cos x + 2\\sin x\\right]_0^{\\pi/2} = (-3\\cdot 0 + 2\\cdot 1) - (-3\\cdot 1 + 0) = 5$。`,
    answer: "$5$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "牛顿-莱布尼茨公式"
  },
{
    id: 3,
    type: "计算题",
    title: "指数函数与常数",
    question: "3. 计算 $\\displaystyle \\int_{1}^{3} (e^{x} + 2)\\,dx$。",
    explanation: `<strong>第一步：积分</strong>
$\\int (e^{x} + 2) dx = e^{x} + 2x + C$。
<strong>第二步：套公式</strong>
$\\left[e^{x} + 2x\\right]_1^3 = (e^{3} + 6) - (e + 2) = e^{3} - e + 4$。`,
    answer: "$e^{3} - e + 4$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "牛顿-莱布尼茨公式"
  },
{
    id: 4,
    type: "计算题",
    title: "有理函数拆分积分",
    question: "4. 计算 $\\displaystyle \\int_{1}^{2} \\frac{3x + 1}{x} dx$。",
    explanation: `<strong>第一步：拆分 integrand</strong>
$\\frac{3x+1}{x} = 3 + \\frac{1}{x}$。
<strong>第二步：分别积分</strong>
$\\int 3 dx = 3x$，$\\int \\frac{1}{x} dx = \\ln x$。
<strong>第三步：代入上下限</strong>
$[3x + \\ln x]_1^2 = (6 + \\ln 2) - (3 + 0) = 3 + \\ln 2$。`,
    answer: "$3 + \\ln 2$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "拆分积分"
  },
{
    id: 5,
    type: "计算题",
    title: "平方差结构积分",
    question: "5. 计算 $\\displaystyle \\int_{0}^{1} (1 - x)^{2}\\,dx$。",
    explanation: `<strong>第一步：展开化简</strong>
$(1-x)^2 = 1 - 2x + x^2$。
<strong>第二步：逐项积分</strong>
$\\int (1 - 2x + x^2) dx = x - x^2 + \\frac{x^3}{3}$。
<strong>第三步：上下限</strong>
$\\left[x - x^2 + \\frac{x^3}{3}\\right]_0^1 = 1 - 1 + \\frac{1}{3} = \\frac{1}{3}$。`,
    answer: "$\\dfrac{1}{3}$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "多项式积分"
  },
{
    id: 6,
    type: "计算题",
    title: "含平方根的简单积分",
    question: "6. 计算 $\\displaystyle \\int_{0}^{4} \\sqrt{x}\\,dx$。",
    explanation: `<strong>第一步：将根式写成幂形式</strong>
$\\sqrt{x} = x^{1/2}$。
<strong>第二步：积分幂函数</strong>
$\\int x^{1/2} dx = \\frac{2}{3} x^{3/2}$。
<strong>第三步：代入数值</strong>
$\\left[\\frac{2}{3} x^{3/2}\\right]_0^4 = \\frac{2}{3} (8 - 0) = \\frac{16}{3}$。`,
    answer: "$\\dfrac{16}{3}$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "幂函数积分"
  },
{
    id: 7,
    type: "计算题",
    title: "对称函数积分",
    question: "7. 计算 $\\displaystyle \\int_{-1}^{1} (x^{2} + 2x) dx$。",
    explanation: `<strong>第一步：拆分</strong>
$\\int_{-1}^{1} x^2 dx = 2 \\int_{0}^{1} x^2 dx = \\frac{2}{3}$。
<strong>第二步：奇函数部分</strong>
$\\int_{-1}^{1} 2x dx = 0$。
<strong>第三步：合并结果</strong>
总积分为 $\\frac{2}{3}$。`,
    answer: "$\\dfrac{2}{3}$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "奇偶性判断"
  },
{
    id: 8,
    type: "计算题",
    title: "指数减多项式积分",
    question: "8. 计算 $\\displaystyle \\int_{0}^{1} (e^{x} - x) dx$。",
    explanation: `<strong>第一步：积分</strong>
$\\int (e^{x} - x) dx = e^{x} - \\frac{x^{2}}{2}$。
<strong>第二步：代入区间</strong>
$\\left[e^{x} - \\frac{x^{2}}{2}\\right]_0^1 = (e - \\frac{1}{2}) - (1 - 0) = e - \\frac{3}{2}$。`,
    answer: "$e - \\dfrac{3}{2}$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "牛顿-莱布尼茨公式"
  },
{
    id: 9,
    type: "计算题",
    title: "正弦平方积分",
    question: "9. 计算 $\\displaystyle \\int_{0}^{\\pi} \\sin^{2} x\\,dx$。",
    explanation: `<strong>第一步：使用降幂公式</strong>
$\\sin^{2} x = \\frac{1 - \\cos 2x}{2}$。
<strong>第二步：积分</strong>
$\\int_{0}^{\\pi} \\sin^{2} x dx = \\frac{1}{2} \\int_{0}^{\\pi} (1 - \\cos 2x) dx$。
<strong>第三步：求值</strong>
$\\frac{1}{2} [x - \\frac{1}{2} \\sin 2x]_0^{\\pi} = \\frac{1}{2} (\\pi - 0) = \\frac{\\pi}{2}$。`,
    answer: "$\\dfrac{\\pi}{2}$",
    difficulty: "medium",
    category: "基本定积分计算",
    method: "三角恒等变换"
  },
{
    id: 10,
    type: "计算题",
    title: "余弦平方积分",
    question: "10. 计算 $\\displaystyle \\int_{0}^{\\pi/2} \\cos^{2} x\\,dx$。",
    explanation: `<strong>第一步：降幂公式</strong>
$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$。
<strong>第二步：积分</strong>
$\\frac{1}{2} \\int_{0}^{\\pi/2} (1 + \\cos 2x) dx = \\frac{1}{2} \\left[ x + \\frac{1}{2}\\sin 2x \\right]_0^{\\pi/2}$。
<strong>第三步：计算</strong>
结果为 $\\frac{1}{2} \\cdot \\frac{\\pi}{2} = \\frac{\\pi}{4}$。`,
    answer: "$\\dfrac{\\pi}{4}$",
    difficulty: "easy",
    category: "基本定积分计算",
    method: "三角恒等变换"
  },
{
    id: 11,
    type: "计算题",
    title: "对称替换积分",
    question: "11. 计算 $\\displaystyle \\int_{0}^{1} (x^{3} + (1-x)^{3}) dx$。",
    explanation: `<strong>第一步：利用对称性</strong>
注意 $(1-x)^3 = 1 - 3x + 3x^2 - x^3$。
<strong>第二步：合并</strong>
$x^3 + (1-x)^3 = 1 - 3x + 3x^2$。
<strong>第三步：积分</strong>
$\\left[x - \\frac{3}{2}x^2 + x^3\\right]_0^1 = 1 - \\frac{3}{2} + 1 = \\frac{1}{2}$。`,
    answer: "$\\dfrac{1}{2}$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "对称变换"
  },
{
    id: 12,
    type: "计算题",
    title: "含指数与三角的积分",
    question: "12. 计算 $\\displaystyle \\int_{0}^{\\ln 2} e^{x} \\cos e^{x} dx$。",
    explanation: `<strong>第一步：设换元</strong>
令 $u = e^{x}$，则 $du = e^{x} dx$。
<strong>第二步：换元并换限</strong>
当 $x=0$ 时 $u=1$，当 $x=\\ln 2$ 时 $u=2$。
<strong>第三步：积分</strong>
$\\int_{1}^{2} \\cos u\\,du = \\sin u \\big|_{1}^{2} = \\sin 2 - \\sin 1$。`,
    answer: "$\\sin 2 - \\sin 1$",
    difficulty: "medium",
    category: "换元定积分计算",
    method: "指数换元"
  },
{
    id: 13,
    type: "计算题",
    title: "指数衰减倍数积分",
    question: "13. 计算 $\\displaystyle \\int_{0}^{1} x e^{-x}\\,dx$。",
    explanation: `<strong>第一步：分部积分</strong>
取 $u = x$，$dv = e^{-x} dx$。
<strong>第二步：求导与积分</strong>
$du = dx$，$v = -e^{-x}$。
<strong>第三步：应用公式</strong>
$[-x e^{-x}]_0^1 + \\int_0^1 e^{-x} dx = (-e^{-1} - 0) + (1 - e^{-1}) = 1 - 2e^{-1}$。`,
    answer: "$1 - 2e^{-1}$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 14,
    type: "计算题",
    title: "对数函数积分",
    question: "14. 计算 $\\displaystyle \\int_{1}^{e} \\ln x\\,dx$。",
    explanation: `<strong>第一步：分部积分</strong>
令 $u = \\ln x$，$dv = dx$。
<strong>第二步：计算</strong>
$du = \\frac{1}{x} dx$，$v = x$。
<strong>第三步：公式</strong>
$[x\\ln x]_1^e - \\int_1^e x \\cdot \\frac{1}{x} dx = (e - 0) - (e - 1) = 1$。`,
    answer: "$1$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 15,
    type: "计算题",
    title: "正弦平方加权积分",
    question: "15. 计算 $\\displaystyle \\int_{0}^{\\pi} x \\sin x\\,dx$。",
    explanation: `<strong>第一步：分部积分</strong>
取 $u = x$，$dv = \\sin x dx$。
<strong>第二步：求导积分</strong>
$du = dx$，$v = -\\cos x$。
<strong>第三步：计算</strong>
$[-x\\cos x]_0^{\\pi} + \\int_0^{\\pi} \\cos x dx = (\\pi + 0) + (0) = \\pi$。`,
    answer: "$\\pi$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 16,
    type: "性质题",
    title: "奇函数判别",
    question: "16. 计算 $\\displaystyle \\int_{-3}^{3} (x^{5} - 4x^{3}) dx$。",
    explanation: `<strong>第一步：观察函数</strong>
被积函数是奇函数。
<strong>第二步：奇函数性质</strong>
对称区间积分为 0。`,
    answer: "$0$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "奇偶性判断"
  },
{
    id: 17,
    type: "性质题",
    title: "偶函数倍化",
    question: "17. 计算 $\\displaystyle \\int_{-2}^{2} (x^{4}+x^{2}) dx$。",
    explanation: `<strong>第一步：函数分类</strong>
为偶函数。
<strong>第二步：利用性质</strong>
$\\int_{-2}^{2} f(x) dx = 2 \\int_{0}^{2} f(x) dx$。
<strong>第三步：积分</strong>
$2 \\[\\frac{x^{5}}{5} + \\frac{x^{3}}{3}\\]_0^2 = 2\\left(\\frac{32}{5} + \\frac{8}{3}\\right) = \\frac{256}{15}$。`,
    answer: "$\\dfrac{256}{15}$",
    difficulty: "medium",
    category: "定积分定义与性质",
    method: "奇偶性判断"
  },
{
    id: 18,
    type: "性质题",
    title: "利用区间可加性",
    question: "18. 已知 $\\displaystyle \\int_{0}^{2} f(x) dx = 5$，$\\displaystyle \\int_{2}^{5} f(x) dx = -1$，求 $\\displaystyle \\int_{0}^{5} f(x) dx$。",
    explanation: `<strong>第一步：应用可加性</strong>
$\\int_{0}^{5} = \\int_{0}^{2} + \\int_{2}^{5}$。
<strong>第二步：直接相加</strong>
$5 + (-1) = 4$。`,
    answer: "$4$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "区间可加性"
  },
{
    id: 19,
    type: "计算题",
    title: "有理函数积分",
    question: "19. 计算 $\\displaystyle \\int_{0}^{1} \\frac{x}{x+1} dx$。",
    explanation: `<strong>第一步：化简被积函数</strong>
$$\\frac{x}{x+1} = \\frac{(x+1)-1}{x+1} = 1 - \\frac{1}{x+1}$$
<strong>第二步：分别积分</strong>
$$\\int_{0}^{1} \\left(1 - \\frac{1}{x+1}\\right) dx = \\int_{0}^{1} 1 dx - \\int_{0}^{1} \\frac{1}{x+1} dx$$
<strong>第三步：计算各部分</strong>
$$= [x]_0^1 - [\\ln(x+1)]_0^1 = [x - \\ln(x+1)]_0^1$$
<strong>第四步：代入上下限</strong>
$$= (1 - \\ln 2) - (0 - \\ln 1) = 1 - \\ln 2 - 0 = 1 - \\ln 2$$`,
    answer: "$1 - \\ln 2$",
    difficulty: "medium",
    category: "基本定积分计算",
    method: "有理函数拆分"
  },
{
    id: 20,
    type: "性质题",
    title: "比较估计积分",
    question: "20. 估计 $\\displaystyle \\int_{0}^{2} x^{2} e^{-x} dx$ 的范围。",
    explanation: `<strong>第一步：确定界</strong>
在 $[0,2]$ 上有 $0 \\le x^{2} e^{-x} \\le 4$。
<strong>第二步：估值定理</strong>
$0 \\le \\int_{0}^{2} x^2 e^{-x} dx \\le 4 \\cdot 2 = 8$。
<strong>第三步：进一步估计</strong>
因为 $e^{-x} \\ge e^{-2}$，可得 $\\int_{0}^{2} x^{2} e^{-x} dx \\ge e^{-2} \\int_{0}^{2} x^{2} dx = \\frac{8}{3e^{2}}$。`,
    answer: "$\\dfrac{8}{3e^{2}} \\le I \\le 8$",
    difficulty: "medium",
    category: "定积分定义与性质",
    method: "积分估值定理"
  },
{
    id: 21,
    type: "性质题",
    title: "利用平均值定理",
    question: "21. 若 $f$ 在 $[0,3]$ 连续，$0 \\le f(x) \\le 5$，求 $\\displaystyle \\int_{0}^{3} f(x) dx$ 的范围。",
    explanation: `<strong>第一步：积分中值定理</strong>
$m(b-a) \\le \\int f \\le M(b-a)$。
<strong>第二步：代入</strong>
$0 \\le \\int_{0}^{3} f(x) dx \\le 15$。`,
    answer: "$0 \\le \\displaystyle \\int_{0}^{3} f(x) dx \\le 15$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "积分中值定理"
  },
{
    id: 22,
    type: "性质题",
    title: "利用函数单调性",
    question: "22. 已知 $f(x)$ 在 $[0,1]$ 上单调递增，且 $f(0)=1,f(1)=4$，求 $\\displaystyle \\int_{0}^{1} f(x) dx$ 的估计。",
    explanation: `<strong>第一步：使用夹逼</strong>
单调递增意味着 $1 \\le f(x) \\le 4$。
<strong>第二步：积分范围</strong>
$\\int_{0}^{1} 1 dx \\le \\int_{0}^{1} f(x) dx \\le \\int_{0}^{1} 4 dx$。
<strong>第三步：结果</strong>
$1 \\le \\int_{0}^{1} f(x) dx \\le 4$。`,
    answer: "$1 \\le \\displaystyle \\int_{0}^{1} f(x) dx \\le 4$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "不等式估计"
  },
{
    id: 23,
    type: "性质题",
    title: "变上限积分函数",
    question: "23. 定义 $F(x) = \\displaystyle \\int_{0}^{x} (t^{2}+1) dt$，求 $F(2)$。",
    explanation: `<strong>第一步：直接积分</strong>
$F(x) = \\frac{x^{3}}{3} + x$。
<strong>第二步：代入 2</strong>
$F(2) = \\frac{8}{3} + 2 = \\frac{14}{3}$。`,
    answer: "$\\dfrac{14}{3}$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "变上限积分"
  },
{
    id: 24,
    type: "性质题",
    title: "积分恒等式验证",
    question: "24. 设 $I = \\displaystyle \\int_{0}^{\\pi} x \\sin x dx$，证明 $I = \\pi$。",
    explanation: `<strong>第一步：分部积分</strong>
令 $u=x$，$dv = \\sin x dx$。
<strong>第二步：计算</strong>
前面已得 $I = \\pi$。
<strong>第三步：结论</strong>
对称性验证结果一致。`,
    answer: "$\\pi$",
    difficulty: "easy",
    category: "定积分定义与性质",
    method: "分部积分法"
  },
{
    id: 25,
    type: "计算题",
    title: "简单换元示例",
    question: "25. 计算 $\\displaystyle \\int_{0}^{1} \\frac{2x}{1 + x^{2}} dx$。",
    explanation: `<strong>第一步：令 $u = 1 + x^{2}$</strong>
$du = 2x dx$。
<strong>第二步：换限</strong>
$x=0 \\Rightarrow u=1$，$x=1 \\Rightarrow u=2$。
<strong>第三步：积分</strong>
$\\int_{1}^{2} \\frac{1}{u} du = \\ln 2$。`,
    answer: "$\\ln 2$",
    difficulty: "easy",
    category: "换元定积分计算",
    method: "根式换元"
  },
{
    id: 26,
    type: "计算题",
    title: "平方根换元",
    question: "26. 计算 $\\displaystyle \\int_{0}^{1} \\frac{dx}{\\sqrt{1-x^{2}}}$。",
    explanation: `<strong>第一步：三角换元</strong>
令 $x = \\sin \\theta$，$dx = \\cos \\theta d\\theta$。
<strong>第二步：化简</strong>
积分化为 $\\int_{0}^{\\pi/2} 1 d\\theta$。
<strong>第三步：结果</strong>
$= \\frac{\\pi}{2}$。`,
    answer: "$\\dfrac{\\pi}{2}$",
    difficulty: "medium",
    category: "换元定积分计算",
    method: "三角换元"
  },
{
    id: 27,
    type: "计算题",
    title: "指数换元技巧",
    question: "27. 计算 $\\displaystyle \\int_{0}^{\\ln 3} \\frac{dx}{1 + e^{-x}}$。",
    explanation: `<strong>第一步：设 $u = e^{-x}$</strong>
$du = -e^{-x} dx$。
<strong>第二步：换限</strong>
$x=0$ 时 $u=1$，$x=\\ln 3$ 时 $u=\\frac{1}{3}$。
<strong>第三步：积分</strong>
转化为 $\\int_{1}^{1/3} \\frac{-1}{1+u} du = \\int_{1/3}^{1} \\frac{1}{1+u} du$。
<strong>第四步：化简</strong>
结果为 $\\ln \\frac{3}{2}$。`,
    answer: "$\\ln \\dfrac{3}{2}$",
    difficulty: "medium",
    category: "换元定积分计算",
    method: "指数换元"
  },
{
    id: 28,
    type: "计算题",
    title: "反三角换元",
    question: "28. 计算 $\\displaystyle \\int_{0}^{\\sqrt{3}} \\frac{dx}{1 + x^{2}}$。",
    explanation: `<strong>第一步：识别标准形式</strong>
$\\int \\frac{1}{1+x^{2}} dx = \\arctan x$。
<strong>第二步：代入上下限</strong>
$\\arctan \\sqrt{3} - \\arctan 0 = \\frac{\\pi}{3}$。`,
    answer: "$\\dfrac{\\pi}{3}$",
    difficulty: "easy",
    category: "换元定积分计算",
    method: "标准反三角"
  },
{
    id: 29,
    type: "计算题",
    title: "对称换元应用",
    question: "29. 计算 $\\displaystyle \\int_{0}^{\\pi/2} \\frac{dx}{1 + \\tan x}$。",
    explanation: `<strong>第一步：对称替换</strong>
令 $x = \\frac{\\pi}{2} - t$，则 $\\tan x = \\cot t$。
<strong>第二步：求和</strong>
$I = \\int_0^{\\pi/2} \\frac{dx}{1+\\tan x}$，变换后得到同样形式。
<strong>第三步：两式相加</strong>
$2I = \\int_0^{\\pi/2} 1 dt = \\frac{\\pi}{2}$，因此 $I = \\frac{\\pi}{4}$。`,
    answer: "$\\dfrac{\\pi}{4}$",
    difficulty: "medium",
    category: "换元定积分计算",
    method: "对称变换"
  },
{
    id: 30,
    type: "计算题",
    title: "根式换元综合",
    question: "30. 计算 $\\displaystyle \\int_{0}^{1} \\frac{dx}{\\sqrt{1 - x^{2}} + 1}$。",
    explanation: `<strong>第一步：有理化</strong>
乘以共轭得到 $\\int_{0}^{1} \\frac{\\sqrt{1 - x^{2}} - 1}{x^{2}} dx$。
<strong>第二步：拆分</strong>
写成 $\\int_{0}^{1} \\frac{\\sqrt{1 - x^{2}}}{x^{2}} dx - \\int_{0}^{1} \\frac{1}{x^{2}} dx$。
<strong>第三步：首项换元</strong>
设 $x = \\sin \\theta$，整理得到结果。
<strong>第四步：最终值</strong>
$\\dfrac{\\pi}{2} - 1$。`,
    answer: "$\\dfrac{\\pi}{2} - 1$",
    difficulty: "hard",
    category: "换元定积分计算",
    method: "三角换元"
  },
{
    id: 31,
    type: "计算题",
    title: "换元法处理绝对值",
    question: "31. 计算 $\\displaystyle \\int_{-1}^{1} |x| e^{x} dx$。",
    explanation: `<strong>第一步：分段</strong>
$\\int_{-1}^{1} |x| e^{x} dx = \\int_{-1}^{0} (-x) e^{x} dx + \\int_{0}^{1} x e^{x} dx$。
<strong>第二步：分别计算</strong>
第一段令 $u=-x$，第二段用分部积分。
<strong>第三步：合并</strong>
两部分均为 $1 - e^{-1}$，总和 $2(1 - e^{-1})$。`,
    answer: "$2(1 - e^{-1})$",
    difficulty: "medium",
    category: "换元定积分计算",
    method: "分段换元"
  },
{
    id: 32,
    type: "计算题",
    title: "带参数换元",
    question: "32. 计算 $\\displaystyle \\int_{0}^{a} \\frac{x}{\\sqrt{a^{2} - x^{2}}} dx$ ($a>0$)。",
    explanation: `<strong>第一步：设 $x = a\\sin \\theta$</strong>
$dx = a\\cos \\theta d\\theta$。
<strong>第二步：化简</strong>
积分化为 $\\int_{0}^{\\pi/2} a\\sin \\theta d\\theta = a$。`,
    answer: "$a$",
    difficulty: "easy",
    category: "换元定积分计算",
    method: "参数三角换元"
  },
{
    id: 33,
    type: "计算题",
    title: "分式换元技巧",
    question: "33. 计算 $\\displaystyle \\int_{0}^{1} \\frac{dx}{(1+x)\\sqrt{x}}$。",
    explanation: `<strong>第一步：令 $x = t^{2}$</strong>
$dx = 2t dt$。
<strong>第二步：换限</strong>
$t$ 从 $0$ 到 $1$。
<strong>第三步：积分</strong>
$\\int_{0}^{1} \\frac{2}{1+t^{2}} dt = 2\\arctan t \\big|_{0}^{1} = \\frac{\\pi}{2}$。`,
    answer: "$\\dfrac{\\pi}{2}$",
    difficulty: "medium",
    category: "换元定积分计算",
    method: "平方换元"
  },
{
    id: 34,
    type: "计算题",
    title: "指数对数换元",
    question: "34. 计算 $\\displaystyle \\int_{0}^{1} \\frac{\\ln (1+x)}{1+x} dx$。",
    explanation: `<strong>第一步：令 $u = 1 + x$</strong>
$du = dx$。
<strong>第二步：积分</strong>
$\\int_{1}^{2} \\frac{\\ln u}{u} du$。
<strong>第三步：再次换元</strong>
令 $w = \\ln u$，得到 $\\int_{0}^{\\ln 2} w dw = \\frac{(\\ln 2)^{2}}{2}$。`,
    answer: "$\\dfrac{(\\ln 2)^{2}}{2}$",
    difficulty: "medium",
    category: "换元定积分计算",
    method: "对数换元"
  },
{
    id: 35,
    type: "计算题",
    title: "分部积分基础题",
    question: "35. 计算 $\\displaystyle \\int_{0}^{1} x e^{2x} dx$。",
    explanation: `<strong>第一步：设 $u = x$，$dv = e^{2x} dx$</strong>
$v = \\frac{1}{2} e^{2x}$。
<strong>第二步：套公式</strong>
$\\left[\\frac{x}{2} e^{2x}\\right]_0^1 - \\int_{0}^{1} \\frac{1}{2} e^{2x} dx = \\frac{1}{2} e^{2} - \\frac{1}{4} (e^{2}-1)$。
<strong>第三步：整理</strong>
$= \\frac{1}{4}(e^{2}+1)$。`,
    answer: "$\\dfrac{e^{2}+1}{4}$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 36,
    type: "计算题",
    title: "高次多项式分部积分",
    question: "36. 计算 $\\displaystyle \\int_{0}^{1} x^{2} e^{x} dx$。",
    explanation: `<strong>第一步：分部积分</strong>
取 $u = x^{2}$，$dv = e^{x} dx$。
<strong>第二步：重复操作</strong>
得到递推：$\\int x^{2} e^{x} dx = x^{2} e^{x} - 2 \\int x e^{x} dx$。
<strong>第三步：继续分部</strong>
$\\int x e^{x} dx = x e^{x} - \\int e^{x} dx$。
<strong>第四步：组合</strong>
代入并计算上下限，得到 $e - 2$。`,
    answer: "$e - 2$",
    difficulty: "hard",
    category: "分部积分法",
    method: "递推分部积分"
  },
{
    id: 37,
    type: "计算题",
    title: "三角函数乘积",
    question: "37. 计算 $\\displaystyle \\int_{0}^{\\pi} x \\cos x dx$。",
    explanation: `<strong>第一步：分部积分</strong>
令 $u = x$，$dv = \\cos x dx$。
<strong>第二步：计算</strong>
$[x\\sin x]_0^{\\pi} - \\int_{0}^{\\pi} \\sin x dx = 0 - 2 = -2$。`,
    answer: "$-2$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 38,
    type: "计算题",
    title: "含对数的分部积分",
    question: "38. 计算 $\\displaystyle \\int_{0}^{1} \\ln (1+x) dx$。",
    explanation: `<strong>第一步：分部积分</strong>
令 $u = \\ln (1+x)$，$dv = dx$。
<strong>第二步：计算</strong>
$du = \\frac{dx}{1+x}$，$v = x$。
<strong>第三步：</strong>
$[(1+x)\\ln(1+x)]_0^1 - \\int_{0}^{1} 1 dx = 2\\ln 2 - 1$。`,
    answer: "$2\\ln 2 - 1$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 39,
    type: "计算题",
    title: "重复分部积分",
    question: "39. 计算 $\\displaystyle \\int_{0}^{\\pi/2} x \\sin 2x dx$。",
    explanation: `<strong>第一步：分部积分</strong>
取 $u = x$，$dv = \\sin 2x dx$，$v = -\\frac{1}{2} \\cos 2x$。
<strong>第二步：代入</strong>
$[-\\frac{x}{2}\\cos 2x]_0^{\\pi/2} + \\frac{1}{2}\\int_{0}^{\\pi/2} \\cos 2x dx = 0$。`,
    answer: "$0$",
    difficulty: "easy",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 40,
    type: "计算题",
    title: "分部积分求反三角",
    question: "40. 计算 $\\displaystyle \\int_{0}^{1} \\arctan x dx$。",
    explanation: `<strong>第一步：分部积分</strong>
令 $u = \\arctan x$，$dv = dx$。
<strong>第二步：求导积分</strong>
$du = \\frac{1}{1+x^{2}} dx$，$v = x$。
<strong>第三步：公式</strong>
$[x \\arctan x]_0^1 - \\int_{0}^{1} \\frac{x}{1+x^{2}} dx = \\frac{\\pi}{4} - \\frac{1}{2} \\ln 2$。`,
    answer: "$\\dfrac{\\pi}{4} - \\dfrac{1}{2} \\ln 2$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 41,
    type: "计算题",
    title: "指数与三角分部积分",
    question: "41. 计算 $\\displaystyle \\int_{0}^{\\pi} e^{x} \\sin x dx$。",
    explanation: `<strong>第一步：分部积分两次</strong>
设 $I = \\int e^{x} \\sin x dx$，得到递推 $I = e^{x} \\sin x - \\int e^{x} \\cos x dx$，再分部一次求解。
<strong>第二步：解递推</strong>
$\\int e^{x} \\sin x dx = \\frac{1}{2} e^{x} (\\sin x - \\cos x)$。
<strong>第三步：代入区间</strong>
得到 $\\frac{1 + e^{\\pi}}{2}$。`,
    answer: "$\\dfrac{1 + e^{\\pi}}{2}$",
    difficulty: "hard",
    category: "分部积分法",
    method: "递推分部积分"
  },
{
    id: 42,
    type: "计算题",
    title: "对数重复分部",
    question: "42. 计算 $\\displaystyle \\int_{0}^{1} x^{2} \\ln x dx$。",
    explanation: `<strong>第一步：分部积分</strong>
令 $u = \\ln x$，$dv = x^{2} dx$。
<strong>第二步：</strong>
$du = \\frac{1}{x} dx$，$v = \\frac{x^{3}}{3}$。
<strong>第三步：</strong>
$\\left[\\frac{x^{3}}{3} \\ln x \\right]_0^1 - \\int_{0}^{1} \\frac{x^{3}}{3} \\cdot \\frac{1}{x} dx = -\\frac{1}{9}$。`,
    answer: "$-\\dfrac{1}{9}$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 43,
    type: "计算题",
    title: "带参数分部积分",
    question: "43. 计算 $\\displaystyle \\int_{0}^{a} x \\cos bx dx$ ($a>0$)。",
    explanation: `<strong>第一步：分部积分</strong>
取 $u = x$，$dv = \\cos bx dx$，$v = \\frac{\\sin bx}{b}$。
<strong>第二步：继续</strong>
$= \\left. \\frac{x \\sin bx}{b} \\right|_0^a - \\int_{0}^{a} \\frac{\\sin bx}{b} dx = \\frac{a \\sin ba}{b} + \\frac{\\cos ba - 1}{b^{2}}$。`,
    answer: "$\\dfrac{a \\sin ba}{b} + \\dfrac{\\cos ba - 1}{b^{2}}$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 44,
    type: "计算题",
    title: "指数对数复合",
    question: "44. 计算 $\\displaystyle \\int_{1}^{e} x \\ln x dx$。",
    explanation: `<strong>第一步：分部积分</strong>
令 $u = \\ln x$，$dv = x dx$。
<strong>第二步：计算</strong>
$v = \\frac{x^{2}}{2}$，$du = \\frac{1}{x} dx$。
<strong>第三步：</strong>
$\\left[\\frac{x^{2}}{2} \\ln x\\right]_1^e - \\int_{1}^{e} \\frac{x^{2}}{2} \\cdot \\frac{1}{x} dx = \\frac{e^{2} - 1}{2}$。`,
    answer: "$\\dfrac{e^{2} - 1}{2}$",
    difficulty: "medium",
    category: "分部积分法",
    method: "分部积分法"
  },
{
    id: 45,
    type: "应用题",
    title: "面积计算基础",
    question: "45. 求曲线 $y = x$ 与 $y = x^{2}$ 在 $[0,1]$ 间的夹面积。",
    explanation: `<strong>第一步：确定上、下函数</strong>
$x \ge x^{2}$。
<strong>第二步：积分</strong>
$\int_{0}^{1} (x - x^{2}) dx = \left[\frac{x^{2}}{2} - \frac{x^{3}}{3}\right]_0^1 = \frac{1}{6}$。`,
    answer: "$\dfrac{1}{6}$",
    difficulty: "easy",
    category: "定积分应用",
    method: "区域面积公式"
  },
{
    id: 46,
    type: "应用题",
    title: "旋转体体积",
    question: "46. 求 $y = \sqrt{x}$ ($0 \le x \le 4$) 绕 $x$ 轴旋转所得体积。",
    explanation: `<strong>第一步：公式</strong>
$V = \pi \int_{0}^{4} (\sqrt{x})^{2} dx = \pi \int_{0}^{4} x dx$。
<strong>第二步：计算</strong>
$= \pi \left[\frac{x^{2}}{2}\right]_0^4 = 8\pi$。`,
    answer: "$8\pi$",
    difficulty: "easy",
    category: "定积分应用",
    method: "旋转体体积公式"
  },
{
    id: 47,
    type: "应用题",
    title: "弧长计算",
    question: "47. 求曲线 $y = \frac{1}{2} x^{2}$ 在 $[0,1]$ 的弧长。",
    explanation: `<strong>第一步：弧长公式</strong>
$L = \int_{0}^{1} \sqrt{1 + (y')^{2}} dx$，$y' = x$。
<strong>第二步：代入</strong>
$L = \int_{0}^{1} \sqrt{1 + x^{2}} dx$。
<strong>第三步：换元</strong>
积分结果为 $\frac{\sqrt{2}}{2} + \frac{1}{2} \ln(1+\sqrt{2})$。`,
    answer: "$\dfrac{\sqrt{2}}{2} + \dfrac{1}{2} \ln(1+\sqrt{2})$",
    difficulty: "hard",
    category: "定积分应用",
    method: "弧长公式"
  },
{
    id: 48,
    type: "应用题",
    title: "函数平均值",
    question: "48. 求 $f(x) = \cos x$ 在 $[0,\pi]$ 上的平均值。",
    explanation: `<strong>第一步：平均值公式</strong>
$\bar{f} = \frac{1}{\pi} \int_{0}^{\pi} \cos x dx$。
<strong>第二步：计算</strong>
积分为 0。`,
    answer: "$0$",
    difficulty: "easy",
    category: "定积分应用",
    method: "平均值公式"
  },
{
    id: 49,
    type: "应用题",
    title: "物理量计算",
    question: "49. 某物体密度 $\rho(x) = 2x+1$ (kg/m)，位于 $[0,2]$，求总质量。",
    explanation: `<strong>第一步：质量积分</strong>
$m = \int_{0}^{2} (2x+1) dx$。
<strong>第二步：计算</strong>
$= [x^{2} + x]_0^2 = 6$ kg。`,
    answer: "$6$ kg",
    difficulty: "easy",
    category: "定积分应用",
    method: "物体质量计算"
  },
{
    id: 50,
    type: "应用题",
    title: "功的计算",
    question: "50. 力 $F(x) = 3x^{2}$ 作用于物体，位移 $0 \to 2$，求功。",
    explanation: `<strong>第一步：功公式</strong>
$W = \int_{0}^{2} 3x^{2} dx$。
<strong>第二步：计算</strong>
$= [x^{3}]_0^2 = 8$。`,
    answer: "$8$",
    difficulty: "easy",
    category: "定积分应用",
    method: "功的计算"
  },
{
    id: 51,
    type: "应用题",
    title: "概率密度验证",
    question: "51. 设概率密度 $f(x) = \frac{3}{8} x^{2}$，定义在 $[-1,1]$，验证其归一化。",
    explanation: `<strong>第一步：积分</strong>
$\int_{-1}^{1} \frac{3}{8} x^{2} dx = \frac{3}{4} \int_{0}^{1} x^{2} dx = \frac{1}{4}$。
<strong>第二步：结论</strong>
需将系数调整为 $\frac{3}{2}$ 才能归一化。`,
    answer: "积分结果为 $\dfrac{1}{4}$，当前系数不足以归一化",
    difficulty: "medium",
    category: "定积分应用",
    method: "概率密度检验"
  },
{
    id: 52,
    type: "应用题",
    title: "质心坐标",
    question: "52. 区域 $y = x$ 与 $y=0$，$x \in [0,1]$，密度均匀，求 $x$ 方向质心。",
    explanation: `<strong>第一步：公式</strong>
$\bar{x} = \frac{\int_{0}^{1} x^{2} dx}{\int_{0}^{1} x dx}$。
<strong>第二步：计算</strong>
$\frac{1/3}{1/2} = \frac{2}{3}$。`,
    answer: "$\dfrac{2}{3}$",
    difficulty: "medium",
    category: "定积分应用",
    method: "质心公式"
  },
{
    id: 53,
    type: "计算题",
    title: "广义积分收敛",
    question: "53. 计算 $\\displaystyle \\int_{1}^{+\\infty} \\frac{1}{x^{2}} dx$。",
    explanation: `<strong>第一步：写成极限</strong>
$\\lim_{b\\to+\\infty} \\int_{1}^{b} x^{-2} dx$。
<strong>第二步：积分</strong>
$[-\\frac{1}{x}]_1^{b} = 1 - \\frac{1}{b} \\to 1$。`,
    answer: "$1$",
    difficulty: "easy",
    category: "广义积分",
    method: "p-型积分"
  },
{
    id: 54,
    type: "计算题",
    title: "广义积分发散",
    question: "54. 讨论 $\\displaystyle \\int_{1}^{+\\infty} \\frac{1}{x} dx$ 的收敛性。",
    explanation: `<strong>第一步：极限</strong>
$\\lim_{b\\to+\\infty} \\ln b = +\\infty$。
<strong>第二步：结论</strong>
积分发散。`,
    answer: "发散",
    difficulty: "easy",
    category: "广义积分",
    method: "p-型积分"
  },
{
    id: 55,
    type: "计算题",
    title: "端点瑕积分",
    question: "55. 计算 $\\displaystyle \\int_{0}^{1} \\frac{1}{\\sqrt{x}} dx$。",
    explanation: `<strong>第一步：极限</strong>
$\\lim_{a\\to0^{+}} \\int_{a}^{1} x^{-1/2} dx = 2$。`,
    answer: "$2$",
    difficulty: "easy",
    category: "广义积分",
    method: "p-型积分"
  },
{
    id: 56,
    type: "计算题",
    title: "无穷区间指数积分",
    question: "56. 计算 $\\displaystyle \\int_{0}^{+\\infty} e^{-3x} dx$。",
    explanation: `<strong>第一步：求原函数</strong>
$-\\frac{1}{3} e^{-3x}$。
<strong>第二步：极限</strong>
结果为 $\\frac{1}{3}$。`,
    answer: "$\\dfrac{1}{3}$",
    difficulty: "easy",
    category: "广义积分",
    method: "指数型广义积分"
  },
{
    id: 57,
    type: "计算题",
    title: "三角衰减积分",
    question: "57. 计算 $\\displaystyle \\int_{0}^{+\\infty} e^{-x} \\sin x dx$。",
    explanation: `<strong>第一步：利用公式</strong>
$\\int_{0}^{+\\infty} e^{-ax} \\sin bx dx = \\frac{b}{a^{2}+b^{2}}$。
<strong>第二步：</strong>
代入 $a=b=1$ 得 $\\frac{1}{2}$。`,
    answer: "$\\dfrac{1}{2}$",
    difficulty: "medium",
    category: "广义积分",
    method: "傅里叶型积分"
  },
{
    id: 58,
    type: "计算题",
    title: "瑕积分与换元",
    question: "58. 计算 $\\displaystyle \\int_{0}^{1} \\frac{\\ln x}{\\sqrt{x}} dx$。",
    explanation: `<strong>第一步：令 $x = t^{2}$</strong>
$dx = 2t dt$。
<strong>第二步：积分</strong>
化为 $4 \\int_{0}^{1} t \\ln t dt = -1$。`,
    answer: "$-1$",
    difficulty: "medium",
    category: "广义积分",
    method: "换元+分部"
  },
{
    id: 59,
    type: "计算题",
    title: "对数发散积分",
    question: "59. 判断 $\\displaystyle \\int_{0}^{1} \\frac{dx}{x \\ln x}$ 的收敛性。",
    explanation: `<strong>第一步：设 $x = e^{-t}$</strong>
积分转换为 $\\int_{0}^{+\\infty} \\frac{1}{t} dt$。
<strong>第二步：结论</strong>
发散。`,
    answer: "发散",
    difficulty: "hard",
    category: "广义积分",
    method: "比较判别"
  },
{
    id: 60,
    type: "计算题",
    title: "广义积分综合题",
    question: "60. 计算 $\\displaystyle \\int_{0}^{+\\infty} \\frac{x}{(1+x^{2})^{2}} dx$。",
    explanation: `<strong>第一步：换元</strong>
令 $u = 1 + x^{2}$，$du = 2x dx$。
<strong>第二步：积分</strong>
$\\frac{1}{2} \\int_{1}^{+\\infty} u^{-2} du = \\frac{1}{2}$。`,
    answer: "$\\dfrac{1}{2}$",
    difficulty: "medium",
    category: "广义积分",
    method: "换元积分"
  }
];