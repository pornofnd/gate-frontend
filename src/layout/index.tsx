import { FC, ReactNode } from "react";
import "./layout.scss";
import Header from "components/Header";
// import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import WalletAuthModal from "components/modalComponents/WalletAuthModal";
import WalletModal from "components/modalComponents/WalletModal";
import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { IUserTelegram, IUserWallet } from "type/User";

import useGetMeApi from "utils/useGetMeApi";

import { useGetMeQuery } from "store/api/userApi";
interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  const windowState = useSelector((state :RootState) => state.windowStateReducer.windowState);
  const authWindow = useSelector((state :RootState) => state.windowStateReducer.authWindow);
  const auth = useSelector((state :RootState) => state.windowStateReducer.auth);
  if (localStorage.getItem("token")) {   
    const {data,error} = useGetMeQuery() as Response<IUserWallet|IUserTelegram, IError<IGetMError>>;

  const dataInfo={
    data:data,
    error:error
  }
   useGetMeApi(dataInfo)
}
  return ( 
  // <TonConnectUIProvider manifestUrl="https://gate-frontend-rose.vercel.app/tonconnect-manifest.json">
    <main className="background">
       {windowState&& !auth ? <WalletAuthModal /> : null}
       {authWindow&& auth ? <WalletModal />:null}
      <Header />
      {children}
    </main>
    // </TonConnectUIProvider>
  );
};
