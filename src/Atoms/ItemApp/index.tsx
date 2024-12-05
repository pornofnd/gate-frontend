import { IApp } from "type/App";
import "./itemApp.scss";
import { useNavHook } from "utils/navHook";

export default function ItemApp({ data }: { data: IApp }) {
  const navigateTo = useNavHook();
  return (
    <button className="ItemApp" onClick={() => navigateTo(`app/${data.id}`)}>
      <img src={data.card.banner_urls[0]} alt="" />
      <h1>{data.card.name}</h1>
    </button>
 );
}
