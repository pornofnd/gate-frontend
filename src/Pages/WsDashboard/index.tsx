import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { socketStateActions } from "store/reducer/stateSocket";
export default function WsDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    const tokenStr = localStorage.getItem("token");
    let token;
    if (tokenStr) {
      token = JSON.parse(tokenStr);
    }
    const port = `wss://gate.pornofnd.com/ws/user/webpage?auth_token=${token}`;
    const ws = new WebSocket(port);
    ws.onmessage = (event) => {
      console.log(event)
      const res = JSON.parse(event.data);
      console.log(res);
      dispatch(socketStateActions.addWebsocketId(res.websocket_id));
    };
    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };
    return () => {
      ws.close();
    };
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}
