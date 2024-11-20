import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITelegramResponse, IToken, Response } from "type/Response";
import { IWallet } from "type/Wallets";

export const ConnectApi = createApi({
  reducerPath: "ConnectApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gate.pornofnd.com/api/user/auth/",
    prepareHeaders: (headers) => {
      const local = localStorage.getItem("token");
      let tokenUser: string | undefined;

      if (local && typeof local == "string") {
        try {
          tokenUser = JSON.parse(local);
        } catch (e) {
          tokenUser = local;
          console.log(e);
        }
      }

      if (tokenUser) {
        headers.set("Authorization", tokenUser);
      }
      return headers;
    },
  }),

  endpoints: (build) => ({
    getWallets: build.query<Response<IWallet[], unknown>, void>({
      query: () => ({
        url: "ton/get-wallets",
      }),
    }),
    generateWalletAuth: build.mutation<
      Response<string, unknown>,
      { walletData: IWallet; websocket_id: string }
    >({
      query: ({ walletData, websocket_id }) => ({
        url: "ton/generate-connection-url",
        method: "POST",
        body: {
          ws_type: "auth",
          session_id: localStorage.getItem("sessionId"),
          ws_id: websocket_id,
          wallet: walletData,
        },
      }),
    }),
    authTelegram: build.mutation<Response<IToken, unknown>, ITelegramResponse>({
      query: (data) => ({
        url: "telegram",
        method: "POST",
        body: {
          data_onauth: {
            auth_date: data.auth_date,
            id: data.id,
            first_name: data.first_name,
            hash: data.hash,
            photo_url: data.photo_url,
            username: data.username,
          },
        },
      }),
    }),
    tmaAuthTelgram: build.mutation<Response<IToken, unknown>, string>({
      query: (data) => ({
        url: "telegram-mini-app",
        method: "POST",
        body: {
          init_data: data,
        },
      }),
    }),
    // getMessages: build.query<any,any>({
    //     query: (channel) => `messages/${channel}`,
    //     async onCacheEntryAdded(
    //       arg,
    //       { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
    //     ) {

    //       const ws = new WebSocket('wss://gate.pornofnd.com/ws/user/auth')
    //       try {

    //       } catch {
    //         // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
    //         // in which case `cacheDataLoaded` will throw
    //       }
    //       // cacheEntryRemoved will resolve when the cache subscription is no longer active
    //       await cacheEntryRemoved
    //       // perform cleanup steps once the `cacheEntryRemoved` promise resolves
    //       ws.close()
    //     },
    //   }),
  }),
});

export const {
  useGetWalletsQuery,
  useGenerateWalletAuthMutation,
  useAuthTelegramMutation,
  useTmaAuthTelgramMutation,
} = ConnectApi;
