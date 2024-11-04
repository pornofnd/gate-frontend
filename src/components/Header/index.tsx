import img from "/public/img/Logo.svg";
import "./header.scss";
import TelegramAuth from "components/TelegramAuth";

import { useDispatch, useSelector } from "react-redux";
import { windowStateActions } from "../../store/reducer/stateModal";
import { RootState } from "store/store";



import useGetMeApi from "utils/useGetMeApi";
import { useEffect } from "react";


export default function Header() {
  const needsUserFetch = useSelector((state :RootState) => state.userStateReducer.needsUserFetch);
  const dispatch = useDispatch();
  const windowState = useSelector((state :RootState) => state.windowStateReducer.windowState);
  const hanlderStateModal=()=>{
    dispatch(windowStateActions.changeState());
  }
  const token = localStorage.getItem("token");

  
  if (token) {
     useGetMeApi()
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
