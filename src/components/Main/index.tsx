import MainTitle from "components/MaintTitle/idnex";
import "./main.scss";
import SearchInput from "components/SearchInput";
export default function Main() {
  return (
    <div className="main">
      <MainTitle />
      <SearchInput />
    </div>
  );
}
