import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPorduct } from "type/Product";
import { Response } from "type/Response";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gate.pornofnd.com/api/user/products/",
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
    getListPorduct: build.query<Response<IPorduct[], unknown>, string>({
      query: (url: string) => ({
        url: `get-list?app_id=${url}`,
      }),
    }),
  }),
});

export const {useGetListPorductQuery} = ProductApi;
