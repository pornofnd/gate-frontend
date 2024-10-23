
import { data } from "./cardMenu.data";
import CardMenu from "components/CardMenu";
import "./cardMenuContainer.scss"
export default function CardMenuContainer() {
  return (
    <article className="cardMenuContainer">
      {data.map((elem) => (
        <CardMenu data={elem} />
      ))}
    </article>
  );
}
