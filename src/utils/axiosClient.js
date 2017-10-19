import axios from 'axios';
import utils from './utils';

const baseURL = 'http://localhost:3000/api/';

const axiosClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(async (config) => {
    try {
        if (utils.isAuthenticated()) {
            config.headers['x-access-token'] = utils.getAccessToken();
        }
        return config;
    } catch (error) {
        return Promise.reject(error);
    }
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error)
    return Promise.reject(error);
});

export default axiosClient;
