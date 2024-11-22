import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IJarCreate, IJarResponse } from "type/Jar";
import { Response } from "type/Response";
import { IListWallet } from "type/Wallets";

export const WalletApi = createApi({
  reducerPath: "WalletApi",
  tagTypes: ["Wallet"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gate.pornofnd.com/api/user/jars/",
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
    jarCreate: build.mutation<Response<IListWallet, unknown>, IJarCreate>({
      query: (data) => ({
        url: "create",
        method: "POST",
        body: data,
      }),
    }),
    jarGet: build.query<Response<IJarResponse, unknown>, void>({
      query: () => ({
        url: "get-list",
      }),
    }),
    jarGetOne: build.query<Response<IJarResponse, unknown>, void>({
      query: () => ({
        url: ``,
      }),
    }),
    jarCountAndBalance: build.query<Response<IJarResponse, unknown>, void>({
      query: () => ({
        url: `get-jars-count-and-total-balance`,
      }),
    }),
    
  }),
});

export const { useJarCreateMutation, useJarGetQuery,useJarCountAndBalanceQuery } = WalletApi;
