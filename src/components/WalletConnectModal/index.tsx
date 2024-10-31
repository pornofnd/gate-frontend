import { useEffect } from "react"
import "./walletConnectModal.scss"
import Intersect from "/public/img/Intersect.svg"
import { useGetWalletsQuery } from "../../store/ConnectAuth"

import { Response } from "type/Response";
import ItemWallet from "components/ItemWallet";
import { windowStateActions } from "../../store/reducer/stateModal";
import { useDispatch } from "react-redux";


export default function WalletConnectModal() {
   
    const  { data }=useGetWalletsQuery() as Response
    const dispatch = useDispatch();
const handlerClose=()=>{
  dispatch(windowStateActions.changeState());
}
useEffect(() => {
   const TmaAuth=localStorage.getItem('token');
   const sessionId=localStorage.getItem('sessionId');
   let session;
   let port;
   if(sessionId){
    session=sessionId;
  }
    if(TmaAuth){
      session=TmaAuth;
    }
    if(session){
        port =`wss://gate.pornofnd.com/ws/user/auth?session_id=${session}`
    }
    else{
      port ='wss://gate.pornofnd.com/ws/user/auth?session_id'
    }
      const ws = new WebSocket(port);
      ws.onmessage = (event) => {
       const res=JSON.parse(event.data)
       console.log(res)
       if(!sessionId){
        localStorage.setItem("sessionId",res.session_id)
        dispatch(windowStateActions.websocketIdSave(res.websocket_id))
       }
      };
      ws.onerror = (error) => {
        console.log("aaa")
        console.error('WebSocket Error:', error);
      };
      return () => {
        ws.close();
      };
    }, []);

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
