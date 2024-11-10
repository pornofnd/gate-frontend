import { IDAtaCategoryCard } from "components/ContainerCardCategoryComponents/NFTCollectionCategoryContainer/NFTCollectionCategoryContainer.data";
import "./cardCategory.scss";
export default function CardCategory({ data }: { data: IDAtaCategoryCard }) {
  return (
    <section className="CardCategory">
      <img className="CardCategoryIMg" src={data.img} alt="" />
      <article className="CardCategoryText">
        <section className="CardCategoryTextContainer">
          <h1>{data.name}</h1>
          <h1>{data.price}TON</h1>
        </section>
        <section className="CardCategoryTextSeller">
          <img src={data.salesmanImg} alt="" />
          <h2>{data.salesman}</h2>
        </section>
        <p>{data.time}</p>
      </article>
    </section>
  );
}
