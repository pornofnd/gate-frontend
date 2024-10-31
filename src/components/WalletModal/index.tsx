import { TonConnectUIProvider } from "@tonconnect/ui-react";
import "./walletModal.scss"
import WalletConnectModal from "components/WalletConnectModal"
export default function WalletModal() {
 

  return (
    <div className="WalletModal">
            <TonConnectUIProvider manifestUrl="https://gate-frontend-rose.vercel.app/tonconnect-manifest.json">
       <div className="WalletModalContent">
        <WalletConnectModal/>
       </div></TonConnectUIProvider>
        </div>
     
  );
}
