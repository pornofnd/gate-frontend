import "./walletConnectModal.scss"
import Intersect from "/public/img/Intersect.svg"
import { useGetWalletsQuery } from "../../store/api/ConnectAuth"

import { Response } from "type/Response";
import ItemWallet from "components/ItemWallet";
import { windowStateActions } from "../../store/reducer/stateModal";
import { useDispatch } from "react-redux";
import { IWallet } from "type/wallets";


export default function WalletConnectModal() {
   
    const  { data }=useGetWalletsQuery() as Response<IWallet[],unknown>
    const dispatch = useDispatch();
const handlerClose=()=>{
  dispatch(windowStateActions.changeState());
}


  return (
    <article className='walletConnectModal'>
        <section className='walletConnectModalHeadSection'>
            <h1>Connect your wallet</h1>
            <img src={Intersect} alt="" onClick={handlerClose} />
        </section>
        <section className="walletConnectModalWallets">
            {data?.data.map((elem,key)=>[
               <ItemWallet elem={elem} key={key}/>
            ])}
        </section>
    </article>
  )
}
