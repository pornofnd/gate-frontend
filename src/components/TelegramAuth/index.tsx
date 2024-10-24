import { LoginButton } from "@telegram-auth/react";
import axios from "axios";

export default function TelegramAuth() {
  return (
    <LoginButton
    // @pornogatetestbot
      botUsername="PornoGate Test"
      //   authCallbackUrl="https://gate.pornofnd.com/api/web/auth/telegram"
      onAuthCallback={async (data) => {
        console.log(data);
        await axios
          .post("https://gate.pornofnd.com/api/web/auth/telegram", {
            data_onauth: {
              auth_date: data.auth_date,
              id: data.id,
              first_name: data.first_name,
              hash: data.hash,
              photo_url: data.photo_url,
              username: data.username,
            },
          })
          .then((res) => {
            console.log(res);
          });
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
