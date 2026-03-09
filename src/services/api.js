const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

/**
 * 通用的 API 請求工具
 */
export const apiRequest = async (endpoint, options = {}) => {
    const { method = 'GET', body, headers = {} } = options;

    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${API_URL}${endpoint}`, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || '發生錯誤');
        }

        return data;
    } catch (error) {
        console.error('API 請求失敗:', error);
        throw error;
    }
};

/**
 * 車系相關 API
 */
export const getModels = () => apiRequest('/models');
export const getModelById = (id) => apiRequest(`/models/${id}`);

/**
 * 車型相關 API
 */
export const getTrims = () => apiRequest('/trims');
export const getTrimById = (id) => apiRequest(`/trims/${id}`);

/**
 * 認證相關 API
 */
export const login = (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: credentials,
});

export const register = (userData) => apiRequest('/auth/register', {
    method: 'POST',
    body: userData,
});

export const forgotPassword = (email) => apiRequest('/auth/forgot-password', {
    method: 'POST',
    body: { email },
});

/**
 * 內容相關 API
 */
export const getHomeSlides = () => apiRequest('/slides');
export const getArticles = (category) => {
    const endpoint = category ? `/articles?category=${encodeURIComponent(category)}` : '/articles';
    return apiRequest(endpoint);
};
export const getArticleById = (id) => apiRequest(`/articles/${id}`);

/**
 * 車款與車型 API
 */
export const getTrimsByModel = (modelSlug) => apiRequest(`/trims?model_slug=${modelSlug}`);
