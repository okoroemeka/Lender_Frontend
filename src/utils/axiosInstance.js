import axios from 'axios';
import authUtils from './auth';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL_LOCAL || process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const configInstance = { ...config };
    configInstance.headers.Authorization = authUtils.getUserToken();
    return configInstance;
  },
  (error) => Promise.reject(error),
);

export default instance;
