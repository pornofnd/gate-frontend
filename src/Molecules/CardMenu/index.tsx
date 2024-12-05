import "./cardMenu.scss"
interface IData {
  img: string;
  name: string;
  item: number;
}
export default function CardMenu({ data }: { data: IData }) {
  return (
    <section className="cardMenu">
      <article>
        <h3>{data.name}</h3>
        <p>{data.item} items</p>
      </article>
      <img src={data.img} alt="" />
    </section>
  );
}
