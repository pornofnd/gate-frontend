import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITelegramResponse, IToken, Response } from 'type/Response';

import { IWallet } from 'type/wallets';

const tokenUser=localStorage.getItem('token')?JSON.stringify(localStorage.getItem('token')):undefined
export const ConnectApi = createApi({
    reducerPath: 'ConnectApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://gate.pornofnd.com/api/user/auth/ton/'}),
    endpoints: (build) => ({
        getWallets: build.query<Response<IWallet[]>,void>({
            query: () => ({
                url: 'get-wallets',
            }),
        }),
       generateWalletAuth: build.mutation<Response<string>, { walletData: IWallet,websocket_id : string }>({
            query: ({ walletData, websocket_id }) => ({
                url: 'generate-connection-url',
                method: 'POST',
                headers:{
                    Authorization:tokenUser,
                   },
                body: {
                    ws_type: "auth",
                    session_id: localStorage.getItem("sessionId"),
                    ws_id: websocket_id,
                    wallet: walletData,
                }
            }),
        }),
        authTelegram:build.mutation<Response<IToken>,  ITelegramResponse>({
            query:(data)=>({
                url: 'telegram',
                method: 'POST',
                headers:{
                  Authorization:tokenUser
                 },
                body: {
                    data_onauth: {
                        auth_date: data.auth_date,
                        id: data.id,
                        first_name: data.first_name,
                        hash: data.hash,
                       photo_url: data.photo_url,
                      username: data.username,
                },  
                }
            })
        })
       
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

export const {useGetWalletsQuery,useGenerateWalletAuthMutation,useAuthTelegramMutation} = ConnectApi;