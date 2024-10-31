import img from "/public/img/Logo.svg";
import "./header.scss";
import TelegramAuth from "components/TelegramAuth";

import { useDispatch, useSelector } from "react-redux";
import { windowStateActions } from "../../store/reducer/stateModal";
import { RootState } from "store/store";

// import telegramAIcon from "public/img/Telegram_2019_Logo.svg"
// import { useState } from "react";
// import AlertTelegram from "components/AlertTelegram";
export default function Header() {
  // const [alertTg,setAlertTg]=useState<boolean>(false);
  // const handlerStateTg=()=>{
  //   setAlertTg(!alertTg);
  // }
  const dispatch = useDispatch();
  const windowState = useSelector((state :RootState) => state.windowStateReducer.windowState);
  const hanlderStateModal=()=>{
    dispatch(windowStateActions.changeState());
  }
  return (
    <header className="header">
     
      <section className="logoContainer">
        <img className="headerLogo" src={img} alt="" />
        <h1 className="headerTitle">
          P<p className="headerDot">.</p>Gate
        </h1> 
      </section>
      <section className="headerButtonSection">
        {!windowState?
        <>
        <TelegramAuth />
        <button className="headerButtonWallet" onClick={hanlderStateModal}>
          
          <h5>Connect Wallet</h5>
        </button>
        </>:
        null}
        {/* <button className="logoTg" onClick={handlerStateTg}>
          <h1>log in</h1>
          <img src={telegramAIcon} alt="" />
        </button> */}
        {/* { alertTg ? <AlertTelegram/> :null} */}
      </section>
    </header>
  );
}
