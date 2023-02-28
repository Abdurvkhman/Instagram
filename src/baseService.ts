import { baseURL } from "./constans";
import axios from "axios";
import Cookies from "js-cookie";

export const baseService = axios.create({
    baseURL,
})

export const fillToken = (autorization: string) => {
    baseService.defaults.headers.common.Authorization = `Bearer ${autorization}`
    Cookies.set('user', autorization);
}

export const attachToken = (autorization: string) => {
    baseService.defaults.headers.common.Authorization = `Bearer ${autorization}`
}

export const logout = (): void => {
    Cookies.remove('user')
}

export const token = Cookies.get('user')

baseService.interceptors.response.use(
    (res) => { return res },
    (err) => {
        if (err.response.status === 401) {
           logout()
        } Promise.reject(err)
    }
)