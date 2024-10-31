import {createSlice, PayloadAction } from "@reduxjs/toolkit"
// const LS_FAV_KEY = 'rfk'

interface WindowState {
	windowState:boolean;
	websocket_id:string;
}

const initialState: WindowState = {
	windowState: false,
	websocket_id:"",
}
export const windowStateSlice=createSlice({
	name: 'github',
	initialState,
	reducers: {
			changeState(state) {
               state.windowState=!state.windowState;
			},
			websocketIdSave(state, action: PayloadAction<string>){
				state.websocket_id=action.payload
			}
	}
})

export const windowStateActions = windowStateSlice.actions
export const windowStateReducer = windowStateSlice.reducer