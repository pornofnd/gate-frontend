import {createSlice, PayloadAction } from "@reduxjs/toolkit"
// const LS_FAV_KEY = 'rfk'

interface WindowState {
	windowState:boolean;
	websocket_id:string;
	authWindow:boolean;
	auth:boolean;
}

const initialState: WindowState = {
	windowState: false,
	authWindow:false,
	websocket_id:"",
    auth:false,
}
export const windowStateSlice=createSlice({
	name: 'window',
	initialState,
	reducers: {
			changeState(state) {
               state.windowState=!state.windowState;
			},
			websocketIdSave(state, action: PayloadAction<string>){
				state.websocket_id=action.payload
			},
			authWindow(state){
				state.authWindow=!state.authWindow;
			},
			authConnect(state){
				state.auth=true;
			}
			
	}
})

export const windowStateActions = windowStateSlice.actions
export const windowStateReducer = windowStateSlice.reducer