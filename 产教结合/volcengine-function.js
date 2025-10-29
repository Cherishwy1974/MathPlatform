/**
 * 火山引擎函数服务 - API 代理函数
 * 
 * 部署方式：
 * 1. 访问 https://console.volcengine.com/vefaas
 * 2. 创建函数 → 选择 Node.js 18 运行时
 * 3. 添加 HTTP 触发器（认证方式：无需认证）
 * 4. 复制此代码到函数编辑器
 * 5. 点击"部署"
 * 6. 复制函数 URL 到前端代码中
 */

const VOLCENGINE_API_KEY = 'sk-7bebb94a632541f8b6751ddf80925832k7o9dakrh50jcai5';
const VOLCENGINE_BASE_URL = 'https://ark.cn-beijing.volces.com/api/v3';

exports.handler = async (event, context) => {
    console.log('收到请求:', JSON.stringify(event));
    
    // CORS 响应头
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json'
    };
    
    // 处理 OPTIONS 预检请求
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: ''
        };
    }
    
    // 只允许 POST 请求
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: corsHeaders,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
    
    try {
        // 解析请求体
        const requestBody = JSON.parse(event.body || '{}');
        
        // 获取请求路径（默认为 /chat/completions）
        const path = event.path || '/chat/completions';
        
        console.log('转发请求到:', `${VOLCENGINE_BASE_URL}${path}`);
        console.log('请求体:', JSON.stringify(requestBody));
        
        // 转发请求到火山引擎 API
        const response = await fetch(`${VOLCENGINE_BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${VOLCENGINE_API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });
        
        console.log('火山引擎响应状态:', response.status);
        
        // 如果是流式响应
        if (requestBody.stream) {
            // 注意：火山引擎函数服务可能不支持流式响应
            // 如果需要流式响应，建议使用 Cloudflare Workers
            const text = await response.text();
            return {
                statusCode: response.status,
                headers: {
                    ...corsHeaders,
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive'
                },
                body: text
            };
        }
        
        // 非流式响应
        const data = await response.json();
        console.log('返回数据:', JSON.stringify(data).substring(0, 200));
        
        return {
            statusCode: response.status,
            headers: corsHeaders,
            body: JSON.stringify(data)
        };
        
    } catch (error) {
        console.error('函数执行错误:', error);
        
        return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({
                error: error.message,
                stack: error.stack
            })
        };
    }
};

/**
 * 本地测试（可选）
 * 
 * 如果需要本地测试，可以使用以下代码：
 */
if (require.main === module) {
    const testEvent = {
        httpMethod: 'POST',
        path: '/chat/completions',
        body: JSON.stringify({
            model: 'Doubao-Seed-1.6-vision',
            messages: [
                { role: 'user', content: '你好' }
            ],
            stream: false
        })
    };
    
    exports.handler(testEvent, {}).then(result => {
        console.log('测试结果:', JSON.stringify(result, null, 2));
    }).catch(error => {
        console.error('测试失败:', error);
    });
}

