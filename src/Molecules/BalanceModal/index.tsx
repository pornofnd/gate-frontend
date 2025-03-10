import { useSelector } from "react-redux";
import "./balanceModal.scss";
import { RootState } from "store/store";

export default function BalanceModal() {
  const walletData = useSelector((state: RootState) => state.walletStateReducer);
  return (
    <article className="BalanceModal">
      <section className="BalanceModalBalanceSection">
        <h1>${walletData ? parseFloat(Number(walletData[0].total_balance).toFixed(2)) : 0}</h1>
        <p>Your balance</p>
      </section>
      <button className="BalanceModalAddSection">
        <h1>$</h1>
        <h2 className="BalanceModalAddSectionPlus">+</h2>
      </button>
    </article>
  );
}
