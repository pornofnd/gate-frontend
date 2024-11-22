import { configureStore } from "@reduxjs/toolkit";
import { ConnectApi } from "./api/connectAuthApi";
import { windowStateReducer } from "./reducer/stateModal";
import { UserApi } from "./api/userApi";
import { userStateReducer } from "./reducer/stateUser";
import { WalletApi } from "./api/walletApi";
import { jarStateReducer } from "./reducer/stateJar";
import { walletStateReducer } from "./reducer/stateWallet";
import { PublicApi } from "./api/public";
import { socketStateReducer } from "./reducer/stateSocket";
import { AppApi } from "./api/appApi";
import { appStateReducer } from "./reducer/storeApp";
import { ProductApi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    [ConnectApi.reducerPath]: ConnectApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [WalletApi.reducerPath]: WalletApi.reducer,
    [PublicApi.reducerPath]: PublicApi.reducer,
    [AppApi.reducerPath]: AppApi.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    windowStateReducer: windowStateReducer,
    userStateReducer: userStateReducer,
    walletStateRducer: walletStateReducer,
    jarStateReducer: jarStateReducer,
    socketStateReducer: socketStateReducer,
    appStateReducer: appStateReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      ConnectApi.middleware,
      ProductApi.middleware,
      UserApi.middleware,
      WalletApi.middleware,
      PublicApi.middleware,
      AppApi.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
