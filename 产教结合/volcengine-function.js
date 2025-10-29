/**
 * 火山引擎 veFaaS 函数 - API 代理
 * 用于解决前端 CORS 问题
 */

const VOLCENGINE_API_KEY = '348522f9-6a1b-4d0b-ad6b-8faab8ea09c0';
const VOLCENGINE_BASE_URL = 'https://ark.cn-beijing.volces.com/api/v3';

exports.handler = async (event, context) => {
    // 打印完整的 event 对象用于调试
    console.log('=== 收到请求 ===');
    console.log('Event:', JSON.stringify(event, null, 2));

    // CORS 响应头
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    // 处理 OPTIONS 预检请求
    const method = event.httpMethod || event.method || 'POST';
    if (method === 'OPTIONS') {
        console.log('处理 OPTIONS 请求');
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: ''
        };
    }

    try {
        // 解析请求体
        let requestBody;
        if (event.body) {
            if (typeof event.body === 'string') {
                try {
                    requestBody = JSON.parse(event.body);
                } catch (e) {
                    console.error('解析 body 失败:', e);
                    requestBody = event.body;
                }
            } else {
                requestBody = event.body;
            }
        } else {
            requestBody = event;
        }

        console.log('解析后的请求体:', JSON.stringify(requestBody, null, 2));

        // 确定 API 路径
        let apiPath = '/chat/completions';
        if (event.path && event.path !== '/') {
            apiPath = event.path;
        } else if (event.rawPath && event.rawPath !== '/') {
            apiPath = event.rawPath;
        }

        // 如果请求体中包含图像生成相关字段，使用图像生成端点
        if (requestBody.prompt && requestBody.size) {
            apiPath = '/images/generations';
        }
        
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

