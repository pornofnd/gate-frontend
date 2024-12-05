import "./footerSection.scss";
export default function FooterSection({
  title,
  firstRow,
  secondRow,
}: {
  title: string;
  firstRow: string[];
  secondRow: string[];
}) {
  return (
    <article className="FooterSection">
      <h1>{title}</h1>
      <section className="FooterSectionLink">
        <article >
          {firstRow.map((elem) => (
            <p>{elem}</p>
          ))}
        </article>
        <article className="FooterSectionLinkSecondRow">
        {secondRow.map((elem) => (
            <p>{elem}</p>
          ))}
        </article>
      </section>
    </article>
  );
}
