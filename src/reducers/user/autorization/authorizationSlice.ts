import { autorizeState, IAutorization } from "../../../types/IAutorization";
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { autorize } from "./autorizationAction";

const initialState: autorizeState = {
    isAdmin: false,
}

export const autorizeSlice = createSlice ({
  name: 'autorize',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(autorize.fulfilled, state => {
      state.isAdmin = true
    });
  } 
})

export default autorizeSlice.reducer