import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAutorization } from "../../../types/IAutorization";
import { baseService } from "../../../baseService";
import { setCookie } from "../../../hooks/setCookie";

export const autorize = createAsyncThunk<IAutorization, {username: string; password: string }>(
    'autorize', 
    async function ({username, password}) {
        const res = await baseService.post('/user/sign-in', { username, password })
        setCookie('user', res.data.token)
        console.log(res);
        return res.data
   }
)