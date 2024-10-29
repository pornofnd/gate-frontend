import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

export const {useGetWalletsQuery} = ConnectApi;