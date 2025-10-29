/**
 * Gitee 集成模块
 * 用于将用户留言存储到 Gitee 仓库
 */

// Gitee 配置
const GITEE_CONFIG = {
    // 仓库信息
    owner: 'swywy_admin',
    repo: 'video',
    repoUrl: 'https://gitee.com/swywy_admin/video.git',
    
    // API 配置
    apiBase: 'https://gitee.com/api/v5',
    accessToken: '6d2be8c68ff79ab587c54b183d7bfa6a',
    
    // 留言存储配置
    messagesPath: 'messages',  // 留言存储的路径
    messagesFile: 'messages.json'  // 留言数据文件
};

/**
 * 获取仓库文件内容
 * @param {string} path - 文件路径
 * @returns {Promise<Object>} 文件内容和 SHA
 */
async function getFileContent(path) {
    try {
        const url = `${GITEE_CONFIG.apiBase}/repos/${GITEE_CONFIG.owner}/${GITEE_CONFIG.repo}/contents/${path}`;
        const response = await fetch(`${url}?access_token=${GITEE_CONFIG.accessToken}`);
        
        if (response.status === 404) {
            // 文件不存在
            return { content: null, sha: null };
        }
        
        if (!response.ok) {
            throw new Error(`获取文件失败: ${response.statusText}`);
        }
        
        const data = await response.json();

        // Base64 解码内容，正确处理 UTF-8 编码
        let content = null;
        if (data.content) {
            try {
                // 移除换行符
                const base64Content = data.content.replace(/\n/g, '');
                // Base64 解码
                const decodedStr = atob(base64Content);
                // 将字节字符串转换为 UTF-8
                const bytes = new Uint8Array(decodedStr.length);
                for (let i = 0; i < decodedStr.length; i++) {
                    bytes[i] = decodedStr.charCodeAt(i);
                }
                // 使用 TextDecoder 正确解码 UTF-8
                const decoder = new TextDecoder('utf-8');
                content = decoder.decode(bytes);
            } catch (error) {
                console.error('解码文件内容失败:', error);
                content = null;
            }
        }

        return {
            content: content,
            sha: data.sha
        };
    } catch (error) {
        console.error('获取文件内容失败:', error);
        throw error;
    }
}

/**
 * 创建或更新文件
 * @param {string} path - 文件路径
 * @param {string} content - 文件内容
 * @param {string} message - 提交信息
 * @param {string} sha - 文件的 SHA（更新时需要）
 * @returns {Promise<Object>} 操作结果
 */
