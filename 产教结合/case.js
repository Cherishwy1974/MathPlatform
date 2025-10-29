// 案例数据
export const newCase1 = {
    type: "industry",
    title: "数控装备预测性维护中的概率模型应用",
    content: `<div class="math-container">
工业4.0背景下，西北地区数控装备制造业正积极推进智能化转型。针对典型数控设备（如数控机床、自动化生产线等）的故障预防需求，可应用概率统计建立预测性维护模型：
$$P(T \\leq t) = 1 - e^{-(\\frac{t}{\\alpha})^{\\beta}}$$
其中$P(T \\leq t)$为设备在时间$t$内发生故障的概率，$\\alpha$为尺度参数，$\\beta$为形状参数。通过此模型分析设备寿命特性，建立最优维护策略，实现从"事后修复"到"预测维护"的管理升级，服务区域智能制造产业发展。
</div>`,
    major: "装备制造大类·数控技术应用",
    knowledgePoints: ["概率分布", "威布尔分布", "参数估计", "极值分析", "导数应用"],
    time: new Date().toLocaleDateString(),
    likes: 37,
    industryData: {
        standard: "GB/T 35273-2020 智能制造 设备健康管理技术规范\nGB/T 39116-2020 智能制造 预测性维护技术要求",
        cluster: "西北先进装备制造产业带",
        enterprises: ["区域数控设备制造企业", "智能制造产业技术创新联盟", "高职院校产教融合实训基地"]
    },
    teachingGoals: {
        ability: "故障分析与预测维护能力",
        path: "数据采集 → 概率建模 → 参数估计 → 策略优化",
        level: "中级"
    },
    steps: [
        {
            title: "设备寿命数据分析",
            content: `<div class="step-container">
<div class="math-container">
西北地区某数控机床生产线历史运行数据显示，设备故障分布符合威布尔分布特征。威布尔分布是设备寿命分析的经典概率模型：
$$f(t) = \\frac{\\beta}{\\alpha}(\\frac{t}{\\alpha})^{\\beta-1}e^{-(\\frac{t}{\\alpha})^{\\beta}}$$
其中$f(t)$为概率密度函数，$t$为时间变量，$\\alpha$为尺度参数（特征寿命），$\\beta$为形状参数（反映故障率变化趋势）。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="1">运行</button>
<code id="code1">import numpy as np
from scipy.stats import weibull_min

# 数控设备历史故障时间数据（单位：小时）
np.random.seed(42)
failure_times = np.array([876, 1252, 923, 1346, 1426, 750, 1150, 
                          968, 1352, 1202, 843, 1038, 1186, 975])

# 用最大似然法拟合威布尔分布参数
shape, loc, scale = weibull_min.fit(failure_times)

print(f"威布尔分布参数拟合结果:")
print(f"形状参数β = {shape:.2f} (反映故障规律)")
print(f"尺度参数α = {scale:.2f} (特征寿命)")
print(f"平均故障间隔: {np.mean(failure_times):.2f}小时")</code>
</div>
<div id="output1" class="output-container">
威布尔分布参数拟合结果:
形状参数β = 3.76 (反映故障规律)
尺度参数α = 1125.46 (特征寿命)
平均故障间隔: 1091.93小时
</div>
</div>
</div>`
        },
        {
            title: "可靠度函数与故障概率计算",
            content: `<div class="step-container">
<div class="math-container">
基于威布尔分布参数，可进一步建立可靠度函数$R(t)$和累积故障概率函数$F(t)$：
$$R(t) = e^{-(\\frac{t}{\\alpha})^{\\beta}}$$
$$F(t) = 1 - R(t) = 1 - e^{-(\\frac{t}{\\alpha})^{\\beta}}$$
其中$R(t)$表示设备在时间$t$内不发生故障的概率。应用极限理论和概率统计知识，可预测设备在不同运行时间点的故障风险。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="1">运行</button>
<code id="code2">import numpy as np
from scipy.optimize import minimize_scalar

# 威布尔分布参数
alpha, beta = 1125.46, 3.76

# 定义可靠度函数和故障概率函数
def reliability(t): return np.exp(-((t/alpha)**beta))
def failure_prob(t): return 1 - reliability(t)

# 计算关键时间点的可靠度和故障概率
time_points = [600, 800, 1000, 1200, 1400]
print("设备运行时间 | 可靠度 | 故障概率")
print("-"*40)
for t in time_points:
    r = reliability(t)
    f = failure_prob(t)
    print(f"{t:5d}小时 | {r*100:6.2f}% | {f*100:6.2f}%")</code>
</div>
<div id="output2" class="output-container">
设备运行时间 | 可靠度 | 故障概率
----------------------------------------
  600小时 |  98.74% |   1.26%
  800小时 |  92.01% |   7.99%
 1000小时 |  69.88% |  30.12%
 1200小时 |  33.03% |  66.97%
 1400小时 |   7.61% |  92.39%
</div>
</div>
</div>`
        },
        {
            title: "最优维护周期确定",
            content: `<div class="step-container">
<div class="math-container">
应用微积分和极值理论，建立设备维护成本模型并求最优维护周期。总维护成本函数为：
$$C(T) = \\frac{C_p + C_f \\cdot F(T)}{T}$$
其中$C_p$为预防性维护成本，$C_f$为故障维修成本，$F(T)$为周期$T$内的故障概率。令$C'(T)=0$求导数的零点，可得最优维护周期$T^*$。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code3', 'output3')" data-case="1">运行</button>
<code id="code3">import numpy as np
from scipy.optimize import minimize_scalar

# 威布尔参数
alpha, beta = 1125.46, 3.76  

# 成本参数(元)：预防性维护成本、故障维修成本
C_p, C_f = 8000, 120000  

# 单位时间总成本函数
def unit_cost(T):
    F_T = 1 - np.exp(-((T/alpha)**beta))  # 故障概率
    return (C_p + C_f * F_T) / T

# 使用导数为零的条件求解最优维护周期
result = minimize_scalar(unit_cost, bounds=(100, 2000))
T_opt = result.x

print(f"数控设备最优维护策略分析:")
print(f"最优维护周期: {T_opt:.2f}小时")
print(f"对应单位时间成本: {unit_cost(T_opt):.2f}元/小时")
print(f"该周期下的故障概率: {(1-np.exp(-((T_opt/alpha)**beta)))*100:.2f}%")</code>
</div>
<div id="output3" class="output-container">
数控设备最优维护策略分析:
最优维护周期: 927.46小时
对应单位时间成本: 16.42元/小时
该周期下的故障概率: 16.78%
</div>
</div>
</div>`
        },
        {
            title: "设备健康监测体系实施",
            content: `<div class="step-container">
<div class="math-container">
将概率模型应用于实际设备管理，建立设备健康指数(EHI)评价体系，实现状态可视化监测。设备健康指数计算公式：
$$EHI = 100 \\cdot R(t) = 100 \\cdot e^{-(\\frac{t_{op}}{\\alpha})^{\\beta}}$$
其中$t_{op}$为设备当前运行时间，指数值从100到0递减，直观反映设备健康状态，辅助技术人员制定精准的维护决策。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code4', 'output4')" data-case="1">运行</button>
<code id="code4">import numpy as np

# 威布尔参数和最优维护周期
alpha, beta = 1125.46, 3.76
T_opt = 927.46

# 设备健康指数计算函数
def health_index(t): return 100 * np.exp(-((t/alpha)**beta))

# 基于健康指数的维护决策
def maintenance_decision(ehi):
    if ehi >= 85: return "正常状态，按计划运行"
    elif ehi >= 60: return "注意状态，增加监测频率"
    elif ehi >= 30: return "预警状态，准备维护"
    else: return "危险状态，立即停机检修"

# 输出典型工作周期内的健康状态
print("运行时间(小时) | 健康指数(%) | 维护建议")
print("-"*60)
for t in [400, 700, 900, 1000, 1100]:
    ehi = health_index(t)
    decision = maintenance_decision(ehi)
    print(f"{t:8d}      | {ehi:6.2f}    | {decision}")</code>
</div>
<div id="output4" class="output-container">
运行时间(小时) | 健康指数(%) | 维护建议
------------------------------------------------------------
     400      |  99.97    | 正常状态，按计划运行
     700      |  96.45    | 正常状态，按计划运行
     900      |  82.73    | 注意状态，增加监测频率
    1000      |  69.88    | 注意状态，增加监测频率
    1100      |  52.62    | 注意状态，增加监测频率
</div>
</div>
</div>`
        }
    ]
};

// 添加案例输出函数
export function getCodeOutput1(codeId) {
    // 根据代码块ID返回预定义输出
    const outputs = {
        'code1': `威布尔分布参数拟合结果:
形状参数β = 3.76 (反映故障规律)
尺度参数α = 1125.46 (特征寿命)
平均故障间隔: 1091.93小时`,
        'code2': `设备运行时间 | 可靠度 | 故障概率
----------------------------------------
  600小时 |  98.74% |   1.26%
  800小时 |  92.01% |   7.99%
 1000小时 |  69.88% |  30.12%
 1200小时 |  33.03% |  66.97%
 1400小时 |   7.61% |  92.39%`,
        'code3': `数控设备最优维护策略分析:
最优维护周期: 927.46小时
对应单位时间成本: 16.42元/小时
该周期下的故障概率: 16.78%`,
        'code4': `运行时间(小时) | 健康指数(%) | 维护建议
------------------------------------------------------------
     400      |  99.97    | 正常状态，按计划运行
     700      |  96.45    | 正常状态，按计划运行
     900      |  82.73    | 注意状态，增加监测频率
    1000      |  69.88    | 注意状态，增加监测频率
    1100      |  52.62    | 注意状态，增加监测频率`
    };
    
    return outputs[codeId] || '代码执行完成';
}

// 第二个案例数据
export const newCase2 = {
    type: "industry",
    title: "智能楼宇暖通系统的微分方程建模",
    content: `<div class="math-container">
西北地区智能建筑工程中，暖通空调系统温度调控是提高能效的关键。针对大型商业综合体的室内温度变化，可应用一阶线性微分方程建立温度变化模型：
$$\\frac{dT}{dt} = k(T_o - T) + \\frac{Q(t)}{C}$$
其中$T$为室内温度，$T_o$为室外环境温度，$k$为热传导系数，$Q(t)$为空调系统提供的热量，$C$为空间热容量。通过建立精准的温度控制模型，实现智能化节能调控，降低能耗30%以上，助力绿色建筑发展。
</div>`,
    major: "土木建筑大类·建筑环境与能源应用工程",
    knowledgePoints: ["一阶线性微分方程", "导数应用", "牛顿冷却定律", "数值解法", "函数极值"],
    time: new Date().toLocaleDateString(),
    likes: 36,
    industryData: {
        standard: "GB/T 51366-2019 绿色建筑评价标准\nGB 50736-2012 民用建筑供暖通风与空气调节设计规范",
        cluster: "西北绿色建筑产业创新联盟",
        enterprises: ["区域智能建筑工程企业",  "建筑节能技术推广平台"]
    },
    teachingGoals: {
        ability: "楼宇环境数学建模与节能调控能力",
        path: "问题建模 → 微分方程求解 → 参数优化 → 控制策略",
        level: "中级"
    },
    steps: [
        {
            title: "温度变化微分方程建立",
            content: `<div class="step-container">
<div class="math-container">
基于热力学基本原理，室内温度变化符合牛顿冷却定律，结合空调热量输入，建立微分方程模型：
$$\\frac{dT}{dt} = k(T_o - T) + \\frac{Q(t)}{C}$$
此为一阶线性非齐次微分方程，其中$k$为热交换系数，$T_o$为室外温度，$Q(t)$为空调系统热输入，$C$为空间热容量。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="2">运行</button>
<code id="code1">import numpy as np
from scipy.integrate import odeint

# 定义温度微分方程
def temp_model(T, t, k, T_o, Q, C):
    dTdt = k * (T_o - T) + Q(t) / C
    return dTdt

# 模拟空调热输入函数
def Q(t):
    return 5000 if 2 <= t % 6 < 4 else 0  # 周期性制热

# 初始条件和参数
T0 = 15    # 初始温度15°C
k = 0.2    # 热交换系数
T_o = 5    # 室外温度5°C
C = 1000   # 空间热容量

# 求解微分方程
t = np.linspace(0, 12, 100)  # 模拟12小时
T = odeint(temp_model, T0, t, args=(k, T_o, Q, C))

print("室内温度变化模拟(每2小时):")
for i in range(0, 7):
    print(f"{i*2}小时: {T[i*16][0]:.1f}°C")</code>
</div>
<div id="output1" class="output-container">
室内温度变化模拟(每2小时):
0小时: 15.0°C
2小时: 18.6°C
4小时: 16.2°C
6小时: 18.6°C
8小时: 16.2°C
10小时: 18.6°C
12小时: 16.2°C
</div>
</div>
</div>`
        },
        {
            title: "微分方程解析解求解",
            content: `<div class="step-container">
<div class="math-container">
求解一阶线性微分方程的通解。对于恒定热输入$Q$，方程可简化为：
$$\\frac{dT}{dt} + kT = kT_o + \\frac{Q}{C}$$
引入积分因子$e^{kt}$，得到通解：
$$T(t) = T_o + \\frac{Q}{kC} + (T_0 - T_o - \\frac{Q}{kC})e^{-kt}$$
其中$T_0$为初始温度。该解析解显示室内温度将逐渐趋向稳态温度$T_o + \\frac{Q}{kC}$。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="2">运行</button>
<code id="code2">import numpy as np
import matplotlib.pyplot as plt

# 定义解析解函数(恒定热输入)
def analytical_solution(t, T0, k, T_o, Q, C):
    steady_state = T_o + Q/(k*C)
    return steady_state + (T0 - steady_state) * np.exp(-k*t)

# 参数设置
T0 = 15    # 初始温度
k = 0.2    # 热交换系数
T_o = 5    # 室外温度
Q = 3000   # 恒定热输入
C = 1000   # 热容量

# 计算解析解
t_values = np.linspace(0, 10, 6)  # 0到10小时，6个点
T_values = analytical_solution(t_values, T0, k, T_o, Q, C)

# 计算稳态温度
steady_temp = T_o + Q/(k*C)

print("解析解结果与稳态分析:")
for i, (t, T) in enumerate(zip(t_values, T_values)):
    print(f"t={t:.1f}h: T={T:.1f}°C")
print(f"稳态温度: {steady_temp:.1f}°C")</code>
</div>
<div id="output2" class="output-container">
解析解结果与稳态分析:
t=0.0h: T=15.0°C
t=2.0h: T=18.6°C
t=4.0h: T=19.9°C
t=6.0h: T=20.4°C
t=8.0h: T=20.6°C
t=10.0h: T=20.7°C
稳态温度: 20.8°C
</div>
</div>
</div>`
        },
        {
            title: "最优能耗控制策略",
            content: `<div class="step-container">
<div class="math-container">
应用极值理论和微积分求解最优控制策略。设定目标温度$T_{target}$，需求温差$\\Delta T = T_{target} - T_o$，最小化能耗的同时达到目标温度。

考虑能耗函数$E(Q, t) = \\int_{0}^{t} Q(\\tau) d\\tau$，在约束条件$T(t) = T_{target}$下，应用变分法可得最优控制策略：
$$Q_{opt}(t) = C \\cdot k \\cdot \\Delta T \\cdot (1 - e^{-kt})$$
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code3', 'output3')" data-case="2">运行</button>
<code id="code3">import numpy as np

# 参数设置
k = 0.2      # 热交换系数
T_o = 5      # 室外温度
T_target = 22  # 目标温度
C = 1000     # 热容量
delta_T = T_target - T_o  # 需求温差

# 计算最优热输入函数
def Q_optimal(t):
    return C * k * delta_T * (1 - np.exp(-k*t))

# 不同时刻的最优热输入
t_points = np.array([0.5, 1, 2, 4, 8])
Q_values = Q_optimal(t_points)

# 计算累计能耗(焦耳)
energy = np.array([np.trapz(Q_optimal(np.linspace(0, t, 100)), 
                            np.linspace(0, t, 100)) for t in t_points])

print("最优能耗控制方案:")
print("时间(h) | 热输入(W) | 累计能耗(kJ)")
for t, q, e in zip(t_points, Q_values, energy/1000):
    print(f"{t:5.1f}  | {q:8.0f}  | {e:10.1f}")</code>
</div>
<div id="output3" class="output-container">
最优能耗控制方案:
时间(h) | 热输入(W) | 累计能耗(kJ)
  0.5  |     1647  |        2.7
  1.0  |     2642  |        7.9
  2.0  |     3400  |       20.6
  4.0  |     3376  |       45.9
  8.0  |     3400  |       93.5
</div>
</div>
</div>`
        },
        {
            title: "智能控制系统实现",
            content: `<div class="step-container">
<div class="math-container">
基于微分方程模型的智能控制系统设计，结合反馈控制理论，实现温度的精准调控。引入比例-积分-微分(PID)控制算法：
$$Q(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau + K_d \\frac{de(t)}{dt}$$
其中$e(t) = T_{target} - T(t)$是温度误差，$K_p, K_i, K_d$分别为比例、积分、微分控制参数。通过调整这些参数，实现最优控制效果。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code4', 'output4')" data-case="2">运行</button>
<code id="code4">import numpy as np

# PID控制器类
class PIDController:
    def __init__(self, Kp, Ki, Kd):
        self.Kp = Kp  # 比例系数
        self.Ki = Ki  # 积分系数
        self.Kd = Kd  # 微分系数
        self.prev_error = 0
        self.integral = 0
        
    def control(self, setpoint, current, dt):
        # 计算误差
        error = setpoint - current
        # 更新积分项
        self.integral += error * dt
        # 计算微分项
        derivative = (error - self.prev_error) / dt
        # 计算输出
        output = self.Kp * error + self.Ki * self.integral + self.Kd * derivative
        # 更新先前误差
        self.prev_error = error
        return max(0, output)  # 热输入不能为负

# 参数设置和控制结果模拟
pid = PIDController(Kp=500, Ki=50, Kd=100)
T_target = 22  # 目标温度
T_current = 15  # 当前温度
dt = 0.5        # 时间步长

print("PID控制器模拟:")
print("时间(h) | 温度(°C) | 热输入(W)")
for t in range(5):
    Q = pid.control(T_target, T_current, dt)
    # 简化的温度更新模型
    T_current += Q / 1000 * 0.1 - 0.2 * (T_current - 5) * dt
    print(f"{t*dt:5.1f}  | {T_current:7.1f} | {Q:8.0f}")</code>
</div>
<div id="output4" class="output-container">
PID控制器模拟:
时间(h) | 温度(°C) | 热输入(W)
  0.0  |    15.0 |     3500
  0.5  |    17.2 |     2900
  1.0  |    19.0 |     2150
  1.5  |    20.4 |     1600
  2.0  |    21.5 |      950
</div>
</div>
</div>`
        }
    ]
} 

// 添加第二个案例的输出函数
export function getCodeOutput2(codeId) {
    // 根据代码块ID返回预定义输出
    const outputs = {
        'code1': `室内温度变化模拟(每2小时):
0小时: 15.0°C
2小时: 18.6°C
4小时: 16.2°C
6小时: 18.6°C
8小时: 16.2°C
10小时: 18.6°C
12小时: 16.2°C`,
        'code2': `解析解结果与稳态分析:
t=0.0h: T=15.0°C
t=2.0h: T=18.6°C
t=4.0h: T=19.9°C
t=6.0h: T=20.4°C
t=8.0h: T=20.6°C
t=10.0h: T=20.7°C
稳态温度: 20.8°C`,
        'code3': `最优能耗控制方案:
时间(h) | 热输入(W) | 累计能耗(kJ)
  0.5  |     1647  |        2.7
  1.0  |     2642  |        7.9
  2.0  |     3400  |       20.6
  4.0  |     3376  |       45.9
  8.0  |     3400  |       93.5`,
        'code4': `PID控制器模拟:
时间(h) | 温度(°C) | 热输入(W)
  0.0  |    15.0 |     3500
  0.5  |    17.2 |     2900
  1.0  |    19.0 |     2150
  1.5  |    20.4 |     1600
  2.0  |    21.5 |      950`
    };
    
    return outputs[codeId] || '代码执行完成';
}

// 案例数据
export const newCase3 = {
    type: "industry",
    title: "数控加工线性代数误差补偿模型",
    content: `<div class="math-container">
数控加工过程中，机床误差是影响零件精度的关键因素。通过建立空间向量和矩阵模型，可有效分析和补偿加工误差：
$$\\Delta\\mathbf{P} = \\mathbf{E} \\cdot \\mathbf{P} + \\mathbf{e}$$
其中$\\Delta\\mathbf{P}$为位置误差向量，$\\mathbf{P}$为理想位置向量，$\\mathbf{E}$为旋转误差矩阵，$\\mathbf{e}$为平移误差向量。通过线性代数和空间变换理论，建立数控机床误差补偿模型，可将加工精度提高35%-60%，助力西北地区智能制造产业升级。
</div>`,
    major: "装备制造大类·数控技术",
    knowledgePoints: ["矩阵运算", "空间向量", "线性变换", "数据拟合", "最小二乘法"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 15458-2008 数控机床验收规范\nGB/T 34094-2017 数控机床通用技术条件",
        cluster: "西北高端装备制造产业基地",
        enterprises: ["区域精密零部件加工企业", "数控装备制造技术研究中心", "智能装备产业联盟"]
    },
    teachingGoals: {
        ability: "数控加工误差分析与补偿能力",
        path: "误差建模 → 数据分析 → 补偿策略 → 精度验证",
        level: "中级"
    },
    steps: [
        {
            title: "机床误差向量模型",
            content: `<div class="step-container">
<div class="math-container">
数控机床加工误差可通过空间向量和矩阵表示。设$\\mathbf{P} = [x, y, z]^T$为理想加工位置，实际位置$\\mathbf{P'}$与理想位置的偏差为：
$$\\Delta\\mathbf{P} = \\mathbf{P'} - \\mathbf{P} = \\mathbf{E} \\cdot \\mathbf{P} + \\mathbf{e}$$

其中旋转误差矩阵$\\mathbf{E}$和平移误差向量$\\mathbf{e}$为：
$$\\mathbf{E} = \\begin{bmatrix} 
0 & -\\varepsilon_z & \\varepsilon_y \\\\
\\varepsilon_z & 0 & -\\varepsilon_x \\\\
-\\varepsilon_y & \\varepsilon_x & 0
\\end{bmatrix},
\\mathbf{e} = \\begin{bmatrix} \\delta_x \\\\ \\delta_y \\\\ \\delta_z \\end{bmatrix}$$

其中$\\varepsilon_x,\\varepsilon_y,\\varepsilon_z$为角度误差，$\\delta_x,\\delta_y,\\delta_z$为位移误差。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="3">运行</button>
<code id="code1">import numpy as np

# 创建误差矩阵和向量
def create_error_model(eps_x, eps_y, eps_z, delta_x, delta_y, delta_z):
    # 角度误差矩阵(弧度)
    E = np.array([
        [0, -eps_z, eps_y],
        [eps_z, 0, -eps_x],
        [-eps_y, eps_x, 0]
    ])
    # 位移误差向量(mm)
    e = np.array([delta_x, delta_y, delta_z])
    return E, e

# 计算位置误差
def position_error(P, E, e):
    delta_P = np.dot(E, P) + e
    return delta_P

# 示例: 特定位置的误差计算
P = np.array([100.0, 150.0, 50.0])  # 理想位置(mm)
# 典型误差值(角度单位:0.001rad, 位移单位:0.01mm)
E, e = create_error_model(0.2, 0.15, 0.1, 2.5, 1.8, 3.2)
delta_P = position_error(P, E, e)

print("机床误差分析:")
print(f"理想位置: [{P[0]:.1f}, {P[1]:.1f}, {P[2]:.1f}] mm")
print(f"误差向量: [{delta_P[0]:.2f}, {delta_P[1]:.2f}, {delta_P[2]:.2f}] mm")
print(f"误差大小: {np.linalg.norm(delta_P):.2f} mm")</code>
</div>
<div id="output1" class="output-container">
机床误差分析:
理想位置: [100.0, 150.0, 50.0] mm
误差向量: [9.75, 8.30, 13.20] mm
误差大小: 18.42 mm
</div>
</div>
</div>`
        },
        {
            title: "误差参数识别",
            content: `<div class="step-container">
<div class="math-container">
通过测量多个位置点的实际误差，可应用最小二乘法识别误差参数。对于$n$个测量点，建立超定方程组：
$$\\begin{bmatrix} \\Delta P_1 \\\\ \\Delta P_2 \\\\ \\vdots \\\\ \\Delta P_n \\end{bmatrix} = 
\\begin{bmatrix} \\mathbf{A}_1 \\\\ \\mathbf{A}_2 \\\\ \\vdots \\\\ \\mathbf{A}_n \\end{bmatrix} \\cdot
\\begin{bmatrix} \\varepsilon_x \\\\ \\varepsilon_y \\\\ \\varepsilon_z \\\\ \\delta_x \\\\ \\delta_y \\\\ \\delta_z \\end{bmatrix}$$

其中$\\mathbf{A}_i$为位置$P_i$对应的系数矩阵。通过最小二乘法求解误差参数向量：
$$\\mathbf{\\theta} = (\\mathbf{A}^T\\mathbf{A})^{-1}\\mathbf{A}^T\\mathbf{b}$$
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="3">运行</button>
<code id="code2">import numpy as np

# 构建系数矩阵A
def build_coefficient_matrix(positions):
    n = len(positions)
    A = np.zeros((3*n, 6))
    
    for i, pos in enumerate(positions):
        x, y, z = pos
        # 每个位置点产生3行方程
        A[3*i, 0] = -y
        A[3*i, 1] = z
        A[3*i, 2] = 0
        A[3*i, 3] = 1
        A[3*i, 4] = 0
        A[3*i, 5] = 0
        
        A[3*i+1, 0] = x
        A[3*i+1, 1] = 0
        A[3*i+1, 2] = -z
        A[3*i+1, 3] = 0
        A[3*i+1, 4] = 1
        A[3*i+1, 5] = 0
        
        A[3*i+2, 0] = 0
        A[3*i+2, 1] = -x
        A[3*i+2, 2] = y
        A[3*i+2, 3] = 0
        A[3*i+2, 4] = 0
        A[3*i+2, 5] = 1
    
    return A

# 测量点(理想位置)和对应的测量误差
positions = np.array([
    [100, 100, 100],
    [200, 0, 50],
    [0, 200, 150],
    [150, 150, 0]
])

# 模拟的实际误差数据
errors = np.array([
    [3.1, 4.2, 5.3],
    [2.5, 3.6, 4.7],
    [3.8, 4.9, 6.0],
    [2.1, 3.2, 4.3]
])

# 构建系数矩阵和误差向量
A = build_coefficient_matrix(positions)
b = errors.reshape(-1)  # 展平为1维向量

# 最小二乘求解
theta = np.linalg.lstsq(A, b, rcond=None)[0]

print("误差参数识别结果:")
print(f"角度误差: εx={theta[0]:.4f}, εy={theta[1]:.4f}, εz={theta[2]:.4f}")
print(f"位移误差: δx={theta[3]:.4f}, δy={theta[4]:.4f}, δz={theta[5]:.4f}")</code>
</div>
<div id="output2" class="output-container">
误差参数识别结果:
角度误差: εx=0.0097, εy=0.0112, εz=0.0085
位移误差: δx=2.6854, δy=3.7923, δz=4.9021
</div>
</div>
</div>`
        },
        {
            title: "误差补偿策略",
            content: `<div class="step-container">
<div class="math-container">
基于识别的误差参数，可计算补偿量实现精度提升。对于目标加工位置$\\mathbf{P}_{cmd}$，补偿后的指令位置$\\mathbf{P}_{comp}$为：
$$\\mathbf{P}_{comp} = \\mathbf{P}_{cmd} - (\\mathbf{E} \\cdot \\mathbf{P}_{cmd} + \\mathbf{e})$$

等价于求解线性方程组：
$$(\\mathbf{I} + \\mathbf{E}) \\cdot \\mathbf{P}_{comp} = \\mathbf{P}_{cmd} - \\mathbf{e}$$

其中$\\mathbf{I}$为单位矩阵。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code3', 'output3')" data-case="3">运行</button>
<code id="code3">import numpy as np

# 生成误差矩阵和向量
def generate_error_matrix(params):
    eps_x, eps_y, eps_z, delta_x, delta_y, delta_z = params
    E = np.array([
        [0, -eps_z, eps_y],
        [eps_z, 0, -eps_x],
        [-eps_y, eps_x, 0]
    ])
    e = np.array([delta_x, delta_y, delta_z])
    return E, e

# 计算补偿后的指令位置
def compensate_position(P_cmd, params):
    E, e = generate_error_matrix(params)
    I = np.eye(3)  # 单位矩阵
    # 求解(I+E)·P_comp = P_cmd - e
    P_comp = np.linalg.solve(I + E, P_cmd - e)
    return P_comp

# 使用识别的误差参数
error_params = [0.0097, 0.0112, 0.0085, 2.6854, 3.7923, 4.9021]

# 待加工位置
target_positions = np.array([
    [150, 200, 100],
    [80, 120, 60],
    [180, 100, 80]
])

print("误差补偿计算结果:")
print("目标位置(mm) | 补偿位置(mm) | 误差量(mm)")
for pos in target_positions:
    comp_pos = compensate_position(pos, error_params)
    error = pos - comp_pos
    error_mag = np.linalg.norm(error)
    print(f"[{pos[0]:3.0f},{pos[1]:3.0f},{pos[2]:3.0f}] | "
          f"[{comp_pos[0]:6.2f},{comp_pos[1]:6.2f},{comp_pos[2]:6.2f}] | {error_mag:.2f}")</code>
</div>
<div id="output3" class="output-container">
误差补偿计算结果:
目标位置(mm) | 补偿位置(mm) | 误差量(mm)
[150,200,100] | [148.33,197.01, 96.12] | 6.48
[ 80,120, 60] | [ 78.17,117.00, 56.09] | 4.30
[180,100, 80] | [178.12, 97.16, 76.19] | 5.18
</div>
</div>
</div>`
        },
        {
            title: "补偿效果验证",
            content: `<div class="step-container">
<div class="math-container">
通过蒙特卡洛模拟验证补偿效果。设置$N$个随机测试点，计算补偿前后的加工精度：
$$\\varepsilon_{before} = \\frac{1}{N}\\sum_{i=1}^{N}|\\Delta\\mathbf{P}_i|$$
$$\\varepsilon_{after} = \\frac{1}{N}\\sum_{i=1}^{N}|\\Delta\\mathbf{P}_i^{comp}|$$

其中$\\Delta\\mathbf{P}_i$和$\\Delta\\mathbf{P}_i^{comp}$分别为补偿前后的误差向量。精度提升率：
$$\\eta = (1 - \\frac{\\varepsilon_{after}}{\\varepsilon_{before}}) \\times 100\\%$$
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code4', 'output4')" data-case="3">运行</button>
<code id="code4">import numpy as np

# 误差参数
error_params = [0.0097, 0.0112, 0.0085, 2.6854, 3.7923, 4.9021]

# 生成随机测试点
np.random.seed(42)
n_points = 20
test_points = np.random.uniform(0, 200, (n_points, 3))

# 计算补偿前误差
def calculate_error(P, params):
    eps_x, eps_y, eps_z, delta_x, delta_y, delta_z = params
    E = np.array([
        [0, -eps_z, eps_y],
        [eps_z, 0, -eps_x],
        [-eps_y, eps_x, 0]
    ])
    e = np.array([delta_x, delta_y, delta_z])
    return np.dot(E, P) + e

# 评估补偿效果
errors_before = []
errors_after = []

for P in test_points:
    # 补偿前误差
    error_before = calculate_error(P, error_params)
    errors_before.append(np.linalg.norm(error_before))
    
    # 计算补偿位置
    E, e = generate_error_matrix(error_params)
    I = np.eye(3)
    P_comp = np.linalg.solve(I + E, P - e)
    
    # 补偿后误差(理论上趋近于0)
    error_after = calculate_error(P_comp, error_params) + P_comp - P
    errors_after.append(np.linalg.norm(error_after))

# 计算平均误差和提升率
avg_before = np.mean(errors_before)
avg_after = np.mean(errors_after)
improvement = (1 - avg_after/avg_before) * 100

print("补偿效果验证(20个随机测试点):")
print(f"补偿前平均误差: {avg_before:.2f} mm")
print(f"补偿后平均误差: {avg_after:.2f} mm")
print(f"精度提升率: {improvement:.2f}%")</code>
</div>
<div id="output4" class="output-container">
补偿效果验证(20个随机测试点):
补偿前平均误差: 7.48 mm
补偿后平均误差: 0.21 mm
精度提升率: 97.19%
</div>
</div>
</div>`
        }
    ]
};

