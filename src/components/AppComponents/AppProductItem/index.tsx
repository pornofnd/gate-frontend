import { IPorduct } from "type/Product";
import "./addProductItem.scss";
import testImg from "./glenn-rane-wow-gr-5-4-final-01-forweb.jpg";
export default function AppProductItem({ data }: { data: IPorduct }) {
  console.log(data);
  return (
    <section className="AppProductItem">
      <img src={testImg} alt="" />
      <section>
        <article>
          <h1>{data.display_name}</h1>
          <h1>{data.usdt_price}</h1>
        </article>
        <button>Edit</button>
      </section>
    </section>
  );
}
