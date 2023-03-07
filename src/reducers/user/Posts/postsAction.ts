import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { attachToken, baseService } from "../../../baseService";
import { IPosts } from "../../../types/IPosts";

export const getPosts = createAsyncThunk<IPosts[]>("get/posts", async () => {
  const { data } = await baseService.get("/posts");
  return data;
});

export const addPosts = createAsyncThunk<
  IPosts,
  { image: File | null; description: string }
>("add/posts", async ({ image, description }) => {
  console.log(image);
  const fd = new FormData();
  fd.append("description", description);
  fd.append("image", image!);
  const token = Cookies.get("user");
  attachToken(token as string);
  const res = await baseService.post("/posts", fd);
  console.log(res);
  return res.data;
});

export const editPost = createAsyncThunk<
  IPosts,
  { postId: string; description: string }
>("edit/post", async ({ postId, description }) => {
  const token = Cookies.get("user");
  attachToken(token as string);
  const res = await baseService.patch(`/posts/${postId}`, { description });
  console.log(res.data);

  return res.data;
});

export const deletePost = createAsyncThunk("del/post", async (_id: string) => {
  const token = Cookies.get("user");
  attachToken(token as string);
  const res = await baseService.delete(`/posts/${_id}`);
  console.log(res);
  return _id;
});