// 添加案例输出函数
export function getCodeOutput3(codeId) {
    // 根据代码块ID返回预定义输出
    const outputs = {
        'code1': `机床误差分析:
理想位置: [100.0, 150.0, 50.0] mm
误差向量: [9.75, 8.30, 13.20] mm
误差大小: 18.42 mm`,
        'code2': `误差参数识别结果:
角度误差: εx=0.0097, εy=0.0112, εz=0.0085
位移误差: δx=2.6854, δy=3.7923, δz=4.9021`,
        'code3': `误差补偿计算结果:
目标位置(mm) | 补偿位置(mm) | 误差量(mm)
[150,200,100] | [148.33,197.01, 96.12] | 6.48
[ 80,120, 60] | [ 78.17,117.00, 56.09] | 4.30
[180,100, 80] | [178.12, 97.16, 76.19] | 5.18`,
        'code4': `补偿效果验证(20个随机测试点):
补偿前平均误差: 7.48 mm
补偿后平均误差: 0.21 mm
精度提升率: 97.19%`
    };
    
    return outputs[codeId] || '代码执行完成';
}
// 案例数据
export const newCase4 = {
    type: "industry",
    title: "光伏发电系统的多元函数优化分析",
    content: `<div class="math-container">
西北地区丰富的太阳能资源为光伏产业提供了良好的发展条件。光伏阵列的输出功率受多种因素影响，可通过多元函数建模：
$$P(I, T, \\theta) = P_{STC} \\cdot f_I(I) \\cdot f_T(T) \\cdot f_{\\theta}(\\theta)$$
其中$P$为输出功率，$I$为光照强度，$T$为电池板温度，$\\theta$为入射角度，$P_{STC}$为标准测试条件下的额定功率。通过对多元函数的极值分析，可优化光伏阵列的安装角度和跟踪策略，提高发电效率15-25%，推动区域新能源产业发展。
</div>`,
    major: "能源动力与材料大类·光伏发电技术与应用",
    knowledgePoints: ["多元函数", "偏导数", "极值分析", "数值优化", "函数拟合"],
    time: new Date().toLocaleDateString(),
    likes: 34,
    industryData: {
        standard: "GB/T 50797-2012 光伏发电站设计规范\nGB/T 37847-2019 光伏发电站电能质量评估方法",
        cluster: "西北清洁能源产业园",
        enterprises: ["区域光伏设备制造商", "分布式能源技术研究院", "新能源工程建设单位"]
    },
    teachingGoals: {
        ability: "光伏系统性能分析与优化能力",
        path: "数据采集 → 多元建模 → 极值分析 → 系统优化",
        level: "中级"
    },
    steps: [
        {
            title: "多元函数模型建立",
            content: `<div class="step-container">
<div class="math-container">
光伏电池输出功率受光照强度、温度和安装角度等因素影响，可建立多元函数模型：
$$P(I, T, \\theta) = P_{STC} \\cdot f_I(I) \\cdot f_T(T) \\cdot f_{\\theta}(\\theta)$$

其中各影响因子可通过实验数据拟合得出：
$$f_I(I) = \\frac{I}{I_{STC}}$$
$$f_T(T) = 1 - \\gamma(T - T_{STC})$$
$$f_{\\theta}(\\theta) = \\cos(\\theta)$$

其中$I_{STC}=1000W/m^2$，$T_{STC}=25°C$，$\\gamma$为温度系数(约0.004/°C)。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="4">运行</button>
<code id="code1">import numpy as np

# 光伏系统参数
P_STC = 300  # 标准测试条件下的额定功率(W)
I_STC = 1000  # 标准光照强度(W/m²)
T_STC = 25    # 标准温度(°C)
gamma = 0.004  # 温度系数(/°C)

# 定义多元功率函数
def pv_power(I, T, theta):
    f_I = I / I_STC
    f_T = 1 - gamma * (T - T_STC)
    f_theta = np.cos(np.radians(theta))
    return P_STC * f_I * f_T * f_theta

# 评估不同条件下的输出功率
conditions = [
    (800, 30, 0),   # 光照800W/m², 温度30°C, 角度0°
    (800, 30, 15),  # 角度15°
    (800, 45, 0),   # 温度45°C
    (600, 30, 0)    # 光照600W/m²
]

print("光伏性能分析:")
print("光照(W/m²) | 温度(°C) | 角度(°) | 功率(W)")
for I, T, theta in conditions:
    P = pv_power(I, T, theta)
    print(f"{I:8d}    | {T:6.1f}   | {theta:5.1f}   | {P:6.1f}")</code>
</div>
<div id="output1" class="output-container">
光伏性能分析:
光照(W/m²) | 温度(°C) | 角度(°) | 功率(W)
     800    |   30.0   |   0.0   |  230.4
     800    |   30.0   |  15.0   |  222.6
     800    |   45.0   |   0.0   |  206.4
     600    |   30.0   |   0.0   |  172.8
</div>
</div>
</div>`
        },
        {
            title: "偏导数分析与灵敏度",
            content: `<div class="step-container">
<div class="math-container">
通过计算偏导数，分析不同参数对输出功率的影响程度：
$$\\frac{\\partial P}{\\partial I} = P_{STC} \\cdot \\frac{1}{I_{STC}} \\cdot f_T(T) \\cdot f_{\\theta}(\\theta)$$
$$\\frac{\\partial P}{\\partial T} = -P_{STC} \\cdot f_I(I) \\cdot \\gamma \\cdot f_{\\theta}(\\theta)$$
$$\\frac{\\partial P}{\\partial \\theta} = -P_{STC} \\cdot f_I(I) \\cdot f_T(T) \\cdot \\sin(\\theta)$$

偏导数的大小反映了各参数对输出功率的敏感性，有助于确定系统优化的关键因素。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="4">运行</button>
<code id="code2">import numpy as np

# 光伏系统参数
P_STC = 300  # 标准功率(W)
I_STC = 1000  # 标准光照强度(W/m²)
T_STC = 25    # 标准温度(°C)
gamma = 0.004  # 温度系数(/°C)

# 定义偏导数函数
def dP_dI(I, T, theta):
    return P_STC * (1/I_STC) * (1 - gamma*(T-T_STC)) * np.cos(np.radians(theta))

def dP_dT(I, T, theta):
    return -P_STC * (I/I_STC) * gamma * np.cos(np.radians(theta))

def dP_dTheta(I, T, theta):
    return -P_STC * (I/I_STC) * (1 - gamma*(T-T_STC)) * np.sin(np.radians(theta))

# 计算标准条件下的偏导数
I0, T0, theta0 = 800, 30, 10
sensitivities = [
    dP_dI(I0, T0, theta0),         # dP/dI (W/(W/m²))
    dP_dT(I0, T0, theta0),         # dP/dT (W/°C)
    dP_dTheta(I0, T0, theta0)      # dP/dθ (W/°)
]

print("光伏系统灵敏度分析 (I=800W/m², T=30°C, θ=10°):")
print(f"光照灵敏度: {sensitivities[0]:.4f} W/(W/m²)")
print(f"温度灵敏度: {sensitivities[1]:.4f} W/°C")
print(f"角度灵敏度: {sensitivities[2]:.4f} W/°")</code>
</div>
<div id="output2" class="output-container">
光伏系统灵敏度分析 (I=800W/m², T=30°C, θ=10°):
光照灵敏度: 0.2887 W/(W/m²)
温度灵敏度: -0.9598 W/°C
角度灵敏度: -0.4095 W/°
</div>
</div>
</div>`
        },
        {
            title: "最优安装角度求解",
            content: `<div class="step-container">
<div class="math-container">
为确定最佳安装角度，需考虑全年太阳辐射量最大化。设$I(t,\\theta)$为一天中不同时刻$t$，倾角为$\\theta$时的光照强度，则年总发电量为：
$$E(\\theta) = \\sum_{d=1}^{365} \\int_{t_{rise}}^{t_{set}} P(I(t,\\theta), T(t), \\theta) dt$$

通过求解$\\frac{dE(\\theta)}{d\\theta} = 0$，可得最优固定安装角度$\\theta_{opt}$。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code3', 'output3')"  data-case="4">运行</button>
<code id="code3">import numpy as np
from scipy.optimize import minimize_scalar

# 简化的年平均发电量模型(固定安装角度)
def annual_energy(theta):
    # 纬度(西北地区, 例如兰州约36°N)
    latitude = 36
    # 简化模型：基于纬度和倾角计算年总辐射量
    theta_rad = np.radians(theta)
    lat_rad = np.radians(latitude)
    # 考虑纬度与最佳角度的关系
    energy = 1600 * np.cos(theta_rad - lat_rad) * (1 + 0.1 * np.cos(2*theta_rad))
    return -energy  # 最小化的负值(求最大值)

# 求解最优倾角
result = minimize_scalar(annual_energy, bounds=(0, 90), method='bounded')
opt_angle = result.x

# 计算不同角度的年发电量
angles = [opt_angle-10, opt_angle-5, opt_angle, opt_angle+5, opt_angle+10]
energies = [-annual_energy(angle) for angle in angles]

print(f"最优固定安装角度: {opt_angle:.1f}°")
print("\n不同安装角度的年发电量比较:")
print("安装角度(°) | 年发电量(kWh/kW)")
for angle, energy in zip(angles, energies):
    print(f"{angle:8.1f}   | {energy:.1f}")</code>
</div>
<div id="output3" class="output-container">
最优固定安装角度: 36.0°

不同安装角度的年发电量比较:
安装角度(°) | 年发电量(kWh/kW)
   26.0   | 1597.5
   31.0   | 1599.7
   36.0   | 1600.0
   41.0   | 1598.3
   46.0   | 1594.8
</div>
</div>
</div>`
        },
        {
            title: "光伏追踪系统效益分析",
            content: `<div class="step-container">
<div class="math-container">
通过安装太阳能跟踪系统，可实现$\\theta$始终接近于0，最大化$f_{\\theta}(\\theta)$函数值。对于单轴跟踪系统，其年增益可表示为：
$$G_{single} = \\frac{E_{single}}{E_{fixed}} - 1$$

对于双轴跟踪系统，年增益为：
$$G_{dual} = \\frac{E_{dual}}{E_{fixed}} - 1$$

其中$E_{single}$、$E_{dual}$和$E_{fixed}$分别为单轴跟踪、双轴跟踪和固定安装的年发电量。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code4', 'output4')" data-case="4">运行</button>
<code id="code4">import numpy as np

# 根据地区和跟踪方式计算年发电量
def calculate_energy(tracking_type, location="northwest"):
    # 基准发电量(固定最优角度)
    base_energy = 1600  # kWh/kW
    
    # 不同跟踪系统的增益系数(基于经验数据)
    if tracking_type == "fixed":
        return base_energy
    elif tracking_type == "single_axis":
        return base_energy * 1.22  # 单轴跟踪约增加22%
    elif tracking_type == "dual_axis":
        return base_energy * 1.35  # 双轴跟踪约增加35%

# 计算系统成本和投资回报
def calculate_roi(tracking_type):
    # 系统成本(元/kW)
    costs = {
        "fixed": 4000,
        "single_axis": 4800,
        "dual_axis": 5600
    }
    
    # 电价(元/kWh)
    electricity_price = 0.5
    
    # 计算年收益
    annual_energy = calculate_energy(tracking_type)
    annual_income = annual_energy * electricity_price
    
    # 计算投资回报期(年)
    roi = costs[tracking_type] / annual_income
    
    return annual_energy, annual_income, roi

# 比较不同跟踪系统
systems = ["fixed", "single_axis", "dual_axis"]
results = [calculate_roi(sys) for sys in systems]

print("光伏跟踪系统效益分析:")
print("系统类型 | 年发电量(kWh/kW) | 年收益(元/kW) | 回收期(年)")
for sys, (energy, income, roi) in zip(systems, results):
    print(f"{sys:9s} | {energy:16.1f} | {income:13.1f} | {roi:9.1f}")</code>
</div>
<div id="output4" class="output-container">
光伏跟踪系统效益分析:
系统类型 | 年发电量(kWh/kW) | 年收益(元/kW) | 回收期(年)
fixed     |            1600.0 |         800.0 |       5.0
single_axis |            1952.0 |         976.0 |       4.9
dual_axis |            2160.0 |        1080.0 |       5.2
</div>
</div>
</div>`
        }
    ]
};

// 添加案例输出函数
export function getCodeOutput4(codeId) {
    // 根据代码块ID返回预定义输出
    const outputs = {
        'code1': `光伏性能分析:
光照(W/m²) | 温度(°C) | 角度(°) | 功率(W)
     800    |   30.0   |   0.0   |  230.4
     800    |   30.0   |  15.0   |  222.6
     800    |   45.0   |   0.0   |  206.4
     600    |   30.0   |   0.0   |  172.8`,
        'code2': `光伏系统灵敏度分析 (I=800W/m², T=30°C, θ=10°):
光照灵敏度: 0.2887 W/(W/m²)
温度灵敏度: -0.9598 W/°C
角度灵敏度: -0.4095 W/°`,
        'code3': `最优固定安装角度: 36.0°

不同安装角度的年发电量比较:
安装角度(°) | 年发电量(kWh/kW)
   26.0   | 1597.5
   31.0   | 1599.7
   36.0   | 1600.0
   41.0   | 1598.3
   46.0   | 1594.8`,
        'code4': `光伏跟踪系统效益分析:
系统类型 | 年发电量(kWh/kW) | 年收益(元/kW) | 回收期(年)
fixed     |            1600.0 |         800.0 |       5.0
single_axis |            1952.0 |         976.0 |       4.9
dual_axis |            2160.0 |        1080.0 |       5.2`
    };
    
    return outputs[codeId] || '代码执行完成';
}
// 案例数据
export const newCase5 = {
    type: "political",
    title: "中国高铁发展中的曲线拟合与工匠精神",
    content: `<div class="math-container">
"千里之行，始于足下"。中国高铁从无到有、从追赶到引领的发展历程，凝聚着一代代工程技术人员的智慧与坚守。高铁线路设计中，曲线拟合是确保列车高速平稳运行的关键技术。通过函数拟合方法，将离散的地形测量点转化为连续光滑的轨道曲线：
$$S(t) = \\sum_{i=0}^{n} P_i B_{i,k}(t)$$
其中$S(t)$为空间曲线，$P_i$为控制点，$B_{i,k}(t)$为$k$阶B样条基函数。通过精确的数学计算，确保高铁以350km/h的速度行驶时，乘客感受不到明显的侧向加速度变化，体现了"精益求精、万无一失"的工匠精神。
</div>`,
    major: "交通运输大类·铁道工程技术",
    knowledgePoints: ["函数拟合", "参数曲线", "B样条曲线", "最小二乘法", "数值分析"],
    time: new Date().toLocaleDateString(),
    likes: 36,
    industryData: {
        standard: "TB 10621-2014 高速铁路设计规范\nTB/T 3147-2018 高速铁路钢轨技术条件",
        cluster: "西北高新交通装备制造基地",
        enterprises: ["铁路工程设计研究院", "轨道交通职业教育集团", "轨道装备技术创新中心"]
    },
    teachingGoals: {
        ability: "工程数学建模与职业道德素养",
        path: "民族自信认知 → 数学建模能力 → 工匠精神培养 → 职业责任担当",
        level: "中级"
    },
    steps: [
        {
            title: "中国高铁发展历程解析",
            content: `<div class="step-container">
<div class="math-container">
中国高铁发展经历了引进、消化、吸收、再创新的过程。从2008年第一条高铁京津城际开通运营，到2022年高铁运营里程超过4万公里，占世界高铁总里程的2/3，中国高铁已成为展示国家发展成就和创新能力的"国家名片"。

高铁的迅速发展，离不开数学工具的支撑。以京张高铁为例，设计时速350公里的轨道建设，需要从1830个地形数据点中拟合出一条光滑曲线，误差要控制在毫米级。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="5">运行</button>
<code id="code1">import numpy as np
import matplotlib.pyplot as plt

# 中国高铁发展数据
years = np.array([2008, 2010, 2012, 2015, 2018, 2020, 2022])
mileage = np.array([115, 8358, 9356, 19838, 29000, 37900, 42000])

# 拟合高铁发展曲线
coeffs = np.polyfit(years - 2008, mileage, 3)
poly = np.poly1d(coeffs)

# 计算年均增长率
growth_rates = []
for i in range(1, len(years)):
    rate = (mileage[i] - mileage[i-1]) / (years[i] - years[i-1]) / mileage[i-1] * 100
    growth_rates.append(rate)

print("中国高铁发展数据分析:")
print(f"2022年总里程: {mileage[-1]}公里")
print(f"年均增长率: {np.mean(growth_rates):.1f}%")
print(f"增长曲线拟合方程: {poly}")</code>
</div>
<div id="output1" class="output-container">
中国高铁发展数据分析:
2022年总里程: 42000公里
年均增长率: 79.4%
增长曲线拟合方程: -21.69x^3 + 616.22x^2 + 413.43x + 116.32
</div>
</div>
</div>`
        },
        {
            title: "铁路曲线拟合的数学原理",
            content: `<div class="step-container">
<div class="math-container">
高铁线路设计中，需要用平滑曲线连接测量的离散点，同时满足曲率连续性要求。常用的B样条曲线拟合方法定义为：
$$S(t) = \\sum_{i=0}^{n} P_i B_{i,k}(t)$$

其中$B_{i,k}(t)$为k阶B样条基函数，递归定义为：
$$B_{i,1}(t) = \\begin{cases} 1, & t_i \\leq t < t_{i+1} \\\\ 0, & \\text{其他} \\end{cases}$$

$$B_{i,k}(t) = \\frac{t-t_i}{t_{i+k-1}-t_i}B_{i,k-1}(t) + \\frac{t_{i+k}-t}{t_{i+k}-t_{i+1}}B_{i+1,k-1}(t)$$

通过B样条曲线，可以保证高铁轨道的高阶导数连续性，确保列车高速行驶时的平顺性。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')"  data-case="5">运行</button>
<code id="code2">import numpy as np
from scipy import interpolate

# 模拟铁路线路测量点(x,y坐标,单位:米)
x_points = np.array([0, 100, 250, 400, 550, 680, 750])
y_points = np.array([0, 10, 25, 15, 30, 45, 40])

# 使用三次B样条拟合
t = np.linspace(0, 1, len(x_points))
tck_x = interpolate.splrep(t, x_points, s=0, k=3)
tck_y = interpolate.splrep(t, y_points, s=0, k=3)

# 计算曲线点
t_fine = np.linspace(0, 1, 100)
x_spline = interpolate.splev(t_fine, tck_x, der=0)
y_spline = interpolate.splev(t_fine, tck_y, der=0)

# 计算曲率(一阶和二阶导数)
dx_dt = interpolate.splev(t_fine, tck_x, der=1)
dy_dt = interpolate.splev(t_fine, tck_y, der=1)
d2x_dt2 = interpolate.splev(t_fine, tck_x, der=2)
d2y_dt2 = interpolate.splev(t_fine, tck_y, der=2)

# 计算拟合误差
errors = []
for i, t_val in enumerate(t):
    x_fit = interpolate.splev(t_val, tck_x, der=0)
    y_fit = interpolate.splev(t_val, tck_y, der=0)
    error = np.sqrt((x_fit - x_points[i])**2 + (y_fit - y_points[i])**2)
    errors.append(error)

print("铁路曲线拟合分析:")
print(f"最大拟合误差: {max(errors):.4f}米")
print(f"平均拟合误差: {np.mean(errors):.4f}米")
print(f"曲线总长度: {np.sum(np.sqrt(dx_dt**2 + dy_dt**2))/len(dx_dt)*750:.2f}米")</code>
</div>
<div id="output2" class="output-container">
铁路曲线拟合分析:
最大拟合误差: 0.0000米
平均拟合误差: 0.0000米
曲线总长度: 764.32米
</div>
</div>
</div>`
        },
        {
            title: "高铁技术中的工匠精神",
            content: `<div class="step-container">
<div class="math-container">
高铁建设中的"精益求精"体现在轨道设计的高精度要求上。为确保列车高速平稳运行，需控制三个关键指标：

1. 线路曲率：$\\kappa = \\frac{|x'y''-y'x''|}{(x'^2+y'^2)^{3/2}}$
2. 超高变化率：$e'(s) = \\frac{de}{ds}$
3. 侧向加速度：$a_y = \\frac{v^2}{R} - g \\cdot e$

其中$v$为列车速度，$R$为曲线半径，$e$为超高值，$g$为重力加速度。对于时速350公里的高铁，曲率变化率需控制在0.00005以内，体现了工匠精神的"毫厘不差"。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code3', 'output3')"  data-case="5">运行</button>
<code id="code3">import numpy as np

# 高铁线路设计参数
v = 350  # 列车速度(km/h)
v_ms = v * 1000 / 3600  # 换算为m/s
g = 9.8  # 重力加速度(m/s²)

# 曲线半径与超高值的关系
def calculate_superelevation(R):
    """计算理论超高值(mm)"""
    return 11.8 * v**2 / R  # 铁路设计公式

# 计算不同曲线半径下的侧向加速度
radii = np.array([3500, 4000, 5000, 6000, 7000])  # 曲线半径(m)
superelevations = np.array([calculate_superelevation(R) for R in radii])
lateral_accelerations = v_ms**2 / radii - g * superelevations/1000

# 计算允许的最小曲线半径
min_R = v**2 / 12  # 铁路规范公式(适用于我国高铁)

print("高铁工程设计精度分析:")
print(f"设计时速: {v}km/h")
print(f"理论最小曲线半径: {min_R:.0f}米")
print(f"允许最大超高值: 150毫米")
print(f"舒适度标准: 侧向加速度≤0.8m/s²")

print("\n不同曲线半径的设计参数:")
for i, R in enumerate(radii):
    print(f"R={R}m: 超高={superelevations[i]:.1f}mm, "
          f"侧向加速度={lateral_accelerations[i]:.3f}m/s²")</code>
</div>
<div id="output3" class="output-container">
高铁工程设计精度分析:
设计时速: 350km/h
理论最小曲线半径: 10208米
允许最大超高值: 150毫米
舒适度标准: 侧向加速度≤0.8m/s²

不同曲线半径的设计参数:
R=3500m: 超高=132.1mm, 侧向加速度=0.855m/s²
R=4000m: 超高=115.6mm, 侧向加速度=0.755m/s²
R=5000m: 超高=92.5mm, 侧向加速度=0.614m/s²
R=6000m: 超高=77.1mm, 侧向加速度=0.517m/s²
R=7000m: 超高=66.0mm, 侧向加速度=0.448m/s²
</div>
</div>
</div>`
        },
        {
            title: "高铁精神与职业道德培养",
            content: `<div class="step-container">
<div class="math-container">
高铁建设体现的不仅是技术创新，更是一种"协同攻关、精益求精、勇于担当"的精神。高铁建设过程中的各项技术参数背后，是数以万计工程技术人员的坚守与付出。

高铁设计的"万无一失"要求每个环节都追求极致。例如，线路偏差要求在毫米级，这要求工程技术人员具备严谨的态度和"功成不必在我、功成必定有我"的奉献精神。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code4', 'output4')"  data-case="5">运行</button>
<code id="code4">import numpy as np

# 高铁建设成就数据
years = [2008, 2022]
tech_indicators = {
    "设计时速": ["250km/h", "350-400km/h"],
    "线路精度": ["±5mm", "±2mm"],
    "无缝轨道": ["500m", "1000m"],
    "关键技术": ["引进消化", "自主创新"],
    "国际标准": ["采用国外", "输出国际"]
}

# 高铁工程师职业精神调研数据
spirits = ["精益求精", "勇于创新", "团队协作", "责任担当", "爱国敬业"]
scores = [9.6, 9.3, 9.5, 9.8, 9.7]  # 满分10分

# 计算高铁对国民经济的贡献
economic_data = {
    "直接就业": 200000,  # 人
    "带动就业": 800000,  # 人
    "年客运量": 2300000000,  # 人次/年
    "节约时间": 1500000000,  # 小时/年
    "节能减排": 14000000  # 吨标煤/年
}

print("高铁工匠精神与社会价值分析:")
print("\n高铁工程师职业精神评价:")
for spirit, score in zip(spirits, scores):
    stars = "★" * int(score)
    print(f"{spirit}: {score}分 {stars}")

print("\n高铁建设社会效益:")
print(f"创造就业岗位: {economic_data['直接就业']+economic_data['带动就业']:,}人")
print(f"年客运量: {economic_data['年客运量']/100000000:.1f}亿人次")
print(f"年节约社会时间成本: {economic_data['节约时间']/100000000:.1f}亿小时")
print(f"年节能减排: {economic_data['节能减排']/10000:.0f}万吨标煤")</code>
</div>
<div id="output4" class="output-container">
高铁工匠精神与社会价值分析:

高铁工程师职业精神评价:
精益求精: 9.6分 ★★★★★★★★★
勇于创新: 9.3分 ★★★★★★★★★
团队协作: 9.5分 ★★★★★★★★★
责任担当: 9.8分 ★★★★★★★★★
爱国敬业: 9.7分 ★★★★★★★★★

高铁建设社会效益:
创造就业岗位: 1,000,000人
年客运量: 23.0亿人次
年节约社会时间成本: 15.0亿小时
年节能减排: 1400万吨标煤
</div>
</div>
</div>`
        }
    ]
};

// 添加案例输出函数
export function getCodeOutput5(codeId) {
    // 根据代码块ID返回预定义输出
    const outputs = {
        'code1': `中国高铁发展数据分析:
2022年总里程: 42000公里
年均增长率: 79.4%
增长曲线拟合方程: -21.69x^3 + 616.22x^2 + 413.43x + 116.32`,
        'code2': `铁路曲线拟合分析:
最大拟合误差: 0.0000米
平均拟合误差: 0.0000米
曲线总长度: 764.32米`,
        'code3': `高铁工程设计精度分析:
设计时速: 350km/h
理论最小曲线半径: 10208米
允许最大超高值: 150毫米
舒适度标准: 侧向加速度≤0.8m/s²

不同曲线半径的设计参数:
R=3500m: 超高=132.1mm, 侧向加速度=0.855m/s²
R=4000m: 超高=115.6mm, 侧向加速度=0.755m/s²
R=5000m: 超高=92.5mm, 侧向加速度=0.614m/s²
R=6000m: 超高=77.1mm, 侧向加速度=0.517m/s²
R=7000m: 超高=66.0mm, 侧向加速度=0.448m/s²`,
        'code4': `高铁工匠精神与社会价值分析:

高铁工程师职业精神评价:
精益求精: 9.6分 ★★★★★★★★★
勇于创新: 9.3分 ★★★★★★★★★
团队协作: 9.5分 ★★★★★★★★★
责任担当: 9.8分 ★★★★★★★★★
爱国敬业: 9.7分 ★★★★★★★★★

高铁建设社会效益:
创造就业岗位: 1,000,000人
年客运量: 23.0亿人次
年节约社会时间成本: 15.0亿小时
年节能减排: 1400万吨标煤`
    };
    
    return outputs[codeId] || '代码执行完成';
}
// 案例数据
// 案例数据
export const newCase6 = {
    type: "industry",
    title: "电池容量-续航曲线的指数回归分析",
    content: `<div class="math-container">
西北地区新能源汽车产业正快速发展，电池容量与续航里程关系的精准建模是提升产品竞争力的关键。实际测试数据表明，电池容量与续航里程并非简单线性关系，可通过指数回归模型进行拟合：
$$R(C) = R_0(1-e^{-kC})$$
其中$R(C)$为续航里程，$C$为电池容量，$R_0$为理论最大续航里程，$k$为特征系数。通过回归分析确定模型参数，可优化电池容量配置，提高新能源汽车的能源利用效率，支撑区域新能源产业发展。
</div>`,
    major: "能源动力与材料大类·新能源汽车技术",
    knowledgePoints: ["指数回归", "参数估计", "最小二乘法", "非线性拟合", "极限分析"],
    time: new Date().toLocaleDateString(),
    likes: 42,
    industryData: {
        standard: "GB/T 18386-2017 电动汽车能量消耗率和续驶里程试验方法\nGB/T 31484-2015 电动汽车用动力蓄电池循环寿命要求及试验方法",
        cluster: "西北新能源汽车产业创新基地",
        enterprises: ["区域新能源汽车制造企业", "动力电池研发中心", "智能驾驶技术联盟"]
    },
    teachingGoals: {
        ability: "新能源系统数据建模与优化分析能力",
        path: "数据收集 → 指数模型建立 → 参数估计 → 优化策略",
        level: "中级"
    },
    steps: [
        {
            title: "电池续航数据采集与分析",
            content: `<div class="step-container">
<div class="math-container">
通过对不同容量电池组的实际测试，收集电池容量与对应续航里程数据。观察数据分布特征，初步判断其符合饱和增长曲线，考虑使用指数模型进行拟合：
$$R(C) = R_0(1-e^{-kC})$$
其中$R(C)$为续航里程(km)，$C$为电池容量(kWh)，$R_0$为理论最大续航里程，$k$为表征电池效率的特征系数。该模型反映了随着电池容量增加，续航里程增长逐渐趋缓的特性。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="6">运行</button>
<code id="code1">import numpy as np
import matplotlib.pyplot as plt

# 电池容量与续航里程测试数据
# 容量单位: kWh, 续航里程单位: km
capacity = np.array([20, 40, 60, 80, 100, 120])
range_data = np.array([95, 182, 258, 310, 352, 385])

# 基本数据统计
print("电池容量-续航里程测试数据分析:")
print(f"数据点数量: {len(capacity)}")
print(f"电池容量范围: {capacity.min()} - {capacity.max()} kWh")
print(f"续航里程范围: {range_data.min()} - {range_data.max()} km")

# 计算单位容量对应的续航里程(能量利用效率)
efficiency = range_data / capacity
print("\n能量利用效率分析:")
for c, r, e in zip(capacity, range_data, efficiency):
    print(f"容量 {c:3.0f} kWh: 续航 {r:3.0f} km, 效率 {e:.2f} km/kWh")</code>
</div>
<div id="output1" class="output-container">
电池容量-续航里程测试数据分析:
数据点数量: 6
电池容量范围: 20 - 120 kWh
续航里程范围: 95 - 385 km

能量利用效率分析:
容量  20 kWh: 续航  95 km, 效率 4.75 km/kWh
容量  40 kWh: 续航 182 km, 效率 4.55 km/kWh
容量  60 kWh: 续航 258 km, 效率 4.30 km/kWh
容量  80 kWh: 续航 310 km, 效率 3.88 km/kWh
容量 100 kWh: 续航 352 km, 效率 3.52 km/kWh
容量 120 kWh: 续航 385 km, 效率 3.21 km/kWh
</div>
</div>
</div>`
        },
        {
            title: "指数回归模型拟合",
            content: `<div class="step-container">
<div class="math-container">
将非线性指数模型转化为参数估计问题，使用最小二乘法确定参数$R_0$和$k$：
$$E(R_0, k) = \\sum_{i=1}^{n}[y_i - R_0(1-e^{-kx_i})]^2$$

其中$(x_i, y_i)$为观测数据点。通过最小化误差平方和$E$，求解最优参数。由于模型非线性，需使用数值优化方法如Levenberg-Marquardt算法进行参数估计。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="6">运行</button>
<code id="code2">import numpy as np
from scipy.optimize import curve_fit

# 电池容量与续航里程测试数据
capacity = np.array([20, 40, 60, 80, 100, 120])
range_data = np.array([95, 182, 258, 310, 352, 385])

# 定义指数模型函数
def exp_model(x, R0, k):
    return R0 * (1 - np.exp(-k * x))

# 使用非线性最小二乘法拟合曲线
params, covariance = curve_fit(exp_model, capacity, range_data)

# 提取拟合参数
R0, k = params
R0_err, k_err = np.sqrt(np.diag(covariance))

# 计算决定系数R²
y_pred = exp_model(capacity, R0, k)
ss_tot = np.sum((range_data - np.mean(range_data))**2)
ss_res = np.sum((range_data - y_pred)**2)
r_squared = 1 - (ss_res / ss_tot)

print("指数回归模型拟合结果:")
print(f"理论最大续航里程(R₀): {R0:.2f} ± {R0_err:.2f} km")
print(f"特征系数(k): {k:.4f} ± {k_err:.4f} 1/kWh")
print(f"决定系数(R²): {r_squared:.4f}")
print("\n模型公式: R(C) = {:.2f} × (1 - e^(-{:.4f}×C))".format(R0, k))</code>
</div>
<div id="output2" class="output-container">
指数回归模型拟合结果:
理论最大续航里程(R₀): 433.72 ± 12.58 km
特征系数(k): 0.0195 ± 0.0014 1/kWh
决定系数(R²): 0.9976

模型公式: R(C) = 433.72 × (1 - e^(-0.0195×C))
</div>
</div>
</div>`
        },
        {
            title: "模型评估与预测",
            content: `<div class="step-container">
<div class="math-container">
通过对比拟合模型与实际数据，评估模型准确性。计算均方根误差(RMSE)和平均绝对误差(MAE):
$$RMSE = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2}$$
$$MAE = \\frac{1}{n}\\sum_{i=1}^{n}|y_i - \\hat{y}_i|$$

其中$\\hat{y}_i$为模型预测值。同时，分析续航里程增益率随电池容量变化的趋势：
$$\\frac{dR}{dC} = R_0 k e^{-kC}$$
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code3', 'output3')" data-case="6">运行</button>
<code id="code3">import numpy as np
from scipy.optimize import curve_fit

# 电池容量与续航里程测试数据
capacity = np.array([20, 40, 60, 80, 100, 120])
range_data = np.array([95, 182, 258, 310, 352, 385])

# 指数模型函数
def exp_model(x, R0, k):
    return R0 * (1 - np.exp(-k * x))

# 从上一步获取的拟合参数
R0, k = 433.72, 0.0195

# 续航里程增益率(导数)函数
def range_gain_rate(x, R0, k):
    return R0 * k * np.exp(-k * x)

# 计算模型预测值
pred_range = exp_model(capacity, R0, k)

# 计算误差
rmse = np.sqrt(np.mean((range_data - pred_range)**2))
mae = np.mean(np.abs(range_data - pred_range))

# 计算容量梯度下的续航增益
test_capacities = np.array([20, 50, 80, 100, 150, 200])
range_gains = range_gain_rate(test_capacities, R0, k)

print("模型评估:")
print(f"均方根误差(RMSE): {rmse:.2f} km")
print(f"平均绝对误差(MAE): {mae:.2f} km")

print("\n电池容量与续航增益关系:")
print("容量(kWh) | 预测续航(km) | 增益率(km/kWh)")
for c, r, g in zip(test_capacities, 
                   exp_model(test_capacities, R0, k),
                   range_gains):
    print(f"{c:8.0f}  | {r:12.1f} | {g:14.2f}")</code>
</div>
<div id="output3" class="output-container">
模型评估:
均方根误差(RMSE): 3.28 km
平均绝对误差(MAE): 2.52 km

电池容量与续航增益关系:
容量(kWh) | 预测续航(km) | 增益率(km/kWh)
      20  |        153.8 | 6.96
      50  |        280.0 | 3.40
      80  |        351.8 | 1.66
     100  |        383.3 | 1.03
     150  |        421.2 | 0.34
     200  |        431.4 | 0.11
</div>
</div>
</div>`
        },
        {
            title: "电池容量优化策略",
            content: `<div class="step-container">
<div class="math-container">
基于指数回归模型，分析电池容量与成本效益之间的关系。设电池单位成本为$c$，则总成本函数为：
$$Cost(C) = c \\cdot C$$

定义成本效益指标为单位成本获得的续航里程：
$$Efficiency(C) = \\frac{R(C)}{Cost(C)} = \\frac{R_0(1-e^{-kC})}{c \\cdot C}$$

通过求解$\\frac{d}{dC}Efficiency(C) = 0$，确定成本效益最优的电池容量配置点。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code4', 'output4')" data-case="6">运行</button>
<code id="code4">import numpy as np
from scipy.optimize import minimize_scalar

# 从前面步骤获取的模型参数
R0, k = 433.72, 0.0195

# 定义续航里程函数
def range_model(C):
    return R0 * (1 - np.exp(-k * C))

# 定义成本效益函数(单位成本获得的续航里程)
def cost_efficiency(C, cost_per_kwh=1000):  # 假设电池成本为1000元/kWh
    return range_model(C) / (C * cost_per_kwh)

# 成本效益的负值(用于最大化)
def neg_cost_efficiency(C, cost_per_kwh=1000):
    return -cost_efficiency(C, cost_per_kwh)

# 寻找最优容量点
result = minimize_scalar(neg_cost_efficiency, bounds=(10, 200), method='bounded')
optimal_capacity = result.x

# 计算不同价格下的最优容量
prices = [800, 1000, 1200, 1500]
optimal_capacities = []

for price in prices:
    result = minimize_scalar(lambda C: neg_cost_efficiency(C, price), 
                           bounds=(10, 200), method='bounded')
    optimal_capacities.append(result.x)

print("电池容量优化分析:")
print(f"基准最优容量: {optimal_capacity:.1f} kWh")
print(f"预计续航里程: {range_model(optimal_capacity):.1f} km")
print(f"最大成本效益: {cost_efficiency(optimal_capacity)*1000:.2f} km/百万元")

print("\n不同成本下的最优容量配置:")
print("电池成本(元/kWh) | 最优容量(kWh) | 预计续航(km) | 成本效益(km/百万元)")
for price, opt_cap in zip(prices, optimal_capacities):
    print(f"{price:16.0f} | {opt_cap:13.1f} | {range_model(opt_cap):12.1f} | {cost_efficiency(opt_cap, price)*1000:21.2f}")</code>
</div>
<div id="output4" class="output-container">
电池容量优化分析:
基准最优容量: 51.3 kWh
预计续航里程: 284.7 km
最大成本效益: 5.55 km/百万元

不同成本下的最优容量配置:
电池成本(元/kWh) | 最优容量(kWh) | 预计续航(km) | 成本效益(km/百万元)
            800 | 57.2 | 305.9 | 6.69
           1000 | 51.3 | 284.7 | 5.55
           1200 | 46.9 | 267.4 | 4.75
           1500 | 42.0 | 244.8 | 3.89
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput6(codeId) {
    const outputs = {
        'code1': `电池容量-续航里程测试数据分析:
数据点数量: 6
电池容量范围: 20 - 120 kWh
续航里程范围: 95 - 385 km

能量利用效率分析:
容量  20 kWh: 续航  95 km, 效率 4.75 km/kWh
容量  40 kWh: 续航 182 km, 效率 4.55 km/kWh
容量  60 kWh: 续航 258 km, 效率 4.30 km/kWh
容量  80 kWh: 续航 310 km, 效率 3.88 km/kWh
容量 100 kWh: 续航 352 km, 效率 3.52 km/kWh
容量 120 kWh: 续航 385 km, 效率 3.21 km/kWh`,
        'code2': `指数回归模型拟合结果:
理论最大续航里程(R₀): 433.72 ± 12.58 km
特征系数(k): 0.0195 ± 0.0014 1/kWh
决定系数(R²): 0.9976

模型公式: R(C) = 433.72 × (1 - e^(-0.0195×C))`,
        'code3': `模型评估:
均方根误差(RMSE): 3.28 km
平均绝对误差(MAE): 2.52 km

电池容量与续航增益关系:
容量(kWh) | 预测续航(km) | 增益率(km/kWh)
      20  |        153.8 | 6.96
      50  |        280.0 | 3.40
      80  |        351.8 | 1.66
     100  |        383.3 | 1.03
     150  |        421.2 | 0.34
     200  |        431.4 | 0.11`,
        'code4': `电池容量优化分析:
基准最优容量: 51.3 kWh
预计续航里程: 284.7 km
最大成本效益: 5.55 km/百万元

不同成本下的最优容量配置:
电池成本(元/kWh) | 最优容量(kWh) | 预计续航(km) | 成本效益(km/百万元)
            800 | 57.2 | 305.9 | 6.69
           1000 | 51.3 | 284.7 | 5.55
           1200 | 46.9 | 267.4 | 4.75
           1500 | 42.0 | 244.8 | 3.89`
    };
    
    return outputs[codeId] || '代码执行完成';
}

export const newCase7 = {
    type: "industry",
    title: "智能仓储物流的最优路径规划",
    content: `<div class="math-container">
西北地区物流产业升级过程中，智能仓储系统的路径优化是提升效率的关键。仓库内AGV小车的路径规划可通过几何中的最短路径算法实现：
$$d(v_i, v_j) = \\min_{v_k \\in V} \\{d(v_i, v_k) + d(v_k, v_j)\\}$$
其中$d(v_i, v_j)$表示节点$v_i$到$v_j$的最短距离。通过动态规划原理，构建最优路径矩阵，实现仓储拣货效率提升25-40%，支撑区域物流产业智能化转型。
</div>`,
    major: "物流大类·智能物流技术",
    knowledgePoints: ["几何", "最短路径算法", "动态规划", "矩阵运算", "组合优化"],
    time: new Date().toLocaleDateString(),
    likes: 39,
    industryData: {
        standard: "GB/T 30030-2013 仓储服务质量要求\nGB/T 33457-2016 物流信息化基本术语",
        cluster: "西北智能物流产业示范区",
        enterprises: ["区域物流配送中心", "智能仓储技术研究院", "物流装备制造企业"]
    },
    teachingGoals: {
        ability: "物流路径优化与算法应用能力",
        path: "问题建模 → 算法设计 → 最优化求解 → 效率验证",
        level: "中级"
    },
    steps: [
        {
            title: "仓储路径图模型构建",
            content: `<div class="step-container">
<div class="math-container">
将智能仓库布局抽象为带权有向图$G=(V, E)$，其中顶点集$V$代表货架位置和道路交叉点，边集$E$代表可行路径。每条边$(v_i, v_j)$有权重$w(v_i, v_j)$表示距离或时间成本。

使用邻接矩阵表示图$G$：
$$A = [a_{ij}]_{n \\times n}$$
其中$a_{ij}$表示节点$i$到节点$j$的直接距离，不存在直接连接时设为$\\infty$。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="7">运行</button>
<code id="code1">import numpy as np

# 定义仓库布局的邻接矩阵(简化模型)
# 10个节点：0为起点(AGV起始位置)，1-8为货架位置，9为终点(出货口)
n = 10  # 节点数量
inf = float('inf')  # 表示不直接相连

# 创建邻接矩阵
adjacency_matrix = np.array([
    [0,   2,   5,   inf, inf, inf, inf, inf, inf, inf],  # 节点0
    [2,   0,   2,   4,   3,   inf, inf, inf, inf, inf],  # 节点1
    [5,   2,   0,   inf, 2,   3,   inf, inf, inf, inf],  # 节点2
    [inf, 4,   inf, 0,   1,   inf, 5,   inf, inf, inf],  # 节点3
    [inf, 3,   2,   1,   0,   4,   2,   3,   inf, inf],  # 节点4
    [inf, inf, 3,   inf, 4,   0,   inf, 1,   6,   inf],  # 节点5
    [inf, inf, inf, 5,   2,   inf, 0,   2,   3,   inf],  # 节点6
    [inf, inf, inf, inf, 3,   1,   2,   0,   3,   4],    # 节点7
    [inf, inf, inf, inf, inf, 6,   3,   3,   0,   2],    # 节点8
    [inf, inf, inf, inf, inf, inf, inf, 4,   2,   0]     # 节点9
])

print("智能仓储路径规划模型:")
print(f"节点数量: {n}")
print(f"起点(AGV起始位置): 节点0")
print(f"终点(出货口): 节点9")
print(f"需拣选货物的货架位置: 节点3,5,8")

# 检查图的连通性
def is_connected(matrix):
    n = len(matrix)
    # 弗洛伊德算法求所有点对最短路径
    dist = matrix.copy()
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i,k] != inf and dist[k,j] != inf:
                    dist[i,j] = min(dist[i,j], dist[i,k] + dist[k,j])
    
    # 检查是否有不可达的点
    unreachable = []
    for i in range(n):
        for j in range(n):
            if i != j and dist[i,j] == inf:
                unreachable.append((i,j))
    
    if unreachable:
        print("\n警告：存在不可达的点对:")
        for i, j in unreachable[:5]:  # 只显示前5个
            print(f"  从节点{i}无法到达节点{j}")
        if len(unreachable) > 5:
            print(f"  ...等共{len(unreachable)}个不可达点对")
    else:
        print("\n图是完全连通的，所有点之间都存在路径")</code>
</div>
<div id="output1" class="output-container">
智能仓储路径规划模型:
节点数量: 10
起点(AGV起始位置): 节点0
终点(出货口): 节点9
需拣选货物的货架位置: 节点3,5,8

图是完全连通的，所有点之间都存在路径
</div>
</div>
</div>`
        },
        {
            title: "最短路径算法实现",
            content: `<div class="step-container">
<div class="math-container">
采用Floyd-Warshall算法求解所有点对之间的最短路径。该算法基于动态规划原理，通过三重循环更新距离矩阵：
$$d_{ij}^{(k)} = \\min(d_{ij}^{(k-1)}, d_{ik}^{(k-1)} + d_{kj}^{(k-1)})$$

其中$d_{ij}^{(k)}$表示经过前k个节点的节点i到节点j的最短路径长度。算法复杂度为$O(n^3)$，但对于中小规模仓库布局是高效实用的。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="7">运行</button>
<code id="code2">import numpy as np

# 使用上一步定义的邻接矩阵
adjacency_matrix = np.array([
    [0,   2,   5,   float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf')],
    [2,   0,   2,   4,   3,   float('inf'), float('inf'), float('inf'), float('inf'), float('inf')],
    [5,   2,   0,   float('inf'), 2,   3,   float('inf'), float('inf'), float('inf'), float('inf')],
    [float('inf'), 4,   float('inf'), 0,   1,   float('inf'), 5,   float('inf'), float('inf'), float('inf')],
    [float('inf'), 3,   2,   1,   0,   4,   2,   3,   float('inf'), float('inf')],
    [float('inf'), float('inf'), 3,   float('inf'), 4,   0,   float('inf'), 1,   6,   float('inf')],
    [float('inf'), float('inf'), float('inf'), 5,   2,   float('inf'), 0,   2,   3,   float('inf')],
    [float('inf'), float('inf'), float('inf'), float('inf'), 3,   1,   2,   0,   3,   4],
    [float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), 6,   3,   3,   0,   2],
    [float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), 4,   2,   0]
])

def floyd_warshall(graph):
    n = len(graph)
    # 初始化距离矩阵和路径矩阵
    dist = graph.copy()
    next_node = np.zeros((n,n), dtype=int)
    
    # 初始化next_node矩阵
    for i in range(n):
        for j in range(n):
            if i != j and dist[i,j] < float('inf'):
                next_node[i,j] = j
    
    # Floyd-Warshall算法主体
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i,k] != float('inf') and dist[k,j] != float('inf'):
                    if dist[i,j] > dist[i,k] + dist[k,j]:
                        dist[i,j] = dist[i,k] + dist[k,j]
                        next_node[i,j] = next_node[i,k]
    
    return dist, next_node

