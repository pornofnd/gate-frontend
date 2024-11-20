import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface socketState {
  websocket_id: string;

}
const initialState: socketState = {
  websocket_id: "",
  
};
export const socketStateSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    addWebsocketId(state, action: PayloadAction<string>) {
      state.websocket_id = action.payload;
    },
  },
});

export const socketStateActions = socketStateSlice.actions;
export const socketStateReducer = socketStateSlice.reducer;
