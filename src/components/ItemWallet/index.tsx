import { IWallet } from 'type/wallets'
import "./itemWallet.scss"

import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useGenerateWalletAuthMutation } from '../../store/ConnectAuth';
export default function ItemWallet({elem}:{elem:IWallet}) {
  const websocketId = useSelector((state :RootState) => state.windowStateReducer.websocket_id);
  const [generateWalletAuth]=useGenerateWalletAuthMutation()
    const handlerChooseWallet=async(elem:IWallet)=>{
      if(websocketId){
         const {data}=await generateWalletAuth({walletData:elem, websocket_id:websocketId})
      console.log(data)
      }
    }
  
  
  return (
    <div onClick={() =>handlerChooseWallet(elem)} className="walletConnectModalWalletsItem">
                   <img src={elem.image} alt="" />
                    <h1>{elem.name}</h1>
   </div>
  )
}
