import { INavData } from "components/DashboardComponents/DashboardNavigation/DashboardNavigation.data";
import "./appDashboardItem.scss";
import { useNavigate } from "react-router-dom";
export default function AppDashboardItem({ data }: { data: INavData }) {
  const navigation = useNavigate();

  const handlerSwitcherNav = (path: string) => {
    navigation(path);
  };
  return (
    <nav
      className="AppDashboardItem"
      onClick={() => {
        handlerSwitcherNav(data.link);
      }}
    >
      {data.title}
    </nav>
  );
}
