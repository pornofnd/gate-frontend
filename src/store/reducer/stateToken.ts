import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

interface IInitialStateToken {
  token: string
}
const initialState: IInitialStateToken = {
  token: ""
}

export const userStateSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  },
});
export const tokenStateActions = userStateSlice.actions;
export const tokenStateReducer = userStateSlice.reducer;

