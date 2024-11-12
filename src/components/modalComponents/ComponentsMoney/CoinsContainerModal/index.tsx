import { useSelector } from "react-redux";
import { useGetCurrenciesQuery } from "store/api/public";
import { RootState } from "store/store";
import './coinsContainerModal.scss'
import { ICurrencies, Response } from "type/Response";
import CoinsItemModal from "../CoinsItemModal/idnex";
import { useEffect, useState } from "react";
export default function CoinsContainerModal() {
  const userWallet = useSelector((state: RootState) => state.walletStateRducer);
  const { data } = useGetCurrenciesQuery() as Response<ICurrencies[], unknown>;
  const [length, setLength] = useState<number>(0);
  useEffect(() => {
    let count = 0; 
    data?.data.forEach((elem: ICurrencies) => {
      const balance = userWallet[0].balance[elem.ticker];
      if (balance) {
        count += 1;
      }
    });
    setLength(count);
    console.log(count);
  }, [data, userWallet]);
  return (
    <section>
      <article className="CoinsContainerModal">
        <h1>Coins</h1>
        <h1>{length} Coins</h1>
      </article>
      {data?.data.map((elem: ICurrencies, key) => {
        return (
          <>
            {userWallet[0].balance[elem.ticker] && (
              <CoinsItemModal
                key={key}
                data={elem}
                sum={userWallet[0].balance[elem.ticker]}
              />
            )}
          </>
        );
      })}
    </section>
  );
}
