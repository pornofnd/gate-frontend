export default function StarRating({ rating }: { rating: number }) {
  const arr: string[] = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      arr.push("public/img/star/star-empty-fill.svg");
      rating--;
      continue;
    }
    if (rating > 0) {
      arr.push("public/img/star/Half star.svg");
      rating = 0;
      continue;
    }
    arr.push("public/img/star/Half star-1.svg");
  }
  return (
    <section>
      {arr.map((elem) => (
        <img src={elem} alt="" />
      ))}
    </section>
  );
}
