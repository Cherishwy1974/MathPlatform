/**
 * 火山引擎方舟平台 AI 功能集成
 * 包含文本生成和图像生成功能
 */

// 火山引擎 API 配置
const VOLCENGINE_CONFIG = {
    // veFaaS 函数 URL（已配置）
    baseUrl: 'https://sd413i7v6n5j6uua1gn70.apigateway-cn-beijing.volceapi.com',
    apiKey: 'sk-7bebb94a632541f8b6751ddf80925832k7o9dakrh50jcai5',

    // 文本生成模型配置
    textModel: {
        modelId: 'doubao-seed-1-6-251015',
        endpointId: '348522f9-6a1b-4d0b-ad6b-8faab8ea09c0',
        modelName: 'Doubao-Seed-1.6-thinking'
    },

    // 图像生成模型配置
    imageModel: {
        modelName: 'Doubao Seedream 4.0'
    },

    // 账号信息
    account: {
        accountId: '2100415977',
        username: 'jianghui'
    }
};

/**
 * 调用火山引擎文本生成 API
 * @param {string} prompt - 用户输入的提示词
 * @param {Object} options - 可选配置参数
 * @returns {Promise<string>} 生成的文本内容
 */
async function generateText(prompt, options = {}) {
    const {
        temperature = 0.7,
        maxTokens = 2000,
        stream = false
    } = options;

    try {
        const response = await fetch(`${VOLCENGINE_CONFIG.baseUrl}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Authorization 由 veFaaS 函数添加
            },
            body: JSON.stringify({
                model: VOLCENGINE_CONFIG.textModel.endpointId,
                messages: [
                    {
                        role: 'system',
                        content: '你是一个专业的教育助手，擅长分析产教融合案例和思政教育内容。'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: temperature,
                max_tokens: maxTokens,
                stream: stream
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API 请求失败: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error('API 返回数据格式错误');
        }
    } catch (error) {
        console.error('文本生成失败:', error);
        throw error;
    }
}

/**
 * 调用火山引擎图像生成 API
 * @param {string} prompt - 图像描述提示词
 * @param {Object} options - 可选配置参数
 * @returns {Promise<string>} 生成的图像 URL
 */
async function generateImage(prompt, options = {}) {
    const {
        width = 1024,
        height = 1024,
        numImages = 1
    } = options;

    try {
        // 注意：这里使用的是假设的图像生成 API 端点
        // 实际端点可能需要根据火山引擎文档调整
        const response = await fetch(`${VOLCENGINE_CONFIG.baseUrl}/images/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Authorization 由 veFaaS 函数添加
            },
            body: JSON.stringify({
                model: VOLCENGINE_CONFIG.imageModel.modelName,
                prompt: prompt,
                n: numImages,
                size: `${width}x${height}`
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`图像生成失败: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            return data.data[0].url;
        } else {
            throw new Error('API 返回数据格式错误');
        }
    } catch (error) {
        console.error('图像生成失败:', error);
        throw error;
    }
}

/**
 * 分析案例内容并生成 AI 建议
 * @param {Object} caseData - 案例数据
 * @returns {Promise<Object>} AI 分析结果
 */
async function analyzeCaseWithAI(caseData) {
    const prompt = `请分析以下教育案例，并提供改进建议：

案例标题：${caseData.title}
案例类型：${caseData.type === 'political' ? '思政育人' : '产业实践'}
案例内容：${caseData.content}
知识点：${caseData.knowledgePoints.join(', ')}

请从以下几个方面进行分析：
1. 案例的教育价值
2. 思政元素的融合程度
3. 实践应用的可行性
4. 改进建议

请用简洁明了的语言回答。`;

    try {
        const analysis = await generateText(prompt, { maxTokens: 1500 });
        return {
            success: true,
            analysis: analysis,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        };
    }
}

/**
 * 为案例生成配图
 * @param {Object} caseData - 案例数据
 * @returns {Promise<string>} 图像 URL
 */
async function generateCaseImage(caseData) {
    const imagePrompt = `创建一个教育场景插图：${caseData.title}。
风格：现代、专业、教育性。
元素：${caseData.knowledgePoints.slice(0, 3).join('、')}。
色调：温暖、积极、启发性。`;

    try {
        const imageUrl = await generateImage(imagePrompt);
        return imageUrl;
    } catch (error) {
        console.error('生成案例配图失败:', error);
        throw error;
    }
}

/**
 * 智能问答功能
 * @param {string} question - 用户问题
 * @param {Object} context - 上下文信息（可选）
 * @returns {Promise<string>} AI 回答
 */
async function askQuestion(question, context = {}) {
    let prompt = question;
    
    if (context.caseTitle) {
        prompt = `关于案例"${context.caseTitle}"的问题：${question}`;
    }
    
    if (context.caseContent) {
        prompt += `\n\n案例内容参考：${context.caseContent.substring(0, 500)}...`;
    }

    try {
        const answer = await generateText(prompt, { maxTokens: 1000 });
        return answer;
    } catch (error) {
        console.error('AI 问答失败:', error);
        throw error;
    }
}

// 页面加载时初始化
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        console.log('火山引擎 AI 模块已加载');
        console.log('API Key 已配置:', VOLCENGINE_CONFIG.apiKey ? '✓' : '✗');
        console.log('Base URL:', VOLCENGINE_CONFIG.baseUrl);
    });
}

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateText,
        generateImage,
        analyzeCaseWithAI,
        generateCaseImage,
        askQuestion,
        VOLCENGINE_CONFIG
    };
}

// 浏览器环境下挂载到 window 对象
if (typeof window !== 'undefined') {
    window.VolcengineAI = {
        generateText,
        generateImage,
        analyzeCaseWithAI,
        generateCaseImage,
        askQuestion,
        config: VOLCENGINE_CONFIG
    };
}

