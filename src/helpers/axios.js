import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.eazicred.com'
})

export default axiosInstance