import { IApp } from "type/App";
import "./itemApp.scss";
import { useNavHook } from "utils/navHook";
import ArrowImgRight from "public/img/ItemApp/Vector (Stroke).svg";
export default function ItemApp({ data }: { data: IApp }) {
  const navigateTo = useNavHook();
  console.log(data);
  return (
    <button className="ItemApp" onClick={() => navigateTo(`app/${data.id}`)}>
      <div className="ItemAppLeft">
        <img src={data.card.banner_urls[0]} alt="" />
        <h1>{data.card.name}</h1>
      </div>
      <img src={ArrowImgRight} className="ItemAppArroRight" alt="" />
    </button>
  );
}
