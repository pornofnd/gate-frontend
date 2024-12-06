import CardCategory from "Molecules/CardCategory";
import { data } from "./NFTCollectionCategoryContainer.data";
import "./NFTCollectionCategoryContainer.scss";
import TitleCardCategory from "../../Organisms/TitleCardCategory";
const dataTitle = {
  title: "NFT Collections",
  desc: "Collect and trade unique digital assets on various blockchains.",
  count: "16,499",
};
export default function NFTCollectionCategoryContainer() {
  return (
    <section className="NFTCollectionCategoryContainer">
      <TitleCardCategory
        desc={dataTitle.desc}
        count={dataTitle.count}
        title={dataTitle.title}
      />
      <article className="NFTCollectionCategoryContainerContainerCard">
        {data.map((elem) => (
          <CardCategory data={elem} />
        ))}
      </article>
    </section>
  );
}
