import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAutorization } from "../../../types/IAutorization";
import { attachToken, baseService, fillToken } from "../../../baseService";
import Cookies from "js-cookie";

export const autorization = createAsyncThunk<IAutorization[], {username: string, password: string}>(
    'autorize',
    async function ({username, password}) {
        const {data} = await baseService.post('/user/sign-in', { username, password })
        fillToken(data.token)
        attachToken(data.token)
        return data
   }
)

export const checkUser = createAsyncThunk<IAutorization[]>(
    'check/user',
    async () => {
        const token = Cookies.get('user')
        attachToken(token as string)
        try {
            const res = await baseService.get('/user')
            return res.data
        } catch (e) {
            return console.log(e);
            
        }
   }
)