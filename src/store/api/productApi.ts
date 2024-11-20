import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ProductApi = createApi({
  reducerPath: "ProductApi",
  tagTypes: ["Product"],
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
    // getCurrencies: build.query<Response<>, void>({
    //   query: () => ({
    //     url: "get",
    //   }),
    // }),
  }),
});

export const {} = ProductApi;