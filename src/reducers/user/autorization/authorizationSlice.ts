import { autorizationState, IAutorization } from "../../../types/IAutorization";
import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { autorization, checkUser } from "./autorizationAction";

const initialState: autorizationState = {
    isAdmin: false,
    user: []
}

export const autorizeSlice = createSlice ({
  name: 'autorize',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   builder.addCase(autorization.pending, state => {
    state.isAdmin = true
   });
   builder.addCase(autorization.fulfilled, (state, action: PayloadAction<IAutorization[]>) => {
    state.isAdmin = true
    state.user = action.payload
    
   });
   builder.addCase(checkUser.pending, state => {
    state.isAdmin = true
   });
   builder.addCase(checkUser.fulfilled, (state, action: PayloadAction<IAutorization[]>) => {
    state.isAdmin = true
    state.user = action.payload
    console.log(action.payload);
   });
  } 
})

export default autorizeSlice.reducer