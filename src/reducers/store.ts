import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authorizationSlice from "./user/autorization/authorizationSlice";
import postsSlice from "./user/posts/postsSlice";

const rootReducer = combineReducers ({
    autorize: authorizationSlice,
    posts: postsSlice
})

export const store = configureStore ({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;