window.exerciseData = {
  knowledgePoints: [
    {
      title: "导数应用概述",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>导数的几何意义</strong>：函数在某点的导数值等于该点处切线的斜率</li>
            <li style="margin-bottom: 10px;"><strong>导数的物理意义</strong>：位置函数的导数是速度，速度函数的导数是加速度</li>
            <li style="margin-bottom: 10px;"><strong>导数应用的主要内容</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">函数的单调性分析</li>
                <li style="margin-bottom: 5px;">函数的极值问题</li>
                <li style="margin-bottom: 5px;">函数的凹凸性与拐点</li>
                <li style="margin-bottom: 5px;">函数的渐近线</li>
                <li style="margin-bottom: 5px;">实际问题中的最值应用</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数的单调性",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>单调性判定定理</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$f'(x) > 0$在区间$I$上恒成立，则$f(x)$在$I$上单调递增</li>
                <li style="margin-bottom: 5px;">若$f'(x) < 0$在区间$I$上恒成立，则$f(x)$在$I$上单调递减</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>判断步骤</strong>：
              <ol style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">求函数的导数$f'(x)$</li>
                <li style="margin-bottom: 5px;">求出$f'(x) = 0$的所有实根</li>
                <li style="margin-bottom: 5px;">用这些根将定义域分成若干区间</li>
                <li style="margin-bottom: 5px;">判断$f'(x)$在各区间内的符号</li>
                <li style="margin-bottom: 5px;">确定函数在各区间内的单调性</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数的极值",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #f28e2c; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>极值的必要条件</strong>：若$f(x)$在$x_0$处可导且取得极值，则$f'(x_0) = 0$</li>
            <li style="margin-bottom: 10px;"><strong>第一充分条件</strong>（用一阶导数判断）：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$x_0$左侧$f'(x) > 0$，右侧$f'(x) < 0$，则$x_0$为极大值点</li>
                <li style="margin-bottom: 5px;">若$x_0$左侧$f'(x) < 0$，右侧$f'(x) > 0$，则$x_0$为极小值点</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>第二充分条件</strong>（用二阶导数判断）：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$f'(x_0) = 0$且$f''(x_0) < 0$，则$x_0$为极大值点</li>
                <li style="margin-bottom: 5px;">若$f'(x_0) = 0$且$f''(x_0) > 0$，则$x_0$为极小值点</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "函数的凹凸性与拐点",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #e15759; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>凹凸性定义</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><strong>凹函数</strong>（下凸）：函数图像位于任意两点连线的下方</li>
                <li style="margin-bottom: 5px;"><strong>凸函数</strong>（上凸）：函数图像位于任意两点连线的上方</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>凹凸性判定定理</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">若$f''(x) > 0$在区间$I$上恒成立，则$f(x)$在$I$上是凹函数</li>
                <li style="margin-bottom: 5px;">若$f''(x) < 0$在区间$I$上恒成立，则$f(x)$在$I$上是凸函数</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>拐点定义</strong>：使函数凹凸性发生改变的点称为拐点</li>
            <li style="margin-bottom: 10px;"><strong>拐点的必要条件</strong>：若$(x_0, f(x_0))$是拐点，则$f''(x_0) = 0$或$f''(x_0)$不存在</li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "洛必达法则",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #9b59b6; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>洛必达法则的条件</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">极限为 $\\frac{0}{0}$ 型或 $\\frac{\\infty}{\\infty}$ 型</li>
                <li style="margin-bottom: 5px;">分子分母在极限点附近可导</li>
                <li style="margin-bottom: 5px;">$\\lim\\limits_{x \\to a} \\frac{f'(x)}{g'(x)}$ 存在或为无穷大</li>
              </ul>
            </li>
            <li style="margin-bottom: 10px;"><strong>洛必达法则公式</strong>：
              <div style="text-align: center; margin: 10px 0;">
                $\\lim\\limits_{x \\to a} \\frac{f(x)}{g(x)} = \\lim\\limits_{x \\to a} \\frac{f'(x)}{g'(x)}$
              </div>
            </li>
            <li style="margin-bottom: 10px;"><strong>使用步骤</strong>：
              <ol style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">判断极限类型是否为 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$</li>
                <li style="margin-bottom: 5px;">对分子分母分别求导</li>
                <li style="margin-bottom: 5px;">计算新极限的值</li>
                <li style="margin-bottom: 5px;">如果仍为未定式，可继续使用洛必达法则</li>
              </ol>
            </li>
            <li style="margin-bottom: 10px;"><strong>注意事项</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">不是所有未定式都能用洛必达法则</li>
                <li style="margin-bottom: 5px;">使用前必须先验证条件</li>
                <li style="margin-bottom: 5px;">有时需要结合其他方法（如等价无穷小）</li>
                <li style="margin-bottom: 5px;">循环使用时要小心，避免无限循环</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
    },
    {
      title: "导数的实际应用",
      content: `
      <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
        <div style="border-left: 4px solid #af7aa1; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;"><strong>最值应用的一般步骤</strong>：
              <ol style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">分析问题，建立目标函数</li>
                <li style="margin-bottom: 5px;">确定自变量的取值范围</li>
                <li style="margin-bottom: 5px;">求目标函数的导数</li>
                <li style="margin-bottom: 5px;">求出所有驻点和不可导点</li>
                <li style="margin-bottom: 5px;">比较驻点、不可导点和端点的函数值</li>
                <li style="margin-bottom: 5px;">确定最值并回答实际问题</li>
              </ol>
            </li>
            <li style="margin-bottom: 10px;"><strong>常见应用类型</strong>：
              <ul style="margin-top: 5px; padding-left: 20px;">
                <li style="margin-bottom: 5px;">几何问题：最大面积、最小周长、最短距离等</li>
                <li style="margin-bottom: 5px;">物理问题：速度、加速度、功率优化等</li>
                <li style="margin-bottom: 5px;">经济问题：最大利润、最小成本、需求优化等</li>
                <li style="margin-bottom: 5px;">工程问题：材料用量、效率优化等</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    `
  }
],
exercises: [
// 第三章：微分中值定理与导数的应用
// 从专升本真题和教学题库第三章提取的习题（已调整难度）

    {
      id: 1,
      type: "选择题",
      title: "洛必达法则",
      question: "（河北高数二2021年）$\\lim\\limits_{x \\to 0} \\frac{x + \\sin 2x}{4x - \\sin x} = $ （）\nA. -1 \nB. 0 \nC. 1 \nD. 2",
      essence: "这道题考查洛必达法则求极限。当极限为 $\\frac{0}{0}$ 型时，可以对分子分母同时求导，然后代入极限值计算。关键是要正确应用洛必达法则的条件和步骤。",
      explanation: `本题考查洛必达法则求极限。
第一步：判断极限类型。当 $x \\to 0$ 时，分子 $x + \\sin 2x \\to 0$，分母 $4x - \\sin x \\to 0$，为 $\\frac{0}{0}$ 型
第二步：应用洛必达法则（分子分母同时求导）
$$\\lim_{x \\to 0} \\frac{x + \\sin 2x}{4x - \\sin x} = \\lim_{x \\to 0} \\frac{1 + 2\\cos 2x}{4 - \\cos x}$$
第三步：代入 $x = 0$ 求值
$$= \\frac{1 + 2\\cos 0}{4 - \\cos 0} = \\frac{1 + 2 \\times 1}{4 - 1} = \\frac{3}{3} = 1$$`,
      answer: "C",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 2,
      type: "选择题",
      title: "简单求导",
      question: "函数 $f(x) = x^2 + 2x$ 的导数是（）\nA. $2x$ \nB. $2x + 2$ \nC. $x^2$ \nD. $2$",
      essence: "这道题考查基本求导公式。需要对每一项分别求导：$x^2$ 的导数是 $2x$，$2x$ 的导数是 $2$。",
      explanation: `本题考查基本求导。求导规则：$(x^2)' = 2x$，$(2x)' = 2$
所以：$f'(x) = (x^2 + 2x)' = (x^2)' + (2x)' = 2x + 2$`,
      answer: "B",
      difficulty: "easy",
      category: "求导",
      method: "基本公式"
    },
    {
      id: 3,
      type: "判断题",
      title: "极值点判断",
      question: "判断：如果 $f'(x_0) = 0$，那么 $x_0$ 一定是函数 $f(x)$ 的极值点（）\nA. 正确 \nB. 错误 \nC. 需要更多条件 \nD. 只对连续函数正确",
      essence: "这道题考查极值点的判断条件。$f'(x_0) = 0$ 只是极值点的必要条件，不是充分条件。还需要在 $x_0$ 两侧导数变号才能确定是极值点。可以用 $f(x) = x^3$ 作为反例。",
      explanation: `本题考查极值点的判断条件。这个说法是错误的！
$f'(x_0) = 0$ 只是极值点的必要条件，不是充分条件。
反例：$f(x) = x^3$，$f'(x) = 3x^2$，$f'(0) = 0$，但 $x = 0$ 不是极值点！
判断方法：在 $x < 0$ 时，$f'(x) = 3x^2 > 0$，函数递增；在 $x > 0$ 时，$f'(x) = 3x^2 > 0$，函数递增
导数不变号，所以 $x = 0$ 不是极值点，只是拐点
正确的极值判断需要：1. $f'(x_0) = 0$（或不存在）2. 在 $x_0$ 两侧导数变号`,
      answer: "B",
      difficulty: "medium",
      category: "极值",
      method: "概念理解"
    },
    {
      id: 4,
      type: "选择题",
      title: "最值问题",
      question: "函数 $f(x) = x^2 - 4x + 3$ 在区间 $[0,3]$ 上的最小值是（）\nA. -1 \nB. 0 \nC. 3 \nD. 4",
      essence: "这道题考查闭区间上的最值问题。需要比较驻点和端点的函数值，找出最大值和最小值。先求导数找驻点，然后计算驻点和端点的函数值进行比较。",
      explanation: `本题考查闭区间上的最值问题。方法：比较驻点和端点的函数值
第一步：求导数和驻点。$f'(x) = 2x - 4$，令 $f'(x) = 0$，得 $x = 2$
第二步：计算各点函数值。左端点：$f(0) = 0 - 0 + 3 = 3$；驻点：$f(2) = 4 - 8 + 3 = -1$；右端点：$f(3) = 9 - 12 + 3 = 0$
第三步：比较大小。$f(2) = -1 < f(3) = 0 < f(0) = 3$，最小值为 $-1$`,
      answer: "A",
      difficulty: "easy",
      category: "最值",
      method: "比较法"
    },
    {
      id: 5,
      type: "填空题",
      title: "极值点",
      question: "函数 $f(x) = x^3 - 3x$ 的极小值点是 $x = $ ______",
      essence: "这道题考查极值点的求解。需要先求导数找驻点，然后通过分析导数在驻点两侧的符号变化来判断是极大值点还是极小值点。",
      explanation: `本题考查极值点的求解。
第一步：求导数 $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$
第二步：求驻点。令 $f'(x) = 0$，得 $x = 1$ 或 $x = -1$
第三步：判断极值类型（用导数符号变化）
在 $x = -1$ 处：左侧 $f'(x) > 0$，右侧 $f'(x) < 0$，是极大值点
在 $x = 1$ 处：左侧 $f'(x) < 0$，右侧 $f'(x) > 0$，是极小值点
极小值点是 $x = 1$`,
      answer: "1",
      difficulty: "medium",
      category: "极值",
      method: "导数判断"
    },
    {
      id: 6,
      type: "填空题",
      title: "单调递增区间",
      question: "函数 $f(x) = x^3 - 12x$ 的单调递增区间是 ______",
      essence: "这道题考查单调区间的求解。需要先求导数，找到导数为零的点，然后分析导数在各区间的符号，从而确定函数的单调递增和递减区间。",
      explanation: `本题考查单调区间的求解。
第一步：求导数 $f'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x-2)(x+2)$
第二步：求驻点。令 $f'(x) = 0$，得 $x = 2$ 或 $x = -2$
第三步：判断导数符号
当 $x < -2$ 时：$(x-2) < 0$，$(x+2) < 0$，所以 $f'(x) > 0$
当 $-2 < x < 2$ 时：$(x-2) < 0$，$(x+2) > 0$，所以 $f'(x) < 0$
当 $x > 2$ 时：$(x-2) > 0$，$(x+2) > 0$，所以 $f'(x) > 0$
单调递增区间：$(-\\infty,-2] \\cup [2,+\\infty)$`,
      answer: "$(-\\infty,-2] \\cup [2,+\\infty)$",
      difficulty: "medium",
      category: "单调性",
      method: "导数判断"
    },
    {
      id: 7,
      type: "填空题",
      title: "最大值",
      question: "函数 $f(x) = -x^2 + 4x - 3$ 在区间 $[0,3]$ 上的最大值是 ______",
      essence: "这道题考查闭区间上的最值问题。需要比较驻点和端点的函数值，找出最大值和最小值。先求导数找驻点，然后计算驻点和端点的函数值进行比较。",
      explanation: `本题考查闭区间上的最值。
第一步：求导数和驻点。$f'(x) = -2x + 4$，令 $f'(x) = 0$，得 $x = 2$
第二步：计算各点函数值。端点：$f(0) = -3$；驻点：$f(2) = -4 + 8 - 3 = 1$；端点：$f(3) = -9 + 12 - 3 = 0$
第三步：比较。最大值为 $f(2) = 1$`,
      answer: "1",
      difficulty: "easy",
      category: "最值",
      method: "比较法"
    },
    {
      id: 8,
      type: "计算题",
      title: "求单调区间",
      question: "求函数 $f(x) = x^3 - 3x^2 + 2$ 的单调区间",
      essence: "这道题考查用导数求函数的单调区间。需要先求导数，找到导数为零的点，然后分析导数在各区间的符号，从而确定函数的单调递增和递减区间。",
      explanation: `第一步：求导数 $f'(x) = 3x^2 - 6x = 3x(x - 2)$
第二步：求驻点。令 $f'(x) = 0$：$3x(x - 2) = 0$，得 $x = 0$ 或 $x = 2$
第三步：列表分析导数符号。在数轴上标出点 0 和 2，分三个区间讨论：
区间 $(-\\infty, 0)$：取 $x = -1$，$f'(-1) = 3(-1)(-3) = 9 > 0$，递增
区间 $(0, 2)$：取 $x = 1$，$f'(1) = 3(1)(-1) = -3 < 0$，递减
区间 $(2, +\\infty)$：取 $x = 3$，$f'(3) = 3(3)(1) = 9 > 0$，递增
第四步：写出结论。单调递增区间：$(-\\infty, 0] \\cup [2, +\\infty)$；单调递减区间：$[0, 2]$`,
      answer: "单调递增区间：$(-\\infty, 0] \\cup [2, +\\infty)$；单调递减区间：$[0, 2]$",
      difficulty: "medium",
      category: "单调性",
      method: "导数法"
    },
    {
      id: 9,
      type: "计算题",
      title: "求极值",
      question: "求函数 $f(x) = x^3 - 6x^2 + 9x + 1$ 的极值",
      essence: "这道题考查用导数求函数的极值。需要先求导数找驻点，然后通过分析导数在驻点两侧的符号变化来判断是极大值点还是极小值点，最后计算极值。",
      explanation: `第一步：求导数 $f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$
第二步：求驻点。令 $f'(x) = 0$：$(x-1)(x-3) = 0$，得 $x = 1$ 或 $x = 3$
第三步：判断极值（用导数符号变化法）。画数轴，标出点 1 和 3：
$x < 1$：选 $x = 0$，$f'(0) = 3(-1)(-3) = 9 > 0$，函数递增
$1 < x < 3$：选 $x = 2$，$f'(2) = 3(1)(-1) = -3 < 0$，函数递减
$x > 3$：选 $x = 4$，$f'(4) = 3(3)(1) = 9 > 0$，函数递增
导数变化：+ → - → +
第四步：确定极值。在 $x = 1$ 处：导数由正变负，是极大值点，$f(1) = 1 - 6 + 9 + 1 = 5$（极大值）
在 $x = 3$ 处：导数由负变正，是极小值点，$f(3) = 27 - 54 + 27 + 1 = 1$（极小值）`,
      answer: "极大值：$f(1) = 5$；极小值：$f(3) = 1$",
      difficulty: "medium",
      category: "极值",
      method: "导数符号法"
    },
    {
      id: 10,
      type: "计算题",
      title: "最值问题",
      question: "求函数 $f(x) = x^3 - 3x + 1$ 在区间 $[-2, 2]$ 上的最大值和最小值",
      essence: "这道题考查闭区间上的最值问题。需要比较驻点和端点的函数值，找出最大值和最小值。先求导数找驻点，然后计算驻点和端点的函数值进行比较。",
      explanation: `第一步：求导数和驻点 $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$
令 $f'(x) = 0$，得 $x = 1$ 或 $x = -1$，两个驻点都在区间 $[-2, 2]$ 内
第二步：计算所有关键点的函数值。需要计算：两个端点和两个驻点
左端点：$f(-2) = (-2)^3 - 3(-2) + 1 = -8 + 6 + 1 = -1$
驻点：$f(-1) = (-1)^3 - 3(-1) + 1 = -1 + 3 + 1 = 3$
驻点：$f(1) = 1^3 - 3(1) + 1 = 1 - 3 + 1 = -1$
右端点：$f(2) = 2^3 - 3(2) + 1 = 8 - 6 + 1 = 3$
第三步：比较大小。$f(-2) = -1$，$f(-1) = 3$，$f(1) = -1$，$f(2) = 3$
最大值：3（在 $x = -1$ 和 $x = 2$ 处取得）；最小值：-1（在 $x = -2$ 和 $x = 1$ 处取得）`,
      answer: "最大值：3；最小值：-1",
      difficulty: "medium",
      category: "最值",
      method: "比较法"
    },
    {
      id: 11,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{x}$",
      essence: "这道题考查洛必达法则求极限。当极限为 $\\frac{0}{0}$ 型时，可以对分子分母同时求导，然后代入极限值计算。需要先判断极限类型，再应用洛必达法则。",
      explanation: `第一步：判断极限类型。当 $x \\to 0$ 时：分子：$e^x - 1 \\to e^0 - 1 = 1 - 1 = 0$；分母：$x \\to 0$
这是 $\\frac{0}{0}$ 型，可以用洛必达法则
第二步：应用洛必达法则。对分子分母同时求导：分子的导数：$(e^x - 1)' = e^x$；分母的导数：$(x)' = 1$
$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\lim_{x \\to 0} \\frac{e^x}{1}$$
第三步：计算极限 $$= \\lim_{x \\to 0} e^x = e^0 = 1$$
验证（用泰勒展开）：$e^x = 1 + x + \\frac{x^2}{2!} + ...$
$$\\frac{e^x - 1}{x} = \\frac{x + \\frac{x^2}{2!} + ...}{x} = 1 + \\frac{x}{2!} + ... \\to 1$$`,
      answer: "1",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 12,
      type: "计算题",
      title: "简单求导",
      question: "求函数 $f(x) = 3x^2 - 6x + 1$ 的导数",
      essence: "这道题考查多项式函数的求导。每一项分别求导即可，运算简单。",
      explanation: `求多项式的导数，逐项求导：$f(x) = 3x^2 - 6x + 1$
各项求导：$(3x^2)' = 6x$，$(-6x)' = -6$，$(1)' = 0$
所以：$f'(x) = 6x - 6$`,
      answer: "$f'(x) = 6x - 6$",
      difficulty: "easy",
      category: "求导",
      method: "基本公式"
    },
    {
      id: 13,
      type: "计算题",
      title: "利用导数判断函数单调性",
      question: "讨论函数 $f(x) = 3x^2 - x^3$ 的单调性",
      essence: "这道题考查利用导数判断函数单调性的方法。导数大于0则单调递增，导数小于0则单调递减。",
      explanation: `<strong>第一步：求导数</strong>

  $$f(x) = 3x^2 - x^3$$

  $$f'(x) = 6x - 3x^2 = 3x(2-x)$$

  

  <strong>第二步：求驻点</strong>

  令 $f'(x) = 0$：

  $$3x(2-x) = 0$$

  得驻点：$x_1 = 0$，$x_2 = 2$

  

  <strong>第三步：列表判断</strong>

  驻点将定义域 $(-\\infty,+\\infty)$ 分成3个区间：

  

  | x | $(-\\infty,0)$ | 0 | $(0,2)$ | 2 | $(2,+\\infty)$ |

  |---|---|---|---|---|---|

  | $f'(x)$ | - | 0 | + | 0 | - |

  | $f(x)$ | ↘ | | ↗ | | ↘ |

  

  <strong>第四步：得出结论</strong>

  - 在 $(-\\infty,0]$ 上单调递减

  - 在 $[0,2]$ 上单调递增

  - 在 $[2,+\\infty)$ 上单调递减

  

  <strong>定理：</strong>若 $f'(x) > 0$，则函数单调递增；若 $f'(x) < 0$，则函数单调递减`,
      answer: "单调递减区间：$(-\\infty,0]$ 和 $[2,+\\infty)$；单调递增区间：$[0,2]$",
      difficulty: "medium",
      category: "导数应用",
      method: "导数判断单调性"
    },
    {
      id: 14,
      type: "计算题",
      title: "函数极值-二次函数",
      question: "求函数 $y=1-x^2$ 的极值",
      essence: "这道题考查利用一阶导数判断函数极值的方法。当导数变号时取得极值。",
      explanation: `<strong>第一步：求导数</strong>

  $$y = 1-x^2$$

  $$y' = -2x$$

  

  <strong>第二步：求驻点</strong>

  令 $y'=0$：$-2x = 0$，得 $x=0$

  

  <strong>第三步：列表判断</strong>

  

  | x | $(-\\infty,0)$ | 0 | $(0,+\\infty)$ |

  |---|---|---|---|

  | $y'$ | + | 0 | - |

  | $y$ | ↗ | 极大值 | ↘ |

  

  <strong>第四步：计算极值</strong>

  $$y(0) = 1 - 0^2 = 1$$

  

  <strong>第五步：得出结论</strong>

  函数在 $x=0$ 处取得极大值 $y=1$

  

  <strong>定理(极值第二充分条件)：</strong>

  - 若 $f'(x_0)=0$ 且 $f''(x_0)<0$，则 $f(x_0)$ 为极大值

  - 若 $f'(x_0)=0$ 且 $f''(x_0)>0$，则 $f(x_0)$ 为极小值`,
      answer: "极大值：$y=1$（在$x=0$处）",
      difficulty: "easy",
      category: "导数应用",
      method: "一阶导数判断极值"
    },
    {
      id: 15,
      type: "计算题",
      title: "函数极值-三次函数",
      question: "求函数 $f(x) = x^3 - 6x^2 + 9x$ 的极值",
      essence: "这道题考查函数极值的两种求法：一阶导数法和二阶导数法。可以任选一种方法求解。",
      explanation: `<strong>方法一：一阶导数法</strong>

  

  第一步：求导数

  $$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$$

  

  第二步：求驻点

  令 $f'(x)=0$：$3(x-1)(x-3)=0$，得 $x_1=1$，$x_2=3$

  

  第三步：列表判断

  

  | x | $(-\\infty,1)$ | 1 | $(1,3)$ | 3 | $(3,+\\infty)$ |

  |---|---|---|---|---|---|

  | $f'(x)$ | + | 0 | - | 0 | + |

  | $f(x)$ | ↗ | 极大值 | ↘ | 极小值 | ↗ |

  

  第四步：计算极值

  $$f(1) = 1 - 6 + 9 = 4$$（极大值）

  $$f(3) = 27 - 54 + 27 = 0$$（极小值）

  

  <strong>方法二：二阶导数法</strong>

  

  $$f'(x) = 3x^2 - 12x + 9$$

  $$f''(x) = 6x - 12$$

  

  驻点：$x_1=1$，$x_2=3$

  

  $$f''(1) = -6 < 0$$，所以 $f(1)=4$ 为极大值

  $$f''(3) = 6 > 0$$，所以 $f(3)=0$ 为极小值`,
      answer: "极大值：$f(1)=4$；极小值：$f(3)=0$",
      difficulty: "medium",
      category: "导数应用",
      method: "导数判断极值"
    },
    {
      id: 16,
      type: "计算题",
      title: "切线与法线方程",
      question: "求曲线 $y=\\dfrac{1}{x}$ 在点 $(2,\\tfrac{1}{2})$ 处的切线与法线方程",
      essence: "导数的几何应用：切线斜率 $k = y'(x_0)$，法线斜率 $k_n = -\\tfrac{1}{k}$",
      explanation: `<strong>第一步：求导并求斜率</strong>\\n\\n$y=\\dfrac{1}{x}$，$y'=-\\dfrac{1}{x^2}$，故在 $x=2$ 处切线斜率 $k=-\\dfrac{1}{4}$。\\n\\n<strong>第二步：切线方程（点斜式）</strong>\\n\\n$y-\\tfrac{1}{2}=-\\dfrac{1}{4}(x-2)$，化简得：$x+4y-4=0$。\\n\\n<strong>第三步：法线方程</strong>\\n\\n法线斜率 $k_n=4$，$y-\\tfrac{1}{2}=4(x-2)$，化简得：$8x-2y-15=0$。`,
      answer: "切线：$x+4y-4=0$；法线：$8x-2y-15=0$",
      difficulty: "easy",
      category: "切线问题",
      method: "切线斜率法"
    },
    {
      id: 17,
      type: "计算题",
      title: "闭区间最值",
      question: "求函数$f(x) = 2x^3 + 3x^2 - 12x$在区间$[-3, 4]$上的最大值和最小值",
      essence: "这道题考查闭区间上的最值求法。比较端点值和驻点值",
      explanation: `$f'(x) = 6x^2 + 6x - 12 = 6(x+2)(x-1)$；令$f'(x) = 0$，得驻点$x_1 = -2$，$x_2 = 1$；计算各点函数值：$f(-3) = 9$，$f(-2) = 20$，$f(1) = -7$，$f(4) = 128$；比较得：最大值$f(4) = 128$，最小值$f(1) = -7$`,
      answer: "最大值$128$，最小值$-7$",
      difficulty: "medium",
      category: "导数的应用",
      method: "闭区间最值"
    },
    {
      id: 18,
      type: "计算题",
      title: "闭区间上求最值",
      question: "求函数 $f(x) = 2x^3 + 3x^2 - 12x$ 在区间 $[-3, 4]$ 上的最大值和最小值",
      essence: "比较驻点和端点的函数值",
      explanation: `$f'(x) = 6x^2 + 6x - 12 = 6(x+2)(x-1)$

令 $f'(x) = 0$，得驻点 $x_1 = -2$，$x_2 = 1$

计算函数值：
$f(-2) = 20$
$f(1) = -7$
$f(-3) = 9$（左端点）
$f(4) = 128$（右端点）

比较可得：最大值 $f(4) = 128$，最小值 $f(1) = -7$`,
      answer: "最大值：128；最小值：-7",
      difficulty: "medium",
      category: "最值",
      method: "驻点法"
    },
    {
      id: 19,
      type: "计算题",
      title: "求函数的极值点和极值",
      question: "求下列函数的极值点和极值：\n(1) $f(x) = \\frac{1}{3}x^3 - x^2 - 3x + 3$\n(2) $f(x) = x - \\ln(1+x)$\n(3) $f(x) = \\frac{2x}{1+x^2}$\n(4) $f(x) = 3x^{2/3} - x$",
      essence: "求驻点，用一阶或二阶导数判别法确定极值",
      explanation: `<strong>(1) $f(x) = \\frac{1}{3}x^3 - x^2 - 3x + 3$</strong>

$f'(x) = x^2 - 2x - 3 = (x-3)(x+1)$

令 $f'(x) = 0$，得 $x = -1$ 或 $x = 3$

$f''(x) = 2x - 2$
$f''(-1) = -4 < 0$，极大值点
$f''(3) = 4 > 0$，极小值点

极大值：$f(-1) = \\frac{14}{3}$
极小值：$f(3) = -6$

<strong>(2) $f(x) = x - \\ln(1+x)$</strong>

$f'(x) = 1 - \\frac{1}{1+x} = \\frac{x}{1+x}$

令 $f'(x) = 0$，得 $x = 0$

$f''(x) = \\frac{1}{(1+x)^2} > 0$

极小值：$f(0) = 0$

<strong>(3) $f(x) = \\frac{2x}{1+x^2}$</strong>

$f'(x) = \\frac{2(1+x^2) - 2x \\cdot 2x}{(1+x^2)^2} = \\frac{2(1-x^2)}{(1+x^2)^2}$

令 $f'(x) = 0$，得 $x = \\pm 1$

极大值：$f(1) = 1$
极小值：$f(-1) = -1$

<strong>(4) $f(x) = 3x^{2/3} - x$</strong>

$f'(x) = 2x^{-1/3} - 1 = \\frac{2}{\\sqrt[3]{x}} - 1$

令 $f'(x) = 0$，得 $x = 8$

$x < 8$ 时 $f' > 0$，$x > 8$ 时 $f' < 0$

极大值：$f(8) = 3 \\cdot 4 - 8 = 4$`,
      answer: "(1) 极大值 $f(-1) = \\frac{14}{3}$，极小值 $f(3) = -6$\n(2) 极小值 $f(0) = 0$\n(3) 极大值 $f(1) = 1$，极小值 $f(-1) = -1$\n(4) 极大值 $f(8) = 4$",
      difficulty: "medium",
      category: "函数的单调性与极值",
      method: "导数法"
    },
    {
      id: 20,
      type: "计算题",
      title: "求函数在闭区间上的最值",
      question: "求下列函数在指定区间上的最值：\n(1) $y = 2x^3 - 3x^2 - 80$，$[-1, 4]$\n(2) $y = x^4 - 8x$，$[-1, 3]$\n(3) $y = x + \\sqrt{1-x}$，$[-5, 1]$\n(4) $y = \\ln(x^2 + 1)$，$[-1, 2]$",
      essence: "闭区间上连续函数的最值：比较驻点和端点的函数值",
      explanation: `<strong>(1) $y = 2x^3 - 3x^2 - 80$，$[-1, 4]$</strong>

$y' = 6x^2 - 6x = 6x(x-1)$
令 $y' = 0$，得 $x = 0$ 或 $x = 1$

计算函数值：
$y(-1) = -2 - 3 - 80 = -85$
$y(0) = -80$
$y(1) = 2 - 3 - 80 = -81$
$y(4) = 128 - 48 - 80 = 0$

最大值：$y(4) = 0$
最小值：$y(-1) = -85$

<strong>(2) $y = x^4 - 8x$，$[-1, 3]$</strong>

$y' = 4x^3 - 8 = 4(x^3 - 2)$
令 $y' = 0$，得 $x = \\sqrt[3]{2} \\approx 1.26$

$y(-1) = 1 + 8 = 9$
$y(\\sqrt[3]{2}) = 2^{4/3} - 8\\sqrt[3]{2} \\approx -10.08$
$y(3) = 81 - 24 = 57$

最大值：$y(3) = 57$
最小值：$y(\\sqrt[3]{2}) = 2^{4/3} - 8\\sqrt[3]{2}$

<strong>(3) $y = x + \\sqrt{1-x}$，$[-5, 1]$</strong>

$y' = 1 - \\frac{1}{2\\sqrt{1-x}}$
令 $y' = 0$，得 $\\sqrt{1-x} = \\frac{1}{2}$，$x = \\frac{3}{4}$

$y(-5) = -5 + \\sqrt{6} \\approx -2.55$
$y(\\frac{3}{4}) = \\frac{3}{4} + \\frac{1}{2} = \\frac{5}{4}$
$y(1) = 1$

最大值：$y(\\frac{3}{4}) = \\frac{5}{4}$
最小值：$y(-5) = -5 + \\sqrt{6}$

<strong>(4) $y = \\ln(x^2 + 1)$，$[-1, 2]$</strong>

$y' = \\frac{2x}{x^2+1}$
令 $y' = 0$，得 $x = 0$

$y(-1) = \\ln 2$
$y(0) = 0$
$y(2) = \\ln 5$

最大值：$y(2) = \\ln 5$
最小值：$y(0) = 0$`,
      answer: "(1) 最大值0，最小值-85\n(2) 最大值57，最小值$2^{4/3} - 8\\sqrt[3]{2}$\n(3) 最大值$\\frac{5}{4}$，最小值$-5 + \\sqrt{6}$\n(4) 最大值$\\ln 5$，最小值0",
      difficulty: "medium",
      category: "函数的最值",
      method: "闭区间最值法"
    },
    {
      id: 21,
      type: "选择题",
      title: "洛必达法则基础",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{\\sin x}{x} = $ （）\nA. 0 \nB. 1 \nC. $\\infty$ \nD. 不存在",
      essence: "这是洛必达法则最基础的应用，分子分母都趋于0，可以用洛必达法则",
      explanation: `当 $x \\to 0$ 时，分子 $\\sin x \\to 0$，分母 $x \\to 0$，为 $\\frac{0}{0}$ 型

应用洛必达法则：
$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{(\\sin x)'}{(x)'} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = \\cos 0 = 1$$

这是一个重要极限，应该记住。`,
      answer: "B",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 22,
      type: "选择题",
      title: "洛必达法则-三角函数",
      question: "求极限 $\\lim\\limits_{x \\to 0} \\frac{1-\\cos x}{x^2} = $ （）\nA. 0 \nB. $\\frac{1}{2}$ \nC. 1 \nD. 2",
      essence: "分子分母都趋于0，用洛必达法则，需要求导两次",
      explanation: `当 $x \\to 0$ 时，$1-\\cos x \\to 0$，$x^2 \\to 0$，为 $\\frac{0}{0}$ 型

第一次应用洛必达法则：
$$\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} = \\lim_{x \\to 0} \\frac{\\sin x}{2x}$$

仍为 $\\frac{0}{0}$ 型，再次应用洛必达法则：
$$= \\lim_{x \\to 0} \\frac{\\cos x}{2} = \\frac{1}{2}$$`,
      answer: "B",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 23,
      type: "填空题",
      title: "洛必达法则-指数函数",
      question: "$\\lim\\limits_{x \\to 0} \\frac{e^{2x}-1}{x} = $ ______",
      essence: "0/0型，用洛必达法则",
      explanation: `当 $x \\to 0$ 时，$e^{2x}-1 \\to 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

应用洛必达法则：
$$\\lim_{x \\to 0} \\frac{e^{2x}-1}{x} = \\lim_{x \\to 0} \\frac{(e^{2x}-1)'}{(x)'} = \\lim_{x \\to 0} \\frac{2e^{2x}}{1} = 2e^0 = 2$$`,
      answer: "2",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 24,
      type: "填空题",
      title: "洛必达法则-对数函数",
      question: "$\\lim\\limits_{x \\to 0} \\frac{\\ln(1+x)}{x} = $ ______",
      essence: "0/0型，用洛必达法则",
      explanation: `当 $x \\to 0$ 时，$\\ln(1+x) \\to 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

应用洛必达法则：
$$\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = \\lim_{x \\to 0} \\frac{\\frac{1}{1+x}}{1} = \\frac{1}{1+0} = 1$$`,
      answer: "1",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 25,
      type: "计算题",
      title: "洛必达法则-多项式",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 1} \\frac{x^3-1}{x^2-1}$",
      essence: "0/0型，用洛必达法则",
      explanation: `第一步：判断极限类型
当 $x \\to 1$ 时，$x^3-1 \\to 0$，$x^2-1 \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 1} \\frac{x^3-1}{x^2-1} = \\lim_{x \\to 1} \\frac{3x^2}{2x}$$

第三步：化简并求值
$$= \\lim_{x \\to 1} \\frac{3x}{2} = \\frac{3 \\times 1}{2} = \\frac{3}{2}$$`,
      answer: "$\\frac{3}{2}$",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 26,
      type: "计算题",
      title: "洛必达法则-三角与多项式",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{\\sin 3x}{2x}$",
      essence: "0/0型，用洛必达法则",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$\\sin 3x \\to 0$，$2x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{\\sin 3x}{2x} = \\lim_{x \\to 0} \\frac{3\\cos 3x}{2}$$

第三步：代入求值
$$= \\frac{3\\cos 0}{2} = \\frac{3 \\times 1}{2} = \\frac{3}{2}$$`,
      answer: "$\\frac{3}{2}$",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 27,
      type: "计算题",
      title: "洛必达法则-指数差",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{e^x - e^{-x}}{x}$",
      essence: "0/0型，用洛必达法则",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$e^x - e^{-x} \\to 1-1 = 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{e^x - e^{-x}}{x} = \\lim_{x \\to 0} \\frac{e^x + e^{-x}}{1}$$

第三步：代入求值
$$= e^0 + e^0 = 1 + 1 = 2$$`,
      answer: "2",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 28,
      type: "计算题",
      title: "洛必达法则-对数差",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 1} \\frac{\\ln x}{x-1}$",
      essence: "0/0型，用洛必达法则",
      explanation: `第一步：判断极限类型
当 $x \\to 1$ 时，$\\ln x \\to \\ln 1 = 0$，$x-1 \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 1} \\frac{\\ln x}{x-1} = \\lim_{x \\to 1} \\frac{\\frac{1}{x}}{1}$$

第三步：代入求值
$$= \\frac{1}{1} = 1$$`,
      answer: "1",
      difficulty: "easy",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 29,
      type: "选择题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{\\arcsin x}{x} = $ （）\nA. 0 \nB. 1 \nC. $\\frac{\\pi}{2}$ \nD. 不存在",
      essence: "这道题考查反三角函数的洛必达法则应用。当极限为 $\\frac{0}{0}$ 型时，必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$\\arcsin x \\to 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{\\arcsin x}{x} = \\lim_{x \\to 0} \\frac{\\frac{1}{\\sqrt{1-x^2}}}{1} = \\lim_{x \\to 0} \\frac{1}{\\sqrt{1-x^2}}$$

第三步：代入求值
$$= \\frac{1}{\\sqrt{1-0^2}} = \\frac{1}{1} = 1$$`,
      answer: "B",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 30,
      type: "填空题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x} = $ ______",
      essence: "这道题考查根式函数的洛必达法则应用。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$\\sqrt{1+x} - 1 \\to 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x} = \\lim_{x \\to 0} \\frac{\\frac{1}{2\\sqrt{1+x}}}{1} = \\lim_{x \\to 0} \\frac{1}{2\\sqrt{1+x}}$$

第三步：代入求值
$$= \\frac{1}{2\\sqrt{1+0}} = \\frac{1}{2}$$`,
      answer: "$\\frac{1}{2}$",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 31,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{x - \\sin x}{x^3}$",
      essence: "这道题需要多次使用洛必达法则。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$x - \\sin x \\to 0$，$x^3 \\to 0$，为 $\\frac{0}{0}$ 型

第二步：第一次应用洛必达法则
$$\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3} = \\lim_{x \\to 0} \\frac{1 - \\cos x}{3x^2}$$

