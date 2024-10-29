import {  createSlice } from "@reduxjs/toolkit"


interface ModalWindowState {
	state:boolean
}

const initialState: ModalWindowState = {
	state: false
}
export const ModalWindowSlice=createSlice({
	name: 'modalWindow',
	initialState,
	reducers: {
			changeState(state) {
				state.state=!state.state;
			},
			// ModalWindowremove(state, action: PayloadAction<string>) {
				// state.favourites = state.favourites.filter(f => f !== action.payload)
				// localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
		// }
	}
})

export const modalWindowActions = ModalWindowSlice.actions
export const modalWindowReducer = ModalWindowSlice.reducer