import MainTitle from "Molecules/MaintTitle";
import "./main.scss";
import SearchInput from "Atoms/SearchInput";
import CardMenuContainer from "Molecules/CardMenuContainer/idnex";
import WaletBlock from "Organisms/WaletBlock";
// import CollectionBlock from "components/CollectionBlock";
import NFTCollectionCategoryContainer from "Templates/NFTCollectionCategoryContainer";
import Footer from "Templates/Footer";
import DigitalArtCollectionCategoryContainer from "Organisms/DigitalArtCollectionCategoryContainer";
import GamesCollectionCategoryContainer from "Templates/GamesCollectionCategoryContainer";

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
