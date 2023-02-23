import { baseURL } from "./constans";
import axios from "axios";

export const baseService = axios.create({
    baseURL,
})

baseService.interceptors.request.use(
    (config) => { console.log(config); return config },
    (err) => { console.log(err.status) }
)

baseService.interceptors.response.use(
    (res) => { console.log(res.status); return res },
    (err) => {
        if (axios.isAxiosError(err)) {
            if (err.status === 401) {
                console.log(err.status);
                
            }
        }
    }
    
)