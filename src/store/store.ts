import { configureStore } from "@reduxjs/toolkit";
import { ConnectApi } from "./api/connectAuthApi";
import { windowStateReducer } from "./reducer/stateModal";
import { UserApi } from "./api/userApi";
import { userStateReducer } from "./reducer/stateUser";
import { WalletApi } from "./api/walletApi";
import { jarStateReducer } from "./reducer/stateJar";
import { walletStateReducer } from "./reducer/stateWallet";
import { PublicApi } from "./api/public";

export const store = configureStore({
  reducer: {
    [ConnectApi.reducerPath]: ConnectApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [WalletApi.reducerPath]: WalletApi.reducer,
    [PublicApi.reducerPath]: PublicApi.reducer,
    windowStateReducer: windowStateReducer,
    userStateReducer: userStateReducer,
    walletStateRducer: walletStateReducer,
    jarStateReducer: jarStateReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      ConnectApi.middleware,
      UserApi.middleware,
      WalletApi.middleware,
      PublicApi.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
