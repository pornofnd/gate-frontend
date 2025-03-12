import { LoginButton } from "@telegram-auth/react";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useAuthTelegramMutation } from "store/api/connectAuthApi";
import { ITelegramResponse, IToken, Response } from "type/Response";
import "./TelegramAuth.scss";
import TgImg from "public/img/Telegram_2019_Logo.svg";
import { IUserTelegram, IUserWallet } from "type/User";
import { useGetMeQuery } from "store/api/userApi";
import { userStateActions } from "store/reducer/stateUser";
import { windowStateActions } from "store/reducer/stateModal";
import { useDispatch } from "react-redux";
import { IError, IGetMError } from "type/Error";
import { tokenStateActions } from "store/reducer/stateToken";
const TelegramAuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authTelegram] = useAuthTelegramMutation();
  const dispatch = useDispatch();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { data, error, isLoading } = useGetMeQuery(undefined, {
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
    <div>
      <button className="buttonTelegramLogin" onClick={openModal}>
        Log in
        <img src={TgImg} alt="" />
      </button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Авторизация через Telegram"
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            display: "flex",
            flexDirection: " column",
            justifyContent: "center",
            alignItems: "center",
            transform: "translate(-50%, -50%)",
            width: "400px",
            padding: "20px",
            borderRadius: "10px",
          },
        }}
      >
        <h2>Авторизация через Telegram</h2>
        <div id="telegram-widget-container">
          <LoginButton
            // @pornogatetestbot
            botUsername="porno_gate_bot"
            onAuthCallback={async (res) => {
              const authData: ITelegramResponse = {
                auth_date: res.auth_date,
                id: res.id,
                first_name: res.first_name,
                hash: res.hash,
                photo_url: res.photo_url,
                username: res.username,
              };
              const { data } = (await authTelegram(authData)) as Response<
                IToken,
                unknown
              >;
              if (data?.data) {
                const token = JSON.stringify(data.data);
                localStorage.setItem("token", token);
                dispatch(tokenStateActions.addToken(token))
                closeModal();
                setIsAuthorized(true);
              }
            }}
            buttonSize="large"
            cornerRadius={5}
            showAvatar={false}
            lang="en"
          />
        </div>
        <button onClick={closeModal}>Закрыть</button>
      </ReactModal>
    </div>
  );
};

export default TelegramAuthModal;
