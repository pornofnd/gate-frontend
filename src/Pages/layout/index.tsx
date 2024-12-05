
import "./layout.scss";
import Header from "Templates/Header";
// import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { IUserTelegram, IUserWallet } from "type/User";
import "@telegram-apps/sdk-react";
import useGetMeApi from "utils/useGetMeApi";

import { useGetMeQuery } from "store/api/userApi";
import { Outlet } from "react-router-dom";


export const Layout = () => {
  if (localStorage.getItem("token")) {
    const { data, error } = useGetMeQuery() as Response<
      IUserWallet | IUserTelegram,
      IError<IGetMError>
    >;
    console.log(error);
    if (error?.data.detail == "Invalid auth token") {
      localStorage.removeItem("token");
    }
    const dataInfo = {
      data: data,
      error: error,
    };
    useGetMeApi(dataInfo);
  }
  return (
    // <TonConnectUIProvider manifestUrl="https://gate-frontend-rose.vercel.app/tonconnect-manifest.json">
    <main className="background">
      <Header />
      <Outlet />
    </main>
    // </TonConnectUIProvider>
  );
};
