import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApp } from "type/App";
interface IInitialApp {
  app: IApp[] | [];
}
const initialState: IInitialApp = {
  app: [],
};
export const appStateSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addApp(state, actions: PayloadAction<IApp[]>) {
      state.app = actions.payload;
    },
  },
});

export const appStateActions = appStateSlice.actions;
export const appStateReducer = appStateSlice.reducer;
