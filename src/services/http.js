import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-node-blue.vercel.app/'
})

export default api