import CardCategory from "../../Molecules/CardCategory";
import TitleCardCategory from "../TitleCardCategory";
import { data } from "./digitalArtCollectionCategoryContainer.data";
import "./digitalArtCollectionCategoryContainer.scss";
const dataTitle = {
  title: "Digital Art",
  desc: "Explore digital artworks and collections from artists worldwide.",
  count: "144,000",
};
export default function DigitalArtCollectionCategoryContainer() {
  return (
    <section className="DigitalArtCollectionCategoryContainer">
      <TitleCardCategory
        desc={dataTitle.desc}
        count={dataTitle.count}
        title={dataTitle.title}
      />
      <article className="DigitalArtCollectionCategoryContainerContainerCard">
        {data.map((elem) => (
          <CardCategory data={elem} />
        ))}
      </article>
    </section>
  );
}
