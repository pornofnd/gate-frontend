import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response } from "type/Response";
import { IUserTelegram, IUserWallet } from 'type/User';



export const UserApi = createApi({
  reducerPath: "UserApi",
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gate.pornofnd.com/api/user/user/",
    prepareHeaders: (headers) => {
      const local = localStorage.getItem('token');
      let tokenUser: string | undefined;

      if (local && typeof local == 'string') {
        try {
          tokenUser = JSON.parse(local);
        } catch (e) {
          tokenUser = local;
          console.log(e);
        }
      }

      if (tokenUser) {
        headers.set('Authorization', tokenUser);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getMe: build.query<Response<IUserWallet | IUserTelegram, unknown>, void>({
      query: () => ({
        url: 'get-me'
      }),
    }),
  })
})

export const { useGetMeQuery } = UserApi;
