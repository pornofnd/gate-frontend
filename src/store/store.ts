import { configureStore } from '@reduxjs/toolkit';
import { ConnectApi } from './ConnectAuth';
import { windowStateReducer } from './reducer/stateModal';


export const store = configureStore({
    reducer: {
        [ConnectApi.reducerPath]: ConnectApi.reducer,
        windowStateReducer:windowStateReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(ConnectApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;