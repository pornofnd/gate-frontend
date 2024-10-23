
import "./SearchInput.scss";
import menu from "public/img/Vector.svg";
import search from "/public/img/magnifying-glass.svg";
export default function SearchInput() {
  return (
    <div className="searchInput">
      <input className="input" placeholder="Search for products" type="text" />
      <button>
        <img src={search} className="searchInputInInput" alt="" />
      </button>
      <div className="searchInputCategoryContainer">
        <h1>All categories</h1>
        <img src={menu} alt="" />
      </div>
    </div>
  );
}