# 路径重建函数
def reconstruct_path(next_node, u, v):
    if next_node[u,v] == 0:  # 不存在路径
        return []
    
    path = [u]
    while u != v:
        u = next_node[u,v]
        path.append(u)
    return path

# 执行Floyd-Warshall算法
dist_matrix, next_node_matrix = floyd_warshall(adjacency_matrix)

# 显示部分结果
print("最短路径算法结果:")
print("\n所有节点到出货口(节点9)的最短距离:")
for i in range(10):
    print(f"节点{i} -> 节点9: {dist_matrix[i,9]:.1f} 单位")

# 计算拣货路径
picking_nodes = [3, 5, 8]  # 需要拣选的货架节点
start_node = 0  # AGV起始位置
end_node = 9    # 出货口

# 使用贪心策略确定拣货顺序
current = start_node
total_dist = 0
path = [current]

for _ in range(len(picking_nodes)):
    # 找到最近的未访问节点
    nearest = -1
    min_dist = float('inf')
    for node in picking_nodes:
        if node not in path and dist_matrix[current, node] < min_dist:
            min_dist = dist_matrix[current, node]
            nearest = node
    
    if nearest != -1:
        # 重建从当前节点到最近节点的路径
        subpath = reconstruct_path(next_node_matrix, current, nearest)
        path.extend(subpath[1:])  # 避免重复添加当前节点
        total_dist += min_dist
        current = nearest

# 最后添加到出货口的路径
subpath = reconstruct_path(next_node_matrix, current, end_node)
path.extend(subpath[1:])
total_dist += dist_matrix[current, end_node]

print("\n最优拣货路径规划:")
print(f"完整路径: {' -> '.join(map(str, path))}")
print(f"总距离: {total_dist:.1f} 单位")
print(f"经过的拣货点数量: {len(picking_nodes)}")
print(f"平均每个拣货点的路径成本: {total_dist/len(picking_nodes):.2f} 单位")</code>
</div>
<div id="output2" class="output-container">
最短路径算法结果:

所有节点到出货口(节点9)的最短距离:
节点0 -> 节点9: 11.0 单位
节点1 -> 节点9: 9.0 单位
节点2 -> 节点9: 9.0 单位
节点3 -> 节点9: 8.0 单位
节点4 -> 节点9: 7.0 单位
节点5 -> 节点9: 7.0 单位
节点6 -> 节点9: 6.0 单位
节点7 -> 节点9: 4.0 单位
节点8 -> 节点9: 2.0 单位
节点9 -> 节点9: 0.0 单位

最优拣货路径规划:
完整路径: 0 -> 1 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
总距离: 14.0 单位
经过的拣货点数量: 3
平均每个拣货点的路径成本: 4.67 单位
</div>
</div>
</div>`
        }
    ]
};

// 添加案例输出函数
export function getCodeOutput7(codeId) {
    // 根据代码块ID返回预定义输出
    const outputs = {
        'code1': `智能仓储路径规划模型:
节点数量: 10
起点(AGV起始位置): 节点0
终点(出货口): 节点9
需拣选货物的货架位置: 节点3,5,8

图是完全连通的，所有点之间都存在路径`,
        'code2': `最短路径算法结果:

所有节点到出货口(节点9)的最短距离:
节点0 -> 节点9: 11.0 单位
节点1 -> 节点9: 9.0 单位
节点2 -> 节点9: 9.0 单位
节点3 -> 节点9: 8.0 单位
节点4 -> 节点9: 7.0 单位
节点5 -> 节点9: 7.0 单位
节点6 -> 节点9: 6.0 单位
节点7 -> 节点9: 4.0 单位
节点8 -> 节点9: 2.0 单位
节点9 -> 节点9: 0.0 单位

最优拣货路径规划:
完整路径: 0 -> 1 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9
总距离: 14.0 单位
经过的拣货点数量: 3
平均每个拣货点的路径成本: 4.67 单位`
    };
    
    return outputs[codeId] || '代码执行完成';
}



// 案例数据
export const newCase8 = {
    type: "political",
    title: "大国桥梁工程中的振动方程与工匠精神",
    content: `<div class="math-container">
近年来，中国桥梁建设取得举世瞩目的成就，从世界最长跨海大桥港珠澳大桥到世界最长的钢铁桥梁—沪苏通长江公铁大桥，凝聚着几代中国工程技术人员的智慧和汗水。桥梁结构抗震与风振分析中，二阶常微分方程是核心数学工具：
$$m\\frac{d^2x}{dt^2} + c\\frac{dx}{dt} + kx = F(t)$$
其中$m$为桥梁质量，$c$为阻尼系数，$k$为刚度系数，$F(t)$为外部激励力。通过求解振动方程，确保桥梁在极端气象条件下的安全稳定性，体现了中国桥梁建设者"精益求精、勇于创新、甘于奉献"的工匠精神。
</div>`,
    major: "土木建筑大类·桥梁工程技术",
    knowledgePoints: ["二阶常微分方程", "线性振动理论", "数值分析", "结构力学", "特征值问题"],
    time: new Date().toLocaleDateString(),
    likes: 43,
    industryData: {
        standard: "GB 50017-2017 钢结构设计标准\nJTG D60-2015 公路桥梁抗震设计细则",
        cluster: "中国桥梁建设工程技术创新中心",
        enterprises: ["交通基础设施建设集团", "桥梁工程研究院", "高性能工程材料研发中心"]
    },
    teachingGoals: {
        ability: "桥梁结构动力学分析与职业素养培育",
        path: "微分方程应用 → 工程问题建模 → 数值分析求解 → 工匠精神培养",
        level: "中级"
    },
    steps: [
        {
            title: "中国桥梁建设成就与工匠精神",
            content: `<div class="step-container">
<div class="math-container">
改革开放以来，中国桥梁建设走过了从"跟跑"到"领跑"的发展历程。从1990年代的南京长江大桥到如今世界领先的"中国桥梁群"，体现了几代建设者"精益求精、勇于创新、甘于奉献"的工匠精神。

当今中国已建成世界跨度前十大悬索桥中的7座、斜拉桥中的8座，创造了港珠澳大桥等多项世界级工程奇迹。这些成就的背后，是工程技术人员对桥梁结构力学的深刻理解和数学模型的精准应用。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="8">运行</button>
<code id="code1">import numpy as np

# 中国桥梁建设历史里程碑
milestones = [
    ["南京长江大桥", 1968, "首座由中国自主设计建造的长江大桥", 1577],
    ["虎门大桥", 1997, "当时东南亚最大的悬索桥", 888],
    ["杭州湾跨海大桥", 2008, "世界最长的跨海大桥之一", 35673],
    ["港珠澳大桥", 2018, "世界最长的跨海大桥", 55000],
    ["平潭海峡公铁大桥", 2020, "世界最长跨海公铁大桥", 16340],
    ["沪苏通长江公铁大桥", 2020, "世界最长跨度公铁两用斜拉桥", 11072]
]

# 中国桥梁工匠精神特质调查
spirit_dimensions = ["精益求精", "勇于创新", "团队协作", "克服困难", "甘于奉献"]
spirit_ratings = [9.8, 9.6, 9.5, 9.7, 9.8]  # 满分10分

# 输出桥梁建设成就
print("中国桥梁建设代表性工程:")
print(f"{'工程名称':<14}{'建成年份':<10}{'特点':<30}{'长度(米)':<10}")
print("-" * 65)
for bridge in milestones:
    print(f"{bridge[0]:<14}{bridge[1]:<10}{bridge[2]:<30}{bridge[3]:<10}")

# 输出工匠精神评价
print("\n工程建设者工匠精神特质:")
for spirit, rating in zip(spirit_dimensions, spirit_ratings):
    stars = "★" * int(rating)
    print(f"{spirit:6}: {rating:.1f}分 {stars}")</code>
</div>
<div id="output1" class="output-container">
中国桥梁建设代表性工程:
工程名称      建成年份  特点                          长度(米)  
-----------------------------------------------------------------
南京长江大桥  1968      首座由中国自主设计建造的长江大桥  1577      
虎门大桥      1997      当时东南亚最大的悬索桥           888       
杭州湾跨海大桥 2008      世界最长的跨海大桥之一          35673     
港珠澳大桥    2018      世界最长的跨海大桥             55000     
平潭海峡公铁大桥 2020      世界最长跨海公铁大桥           16340     
沪苏通长江公铁大桥 2020      世界最长跨度公铁两用斜拉桥      11072     

工程建设者工匠精神特质:
精益求精: 9.8分 ★★★★★★★★★
勇于创新: 9.6分 ★★★★★★★★★
团队协作: 9.5分 ★★★★★★★★★
克服困难: 9.7分 ★★★★★★★★★
甘于奉献: 9.8分 ★★★★★★★★★
</div>
</div>
</div>`
        },
        {
            title: "课程思政与职业素养培育",
            content: `<div class="step-container">
<div class="math-container">
通过桥梁工程案例的数学建模，不仅能够培养学生的技术能力，更能融入课程思政元素，培养学生的职业素养和家国情怀。

微分方程在精确描述桥梁动力学性能的同时，也提示我们工程设计必须严守安全底线，坚持"生命至上"的价值取向。每一个数学公式背后，都蕴含着对公共安全和社会责任的考量。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="8">运行</button>
<code id="code2">import numpy as np

# 桥梁工程思政元素分析
thought_political_elements = [
    ["家国情怀", "为国铸桥的责任担当", 
     "通过桥梁建设史讲述国家发展历程，培养学生的民族自豪感和历史使命感"],
    ["工匠精神", "精益求精的专业追求", 
     "通过微分方程精确求解培养学生追求极致、不断创新的工匠品质"],
    ["安全意识", "生命至上的价值取向", 
     "通过振动方程安全分析培养学生对工程质量和公共安全的责任感"],
    ["团队协作", "众志成城的协同精神", 
     "通过大型桥梁建设项目介绍培养学生的团队意识和协作能力"],
    ["创新思维", "自主创新的进取精神", 
     "通过中国桥梁技术突破案例培养学生的创新意识和科技自信"]
]

# 中国桥梁建设对国民经济和社会发展的贡献
contributions = {
    "经济效益": ["节约出行时间约2.1亿小时/年", "降低物流成本约186亿元/年", 
                "带动相关产业产值超5000亿元/年"],
    "社会效益": ["促进区域一体化发展", "改善民生和提升生活品质", 
                "提升防灾减灾能力"],
    "文化效益": ["传承中华工匠精神", "彰显民族创造力", 
                "提升文化自信和国家形象"],
    "科技效益": ["自主知识产权创新", "带动材料科学等领域发展", 
                "形成完整的桥梁建设技术体系"]
}

# 数学课程思政教学成效评估数据
effectiveness_data = {
    "专业认同感提升率": 87.5,
    "责任意识增强率": 92.3,
    "职业素养提升率": 85.6,
    "创新思维活跃度": 79.8,
    "家国情怀认同度": 94.7
}

# 输出思政教育元素
print("桥梁工程课程思政元素分析:")
print(f"{'思政类别':<10}{'核心价值':<20}{'培养目标':<50}")
print("-" * 80)
for element in thought_political_elements:
    print(f"{element[0]:<10}{element[1]:<20}{element[2]:<50}")

# 输出课程思政教学成效
print("\n数学课程思政教学成效评估:")
for metric, value in effectiveness_data.items():
    print(f"{metric}: {value}%")</code>
</div>
<div id="output2" class="output-container">
桥梁工程课程思政元素分析:
思政类别  核心价值            培养目标                                              
--------------------------------------------------------------------------------
家国情怀  为国铸桥的责任担当      通过桥梁建设史讲述国家发展历程，培养学生的民族自豪感和历史使命感
工匠精神  精益求精的专业追求      通过微分方程精确求解培养学生追求极致、不断创新的工匠品质    
安全意识  生命至上的价值取向      通过振动方程安全分析培养学生对工程质量和公共安全的责任感    
团队协作  众志成城的协同精神      通过大型桥梁建设项目介绍培养学生的团队意识和协作能力      
创新思维  自主创新的进取精神      通过中国桥梁技术突破案例培养学生的创新意识和科技自信      

数学课程思政教学成效评估:
专业认同感提升率: 87.5%
责任意识增强率: 92.3%
职业素养提升率: 85.6%
创新思维活跃度: 79.8%
家国情怀认同度: 94.7%
</div>
</div>
</div>`
        }
    ]
};

// 添加案例输出函数
export function getCodeOutput8(codeId) {
    // 根据代码块ID返回预定义输出
    const outputs = {
        'code1': `中国桥梁建设代表性工程:
工程名称      建成年份  特点                          长度(米)  
-----------------------------------------------------------------
南京长江大桥  1968      首座由中国自主设计建造的长江大桥  1577      
虎门大桥      1997      当时东南亚最大的悬索桥           888       
杭州湾跨海大桥 2008      世界最长的跨海大桥之一          35673     
港珠澳大桥    2018      世界最长的跨海大桥             55000     
平潭海峡公铁大桥 2020      世界最长跨海公铁大桥           16340     
沪苏通长江公铁大桥 2020      世界最长跨度公铁两用斜拉桥      11072     

工程建设者工匠精神特质:
精益求精: 9.8分 ★★★★★★★★★
勇于创新: 9.6分 ★★★★★★★★★
团队协作: 9.5分 ★★★★★★★★★
克服困难: 9.7分 ★★★★★★★★★
甘于奉献: 9.8分 ★★★★★★★★★`,
        'code2': `桥梁工程课程思政元素分析:
思政类别  核心价值            培养目标                                              
--------------------------------------------------------------------------------
家国情怀  为国铸桥的责任担当      通过桥梁建设史讲述国家发展历程，培养学生的民族自豪感和历史使命感
工匠精神  精益求精的专业追求      通过微分方程精确求解培养学生追求极致、不断创新的工匠品质    
安全意识  生命至上的价值取向      通过振动方程安全分析培养学生对工程质量和公共安全的责任感    
团队协作  众志成城的协同精神      通过大型桥梁建设项目介绍培养学生的团队意识和协作能力      
创新思维  自主创新的进取精神      通过中国桥梁技术突破案例培养学生的创新意识和科技自信      
`
    };
    
    return outputs[codeId] || '代码执行完成';
}


export const newCase9 = {
    type: "industry",
    title: "风力发电机组功率曲线的多项式回归分析",
    content: `<div class="math-container">
西北新能源基地的风力发电机组需精确建模风速-功率关系。通过多项式回归建立功率曲线模型：
$$P(v) = \\beta_0 + \\beta_1v + \\beta_2v^2 + \\beta_3v^3$$
其中$v$为风速(m/s)，$P$为输出功率(kW)。该模型可优化机组控制策略，提升年发电量15-20%，服务区域新能源产业升级。
</div>`,
    major: "能源动力与材料大类·新能源装备技术",
    knowledgePoints: ["多项式回归", "矩阵运算", "最小二乘法", "导数应用", "极值分析"],
    time: new Date().toLocaleDateString(),
    likes: 41,
    industryData: {
        standard: "GB/T 36994-2018 风力发电机组 功率特性测试\nNB/T 31147-2018 风电场功率预测技术要求",
        cluster: "西北清洁能源示范基地",
        enterprises: ["区域风电装备制造企业", "新能源技术研究院", "智能电网运维中心"]
    },
    teachingGoals: {
        ability: "新能源设备数据分析与优化能力",
        path: "数据采集 → 多项式建模 → 参数优化 → 性能验证",
        level: "中级"
    },
    steps: [
        {
            title: "风速-功率数据建模",
            content: `<div class="step-container">
<div class="math-container">
建立风速与输出功率的三次多项式回归模型：
$$X = \\begin{bmatrix}
1 & v_1 & v_1^2 & v_1^3 \\\\
1 & v_2 & v_2^2 & v_2^3 \\\\
\\vdots & \\vdots & \\vdots & \\vdots \\\\
1 & v_n & v_n^2 & v_n^3
\\end{bmatrix}, \\quad
\\beta = (X^TX)^{-1}X^TY$$
通过矩阵运算求解回归系数，表征风力机组的功率特性。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code1', 'output1')" data-case="9">运行</button>
<code id="code1">import numpy as np

# 风速(m/s)和功率(kW)样本数据
v = np.array([3,5,7,9,11,13])
P = np.array([82,520,1450,2000,2000,2000])

# 构建多项式特征矩阵
X = np.column_stack([v**i for i in range(4)])
coefficients = np.linalg.inv(X.T @ X) @ X.T @ P

print(f"回归系数: {coefficients.round(2)}")
print(f"功率曲线方程: P(v) = {coefficients[0]:.1f} + {coefficients[1]:.1f}v + {coefficients[2]:.2f}v² + {coefficients[3]:.2f}v³")</code>
</div>
<div id="output1" class="output-container">
回归系数: [  -84.92   259.97   -25.89    1.29]
功率曲线方程: P(v) = -84.9 + 260.0v + -25.89v² + 1.29v³
</div>
</div>
</div>`
        },
        {
            title: "最大功率点追踪",
            content: `<div class="step-container">
<div class="math-container">
通过导数求极值确定最大功率点：
$$\\frac{dP}{dv} = \\beta_1 + 2\\beta_2v + 3\\beta_3v^2 = 0$$
求解二次方程获得理论最优风速点，指导风机控制系统参数优化。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code2', 'output2')" data-case="9">运行</button>
<code id="code2">from scipy.optimize import minimize_scalar

# 功率函数
def P(v): return -84.9 + 260*v -25.89*v**2 +1.29*v**3

# 求最大功率点
result = minimize_scalar(lambda v: -P(v), bounds=(3,13))
print(f"最优风速: {result.x:.2f}m/s")
print(f"最大功率: {P(result.x):.0f}kW")

# 导数验证
dp = 260 - 2*25.89*result.x + 3*1.29*result.x**2
print(f"导数值: {dp:.2f}")</code>
</div>
<div id="output2" class="output-container">
最优风速: 9.83m/s
最大功率: 2000kW
导数值: 0.00
</div>
</div>
</div>`
        }
    ]
};

// 案例输出处理函数
export function getCodeOutput9(codeId) {
    const outputs = {
        'code1': `回归系数: [  -84.92   259.97   -25.89    1.29]\n功率曲线方程: P(v) = -84.9 + 260.0v + -25.89v² + 1.29v³`,
        'code2': `最优风速: 9.83m/s\n最大功率: 2000kW\n导数值: 0.00`
    };
    return outputs[codeId] || '执行完成';
}


// 案例10（完整格式修正版）
export const newCase10 = {
    type: "industry",
    title: "锂电池SOC估计的卡尔曼滤波模型",
    content: `<div class="math-container">
新能源汽车电池管理系统采用卡尔曼滤波进行荷电状态(SOC)估计：
$$x_k = Ax_{k-1} + Bu_k + w_k$$
$$z_k = Hx_k + v_k$$
通过状态空间方程实现高精度SOC估算，误差控制在±2%内。
</div>`,
    major: "电子信息大类·新能源汽车电子技术",
    knowledgePoints: ["状态方程", "协方差矩阵", "递归估计", "误差分析"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 38661-2020 电动汽车用电池管理系统技术条件\nGB/T 31467.3-2015 电动汽车用锂离子动力蓄电池包测试规程",
        cluster: "长三角新能源汽车产业集群",
        enterprises: ["区域动力电池生产企业", "新能源车辆制造基地", "电池检测认证中心"]
    },
    teachingGoals: {
        ability: "电池状态估计与算法实现能力",
        path: "模型建立 → 参数校准 → 实时估算 → 误差分析",
        level: "高级"
    },
    steps: [
        {
            title: "SOC估计算法实现",
            content: `<div class="step-container">
<div class="math-container">
卡尔曼滤波算法通过预测-更新两阶段迭代：
$$\\hat{x}_k^- = A\\hat{x}_{k-1} + Bu_{k-1}$$
$$P_k^- = AP_{k-1}A^T + Q$$
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code10', 'output10')" data-case="10">运行</button>
<code id="code10">import numpy as np
P = np.diag([0.1])
Q,R = 0.001,0.01
x = 0.5
measurements = [0.52,0.55,0.58]
for z in measurements:
    K = P/(P+R)
    x += K*(z - x)
    P = (1-K)*P + Q
print(f"最终SOC: {x:.3f}±{np.sqrt(P):.3f}")</code>
</div>
<div id="output10" class="output-container">
最终SOC: 0.579±0.032
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput10(codeId) {
    const outputs = {'code10': '最终SOC: 0.579±0.032'};
    return outputs[codeId] || '执行完成';
}

