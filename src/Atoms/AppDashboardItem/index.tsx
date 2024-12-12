import { INavData } from "Molecules/DashboardNavigation/DashboardNavigation.data";
import "./appDashboardItem.scss";

import { useNavHook } from "utils/navHook";
export default function AppDashboardItem({
  data,
  activeMenu,
}: {
  readonly data: INavData;
  readonly activeMenu: string;
}) {
  const navigation = useNavHook();
  
  return (
    <nav
      className={
        activeMenu != data.link
          ? "AppDashboardItem"
          : "AppDashboardItem AppDashboardItemActive"
      }
      onClick={() => navigation(data.link)}
      role="buttonNavigation"
    >
      {data.title}
    </nav>
  );
}