仍为 $\\frac{0}{0}$ 型

第三步：第二次应用洛必达法则
$$= \\lim_{x \\to 0} \\frac{\\sin x}{6x}$$

仍为 $\\frac{0}{0}$ 型

第四步：第三次应用洛必达法则
$$= \\lim_{x \\to 0} \\frac{\\cos x}{6} = \\frac{1}{6}$$`,
      answer: "$\\frac{1}{6}$",
      difficulty: "hard",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 32,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{x^2}{1 - \\cos x}$",
      essence: "这道题考查洛必达法则的应用。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$x^2 \\to 0$，$1 - \\cos x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{x^2}{1 - \\cos x} = \\lim_{x \\to 0} \\frac{2x}{\\sin x}$$

仍为 $\\frac{0}{0}$ 型

第三步：再次应用洛必达法则
$$= \\lim_{x \\to 0} \\frac{2}{\\cos x} = \\frac{2}{1} = 2$$`,
      answer: "2",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 33,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{e^{x^2} - 1}{x^2}$",
      essence: "这道题考查复合指数函数的洛必达法则应用。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$e^{x^2} - 1 \\to 0$，$x^2 \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{e^{x^2} - 1}{x^2} = \\lim_{x \\to 0} \\frac{2xe^{x^2}}{2x} = \\lim_{x \\to 0} \\frac{e^{x^2}}{1}$$

