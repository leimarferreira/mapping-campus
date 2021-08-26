import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
});

api.interceptors.request.use(async config => {
    config.withCredentials = true;
    return config;
});

export default api;
