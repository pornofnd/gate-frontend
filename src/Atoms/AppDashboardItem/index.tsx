import { INavData } from "Molecules/DashboardNavigation/DashboardNavigation.data";
import "./appDashboardItem.scss";

import { useNavHook } from "utils/navHook";
export default function AppDashboardItem({ data }: { data: INavData }) {
  const navigation = useNavHook();
  return (
    <nav
      className="AppDashboardItem"
      onClick={() => {
        navigation(data.link);
      }}
    >
      {data.title}
    </nav>
  );
}
