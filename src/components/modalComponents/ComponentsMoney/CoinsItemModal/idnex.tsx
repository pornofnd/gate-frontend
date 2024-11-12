import { ICurrencies } from "type/Response";
import "./CoinsItemModal.scss";

export default function CoinsItemModal({
  sum,
  data,
}: {
  sum: number;
  data: ICurrencies;
}) {
    console.log(data)
  return (
    <article className="CoinsItemModal">
      <section className="CoinsItemModalNameContainer">
        <div className="CoinsItemModalNameContainerImg">
          {data.icon_url && <img src={data.icon_url} alt="" />}
        </div>
        <article className="CoinsItemModalNameContainerCoins">
            <h1>{sum} {data.ticker}</h1>
            {/* <p>{data.</p> */}
        </article>
      </section>
      <section></section>
    </article>
  );
}
