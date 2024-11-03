import { configureStore } from '@reduxjs/toolkit';
import { ConnectApi } from './api/ConnectAuth';
import { windowStateReducer } from './reducer/stateModal';
import { UserApi } from './api/user';
import { userStateReducer } from './reducer/stateUser';


export const store = configureStore({
    reducer: {
        [ConnectApi.reducerPath]: ConnectApi.reducer,
        [UserApi.reducerPath]:UserApi.reducer,
        windowStateReducer:windowStateReducer,
        userStateReducer:userStateReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(
        ConnectApi.middleware,
        UserApi.middleware
    )
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;