import { useEffect } from 'react'


export default function CreateJar() {
    useEffect(()=>{
        const tokenStr=localStorage.getItem('token');
        let token;
        if(tokenStr){
            token =JSON.parse(tokenStr);
        }
        const port=`wss://gate.pornofnd.com/ws/user/webpage?auth_token=${token}`
        const ws = new WebSocket(port);
        ws.onmessage = (event) => {
         const res=JSON.parse(event.data)
         console.log(res)
     
       
       
         
          
        
        }
        ws.onerror = (error) => {
          console.error('WebSocket Error:', error);
        };
        return () => {
          ws.close();
        };

    },[])
  return (
    <div>CreateJar</div>
  )
}
