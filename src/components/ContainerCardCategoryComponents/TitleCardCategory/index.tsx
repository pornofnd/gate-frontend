import "./titleCardCategory.scss";
import chevron from "/public/img/chevron-right.svg";
export default function TitleCardCategory({
  title,
  desc,
  count,
}: {
  title: string;
  desc: string;
  count: string;
}) {
  return (
    <>
      <article className="TitleCardCategoryTitle">
        <h1>{title}</h1>
        <div className="TitleCardCategoryCount">
          <h1>{count}</h1>
          <img src={chevron} alt="" />
        </div>
      </article>
      <p className="TitleCardCategorySubTitle">{desc}</p>
    </>
  );
}
