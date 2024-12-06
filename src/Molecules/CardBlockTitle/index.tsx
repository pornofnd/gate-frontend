import "./collectionBlock.scss";
interface ICardBlockTitle {
  readonly count: string;
  readonly title: string;
  readonly description: string;
}
export default function CardBlockTitle(data: ICardBlockTitle) {
  return (
    <article className="CollectionBlock">
      <section className="CollectionBlockTitle">
        <h1>{data.title}</h1>
        <div className="CollectionBlockCount">
          <h1>{data.count}</h1>
          {/* <img src={chevron} alt="" /> */}
        </div>
      </section>
      <p className="CollectionBlockSubTitle">{data.description}</p>
    </article>
  );
}
