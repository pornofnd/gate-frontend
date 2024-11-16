import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateWallet {
  id: string;
  user_id: string;
  balance:
    | {
        [key: string]: number;
      }
    | {};
  on_hold: {};
  display_name: string;
  priority: 0;
  total_balance: number;
}
const initialState: IInitialStateWallet[] = [];

export const walletStateSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    createWalletState(state, action: PayloadAction<IInitialStateWallet[]>) {
      for (let i = 0; i < action.payload.length; i++) {
        state.push(action.payload[i]);
      }
    },
  },
});
export const walletStateActions = walletStateSlice.actions;
export const walletStateReducer = walletStateSlice.reducer;