async function createOrUpdateFile(path, content, message, sha = null) {
    try {
        const url = `${GITEE_CONFIG.apiBase}/repos/${GITEE_CONFIG.owner}/${GITEE_CONFIG.repo}/contents/${path}`;

        // Base64 编码内容，正确处理 UTF-8
        let encodedContent;
        try {
            // 使用 TextEncoder 将字符串转换为 UTF-8 字节
            const encoder = new TextEncoder();
            const bytes = encoder.encode(content);
            // 将字节数组转换为二进制字符串
            let binaryString = '';
            for (let i = 0; i < bytes.length; i++) {
                binaryString += String.fromCharCode(bytes[i]);
            }
            // Base64 编码
            encodedContent = btoa(binaryString);
        } catch (error) {
            console.error('编码文件内容失败:', error);
            throw new Error('编码失败');
        }

        const body = {
            access_token: GITEE_CONFIG.accessToken,
            content: encodedContent,
            message: message
        };

        if (sha) {
            body.sha = sha;
        }
        
        const response = await fetch(url, {
            method: sha ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`文件操作失败: ${errorData.message || response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('创建或更新文件失败:', error);
        throw error;
    }
}

/**
 * 通过 Issues 存储留言
 * @param {Object} messageData - 留言数据
 * @returns {Promise<Object>} 创建的 Issue
 */
async function createMessageIssue(messageData) {
    try {
        const url = `${GITEE_CONFIG.apiBase}/repos/${GITEE_CONFIG.owner}/${GITEE_CONFIG.repo}/issues`;
        
        const issueBody = `
**留言时间**: ${messageData.timestamp}
**用户**: ${messageData.username || '匿名用户'}
**邮箱**: ${messageData.email || '未提供'}

---

${messageData.content}

---

**相关案例**: ${messageData.caseTitle || '无'}
**标签**: ${messageData.tags ? messageData.tags.join(', ') : '无'}
        `.trim();
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_token: GITEE_CONFIG.accessToken,
                repo: GITEE_CONFIG.repo,
                title: `留言: ${messageData.title || messageData.content.substring(0, 30)}...`,
                body: issueBody,
                labels: messageData.labels || ['留言', '用户反馈']
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`创建 Issue 失败: ${errorData.message || response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('创建留言 Issue 失败:', error);
        throw error;
    }
}

/**
 * 保存留言到 JSON 文件
 * @param {Object} messageData - 留言数据
 * @returns {Promise<Object>} 操作结果
 */
async function saveMessageToFile(messageData) {
    try {
        const filePath = `${GITEE_CONFIG.messagesPath}/${GITEE_CONFIG.messagesFile}`;
        
        // 获取现有留言数据
        const { content, sha } = await getFileContent(filePath);
        
        let messages = [];
        if (content) {
            try {
                messages = JSON.parse(content);
            } catch (e) {
                console.warn('解析现有留言数据失败，将创建新文件');
            }
        }
        
        // 添加新留言
        const newMessage = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            ...messageData
        };
        
        messages.unshift(newMessage);  // 新留言放在最前面
        
        // 限制留言数量（可选）
        if (messages.length > 1000) {
            messages = messages.slice(0, 1000);
        }
        
        // 保存到文件
        const newContent = JSON.stringify(messages, null, 2);
        const commitMessage = `添加新留言: ${messageData.title || messageData.content.substring(0, 30)}`;
        
        await createOrUpdateFile(filePath, newContent, commitMessage, sha);
        
        return {
            success: true,
            message: '留言保存成功',
            messageId: newMessage.id
        };
    } catch (error) {
        console.error('保存留言到文件失败:', error);
        throw error;
    }
}

/**
 * 获取所有留言
 * @returns {Promise<Array>} 留言列表
 */
async function getAllMessages() {
    try {
        const filePath = `${GITEE_CONFIG.messagesPath}/${GITEE_CONFIG.messagesFile}`;
        const { content } = await getFileContent(filePath);
        
        if (!content) {
            return [];
        }
        
        return JSON.parse(content);
    } catch (error) {
        console.error('获取留言列表失败:', error);
        return [];
    }
}

/**
 * 提交留言（主函数）
 * @param {Object} messageData - 留言数据
 * @param {string} method - 存储方法 ('issue' 或 'file')
 * @returns {Promise<Object>} 操作结果
 */
async function submitMessage(messageData, method = 'both') {
    try {
        const results = {};
        
        // 验证必填字段
        if (!messageData.content || messageData.content.trim() === '') {
            throw new Error('留言内容不能为空');
        }
        
        // 添加时间戳
        if (!messageData.timestamp) {
            messageData.timestamp = new Date().toISOString();
        }
        
        // 根据方法选择存储方式
        if (method === 'issue' || method === 'both') {
            try {
                results.issue = await createMessageIssue(messageData);
            } catch (error) {
                console.error('Issue 方式存储失败:', error);
                results.issueError = error.message;
            }
        }
        
        if (method === 'file' || method === 'both') {
            try {
                results.file = await saveMessageToFile(messageData);
            } catch (error) {
                console.error('文件方式存储失败:', error);
                results.fileError = error.message;
            }
        }
        
        // 判断是否至少有一种方式成功
        const hasSuccess = results.issue || results.file?.success;
        
        return {
            success: hasSuccess,
            results: results,
            message: hasSuccess ? '留言提交成功' : '留言提交失败'
        };
    } catch (error) {
        console.error('提交留言失败:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// 浏览器环境下挂载到 window 对象
if (typeof window !== 'undefined') {
    window.GiteeIntegration = {
        submitMessage,
        getAllMessages,
        createMessageIssue,
        saveMessageToFile,
        config: GITEE_CONFIG
    };
    
    console.log('Gitee 集成模块已加载');
}

// Node.js 环境导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        submitMessage,
        getAllMessages,
        createMessageIssue,
        saveMessageToFile,
        GITEE_CONFIG
    };
}

