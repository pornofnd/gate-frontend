import { FC, ReactNode } from "react";
import "./layout.scss";
import Header from "components/Header";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return ( 
  <TonConnectUIProvider manifestUrl="https://gate-frontend-rose.vercel.app/tonconnect-manifest.json">
    <main className="background">
      <Header />
      {children}
    </main>
    </TonConnectUIProvider>
  );
};
