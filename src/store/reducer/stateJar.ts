import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface jarState{
    websocket_id:string
    data:{}
}
const initialState: jarState = {
	websocket_id:"",
    data:{}
}
export const jarStateSlice=createSlice({
	name: 'jar',
	initialState,
	reducers: {
        addWebsocketId(state,action:PayloadAction<string>){
            state.websocket_id=action.payload;
        }
	}
})

export const jarStateActions = jarStateSlice.actions
export const jarStateReducer = jarStateSlice.reducer