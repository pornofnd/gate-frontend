import { LoginButton } from "@telegram-auth/react";

import { useAuthTelegramMutation } from "../../store/api/ConnectAuthApi";
import { ITelegramResponse, Response } from "type/Response";

// import useGetMeApi from "utils/useGetMeApi";

interface IToken {
  data:string;
}
export default function TelegramAuth() {
  const [authTelegram]=useAuthTelegramMutation()
  return (
    <LoginButton
      // @pornogatetestbot
      botUsername="pornogatetestbot"
      
      onAuthCallback={async (res) => {
        const authData: ITelegramResponse = {
            auth_date: res.auth_date,
             id: res.id,
             first_name: res.first_name,
             hash: res.hash,
            photo_url: res.photo_url,
           username: res.username,
      }
        const {data}=await authTelegram(authData) as Response<IToken,unknown>
        if(data?.data){
          const token = JSON.stringify(data.data);
          localStorage.setItem("token", token);
          // useGetMeApi()
      }
          // .then((res) => {
          //   console.log(res);

          //   localStorage.setItem("token",JSON.stringify(res.data));
          // });
      }}
      buttonSize="large" // "large" | "medium" | "small"
      cornerRadius={5} // 0 - 20
      showAvatar={false} // true | false
      lang="en"
    />
  );
}
{
  /* <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="pornoGateBot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>
  <script type="text/javascript">
    function onTelegramAuth(user) {
      alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
    }
  </script> */
}
