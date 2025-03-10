import { windowStateActions } from "store/reducer/stateModal";
import "./headerAuthUser.scss";
import { useDispatch, useSelector } from "react-redux";
import shopCart from "img/Header/shopping-cart-underline.svg";
import dashboardImg from "img/Header/computer-desktop.svg";
import { useEffect } from "react";
import { walletStateActions } from "store/reducer/stateWallet";
import { useGetListQuery } from "store/api/walletApi";
import { IListWallet } from "type/Wallets";
import { Response } from "type/Response";
import { RootState } from "store/store";
import StoreImg from "img/Header/home.svg";
import walletImg from "img/Header/wallet-underline.svg";
import BellImg from "img/Header/bell-alert.svg";
import { useNavHook } from "utils/navHook";
import { useLocation } from "react-router-dom";

export default function HeaderAuthUser() {
  const location = useLocation();
  const dispatch = useDispatch();
  const userWallet = useSelector((state: RootState) => state.walletStateReducer);
  const navigation = useNavHook();
  if (localStorage.getItem("token")) {
    const { data, error } = useGetListQuery() as Response<
      IListWallet[],
      unknown
    >;

    useEffect(() => {
      if (error) {
        //log out
      }
      if (data) {
        dispatch(walletStateActions.createWalletState(data.data));
      }
    }, [data, error]);
  }
  const openHandler = () => {
    dispatch(windowStateActions.authWindow());
  };
  const firstPath = location.pathname.split("/")[0];
  return (
    <article className="HeaderUser">
      <button className="HeaderUserStore">
        <img src={StoreImg} alt="store" />
        <p>Store</p>
      </button>
      <button
        onClick={() => {
          navigation("/dashboard");
        }}
        className={
          firstPath != "dashboard"
            ? "HeaderUserDashboard"
            : "HeaderUserDashboard HeaderUserActiveButton"
        }
      >
        <img src={dashboardImg} alt="" />
        <p>My Dashboard</p>
      </button>
      <section
        className={firstPath == "" ? "HeaderUserProfile HeaderUserActiveButton" : "HeaderUserProfile"}
        onClick={() => openHandler()}
      >
        <img src={walletImg} alt="" />
        <article className="HeaderUserProfileContainerMoney">
          {userWallet && userWallet[0]?.balance["TON"] ? (
            <h1>{userWallet[0].balance["TON"]}</h1>
          ) : (
            <h1>0</h1>
          )}
          TON
          <div></div>
        </article>
        <article className="HeaderUserProfileContainerMoney">
          {userWallet && userWallet[0]?.balance["USDT"] ? (
            <h1>{userWallet[0]?.balance["USDT"]}</h1>
          ) : (
            <h1>0</h1>
          )}
          USDT
          <div></div>
        </article>
        <div className="HeaderUserProfileImg"></div>
      </section>
      <button className="HeaderUserShop">
        <img src={BellImg} alt="" />
      </button>
      <button className="HeaderUserShop">
        <img src={shopCart} alt="" />
      </button>
    </article>
  );
}
