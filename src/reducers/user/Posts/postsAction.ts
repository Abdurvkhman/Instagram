import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../baseService";
import { IPosts } from "../../../types/IPosts";


export const getPosts = createAsyncThunk<IPosts[]>(
    'get/posts',
    async () => {
        const {data} = await baseService.get('/posts')
        return data 
    }
)