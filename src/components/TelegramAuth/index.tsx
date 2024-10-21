import { LoginButton } from "@telegram-auth/react";

export default function TelegramAuth() {
  return (
    <LoginButton
      botUsername="pornogatetestbot"
      authCallbackUrl="https://gate.pornofnd.com/api/web/auth/telegram"
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
