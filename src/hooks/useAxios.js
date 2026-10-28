import axios from "axios";


const axiosIns = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    withCredentials: true
});

export default axiosIns;
