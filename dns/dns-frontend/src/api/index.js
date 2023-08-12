import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.156.205:8000/' });
//'http://127.0.0.1:8000/' 'http://192.168.1.6:8000/' 'http://192.168.56.1/'

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
    return config;
});

export default axiosInstance;
