// 全局变量，包含知识点和习题数据
window.exerciseData = {
  // 知识点
  knowledgePoints: [
    {
      title: "微分方程基础知识",
      content: `
<div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
  <!-- 基本概念部分 -->
  <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 20px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
      <div style="flex: 1; min-width: 300px;">
        <p style="margin: 0 0 8px 0;"><strong>微分方程的定义</strong>：含有未知函数及其导数的方程</p>
        <ul style="margin: 0 0 10px 15px; padding: 0 0 0 10px; list-style-type: circle;">
          <li style="margin-bottom: 6px;"><strong>阶数</strong>：方程中未知函数的最高阶导数的阶数</li>
          <li style="margin-bottom: 6px;"><strong>解</strong>：满足微分方程的函数</li>
        </ul>

        <p style="margin: 10px 0 8px 0;"><strong>常见形式</strong>：</p>
        <div style="margin: 0 0 6px 15px; padding: 6px 10px; background: #f0f5ff; border-radius: 4px;">
          一阶微分方程：$F(x,y,\\frac{dy}{dx})=0$ 或 $\\frac{dy}{dx}=f(x,y)$
        </div>
        <div style="margin: 6px 0 0 15px; padding: 6px 10px; background: #f0f5ff; border-radius: 4px;">
          二阶线性微分方程：$y''+py'+qy=f(x)$
        </div>
      </div>

      <div style="flex: 1; min-width: 300px;">
        <div style="margin: 0 0 12px 0; padding: 8px 12px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #4e79a7;">
          <strong>通解</strong>：包含任意常数的解，其中任意常数的个数等于微分方程的阶数
        </div>

        <div style="margin: 12px 0 12px 0; padding: 8px 12px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #4e79a7;">
          <strong>特解</strong>：不含任意常数的解，由通解确定任意常数后得到
        </div>

        <div style="margin: 12px 0 0 0; padding: 8px 12px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #4e79a7;">
          <strong>初始条件</strong>：确定特解时所需的附加条件，通常为函数在某点的取值或导数值
        </div>
      </div>
    </div>

    <div style="margin-top: 15px; padding: 8px 12px; background: #fff8e1; border-radius: 4px; border-left: 3px solid #f9a825; font-size: 0.95rem;">
      <strong>注意</strong>：求解微分方程通常先求通解，再根据初始条件求特解
    </div>
  </div>
</div>`
    },
    {
      title: "一阶微分方程",
      content: `<div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
  <div style="display: flex; flex-wrap: wrap; gap: 15px;">
    <!-- 可分离变量部分 -->
    <div style="flex: 1; min-width: 280px;">
      <div style="border-left: 4px solid #59a14f; padding-left: 10px; margin-bottom: 12px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
        <h4 style="color: #2c4cc3; margin: 0 0 10px 0; font-size: 1.1rem; display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">
          <span style="display: inline-block; width: 8px; height: 8px; background: #59a14f; margin-right: 8px; border-radius: 50%;"></span>可分离变量的微分方程
        </h4>
        <div style="margin: 0 0 10px 0; padding: 8px 12px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #59a14f;">
          <strong>标准形式</strong>：$g(y)dy = f(x)dx$
        </div>

        <p style="margin: 12px 0 8px 0;"><strong>解法步骤</strong>：</p>
        <ol style="margin: 0 0 10px 15px; padding-left: 10px;">
          <li style="margin-bottom: 6px;">将方程化为标准形式 $g(y)dy = f(x)dx$</li>
          <li style="margin-bottom: 6px;">两边积分：$\\int g(y)dy = \\int f(x)dx$</li>
          <li style="margin-bottom: 0px;">求出通解</li>
        </ol>

        <div style="margin-top: 12px; padding: 6px 10px; background: #fff8e1; border-radius: 4px; border-left: 3px solid #f9a825; font-size: 0.9rem;">
          <strong>注意</strong>：积分时要加积分常数；注意变量分离时的条件
        </div>
      </div>
    </div>

    <!-- 齐次型部分 -->
    <div style="flex: 1; min-width: 280px;">
      <div style="border-left: 4px solid #f28e2c; padding-left: 10px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
        <h4 style="color: #2c4cc3; margin: 0 0 10px 0; font-size: 1.1rem; display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">
          <span style="display: inline-block; width: 8px; height: 8px; background: #f28e2c; margin-right: 8px; border-radius: 50%;"></span>齐次型微分方程
        </h4>
        <div style="margin: 0 0 10px 0; padding: 8px 12px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #f28e2c;">
          <strong>定义</strong>：形如 $y' = f(\\frac{y}{x})$ 的微分方程称为齐次型微分方程
        </div>

        <p style="margin: 12px 0 8px 0;"><strong>判断标准</strong>：</p>
        <div style="margin: 0 0 0 15px; padding: 8px 12px; background: #f0f5ff; border-radius: 4px;">
          微分方程右侧是否可以表示为 $F(tx,ty)=F(x,y)$
        </div>

        <p style="margin: 12px 0 8px 0;"><strong>解法</strong>：令 $u = \\frac{y}{x}$ 代入原方程，转化为可分离变量方程后求解。</p>
      </div>
    </div>
    
    <!-- 一阶线性部分 -->
    <div style="flex: 1; min-width: 280px;">
      <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 12px; background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
        <h4 style="color: #2c4cc3; margin: 0 0 10px 0; font-size: 1.1rem; display: flex; align-items: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">
          <span style="display: inline-block; width: 8px; height: 8px; background: #4e79a7; margin-right: 8px; border-radius: 50%;"></span>一阶线性微分方程
        </h4>
        <div style="margin: 0 0 10px 0; padding: 8px 12px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #4e79a7;">
          <strong>标准形式</strong>：$y' + p(x)y = Q(x)$
        </div>
        
        <ul style="margin: 0 0 10px 15px; padding-left: 10px; list-style-type: circle;">
          <li style="margin-bottom: 6px;"><strong>一阶线性齐次微分方程</strong>：$Q(x) = 0$</li>
          <li style="margin-bottom: 0px;"><strong>一阶线性非齐次微分方程</strong>：$Q(x) \\neq 0$</li>
        </ul>
        
        <p style="margin: 12px 0 8px 0;"><strong>通解</strong>：</p>
        <div style="margin: 0 0 6px -5px; padding: 8px 12px; background: #f0f5ff; border-radius: 6px;">
          齐次方程：$y = Ce^{-\\int p(x)dx}$
        </div>
        <div style="margin: 6px 0 0 -5px; padding: 8px 12px; background: #f0f5ff; border-radius: 6px;">
          非齐次方程：$y = e^{-\\int p(x)dx}(\\int Q(x)e^{\\int p(x)dx}dx + C)$
        </div>
      </div>
    </div>
  </div>

  <div style="text-align: center; margin-top: 15px; font-size: 0.95rem; background: linear-gradient(to right, #f0f5ff, #e1ebfa, #f0f5ff); padding: 5px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <p style="margin: 0; font-weight: 500;">认准方程类型，选对解法方法，是解微分方程的关键</p>
  </div>
</div>`
    },
    {
      title: "二阶常系数线性微分方程",
      content: `
            <div style="padding: 10px 0; font-family: 'Microsoft YaHei', Arial, sans-serif;">
              <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: stretch;">
                <!-- 左侧垂直标题 -->
                <div style="width: 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; background: linear-gradient(to bottom, #4e79a7, #2c4cc3); border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); color: white; padding: 10px 0;">
                  <h3 style="writing-mode: vertical-rl; text-orientation: upright; margin: 0; font-size: 1rem; letter-spacing: 4px; text-align: center; white-space: nowrap;">二阶常系数线性齐次微分方程</h3>
                </div>

                <!-- 中间内容 -->
                <div style="flex: 1; min-width: 290px; display: flex; flex-direction: column; justify-content: space-between;">
                  <div style="border-left: 4px solid #4e79a7; padding-left: 10px; margin-bottom: 12px; background: white; padding: 10px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s;">
                    <h4 style="color: #2c4cc3; margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center;">
                      <span style="display: inline-block; width: 8px; height: 8px; background: #4e79a7; margin-right: 8px; border-radius: 50%;"></span>基本定义
                    </h4>
                    <p style="margin: 0 0 6px 0;"><strong>标准形式</strong>：$y'' + py' + qy = 0$，其中 $p,q$ 为常数</p>
                    <p style="margin: 0;"><strong>特征方程</strong>：$r^2 + pr + q = 0$</p>
                    <p style="margin: 5px 0 0 15px; font-size: 0.95rem; color: #555;">求根公式：$r_1 = \\frac{-p + \\sqrt{p^2 - 4q}}{2}$, $r_2 = \\frac{-p - \\sqrt{p^2 - 4q}}{2}$</p>
                  </div>

                  <div style="border-left: 4px solid #59a14f; padding-left: 10px; background: white; padding: 10px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s;">
                    <h4 style="color: #2c4cc3; margin: 0 0 8px 0; font-size: 1.1rem; display: flex; align-items: center;">
                      <span style="display: inline-block; width: 8px; height: 8px; background: #59a14f; margin-right: 8px; border-radius: 50%;"></span>通解
                    </h4>
                    <div style="margin: 0 0 8px 0; padding: 6px 10px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #59a14f;">
                      <strong>$p^2 - 4q > 0$</strong>：两个不同实根
                    </div>
                    <p style="margin: 8px 0 5px 15px;">$y = C_1e^{r_1x} + C_2e^{r_2x}$</p>
                    <p style="margin: 5px 0 5px 15px; color: #555; font-size: 0.9rem;">$r_1 = \\frac{-p + \\sqrt{p^2 - 4q}}{2}$</p>
                    <p style="margin: 5px 0 0 15px; color: #555; font-size: 0.9rem;">$r_2 = \\frac{-p - \\sqrt{p^2 - 4q}}{2}$</p>
                  </div>
                </div>
                <!-- 右侧内容 -->
                <div style="flex: 1; min-width: 290px; display: flex; flex-direction: column; justify-content: space-between;">
                  <div style="border-left: 4px solid #f28e2c; padding-left: 10px; margin-bottom: 12px; background: white; padding: 10px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s;">
                    <div style="margin: 0 0 8px 0; padding: 6px 10px; background: #f0f5ff; border-radius: 4px; border-left: 3px solid #f28e2c;">
                      <strong>$p^2 - 4q = 0$</strong>：一个二重实根
                    </div>
                    <p style="margin: 8px 0 5px 15px;">$y = (C_1 + C_2x)e^{rx}$</p>
                    <p style="margin: 5px 0 12px 15px; color: #555; font-size: 0.9rem;">$r = -\\frac{p}{2}$</p>
                  </div>
                  <div style="border-left: 4px solid #FF5733; padding-left: 10px; margin-bottom: 12px; background: white; padding: 10px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s;">
                    <div style="margin: 15px 0 8px 0; padding: 6px 10px; background: #E8F6F3; border-radius: 4px; border-left: 3px solid #FFC300;">
                      <strong>$p^2 - 4q < 0$</strong>：一对共轭复根
                    </div>
                    <p style="margin: 8px 0 5px 15px;">$y = e^{\\alpha x}(C_1\\cos \\beta x + C_2\\sin \\beta x)$</p>
                    <p style="margin: 5px 0 0 15px; color: #555; font-size: 0.9rem;">其中，$r = \\alpha \\pm \\beta i$ 为特征方程的一对共轭复根</p>
                    <p style="margin: 5px 0 5px 15px; color: #555; font-size: 0.9rem;">$\\alpha = -\\frac{p}{2}$</p>
                    <p style="margin: 5px 0 5px 15px; color: #555; font-size: 0.9rem;">$\\beta = \\frac{\\sqrt{4q-p^2}}{2}$</p>
                  </div>
                </div>
              </div>
            </div>
              <div style="display: flex; align-items: center; justify-content: center; margin-top: 6px;">
                <h4 style="color: #2c4cc3; margin: 0; font-size: 1.1rem; display: flex; align-items: center;">
                <span style="background: #f0f5ff; padding: 3px 8px; border-radius: 4px;">非齐次微分方程</span>
                </h4>
                <p style="margin: 0 0 0 15px; background: #f0f5ff; padding: 3px 10px; border-radius: 4px; font-weight: 500;">
                <strong>通解</strong> = 齐次通解 + 特解
                </p>
                <p style="margin-left: 15px; font-weight: 500;">判别式 $\\Delta = p^2 - 4q$ 决定了特征根的类型和通解形式</p>
              </div>
            </div>
            `
    }
  ],

  // 习题
  exercises: [
    
    
    

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

,

,

,

,

,

,

,

,

,



  ]
};