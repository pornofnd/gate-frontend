import { windowStateActions } from "store/reducer/stateModal";
import "./headerAuthUser.scss"
import { useDispatch } from "react-redux";
import shopCart from '/img/Header/shopping-cart-underline.svg'
import dashboardImg from '/img/Header/computer-desktop.svg'
// import walletImg from '/img/Header/wallet-underline.svg'
export default function HeaderAuthUser() {
    const dispatch = useDispatch();
    const openHandler=()=>{
        dispatch(windowStateActions.authWindow());
    }
  return (
    <article className="HeaderUser">
        <button className="HeaderUserDashboard">
          <img src={dashboardImg} alt="" />
          <p>My Dashboard</p>
          </button>
        <section className="HeaderUserProfile" onClick={openHandler}>
          {/* <img src={walletImg} alt="" /> */}
        </section>
        <button className="HeaderUserShop"><img src={shopCart} alt="" /></button>
    </article>
  )
}
