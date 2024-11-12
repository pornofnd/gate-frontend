import { windowStateActions } from "store/reducer/stateModal";
import "./headerAuthUser.scss";
import { useDispatch } from "react-redux";
import shopCart from "/img/Header/shopping-cart-underline.svg";
import dashboardImg from "/img/Header/computer-desktop.svg";
import { useEffect } from "react";
import { walletStateActions } from "store/reducer/stateWallet";
import { useGetListQuery } from "store/api/walletApi";
import { IListWallet } from "type/wallets";
import { Response } from "type/Response";
// import walletImg from '/img/Header/wallet-underline.svg'
export default function HeaderAuthUser() {
  const dispatch = useDispatch();
  if (localStorage.getItem("token")) {
    const { data ,error} = useGetListQuery() as Response<IListWallet[], unknown>;
    useEffect(() => {
      if(error){
        //log out
      }
      if (data) {
        dispatch(walletStateActions.createWalletState(data.data));
      }
    }, [data,error]);
  }
  const openHandler = () => {
    dispatch(windowStateActions.authWindow());
  };
  return (
    <article className="HeaderUser">
      <button className="HeaderUserDashboard">
        <img src={dashboardImg} alt="" />
        <p>My Dashboard</p>
      </button>
      <section className="HeaderUserProfile" onClick={openHandler}>
        {/* <img src={walletImg} alt="" /> */}
      </section>
      <button className="HeaderUserShop">
        <img src={shopCart} alt="" />
      </button>
    </article>
  );
}
