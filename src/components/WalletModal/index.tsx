
import { useDispatch } from "react-redux";
import "./walletModal.scss"
import WalletConnectModal from "components/WalletConnectModal"
import { useEffect } from "react";
import { windowStateActions } from "../../store/reducer/stateModal";
// import { useGetMeQuery } from "../../store/api/user";
// import { Response } from "type/Response";
export default function WalletModal() {
  const dispatch = useDispatch();
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
     console.log(port)
       const ws = new WebSocket(port);
       ws.onmessage = (event) => {
        const res=JSON.parse(event.data)
        dispatch(windowStateActions.websocketIdSave(res.websocket_id))
        if(!sessionId||sessionId=="undefined"){
         localStorage.setItem("sessionId",res.session_id)
        }
        if(res.type=='authorized'){
         localStorage.setItem("token",res.auth_token)
        }
       };
       ws.onerror = (error) => {
         console.error('WebSocket Error:', error);
       };
       return () => {
         ws.close();
       };
     }, []);


    //  const {data}=useGetMeQuery() as Response<string>
    //  console.log(data)
  return (
    <div className="WalletModal">
           
       <div className="WalletModalContent">
        <WalletConnectModal/>
       </div>
        </div>
     
  );
}
