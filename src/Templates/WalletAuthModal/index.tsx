import { useDispatch } from "react-redux";
import "./walletAuthModal.scss";
import WalletConnectModal from "Organisms/WalletConnectModal";
import { useEffect, useState } from "react";
import { windowStateActions } from "store/reducer/stateModal";

import { IUserTelegram, IUserWallet } from "type/User";
import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { useGetMeQuery } from "store/api/userApi";
import { userStateActions } from "store/reducer/stateUser";

// import  GetMeApi  from "utils/GetMeApi";

export default function WalletAuthModal() {
  const dispatch = useDispatch();
  // const userState = useSelector((state :RootState) => state.userStateReducer);
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const TmaAuth = localStorage.getItem("token");
    const sessionId = localStorage.getItem("sessionId");
    let session;
    let port;
    if (sessionId) {
      session = sessionId;
    }
    if (TmaAuth) {
      session = JSON.parse(TmaAuth);
      console.log("TMA");
    }
    if (session) {
      port = `wss://gate.pornofnd.com/ws/user/auth?session_id=${session}`;
    } else {
      port = "wss://gate.pornofnd.com/ws/user/auth?session_id";
    }
    console.log(port);
    const ws = new WebSocket(port);
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      dispatch(windowStateActions.websocketIdSave(res.websocket_id));

      if (!sessionId && res.session_id) {
        localStorage.setItem("sessionId", res.session_id);
      }
      if (res.type == "authorized") {
        async function saveTokenAndFetchData() {
          await localStorage.setItem("token", JSON.stringify(res.auth_token));
          setIsAuthorized(true);
        }

        saveTokenAndFetchData();
      }
    };
    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };
    return () => {
      ws.close();
    };
  }, []);

  const { data, error } = useGetMeQuery(undefined, {
    skip: !isAuthorized,
  }) as Response<IUserWallet | IUserTelegram, IError<IGetMError>>;

  useEffect(() => {
    if (error && error.data?.detail === "Token is not a valid UUID") {
      localStorage.removeItem("token");
      return;
    }

    if (data) {
      console.log(data);
      dispatch(userStateActions.changeUserState(data.data));
      dispatch(windowStateActions.changeState());
      dispatch(windowStateActions.authConnect());
    }
  }, [data, error, dispatch]);

  return (
    <div className="WalletAuthModal">
      <div className="WalletAuthModalContent">
        <WalletConnectModal />
      </div>
    </div>
  );
}
