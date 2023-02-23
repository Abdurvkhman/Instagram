import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../baseService";
import { IPosts } from "../../../types/IPosts";


export const getPosts = createAsyncThunk(
    'get/posts',
    async () => {
        const res = await baseService.get('/posts')
        return res
    }
)