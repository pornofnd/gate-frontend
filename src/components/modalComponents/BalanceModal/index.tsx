import { useSelector } from "react-redux";
import "./balanceModal.scss";
import { useGetCurrenciesQuery } from "store/api/public";
import { ICurrencies, Response } from "type/Response";
import { RootState } from "store/store";

export default function BalanceModal() {
  const walletData = useSelector((state: RootState) => state.walletStateRducer);
  const { data } = useGetCurrenciesQuery() as Response<
    ICurrencies,
    unknown
  >;
console.log(walletData)
  console.log(data);
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
