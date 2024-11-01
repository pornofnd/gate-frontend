import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response } from "type/Response";


export const UserApi=createApi({
    reducerPath:"UserApi",
    tagTypes:['User'],
    baseQuery:fetchBaseQuery({baseUrl:"https://gate.pornofnd.com/api/user/user/"}),
    endpoints:(build)=>({
        getMe: build.query<Response<any>,void>({
            query: () => ({
                url: 'get-me',
                headers:{
                   Authorization:'5197fdbc-fcdc-4a88-ae09-3b0a3df673a5'
                }
            }),
        }),
    })
})

export const {useGetMeQuery}=UserApi;