import { defineConfig } from "@midscene/core";

/**
 * Midscene配置文件
 * 支持使用阿里云通义千问作为AI模型提供商
 */
export default defineConfig({
  // AI模型配置
  model: {
    // 使用OpenAI兼容模式连接千问API
    provider: "openai",
    apiKey: process.env.MIDSCENE_MODEL_API_KEY,
    baseURL: process.env.MIDSCENE_MODEL_BASE_URL,
    model: process.env.MIDSCENE_MODEL_NAME,
  },
});
