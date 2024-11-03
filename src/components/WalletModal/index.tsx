
import { useDispatch, useSelector } from "react-redux";
import "./walletModal.scss"
import WalletConnectModal from "components/WalletConnectModal"
import { useEffect } from "react";
import { windowStateActions } from "store/reducer/stateModal";
import useGetMeApi from "utils/useGetMeApi";
import { RootState } from "store/store";
// import  GetMeApi  from "utils/GetMeApi";

export default function WalletModal() {
  const dispatch = useDispatch();
  const userState = useSelector((state :RootState) => state.userStateReducer);
  console.log(userState)

  useEffect(() => {
    const TmaAuth=localStorage.getItem('token');
    const sessionId=localStorage.getItem('sessionId');
    let session;
    let port;
    if(sessionId){
     session=sessionId;
   }
     if(TmaAuth){
       session=JSON.parse(TmaAuth);
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
        console.log(sessionId)
        if(!sessionId||JSON.stringify(sessionId)=="undefined"){
         localStorage.setItem("sessionId",res.session_id)
        }
        if(res.type=='authorized'){
         localStorage.setItem("token",JSON.stringify(res.auth_token))
         useGetMeApi()
        }
       };
       ws.onerror = (error) => {
         console.error('WebSocket Error:', error);
       };
       return () => {
         ws.close();
       };
     }, []);


     
  return (
    <div className="WalletModal">
           
       <div className="WalletModalContent">
        <WalletConnectModal/>
       </div>
        </div>
     
  );
}
