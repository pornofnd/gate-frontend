import { configureStore } from '@reduxjs/toolkit';
import { ConnectApi } from './ConnectAuth';
import { websocketReducer } from './session';
import { modalWindowReducer } from './reducers/modalWalletState';


export const store = configureStore({
    reducer: {
        [ConnectApi.reducerPath]: ConnectApi.reducer,
        Websocket: websocketReducer,
        ModalWindow:modalWindowReducer

    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(ConnectApi.middleware)
});