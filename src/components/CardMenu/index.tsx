import "./cardMenu.scss"
interface IDAta {
  img: string;
  name: string;
  item: number;
}
export default function CardMenu({ data }: { data: IDAta }) {
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