第三步：代入求值
$$= e^{0^2} = e^0 = 1$$`,
      answer: "1",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 34,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{\\ln(1 + x^2)}{x^2}$",
      essence: "这道题考查对数复合函数的洛必达法则应用。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$\\ln(1 + x^2) \\to 0$，$x^2 \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{\\ln(1 + x^2)}{x^2} = \\lim_{x \\to 0} \\frac{\\frac{2x}{1 + x^2}}{2x} = \\lim_{x \\to 0} \\frac{1}{1 + x^2}$$

第三步：代入求值
$$= \\frac{1}{1 + 0^2} = 1$$`,
      answer: "1",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 35,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{\\arctan x}{x}$",
      essence: "这道题考查反三角函数的洛必达法则应用。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$\\arctan x \\to 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{\\arctan x}{x} = \\lim_{x \\to 0} \\frac{\\frac{1}{1 + x^2}}{1} = \\lim_{x \\to 0} \\frac{1}{1 + x^2}$$

第三步：代入求值
$$= \\frac{1}{1 + 0^2} = 1$$`,
      answer: "1",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 36,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{\\sin x - x}{x^3}$",
      essence: "这道题需要多次使用洛必达法则。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$\\sin x - x \\to 0$，$x^3 \\to 0$，为 $\\frac{0}{0}$ 型

第二步：第一次应用洛必达法则
$$\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = \\lim_{x \\to 0} \\frac{\\cos x - 1}{3x^2}$$

仍为 $\\frac{0}{0}$ 型

第三步：第二次应用洛必达法则
$$= \\lim_{x \\to 0} \\frac{-\\sin x}{6x}$$

仍为 $\\frac{0}{0}$ 型

第四步：第三次应用洛必达法则
$$= \\lim_{x \\to 0} \\frac{-\\cos x}{6} = -\\frac{1}{6}$$`,
      answer: "$-\\frac{1}{6}$",
      difficulty: "hard",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 37,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{e^{3x} - e^x}{x}$",
      essence: "这道题考查指数函数差的洛必达法则应用。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$e^{3x} - e^x \\to 1 - 1 = 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{e^{3x} - e^x}{x} = \\lim_{x \\to 0} \\frac{3e^{3x} - e^x}{1}$$

