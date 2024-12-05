import {
  miniApp,
  postEvent,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";
import TgImg from "public/img/Telegram_2019_Logo.svg";
import { useTmaAuthTelgramMutation } from "store/api/connectAuthApi";
import { Response } from "type/Response";
import { useDispatch } from "react-redux";
import { IError, IGetMError } from "type/Error";
import { IUserTelegram, IUserWallet } from "type/User";
import { useGetMeQuery } from "store/api/userApi";
import { useEffect, useState } from "react";
import { userStateActions } from "store/reducer/stateUser";
import { windowStateActions } from "store/reducer/stateModal";
export default function TmaAuth() {
  //   const lp = useLaunchParams();
  const [tmaAuthTelegram] = useTmaAuthTelgramMutation();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const dispatch = useDispatch();
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
  const hendlerAuthWithTg = async () => {
    if (
      typeof window !== "undefined" &&
      window.location.href.includes("tgWebAppData")
    ) {
      const launchParams = retrieveLaunchParams();
      if (launchParams?.initDataRaw) {
        miniApp.ready();
        postEvent("web_app_expand");
        if (launchParams.initDataRaw) {
          const { data } = await tmaAuthTelegram(launchParams.initDataRaw);
          if (data?.data) {
            const token = JSON.stringify(data.data);
            localStorage.setItem("token", token);
            setIsAuthorized(true);
          }
        }
      }
    }
  };
  return (
    <button className="buttonTelegramLogin" onClick={hendlerAuthWithTg}>
      Log in
      <img src={TgImg} alt="" />
    </button>
  );
}
