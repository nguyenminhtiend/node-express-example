import axios from 'axios';

const baseURL = 'http://localhost:3000';

const axiosClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// axiosClient.interceptors.request.use(async (config) => {
//     try {
//         return config;
//     } catch (error) {
//         return Promise.reject(error);
//     }
// });
//
// axiosClient.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     console.log(error)
//     return Promise.reject(error);
// });

export default axiosClient;
