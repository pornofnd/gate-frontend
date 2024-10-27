import { useEffect, useState } from "react"
import "./walletConnectModal.scss"
import { useGetWalletsMutation } from "../../store/ConnectAuth"
import { IWallet } from "type/wallets";
import { Response } from "type/Response";

export default function WalletConnectModal() {
  const [wallets, setWallets] = useState<IWallet[]|undefined>();
  const [getWallets]=useGetWalletsMutation()
  useEffect(()=>{
  const get=async()=>{
    const res=await getWallets() as Response; 
   if(res.data && res.data.ok){
     setWallets(res.data.data)
   }
  }
  get()
 console.log(wallets)
  },[])

  return (
    <div className="f"> f</div>
  );
}
