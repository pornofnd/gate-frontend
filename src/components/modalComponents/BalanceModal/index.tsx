// import { useSelector } from "react-redux";
import "./balanceModal.scss";
// import { RootState } from "store/store";
export default function BalanceModal() {
  // const walletData = useSelector((state: RootState) => state.walletStateRducer);
  return (
    <article className="BalanceModal">
      <section className="BalanceModalBalanceSection">
        <h1>${/* {walletData} */}0</h1>
        <p>Your balance</p>
      </section>
      <button className="BalanceModalAddSection">
        <h1>$</h1>
        <h2 className="BalanceModalAddSectionPlus">+</h2>
      </button>
    </article>
  );
}
