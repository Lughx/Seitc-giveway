import axios from "axios";

export default AxiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'? "seitc.com" : "http://localhost:3000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
})