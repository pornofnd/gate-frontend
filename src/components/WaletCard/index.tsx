import "./waletCard.scss";
interface IDataWallet {
  title: string;
  payMethod: string;
  raiting: number;
  platform: string[];
  img: string;
}
export default function WaletCard({ data }: { data: IDataWallet }) {
  return (
    <section className="walletCard">
      <img src={data.img} alt="" />
      <div></div>
    </section>
  );
}
