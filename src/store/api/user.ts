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
                   Authorization:'b322c834-0092-498f-b0c3-fb94ecc287a5'
                }
            }),
        }),
    })
})

export const {useGetMeQuery}=UserApi;