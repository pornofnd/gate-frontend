// import { useEffect } from "react";
// import io from "socket.io-client";
// export const useWebSocket = () => {
  
//     const TmaAuth = localStorage.getItem("token");
//     const sessionId = localStorage.getItem("sessionId");
//     let session = sessionId || TmaAuth;
    
//     const port = `wss://gate.pornofnd.com/ws/user/auth?session_id=  `;
//     const socket = io(`<${port}>`);
//   // ws.onopen=(event)=>{
//   //   // const res = JSON.parse(event);
//   //   console.log(event);
//   socket.on('connect', function() {
//     console.log('Соединение установлено');
//   });
  
//   socket.on('message', function(data) {
//     console.log(`Получено сообщение: ${data}`);
//   });
//   // }
//   //   ws.onmessage = (event) => {
//   //     const res = JSON.parse(event.data);
//   //     console.log(res);
      
//   //     if (!sessionId && res.session_id) {
//   //       localStorage.setItem("sessionId", res.session_id);
//   //     }
//   //   };

//   //   ws.onerror = (error) => {
//   //     console.error("WebSocket Error:", error);
//   //   };

//     return () => {
//       socket.close();
//     };
 
// };