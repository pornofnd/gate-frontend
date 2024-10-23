import MainTitle from "components/MaintTitle/idnex";
import "./main.scss";
import SearchInput from "components/SearchInput";
import CardMenuContainer from "components/CardMenuContainer/idnex";
import WaletBlock from "components/WaletBlock";
export default function Main() {
  return (
    <article className="main">
      <MainTitle />
      <SearchInput />
      <CardMenuContainer />
      <WaletBlock />
    </article>
  );
}
