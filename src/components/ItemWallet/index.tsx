import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';

import { IWallet } from 'type/wallets'
import "./itemWallet.scss"
import { useEffect } from 'react';
export default function ItemWallet({elem,key}:{elem:IWallet,key:number}) {
    const [tonConnectUI] = useTonConnectUI();
    const userFriendlyAddress = useTonAddress();
    // const rawAddress = useTonAddress(false);
    useEffect(()=>{
      
localStorage.setItem("tokenAddress",userFriendlyAddress);

    },[userFriendlyAddress])
  return (
    <div onClick={() => tonConnectUI.openSingleWalletModal(elem.name)} className="walletConnectModalWalletsItem" key={key}>
                   
                    <img src={elem.image} alt="" />
                    <h1>{elem.name}</h1>
   </div>
  )
}
