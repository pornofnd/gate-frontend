import TitleCardCategory from "../../../Atoms/TitleCardCategory/index.tsx";
import CardCategory from "../../../Molecules/CardCategory/index.tsx";
import "./gamesCollectionCategoryContainer.scss"
import { data } from "./gamesCollectionCategoryContainer.data.ts";
const dataTitle = {
  title: "Games",
  desc: "Discover and play blockchain-powered games and digital experiences.",
  count: "322",
};
export default function GamesCollectionCategoryContainer() {
  return (
    <section className="GamesCollectionCategoryContainer">
      <TitleCardCategory
        desc={dataTitle.desc}
        count={dataTitle.count}
        title={dataTitle.title}
      />
      <article className="GamesCollectionCategoryContainerContainerCard">
        {data.map((elem) => (
          <CardCategory data={elem} />
        ))}
      </article>
    </section>
  );
}
