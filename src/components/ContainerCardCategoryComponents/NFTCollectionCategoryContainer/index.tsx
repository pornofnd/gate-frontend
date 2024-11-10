import CardCategory from "components/ContainerCardCategoryComponents/CardCategory";
import { data } from "./NFTCollectionCategoryContainer.data";
import "./NFTCollectionCategoryContainer.scss";

export default function NFTCollectionCategoryContainer() {
  return (
    <section className="NFTCollectionCategoryContainer">
      <article className="NFTCollectionCategoryContainerTitle">
        <h1>NFT Collections</h1>
        <div className="NFTCollectionCategoryContainerCount">
          <h1>16,499</h1>
          {/* <img src={chevron} alt="" /> */}
        </div>
      </article>
      <p className="NFTCollectionCategoryContainerSubTitle">
        Collect and trade unique digital assets on various blockchains.
      </p>
      <article className="NFTCollectionCategoryContainerContainerCard">
        {data.map((elem) => (
          <CardCategory data={elem} />
        ))}
      </article>
    </section>
  );
}
