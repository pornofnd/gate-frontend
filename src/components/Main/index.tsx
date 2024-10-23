import MainTitle from "components/MaintTitle/idnex";
import "./main.scss";
import SearchInput from "components/SearchInput";
import CardMenuContainer from "components/CardMenuContainer/idnex";
export default function Main() {
  return (
    <div className="main">
      <MainTitle />
      <SearchInput />
      <CardMenuContainer />
    </div>
  );
}
