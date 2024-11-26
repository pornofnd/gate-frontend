import MainTitle from "components/MaintTitle/idnex";
import "./main.scss";
import SearchInput from "components/SearchInput";
import CardMenuContainer from "components/CardMenuContainer/idnex";
import WaletBlock from "components/WaletBlock";
// import CollectionBlock from "components/CollectionBlock";
import NFTCollectionCategoryContainer from "components/ContainerCardCategoryComponents/NFTCollectionCategoryContainer";
import Footer from "components/Footer";
import DigitalArtCollectionCategoryContainer from "components/ContainerCardCategoryComponents/DigitalArtCollectionCategoryContainer";
import GamesCollectionCategoryContainer from "components/ContainerCardCategoryComponents/GamesCollectionCategoryContainer";

export default function Main() {
  return (
    <article className="main">
      <MainTitle />
      <SearchInput />
      <CardMenuContainer />
      <NFTCollectionCategoryContainer />
      <GamesCollectionCategoryContainer />
      <DigitalArtCollectionCategoryContainer />
      <WaletBlock />
      <Footer />
    </article>
  );
}
