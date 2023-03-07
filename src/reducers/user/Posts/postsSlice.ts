import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPosts, postsState } from "../../../types/IPosts";
import { addPosts, deletePost, editPost, getPosts } from "./postsAction";

const initialState: postsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<IPosts[]>) => {
        state.posts = action.payload;
      }
    );
    builder.addCase(
      addPosts.fulfilled,
      (state, action: PayloadAction<IPosts>) => {
        state.posts.push(action.payload);
      }
    );
    builder.addCase(
      editPost.fulfilled,
      (state, action: PayloadAction<IPosts>) => {
        state.posts = state.posts.map((i) =>
          i._id === action.payload._id ? action.payload : i
        );
        console.log(action.payload);
      }
    );
    builder.addCase(
      deletePost.fulfilled,
      (state, action: PayloadAction<IPosts["_id"]>) => {
        state.posts = state.posts.filter((i) => i._id !== action.payload);
      }
    );
  },
});

export default postsSlice.reducer;
