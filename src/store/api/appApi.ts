import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppResponseData } from "type/App";
import { IJarCreate } from "type/Jar";
import { Response } from "type/Response";

export const AppApi = createApi({
  reducerPath: "AppApi",
  tagTypes: ["App"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gate.pornofnd.com/api/user/apps/",
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
    appCreate: build.mutation<Response<IAppResponseData, unknown>, IJarCreate>({
      query: (data) => ({
        url: "create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useAppCreateMutation} = AppApi;
