import {createSlice, PayloadAction } from "@reduxjs/toolkit"
// const LS_FAV_KEY = 'rfk'

interface WindowState {
	windowState:boolean;
	websocket_id:string;
	authWindow:boolean;
	
}

const initialState: WindowState = {
	windowState: false,
	authWindow:false,
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
			},
			authWindow(state){
				
				state.authWindow=!state.authWindow;
			},
			
	}
})

export const windowStateActions = windowStateSlice.actions
export const windowStateReducer = windowStateSlice.reducer