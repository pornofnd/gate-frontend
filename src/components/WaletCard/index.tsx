import StarRating from "components/StarRating";
import "./waletCard.scss";
import vector from "public/img/Vector (Stroke).svg";
interface IDataWallet {
  title: string;
  payMethod: string;
  rating: number;
  platform: string[];
  img: string;
}
export default function WaletCard({ data }: { data: IDataWallet }) {
  return (
    <article className="walletContainer">
      <section className="walletCard">
        <img className="walletCardImg" src={data.img} alt="" />
        <article className="walletCardText">
          <section className="walletCardTextContainer">
            <h1 className="walletCardTextTitle">{data.title}</h1>
            <img src={vector} alt="" />
          </section>
          <p className="walletCardTextPayMethod">{data.payMethod}</p>
          <StarRating rating={data.rating} />
          <section className="walletCardTextPlatform">
            {data.platform.map((elem) => (
              <p>{elem}</p>
            ))}
          </section>
        </article>
      </section>
    </article>
  );
}
