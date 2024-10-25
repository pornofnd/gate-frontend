import WaletCard from "components/WaletCard";
import "./waletBlock.scss";
import { data } from "./Walet.data";
export default function WaletBlock() {
  return (
    <article className="waletBlock">
      <h1 className="waletBlockTitle">Wallet apps</h1>
      <p className="waletBlockSubtitle">Manage and store your crypto securely with these wallet options.</p>
      <section>
        {data.map((elem) => (
          <WaletCard data={elem} />
        ))}
      </section>
    </article>
  );
}
