
import { useDispatch, useSelector } from "react-redux";
import "./walletModal.scss"
import WalletConnectModal from "components/WalletConnectModal"
import { useEffect, useState } from "react";
import { windowStateActions } from "store/reducer/stateModal";
import useGetMeApi from "../../utils/useGetMeApi";
import { IUserTelegram, IUserWallet } from "type/User";
import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { useGetMeQuery } from "store/api/user";
import { userStateActions } from "store/reducer/stateUser";

// import  GetMeApi  from "utils/GetMeApi";

export default function WalletModal() {
  const dispatch = useDispatch();
  // const userState = useSelector((state :RootState) => state.userStateReducer);
  const [isAuthorized, setIsAuthorized] = useState(false);
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
       console.log("TMA")
     }
     if(session){
         port =`wss://gate.pornofnd.com/ws/user/auth?session_id=${session}`
     }
     else{
       port='wss://gate.pornofnd.com/ws/user/auth?session_id'
     }
     console.log(port)
       const ws = new WebSocket(port);
       ws.onmessage = (event) => {
        const res=JSON.parse(event.data)
        dispatch(windowStateActions.websocketIdSave(res.websocket_id))
    
        if(!sessionId&&res.session_id){
     
         localStorage.setItem("sessionId",res.session_id)
        }
        if(res.type=='authorized'){ 
       
          async function saveTokenAndFetchData() {
           await localStorage.setItem("token", JSON.stringify(res.auth_token));
           setIsAuthorized(true)
          }
        
          saveTokenAndFetchData();
       
        }
       };
       ws.onerror = (error) => {
         console.error('WebSocket Error:', error);
       };
       return () => {
         ws.close();
       };
     }, []);
    
      const { data, error } = useGetMeQuery(undefined, { skip:!isAuthorized }) as Response<IUserWallet | IUserTelegram, IError<IGetMError>>;

      useEffect(() => {
        if (error && error.data?.detail === "Token is not a valid UUID") {
          localStorage.removeItem("token");
          return;
        }
    
        if (data) {
          console.log(data)
          dispatch(userStateActions.changeUserState(data.data));
        }
      }, [data, error, dispatch]);
     
  return (
    <div className="WalletModal">
           
       <div className="WalletModalContent">
       
        <WalletConnectModal/>
      
       </div>
        </div>
     
  );
}
