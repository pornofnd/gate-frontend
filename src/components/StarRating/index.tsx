import starFill from "public/img/star/star-empty-fill.svg"
import starHalf from "public/img/star/Half star.svg"
import starEmpty from "public/img/star/Half star-1.svg"

export default function StarRating({ rating }: { rating: number }) {
  const arr: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      arr.push(starFill);
      rating--;
      continue;
    }
    if (rating > 0) {
      arr.push(starHalf);
      rating = 0;
      continue;
    }
    arr.push(starEmpty);
  }
  return (
    <section>
      {arr.map((elem) => (
        <img src={elem} alt="" />
      ))}
    </section>
  );
}
