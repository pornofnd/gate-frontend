import { createSlice } from "@reduxjs/toolkit";

interface IInitialStateWallet {}
const initialState: IInitialStateWallet = {};

export const walletStateSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
});
export const walletStateActions = walletStateSlice.actions;
export const walletStateReducer = walletStateSlice.reducer;
