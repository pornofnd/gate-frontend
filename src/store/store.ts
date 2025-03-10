import { configureStore } from "@reduxjs/toolkit";
import { ConnectApi } from "./api/connectAuthApi";
import { windowStateReducer } from "./reducer/stateModal";
import { UserApi } from "./api/userApi";
import { userStateReducer } from "./reducer/stateUser";
import { WalletApi } from "./api/walletApi";
import { jarStateReducer } from "./reducer/stateJar";
import { walletStateReducer } from "./reducer/stateWallet";
import { PublicApi } from "./api/public";
import { persistStore, persistReducer } from "redux-persist";
import { socketStateReducer } from "./reducer/stateSocket";
import { AppApi } from "./api/appApi";
import { appStateReducer } from "./reducer/storeApp";
import { ProductApi } from "./api/productApi";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux'
import { tokenStateReducer } from "./reducer/stateToken";
const persistConfig = {
  key: "token",
  storage,
  whitelist: ["tokenStateReducer"],
};


const rootReducer = combineReducers({
  appStateReducer,
  windowStateReducer,
  userStateReducer,
  walletStateReducer,
  jarStateReducer,
  socketStateReducer,
  tokenStateReducer,
  [ConnectApi.reducerPath]: ConnectApi.reducer,
  [UserApi.reducerPath]: UserApi.reducer,
  [WalletApi.reducerPath]: WalletApi.reducer,
  [PublicApi.reducerPath]: PublicApi.reducer,
  [AppApi.reducerPath]: AppApi.reducer,
  [ProductApi.reducerPath]: ProductApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware:
    (getDefaultMiddlware) =>
      getDefaultMiddlware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        }
      }).concat(
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
export const persistor = persistStore(store);
