import { useEffect, useState } from "react"
import "./walletConnectModal.scss"
import Intersect from "/public/img/Intersect.svg"
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
     }}
    get()
    },[])
  return (
    <article className='walletConnectModal'>
        <section className='walletConnectModalHeadSection'>
            <h1>Connect your wallet</h1>
            <img src={Intersect} alt="" />
        </section>
        <section className="walletConnectModalWallets">
            {wallets?.map((elem)=>[
                <div className="walletConnectModalWalletsItem">
                    <img src={elem.image} alt="" />
                    <h1>{elem.name}</h1>
                </div>
            ])}
        </section>
    </article>
  )
}
