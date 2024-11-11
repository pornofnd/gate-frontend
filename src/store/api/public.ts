import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICurrencies, Response } from "type/Response";

export const PublicApi = createApi({
  reducerPath: "PublicApi",
  tagTypes: ["Public"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gate.pornofnd.com/api/public/currencies/",
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
    getCurrencies: build.query<Response<ICurrencies, unknown>, void>({
      query: () => ({
        url: "get",
      }),
    }),
  }),
});

export const {useGetCurrenciesQuery} = PublicApi;
