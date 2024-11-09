import { LoginButton } from "@telegram-auth/react";
import { useState } from "react";
import ReactModal from "react-modal";
import { useAuthTelegramMutation } from "store/api/ConnectAuthApi";
import { ITelegramResponse, IToken, Response } from "type/Response";
import "./TelegramAuth.scss"
import TgImg from 'public/img/Telegram_2019_Logo.svg'
const TelegramAuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [authTelegram]=useAuthTelegramMutation()
 
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

 

  return (
    <div>
      <button  className="buttonTelegramLogin" onClick={openModal}>Log in
        <img src={TgImg} alt="" />
      </button>

      
      <ReactModal
        isOpen={isModalOpen}       
        onRequestClose={closeModal}
        contentLabel="Авторизация через Telegram"
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '20px',
            borderRadius: '10px',
          },
        }}
      >
        <h2>Авторизация через Telegram</h2>
        <div id="telegram-widget-container">
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
          closeModal()
          // useGetMeApi()
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