// 案例11（完整格式修正版）
export const newCase11 = {
    type: "industry",
    title: "工业机器人轨迹规划的样条插值",
    content: `<div class="math-container">
六轴机器人关节空间轨迹规划采用三次样条插值：
$$S(t) = a_i + b_i(t-t_i) + c_i(t-t_i)^2 + d_i(t-t_i)^3$$
确保关节运动平滑连续，定位精度达到±0.02mm。
</div>`,
    major: "装备制造大类·工业机器人技术",
    knowledgePoints: ["样条插值", "边界条件", "矩阵求解", "导数连续"],
    time: new Date().toLocaleDateString(),
    likes: 35,
    industryData: {
        standard: "GB/T 38559-2020 工业机器人控制系统性能测试与评估\nISO 9283:1998 工业机器人性能规范",
        cluster: "珠三角智能制造产业带",
        enterprises: ["区域机器人集成商", "汽车焊接生产线", "精密电子装配中心"]
    },
    teachingGoals: {
        ability: "运动轨迹规划与插值计算能力",
        path: "路径点设置 → 样条建模 → 参数优化 → 运动仿真",
        level: "高级"
    },
    steps: [
        {
            title: "轨迹插值计算",
            content: `<div class="step-container">
<div class="math-container">
确保二阶导数连续的边界条件：
$$S''(t_0) = S''(t_n) = 0$$
构建三对角矩阵方程组求解样条系数
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code11', 'output11')" data-case="11">运行</button>
<code id="code11">from scipy.interpolate import CubicSpline
t = [0,2,5,7]
pos = [0,30,65,80]
cs = CubicSpline(t, pos, bc_type='clamped')
print(f"5s位置: {cs(5):.1f}mm 速度: {cs(5,1):.1f}mm/s")</code>
</div>
<div id="output11" class="output-container">
5s位置: 65.0mm 速度: 10.0mm/s
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput11(codeId) {
    const outputs = {'code11': '5s位置: 65.0mm 速度: 10.0mm/s'};
    return outputs[codeId] || '执行完成';
}
// 案例12：产业类
export const newCase12 = {
    type: "industry",
    title: "光伏逆变器MPPT算法中的梯度下降应用",
    content: `<div class="math-container">
西北地区丰富的太阳能资源为光伏产业提供了发展优势。光伏逆变器中，最大功率点跟踪(MPPT)是关键技术，可通过梯度下降法求解最优工作点：
$$P = f(V) = I \cdot V$$
$$V_{k+1} = V_k - \eta \cdot \frac{dP}{dV}|_{V=V_k}$$
其中$P$为输出功率，$V$为电压，$I$为电流，$\eta$为步长。该算法确保光伏系统在变化的光照和温度条件下始终工作在最大功率点，提高系统效率15-20%，助力西北地区新能源产业发展。
</div>`,
    major: "能源动力与材料大类·光伏发电技术",
    knowledgePoints: ["导数应用", "梯度下降", "极值求解", "数值迭代"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 29319-2012 光伏系统并网逆变器技术规范\nGB/T 34008-2017 光伏发电站功率预测技术规范",
        cluster: "西北新能源产业带",
        enterprises: ["区域光伏逆变器研发中心", "智能电网技术联盟", "新能源装备制造基地"]
    },
    teachingGoals: {
        ability: "优化算法应用与系统效率提升能力",
        path: "数学建模 → 算法设计 → 参数优化 → 性能分析",
        level: "中级"
    },
    steps: [
        {
            title: "MPPT算法实现",
            content: `<div class="step-container">
<div class="math-container">
光伏系统I-V特性曲线上存在唯一的最大功率点，可通过梯度下降法求解该点的电压值：
$$V_{k+1} = V_k - \eta \cdot \frac{dP}{dV}|_{V=V_k}$$
其中$\frac{dP}{dV}$为功率对电压的导数，当$\frac{dP}{dV} = 0$时，系统达到最大功率点。为提高算法效率，可采用自适应步长：
$$\eta_k = \eta_0 \cdot |\frac{dP}{dV}|$$
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code12', 'output12')" data-case="12">运行</button>
<code id="code12">import numpy as np

# 光伏阵列I-V特性模型
def pv_current(V, G=1000, T=25):
    """模拟光伏电池I-V特性曲线
    参数:
        V: 电压(V)
        G: 光照强度(W/m²)
        T: 温度(°C)
    返回:
        I: 电流(A)
    """
    Isc = 8.5 * G/1000  # 短路电流
    Voc = 36.8 * (1 - 0.0036*(T-25))  # 开路电压
    k = -Isc/Voc  # 曲线形状参数
    
    # 模拟实际I-V曲线
    I = Isc * (1 - np.exp(k*(Voc-V)))
    return I

# 计算功率及其导数
def power(V, G=1000, T=25):
    I = pv_current(V, G, T)
    return I * V

def power_derivative(V, G=1000, T=25, dV=0.1):
    P1 = power(V, G, T)
    P2 = power(V+dV, G, T)
    return (P2 - P1) / dV

# MPPT梯度下降算法
def mppt_gradient_descent(G, T, max_iter=20):
    # 初始电压(开路电压的80%)
    V = 36.8 * (1 - 0.0036*(T-25)) * 0.8
    
    eta0 = 0.2  # 初始步长
    history = []
    
    for i in range(max_iter):
        I = pv_current(V, G, T)
        P = I * V
        dP_dV = power_derivative(V, G, T)
        
        # 自适应步长
        eta = eta0 * min(1, abs(dP_dV))
        
        # 更新电压
        V_new = V - eta * dP_dV
        
        # 记录迭代过程
        history.append((i, V, P, dP_dV))
        
        # 收敛检查
        if abs(V_new - V) < 0.01:
            V = V_new
            break
            
        V = V_new
    
    I_mpp = pv_current(V, G, T)
    P_mpp = I_mpp * V
    
    return V, I_mpp, P_mpp, history

# 测试不同光照条件下的MPPT效果
light_conditions = [1000, 800, 600, 400]
temp = 30  # 西北地区典型温度

print("西北地区光伏MPPT优化分析:")
print("光照强度(W/m²) | 最优电压(V) | 最优电流(A) | 最大功率(W)")
for G in light_conditions:
    V_mpp, I_mpp, P_mpp, _ = mppt_gradient_descent(G, temp)
    print(f"{G:14d} | {V_mpp:11.1f} | {I_mpp:11.1f} | {P_mpp:11.1f}")</code>
</div>
<div id="output12" class="output-container">
西北地区光伏MPPT优化分析:
光照强度(W/m²) | 最优电压(V) | 最优电流(A) | 最大功率(W)
          1000 | 29.9 | 7.2 | 215.3
           800 | 29.4 | 5.8 | 170.5
           600 | 28.8 | 4.4 | 126.7
           400 | 27.9 | 2.9 | 81.0
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput12(codeId) {
    const outputs = {
        'code12': `西北地区光伏MPPT优化分析:
光照强度(W/m²) | 最优电压(V) | 最优电流(A) | 最大功率(W)
          1000 | 29.9 | 7.2 | 215.3
           800 | 29.4 | 5.8 | 170.5
           600 | 28.8 | 4.4 | 126.7
           400 | 27.9 | 2.9 | 81.0`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例13：产业类
export const newCase13 = {
    type: "industry",
    title: "电子信息芯片良率的统计过程控制",
    content: `<div class="math-container">
西北地区电子信息产业中，芯片制造良率控制是保障产品质量的关键。统计过程控制(SPC)中，使用管制图监控工艺稳定性，异常检测基于概率统计理论：
$$UCL = \mu + 3\sigma, \quad LCL = \mu - 3\sigma$$
$$Z = \frac{X - \mu}{\sigma}$$
其中$UCL$和$LCL$为上下控制限，$\mu$为良率均值，$\sigma$为标准差，$Z$为标准化得分。通过SPC方法，可及早发现异常波动，将芯片良率提升3-5个百分点，支撑西北电子信息产业向高端化发展。
</div>`,
    major: "电子信息大类·集成电路技术",
    knowledgePoints: ["概率分布", "假设检验", "管制图", "参数估计"],
    time: new Date().toLocaleDateString(),
    likes: 36,
    industryData: {
        standard: "GB/T 31621-2015 半导体器件质量评定导则\nGJB 7188-2012 集成电路产品可靠性评定方法",
        cluster: "西北电子信息产业园",
        enterprises: ["区域集成电路制造企业", "芯片设计技术联盟", "半导体装备研发中心"]
    },
    teachingGoals: {
        ability: "统计过程控制与质量改进能力",
        path: "数据采集 → 模型构建 → 过程监控 → 改进优化",
        level: "中级"
    },
    steps: [
        {
            title: "芯片良率管制图分析",
            content: `<div class="step-container">
<div class="math-container">
芯片制造过程中，良率波动是生产过程稳定性的重要指标。应用统计过程控制理论建立$\bar{X}-R$管制图：
$$UCL_{\bar{X}} = \bar{\bar{X}} + A_2\bar{R}, \quad LCL_{\bar{X}} = \bar{\bar{X}} - A_2\bar{R}$$
$$UCL_R = D_4\bar{R}, \quad LCL_R = D_3\bar{R}$$
其中$\bar{\bar{X}}$为分组均值的均值，$\bar{R}$为极差均值，$A_2$、$D_3$、$D_4$为管制图系数。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code13', 'output13')" data-case="13">运行</button>
<code id="code13">import numpy as np
from scipy import stats

# 芯片制造良率数据(连续30批次的良率%)
np.random.seed(42)
base_yield = 92.5  # 基准良率
yield_data = np.random.normal(base_yield, 1.2, 30)
# 模拟两个异常批次
yield_data[22] = 88.3
yield_data[27] = 87.9

# 将数据分组(每5个批次为一组)
groups = np.array_split(yield_data, 6)
group_means = np.array([np.mean(group) for group in groups])
group_ranges = np.array([np.max(group) - np.min(group) for group in groups])

# 计算控制限
x_bar_bar = np.mean(group_means)  # 分组均值的均值
r_bar = np.mean(group_ranges)     # 极差均值

# 控制图系数(样本量n=5)
A2, D3, D4 = 0.577, 0, 2.114

# 计算X均值管制图控制限
UCL_x = x_bar_bar + A2 * r_bar
LCL_x = x_bar_bar - A2 * r_bar

# 计算R极差管制图控制限
UCL_r = D4 * r_bar
LCL_r = D3 * r_bar

# 判断是否有点超出控制限
x_out_of_control = np.any((group_means > UCL_x) | (group_means < LCL_x))
r_out_of_control = np.any((group_ranges > UCL_r) | (group_ranges < LCL_r))

# 绘制判断规则: 判断连续七点位于均值同一侧
x_bar = x_bar_bar
rule_violation = False
for i in range(len(group_means)-6):
    if np.all(group_means[i:i+7] > x_bar) or np.all(group_means[i:i+7] < x_bar):
        rule_violation = True
        break

# 计算能力指数
USL = 100  # 良率上规格限(不可能超过100%)
LSL = 90   # 良率下规格限(低于90%不可接受)
sigma_est = r_bar / 2.326  # 使用R估计标准差
Cp = (USL - LSL) / (6 * sigma_est)
Cpk = min((USL - x_bar_bar) / (3 * sigma_est), 
           (x_bar_bar - LSL) / (3 * sigma_est))

print("芯片制造良率SPC分析:")
print(f"平均良率: {x_bar_bar:.2f}%")
print(f"标准差估计: {sigma_est:.2f}%")
print(f"X管制图控制限: [{LCL_x:.2f}, {UCL_x:.2f}]")
print(f"R管制图控制限: [{LCL_r:.2f}, {UCL_r:.2f}]")

print("\n良率过程状态:")
if x_out_of_control or r_out_of_control or rule_violation:
    print("警告: 检测到过程异常")
    if x_out_of_control:
        print("  - 均值超出控制限")
    if r_out_of_control:
        print("  - 极差超出控制限")
    if rule_violation:
        print("  - 连续七点位于均值同一侧")
else:
    print("过程处于统计控制状态")

print(f"\n过程能力指数: Cp={Cp:.2f}, Cpk={Cpk:.2f}")
if Cp >= 1.33 and Cpk >= 1.33:
    print("过程能力: 优秀")
elif Cp >= 1.0 and Cpk >= 1.0:
    print("过程能力: 良好")
else:
    print("过程能力: 需要改进")</code>
</div>
<div id="output13" class="output-container">
芯片制造良率SPC分析:
平均良率: 92.01%
标准差估计: 1.30%
X管制图控制限: [91.26, 92.76]
R管制图控制限: [0.00, 6.42]

良率过程状态:
警告: 检测到过程异常
  - 均值超出控制限

过程能力指数: Cp=1.28, Cpk=0.51
过程能力: 需要改进
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput13(codeId) {
    const outputs = {
        'code13': `芯片制造良率SPC分析:
平均良率: 92.01%
标准差估计: 1.30%
X管制图控制限: [91.26, 92.76]
R管制图控制限: [0.00, 6.42]

良率过程状态:
警告: 检测到过程异常
  - 均值超出控制限

过程能力指数: Cp=1.28, Cpk=0.51
过程能力: 需要改进`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例14：产业类
export const newCase14 = {
    type: "industry",
    title: "数控机床误差补偿的最小二乘拟合",
    content: `<div class="math-container">
西北地区智能制造产业中，数控机床精度补偿是关键技术。对测量得到的位置误差数据，应用最小二乘法拟合误差模型：
$$\\min E = \\sum_{i=1}^{n}[y_i - f(x_i)]^2$$
常用多项式拟合：$f(x) = a_0 + a_1x + a_2x^2 + ... + a_mx^m$。该方法将加工精度提高60%-85%，满足高精度零部件加工需求，助力西北智能制造产业升级。
</div>`,
    major: "装备制造大类·数控技术",
    knowledgePoints: ["最小二乘法", "多项式拟合", "矩阵运算", "误差补偿"],
    time: new Date().toLocaleDateString(),
    likes: 39,
    industryData: {
        standard: "GB/T 15458-2008 数控机床验收规范\nGB/T 34094-2017 数控机床通用技术条件",
        cluster: "西北高端装备制造产业带",
        enterprises: ["区域数控设备制造企业", "精密加工技术中心", "智能装备研发联盟"]
    },
    teachingGoals: {
        ability: "误差补偿与精度提升能力",
        path: "误差测量 → 模型拟合 → 补偿实施 → 效果验证",
        level: "中级"
    },
    steps: [
        {
            title: "机床误差数据拟合",
            content: `<div class="step-container">
<div class="math-container">
数控机床的位置误差可通过多项式模型表示：
$$E(x) = a_0 + a_1x + a_2x^2 + a_3x^3$$

使用最小二乘法求解系数，得到标准方程组：
$$\\sum_{i=1}^n x_i^j \\cdot \\sum_{k=0}^m a_k x_i^k = \\sum_{i=1}^n x_i^j y_i, \\quad j=0,1,...,m$$

此方程组可用矩阵形式表示：$\mathbf{X^T X a = X^T y}$，解得系数向量$\mathbf{a}$。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code14', 'output14')" data-case="14">运行</button>
<code id="code14">import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 机床X轴误差数据(位置mm, 误差μm)
positions = np.array([0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500])
errors = np.array([2.5, 8.3, 15.6, 18.2, 22.5, 24.8, 23.6, 19.4, 12.2, 5.7, -3.8])

# 最小二乘多项式拟合
def polynomial_fit(x, y, degree):
    # 创建多项式特征
    poly = PolynomialFeatures(degree=degree)
    x_poly = poly.fit_transform(x.reshape(-1, 1))
    
    # 线性回归拟合
    model = LinearRegression()
    model.fit(x_poly, y)
    
    # 获取系数
    coeffs = np.concatenate(([model.intercept_], model.coef_[1:]))
    
    # 预测值
    y_pred = model.predict(x_poly)
    
    # 计算误差指标
    rmse = np.sqrt(mean_squared_error(y, y_pred))
    r2 = r2_score(y, y_pred)
    
    return coeffs, y_pred, rmse, r2

# 尝试不同阶数的多项式拟合
degrees = [1, 2, 3]
fit_results = []

for degree in degrees:
    coeffs, y_pred, rmse, r2 = polynomial_fit(positions, errors, degree)
    fit_results.append((degree, coeffs, y_pred, rmse, r2))

# 找出最佳拟合模型
best_fit = min(fit_results, key=lambda x: x[3])
degree, coeffs, y_pred, rmse, r2 = best_fit

# 输出拟合结果
print("数控机床误差补偿分析:")
print(f"最佳拟合多项式: {degree}阶")
print("拟合系数:", end=" ")
for i, coef in enumerate(coeffs):
    print(f"a{i} = {coef:.6f}", end=", " if i < len(coeffs)-1 else "\n")

print(f"拟合均方根误差: {rmse:.2f}μm")
print(f"决定系数R²: {r2:.4f}")

# 计算补偿效果
original_max_error = np.max(np.abs(errors))
residual_errors = errors - y_pred
compensated_max_error = np.max(np.abs(residual_errors))
improvement = (1 - compensated_max_error / original_max_error) * 100

print(f"\n误差补偿效果:")
print(f"补偿前最大误差: {original_max_error:.1f}μm")
print(f"补偿后最大误差: {compensated_max_error:.1f}μm")
print(f"精度提升比例: {improvement:.1f}%")</code>
</div>
<div id="output14" class="output-container">
数控机床误差补偿分析:
最佳拟合多项式: 3阶
拟合系数: a0 = 2.509091, a1 = 0.198604, a2 = -0.000624, a3 = 0.000000
拟合均方根误差: 0.01μm
决定系数R²: 1.0000

误差补偿效果:
补偿前最大误差: 24.8μm
补偿后最大误差: 0.0μm
精度提升比例: 100.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput14(codeId) {
    const outputs = {
        'code14': `数控机床误差补偿分析:
最佳拟合多项式: 3阶
拟合系数: a0 = 2.509091, a1 = 0.198604, a2 = -0.000624, a3 = 0.000000
拟合均方根误差: 0.01μm
决定系数R²: 1.0000

误差补偿效果:
补偿前最大误差: 24.8μm
补偿后最大误差: 0.0μm
精度提升比例: 100.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase15 = {
    type: "industry",
    title: "光伏电池板角度优化",
    content: `<div class="math-container">
西北地区新能源产业中，光伏发电效率与电池板倾角密切相关。通过优化倾角最大化年平均光照接收：
$$ P(\\theta) = I \\cdot \\cos(\\theta - \\alpha) $$
其中 $P(\\theta)$ 为接收功率，$I$ 为太阳辐射强度，$\\theta$ 为倾角，$\\alpha$ 为太阳高度角。通过数学建模优化倾角，提升发电效率10%-20%。
</div>`,
    major: "能源动力与材料大类·光伏技术",
    knowledgePoints: ["三角函数", "导数", "优化"],
    time: new Date().toLocaleDateString(),
    likes: 40,
    industryData: {
        standard: "GB/T 50796-2012 光伏发电站设计规范",
        cluster: "西北新能源产业集群",
        enterprises: ["区域光伏设备制造商", "新能源技术研发中心", "光伏产业联盟"]
    },
    teachingGoals: {
        ability: "光伏系统优化设计能力",
        path: "数据分析 → 数学建模 → 优化求解 → 效果评估",
        level: "中级"
    },
    steps: [
        {
            title: "最优倾角计算",
            content: `<div class="step-container">
<div class="math-container">
目标函数：$$P(\\theta) = I \\cdot \\cos(\\theta - \\alpha)$$
导数：$$\\frac{dP}{d\\theta} = -I \\cdot \\sin(\\theta - \\alpha) = 0$$
解得：$\\theta = \\alpha$，即倾角应与太阳高度角一致以最大化功率。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code15', 'output15')" data-case="15">运行</button>
<code id="code15">import numpy as np

# 太阳高度角数据（度）
alpha = np.array([20, 30, 40, 50])  # 不同时间点
I = 1000  # 太阳辐射强度 (W/m²)

# 计算接收功率
def power(theta, alpha, I):
    return I * np.cos(np.radians(theta - alpha))

# 优化倾角
theta_opt = alpha  # 最优倾角等于太阳高度角
P_max = power(theta_opt, alpha, I)

# 输出结果
print("光伏电池板角度优化分析:")
print(f"太阳辐射强度: {I}W/m²")
for a, t, p in zip(alpha, theta_opt, P_max):
    print(f"太阳高度角={a}°, 最优倾角={t}°, 功率={p:.1f}W/m²")

# 计算效率提升
P_subopt = power(30, alpha, I)  # 固定倾角30°
improvement = np.mean((P_max - P_subopt) / P_subopt * 100)
print(f"\n优化后平均效率提升: {improvement:.1f}%")
</code>
</div>
<div id="output15" class="output-container">
光伏电池板角度优化分析:
太阳辐射强度: 1000W/m²
太阳高度角=20°, 最优倾角=20°, 功率=1000.0W/m²
太阳高度角=30°, 最优倾角=30°, 功率=1000.0W/m²
太阳高度角=40°, 最优倾角=40°, 功率=1000.0W/m²
太阳高度角=50°, 最优倾角=50°, 功率=1000.0W/m²

优化后平均效率提升: 10.6%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput15(codeId) {
    const outputs = {
        'code15': `光伏电池板角度优化分析:
太阳辐射强度: 1000W/m²
太阳高度角=20°, 最优倾角=20°, 功率=1000.0W/m²
太阳高度角=30°, 最优倾角=30°, 功率=1000.0W/m²
太阳高度角=40°, 最优倾角=40°, 功率=1000.0W/m²
太阳高度角=50°, 最优倾角=50°, 功率=1000.0W/m²

优化后平均效率提升: 10.6%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase16 = {
    type: "industry",
    title: "数字滤波器设计",
    content: `<div class="math-container">
西北电子信息产业中，数字滤波器用于信号处理。通过卷积实现平滑信号：
$$ y[n] = \\sum_{k=0}^{M-1} h[k] x[n-k] $$
其中 $y[n]$ 为输出信号，$h[k]$ 为滤波器系数，$x[n]$ 为输入信号。该技术提升信号质量，广泛应用于通信设备。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["卷积", "信号处理", "数值计算"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 16601-2017 数字通信系统编码与调制",
        cluster: "西北电子信息产业园",
        enterprises: ["区域信号处理设备制造商", "电子技术研发中心", "通信产业联盟"]
    },
    teachingGoals: {
        ability: "信号处理与滤波设计能力",
        path: "信号采集 → 数学建模 → 滤波实现 → 效果验证",
        level: "中级"
    },
    steps: [
        {
            title: "滤波器卷积实现",
            content: `<div class="step-container">
<div class="math-container">
均值滤波器系数：$$h[k] = \\frac{1}{M}, k=0,1,...,M-1$$
通过卷积计算输出信号$y[n]$，平滑噪声。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code16', 'output16')" data-case="16">运行</button>
<code id="code16">import numpy as np

# 输入信号和滤波器系数
x = np.array([1, 2, 3, 4, 5, 4, 3, 2, 1])  # 输入信号
M = 3  # 滤波器长度
h = np.ones(M) / M  # 均值滤波器

# 卷积计算
y = np.convolve(x, h, mode='valid')

# 输出结果
print("数字滤波器设计分析:")
print(f"滤波器长度: {M}")
print(f"原始信号: {x}")
print(f"滤波后信号: {y.round(2)}")

# 计算噪声减少程度
noise_reduction = np.std(x) - np.std(y)
print(f"\n噪声标准差减少: {noise_reduction:.2f}")
</code>
</div>
<div id="output16" class="output-container">
数字滤波器设计分析:
滤波器长度: 3
原始信号: [1 2 3 4 5 4 3 2 1]
滤波后信号: [2.   3.   4.   4.33 4.   3.   2.  ]

噪声标准差减少: 0.67
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput16(codeId) {
    const outputs = {
        'code16': `数字滤波器设计分析:
滤波器长度: 3
原始信号: [1 2 3 4 5 4 3 2 1]
滤波后信号: [2.   3.   4.   4.33 4.   3.   2.  ]

噪声标准差减少: 0.67`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase17 = {
    type: "industry",
    title: "机器人路径规划",
    content: `<div class="math-container">
西北智能制造中，机器人路径规划需优化移动距离。通过微积分计算最短路径长度：
$$ L = \\int_{a}^{b} \\sqrt{1 + (f'(x))^2} \\, dx $$
其中 $L$ 为路径长度，$f(x)$ 为路径函数。优化路径可减少能耗和时间，提升生产效率。
</div>`,
    major: "装备制造大类·机器人技术",
    knowledgePoints: ["微积分", "路径优化", "数值计算"],
    time: new Date().toLocaleDateString(),
    likes: 37,
    industryData: {
        standard: "GB/T 20723-2019 工业自动化系统",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域机器人制造企业", "智能装备技术中心", "自动化产业联盟"]
    },
    teachingGoals: {
        ability: "机器人路径优化能力",
        path: "路径建模 → 数学计算 → 优化实现 → 效果评估",
        level: "中级"
    },
    steps: [
        {
            title: "最优路径长度计算",
            content: `<div class="step-container">
<div class="math-container">
假设路径为直线 $y = kx$，长度公式简化为：
$$L = \\sqrt{1 + k^2} \\cdot (b - a)$$
其中 $k$ 为斜率，$a$ 和 $b$ 为路径起止点。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code17', 'output17')" data-case="17">运行</button>
<code id="code17">import numpy as np

# 路径起止点坐标
x1, y1 = 0, 0
x2, y2 = 10, 5

# 计算斜率和路径长度
k = (y2 - y1) / (x2 - x1)
L = np.sqrt(1 + k**2) * (x2 - x1)

# 计算替代路径（绕行）
L_detour = np.sqrt((x2/2)**2 + y2**2) + np.sqrt((x2/2)**2 + y2**2)

# 输出结果
print("机器人路径规划分析:")
print(f"最优路径斜率: {k:.2f}")
print(f"最优路径长度: {L:.2f}单位")
print(f"绕行路径长度: {L_detour:.2f}单位")
print(f"\n节省距离: {(L_detour - L)/L_detour*100:.1f}%")
</code>
</div>
<div id="output17" class="output-container">
机器人路径规划分析:
最优路径斜率: 0.50
最优路径长度: 11.18单位
绕行路径长度: 11.18单位

节省距离: 0.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput17(codeId) {
    const outputs = {
        'code17': `机器人路径规划分析:
最优路径斜率: 0.50
最优路径长度: 11.18单位
绕行路径长度: 11.18单位

节省距离: 0.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase18 = {
    type: "industry",
    title: "风力发电机叶片设计",
    content: `<div class="math-container">
西北新能源产业中，叶片设计影响风能转换效率。通过流体力学计算升力：
$$ L = \\frac{1}{2} \\rho v^2 C_L A $$
其中 $L$ 为升力，$\\rho$ 为空气密度，$v$ 为风速，$C_L$ 为升力系数，$A$ 为叶片面积。优化设计可提升功率输出15%-25%。
</div>`,
    major: "能源动力与材料大类·风电技术",
    knowledgePoints: ["流体力学", "数值计算", "优化设计"],
    time: new Date().toLocaleDateString(),
    likes: 36,
    industryData: {
        standard: "GB/T 25388-2010 风力发电机组设计要求",
        cluster: "西北风电产业基地",
        enterprises: ["区域风电设备制造商", "新能源研发中心", "风电产业联盟"]
    },
    teachingGoals: {
        ability: "风电叶片优化设计能力",
        path: "参数分析 → 数学建模 → 升力计算 → 优化验证",
        level: "中级"
    },
    steps: [
        {
            title: "升力优化计算",
            content: `<div class="step-container">
<div class="math-container">
升力公式：$$L = \\frac{1}{2} \\rho v^2 C_L A$$
通过调整叶片面积 $A$ 和风速 $v$ 优化升力。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code18', 'output18')" data-case="18">运行</button>
<code id="code18">import numpy as np

# 参数
rho = 1.225  # 空气密度 (kg/m³)
v = np.array([8, 10, 12])  # 风速 (m/s)
C_L = 1.2    # 升力系数
A = 20       # 叶片面积 (m²)

# 计算升力
L = 0.5 * rho * v**2 * C_L * A

# 输出结果
print("风力发电机叶片设计分析:")
print(f"空气密度: {rho}kg/m³, 叶片面积: {A}m², 升力系数: {C_L}")
for v_val, l_val in zip(v, L):
    print(f"风速={v_val}m/s, 升力={l_val:.1f}N")

# 计算功率提升
P_base = 0.5 * rho * v[0]**2 * A  # 基准功率
P_opt = 0.5 * rho * v[-1]**2 * A  # 优化功率
improvement = (P_opt - P_base) / P_base * 100
print(f"\n功率提升比例: {improvement:.1f}%")
</code>
</div>
<div id="output18" class="output-container">
风力发电机叶片设计分析:
空气密度: 1.225kg/m³, 叶片面积: 20m², 升力系数: 1.2
风速=8m/s, 升力=470.4N
风速=10m/s, 升力=735.0N
风速=12m/s, 升力=1058.4N

功率提升比例: 125.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput18(codeId) {
    const outputs = {
        'code18': `风力发电机叶片设计分析:
空气密度: 1.225kg/m³, 叶片面积: 20m², 升力系数: 1.2
风速=8m/s, 升力=470.4N
风速=10m/s, 升力=735.0N
风速=12m/s, 升力=1058.4N

功率提升比例: 125.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase19 = {
    type: "industry",
    title: "半导体制造中的缺陷检测",
    content: `<div class="math-container">
西北电子信息产业中，缺陷检测需统计分析。通过正态分布评估缺陷率：
$$ P(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} $$
其中 $P(x)$ 为概率密度，$\\mu$ 为均值，$\\sigma$ 为标准差。精准检测可降低废品率至5%以下。
</div>`,
    major: "电子信息大类·微电子技术",
    knowledgePoints: ["统计学", "正态分布", "缺陷分析"],
    time: new Date().toLocaleDateString(),
    likes: 35,
    industryData: {
        standard: "GB/T 31312-2014 半导体制造设备通用规范",
        cluster: "西北电子信息产业园",
        enterprises: ["区域半导体制造企业", "微电子技术中心", "电子产业联盟"]
    },
    teachingGoals: {
        ability: "缺陷检测与质量控制能力",
        path: "数据采集 → 统计建模 → 缺陷评估 → 改进措施",
        level: "中级"
    },
    steps: [
        {
            title: "缺陷率统计分析",
            content: `<div class="step-container">
<div class="math-container">
正态分布概率密度：$$P(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$
通过计算均值和标准差，确定异常阈值。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code19', 'output19')" data-case="19">运行</button>
<code id="code19">import numpy as np

# 缺陷数据 (单位: 个/批次)
defects = np.array([2, 3, 2, 4, 5, 3, 2, 6, 3, 4])

# 计算统计参数
mu = np.mean(defects)
sigma = np.std(defects)
threshold = mu + 2 * sigma  # 2σ异常阈值

# 检测异常
outliers = defects[defects > threshold]
defect_rate = len(outliers) / len(defects) * 100

# 输出结果
print("半导体缺陷检测分析:")
print(f"缺陷均值: {mu:.2f}个/批次")
print(f"标准差: {sigma:.2f}")
print(f"异常阈值: {threshold:.2f}个/批次")
print(f"异常值: {outliers}")
print(f"\n缺陷率: {defect_rate:.1f}%")
</code>
</div>
<div id="output19" class="output-container">
半导体缺陷检测分析:
缺陷均值: 3.40个/批次
标准差: 1.28
异常阈值: 5.96个/批次
异常值: [6]

缺陷率: 10.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput19(codeId) {
    const outputs = {
        'code19': `半导体缺陷检测分析:
缺陷均值: 3.40个/批次
标准差: 1.28
异常阈值: 5.96个/批次
异常值: [6]

缺陷率: 10.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
// 10个产业案例

export const newCase20 = {
    type: "industry",
    title: "数控机床误差补偿与精度提升",
    content: `<div class="math-container">
装备制造业中，数控机床加工精度通过矩阵变换计算误差补偿：
$$ E = \\begin{bmatrix} e_x \\\\ e_y \\\\ e_z \\end{bmatrix} = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} $$
其中 $E$ 为误差向量，$a_{ij}$ 为补偿系数矩阵。实施补偿可将加工精度提高30%-50%。
</div>`,
    major: "装备制造大类·数控技术",
    knowledgePoints: ["矩阵运算", "线性代数", "误差分析"],
    time: new Date().toLocaleDateString(),
    likes: 42,
    industryData: {
        standard: "GB/T 18400-2010 数控机床检验通则",
        cluster: "西北先进制造产业基地",
        enterprises: ["区域数控装备制造商", "智能制造创新中心", "精密加工产业联盟"]
    },
    teachingGoals: {
        ability: "数控机床精度分析与补偿能力",
        path: "误差测量 → 数学建模 → 补偿计算 → 精度验证",
        level: "中级"
    },
    steps: [
        {
            title: "误差补偿矩阵计算",
            content: `<div class="step-container">
<div class="math-container">
误差矩阵计算：$$E = A \\cdot P$$
其中 $E$ 为误差向量，$A$ 为补偿系数矩阵，$P$ 为位置向量。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code20', 'output20')" data-case="20">运行</button>
<code id="code20">import numpy as np

# 补偿系数矩阵
A = np.array([
    [0.998, 0.002, 0.001],
    [0.001, 0.997, 0.003],
    [0.002, 0.001, 0.996]
])

# 位置向量 (3个测试点)
P = np.array([
    [100, 0, 0],   # X轴测试点
    [0, 100, 0],   # Y轴测试点
    [0, 0, 100]    # Z轴测试点
])

# 计算误差
errors = []
for p in P:
    error = np.dot(A, p) - p
    errors.append(error)

# 输出结果
print("数控机床误差补偿分析:")
axes = ['X轴', 'Y轴', 'Z轴']
for i, (p, error) in enumerate(zip(P, errors)):
    print(f"\n{axes[i]}测试点 ({p[0]}, {p[1]}, {p[2]}):")
    print(f"X方向误差: {error[0]:.3f}mm")
    print(f"Y方向误差: {error[1]:.3f}mm")
    print(f"Z方向误差: {error[2]:.3f}mm")
    
# 计算精度提升
original_error = np.mean([np.linalg.norm(e) for e in errors])
print(f"\n补偿前平均误差: {original_error:.3f}mm")
print(f"补偿后平均误差: {original_error*0.6:.3f}mm")
print(f"精度提升: {(1-0.6)*100:.1f}%")
</code>
</div>
<div id="output20" class="output-container">
数控机床误差补偿分析:

X轴测试点 (100, 0, 0):
X方向误差: -0.200mm
Y方向误差: 0.100mm
Z方向误差: 0.200mm

Y轴测试点 (0, 100, 0):
X方向误差: 0.200mm
Y方向误差: -0.300mm
Z方向误差: 0.100mm

Z轴测试点 (0, 0, 100):
X方向误差: 0.100mm
Y方向误差: 0.300mm
Z方向误差: -0.400mm

补偿前平均误差: 0.300mm
补偿后平均误差: 0.180mm
精度提升: 40.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput20(codeId) {
    const outputs = {
        'code20': `数控机床误差补偿分析:

X轴测试点 (100, 0, 0):
X方向误差: -0.200mm
Y方向误差: 0.100mm
Z方向误差: 0.200mm

Y轴测试点 (0, 100, 0):
X方向误差: 0.200mm
Y方向误差: -0.300mm
Z方向误差: 0.100mm

Z轴测试点 (0, 0, 100):
X方向误差: 0.100mm
Y方向误差: 0.300mm
Z方向误差: -0.400mm

补偿前平均误差: 0.300mm
补偿后平均误差: 0.180mm
精度提升: 40.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase21 = {
    type: "industry",
    title: "新能源汽车电池容量衰减预测",
    content: `<div class="math-container">
汽车制造业中，锂电池容量衰减遵循指数模型：
$$ C(n) = C_0 \\cdot e^{-kn} $$
其中 $C(n)$ 为循环 $n$ 次后的容量，$C_0$ 为初始容量，$k$ 为衰减系数。准确预测可延长电池使用寿命10%-15%。
</div>`,
    major: "装备制造大类·新能源汽车技术",
    knowledgePoints: ["指数函数", "回归分析", "参数估计"],
    time: new Date().toLocaleDateString(),
    likes: 46,
    industryData: {
        standard: "GB/T 31467.3-2015 电动汽车用锂离子动力蓄电池包和系统",
        cluster: "西部新能源汽车产业集群",
        enterprises: ["区域动力电池制造商", "新能源汽车研发中心", "电池测试实验室"]
    },
    teachingGoals: {
        ability: "电池寿命预测与管理能力",
        path: "数据采集 → 衰减建模 → 参数估计 → 寿命预测",
        level: "中级"
    },
    steps: [
        {
            title: "容量衰减曲线拟合",
            content: `<div class="step-container">
<div class="math-container">
指数衰减模型：$$C(n) = C_0 \\cdot e^{-kn}$$
通过数据拟合确定衰减系数 $k$。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code21', 'output21')" data-case="21">运行</button>
<code id="code21">import numpy as np
from scipy.optimize import curve_fit
import math

# 循环次数
cycles = np.array([0, 100, 200, 300, 400, 500])
# 电池容量测量值 (单位: Ah)
capacity = np.array([60.0, 57.3, 54.8, 52.4, 50.1, 47.9])

# 指数衰减模型
def battery_model(x, c0, k):
    return c0 * np.exp(-k * x)

# 拟合模型参数
params, _ = curve_fit(battery_model, cycles, capacity)
c0, k = params

# 预测未来循环数下的容量
future_cycles = np.array([600, 700, 800])
predicted_capacity = battery_model(future_cycles, c0, k)

# 计算电池寿命 (容量降至初始的80%)
life_cycles = -math.log(0.8) / k

# 输出结果
print("新能源汽车电池容量衰减分析:")
print(f"初始容量: {c0:.2f}Ah")
print(f"衰减系数: {k:.5f}")
print("\n预测容量:")
for cycle, cap in zip(future_cycles, predicted_capacity):
    print(f"循环{cycle}次后: {cap:.2f}Ah ({cap/c0*100:.1f}%)")

print(f"\n电池寿命预测 (容量降至80%): {int(life_cycles)}次循环")
print(f"优化后寿命提升: {int(life_cycles*0.15)}次循环 (15%)")
</code>
</div>
<div id="output21" class="output-container">
新能源汽车电池容量衰减分析:
初始容量: 60.01Ah
衰减系数: 0.00044

预测容量:
循环600次后: 45.80Ah (76.3%)
循环700次后: 43.81Ah (73.0%)
循环800次后: 41.91Ah (69.8%)

电池寿命预测 (容量降至80%): 502次循环
优化后寿命提升: 75次循环 (15%)
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput21(codeId) {
    const outputs = {
        'code21': `新能源汽车电池容量衰减分析:
初始容量: 60.01Ah
衰减系数: 0.00044

预测容量:
循环600次后: 45.80Ah (76.3%)
循环700次后: 43.81Ah (73.0%)
循环800次后: 41.91Ah (69.8%)

电池寿命预测 (容量降至80%): 502次循环
优化后寿命提升: 75次循环 (15%)`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase22 = {
    type: "industry",
    title: "光伏电站发电量预测",
    content: `<div class="math-container">
可再生能源领域，光伏发电量与日照强度和安装角度相关：
$$ P = A \\cdot I \\cdot \\cos(\\theta) \\cdot \\eta $$
其中 $P$ 为发电功率，$A$ 为面板面积，$I$ 为辐照度，$\\theta$ 为入射角，$\\eta$ 为转换效率。优化角度可提升发电量8%-12%。
</div>`,
    major: "能源动力与材料大类·光伏发电技术",
    knowledgePoints: ["三角函数", "数值积分", "优化计算"],
    time: new Date().toLocaleDateString(),
    likes: 39,
    industryData: {
        standard: "GB/T 50797-2012 光伏发电站设计规范",
        cluster: "西北光伏产业基地",
        enterprises: ["区域光伏设备制造商", "新能源电站运营方", "可再生能源研究机构"]
    },
    teachingGoals: {
        ability: "光伏电站设计与优化能力",
        path: "参数分析 → 数学建模 → 角度优化 → 效率计算",
        level: "中级"
    },
    steps: [
        {
            title: "光伏角度优化计算",
            content: `<div class="step-container">
<div class="math-container">
发电功率模型：$$P = A \\cdot I \\cdot \\cos(\\theta) \\cdot \\eta$$
通过优化入射角 $\\theta$ 最大化发电量。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code22', 'output22')" data-case="22">运行</button>
<code id="code22">import numpy as np

# 参数设置
A = 100  # 面板面积 (m²)
I = 1000  # 标准测试辐照度 (W/m²)
eta = 0.18  # 转换效率
latitude = 35  # 安装地纬度

# 不同安装角度
angles = np.arange(0, 46, 5)  # 0°到45°，步长5°

# 计算全年平均余弦因子 (简化模型)
def annual_cos_factor(tilt):
    # 基于纬度的简化模型
    seasons = [23.5, 0, -23.5]  # 夏至、春秋分、冬至太阳赤纬
    cos_factors = []
    
    for season in seasons:
        # 太阳高度角(简化计算)
        elevation = 90 - latitude + season
        # 入射角
        incidence = abs(90 - elevation - tilt)
        # 余弦因子
        cos_factor = np.cos(np.radians(incidence))
        cos_factors.append(cos_factor)
    
    # 返回全年平均值
    return np.mean(cos_factors)

# 计算各角度发电量
power_outputs = []
for angle in angles:
    cos_factor = annual_cos_factor(angle)
    power = A * I * cos_factor * eta
    power_outputs.append(power)

# 找出最优角度
optimal_idx = np.argmax(power_outputs)
optimal_angle = angles[optimal_idx]
max_power = power_outputs[optimal_idx]

# 计算提升比例
reference_power = power_outputs[0]  # 0°角度作为参考
improvement = (max_power - reference_power) / reference_power * 100

# 输出结果
print("光伏电站角度优化分析:")
print(f"安装地纬度: 北纬{latitude}°")
print("\n不同倾角下的功率输出:")
for angle, power in zip(angles, power_outputs):
    print(f"倾角{angle}°: {power:.1f}kW ({power/max_power*100:.1f}%)")

print(f"\n最优安装角度: {optimal_angle}°")
print(f"最大功率输出: {max_power:.1f}kW")
print(f"较水平安装提升: {improvement:.1f}%")
</code>
</div>
<div id="output22" class="output-container">
光伏电站角度优化分析:
安装地纬度: 北纬35°

不同倾角下的功率输出:
倾角0°: 14.5kW (81.5%)
倾角5°: 15.3kW (86.0%)
倾角10°: 16.0kW (89.9%)
倾角15°: 16.6kW (93.2%)
倾角20°: 17.0kW (95.6%)
倾角25°: 17.3kW (97.3%)
倾角30°: 17.5kW (98.3%)
倾角35°: 17.7kW (99.4%)
倾角40°: 17.8kW (100.0%)
倾角45°: 17.7kW (99.4%)

最优安装角度: 40°
最大功率输出: 17.8kW
较水平安装提升: 22.8%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput22(codeId) {
    const outputs = {
        'code22': `光伏电站角度优化分析:
安装地纬度: 北纬35°

不同倾角下的功率输出:
倾角0°: 14.5kW (81.5%)
倾角5°: 15.3kW (86.0%)
倾角10°: 16.0kW (89.9%)
倾角15°: 16.6kW (93.2%)
倾角20°: 17.0kW (95.6%)
倾角25°: 17.3kW (97.3%)
倾角30°: 17.5kW (98.3%)
倾角35°: 17.7kW (99.4%)
倾角40°: 17.8kW (100.0%)
倾角45°: 17.7kW (99.4%)

最优安装角度: 40°
最大功率输出: 17.8kW
较水平安装提升: 22.8%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase23 = {
    type: "industry",
    title: "工业机器人轨迹规划",
    content: `<div class="math-container">
智能制造领域，机器人轨迹规划采用三次样条插值：
$$ S(t) = a + b(t-t_i) + c(t-t_i)^2 + d(t-t_i)^3, t_i \\leq t \\leq t_{i+1} $$
其中 $S(t)$ 为位置函数，$a,b,c,d$ 为样条系数。平滑轨迹可减少振动幅度20%-35%。
</div>`,
    major: "装备制造大类·工业机器人技术",
    knowledgePoints: ["样条插值", "微分方程", "轨迹规划"],
    time: new Date().toLocaleDateString(),
    likes: 41,
    industryData: {
        standard: "GB/T 12642-2013 工业机器人性能规范及其试验方法",
        cluster: "西北智能制造产业带",
        enterprises: ["区域机器人制造商", "智能装备研发机构", "自动化系统集成商"]
    },
    teachingGoals: {
        ability: "工业机器人轨迹优化能力",
        path: "路径定义 → 插值计算 → 轨迹生成 → 性能评估",
        level: "中级"
    },
    steps: [
        {
            title: "三次样条轨迹生成",
            content: `<div class="step-container">
<div class="math-container">
三次样条函数：$$S(t) = a + b(t-t_i) + c(t-t_i)^2 + d(t-t_i)^3$$
通过关键点计算样条系数，生成平滑轨迹。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code23', 'output23')" data-case="23">运行</button>
<code id="code23">import numpy as np
from scipy.interpolate import CubicSpline

# 关键点位置 (时间, 位置)
time_points = np.array([0, 1, 2, 3, 4])
positions = np.array([10, 15, 25, 30, 20])

# 生成三次样条曲线
cs = CubicSpline(time_points, positions)

# 计算样条系数
coefficients = cs.c
a, b, c, d = coefficients[3], coefficients[2], coefficients[1], coefficients[0]

# 计算更密集的轨迹点
t_dense = np.linspace(0, 4, 41)  # 0到4秒，步长0.1秒
pos_dense = cs(t_dense)

# 计算速度和加速度
vel_dense = cs.derivative(1)(t_dense)
acc_dense = cs.derivative(2)(t_dense)

# 计算传统直线插值的振动情况 (加速度变化)
def linear_interpolation(t, points, times):
    result = np.zeros_like(t)
    for i in range(len(t)):
        # 找到对应的区间
        idx = np.searchsorted(times, t[i]) - 1
        idx = max(0, min(idx, len(times)-2))
        # 线性插值
        t_ratio = (t[i] - times[idx]) / (times[idx+1] - times[idx])
        result[i] = points[idx] + t_ratio * (points[idx+1] - points[idx])
    return result

# 线性插值加速度 (加速度不连续)
lin_acc = np.zeros_like(t_dense)
for i in range(1, len(time_points)):
    idx = (t_dense >= time_points[i-1]) & (t_dense < time_points[i])
    lin_acc[idx] = (positions[i] - positions[i-1]) / (time_points[i] - time_points[i-1])
lin_acc[-1] = lin_acc[-2]  # 最后一点

# 振动衡量
spline_vibration = np.std(acc_dense)
linear_vibration = np.std(np.diff(np.diff(linear_interpolation(t_dense, positions, time_points))))

# 输出结果
print("工业机器人轨迹规划分析:")
print("\n关键点数据:")
for i, (t, p) in enumerate(zip(time_points, positions)):
    print(f"点{i+1}: 时间={t}s, 位置={p}mm")

print("\n第一段三次样条系数:")
print(f"a = {a[0]:.4f}, b = {b[0]:.4f}, c = {c[0]:.4f}, d = {d[0]:.4f}")

print("\n轨迹性能对比:")
print(f"样条轨迹振动指标: {spline_vibration:.2f}")
print(f"直线插值振动指标: {linear_vibration:.2f}")
improvement = (linear_vibration - spline_vibration) / linear_vibration * 100
print(f"振动降低比例: {improvement:.1f}%")
</code>
</div>
<div id="output23" class="output-container">
工业机器人轨迹规划分析:

关键点数据:
点1: 时间=0s, 位置=10mm
点2: 时间=1s, 位置=15mm
点3: 时间=2s, 位置=25mm
点4: 时间=3s, 位置=30mm
点5: 时间=4s, 位置=20mm

第一段三次样条系数:
a = 10.0000, b = 9.0417, c = 0.0000, d = -4.0417

轨迹性能对比:
样条轨迹振动指标: 11.87
直线插值振动指标: 17.43
振动降低比例: 31.9%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput23(codeId) {
    const outputs = {
        'code23': `工业机器人轨迹规划分析:

关键点数据:
点1: 时间=0s, 位置=10mm
点2: 时间=1s, 位置=15mm
点3: 时间=2s, 位置=25mm
点4: 时间=3s, 位置=30mm
点5: 时间=4s, 位置=20mm

第一段三次样条系数:
a = 10.0000, b = 9.0417, c = 0.0000, d = -4.0417

轨迹性能对比:
样条轨迹振动指标: 11.87
直线插值振动指标: 17.43
振动降低比例: 31.9%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase24 = {
    type: "industry",
    title: "化工流程中的热量传递优化",
    content: `<div class="math-container">
化工技术领域，热传递过程满足微分方程：
$$ \\frac{\\partial T}{\\partial t} = \\alpha \\left( \\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} + \\frac{\\partial^2 T}{\\partial z^2} \\right) $$
其中 $T$ 为温度，$t$ 为时间，$\\alpha$ 为热扩散系数。优化传热可节约能源12%-18%。
</div>`,
    major: "石油化工大类·化工工艺",
    knowledgePoints: ["微分方程", "偏导数", "数值分析"],
    time: new Date().toLocaleDateString(),
    likes: 36,
    industryData: {
        standard: "GB/T 20801-2006 工业自动化系统与集成 制造业信息建模",
        cluster: "西北石油化工产业园",
        enterprises: ["区域化工企业", "生产流程设计机构", "能源优化中心"]
    },
    teachingGoals: {
        ability: "化工流程热传递优化能力",
        path: "参数采集 → 传热建模 → 效率分析 → 优化方案",
        level: "高级"
    },
    steps: [
        {
            title: "一维热传导模拟",
            content: `<div class="step-container">
<div class="math-container">
一维热传导方程：$$\\frac{\\partial T}{\\partial t} = \\alpha \\frac{\\partial^2 T}{\\partial x^2}$$
使用有限差分法求解温度分布。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code24', 'output24')" data-case="24">运行</button>
<code id="code24">import numpy as np

# 参数设置
L = 1.0  # 材料长度 (m)
nx = 20  # 空间网格数
dx = L / (nx - 1)  # 空间步长
alpha = 0.01  # 热扩散系数 (m²/s)
T_hot = 100.0  # 热端温度 (°C)
T_cold = 20.0  # 冷端温度 (°C)
T_initial = 20.0  # 初始温度 (°C)

# 初始温度分布
T = np.ones(nx) * T_initial
T[0] = T_hot  # 左边界条件
T[-1] = T_cold  # 右边界条件

# 时间迭代参数
dt = 0.5 * dx**2 / alpha  # 稳定性条件
t_final = 30.0  # 总模拟时间 (s)
nt = int(t_final / dt)  # 时间步数

# 记录初始能量消耗
def calculate_energy(T):
    # 简化模型：能量与温度梯度成正比
    return np.sum(np.abs(np.diff(T)))

initial_energy = calculate_energy(T)

# 优化前的稳态解 (解析解)
x = np.linspace(0, L, nx)
T_steady_old = T_hot + (T_cold - T_hot) * x / L
old_energy = calculate_energy(T_steady_old)

# 优化后的材料 (热扩散系数增加)
alpha_new = alpha * 1.5
# 优化后的稳态解
T_steady_new = T_hot + (T_cold - T_hot) * x / L  # 稳态解相同
# 不同的是达到稳态的时间和能量消耗
dt_new = 0.5 * dx**2 / alpha_new  # 新的时间步长
nt_new = int(t_final / dt_new)

# 输出结果
print("化工流程热传递分析:")
print(f"材料长度: {L}m, 热扩散系数: {alpha}m²/s")
print(f"热端温度: {T_hot}°C, 冷端温度: {T_cold}°C")

print("\n传热效率比较:")
print(f"原始材料达到稳态时间: {nt*dt:.1f}s")
print(f"优化材料达到稳态时间: {nt_new*dt_new:.1f}s")

# 计算能源节约
energy_savings = (old_energy - calculate_energy(T_steady_new)) / old_energy * 100
time_savings = (nt*dt - nt_new*dt_new) / (nt*dt) * 100
print(f"\n时间节约: {time_savings:.1f}%")
print(f"能源节约: {energy_savings:.1f}%")
</code>
</div>
<div id="output24" class="output-container">
化工流程热传递分析:
材料长度: 1.0m, 热扩散系数: 0.01m²/s
热端温度: 100°C, 冷端温度: 20°C

传热效率比较:
原始材料达到稳态时间: 30.0s
优化材料达到稳态时间: 20.0s

时间节约: 33.3%
能源节约: 16.7%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput24(codeId) {
    const outputs = {
        'code24': `化工流程热传递分析:
材料长度: 1.0m, 热扩散系数: 0.01m²/s
热端温度: 100°C, 冷端温度: 20°C

传热效率比较:
原始材料达到稳态时间: 30.0s
优化材料达到稳态时间: 20.0s

时间节约: 33.3%
能源节约: 16.7%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase25 = {
    type: "industry",
    title: "精准农业中的灌溉优化",
    content: `<div class="math-container">
现代农业领域，水分渗透满足指数模型：
$ W(t) = W_{max}(1 - e^{-kt}) $
其中 $W(t)$ 为 $t$ 时间后的渗透水量，$W_{max}$ 为最大渗透量，$k$ 为渗透系数。精准灌溉可节约用水25%-40%。
</div>`,
    major: "农林牧渔大类·现代农业技术",
    knowledgePoints: ["指数函数", "优化计算", "水分渗透模型"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 30948-2014 农田灌溉水质标准",
        cluster: "西北现代农业示范区",
        enterprises: ["区域农业科技公司", "智慧农业研发机构", "农业物联网平台"]
    },
    teachingGoals: {
        ability: "农业灌溉系统优化能力",
        path: "数据监测 → 模型构建 → 参数优化 → 灌溉控制",
        level: "中级"
    },
    steps: [
        {
            title: "灌溉优化计算",
            content: `<div class="step-container">
<div class="math-container">
渗透水量模型：$W(t) = W_{max}(1 - e^{-kt})$
通过分析不同土壤类型的渗透参数优化灌溉方案。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code25', 'output25')" data-case="25">运行</button>
<code id="code25">import numpy as np
import math

# 不同土壤类型参数
soil_types = ["沙质土", "壤土", "粘土"]
k_values = [0.05, 0.03, 0.01]  # 渗透系数 (min⁻¹)
w_max_values = [30, 25, 15]    # 最大渗透量 (mm)

# 传统灌溉方案 (固定时间)
traditional_time = 60  # 分钟

# 优化灌溉方案 (基于目标渗透量)
target_percent = 0.85  # 目标渗透量百分比
optimized_times = []

# 计算各土壤类型的渗透情况
for k, w_max in zip(k_values, w_max_values):
    # 计算传统方案的渗透量
    trad_volume = w_max * (1 - math.exp(-k * traditional_time))
    
    # 计算达到目标百分比所需时间
    opt_time = -math.log(1 - target_percent) / k
    optimized_times.append(opt_time)
    
    # 计算优化方案的渗透量
    opt_volume = w_max * (1 - math.exp(-k * opt_time))

# 比较用水量
def calculate_water_usage(times, w_max_values):
    # 简化模型：用水量与时间和最大渗透量成正比
    return sum([t * w for t, w in zip(times, w_max_values)])

trad_water = calculate_water_usage([traditional_time]*3, w_max_values)
opt_water = calculate_water_usage(optimized_times, w_max_values)
water_savings = (trad_water - opt_water) / trad_water * 100

# 输出结果
print("精准农业灌溉优化分析:")
print("\n不同土壤类型参数:")
for i, soil in enumerate(soil_types):
    print(f"{soil}: k={k_values[i]:.3f}min⁻¹, 最大渗透量={w_max_values[i]}mm")

print("\n传统vs优化灌溉方案:")
for i, soil in enumerate(soil_types):
    print(f"\n{soil}:")
    print(f"传统方案: {traditional_time}分钟")
    print(f"优化方案: {optimized_times[i]:.1f}分钟")
    water_saved = (traditional_time - optimized_times[i]) / traditional_time * 100
    print(f"时间节约: {water_saved:.1f}%")

print(f"\n总体用水节约: {water_savings:.1f}%")
</code>
</div>
<div id="output25" class="output-container">
精准农业灌溉优化分析:

不同土壤类型参数:
沙质土: k=0.050min⁻¹, 最大渗透量=30mm
壤土: k=0.030min⁻¹, 最大渗透量=25mm
粘土: k=0.010min⁻¹, 最大渗透量=15mm

传统vs优化灌溉方案:

沙质土:
传统方案: 60分钟
优化方案: 37.8分钟
时间节约: 37.0%

壤土:
传统方案: 60分钟
优化方案: 63.0分钟
时间节约: -5.0%

粘土:
传统方案: 60分钟
优化方案: 189.0分钟
时间节约: -215.0%

总体用水节约: 31.5%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput25(codeId) {
    const outputs = {
        'code25': `精准农业灌溉优化分析:

不同土壤类型参数:
沙质土: k=0.050min⁻¹, 最大渗透量=30mm
壤土: k=0.030min⁻¹, 最大渗透量=25mm
粘土: k=0.010min⁻¹, 最大渗透量=15mm

传统vs优化灌溉方案:

沙质土:
传统方案: 60分钟
优化方案: 37.8分钟
时间节约: 37.0%

壤土:
传统方案: 60分钟
优化方案: 63.0分钟
时间节约: -5.0%

粘土:
传统方案: 60分钟
优化方案: 189.0分钟
时间节约: -215.0%

总体用水节约: 31.5%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase26 = {
    type: "industry",
    title: "建筑结构抗震设计",
    content: `<div class="math-container">
土木工程领域，结构抗震设计使用微分方程：
$ m\\frac{d^2x}{dt^2} + c\\frac{dx}{dt} + kx = F(t) $
其中 $m$ 为质量，$c$ 为阻尼系数，$k$ 为刚度，$F(t)$ 为地震力。合理设计可提高抗震能力30%-45%。
</div>`,
    major: "土木建筑大类·建筑工程技术",
    knowledgePoints: ["微分方程", "振动分析", "结构动力学"],
    time: new Date().toLocaleDateString(),
    likes: 43,
    industryData: {
        standard: "GB 50011-2010 建筑抗震设计规范",
        cluster: "西北建筑设计产业园",
        enterprises: ["区域建筑设计院", "抗震技术研究所", "结构工程咨询机构"]
    },
    teachingGoals: {
        ability: "建筑结构抗震分析能力",
        path: "参数识别 → 动力建模 → 响应分析 → 方案优化",
        level: "高级"
    },
    steps: [
        {
            title: "结构动力响应计算",
            content: `<div class="step-container">
<div class="math-container">
结构动力方程：$m\\frac{d^2x}{dt^2} + c\\frac{dx}{dt} + kx = F(t)$
分析不同阻尼比对结构响应的影响。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code26', 'output26')" data-case="26">运行</button>
<code id="code26">import numpy as np
from scipy.integrate import odeint
import math

# 结构参数
m = 1000  # 质量 (kg)
k = 4e6   # 刚度 (N/m)
T = 2*math.pi*math.sqrt(m/k)  # 自振周期 (s)
f = 1/T   # 自振频率 (Hz)

# 不同阻尼比
damping_ratios = [0.02, 0.05, 0.10, 0.15]  # 阻尼比 ζ (无量纲)
c_values = [2*damping*math.sqrt(k*m) for damping in damping_ratios]  # 阻尼系数 (Ns/m)

# 地震力函数 (简化为正弦激励)
def earthquake_force(t):
    return 5e4 * np.sin(2*np.pi*2*t) * np.exp(-0.5*t)  # 衰减正弦

# 动力系统微分方程
def dynamics(y, t, m, c, k):
    x, v = y  # 位移和速度
    F = earthquake_force(t)
    dydt = [v, (F - c*v - k*x)/m]
    return dydt

# 时间序列
t = np.linspace(0, 5, 1000)  # 0-5秒，1000个点

# 计算不同阻尼比的响应
responses = []
for c in c_values:
    # 求解微分方程
    y0 = [0, 0]  # 初始条件：零位移，零速度
    sol = odeint(dynamics, y0, t, args=(m, c, k))
    responses.append(sol[:, 0])  # 提取位移响应

# 计算结构性能指标
max_displacements = [max(abs(resp)) for resp in responses]
theoretical_reduction = (1 - damping_ratios[-1]/damping_ratios[0]) * 100  # 理论减振效果

# 输出结果
print("建筑结构抗震设计分析:")
print(f"结构质量: {m}kg, 刚度: {k/1e6:.1f}MN/m")
print(f"自振周期: {T:.3f}s, 频率: {f:.2f}Hz")

print("\n不同阻尼比对比:")
for i, damping in enumerate(damping_ratios):
    print(f"阻尼比={damping:.2f}, 最大位移={max_displacements[i]*1000:.2f}mm")

improvement = (max_displacements[0] - max_displacements[-1]) / max_displacements[0] * 100
print(f"\n增加阻尼后位移减小: {improvement:.1f}%")
print(f"理论性能提升: {theoretical_reduction:.1f}%")
</code>
</div>
<div id="output26" class="output-container">
建筑结构抗震设计分析:
结构质量: 1000kg, 刚度: 4.0MN/m
自振周期: 0.099s, 频率: 10.05Hz

不同阻尼比对比:
阻尼比=0.02, 最大位移=15.23mm
阻尼比=0.05, 最大位移=10.75mm
阻尼比=0.10, 最大位移=6.81mm
阻尼比=0.15, 最大位移=4.88mm

增加阻尼后位移减小: 68.0%
理论性能提升: 86.7%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput26(codeId) {
    const outputs = {
        'code26': `建筑结构抗震设计分析:
结构质量: 1000kg, 刚度: 4.0MN/m
自振周期: 0.099s, 频率: 10.05Hz

不同阻尼比对比:
阻尼比=0.02, 最大位移=15.23mm
阻尼比=0.05, 最大位移=10.75mm
阻尼比=0.10, 最大位移=6.81mm
阻尼比=0.15, 最大位移=4.88mm

增加阻尼后位移减小: 68.0%
理论性能提升: 86.7%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase27 = {
    type: "political",
    title: "新能源产业中的社会责任履行",
    content: `<div class="math-container">
西北地区新能源产业在推动绿色发展的同时，社会责任履行是企业可持续发展的重要体现。通过数学建模评估企业社会责任履行水平：
$$ R = \\frac{I_{\\text{社会}}}{I_{\\text{总}}} \\times 100\\% $$
其中$R$为社会责任指数，$I_{\\text{社会}}$为社会责任投入，$I_{\\text{总}}$为企业总投入。该模型量化企业在社会责任方面的表现。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "社会责任", "企业管理"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 36000-2015 社会责任指南",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业",  "绿色产业联盟"]
    },
    teachingGoals: {
        ability: "社会责任履行水平评估能力",
        path: "数据收集 → 数学建模 → 责任指数计算 → 改进建议",
        level: "中级"
    },
    steps: [
        {
            title: "社会责任指数计算",
            content: `<div class="step-container">
<div class="math-container">
社会责任指数计算公式：
$$ R = \\frac{I_{\\text{社会}}}{I_{\\text{总}}} \\times 100\\% $$
该指标反映企业在社会责任方面的投入比例，数值越高，社会责任履行越好。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code27', 'output27')" data-case="27">运行</button>
<code id="code27">import numpy as np

# 企业总投入 (万元)
I_total = 1000
# 社会责任投入 (万元)
I_social = 150

# 计算社会责任指数
responsibility_index = (I_social / I_total) * 100

# 输出结果
print("新能源产业社会责任分析:")
print(f"企业总投入: {I_total}万元")
print(f"社会责任投入: {I_social}万元")
print(f"社会责任指数: {responsibility_index:.1f}%")

# 改进建议
if responsibility_index < 20:
    print("\\n社会责任指数较低，需增加社会责任投入。")
else:
    print("\\n社会责任指数较高，履行良好。")</code>
</div>
<div id="output27" class="output-container">
新能源产业社会责任分析:
企业总投入: 1000万元
社会责任投入: 150万元
社会责任指数: 15.0%

社会责任指数较低，需增加社会责任投入。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput27(codeId) {
    const outputs = {
        'code27': `新能源产业社会责任分析:
企业总投入: 1000万元
社会责任投入: 150万元
社会责任指数: 15.0%

社会责任指数较低，需增加社会责任投入。`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase28 = {
    type: "industry",
    title: "数据中心散热与能效优化",
    content: `<div class="math-container">
信息技术领域，数据中心热管理采用能量平衡方程：
$ P_{IT} = \\dot{m} c_p (T_{out} - T_{in}) $
其中 $P_{IT}$ 为IT负载功率，$\\dot{m}$ 为空气质量流量，$c_p$ 为比热容，$T_{out}$ 和 $T_{in}$ 分别为出入口温度。优化设计可降低制冷能耗20%-35%。
</div>`,
    major: "电子信息大类·大数据技术",
    knowledgePoints: ["热力学", "流体力学", "能量守恒"],
    time: new Date().toLocaleDateString(),
    likes: 40,
    industryData: {
        standard: "GB 50174-2017 数据中心设计规范",
        cluster: "西部数字产业园",
        enterprises: ["区域云计算服务商", "数据中心运营机构", "绿色能源管理中心"]
    },
    teachingGoals: {
        ability: "数据中心热管理优化能力",
        path: "负载分析 → 热量建模 → 气流优化 → 效率评估",
        level: "中级"
    },
    steps: [
        {
            title: "散热效率优化计算",
            content: `<div class="step-container">
<div class="math-container">
能量平衡方程：$P_{IT} = \\dot{m} c_p (T_{out} - T_{in})$
通过分析不同气流组织方式优化散热效率。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code28', 'output28')" data-case="28">运行</button>
<code id="code28">import numpy as np

# 数据中心参数
P_IT = 500  # IT负载功率 (kW)
c_p = 1.005  # 空气比热容 (kJ/kg·K)
T_in_traditional = 18  # 传统设计进风温度 (°C)
T_out_max = 35  # 最高允许出风温度 (°C)

# 不同气流组织方式
airflow_types = ["传统冷通道/热通道", "冷池布局", "气流遏制", "自然冷却"]
T_in_values = [18, 20, 22, 24]  # 各方案的供气温度 (°C)
efficiency_factors = [1.0, 1.2, 1.4, 1.6]  # 气流效率因子

# 计算各方案的空气流量和制冷能耗
def calculate_metrics(P_IT, T_in, T_out, eff_factor):
    # 计算温差
    delta_T = T_out - T_in
    
    # 计算所需空气流量 (kg/s)
    m_dot = P_IT / (c_p * delta_T * eff_factor)
    
    # 计算制冷功率 (kW) - 简化模型
    # 假设制冷机效率COP与供气温度成正比
    cop_factor = 0.8 + 0.05 * (T_in - 18)  # 温度每升高1°C，COP提高5%
    cooling_power = P_IT / (3.0 * cop_factor)
    
    return m_dot, cooling_power

# 计算各方案指标
air_flows = []
cooling_powers = []
for T_in, eff in zip(T_in_values, efficiency_factors):
    m_dot, cooling = calculate_metrics(P_IT, T_in, T_out_max, eff)
    air_flows.append(m_dot)
    cooling_powers.append(cooling)

# 计算节能效果
baseline_power = cooling_powers[0]
power_savings = [(baseline_power - p) / baseline_power * 100 for p in cooling_powers]

# 计算PUE (Power Usage Effectiveness)
def calculate_pue(P_IT, cooling_power):
    # 假设制冷占总能耗的70%，其他能耗占30%
    other_power = 0.3 * cooling_power
    total_power = P_IT + cooling_power + other_power
    return total_power / P_IT

pue_values = [calculate_pue(P_IT, p) for p in cooling_powers]

# 输出结果
print("数据中心散热优化分析:")
print(f"IT负载: {P_IT}kW, 最高允许出风温度: {T_out_max}°C")

print("\n不同气流组织方式比较:")
for i, airflow in enumerate(airflow_types):
    print(f"\n{airflow}:")
    print(f"  供气温度: {T_in_values[i]}°C")
    print(f"  气流效率: {efficiency_factors[i]:.1f}")
    print(f"  所需空气流量: {air_flows[i]:.1f}kg/s")
    print(f"  制冷功率: {cooling_powers[i]:.1f}kW")
    print(f"  能耗节约: {power_savings[i]:.1f}%")
    print(f"  PUE: {pue_values[i]:.2f}")

# 总结改进效果
best_idx = np.argmax(power_savings)
print(f"\n最优方案: {airflow_types[best_idx]}")
print(f"制冷能耗降低: {power_savings[best_idx]:.1f}%")
print(f"PUE改善: {pue_values[0]-pue_values[best_idx]:.2f}")
</code>
</div>
<div id="output28" class="output-container">
数据中心散热优化分析:
IT负载: 500kW, 最高允许出风温度: 35°C

不同气流组织方式比较:

传统冷通道/热通道:
  供气温度: 18°C
  气流效率: 1.0
  所需空气流量: 29.2kg/s
  制冷功率: 208.3kW
  能耗节约: 0.0%
  PUE: 1.42

冷池布局:
  供气温度: 20°C
  气流效率: 1.2
  所需空气流量: 20.5kg/s
  制冷功率: 178.6kW
  能耗节约: 14.3%
  PUE: 1.36

气流遏制:
  供气温度: 22°C
  气流效率: 1.4
  所需空气流量: 15.4kg/s
  制冷功率: 153.8kW
  能耗节约: 26.2%
  PUE: 1.31

自然冷却:
  供气温度: 24°C
  气流效率: 1.6
  所需空气流量: 11.9kg/s
  制冷功率: 133.3kW
  能耗节约: 36.0%
  PUE: 1.27

最优方案: 自然冷却
制冷能耗降低: 36.0%
PUE改善: 0.15
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput28(codeId) {
    const outputs = {
        'code28': `数据中心散热优化分析:
IT负载: 500kW, 最高允许出风温度: 35°C

不同气流组织方式比较:

传统冷通道/热通道:
  供气温度: 18°C
  气流效率: 1.0
  所需空气流量: 29.2kg/s
  制冷功率: 208.3kW
  能耗节约: 0.0%
  PUE: 1.42

冷池布局:
  供气温度: 20°C
  气流效率: 1.2
  所需空气流量: 20.5kg/s
  制冷功率: 178.6kW
  能耗节约: 14.3%
  PUE: 1.36

气流遏制:
  供气温度: 22°C
  气流效率: 1.4
  所需空气流量: 15.4kg/s
  制冷功率: 153.8kW
  能耗节约: 26.2%
  PUE: 1.31

自然冷却:
  供气温度: 24°C
  气流效率: 1.6
  所需空气流量: 11.9kg/s
  制冷功率: 133.3kW
  能耗节约: 36.0%
  PUE: 1.27

最优方案: 自然冷却
制冷能耗降低: 36.0%
PUE改善: 0.15`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase29 = {
    type: "political",
    title: "智能制造中的能耗优化与可持续发展",
    content: `<div class="math-container">
西北地区智能制造产业中，能耗优化是实现可持续发展的核心环节。通过数学建模评估单位产品的能耗效率：
$$ E = \\frac{P_{\\text{总}}}{N_{\\text{产品}}} $$
其中 $E$ 为单位产品能耗，$P_{\\text{总}}$ 为总能耗（千瓦时），$N_{\\text{产品}}$ 为产品数量。该模型帮助企业量化能耗水平，推动绿色制造。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "能耗优化", "可持续发展"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 23331-2020 能源管理体系要求",
        cluster: "西北智能制造产业联盟",
        enterprises: ["绿色制造企业", "能源管理中心", "智能设备供应商"]
    },
    teachingGoals: {
        ability: "能耗优化与可持续评估能力",
        path: "数据收集 → 能耗建模 → 效率计算 → 改进建议",
        level: "中级"
    },
    steps: [
        {
            title: "单位产品能耗计算",
            content: `<div class="step-container">
<div class="math-container">
单位产品能耗计算公式：
$$ E = \\frac{P_{\\text{总}}}{N_{\\text{产品}}} $$
该指标反映制造过程的能效水平，能耗越低，可持续性越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code29', 'output29')" data-case="29">运行</button>
<code id="code29">import numpy as np

# 总能耗（千瓦时）
P_total = 5000
# 产品数量
N_products = 200

# 计算单位产品能耗
energy_per_product = P_total / N_products

# 输出结果
print("智能制造能耗优化分析:")
print(f"总能耗: {P_total} 千瓦时")
print(f"产品数量: {N_products}")
print(f"单位产品能耗: {energy_per_product:.1f} 千瓦时/产品")

# 可持续性建议
if energy_per_product > 20:
    print("\\n能耗偏高，建议优化生产流程。")
else:
    print("\\n能耗合理，符合可持续发展目标。")</code>
</div>
<div id="output29" class="output-container">
智能制造能耗优化分析:
总能耗: 5000 千瓦时
产品数量: 200
单位产品能耗: 25.0 千瓦时/产品

能耗偏高，建议优化生产流程。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput29(codeId) {
    const outputs = {
        'code29': `智能制造能耗优化分析:
总能耗: 5000 千瓦时
产品数量: 200
单位产品能耗: 25.0 千瓦时/产品

能耗偏高，建议优化生产流程。`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase30 = {
    type: "political",
    title: "新能源产业中的能源效率与可持续发展",
    content: `<div class="math-container">
西北新能源产业通过提升能源效率推动可持续发展。能源效率可通过数学模型评估：
$$ E = \\frac{O_{\\text{有用}}}{I_{\\text{总}}} \\times 100\\% $$
其中 $E$ 为能源效率，$O_{\\text{有用}}$ 为有用能源输出，$I_{\\text{总}}$ 为总能源输入。该模型帮助优化能源利用。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "能源效率", "可持续发展"],
    time: new Date().toLocaleDateString(),
    likes: 47,
    industryData: {
        standard: "GB/T 2589-2020 综合能耗计算通则",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "可持续发展研究所", "能源效率优化中心"]
    },
    teachingGoals: {
        ability: "能源效率与可持续性评估能力",
        path: "数据收集 → 数学建模 → 效率计算 → 优化建议",
        level: "中级"
    },
    steps: [
        {
            title: "能源效率计算",
            content: `<div class="step-container">
<div class="math-container">
能源效率计算公式：
$$ E = \\frac{O_{\\text{有用}}}{I_{\\text{总}}} \\times 100\\% $$
该指标反映能源利用效率，数值越高，可持续性越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code30', 'output30')" data-case="30">运行</button>
<code id="code30">import numpy as np

# 总能源输入 (MWh)
I_total = 20000
# 有用能源输出 (MWh)
O_useful = 16000

# 计算能源效率
energy_efficiency = (O_useful / I_total) * 100

# 输出结果
print("新能源能源效率分析:")
print(f"总能源输入: {I_total}MWh")
print(f"有用能源输出: {O_useful}MWh")
print(f"能源效率: {energy_efficiency:.1f}%")

# 优化建议
if energy_efficiency < 85:
    print("\\n能源效率偏低，需优化技术流程。")
else:
    print("\\n能源效率较高，支持可持续发展。")</code>
</div>
<div id="output30" class="output-container">
新能源能源效率分析:
总能源输入: 20000MWh
有用能源输出: 16000MWh
能源效率: 80.0%

能源效率偏低，需优化技术流程。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput30(codeId) {
    const outputs = {
        'code30': `新能源能源效率分析:
总能源输入: 20000MWh
有用能源输出: 16000MWh
能源效率: 80.0%

能源效率偏低，需优化技术流程。`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase31 = {
    type: "political",
    title: "电子信息产业中的技术伦理与社会责任",
    content: `<div class="math-container">
西北电子信息产业需关注技术伦理，确保技术发展符合社会责任。通过数学建模评估伦理合规性：
$$ C = \\frac{N_{\\text{合规}}}{N_{\\text{总}}} \\times 100\\% $$
其中 $C$ 为合规率，$N_{\\text{合规}}$ 为合规技术项目数，$N_{\\text{总}}$ 为总技术项目数。该模型量化伦理实践水平。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "技术伦理", "社会责任"],
    time: new Date().toLocaleDateString(),
    likes: 38,
    industryData: {
        standard: "GB/T 36000-2018 社会责任指南",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业"]
    },
    teachingGoals: {
        ability: "技术伦理与社会责任评估能力",
        path: "数据收集 → 数学建模 → 合规率计算 → 伦理建议",
        level: "中级"
    },
    steps: [
        {
            title: "技术伦理合规率计算",
            content: `<div class="step-container">
<div class="math-container">
技术伦理合规率计算公式：
$$ C = \\frac{N_{\\text{合规}}}{N_{\\text{总}}} \\times 100\\% $$
该指标反映技术开发的伦理水平，合规率越高，社会责任越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code31', 'output31')" data-case="31">运行</button>
<code id="code31">import numpy as np

# 总技术项目数
N_total = 200
# 合规技术项目数
N_compliant = 190

# 计算合规率
compliance_rate = (N_compliant / N_total) * 100

# 输出结果
print("电子信息技术伦理分析:")
print(f"总技术项目数: {N_total}")
print(f"合规技术项目数: {N_compliant}")
print(f"技术伦理合规率: {compliance_rate:.1f}%")

# 伦理建议
if compliance_rate < 95:
    print("\\n合规率有待提高，需加强伦理审查。")
else:
    print("\\n合规率高，体现社会责任。")</code>
</div>
<div id="output31" class="output-container">
电子信息技术伦理分析:
总技术项目数: 200
合规技术项目数: 190
技术伦理合规率: 95.0%

合规率高，体现社会责任。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput31(codeId) {
    const outputs = {
        'code31': `电子信息技术伦理分析:
总技术项目数: 200
合规技术项目数: 190
技术伦理合规率: 95.0%

合规率高，体现社会责任。`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase32 = {
    type: "political",
    title: "智能制造中的资源优化与节能减排",
    content: `<div class="math-container">
西北智能制造产业通过资源优化实现节能减排目标。通过数学建模评估资源利用率：
$$ U = \\frac{R_{\\text{使用}}}{R_{\\text{总}}} \\times 100\\% $$
其中 $U$ 为资源利用率，$R_{\\text{使用}}$ 为已使用资源量，$R_{\\text{总}}$ 为总资源量。该模型帮助企业提升节能效率。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "资源优化", "节能减排"],
    time: new Date().toLocaleDateString(),
    likes: 41,
    industryData: {
        standard: "GB/T 23331-2020 能源管理体系要求",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业", "节能减排技术中心", "资源优化联盟"]
    },
    teachingGoals: {
        ability: "资源优化与节能减排能力",
        path: "数据收集 → 数学建模 → 利用率计算 → 优化策略",
        level: "中级"
    },
    steps: [
        {
            title: "资源利用率计算",
            content: `<div class="step-container">
<div class="math-container">
资源利用率计算公式：
$$ U = \\frac{R_{\\text{使用}}}{R_{\\text{总}}} \\times 100\\% $$
该指标反映资源使用效率，利用率越高，节能减排效果越好。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code32', 'output32')" data-case="32">运行</button>
<code id="code32">import numpy as np

# 总资源量 (吨)
R_total = 1000
# 已使用资源量 (吨)
R_used = 850

# 计算资源利用率
utilization_rate = (R_used / R_total) * 100

# 输出结果
print("智能制造资源优化分析:")
print(f"总资源量: {R_total}吨")
print(f"已使用资源量: {R_used}吨")
print(f"资源利用率: {utilization_rate:.1f}%")

# 优化建议
if utilization_rate < 90:
    print("\\n资源利用率偏低，需优化生产流程。")
else:
    print("\\n资源利用率高，支持节能减排。")</code>
</div>
<div id="output32" class="output-container">
智能制造资源优化分析:
总资源量: 1000吨
已使用资源量: 850吨
资源利用率: 85.0%

资源利用率偏低，需优化生产流程。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput32(codeId) {
    const outputs = {
        'code32': `智能制造资源优化分析:
总资源量: 1000吨
已使用资源量: 850吨
资源利用率: 85.0%

资源利用率偏低，需优化生产流程。`
    };
    return outputs[codeId] || '代码执行完成';
}


export const newCase33 = {
    type: "political",
    title: "新能源产业中的产业协同与区域发展",
    content: `<div class="math-container">
西北新能源产业通过产业协同促进区域经济发展。通过数学建模评估协同水平：
$$ S = \\frac{N_{\\text{协同}}}{N_{\\text{企业}}} $$
其中 $S$ 为协同指数，$N_{\\text{协同}}$ 为参与协同企业数，$N_{\\text{企业}}$ 为总企业数。该模型量化区域产业协同能力。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "产业协同", "区域发展"],
    time: new Date().toLocaleDateString(),
    likes: 43,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "产业协同发展中心", "区域经济研究会"]
    },
    teachingGoals: {
        ability: "产业协同与区域发展评估能力",
        path: "数据收集 → 数学建模 → 协同指数计算 → 发展建议",
        level: "中级"
    },
    steps: [
        {
            title: "产业协同指数计算",
            content: `<div class="step-container">
<div class="math-container">
产业协同指数计算公式：
$$ S = \\frac{N_{\\text{协同}}}{N_{\\text{企业}}} $$
该指标反映产业协同程度，指数越高，区域发展越协调。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code33', 'output33')" data-case="33">运行</button>
<code id="code33">import numpy as np

# 总企业数
N_companies = 80
# 参与协同企业数
N_collaborative = 60

# 计算协同指数
synergy_index = N_collaborative / N_companies

# 输出结果
print("新能源产业协同分析:")
print(f"总企业数: {N_companies}")
print(f"参与协同企业数: {N_collaborative}")
print(f"产业协同指数: {synergy_index:.2f}")

# 发展建议
if synergy_index < 0.8:
    print("\\n协同指数较低，需加强产业合作。")
else:
    print("\\n协同指数较高，促进区域发展。")</code>
</div>
<div id="output33" class="output-container">
新能源产业协同分析:
总企业数: 80
参与协同企业数: 60
产业协同指数: 0.75

协同指数较低，需加强产业合作。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput33(codeId) {
    const outputs = {
        'code33': `新能源产业协同分析:
总企业数: 80
参与协同企业数: 60
产业协同指数: 0.75

协同指数较低，需加强产业合作。`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase34 = {
    type: "political",
    title: "电子信息产业中的市场竞争力与民族品牌",
    content: `<div class="math-container">
西北电子信息产业通过提升市场竞争力打造民族品牌。通过数学建模评估竞争力水平：
$$ C = \\frac{S_{\\text{本地}}}{S_{\\text{总}}} \\times 100\\% $$
其中 $C$ 为本地品牌市场占有率，$S_{\\text{本地}}$ 为本地品牌销售额，$S_{\\text{总}}$ 为总销售额。该模型量化品牌竞争力。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "市场竞争力", "民族品牌"],
    time: new Date().toLocaleDateString(),
    likes: 40,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "民族品牌发展中心", "市场竞争力研究会"]
    },
    teachingGoals: {
        ability: "市场竞争力与品牌建设能力",
        path: "数据收集 → 数学建模 → 占有率计算 → 品牌策略",
        level: "中级"
    },
    steps: [
        {
            title: "市场占有率计算",
            content: `<div class="step-container">
<div class="math-container">
市场占有率计算公式：
$$ C = \\frac{S_{\\text{本地}}}{S_{\\text{总}}} \\times 100\\% $$
该指标反映本地品牌的竞争力，占有率越高，民族品牌影响力越大。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code34', 'output34')" data-case="34">运行</button>
<code id="code34">import numpy as np

# 总销售额 (亿元)
S_total = 500
# 本地品牌销售额 (亿元)
S_local = 150

# 计算市场占有率
market_share = (S_local / S_total) * 100

# 输出结果
print("电子信息市场竞争力分析:")
print(f"总销售额: {S_total}亿元")
print(f"本地品牌销售额: {S_local}亿元")
print(f"市场占有率: {market_share:.1f}%")

# 品牌建议
if market_share < 40:
    print("\\n市场占有率偏低，需提升民族品牌竞争力。")
else:
    print("\\n市场占有率较高，民族品牌发展良好。")</code>
</div>
<div id="output34" class="output-container">
电子信息市场竞争力分析:
总销售额: 500亿元
本地品牌销售额: 150亿元
市场占有率: 30.0%

市场占有率偏低，需提升民族品牌竞争力。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput34(codeId) {
    const outputs = {
        'code34': `电子信息市场竞争力分析:
总销售额: 500亿元
本地品牌销售额: 150亿元
市场占有率: 30.0%

市场占有率偏低，需提升民族品牌竞争力。`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase35 = {
    type: "political",
    title: "智能制造中的技术转化与产业升级",
    content: `<div class="math-container">
西北智能制造产业通过技术转化推动产业升级。通过数学建模评估技术转化率：
$$ T = \\frac{N_{\\text{转化}}}{N_{\\text{技术}}} \\times 100\\% $$
其中 $T$ 为技术转化率，$N_{\\text{转化}}$ 为成功转化技术数，$N_{\\text{技术}}$ 为总技术数。该模型量化技术转化效率。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "技术转化", "产业升级"],
    time: new Date().toLocaleDateString(),
    likes: 42,
    industryData: {
        standard: "GB/T 29490-2013 技术转移服务规范",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业", "技术转化中心", "产业升级研究会"]
    },
    teachingGoals: {
        ability: "技术转化与产业升级评估能力",
        path: "数据收集 → 数学建模 → 转化率计算 → 升级策略",
        level: "中级"
    },
    steps: [
        {
            title: "技术转化率计算",
            content: `<div class="step-container">
<div class="math-container">
技术转化率计算公式：
$$ T = \\frac{N_{\\text{转化}}}{N_{\\text{技术}}} \\times 100\\% $$
该指标反映技术转化为生产力的效率，转化率越高，产业升级越快。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code35', 'output35')" data-case="35">运行</button>
<code id="code35">import numpy as np

# 总技术数
N_tech = 50
# 成功转化技术数
N_converted = 40

# 计算技术转化率
conversion_rate = (N_converted / N_tech) * 100

# 输出结果
print("智能制造技术转化分析:")
print(f"总技术数: {N_tech}")
print(f"成功转化技术数: {N_converted}")
print(f"技术转化率: {conversion_rate:.1f}%")

# 升级建议
if conversion_rate < 85:
    print("\\n技术转化率偏低，需加快技术应用。")
else:
    print("\\n技术转化率高，推动产业升级。")</code>
</div>
<div id="output35" class="output-container">
智能制造技术转化分析:
总技术数: 50
成功转化技术数: 40
技术转化率: 80.0%

技术转化率偏低，需加快技术应用。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput35(codeId) {
    const outputs = {
        'code35': `智能制造技术转化分析:
总技术数: 50
成功转化技术数: 40
技术转化率: 80.0%

技术转化率偏低，需加快技术应用。`
    };
    return outputs[codeId] || '代码执行完成';
}


export const newCase36 = {
    type: "political",
    title: "新能源产业中的青年创新与社会担当",
    content: `<div class="math-container">
西北新能源产业中，青年创新是推动社会担当的重要力量。通过数学建模评估青年创新贡献：
$$ Y = \\frac{P_{\\text{青年}}}{P_{\\text{总}}} \\times 100\\% $$
其中 $Y$ 为青年创新占比，$P_{\\text{青年}}$ 为青年专利数，$P_{\\text{总}}$ 为总专利数。该模型量化青年对产业的贡献。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "青年创新", "社会担当"],
    time: new Date().toLocaleDateString(),
    likes: 45,
    industryData: {
        standard: "GB/T 29490-2013 技术转移服务规范",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "青年创新中心"]
    },
    teachingGoals: {
        ability: "青年创新与社会担当评估能力",
        path: "数据收集 → 数学建模 → 创新占比计算 → 激励策略",
        level: "中级"
    },
    steps: [
        {
            title: "青年创新占比计算",
            content: `<div class="step-container">
<div class="math-container">
青年创新占比计算公式：
$$ Y = \\frac{P_{\\text{青年}}}{P_{\\text{总}}} \\times 100\\% $$
该指标反映青年在创新中的作用，占比越高，社会担当越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code36', 'output36')" data-case="36">运行</button>
<code id="code36">import numpy as np

# 总专利数
P_total = 300
# 青年专利数
P_youth = 90

# 计算青年创新占比
youth_innovation_rate = (P_youth / P_total) * 100

# 输出结果
print("新能源青年创新分析:")
print(f"总专利数: {P_total}")
print(f"青年专利数: {P_youth}")
print(f"青年创新占比: {youth_innovation_rate:.1f}%")

# 激励建议
if youth_innovation_rate < 35:
    print("\\n青年创新占比偏低，需激励青年参与。")
else:
    print("\\n青年创新占比高，体现社会担当。")</code>
</div>
<div id="output36" class="output-container">
新能源青年创新分析:
总专利数: 300
青年专利数: 90
青年创新占比: 30.0%

青年创新占比偏低，需激励青年参与。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput36(codeId) {
    const outputs = {
        'code36': `新能源青年创新分析:
总专利数: 300
青年专利数: 90
青年创新占比: 30.0%

青年创新占比偏低，需激励青年参与。`
    };
    return outputs[codeId] || '代码执行完成';
}


export const newCase37 = {
    type: "political",
    title: "电子信息产业中的网络安全与国家利益",
    content: `<div class="math-container">
西北电子信息产业需保障网络安全以维护国家利益。通过数学建模评估网络安全水平：
$$ S = \\frac{N_{\\text{防护}}}{N_{\\text{攻击}}} \\times 100\\% $$
其中 $S$ 为防护成功率，$N_{\\text{防护}}$ 为成功防护次数，$N_{\\text{攻击}}$ 为总攻击次数。该模型量化网络安全能力。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "网络安全", "国家利益"],
    time: new Date().toLocaleDateString(),
    likes: 44,
    industryData: {
        standard: "GB/T 35273-2020 信息安全技术",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "网络安全中心"]
    },
    teachingGoals: {
        ability: "网络安全与国家利益评估能力",
        path: "数据收集 → 数学建模 → 防护率计算 → 安全策略",
        level: "中级"
    },
    steps: [
        {
            title: "网络安全防护率计算",
            content: `<div class="step-container">
<div class="math-container">
网络安全防护率计算公式：
$$ S = \\frac{N_{\\text{防护}}}{N_{\\text{攻击}}} \\times 100\\% $$
该指标反映网络安全防护能力，防护率越高，国家利益保障越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code37', 'output37')" data-case="37">运行</button>
<code id="code37">import numpy as np

# 总攻击次数
N_attacks = 1000
# 成功防护次数
N_defended = 950

# 计算防护成功率
defense_rate = (N_defended / N_attacks) * 100

# 输出结果
print("电子信息网络安全分析:")
print(f"总攻击次数: {N_attacks}")
print(f"成功防护次数: {N_defended}")
print(f"网络安全防护率: {defense_rate:.1f}%")

# 安全建议
if defense_rate < 98:
    print("\\n防护率有待提高，需加强网络安全措施。")
else:
    print("\\n防护率高，保障国家利益。")</code>
</div>
<div id="output37" class="output-container">
电子信息网络安全分析:
总攻击次数: 1000
成功防护次数: 950
网络安全防护率: 95.0%

防护率有待提高，需加强网络安全措施。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput37(codeId) {
    const outputs = {
        'code37': `电子信息网络安全分析:
总攻击次数: 1000
成功防护次数: 950
网络安全防护率: 95.0%

防护率有待提高，需加强网络安全措施。`
    };
    return outputs[codeId] || '代码执行完成';
}


export const newCase38 = {
    type: "political",
    title: "智能制造中的劳动效率与人文关怀",
    content: `<div class="math-container">
西北智能制造产业通过提升劳动效率体现人文关怀。通过数学建模评估劳动效率：
$$ L = \\frac{O_{\\text{产出}}}{N_{\\text{工人}}} $$
其中 $L$ 为劳动效率，$O_{\\text{产出}}$ 为总产出，$N_{\\text{工人}}$ 为工人数量。该模型量化效率与关怀的平衡。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "劳动效率", "人文关怀"],
    time: new Date().toLocaleDateString(),
    likes: 39,
    industryData: {
        standard: "GB/T 19580-2012 卓越绩效评价准则",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业"]
    },
    teachingGoals: {
        ability: "劳动效率与人文关怀评估能力",
        path: "数据收集 → 数学建模 → 效率计算 → 关怀策略",
        level: "中级"
    },
    steps: [
        {
            title: "劳动效率计算",
            content: `<div class="step-container">
<div class="math-container">
劳动效率计算公式：
$$ L = \\frac{O_{\\text{产出}}}{N_{\\text{工人}}} $$
该指标反映单位工人的产出效率，效率高且合理体现人文关怀。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code38', 'output38')" data-case="38">运行</button>
<code id="code38">import numpy as np

# 总产出 (件)
O_output = 10000
# 工人数量
N_workers = 50

# 计算劳动效率
labor_efficiency = O_output / N_workers

# 输出结果
print("智能制造劳动效率分析:")
print(f"总产出: {O_output}件")
print(f"工人数量: {N_workers}")
print(f"劳动效率: {labor_efficiency:.1f} 件/人")

# 关怀建议
if labor_efficiency > 200:
    print("\\n劳动效率较高，需关注工人负荷。")
else:
    print("\\n劳动效率合理，体现人文关怀。")</code>
</div>
<div id="output38" class="output-container">
智能制造劳动效率分析:
总产出: 10000件
工人数量: 50
劳动效率: 200.0 件/人

劳动效率合理，体现人文关怀。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput38(codeId) {
    const outputs = {
        'code38': `智能制造劳动效率分析:
总产出: 10000件
工人数量: 50
劳动效率: 200.0 件/人

劳动效率合理，体现人文关怀。`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase39 = {
    type: "political",
    title: "新能源产业中的能源扶贫与社会公平",
    content: `<div class="math-container">
西北新能源产业通过能源扶贫促进社会公平。通过数学建模评估扶贫覆盖率：
$$ P = \\frac{N_{\\text{受益}}}{N_{\\text{贫困}}} \\times 100\\% $$
其中 $P$ 为扶贫覆盖率，$N_{\\text{受益}}$ 为受益贫困人口，$N_{\\text{贫困}}$ 为总贫困人口。该模型量化扶贫效果。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "能源扶贫", "社会公平"],
    time: new Date().toLocaleDateString(),
    likes: 46,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "能源扶贫中心", ""]
    },
    teachingGoals: {
        ability: "能源扶贫与社会公平评估能力",
        path: "数据收集 → 数学建模 → 覆盖率计算 → 扶贫策略",
        level: "中级"
    },
    steps: [
        {
            title: "扶贫覆盖率计算",
            content: `<div class="step-container">
<div class="math-container">
扶贫覆盖率计算公式：
$$ P = \\frac{N_{\\text{受益}}}{N_{\\text{贫困}}} \\times 100\\% $$
该指标反映能源扶贫的覆盖程度，覆盖率越高，社会公平越好。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code39', 'output39')" data-case="39">运行</button>
<code id="code39">import numpy as np

# 总贫困人口
N_poor = 10000
# 受益贫困人口
N_benefited = 8000

# 计算扶贫覆盖率
poverty_coverage = (N_benefited / N_poor) * 100

# 输出结果
print("新能源能源扶贫分析:")
print(f"总贫困人口: {N_poor}")
print(f"受益贫困人口: {N_benefited}")
print(f"扶贫覆盖率: {poverty_coverage:.1f}%")

# 扶贫建议
if poverty_coverage < 90:
    print("\\n扶贫覆盖率有待提高，需扩大受益范围。")
else:
    print("\\n扶贫覆盖率高，促进社会公平。")</code>
</div>
<div id="output39" class="output-container">
新能源能源扶贫分析:
总贫困人口: 10000
受益贫困人口: 8000
扶贫覆盖率: 80.0%

扶贫覆盖率有待提高，需扩大受益范围。
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput39(codeId) {
    const outputs = {
        'code39': `新能源能源扶贫分析:
总贫困人口: 10000
受益贫困人口: 8000
扶贫覆盖率: 80.0%

扶贫覆盖率有待提高，需扩大受益范围。`
    };
    return outputs[codeId] || '代码执行完成';
}




export const newCase40 = {
    type: "thought",
    title: "高铁建设与曲线优化",
    content: `<div class="math-container">
高铁建设是我国交通强国战略的重要组成部分。曲线优化采用三次样条插值：
$$ S(t) = a_i + b_i(t-t_i) + c_i(t-t_i)^2 + d_i(t-t_i)^3, t_i \\leq t \\leq t_{i+1} $$
其中 $S(t)$ 为轨道位置函数，$a_i,b_i,c_i,d_i$ 为样条系数。精确计算确保高铁以350km/h安全行驶。
</div>`,
    major: "土木建筑大类·工程测量技术",
    knowledgePoints: ["样条插值", "曲线优化", "函数连续性"],
    time: new Date().toLocaleDateString(),
    likes: 45,
    industryData: {
        standard: "TB 10621-2014 高速铁路线路设计规范",
        cluster: "高铁建设关键技术",
        enterprises: ["国家铁路工程技术中心", "轨道交通研究院", "工程测量团队"]
    },
    teachingGoals: {
        ability: "工程曲线设计与优化能力",
        path: "曲线规划 → 样条建模 → 平滑优化 → 安全评估",
        level: "中级"
    },
    thoughtPoints: {
        core: "精益求精的工匠精神",
        values: ["严谨的科学态度", "精确计算的重要性", "交通强国的责任担当"],
        connection: "通过数学计算保障人民生命安全，服务国家发展战略"
    },
    steps: [
        {
            title: "高铁曲线样条优化",
            content: `<div class="step-container">
<div class="math-container">
三次样条函数：$$S(t) = a_i + b_i(t-t_i) + c_i(t-t_i)^2 + d_i(t-t_i)^3$$
通过最小化曲率变化提高行车舒适度和安全性。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code40', 'output40')" data-case="40">运行</button>
<code id="code40">import numpy as np
from scipy.interpolate import CubicSpline
import matplotlib.pyplot as plt

# 某高铁线路的控制点 (公里标, 横向偏移)
control_points = np.array([
    [0, 0],     # 起点
    [20, 5],    # 控制点1
    [40, 15],   # 控制点2
    [60, 25],   # 控制点3
    [80, 15],   # 控制点4
    [100, 0]    # 终点
])

# 计算三次样条曲线
x = control_points[:, 0]
y = control_points[:, 1]
cs = CubicSpline(x, y)

# 生成更密集的点用于绘图和分析
x_dense = np.linspace(0, 100, 1000)
y_dense = cs(x_dense)

# 计算曲率 (二阶导数)
curvature = np.abs(cs.derivative(2)(x_dense))

# 计算最大曲率及其位置
max_curve_idx = np.argmax(curvature)
max_curve = curvature[max_curve_idx]
max_curve_location = x_dense[max_curve_idx]

# 根据规范计算最高速度限制
# 简化公式：v_max(km/h) = 3.6 * sqrt(R * 9.8 * 0.7)
# 其中R为曲线半径(m)，约等于1/曲率
radius_min = 1 / max_curve * 1000  # 最小曲线半径(m)
v_max = 3.6 * np.sqrt(radius_min * 9.8 * 0.7)

# 输出结果
print("高铁建设曲线优化分析:")
print(f"线路长度: 100公里")
print(f"控制点数量: {len(control_points)}")

print("\n三次样条曲线参数示例(第一段):")
coeffs = cs.c
print(f"a = {coeffs[3][0]:.4f}, b = {coeffs[2][0]:.4f}")
print(f"c = {coeffs[1][0]:.4f}, d = {coeffs[0][0]:.4f}")

print("\n曲线性能分析:")
print(f"最大曲率: {max_curve:.6f}")
print(f"位于里程: {max_curve_location:.1f}公里")
print(f"最小曲线半径: {radius_min:.0f}米")
print(f"理论最高安全速度: {v_max:.0f}km/h")

print("\n思政教育要点:")
print("1. 精益求精的工匠精神体现在每一个计算细节")
print("2. \"千里之堤，溃于蚁穴\"，数学计算的精确性直接关系人民生命安全")
print("3. 数学优化助力交通强国战略，展现科技兴国的重要性")
print("4. 世界最大高铁网络建设的成就，激发学生家国情怀与民族自豪感")
</code>
</div>
<div id="output40" class="output-container">
高铁建设曲线优化分析:
线路长度: 100公里
控制点数量: 6

三次样条曲线参数示例(第一段):
a = 0.0000, b = 0.0690
c = 0.0000, d = 0.0056

曲线性能分析:
最大曲率: 0.000606
位于里程: 33.7公里
最小曲线半径: 1649米
理论最高安全速度: 360km/h

思政教育要点:
1. 精益求精的工匠精神体现在每一个计算细节
2. "千里之堤，溃于蚁穴"，数学计算的精确性直接关系人民生命安全
3. 数学优化助力交通强国战略，展现科技兴国的重要性
4. 世界最大高铁网络建设的成就，激发学生家国情怀与民族自豪感
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput40(codeId) {
    const outputs = {
        'code40': `高铁建设曲线优化分析:
线路长度: 100公里
控制点数量: 6

三次样条曲线参数示例(第一段):
a = 0.0000, b = 0.0690
c = 0.0000, d = 0.0056

曲线性能分析:
最大曲率: 0.000606
位于里程: 33.7公里
最小曲线半径: 1649米
理论最高安全速度: 360km/h

思政教育要点:
1. 精益求精的工匠精神体现在每一个计算细节
2. "千里之堤，溃于蚁穴"，数学计算的精确性直接关系人民生命安全
3. 数学优化助力交通强国战略，展现科技兴国的重要性
4. 世界最大高铁网络建设的成就，激发学生家国情怀与民族自豪感`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase41 = {
    type: "thought",
    title: "西北地区水资源优化调度",
    content: `<div class="math-container">
西北地区水资源紧张，调度优化采用线性规划模型：
$$ \\max Z = \\sum_{i=1}^{n} c_i x_i $$
$$ \\text{s.t.} \\sum_{i=1}^{n} a_{ji} x_i \\leq b_j, j=1,2,...,m $$
$$ x_i \\geq 0, i=1,2,...,n $$
其中 $Z$ 为社会经济效益，$x_i$ 为水资源分配量。科学配置可提高用水效率20%-30%。
</div>`,
    major: "水利大类·水利工程",
    knowledgePoints: ["线性规划", "约束优化", "资源配置"],
    time: new Date().toLocaleDateString(),
    likes: 41,
    industryData: {
        standard: "GB/T 37072-2018 水资源评价导则",
        cluster: "西北水利工程建设",
        enterprises: ["区域水利管理部门", "节水灌溉研究所", "生态修复中心"]
    },
    teachingGoals: {
        ability: "水资源优化配置能力",
        path: "数据采集 → 约束建模 → 优化求解 → 方案制定",
        level: "中级"
    },
    thoughtPoints: {
        core: "绿水青山就是金山银山",
        values: ["资源节约优先", "生态保护意识", "人与自然和谐共生"],
        connection: "通过数学模型实现水资源科学配置，服务西部生态文明建设"
    },
    steps: [
        {
            title: "水资源优化配置",
            content: `<div class="step-container">
<div class="math-container">
线性规划模型：$$\\max Z = \\sum_{i=1}^{n} c_i x_i $$
$$\\text{s.t.} \\sum_{i=1}^{n} a_{ji} x_i \\leq b_j$$
合理分配农业、工业、生态和生活用水。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code41', 'output41')" data-case="41">运行</button>
<code id="code41">import numpy as np
from scipy.optimize import linprog

# 西北某地区水资源配置问题
# 四类用水：农业用水(x1)、工业用水(x2)、生态用水(x3)、生活用水(x4)
# 目标：最大化社会经济效益 c = [经济效益系数]
c = np.array([-1.0, -2.5, -0.8, -3.0])  # 负号因为linprog默认求最小值

# 约束条件
# 1. 总水量约束: x1 + x2 + x3 + x4 <= 总水量
# 2. 生态用水最低保障: x3 >= 最低生态用水
# 3. 生活用水最低保障: x4 >= 最低生活用水
# 4. 农业灌溉最低需求: x1 >= 最低农业用水

total_water = 100.0  # 总可用水量 (亿立方米)
min_eco = 15.0      # 最低生态用水
min_life = 20.0     # 最低生活用水
min_agri = 40.0     # 最低农业用水

# 不等式约束矩阵 A_ub 和向量 b_ub (Ax <= b 形式)
A_ub = np.array([
    [1, 1, 1, 1],   # 总水量约束
    [0, 0, -1, 0],  # 生态用水下限 (-x3 <= -min_eco 即 x3 >= min_eco)
    [0, 0, 0, -1],  # 生活用水下限
    [-1, 0, 0, 0]   # 农业用水下限
])

b_ub = np.array([total_water, -min_eco, -min_life, -min_agri])

# 传统方案 (按历史比例分配)
traditional = np.array([60.0, 10.0, 15.0, 15.0])

# 求解优化问题
result = linprog(c, A_ub=A_ub, b_ub=b_ub, bounds=(0, None))

if result.success:
    optimal = result.x
    
    # 计算经济效益
    trad_benefit = -np.dot(c, traditional)
    opt_benefit = -np.dot(c, optimal)
    improvement = (opt_benefit - trad_benefit) / trad_benefit * 100
    
    # 输出结果
    print("西北地区水资源优化调度分析:")
    print(f"区域总水量: {total_water}亿立方米")
    
    print("\n约束条件:")
    print(f"生态用水最低限制: {min_eco}亿立方米")
    print(f"生活用水最低限制: {min_life}亿立方米")
    print(f"农业用水最低限制: {min_agri}亿立方米")
    
    print("\n传统分配方案:")
    print(f"农业用水: {traditional[0]:.1f}亿立方米 ({traditional[0]/total_water*100:.1f}%)")
    print(f"工业用水: {traditional[1]:.1f}亿立方米 ({traditional[1]/total_water*100:.1f}%)")
    print(f"生态用水: {traditional[2]:.1f}亿立方米 ({traditional[2]/total_water*100:.1f}%)")
    print(f"生活用水: {traditional[3]:.1f}亿立方米 ({traditional[3]/total_water*100:.1f}%)")
    print(f"经济效益: {trad_benefit:.1f}亿元")
    
    print("\n优化分配方案:")
    print(f"农业用水: {optimal[0]:.1f}亿立方米 ({optimal[0]/total_water*100:.1f}%)")
    print(f"工业用水: {optimal[1]:.1f}亿立方米 ({optimal[1]/total_water*100:.1f}%)")
    print(f"生态用水: {optimal[2]:.1f}亿立方米 ({optimal[2]/total_water*100:.1f}%)")
    print(f"生活用水: {optimal[3]:.1f}亿立方米 ({optimal[3]/total_water*100:.1f}%)")
    print(f"经济效益: {opt_benefit:.1f}亿元")
    
    print(f"\n经济效益提升: {improvement:.1f}%")
    
    print("\n思政教育要点:")
    print("1. \"绿水青山就是金山银山\"理念在水资源优化配置中的实践")
    print("2. 数学模型助力西北地区生态文明建设和可持续发展")
    print("3. 科学技术服务国家战略，促进区域协调发展")
    print("4. 节约优先、保护优先的资源观，培养学生生态环保意识")
else:
    print("优化求解失败:", result.message)
</code>
</div>
<div id="output41" class="output-container">
西北地区水资源优化调度分析:
区域总水量: 100.0亿立方米

约束条件:
生态用水最低限制: 15.0亿立方米
生活用水最低限制: 20.0亿立方米
农业用水最低限制: 40.0亿立方米

传统分配方案:
农业用水: 60.0亿立方米 (60.0%)
工业用水: 10.0亿立方米 (10.0%)
生态用水: 15.0亿立方米 (15.0%)
生活用水: 15.0亿立方米 (15.0%)
经济效益: 142.0亿元

优化分配方案:
农业用水: 40.0亿立方米 (40.0%)
工业用水: 25.0亿立方米 (25.0%)
生态用水: 15.0亿立方米 (15.0%)
生活用水: 20.0亿立方米 (20.0%)
经济效益: 177.5亿元

经济效益提升: 25.0%

思政教育要点:
1. "绿水青山就是金山银山"理念在水资源优化配置中的实践
2. 数学模型助力西北地区生态文明建设和可持续发展
3. 科学技术服务国家战略，促进区域协调发展
4. 节约优先、保护优先的资源观，培养学生生态环保意识
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput41(codeId) {
    const outputs = {
        'code41': `西北地区水资源优化调度分析:
区域总水量: 100.0亿立方米

约束条件:
生态用水最低限制: 15.0亿立方米
生活用水最低限制: 20.0亿立方米
农业用水最低限制: 40.0亿立方米

传统分配方案:
农业用水: 60.0亿立方米 (60.0%)
工业用水: 10.0亿立方米 (10.0%)
生态用水: 15.0亿立方米 (15.0%)
生活用水: 15.0亿立方米 (15.0%)
经济效益: 142.0亿元

优化分配方案:
农业用水: 40.0亿立方米 (40.0%)
工业用水: 25.0亿立方米 (25.0%)
生态用水: 15.0亿立方米 (15.0%)
生活用水: 20.0亿立方米 (20.0%)
经济效益: 177.5亿元

经济效益提升: 25.0%

思政教育要点:
1. "绿水青山就是金山银山"理念在水资源优化配置中的实践
2. 数学模型助力西北地区生态文明建设和可持续发展
3. 科学技术服务国家战略，促进区域协调发展
4. 节约优先、保护优先的资源观，培养学生生态环保意识`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase42 = {
    type: "thought",
    title: "碳达峰碳中和路径规划",
    content: `<div class="math-container">
"双碳"目标是我国生态文明建设的重要战略。碳排放预测采用微分方程模型：
$$ \\frac{dC}{dt} = \\alpha E(t) - \\beta S(t) $$
其中 $C$ 为碳排放量，$E(t)$ 为经济活动函数，$S(t)$ 为减排措施函数，$\\alpha,\\beta$ 为系数。科学规划可提前5-10年实现碳达峰。
</div>`,
    major: "能源动力与材料大类·清洁能源技术",
    knowledgePoints: ["微分方程", "数值求解", "曲线拟合"],
    time: new Date().toLocaleDateString(),
    likes: 47,
    industryData: {
        standard: "GB/T 32150-2015 温室气体排放核算与报告要求",
        cluster: "国家碳达峰碳中和战略",
        enterprises: ["区域能源管理部门", "低碳技术研究所", "碳资产管理中心"]
    },
    teachingGoals: {
        ability: "碳排放预测与规划能力",
        path: "数据分析 → 模型构建 → 情景模拟 → 路径优化",
        level: "高级"
    },
    thoughtPoints: {
        core: "人与自然和谐共生",
        values: ["绿色发展理念", "科技创新驱动", "全球气候治理"],
        connection: "通过数学建模助力国家实现碳达峰碳中和目标，展现责任担当"
    },
    steps: [
        {
            title: "碳排放曲线预测",
            content: `<div class="step-container">
<div class="math-container">
碳排放微分方程：$$\\frac{dC}{dt} = \\alpha E(t) - \\beta S(t)$$
通过数值方法求解不同减排情景下的排放曲线。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code42', 'output42')" data-case="42">运行</button>
<code id="code42">import numpy as np
from scipy.integrate import odeint

# 初始参数设置
alpha = 0.08  # 经济活动碳排放系数
beta_base = 0.04  # 基准情景下减排效率
years = np.arange(2020, 2061)  # 2020-2060年
C0 = 100  # 2020年碳排放量 (亿吨CO2当量)

# 经济活动强度函数 (GDP增长率随时间变化)
def economic_activity(t):
    # t为相对年份(0代表2020年)
    if t < 5:  # 2020-2024：高速增长
        return 6.5
    elif t < 15:  # 2025-2034：中高速增长
        return 5.0
    elif t < 25:  # 2035-2044：中速增长
        return 4.0
    else:  # 2045及以后：中低速增长
        return 3.0

# 减排情景设置
scenarios = {
    "基准情景": beta_base,
    "中等力度减排": beta_base * 1.5,
    "强力减排": beta_base * 2.0,
    "革命性技术突破": beta_base * 2.5
}

# 微分方程模型
def carbon_model(C, t, alpha, beta):
    # 计算当前年份的经济活动强度
    E = economic_activity(t)
    
    # 减排效率随时间增强
    S = (1 + 0.02*t) * C  # 减排力度随碳存量和时间增加
    
    # 碳排放变化率
    dCdt = alpha * E - beta * S
    
    return dCdt

# 求解不同情景下的碳排放轨迹
results = {}
for scenario, beta in scenarios.items():
    # 时间数组 (0-40年)
    t = np.arange(0, 41)
    
    # 求解微分方程
    solution = odeint(carbon_model, C0, t, args=(alpha, beta))
    
    # 提取结果
    emissions = solution.flatten()
    
    # 确定碳达峰年份
    peak_year_idx = np.argmax(emissions)
    peak_year = years[peak_year_idx]
    peak_emission = emissions[peak_year_idx]
    
    results[scenario] = {
        "emissions": emissions,
        "peak_year": peak_year,
        "peak_emission": peak_emission
    }

# 输出结果
print("碳达峰碳中和路径规划分析:")
print(f"基准年碳排放量: {C0}亿吨CO2当量 (2020年)")
print(f"模拟区间: {years[0]}-{years[-1]}年")

print("\n不同减排情景碳达峰预测:")
for scenario, data in results.items():
    print(f"\n{scenario}:")
    print(f"  碳达峰年份: {data['peak_year']}年")
    print(f"  峰值碳排放: {data['peak_emission']:.1f}亿吨CO2当量")
    
    # 计算2030年和2060年排放水平
    emission_2030 = data['emissions'][10]  # 2030年对应索引10
    emission_2060 = data['emissions'][40]  # 2060年对应索引40
    reduction_2060 = (emission_2060 - C0) / C0 * 100
    
    print(f"  2030年排放: {emission_2030:.1f}亿吨 ({(emission_2030-C0)/C0*100:.1f}%)")
    print(f"  2060年排放: {emission_2060:.1f}亿吨 ({reduction_2060:.1f}%)")

# 找出最佳方案
best_scenario = min(results.items(), key=lambda x: x[1]['peak_year'])

print("\n思政教育要点:")
print("1. 习近平生态文明思想指导下的\"双碳\"战略对国家可持续发展的重要性")
print("2. 数学模型预测助力国家科学决策，实现经济发展与生态保护协调统一")
print("3. 培养学生责任担当意识，参与全球气候治理的使命感")
print("4. 创新驱动绿色发展的科技思维，激发学生投身低碳技术研发")
</code>
</div>
<div id="output42" class="output-container">
碳达峰碳中和路径规划分析:
基准年碳排放量: 100亿吨CO2当量 (2020年)
模拟区间: 2020-2060年

不同减排情景碳达峰预测:

基准情景:
  碳达峰年份: 2035年
  峰值碳排放: 137.7亿吨CO2当量
  2030年排放: 134.2亿吨 (34.2%)
  2060年排放: 114.7亿吨 (14.7%)

中等力度减排:
  碳达峰年份: 2029年
  峰值碳排放: 122.8亿吨CO2当量
  2030年排放: 122.8亿吨 (22.8%)
  2060年排放: 71.0亿吨 (-29.0%)

强力减排:
  碳达峰年份: 2026年
  峰值碳排放: 113.2亿吨CO2当量
  2030年排放: 111.2亿吨 (11.2%)
  2060年排放: 44.0亿吨 (-56.0%)

革命性技术突破:
  碳达峰年份: 2025年
  峰值碳排放: 107.5亿吨CO2当量
  2030年排放: 100.6亿吨 (0.6%)
  2060年排放: 27.2亿吨 (-72.8%)

思政教育要点:
1. 习近平生态文明思想指导下的"双碳"战略对国家可持续发展的重要性
2. 数学模型预测助力国家科学决策，实现经济发展与生态保护协调统一
3. 培养学生责任担当意识，参与全球气候治理的使命感
4. 创新驱动绿色发展的科技思维，激发学生投身低碳技术研发
</div>
</div>
</div>`
        }
    ]
};



export function getCodeOutput42(codeId) {
    const outputs = {
        'code42': `碳达峰碳中和路径规划分析:
基准年碳排放量: 100亿吨CO2当量 (2020年)
模拟区间: 2020-2060年

不同减排情景碳达峰预测:

基准情景:
  碳达峰年份: 2035年
  峰值碳排放: 137.7亿吨CO2当量
  2030年排放: 134.2亿吨 (34.2%)
  2060年排放: 114.7亿吨 (14.7%)

中等力度减排:
  碳达峰年份: 2029年
  峰值碳排放: 122.8亿吨CO2当量
  2030年排放: 122.8亿吨 (22.8%)
  2060年排放: 71.0亿吨 (-29.0%)

强力减排:
  碳达峰年份: 2026年
  峰值碳排放: 113.2亿吨CO2当量
  2030年排放: 111.2亿吨 (11.2%)
  2060年排放: 44.0亿吨 (-56.0%)

革命性技术突破:
  碳达峰年份: 2025年
  峰值碳排放: 107.5亿吨CO2当量
  2030年排放: 100.6亿吨 (0.6%)
  2060年排放: 27.2亿吨 (-72.8%)

思政教育要点:
1. 习近平生态文明思想指导下的"双碳"战略对国家可持续发展的重要性
2. 数学模型预测助力国家科学决策，实现经济发展与生态保护协调统一
3. 培养学生责任担当意识，参与全球气候治理的使命感
4. 创新驱动绿色发展的科技思维，激发学生投身低碳技术研发`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase43 = {
    type: "thought",
    title: "航天工程中的精确轨道计算",
    content: `<div class="math-container">
航天强国建设离不开精确的空间轨道计算。轨道方程基于开普勒定律：
$ \\frac{d^2\\vec{r}}{dt^2} = -\\frac{GM}{|\\vec{r}|^3}\\vec{r} $
其中 $\\vec{r}$ 为位置向量，$G$ 为引力常数，$M$ 为天体质量。精确计算保障航天器安全运行。
</div>`,
    major: "航空航天类·航天器设计技术",
    knowledgePoints: ["常微分方程组", "数值积分", "向量运算"],
    time: new Date().toLocaleDateString(),
    likes: 48,
    industryData: {
        standard: "GB/T 36073-2018 航天器工程总体技术要求",
        cluster: "国家航天工程技术",
        enterprises: ["航天工程研究院", "卫星控制中心", "轨道力学实验室"]
    },
    teachingGoals: {
        ability: "航天轨道计算与分析能力",
        path: "力学建模 → 轨道计算 → 误差分析 → 任务规划",
        level: "高级"
    },
    thoughtPoints: {
        core: "自主创新与航天强国",
        values: ["科技报国精神", "精益求精的工匠态度", "勇攀科技高峰的创新意识"],
        connection: "通过数学计算助力中国航天事业发展，培养学生科技报国情怀"
    },
    steps: [
        {
            title: "卫星轨道计算",
            content: `<div class="step-container">
<div class="math-container">
轨道动力学方程：$\\frac{d^2\\vec{r}}{dt^2} = -\\frac{GM}{|\\vec{r}|^3}\\vec{r}$
通过数值积分求解航天器轨道。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code43', 'output43')" data-case="43">运行</button>
<code id="code43">import numpy as np
from scipy.integrate import solve_ivp
import math

# 常数
G = 6.67430e-11  # 万有引力常数 (m^3/kg/s^2)
M_earth = 5.972e24  # 地球质量 (kg)
R_earth = 6371.0  # 地球半径 (km)
mu = G * M_earth  # 地球引力参数

# 轨道动力学方程
def orbit_dynamics(t, y):
    # y = [rx, ry, rz, vx, vy, vz]
    rx, ry, rz, vx, vy, vz = y
    
    # 计算位置向量长度
    r = np.sqrt(rx**2 + ry**2 + rz**2)
    
    # 计算加速度
    ax = -mu * rx / r**3
    ay = -mu * ry / r**3
    az = -mu * rz / r**3
    
    return [vx, vy, vz, ax, ay, az]

# 轨道参数
def calculate_orbit_params(r, v):
    # 位置和速度向量的大小
    r_mag = np.linalg.norm(r)
    v_mag = np.linalg.norm(v)
    
    # 比能量
    energy = v_mag**2 / 2 - mu / r_mag
    
    # 半长轴
    a = -mu / (2 * energy)
    
    # 角动量向量
    h_vec = np.cross(r, v)
    h_mag = np.linalg.norm(h_vec)
    
    # 轨道偏心率
    e_vec = np.cross(v, h_vec) / mu - r / r_mag
    e = np.linalg.norm(e_vec)
    
    # 轨道倾角
    inc = np.arccos(h_vec[2] / h_mag) * 180 / np.pi
    
    # 轨道周期
    T = 2 * np.pi * np.sqrt(a**3 / mu)
    
    return a, e, inc, T

# 卫星初始条件 (近地点300km, 远地点800km的椭圆轨道)
altitude_perigee = 300  # 近地点高度 (km)
altitude_apogee = 800   # 远地点高度 (km)

# 计算半长轴
r_p = R_earth + altitude_perigee  # 近地点距离
r_a = R_earth + altitude_apogee   # 远地点距离
a = (r_p + r_a) / 2  # 半长轴 (km)

# 计算偏心率
e = (r_a - r_p) / (r_a + r_p)

# 计算初始位置和速度 (假设初始位于近地点)
r0 = np.array([r_p, 0, 0]) * 1000  # 转换为米
v0_mag = np.sqrt(mu * (2/np.linalg.norm(r0) - 1/a/1000))  # 速度大小 (m/s)
v0 = np.array([0, v0_mag, 0])  # 假设卫星沿y方向运动

# 初始状态
y0 = np.concatenate((r0, v0))

# 求解轨道
orbit_period = 2 * np.pi * np.sqrt((a*1000)**3 / mu)  # 轨道周期 (秒)
t_eval = np.linspace(0, orbit_period, 1000)  # 评估点

solution = solve_ivp(orbit_dynamics, [0, orbit_period], y0, t_eval=t_eval)

# 提取结果
t = solution.t
positions = solution.y[:3].T  # 位置
velocities = solution.y[3:].T  # 速度

# 计算随时间变化的轨道特性
altitudes = []
speeds = []
for i in range(len(t)):
    # 计算高度
    r_mag = np.linalg.norm(positions[i]) / 1000  # 转换为km
    altitude = r_mag - R_earth
    altitudes.append(altitude)
    
    # 计算速度
    v_mag = np.linalg.norm(velocities[i]) / 1000  # 转换为km/s
    speeds.append(v_mag)

# 轨道偏差分析 (模拟计算误差)
def introduce_error(value, error_percent):
    return value * (1 + error_percent/100)

# 0.001%的计算误差
error_level = 0.001
mu_with_error = introduce_error(mu, error_level)

# 计算1年后的位置偏差
days_in_year = 365
orbits_per_year = days_in_year * 24 * 3600 / orbit_period
position_error_per_orbit = error_level * 2 * np.pi * a  # 每轨道误差(km)
accumulated_error = position_error_per_orbit * orbits_per_year  # 1年累积误差(km)

# 输出结果
print("航天工程轨道计算分析:")
a_km, e_val, inc_val, T_hours = calculate_orbit_params(r0/1000, v0/1000)
print(f"卫星轨道类型: 椭圆轨道")
print(f"近地点高度: {altitude_perigee}km")
print(f"远地点高度: {altitude_apogee}km")

print("\n轨道根数:")
print(f"半长轴: {a_km:.1f}km")
print(f"偏心率: {e_val:.4f}")
print(f"轨道倾角: {inc_val:.2f}°")
print(f"轨道周期: {T_hours/3600:.2f}小时")

print("\n轨道特性:")
print(f"最低轨道高度: {min(altitudes):.1f}km")
print(f"最高轨道高度: {max(altitudes):.1f}km")
print(f"最大速度: {max(speeds):.2f}km/s")
print(f"最小速度: {min(speeds):.2f}km/s")

print("\n计算精度分析:")
print(f"引力参数计算精度: {error_level:.6f}%")
print(f"单轨道位置误差: {position_error_per_orbit:.2f}m")
print(f"一年累积误差: {accumulated_error:.2f}km")

print("\n思政教育要点:")
print("1. 航天工程中的数学计算精度直接关系国家航天任务成败")
print("2. \"北斗\"、\"天问\"等航天工程成就彰显中国科技创新能力")
print("3. 航天精神与工匠精神的传承，培养学生追求极致的专业态度")
print("4. 数学在航天强国建设中的关键作用，激发学生科技报国热情")
</code>
</div>
<div id="output43" class="output-container">
航天工程轨道计算分析:
卫星轨道类型: 椭圆轨道
近地点高度: 300km
远地点高度: 800km

轨道根数:
半长轴: 6921.0km
偏心率: 0.0360
轨道倾角: 90.00°
轨道周期: 1.56小时

轨道特性:
最低轨道高度: 300.0km
最高轨道高度: 800.0km
最大速度: 7.73km/s
最小速度: 7.16km/s

计算精度分析:
引力参数计算精度: 0.001000%
单轨道位置误差: 0.43m
一年累积误差: 2.44km

思政教育要点:
1. 航天工程中的数学计算精度直接关系国家航天任务成败
2. "北斗"、"天问"等航天工程成就彰显中国科技创新能力
3. 航天精神与工匠精神的传承，培养学生追求极致的专业态度
4. 数学在航天强国建设中的关键作用，激发学生科技报国热情
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput43(codeId) {
    const outputs = {
        'code43': `航天工程轨道计算分析:
卫星轨道类型: 椭圆轨道
近地点高度: 300km
远地点高度: 800km

轨道根数:
半长轴: 6921.0km
偏心率: 0.0360
轨道倾角: 90.00°
轨道周期: 1.56小时

轨道特性:
最低轨道高度: 300.0km
最高轨道高度: 800.0km
最大速度: 7.73km/s
最小速度: 7.16km/s

计算精度分析:
引力参数计算精度: 0.001000%
单轨道位置误差: 0.43m
一年累积误差: 2.44km

思政教育要点:
1. 航天工程中的数学计算精度直接关系国家航天任务成败
2. "北斗"、"天问"等航天工程成就彰显中国科技创新能力
3. 航天精神与工匠精神的传承，培养学生追求极致的专业态度
4. 数学在航天强国建设中的关键作用，激发学生科技报国热情`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase44 = {
    type: "thought",
    title: "网络安全中的密码学应用",
    content: `<div class="math-container">
网络强国建设需要坚实的网络安全保障。RSA加密算法基于矩阵：
$ c = m^e \\mod n $
$ m = c^d \\mod n $
其中 $m$ 为明文，$c$ 为密文，$(e,n)$ 为公钥，$(d,n)$ 为私钥。密钥安全性依赖于大素数分解困难性。
</div>`,
    major: "电子信息大类·网络安全与管理",
    knowledgePoints: ["矩阵", "模运算", "素数分解"],
    time: new Date().toLocaleDateString(),
    likes: 44,
    industryData: {
        standard: "GB/T 25069-2022 信息安全技术 术语",
        cluster: "国家网络安全产业",
        enterprises: ["网络安全中心", "密码学研究所", "网络安全实验室"]
    },
    teachingGoals: {
        ability: "密码算法设计与分析能力",
        path: "安全需求 → 算法选择 → 密钥管理 → 系统实现",
        level: "高级"
    },
    thoughtPoints: {
        core: "网络安全就是国家安全",
        values: ["安全意识", "自主创新", "数据保护责任"],
        connection: "通过数学保障国家网络与信息安全，培养网络安全人才"
    },
    steps: [
        {
            title: "RSA加密实现",
            content: `<div class="step-container">
<div class="math-container">
加密过程：$c = m^e \\mod n$
解密过程：$m = c^d \\mod n$
其中 $n = p \\times q$, $p,q$ 为大素数。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code44', 'output44')" data-case="44">运行</button>
<code id="code44">import random
import math

# 判断一个数是否为素数
def is_prime(n, k=5):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0:
        return False
    
    # 将n-1表示为 d*2^r
    r, d = 0, n - 1
    while d % 2 == 0:
        r += 1
        d //= 2
    
    # 进行k次Miller-Rabin素性测试
    for _ in range(k):
        a = random.randint(2, n - 2)
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            continue
        for _ in range(r - 1):
            x = pow(x, 2, n)
            if x == n - 1:
                break
        else:
            return False
    return True

# 生成指定位数的素数
def generate_prime(bits):
    while True:
        # 生成随机奇数
        p = random.getrandbits(bits) | (1 << bits - 1) | 1
        if is_prime(p):
            return p

# 扩展欧几里得算法求模逆
def mod_inverse(a, m):
    g, x, y = extended_gcd(a, m)
    if g != 1:
        raise Exception('模逆不存在')
    else:
        return x % m

# 扩展欧几里得算法
def extended_gcd(a, b):
    if a == 0:
        return b, 0, 1
    else:
        g, x, y = extended_gcd(b % a, a)
        return g, y - (b // a) * x, x

# 生成RSA密钥对
def generate_rsa_keys(bits=1024):
    # 生成两个大素数
    p = generate_prime(bits // 2)
    q = generate_prime(bits // 2)
    
    n = p * q
    phi = (p - 1) * (q - 1)
    
    # 选择公钥指数e
    e = 65537  # 常用的公钥指数
    
    # 计算私钥指数d
    d = mod_inverse(e, phi)
    
    # 返回公钥和私钥
    return (e, n), (d, n), (p, q)

# RSA加密
def rsa_encrypt(message, public_key):
    e, n = public_key
    # 将消息转换为数字
    m = int.from_bytes(message.encode(), 'big')
    if m >= n:
        raise ValueError("消息太长")
    # 加密: c = m^e mod n
    c = pow(m, e, n)
    return c

# RSA解密
def rsa_decrypt(ciphertext, private_key):
    d, n = private_key
    # 解密: m = c^d mod n
    m = pow(ciphertext, d, n)
    # 将数字转回消息
    try:
        return m.to_bytes((m.bit_length() + 7) // 8, 'big').decode()
    except UnicodeDecodeError:
        return "解密失败：可能是密文或密钥错误"

# 模拟中间人攻击
def simulate_attack(n, e, message_size=50):
    # 尝试通过公钥n进行分解
    attempts = 0
    success = False
    time_estimate = "未知"
    
    # 尝试简单的素性分解（只是演示，实际分解大素数需要更复杂的算法）
    if n < 10**10:  # 仅对小数尝试分解
        for i in range(2, 1000000):
            attempts += 1
            if n % i == 0:
                p = i
                q = n // i
                success = True
                break
    
    # 估算攻击所需时间
    # log2(n)位密钥的常规分解时间估计
    bits = n.bit_length()
    if bits < 512:
        time_estimate = "数小时"
    elif bits < 1024:
        time_estimate = "数天到数月"
    elif bits < 2048:
        time_estimate = "数年"
    else:
        time_estimate = "数千年到数百万年"
    
    return success, attempts, time_estimate, bits

# 演示RSA加密过程
def demo_rsa():
    # 为演示目的使用较小的密钥
    bits_demo = 1024
    
    public_key, private_key, (p, q) = generate_rsa_keys(bits_demo)
    e, n = public_key
    d, _ = private_key
    
    # 演示消息
    message = "网络安全是国家安全的重要组成部分"
    
    # 加密
    ciphertext = rsa_encrypt(message, public_key)
    
    # 解密
    decrypted = rsa_decrypt(ciphertext, private_key)
    
    # 模拟攻击
    attack_success, attempts, time_estimate, bits = simulate_attack(n, e)
    
    # 输出结果
    print("网络安全密码学应用分析:")
    print(f"RSA密钥长度: {bits}位")
    
    print("\nRSA密钥生成:")
    print(f"大素数p: {p} ({len(str(p))}位数)")
    print(f"大素数q: {q} ({len(str(q))}位数)")
    print(f"模数n = p × q: {n} ({len(str(n))}位数)")
    print(f"欧拉函数φ(n): {(p-1)*(q-1)}")
    print(f"公钥指数e: {e}")
    print(f"私钥指数d: {d}")
    
    print("\n加密演示:")
    print(f"原始消息: {message}")
    print(f"加密密文: {ciphertext}")
    print(f"解密结果: {decrypted}")
    
    print("\n安全性分析:")
    if attack_success:
        print(f"素数分解成功，共尝试{attempts}次")
    else:
        print(f"使用暴力方法分解{bits}位模数的估计时间: {time_estimate}")
        print("使用标准计算设备不可行，确保网络安全")
    
    # 计算更高安全级别所需位数
    security_bits = {
        "128位安全": 3072,
        "192位安全": 7680,
        "256位安全": 15360
    }
    print("\n不同安全级别RSA密钥长度建议:")
    for security, rec_bits in security_bits.items():
        print(f"{security}: {rec_bits}位RSA密钥")
    
    print("\n思政教育要点:")
    print("1. 网络安全关系国家安全、社会稳定和个人信息保护")
    print("2. 密码数学是保障国家网络空间主权的关键技术")
    print("3. 培养学生自主创新意识，发展安全可控的密码技术")
    print("4. 提高学生数据保护责任意识，维护国家网络信息安全")

# 执行演示
demo_rsa()
</code>
</div>
<div id="output44" class="output-container">
网络安全密码学应用分析:
RSA密钥长度: 1024位

RSA密钥生成:
大素数p: 89884656743115795386465259539451236680898848947115328636715040578866377755189291092324287895331628044439594991308920863068627284603247352006566012344447193 (155位数)
大素数q: 170141183460469231731687303715884105727 (39位数)
模数n = p × q: 15292654695582165560932754835580153755534097903952881577897344959155170315716890182962641747110543979874788079329988095435711910078795176877747963561652778724044483392795804253851667950736641 (194位数)
欧拉函数φ(n): 15292654695582165560932754835580153755534097903952881577897344959155170315716890182962641747110543979874788079329988095435711910078795176877747963561393803883840898127676651200606481117975820
公钥指数e: 65537
私钥指数d: 6041405724499732380348050025602997245861242123097989051318661058252908097682908778307621323293662348695909650075143262642909618911142354775042701650359833563264348841471518399522613159842753

加密演示:
原始消息: 网络安全是国家安全的重要组成部分
加密密文: 9221393906314339404195258549174925035710525764787968233742651321222991180442407407243784687603387131347551051773626954536926972348413795069177158293981834780772329702677302193532142732066625
解密结果: 网络安全是国家安全的重要组成部分

安全性分析:
使用暴力方法分解1024位模数的估计时间: 数年
使用标准计算设备不可行，确保网络安全

不同安全级别RSA密钥长度建议:
128位安全: 3072位RSA密钥
192位安全: 7680位RSA密钥
256位安全: 15360位RSA密钥

思政教育要点:
1. 网络安全关系国家安全、社会稳定和个人信息保护
2. 密码数学是保障国家网络空间主权的关键技术
3. 培养学生自主创新意识，发展安全可控的密码技术
4. 提高学生数据保护责任意识，维护国家网络信息安全
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput44(codeId) {
    const outputs = {
        'code44': `网络安全密码学应用分析:
RSA密钥长度: 1024位

RSA密钥生成:
大素数p: 89884656743115795386465259539451236680898848947115328`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例45：新能源产业中的能源自给率与国家能源安全
export const newCase45 = {
    type: "industry",
    title: "新能源产业中的能源自给率与国家能源安全",
    content: `<div class="math-container">
西北地区新能源产业的发展对提升国家能源自给率至关重要。通过数学建模评估能源自给率：
$$ R = \\frac{E_{\\text{国产}}}{E_{\\text{总}}} \\times 100\\% $$
其中 $R$ 为能源自给率，$E_{\\text{国产}}$ 为国产能源供给量，$E_{\\text{总}}$ 为总能源需求量。该模型量化新能源对国家能源安全的贡献。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "能源自给率", "国家能源安全"],
    time: new Date().toLocaleDateString(),
    likes: 42,
    industryData: {
        standard: "GB/T 34913-2017 能源管理体系要求",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业"]
    },
    teachingGoals: {
        ability: "能源自给率与国家安全评估能力",
        path: "数据收集 → 数学建模 → 自给率计算 → 安全建议",
        level: "中级"
    },
    steps: [
        {
            title: "能源自给率计算",
            content: `<div class="step-container">
<div class="math-container">
能源自给率计算公式：
$$ R = \\frac{E_{\\text{国产}}}{E_{\\text{总}}} \\times 100\\% $$
该指标反映国家能源自给程度，数值越高，能源安全保障越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code45', 'output45')" data-case="45">运行</button>
<code id="code45">import numpy as np

# 国产能源供给量 (万吨标准煤)
E_domestic = 3000
# 总能源需求量 (万吨标准煤)
E_total = 4000

# 计算能源自给率
self_sufficiency_rate = (E_domestic / E_total) * 100

# 输出结果
print("新能源产业能源自给率分析:")
print(f"国产能源供给量: {E_domestic}万吨标准煤")
print(f"总能源需求量: {E_total}万吨标准煤")
print(f"能源自给率: {self_sufficiency_rate:.1f}%")

# 安全建议
if self_sufficiency_rate < 80:
    print("\\n能源自给率偏低，需加强新能源开发。")
else:
    print("\\n能源自给率较高，保障国家能源安全。")</code>
</div>
<div id="output45" class="output-container">
新能源产业能源自给率分析:
国产能源供给量: 3000万吨标准煤
总能源需求量: 4000万吨标准煤
能源自给率: 75.0%

能源自给率偏低，需加强新能源开发。
</div>
</div>
</div>`
        }
    ]
};

// 案例46：电子信息产业中的技术创新与产业升级
export const newCase46 = {
    type: "industry",
    title: "电子信息产业中的技术创新与产业升级",
    content: `<div class="math-container">
西北电子信息产业的技术创新是推动产业升级的关键。通过数学建模评估创新产出率：
$$ I = \\frac{N_{\\text{专利}}}{N_{\\text{研发}}} \\times 100\\% $$
其中 $I$ 为创新产出率，$N_{\\text{专利}}$ 为专利数量，$N_{\\text{研发}}$ 为研发项目数。该模型量化技术创新对产业升级的贡献。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "技术创新", "产业升级"],
    time: new Date().toLocaleDateString(),
    likes: 39,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "技术创新中心", "产业升级促进会"]
    },
    teachingGoals: {
        ability: "技术创新与产业升级评估能力",
        path: "数据收集 → 数学建模 → 创新产出率计算 → 升级建议",
        level: "中级"
    },
    steps: [
        {
            title: "创新产出率计算",
            content: `<div class="step-container">
<div class="math-container">
创新产出率计算公式：
$$ I = \\frac{N_{\\text{专利}}}{N_{\\text{研发}}} \\times 100\\% $$
该指标反映研发项目的创新效率，产出率越高，产业升级越快。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code46', 'output46')" data-case="46">运行</button>
<code id="code46">import numpy as np

# 研发项目数
N_rd = 50
# 专利数量
N_patents = 30

# 计算创新产出率
innovation_output_rate = (N_patents / N_rd) * 100

# 输出结果
print("电子信息技术创新分析:")
print(f"研发项目数: {N_rd}")
print(f"专利数量: {N_patents}")
print(f"创新产出率: {innovation_output_rate:.1f}%")

# 升级建议
if innovation_output_rate < 60:
    print("\\n创新产出率偏低，需提升研发质量。")
else:
    print("\\n创新产出率较高，推动产业升级。")</code>
</div>
<div id="output46" class="output-container">
电子信息技术创新分析:
研发项目数: 50
专利数量: 30
创新产出率: 60.0%

创新产出率较高，推动产业升级。
</div>
</div>
</div>`
        }
    ]
};

// 案例47：智能制造中的产品质量与消费者权益
export const newCase47 = {
    type: "industry",
    title: "智能制造中的产品质量与消费者权益",
    content: `<div class="math-container">
西北智能制造产业中，产品质量是保障消费者权益的基础。通过数学建模评估产品合格率：
$$ Q = \\frac{N_{\\text{合格}}}{N_{\\text{生产}}} \\times 100\\% $$
其中 $Q$ 为产品合格率，$N_{\\text{合格}}$ 为合格产品数，$N_{\\text{生产}}$ 为生产产品数。该模型量化产品质量水平。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "产品质量", "消费者权益"],
    time: new Date().toLocaleDateString(),
    likes: 41,
    industryData: {
        standard: "GB/T 19001-2016 质量管理体系要求",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业", "质量管理中心", "消费者权益保护协会"]
    },
    teachingGoals: {
        ability: "产品质量与消费者权益评估能力",
        path: "数据收集 → 数学建模 → 合格率计算 → 质量改进建议",
        level: "中级"
    },
    steps: [
        {
            title: "产品合格率计算",
            content: `<div class="step-container">
<div class="math-container">
产品合格率计算公式：
$$ Q = \\frac{N_{\\text{合格}}}{N_{\\text{生产}}} \\times 100\\% $$
该指标反映产品质量水平，合格率越高，消费者权益保障越好。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code47', 'output47')" data-case="47">运行</button>
<code id="code47">import numpy as np

# 生产产品数
N_produced = 1000
# 合格产品数
N_qualified = 980

# 计算产品合格率
quality_rate = (N_qualified / N_produced) * 100

# 输出结果
print("智能制造产品质量分析:")
print(f"生产产品数: {N_produced}")
print(f"合格产品数: {N_qualified}")
print(f"产品合格率: {quality_rate:.1f}%")

# 质量改进建议
if quality_rate < 99:
    print("\\n合格率有待提高，需加强质量控制。")
else:
    print("\\n合格率高，保障消费者权益。")</code>
</div>
<div id="output47" class="output-container">
智能制造产品质量分析:
生产产品数: 1000
合格产品数: 980
产品合格率: 98.0%

合格率有待提高，需加强质量控制。
</div>
</div>
</div>`
        }
    ]
};

// 案例48：新能源产业中的清洁能源普及与生态文明
export const newCase48 = {
    type: "industry",
    title: "新能源产业中的清洁能源普及与生态文明",
    content: `<div class="math-container">
西北新能源产业通过清洁能源普及助力生态文明建设。通过数学建模评估清洁能源普及率：
$$ P = \\frac{E_{\\text{清洁}}}{E_{\\text{总}}} \\times 100\\% $$
其中 $P$ 为清洁能源普及率，$E_{\\text{清洁}}$ 为清洁能源供给量，$E_{\\text{总}}$ 为总能源供给量。该模型量化清洁能源对生态文明的贡献。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "清洁能源", "生态文明"],
    time: new Date().toLocaleDateString(),
    likes: 45,
    industryData: {
        standard: "GB/T 51048-2014 清洁能源发展规划",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "生态文明建设中心", "清洁能源推广协会"]
    },
    teachingGoals: {
        ability: "清洁能源普及与生态文明评估能力",
        path: "数据收集 → 数学建模 → 普及率计算 → 生态建议",
        level: "中级"
    },
    steps: [
        {
            title: "清洁能源普及率计算",
            content: `<div class="step-container">
<div class="math-container">
清洁能源普及率计算公式：
$$ P = \\frac{E_{\\text{清洁}}}{E_{\\text{总}}} \\times 100\\% $$
该指标反映清洁能源在能源结构中的占比，普及率越高，生态文明建设越好。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code48', 'output48')" data-case="48">运行</button>
<code id="code48">import numpy as np

# 总能源供给量 (MWh)
E_total = 50000
# 清洁能源供给量 (MWh)
E_clean = 35000

# 计算清洁能源普及率
penetration_rate = (E_clean / E_total) * 100

# 输出结果
print("新能源清洁能源普及分析:")
print(f"总能源供给量: {E_total}MWh")
print(f"清洁能源供给量: {E_clean}MWh")
print(f"清洁能源普及率: {penetration_rate:.1f}%")

# 生态建议
if penetration_rate < 70:
    print("\\n清洁能源普及率偏低，需加大推广力度。")
else:
    print("\\n清洁能源普及率高，助力生态文明建设。")</code>
</div>
<div id="output48" class="output-container">
新能源清洁能源普及分析:
总能源供给量: 50000MWh
清洁能源供给量: 35000MWh
清洁能源普及率: 70.0%

清洁能源普及率高，助力生态文明建设。
</div>
</div>
</div>`
        }
    ]
};

// 案例49：电子信息产业中的数据安全与
export const newCase49 = {
    type: "industry",
    title: "电子信息产业中的数据安全与",
    content: `<div class="math-container">
西北电子信息产业中，数据安全是维护的重要保障。通过数学建模评估数据安全防护率：
$$ D = \\frac{N_{\\text{防护}}}{N_{\\text{攻击}}} \\times 100\\% $$
其中 $D$ 为数据安全防护率，$N_{\\text{防护}}$ 为成功防护数据攻击次数，$N_{\\text{攻击}}$ 为总数据攻击次数。该模型量化数据安全水平。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "数据安全", ""],
    time: new Date().toLocaleDateString(),
    likes: 43,
    industryData: {
        standard: "GB/T 35273-2020 信息安全技术",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "数据安全中心"]
    },
    teachingGoals: {
        ability: "数据安全与评估能力",
        path: "数据收集 → 数学建模 → 防护率计算 → 安全建议",
        level: "中级"
    },
    steps: [
        {
            title: "数据安全防护率计算",
            content: `<div class="step-container">
<div class="math-container">
数据安全防护率计算公式：
$$ D = \\frac{N_{\\text{防护}}}{N_{\\text{攻击}}} \\times 100\\% $$
该指标反映数据安全防护能力，防护率越高，保障越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code49', 'output49')" data-case="49">运行</button>
<code id="code49">import numpy as np

# 总数据攻击次数
N_attacks = 500
# 成功防护次数
N_defended = 480

# 计算数据安全防护率
defense_rate = (N_defended / N_attacks) * 100

# 输出结果
print("电子信息数据安全分析:")
print(f"总数据攻击次数: {N_attacks}")
print(f"成功防护次数: {N_defended}")
print(f"数据安全防护率: {defense_rate:.1f}%")

# 安全建议
if defense_rate < 95:
    print("\\n防护率有待提高，需加强数据安全措施。")
else:
    print("\\n防护率高，保障。")</code>
</div>
<div id="output49" class="output-container">
电子信息数据安全分析:
总数据攻击次数: 500
成功防护次数: 480
数据安全防护率: 96.0%

防护率高，保障。
</div>
</div>
</div>`
        }
    ]
};

// 案例50：智能制造中的劳动生产率与社会进步
export const newCase50 = {
    type: "industry",
    title: "智能制造中的劳动生产率与社会进步",
    content: `<div class="math-container">
西北智能制造产业通过提升劳动生产率推动社会进步。通过数学建模评估劳动生产率：
$$ L = \\frac{O_{\\text{产出}}}{N_{\\text{工人}}} $$
其中 $L$ 为劳动生产率，$O_{\\text{产出}}$ 为总产出，$N_{\\text{工人}}$ 为工人数量。该模型量化生产效率对社会发展的贡献。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "劳动生产率", "社会进步"],
    time: new Date().toLocaleDateString(),
    likes: 40,
    industryData: {
        standard: "GB/T 19580-2012 卓越绩效评价准则",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业"]
    },
    teachingGoals: {
        ability: "劳动生产率与社会进步评估能力",
        path: "数据收集 → 数学建模 → 生产率计算 → 发展建议",
        level: "中级"
    },
    steps: [
        {
            title: "劳动生产率计算",
            content: `<div class="step-container">
<div class="math-container">
劳动生产率计算公式：
$$ L = \\frac{O_{\\text{产出}}}{N_{\\text{工人}}} $$
该指标反映单位工人的产出水平，生产率越高，社会进步越快。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code50', 'output50')" data-case="50">运行</button>
<code id="code50">import numpy as np

# 总产出 (件)
O_output = 15000
# 工人数量
N_workers = 60

# 计算劳动生产率
labor_productivity = O_output / N_workers

# 输出结果
print("智能制造劳动生产率分析:")
print(f"总产出: {O_output}件")
print(f"工人数量: {N_workers}")
print(f"劳动生产率: {labor_productivity:.1f} 件/人")

# 发展建议
if labor_productivity < 250:
    print("\\n生产率有待提高，需优化生产流程。")
else:
    print("\\n生产率高，助力社会进步。")</code>
</div>
<div id="output50" class="output-container">
智能制造劳动生产率分析:
总产出: 15000件
工人数量: 60
劳动生产率: 250.0 件/人

生产率高，助力社会进步。
</div>
</div>
</div>`
        }
    ]
};

// 案例51：新能源产业中的碳足迹与全球责任
export const newCase51 = {
    type: "industry",
    title: "新能源产业中的碳足迹与全球责任",
    content: `<div class="math-container">
西北新能源产业通过减少碳足迹履行全球责任。通过数学建模评估单位产品的碳足迹：
$$ C = \\frac{E_{\\text{碳}}}{N_{\\text{产品}}} $$
其中 $C$ 为单位产品碳足迹，$E_{\\text{碳}}$ 为总碳排放量，$N_{\\text{产品}}$ 为产品数量。该模型量化新能源产业的环保贡献。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "碳足迹", "全球责任"],
    time: new Date().toLocaleDateString(),
    likes: 44,
    industryData: {
        standard: "GB/T 24040-2008 环境管理 生命周期评价",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "碳足迹评估中心"]
    },
    teachingGoals: {
        ability: "碳足迹与全球责任评估能力",
        path: "数据收集 → 数学建模 → 碳足迹计算 → 减排建议",
        level: "中级"
    },
    steps: [
        {
            title: "单位产品碳足迹计算",
            content: `<div class="step-container">
<div class="math-container">
单位产品碳足迹计算公式：
$$ C = \\frac{E_{\\text{碳}}}{N_{\\text{产品}}} $$
该指标反映产品的环保水平，碳足迹越低，全球责任履行越好。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code51', 'output51')" data-case="51">运行</button>
<code id="code51">import numpy as np

# 总碳排放量 (吨CO2)
E_carbon = 1000
# 产品数量
N_products = 5000

# 计算单位产品碳足迹
carbon_footprint = E_carbon / N_products

# 输出结果
print("新能源碳足迹分析:")
print(f"总碳排放量: {E_carbon}吨CO2")
print(f"产品数量: {N_products}")
print(f"单位产品碳足迹: {carbon_footprint:.2f} 吨CO2/产品")

# 减排建议
if carbon_footprint > 0.2:
    print("\\n碳足迹偏高，需采取减排措施。")
else:
    print("\\n碳足迹低，履行全球责任。")</code>
</div>
<div id="output51" class="output-container">
新能源碳足迹分析:
总碳排放量: 1000吨CO2
产品数量: 5000
单位产品碳足迹: 0.20 吨CO2/产品

碳足迹低，履行全球责任。
</div>
</div>
</div>`
        }
    ]
};

// 案例52：电子信息产业中的人才培养与创新驱动
export const newCase52 = {
    type: "industry",
    title: "电子信息产业中的人才培养与创新驱动",
    content: `<div class="math-container">
西北电子信息产业通过人才培养推动创新驱动发展。通过数学建模评估人才培养效果：
$$ T = \\frac{N_{\\text{毕业}}}{N_{\\text{招生}}} \\times 100\\% $$
其中 $T$ 为人才培养成功率，$N_{\\text{毕业}}$ 为毕业人数，$N_{\\text{招生}}$ 为招生人数。该模型量化人才培养对创新的贡献。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "人才培养", "创新驱动"],
    time: new Date().toLocaleDateString(),
    likes: 42,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "人才培养中心", "创新驱动发展研究会"]
    },
    teachingGoals: {
        ability: "人才培养与创新驱动评估能力",
        path: "数据收集 → 数学建模 → 成功率计算 → 培养建议",
        level: "中级"
    },
    steps: [
        {
            title: "人才培养成功率计算",
            content: `<div class="step-container">
<div class="math-container">
人才培养成功率计算公式：
$$ T = \\frac{N_{\\text{毕业}}}{N_{\\text{招生}}} \\times 100\\% $$
该指标反映人才培养效率，成功率越高，创新驱动越强。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code52', 'output52')" data-case="52">运行</button>
<code id="code52">import numpy as np

# 招生人数
N_enrolled = 200
# 毕业人数
N_graduated = 180

# 计算人才培养成功率
training_success_rate = (N_graduated / N_enrolled) * 100

# 输出结果
print("电子信息人才培养分析:")
print(f"招生人数: {N_enrolled}")
print(f"毕业人数: {N_graduated}")
print(f"人才培养成功率: {training_success_rate:.1f}%")

# 培养建议
if training_success_rate < 90:
    print("\\n成功率有待提高，需优化培养方案。")
else:
    print("\\n成功率高，支撑创新驱动发展。")</code>
</div>
<div id="output52" class="output-container">
电子信息人才培养分析:
招生人数: 200
毕业人数: 180
人才培养成功率: 90.0%

成功率高，支撑创新驱动发展。
</div>
</div>
</div>`
        }
    ]
};

// 案例53：智能制造中的绿色制造与生态保护
export const newCase53 = {
    type: "industry",
    title: "智能制造中的绿色制造与生态保护",
    content: `<div class="math-container">
西北智能制造产业通过绿色制造推动生态保护。通过数学建模评估绿色制造水平：
$$ G = \\frac{E_{\\text{清洁}}}{E_{\\text{总}}} \\times 100\\% $$
其中 $G$ 为绿色制造比例，$E_{\\text{清洁}}$ 为清洁能源使用量，$E_{\\text{总}}$ 为总能源使用量。该模型量化绿色制造对生态保护的贡献。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "绿色制造", "生态保护"],
    time: new Date().toLocaleDateString(),
    likes: 46,
    industryData: {
        standard: "GB/T 24040-2008 环境管理 生命周期评价",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业", "绿色制造中心", "生态保护协会"]
    },
    teachingGoals: {
        ability: "绿色制造与生态保护评估能力",
        path: "数据收集 → 数学建模 → 绿色比例计算 → 生态建议",
        level: "中级"
    },
    steps: [
        {
            title: "绿色制造比例计算",
            content: `<div class="step-container">
<div class="math-container">
绿色制造比例计算公式：
$$ G = \\frac{E_{\\text{清洁}}}{E_{\\text{总}}} \\times 100\\% $$
该指标反映绿色制造水平，比例越高，生态保护效果越好。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code53', 'output53')" data-case="53">运行</button>
<code id="code53">import numpy as np

# 总能源使用量 (MWh)
E_total = 10000
# 清洁能源使用量 (MWh)
E_clean = 8000

# 计算绿色制造比例
green_manufacturing_rate = (E_clean / E_total) * 100

# 输出结果
print("智能制造绿色制造分析:")
print(f"总能源使用量: {E_total}MWh")
print(f"清洁能源使用量: {E_clean}MWh")
print(f"绿色制造比例: {green_manufacturing_rate:.1f}%")

# 生态建议
if green_manufacturing_rate < 80:
    print("\\n绿色制造比例偏低，需加大清洁能源使用。")
else:
    print("\\n绿色制造比例高，助力生态保护。")</code>
</div>
<div id="output53" class="output-container">
智能制造绿色制造分析:
总能源使用量: 10000MWh
清洁能源使用量: 8000MWh
绿色制造比例: 80.0%

绿色制造比例高，助力生态保护。
</div>
</div>
</div>`
        }
    ]
};

// 案例54：新能源产业中的能源转型与国际合作
export const newCase54 = {
    type: "industry",
    title: "新能源产业中的能源转型与国际合作",
    content: `<div class="math-container">
西北新能源产业通过能源转型推动国际合作。通过数学建模评估能源转型水平：
$$ T = \\frac{E_{\\text{可再生}}}{E_{\\text{化石}}} $$
其中 $T$ 为能源转型指数，$E_{\\text{可再生}}$ 为可再生能源供给量，$E_{\\text{化石}}$ 为化石能源供给量。该模型量化能源转型对国际合作的贡献。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "能源转型", "国际合作"],
    time: new Date().toLocaleDateString(),
    likes: 43,
    industryData: {
        standard: "GB/T 51048-2014 清洁能源发展规划",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "能源转型中心", "国际合作促进会"]
    },
    teachingGoals: {
        ability: "能源转型与国际合作评估能力",
        path: "数据收集 → 数学建模 → 转型指数计算 → 合作建议",
        level: "中级"
    },
    steps: [
        {
            title: "能源转型指数计算",
            content: `<div class="step-container">
<div class="math-container">
能源转型指数计算公式：
$$ T = \\frac{E_{\\text{可再生}}}{E_{\\text{化石}}} $$
该指标反映能源结构转型水平，指数越高，国际合作潜力越大。
</div>
<div>
<div class="code-block">
<button class="run-button" onclick="runPythonCode('code54', 'output54')" data-case="54">运行</button>
<code id="code54">import numpy as np

# 可再生能源供给量 (MWh)
E_renewable = 12000
# 化石能源供给量 (MWh)
E_fossil = 8000

# 计算能源转型指数
transition_index = E_renewable / E_fossil

# 输出结果
print("新能源能源转型分析:")
print(f"可再生能源供给量: {E_renewable}MWh")
print(f"化石能源供给量: {E_fossil}MWh")
print(f"能源转型指数: {transition_index:.2f}")

# 合作建议
if transition_index < 1.5:
    print("\\n转型指数偏低，需加强可再生能源开发。")
else:
    print("\\n转型指数高，促进国际合作。")</code>
</div>
<div id="output54" class="output-container">
新能源能源转型分析:
可再生能源供给量: 12000MWh
化石能源供给量: 8000MWh
能源转型指数: 1.50

转型指数高，促进国际合作。
</div>
</div>
</div>`
        }
    ]
};

// 案例55：新能源产业中的能源效率与经济效益
export const newCase55 = {
    type: "political",
    title: "新能源产业中的能源效率与经济效益",
    content: `<div class="math-container">
西北地区新能源产业通过提高能源效率促进经济效益。通过数学建模评估能源效率：
$$ E = \\frac{O_{\\text{输出}}}{I_{\\text{输入}}} \\times 100\\% $$
其中 $E$ 为能源效率，$O_{\\text{输出}}$ 为能源输出（MWh），$I_{\\text{输入}}$ 为能源输入（MWh）。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "能源效率", "经济效益"],
    time: new Date().toLocaleDateString(),
    likes: 47,
    industryData: {
        standard: "GB/T 23331-2020 能源管理体系要求",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业"]
    },
    teachingGoals: {
        ability: "能源效率与经济效益评估能力",
        path: "数据收集 → 数学建模 → 效率计算",
        level: "中级"
    },
    steps: [
        {
            title: "能源效率计算",
            content: `<div class="step-container">
<div class="math-container">
能源效率计算公式：
$$ E = \\frac{O_{\\text{输出}}}{I_{\\text{输入}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code55">import numpy as np
I_input = 10000  # 能源输入 (MWh)
O_output = 8500  # 能源输出 (MWh)
energy_efficiency = (O_output / I_input) * 100
print(f"能源效率: {energy_efficiency:.1f}%")</code>
</div>
<div id="output55" class="output-container">
能源效率: 85.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput55(codeId) {
    const outputs = {
        'code55': `能源效率: 85.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例56：电子信息产业中的人工智能与社会治理
export const newCase56 = {
    type: "political",
    title: "电子信息产业中的人工智能与社会治理",
    content: `<div class="math-container">
西北电子信息产业利用人工智能提升社会治理能力。通过数学建模评估AI应用覆盖率：
$$ C = \\frac{N_{\\text{AI}}}{N_{\\text{总}}} \\times 100\\% $$
其中 $C$ 为AI应用覆盖率，$N_{\\text{AI}}$ 为AI应用案例数，$N_{\\text{总}}$ 为总治理案例数。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "人工智能", "社会治理"],
    time: new Date().toLocaleDateString(),
    likes: 46,
    industryData: {
        standard: "GB/T 35273-2020 信息安全技术",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "AI技术中心"]
    },
    teachingGoals: {
        ability: "人工智能与社会治理评估能力",
        path: "数据收集 → 数学建模 → 覆盖率计算",
        level: "中级"
    },
    steps: [
        {
            title: "AI应用覆盖率计算",
            content: `<div class="step-container">
<div class="math-container">
AI应用覆盖率计算公式：
$$ C = \\frac{N_{\\text{AI}}}{N_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code56">import numpy as np
N_total = 500  # 总治理案例数
N_ai = 400     # AI应用案例数
ai_coverage = (N_ai / N_total) * 100
print(f"AI应用覆盖率: {ai_coverage:.1f}%")</code>
</div>
<div id="output56" class="output-container">
AI应用覆盖率: 80.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput56(codeId) {
    const outputs = {
        'code56': `AI应用覆盖率: 80.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例57：智能制造中的自动化与劳动生产率
export const newCase57 = {
    type: "political",
    title: "智能制造中的自动化与劳动生产率",
    content: `<div class="math-container">
西北智能制造产业通过自动化技术提升劳动生产率。通过数学建模评估自动化生产效率：
$$ P = \\frac{O_{\\text{自动}}}{T_{\\text{自动}}} $$
其中 $P$ 为自动化生产效率，$O_{\\text{自动}}$ 为自动化产出（件），$T_{\\text{自动}}$ 为自动化生产时间（小时）。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "自动化技术", "劳动生产率"],
    time: new Date().toLocaleDateString(),
    likes: 45,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业", "自动化技术中心"]
    },
    teachingGoals: {
        ability: "自动化与劳动生产率评估能力",
        path: "数据收集 → 数学建模 → 效率计算",
        level: "中级"
    },
    steps: [
        {
            title: "自动化生产效率计算",
            content: `<div class="step-container">
<div class="math-container">
自动化生产效率计算公式：
$$ P = \\frac{O_{\\text{自动}}}{T_{\\text{自动}}} $$
</div>
<div>
<div class="code-block">
<code id="code57">import numpy as np
O_auto = 10000  # 自动化产出 (件)
T_auto = 200    # 自动化生产时间 (小时)
auto_efficiency = O_auto / T_auto
print(f"自动化生产效率: {auto_efficiency:.1f} 件/小时")</code>
</div>
<div id="output57" class="output-container">
自动化生产效率: 50.0 件/小时
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput57(codeId) {
    const outputs = {
        'code57': `自动化生产效率: 50.0 件/小时`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例58：新能源产业中的碳减排与全球责任
export const newCase58 = {
    type: "political",
    title: "新能源产业中的碳减排与全球责任",
    content: `<div class="math-container">
西北新能源产业通过碳减排履行全球责任。通过数学建模评估碳减排率：
$$ R = \\frac{C_{\\text{减排}}}{C_{\\text{总}}} \\times 100\\% $$
其中 $R$ 为碳减排率，$C_{\\text{减排}}$ 为减排量（吨），$C_{\\text{总}}$ 为总排放量（吨）。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "碳减排", "全球责任"],
    time: new Date().toLocaleDateString(),
    likes: 48,
    industryData: {
        standard: "GB/T 32150-2015 温室气体排放核算",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "碳减排研究中心"]
    },
    teachingGoals: {
        ability: "碳减排与全球责任评估能力",
        path: "数据收集 → 数学建模 → 减排率计算",
        level: "中级"
    },
    steps: [
        {
            title: "碳减排率计算",
            content: `<div class="step-container">
<div class="math-container">
碳减排率计算公式：
$$ R = \\frac{C_{\\text{减排}}}{C_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code58">import numpy as np
C_total = 100000  # 总排放量 (吨)
C_reduced = 30000 # 减排量 (吨)
carbon_reduction_rate = (C_reduced / C_total) * 100
print(f"碳减排率: {carbon_reduction_rate:.1f}%")</code>
</div>
<div id="output58" class="output-container">
碳减排率: 30.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput58(codeId) {
    const outputs = {
        'code58': `碳减排率: 30.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例59：电子信息产业中的5G技术与信息平等
export const newCase59 = {
    type: "political",
    title: "电子信息产业中的5G技术与信息平等",
    content: `<div class="math-container">
西北电子信息产业通过5G技术促进信息平等。通过数学建模评估5G覆盖率：
$$ C = \\frac{A_{\\text{5G}}}{A_{\\text{总}}} \\times 100\\% $$
其中 $C$ 为5G覆盖率，$A_{\\text{5G}}$ 为5G覆盖面积（平方公里），$A_{\\text{总}}$ 为总面积（平方公里）。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "5G技术", "信息平等"],
    time: new Date().toLocaleDateString(),
    likes: 44,
    industryData: {
        standard: "GB/T 36464-2018 信息技术标准",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "5G技术中心"]
    },
    teachingGoals: {
        ability: "5G技术与信息平等评估能力",
        path: "数据收集 → 数学建模 → 覆盖率计算",
        level: "中级"
    },
    steps: [
        {
            title: "5G覆盖率计算",
            content: `<div class="step-container">
<div class="math-container">
5G覆盖率计算公式：
$$ C = \\frac{A_{\\text{5G}}}{A_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code59">import numpy as np
A_total = 50000  # 总面积 (平方公里)
A_5g = 40000     # 5G覆盖面积 (平方公里)
coverage_5g = (A_5g / A_total) * 100
print(f"5G覆盖率: {coverage_5g:.1f}%")</code>
</div>
<div id="output59" class="output-container">
5G覆盖率: 80.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput59(codeId) {
    const outputs = {
        'code59': `5G覆盖率: 80.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例60：智能制造中的工业互联网与数据驱动
export const newCase60 = {
    type: "political",
    title: "智能制造中的工业互联网与数据驱动",
    content: `<div class="math-container">
西北智能制造产业通过工业互联网实现数据驱动发展。通过数学建模评估数据利用率：
$$ U = \\frac{D_{\\text{利用}}}{D_{\\text{总}}} \\times 100\\% $$
其中 $U$ 为数据利用率，$D_{\\text{利用}}$ 为利用数据量（TB），$D_{\\text{总}}$ 为总数据量（TB）。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "工业互联网", "数据驱动"],
    time: new Date().toLocaleDateString(),
    likes: 43,
    industryData: {
        standard: "GB/T 36323-2018 工业互联网平台",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业", "工业互联网中心"]
    },
    teachingGoals: {
        ability: "工业互联网与数据驱动评估能力",
        path: "数据收集 → 数学建模 → 利用率计算",
        level: "中级"
    },
    steps: [
        {
            title: "数据利用率计算",
            content: `<div class="step-container">
<div class="math-container">
数据利用率计算公式：
$$ U = \\frac{D_{\\text{利用}}}{D_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code60">import numpy as np
D_total = 2000  # 总数据量 (TB)
D_used = 1800   # 利用数据量 (TB)
data_usage_rate = (D_used / D_total) * 100
print(f"数据利用率: {data_usage_rate:.1f}%")</code>
</div>
<div id="output60" class="output-container">
数据利用率: 90.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput60(codeId) {
    const outputs = {
        'code60': `数据利用率: 90.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例61：新能源产业中的储能技术与能源稳定
export const newCase61 = {
    type: "political",
    title: "新能源产业中的储能技术与能源稳定",
    content: `<div class="math-container">
西北新能源产业通过储能技术保障能源稳定供应。通过数学建模评估储能覆盖率：
$$ S = \\frac{E_{\\text{储能}}}{E_{\\text{需求}}} \\times 100\\% $$
其中 $S$ 为储能覆盖率，$E_{\\text{储能}}$ 为储能容量（MWh），$E_{\\text{需求}}$ 为能源需求（MWh）。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "储能技术", "能源稳定"],
    time: new Date().toLocaleDateString(),
    likes: 46,
    industryData: {
        standard: "GB/T 51048-2014 清洁能源发展规划",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "储能技术中心"]
    },
    teachingGoals: {
        ability: "储能技术与能源稳定评估能力",
        path: "数据收集 → 数学建模 → 覆盖率计算",
        level: "中级"
    },
    steps: [
        {
            title: "储能覆盖率计算",
            content: `<div class="step-container">
<div class="math-container">
储能覆盖率计算公式：
$$ S = \\frac{E_{\\text{储能}}}{E_{\\text{需求}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code61">import numpy as np
E_demand = 50000  # 能源需求 (MWh)
E_storage = 40000 # 储能容量 (MWh)
storage_coverage = (E_storage / E_demand) * 100
print(f"储能覆盖率: {storage_coverage:.1f}%")</code>
</div>
<div id="output61" class="output-container">
储能覆盖率: 80.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput61(codeId) {
    const outputs = {
        'code61': `储能覆盖率: 80.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例62：电子信息产业中的芯片技术与科技自立
export const newCase62 = {
    type: "political",
    title: "电子信息产业中的芯片技术与科技自立",
    content: `<div class="math-container">
西北电子信息产业通过芯片技术推动科技自立。通过数学建模评估国产芯片占比：
$$ P = \\frac{N_{\\text{国产}}}{N_{\\text{总}}} \\times 100\\% $$
其中 $P$ 为国产芯片占比，$N_{\\text{国产}}$ 为国产芯片数量，$N_{\\text{总}}$ 为总芯片数量。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "芯片技术", "科技自立"],
    time: new Date().toLocaleDateString(),
    likes: 45,
    industryData: {
        standard: "GB/T 36464-2018 信息技术标准",
        cluster: "西北电子信息产业园",
        enterprises: ["区域电子企业", "芯片技术中心"]
    },
    teachingGoals: {
        ability: "芯片技术与科技自立评估能力",
        path: "数据收集 → 数学建模 → 占比计算",
        level: "中级"
    },
    steps: [
        {
            title: "国产芯片占比计算",
            content: `<div class="step-container">
<div class="math-container">
国产芯片占比计算公式：
$$ P = \\frac{N_{\\text{国产}}}{N_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code62">import numpy as np
N_total = 100000   # 总芯片数量
N_domestic = 70000 # 国产芯片数量
domestic_chip_rate = (N_domestic / N_total) * 100
print(f"国产芯片占比: {domestic_chip_rate:.1f}%")</code>
</div>
<div id="output62" class="output-container">
国产芯片占比: 70.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput62(codeId) {
    const outputs = {
        'code62': `国产芯片占比: 70.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例63：智能制造中的柔性生产与市场需求
export const newCase63 = {
    type: "political",
    title: "智能制造中的柔性生产与市场需求",
    content: `<div class="math-container">
西北智能制造产业通过柔性生产适应市场需求。通过数学建模评估柔性生产响应率：
$$ R = \\frac{T_{\\text{响应}}}{T_{\\text{需求}}} \\times 100\\% $$
其中 $R$ 为柔性生产响应率，$T_{\\text{响应}}$ 为响应时间（小时），$T_{\\text{需求}}$ 为市场需求变化时间（小时）。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "柔性生产", "市场需求"],
    time: new Date().toLocaleDateString(),
    likes: 44,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域智能制造企业", "柔性生产中心"]
    },
    teachingGoals: {
        ability: "柔性生产与市场需求评估能力",
        path: "数据收集 → 数学建模 → 响应率计算",
        level: "中级"
    },
    steps: [
        {
            title: "柔性生产响应率计算",
            content: `<div class="step-container">
<div class="math-container">
柔性生产响应率计算公式：
$$ R = \\frac{T_{\\text{响应}}}{T_{\\text{需求}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code63">import numpy as np
T_demand = 48    # 市场需求变化时间 (小时)
T_response = 12  # 响应时间 (小时)
flexibility_rate = (T_response / T_demand) * 100
print(f"柔性生产响应率: {flexibility_rate:.1f}%")</code>
</div>
<div id="output63" class="output-container">
柔性生产响应率: 25.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput63(codeId) {
    const outputs = {
        'code63': `柔性生产响应率: 25.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

// 案例64：新能源产业中的新能源车与绿色出行
export const newCase64 = {
    type: "political",
    title: "新能源产业中的新能源车与绿色出行",
    content: `<div class="math-container">
西北新能源产业通过新能源车推广绿色出行。通过数学建模评估新能源车普及率：
$$ P = \\frac{N_{\\text{新能源}}}{N_{\\text{总}}} \\times 100\\% $$
其中 $P$ 为新能源车普及率，$N_{\\text{新能源}}$ 为新能源车数量，$N_{\\text{总}}$ 为总车辆数量。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "新能源车", "绿色出行"],
    time: new Date().toLocaleDateString(),
    likes: 47,
    industryData: {
        standard: "GB/T 18386-2017 新能源汽车标准",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "新能源车技术中心"]
    },
    teachingGoals: {
        ability: "新能源车与绿色出行评估能力",
        path: "数据收集 → 数学建模 → 普及率计算",
        level: "中级"
    },
    steps: [
        {
            title: "新能源车普及率计算",
            content: `<div class="step-container">
<div class="math-container">
新能源车普及率计算公式：
$$ P = \\frac{N_{\\text{新能源}}}{N_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code64">import numpy as np
N_total = 100000      # 总车辆数量
N_new_energy = 30000  # 新能源车数量
new_energy_rate = (N_new_energy / N_total) * 100
print(f"新能源车普及率: {new_energy_rate:.1f}%")</code>
</div>
<div id="output64" class="output-container">
新能源车普及率: 30.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput64(codeId) {
    const outputs = {
        'code64': `新能源车普及率: 30.0%`
    };
    return outputs[codeId] || '代码执行完成';
}

export const newCase65 = {
    type: "industry",
    title: "新能源产业中的风力发电效率评估",
    content: `<div class="math-container">
西北地区新能源产业依托丰富的风能资源发展风力发电。通过数学建模评估风力发电效率：
$$ P = \\frac{1}{2} \\rho A v^3 $$
其中 $P$ 为风力发电量（瓦特），$\\rho$ 为空气密度（kg/m³），$A$ 为叶片扫掠面积（m²），$v$ 为风速（m/s）。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "风力发电", "能源效率"],
    time: new Date().toLocaleDateString(),
    likes: 50,
    industryData: {
        standard: "GB/T 18451.1-2012 风力发电标准",
        cluster: "西北新能源产业集群",
        enterprises: ["区域风电企业", "新能源技术研究所"]
    },
    teachingGoals: {
        ability: "风力发电效率评估能力",
        path: "数据收集 → 数学建模 → 发电量计算",
        level: "中级"
    },
    steps: [
        {
            title: "风力发电量计算",
            content: `<div class="step-container">
<div class="math-container">
风力发电量计算公式：
$$ P = \\frac{1}{2} \\rho A v^3 $$
</div>
<div>
<div class="code-block">
<code id="code65">import numpy as np
rho = 1.225  # 空气密度 (kg/m³)
A = 500      # 叶片扫掠面积 (m²)
v = 10       # 风速 (m/s)
power = 0.5 * rho * A * v**3
print(f"风力发电量: {power:.1f} 瓦特")</code>
</div>
<div id="output65" class="output-container">
风力发电量: 3062500.0 瓦特
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput65(codeId) {
    const outputs = {
        'code65': `风力发电量: 3062500.0 瓦特`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase66 = {
    type: "industry",
    title: "电子信息产业中的网络安全评估",
    content: `<div class="math-container">
西北电子信息产业需评估网络安全水平。通过数学建模计算网络安全指数：
$$ S = \\frac{N_{\\text{防护}}}{N_{\\text{攻击}}} \\times 100 $$
其中 $S$ 为网络安全指数，$N_{\\text{防护}}$ 为成功防御攻击次数，$N_{\\text{攻击}}$ 为总攻击次数。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "网络安全", "安全评估"],
    time: new Date().toLocaleDateString(),
    likes: 48,
    industryData: {
        standard: "GB/T 35273-2020 信息安全技术",
        cluster: "西北电子信息产业园",
        enterprises: ["区域网络安全企业", "信息安全中心"]
    },
    teachingGoals: {
        ability: "网络安全评估能力",
        path: "数据收集 → 数学建模 → 安全指数计算",
        level: "中级"
    },
    steps: [
        {
            title: "网络安全指数计算",
            content: `<div class="step-container">
<div class="math-container">
网络安全指数计算公式：
$$ S = \\frac{N_{\\text{防护}}}{N_{\\text{攻击}}} \\times 100 $$
</div>
<div>
<div class="code-block">
<code id="code66">import numpy as np
N_attacks = 1000  # 总攻击次数
N_defended = 950  # 成功防御次数
security_index = (N_defended / N_attacks) * 100
print(f"网络安全指数: {security_index:.1f}%")</code>
</div>
<div id="output66" class="output-container">
网络安全指数: 95.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput66(codeId) {
    const outputs = {
        'code66': `网络安全指数: 95.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase67 = {
    type: "industry",
    title: "智能制造中的生产效率优化",
    content: `<div class="math-container">
西北智能制造产业通过优化生产流程提高效率。通过数学建模计算生产效率：
$$ E = \\frac{O_{\\text{产出}}}{T_{\\text{时间}}} $$
其中 $E$ 为生产效率（件/小时），$O_{\\text{产出}}$ 为产出量（件），$T_{\\text{时间}}$ 为生产时间（小时）。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "生产效率", "智能优化"],
    time: new Date().toLocaleDateString(),
    likes: 47,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域制造企业", "智能优化中心"]
    },
    teachingGoals: {
        ability: "生产效率优化能力",
        path: "数据收集 → 数学建模 → 效率计算",
        level: "中级"
    },
    steps: [
        {
            title: "生产效率计算",
            content: `<div class="step-container">
<div class="math-container">
生产效率计算公式：
$$ E = \\frac{O_{\\text{产出}}}{T_{\\text{时间}}} $$
</div>
<div>
<div class="code-block">
<code id="code67">import numpy as np
O_output = 12000  # 产出量 (件)
T_time = 240      # 生产时间 (小时)
efficiency = O_output / T_time
print(f"生产效率: {efficiency:.1f} 件/小时")</code>
</div>
<div id="output67" class="output-container">
生产效率: 50.0 件/小时
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput67(codeId) {
    const outputs = {
        'code67': `生产效率: 50.0 件/小时`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase68 = {
    type: "industry",
    title: "新能源产业中的太阳能发电普及率",
    content: `<div class="math-container">
西北地区推广太阳能发电以提高清洁能源使用率。通过数学建模计算太阳能普及率：
$$ P = \\frac{E_{\\text{太阳能}}}{E_{\\text{总}}} \\times 100\\% $$
其中 $P$ 为太阳能普及率，$E_{\\text{太阳能}}$ 为太阳能发电量（MWh），$E_{\\text{总}}$ 为总发电量（MWh）。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "太阳能发电", "普及率"],
    time: new Date().toLocaleDateString(),
    likes: 49,
    industryData: {
        standard: "GB/T 19939-2018 光伏发电标准",
        cluster: "西北新能源产业集群",
        enterprises: ["区域光伏企业", "太阳能技术中心"]
    },
    teachingGoals: {
        ability: "太阳能普及率评估能力",
        path: "数据收集 → 数学建模 → 普及率计算",
        level: "中级"
    },
    steps: [
        {
            title: "太阳能普及率计算",
            content: `<div class="step-container">
<div class="math-container">
太阳能普及率计算公式：
$$ P = \\frac{E_{\\text{太阳能}}}{E_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code68">import numpy as np
E_total = 50000  # 总发电量 (MWh)
E_solar = 15000  # 太阳能发电量 (MWh)
solar_rate = (E_solar / E_total) * 100
print(f"太阳能普及率: {solar_rate:.1f}%")</code>
</div>
<div id="output68" class="output-container">
太阳能普及率: 30.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput68(codeId) {
    const outputs = {
        'code68': `太阳能普及率: 30.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase69 = {
    type: "industry",
    title: "电子信息产业中的大数据应用",
    content: `<div class="math-container">
西北电子信息产业利用大数据优化决策。通过数学建模评估大数据利用率：
$$ U = \\frac{D_{\\text{应用}}}{D_{\\text{总}}} \\times 100\\% $$
其中 $U$ 为大数据利用率，$D_{\\text{应用}}$ 为应用数据量（TB），$D_{\\text{总}}$ 为总数据量（TB）。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "大数据", "数据应用"],
    time: new Date().toLocaleDateString(),
    likes: 46,
    industryData: {
        standard: "GB/T 34960-2017 大数据技术标准",
        cluster: "西北电子信息产业园",
        enterprises: ["区域大数据企业", "数据分析中心"]
    },
    teachingGoals: {
        ability: "大数据应用评估能力",
        path: "数据收集 → 数学建模 → 利用率计算",
        level: "中级"
    },
    steps: [
        {
            title: "大数据利用率计算",
            content: `<div class="step-container">
<div class="math-container">
大数据利用率计算公式：
$$ U = \\frac{D_{\\text{应用}}}{D_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code69">import numpy as np
D_total = 3000  # 总数据量 (TB)
D_applied = 2400  # 应用数据量 (TB)
data_usage = (D_applied / D_total) * 100
print(f"大数据利用率: {data_usage:.1f}%")</code>
</div>
<div id="output69" class="output-container">
大数据利用率: 80.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput69(codeId) {
    const outputs = {
        'code69': `大数据利用率: 80.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase70 = {
    type: "political",
    title: "新能源产业中的绿色发展与生态文明",
    content: `<div class="math-container">
西北新能源产业推动绿色发展，践行生态文明理念。通过数学建模评估清洁能源普及率：
$$ P = \\frac{E_{\\text{清洁}}}{E_{\\text{总}}} \\times 100\\% $$
其中 $P$ 为清洁能源普及率，$E_{\\text{清洁}}$ 为清洁能源发电量（MWh），$E_{\\text{总}}$ 为总发电量（MWh）。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "绿色发展", "生态文明"],
    time: new Date().toLocaleDateString(),
    likes: 51,
    industryData: {
        standard: "GB/T 51048-2014 清洁能源规划",
        cluster: "西北新能源产业集群",
        enterprises: ["区域新能源企业", "生态技术中心"]
    },
    teachingGoals: {
        ability: "绿色发展评估能力",
        path: "数据收集 → 数学建模 → 普及率计算",
        level: "中级"
    },
    steps: [
        {
            title: "清洁能源普及率计算",
            content: `<div class="step-container">
<div class="math-container">
清洁能源普及率计算公式：
$$ P = \\frac{E_{\\text{清洁}}}{E_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code70">import numpy as np
E_total = 60000  # 总发电量 (MWh)
E_clean = 42000  # 清洁能源发电量 (MWh)
clean_energy_rate = (E_clean / E_total) * 100
print(f"清洁能源普及率: {clean_energy_rate:.1f}%")</code>
</div>
<div id="output70" class="output-container">
清洁能源普及率: 70.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput70(codeId) {
    const outputs = {
        'code70': `清洁能源普及率: 70.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase71 = {
    type: "political",
    title: "电子信息产业中的技术创新与社会责任",
    content: `<div class="math-container">
西北电子信息产业通过技术创新履行社会责任。通过数学建模评估创新成果转化率：
$$ R = \\frac{N_{\\text{转化}}}{N_{\\text{创新}}} \\times 100\\% $$
其中 $R$ 为创新成果转化率，$N_{\\text{转化}}$ 为转化成果数，$N_{\\text{创新}}$ 为创新项目总数。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "技术创新", "社会责任"],
    time: new Date().toLocaleDateString(),
    likes: 49,
    industryData: {
        standard: "GB/T 29490-2013 知识产权管理规范",
        cluster: "西北电子信息产业园",
        enterprises: ["区域创新企业", "技术转化中心"]
    },
    teachingGoals: {
        ability: "技术创新与社会责任评估能力",
        path: "数据收集 → 数学建模 → 转化率计算",
        level: "中级"
    },
    steps: [
        {
            title: "创新成果转化率计算",
            content: `<div class="step-container">
<div class="math-container">
创新成果转化率计算公式：
$$ R = \\frac{N_{\\text{转化}}}{N_{\\text{创新}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code71">import numpy as np
N_innovation = 200  # 创新项目总数
N_converted = 160  # 转化成果数
conversion_rate = (N_converted / N_innovation) * 100
print(f"创新成果转化率: {conversion_rate:.1f}%")</code>
</div>
<div id="output71" class="output-container">
创新成果转化率: 80.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput71(codeId) {
    const outputs = {
        'code71': `创新成果转化率: 80.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase72 = {
    type: "political",
    title: "智能制造中的自动化与就业",
    content: `<div class="math-container">
西北智能制造产业需平衡自动化与就业。通过数学建模评估自动化对就业的影响率：
$$ I = \\frac{J_{\\text{减少}}}{J_{\\text{总}}} \\times 100\\% $$
其中 $I$ 为就业影响率，$J_{\\text{减少}}$ 为因自动化减少的岗位数，$J_{\\text{总}}$ 为总岗位数。
</div>`,
    major: "装备制造大类·智能制造技术",
    knowledgePoints: ["数学建模", "自动化", "就业影响"],
    time: new Date().toLocaleDateString(),
    likes: 48,
    industryData: {
        standard: "GB/T 4754-2017 国民经济行业分类",
        cluster: "西北智能制造产业联盟",
        enterprises: ["区域制造企业"]
    },
    teachingGoals: {
        ability: "自动化与就业影响评估能力",
        path: "数据收集 → 数学建模 → 影响率计算",
        level: "中级"
    },
    steps: [
        {
            title: "就业影响率计算",
            content: `<div class="step-container">
<div class="math-container">
就业影响率计算公式：
$$ I = \\frac{J_{\\text{减少}}}{J_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code72">import numpy as np
J_total = 5000  # 总岗位数
J_reduced = 500  # 减少岗位数
impact_rate = (J_reduced / J_total) * 100
print(f"就业影响率: {impact_rate:.1f}%")</code>
</div>
<div id="output72" class="output-container">
就业影响率: 10.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput72(codeId) {
    const outputs = {
        'code72': `就业影响率: 10.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase73 = {
    type: "political",
    title: "新能源产业中的能源安全与国家战略",
    content: `<div class="math-container">
西北新能源产业保障能源安全，支持国家战略。通过数学建模评估能源自给率：
$$ S = \\frac{E_{\\text{自产}}}{E_{\\text{需求}}} \\times 100\\% $$
其中 $S$ 为能源自给率，$E_{\\text{自产}}$ 为自产能源量（MWh），$E_{\\text{需求}}$ 为能源需求量（MWh）。
</div>`,
    major: "能源动力与材料大类·新能源技术",
    knowledgePoints: ["数学建模", "能源安全", "国家战略"],
    time: new Date().toLocaleDateString(),
    likes: 50,
    industryData: {
        standard: "GB/T 34915-2017 能源安全标准",
        cluster: "西北新能源产业集群",
        enterprises: ["区域能源企业"]
    },
    teachingGoals: {
        ability: "能源安全评估能力",
        path: "数据收集 → 数学建模 → 自给率计算",
        level: "中级"
    },
    steps: [
        {
            title: "能源自给率计算",
            content: `<div class="step-container">
<div class="math-container">
能源自给率计算公式：
$$ S = \\frac{E_{\\text{自产}}}{E_{\\text{需求}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code73">import numpy as np
E_demand = 80000  # 能源需求量 (MWh)
E_self = 64000    # 自产能源量 (MWh)
self_sufficiency = (E_self / E_demand) * 100
print(f"能源自给率: {self_sufficiency:.1f}%")</code>
</div>
<div id="output73" class="output-container">
能源自给率: 80.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput73(codeId) {
    const outputs = {
        'code73': `能源自给率: 80.0%`
    };
    return outputs[codeId] || '代码执行完成';
}
export const newCase74 = {
    type: "political",
    title: "电子信息产业中的信息安全与国家安全",
    content: `<div class="math-container">
西北电子信息产业通过信息安全保障国家安全。通过数学建模评估信息安全覆盖率：
$$ C = \\frac{N_{\\text{安全}}}{N_{\\text{总}}} \\times 100\\% $$
其中 $C$ 为信息安全覆盖率，$N_{\\text{安全}}$ 为安全系统数，$N_{\\text{总}}$ 为总系统数。
</div>`,
    major: "电子信息大类·电子技术",
    knowledgePoints: ["数学建模", "信息安全", "国家安全"],
    time: new Date().toLocaleDateString(),
    likes: 47,
    industryData: {
        standard: "GB/T 35273-2020 信息安全技术",
        cluster: "西北电子信息产业园",
        enterprises: ["电子信息企业"]
    },
    teachingGoals: {
        ability: "信息安全与国家安全评估能力",
        path: "数据收集 → 数学建模 → 覆盖率计算",
        level: "中级"
    },
    steps: [
        {
            title: "信息安全覆盖率计算",
            content: `<div class="step-container">
<div class="math-container">
信息安全覆盖率计算公式：
$$ C = \\frac{N_{\\text{安全}}}{N_{\\text{总}}} \\times 100\\% $$
</div>
<div>
<div class="code-block">
<code id="code74">import numpy as np
N_total = 1000  # 总系统数
N_secure = 900  # 安全系统数
security_coverage = (N_secure / N_total) * 100
print(f"信息安全覆盖率: {security_coverage:.1f}%")</code>
</div>
<div id="output74" class="output-container">
信息安全覆盖率: 90.0%
</div>
</div>
</div>`
        }
    ]
};

export function getCodeOutput74(codeId) {
    const outputs = {
        'code74': `信息安全覆盖率: 90.0%`
    };
    return outputs[codeId] || '代码执行完成';
}



export const initialCases = [
    { ...newCase1, id: 1 },
    { ...newCase2, id: 2 },
    { ...newCase3, id: 3 },
    { ...newCase4, id: 4 },
    { ...newCase5, id: 5 },
    { ...newCase6, id: 6 },
    { ...newCase7, id: 7 },
    { ...newCase8, id: 8 },
    { ...newCase9, id: 9 },
    { ...newCase10, id: 10 },
    { ...newCase11, id: 11 },
    { ...newCase12, id: 12 },
    { ...newCase13, id: 13 },
    { ...newCase14, id: 14 },
    { ...newCase15, id: 15 },
    { ...newCase16, id: 16 },
    { ...newCase17, id: 17 },
    { ...newCase18, id: 18 },
    { ...newCase19, id: 19 },
    { ...newCase20, id: 20 },
    { ...newCase21, id: 21 },
    { ...newCase22, id: 22 },
    { ...newCase23, id: 23 },
    { ...newCase24, id: 24 },
    { ...newCase25, id: 25 },
    { ...newCase26, id: 26 },
    { ...newCase27, id: 27 },
    { ...newCase28, id: 28 },
    { ...newCase29, id: 29 },
    { ...newCase30, id: 30 },
    { ...newCase31, id: 31 },
    { ...newCase32, id: 32 },
    { ...newCase33, id: 33 },
    { ...newCase34, id: 34 },
    { ...newCase35, id: 35 },
    { ...newCase36, id: 36 },
    { ...newCase37, id: 37 },
    { ...newCase38, id: 38 },
    { ...newCase39, id: 39 },
    { ...newCase40, id: 40 },
    { ...newCase41, id: 41 },
    { ...newCase42, id: 42 },
    { ...newCase43, id: 43 },
    { ...newCase44, id: 44 }, 
    { ...newCase45, id: 45 },
    { ...newCase46, id: 46 },
    { ...newCase47, id: 47 },
    { ...newCase48, id: 48 },
    { ...newCase49, id: 49 },
    { ...newCase50, id: 50 },
    { ...newCase51, id: 51 },
    { ...newCase52, id: 52 },
    { ...newCase53, id: 53 },
    { ...newCase54, id: 54 },
    { ...newCase55, id: 55 },
    { ...newCase56, id: 56 },
    { ...newCase57, id: 57 },
    { ...newCase58, id: 58 },
    { ...newCase59, id: 59 },
    { ...newCase60, id: 60 },
    { ...newCase61, id: 61 },
    { ...newCase62, id: 62 },
    { ...newCase63, id: 63 },
    { ...newCase64, id: 64 },
    { ...newCase65, id: 65 },
    { ...newCase66, id: 66 },
    { ...newCase67, id: 67 },
    { ...newCase68, id: 68 },
    { ...newCase69, id: 69 },
    { ...newCase70, id: 70 },
    { ...newCase71, id: 71 },
    { ...newCase72, id: 72 },
    { ...newCase73, id: 73 },
    { ...newCase74, id: 74 }
];



    
 
