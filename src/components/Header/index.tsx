import img from "/public/img/Logo.svg";
import "./header.scss";
import TelegramAuth from "components/TelegramAuth";
import WalletConnectModal from "components/WalletModal";
// import telegramAIcon from "public/img/Telegram_2019_Logo.svg"
// import { useState } from "react";
// import AlertTelegram from "components/AlertTelegram";
export default function Header() {
  // const [alertTg,setAlertTg]=useState<boolean>(false);
  // const handlerStateTg=()=>{
  //   setAlertTg(!alertTg);
  // }
  return (
    <header className="header">
     
      <section className="logoContainer">
        <img className="headerLogo" src={img} alt="" />
        <h1 className="headerTitle">
          P<p className="headerDot">.</p>Gate
        </h1> <WalletConnectModal />
      </section>
      <section>
        <TelegramAuth />
        <button ></button>
        {/* <button className="logoTg" onClick={handlerStateTg}>
          <h1>log in</h1>
          <img src={telegramAIcon} alt="" />
        </button> */}
        {/* { alertTg ? <AlertTelegram/> :null} */}
      </section>
    </header>
  );
}
