import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IWallet } from 'type/wallets';


export const ConnectApi = createApi({
    reducerPath: 'ConnectApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://gate.pornofnd.com/api/user/auth/ton/'}),
    endpoints: (build) => ({
        getWallets: build.query<Response,void>({
            query: () => ({
                url: 'get-wallets',
            }),
        }),
        getMe: build.query<Response,void>({
            query: () => ({
                url: '',
                headers:{
                    auth:''
                }
            }),
        }),
        generateWalletAuth: build.mutation<Response, { walletData: IWallet,websocket_id : string }>({
            query: ({ walletData, websocket_id }) => ({
                url: 'generate-connection-url',
                method: 'POST',
                body: {
                    ws_type: "auth",
                    session_id: localStorage.getItem("sessionId"),
                    ws_id: websocket_id,
                    wallet: walletData,
                }
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




    })
});

export const {useGetWalletsQuery,useGenerateWalletAuthMutation} = ConnectApi;