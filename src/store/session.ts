import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface WebsocketState {
	websocket_id:string
}

const initialState: WebsocketState = {
	websocket_id:''
}
export const WebsocketSlice=createSlice({
	name: 'weboscket',
	initialState,
	reducers: {
			WebsocketConnect(state, action: PayloadAction<string>) {
				state.websocket_id=action.payload;
			},
			// WebSocketremove(state, action: PayloadAction<string>) {
				// state.favourites = state.favourites.filter(f => f !== action.payload)
				// localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
		// }
	}
})

export const websocketActions = WebsocketSlice.actions
export const websocketReducer = WebsocketSlice.reducer