// src/axios.js

import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的 API 地址
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送之前做些什么
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response;
  },
  error => {
    // 对响应错误做些什么
    if (error.response && error.response.status === 401) {
      // 处理 401 未授权错误
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;
