import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ConnectApi = createApi({
    reducerPath: 'ConnectApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://gate.pornofnd.com/api/web/auth/ton/'}),
    endpoints: (build) => ({
        getWallets: build.mutation<Response,void>({
            query: () => ({
                url: 'get-wallets',
                method: 'POST',
                body:'',
            }),
        }),
    })
});

export const {useGetWalletsMutation} = ConnectApi;