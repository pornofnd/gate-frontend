import { configureStore } from '@reduxjs/toolkit';
import { ConnectApi } from './ConnectAuth';


export const store = configureStore({
    reducer: {
        [ConnectApi.reducerPath]: ConnectApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(ConnectApi.middleware)
});