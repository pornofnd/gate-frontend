import "./collectionBlock.scss"
import chevron from "public/img/chevron-right.svg"
export default function CollectionBlock() {
  return (
    <article className="CollectionBlock">
      <section className="CollectionBlockTitle">
        <h1>NFT Collections</h1>
        <div className="CollectionBlockCount">
            <h1>16,499</h1>
            <img src={chevron} alt="" />
        </div>
      </section>
      <p className="CollectionBlockSubTitle">Collect and trade unique digital assets on various blockchains.</p>
    </article>
  );
}
