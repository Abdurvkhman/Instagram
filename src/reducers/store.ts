import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authorizationSlice from "./user/autorization/authorizationSlice";

const rootReducer = combineReducers ({
    autorize: authorizationSlice
})

export const store = configureStore ({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;