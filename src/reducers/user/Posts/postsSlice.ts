import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPosts, postsState } from "../../../types/IPosts";
import { getPosts } from "./postsAction";


const initialState: postsState = {
    posts: []
} 

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<IPosts[]>) => {
            state.posts = action.payload
        })
    },
})

export default postsSlice.reducer