import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateWallet {
  id: string;
  user_id: string;
  balance:
    | {
        TON: string;
        USDT: string;
        PENIS: string;
        DEAD_JEWS: string;
      }
    | {};
  on_hold: {};
  display_name: string;
  priority: 0;
}
const initialState: IInitialStateWallet = {
  id: "",
  user_id: "",
  balance: {},
  on_hold: {},
  display_name: "",
  priority: 0,
};

export const walletStateSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    createWalletState(state, action: PayloadAction<IInitialStateWallet>) {
      state = action.payload;
    },
  },
});
export const walletStateActions = walletStateSlice.actions;
export const walletStateReducer = walletStateSlice.reducer;
