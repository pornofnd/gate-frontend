import img from "/public/img/Logo.svg";
import "./header.scss";
import TelegramAuth from "components/TelegramAuth";

import { useDispatch, useSelector } from "react-redux";
import { windowStateActions } from "../../store/reducer/stateModal";
import { RootState } from "store/store";
import HeaderAuthUser from "components/HeaderAuthUser";

import WalletAuthModal from "components/modalComponents/WalletAuthModal";
import WalletModal from "components/modalComponents/WalletModal";
export default function Header() {
  const dispatch = useDispatch();
  
  const authWindow = useSelector((state :RootState) => state.windowStateReducer.authWindow);
  const auth = useSelector((state :RootState) => state.windowStateReducer.auth);
  const windowState = useSelector(
    (state: RootState) => state.windowStateReducer.windowState
  );
  const userState = useSelector(
    (state: RootState) => state.userStateReducer.data
  );
  const hanlderStateModal = () => {
    dispatch(windowStateActions.changeState());
  };

  //   if (localStorage.getItem("token")) {
  //  const {data,error} = useGetMeQuery() as Response<IUserWallet|IUserTelegram, IError<IGetMError>>;

  //     const dataInfo={
  //       data:data,
  //       error:error
  //     }
  //      useGetMeApi(dataInfo)
  //   }

  return (
    <header className="header">
      {windowState&& !auth ? <WalletAuthModal /> : null}
      {authWindow&& auth ? <WalletModal />:null}
      <section className="logoContainer">
        <img className="headerLogo" src={img} alt="" />
        <h1 className="headerTitle">
          P<p className="headerDot">.</p>Gate
        </h1>
      </section>
      <section>
        {userState.id == "" ? (
          !windowState ? (
            <article className="headerButtonSection">
              <TelegramAuth />
              <button
                className="headerButtonWallet"
                onClick={hanlderStateModal}
              >
                <h5>Connect Wallet</h5>
              </button>
            </article>
          ) : null
        ) : (
          <HeaderAuthUser />
        )}
        {/* <button className="logoTg" onClick={handlerStateTg}>
          <h1>log in</h1>
          <img src={telegramAIcon} alt="" />
        </button> */}
        {/* { alertTg ? <AlertTelegram/> :null} */}
      </section>
    </header>
  );
}
