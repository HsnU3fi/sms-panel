import axios from 'axios';

export default function () {
    // Set the base URL for API requests
    axios.defaults.baseURL = 'http://72.142.143.6:10000/api';
    // Add a request interceptor
    axios.interceptors.request.use((config) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            config.headers.Authorization = `Bearer ${token.access_token}`;
        } else {
            delete config.headers.Authorization;
        }
        return config;
    });

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
        // Handle the response data here
        return response;
    }, (error) => {
        // Handle any error responses here
        return Promise.reject(error);
    });
}