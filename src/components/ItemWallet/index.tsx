import { IWallet } from 'type/wallets'
import "./itemWallet.scss"

import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useGenerateWalletAuthMutation } from '../../store/ConnectAuth';
import { Response } from 'type/Response';
export default function ItemWallet({elem}:{elem:IWallet}) {
  const websocketId = useSelector((state :RootState) => state.windowStateReducer.websocket_id);
  //  const navigate = useNavigate();
  const [generateWalletAuth]=useGenerateWalletAuthMutation()
    const handlerChooseWallet=async(elem:IWallet)=>{
      console.log(websocketId)
      if(websocketId){
        console.log("click")
         const {data}=await generateWalletAuth({walletData:elem, websocket_id:websocketId}) as Response<string>
         console.log(data)
      if(data){
        window.open(data.data, '_blank');
      }
      }
    }
  
  
  return (
    <div onClick={() =>handlerChooseWallet(elem)} className="walletConnectModalWalletsItem">
                   <img src={elem.image} alt="" />
                    <h1>{elem.name}</h1>
   </div>
  )
}
