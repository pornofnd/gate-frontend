import { IApp } from "type/App";
import "./dashboardStoreList.scss";
import ItemApp from "Atoms/ItemApp";
type DashboardStoreListProps = Readonly<{
  store: ReadonlyArray<IApp>;
}>;

export default function DashboardStoreList({ store }: DashboardStoreListProps) {
  return (
    <article className="DashboardStoreList">
      {store.map((elem) => (
        <ItemApp data={elem} key={elem.id} />
      ))}
    </article>
  );
}
