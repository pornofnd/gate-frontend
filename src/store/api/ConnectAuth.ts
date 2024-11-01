import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITelegramResponse, IToken, Response } from 'type/Response';

import { IWallet } from 'type/wallets';
const loacl=localStorage.getItem('token')
const tokenUser=loacl? JSON.parse(loacl):undefined
export const ConnectApi = createApi({
    reducerPath: 'ConnectApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://gate.pornofnd.com/api/user/auth/',
        prepareHeaders: (headers) => {
            if (tokenUser) {
                headers.set('Authorization', tokenUser);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({
        getWallets: build.query<Response<IWallet[]>,void>({
            query: () => ({
                url: 'ton/get-wallets',
            }),
        }),
       generateWalletAuth: build.mutation<Response<string>, { walletData: IWallet,websocket_id : string }>({
            query: ({ walletData, websocket_id }) => ({
                url: 'ton/generate-connection-url',
                method: 'POST',
              
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