第三步：代入求值
$$= 3e^0 - e^0 = 3 - 1 = 2$$`,
      answer: "2",
      difficulty: "medium",
      category: "洛必达法则",
      method: "洛必达法则"
    },
    {
      id: 38,
      type: "计算题",
      title: "洛必达法则",
      question: "用洛必达法则求极限 $\\lim\\limits_{x \\to 0} \\frac{\\sqrt{1 + \\sin x} - 1}{x}$",
      essence: "这道题考查根式与三角函数复合的洛必达法则应用。必须使用洛必达法则，不能用等价无穷小。",
      explanation: `第一步：判断极限类型
当 $x \\to 0$ 时，$\\sqrt{1 + \\sin x} - 1 \\to 0$，$x \\to 0$，为 $\\frac{0}{0}$ 型

第二步：应用洛必达法则
$$\\lim_{x \\to 0} \\frac{\\sqrt{1 + \\sin x} - 1}{x} = \\lim_{x \\to 0} \\frac{\\frac{\\cos x}{2\\sqrt{1 + \\sin x}}}{1} = \\lim_{x \\to 0} \\frac{\\cos x}{2\\sqrt{1 + \\sin x}}$$

第三步：代入求值
$$= \\frac{\\cos 0}{2\\sqrt{1 + \\sin 0}} = \\frac{1}{2\\sqrt{1 + 0}} = \\frac{1}{2}$$`,
      answer: "$\\frac{1}{2}$",
      difficulty: "hard",
      category: "洛必达法则",
      method: "洛必达法则"
    }
  ]
};