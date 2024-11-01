import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response } from "type/Response";

const tokenUser=localStorage.getItem('token')? localStorage.getItem('token'):undefined
export const UserApi=createApi({
    reducerPath:"UserApi",
    tagTypes:['User'],
    baseQuery:fetchBaseQuery({baseUrl:"https://gate.pornofnd.com/api/user/user/",
        prepareHeaders: (headers) => {
            if (tokenUser) {
                headers.set('Authorization', tokenUser);
            }
            return headers;
        },
    }),
    endpoints:(build)=>({
        getMe: build.query<Response<any>,void>({
            query: () => ({
                url: 'get-me'
            }),
        }),
    })
})

export const {useGetMeQuery}=UserApi;