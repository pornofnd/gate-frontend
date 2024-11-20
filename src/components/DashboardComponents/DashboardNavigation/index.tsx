import { useLocation, useNavigate } from "react-router-dom";
import { data } from "./DashboardNavigation.data";
import "./dashboardNavigation.scss";
export default function DashboardNavigation() {
  const navigation = useNavigate();
  const location = useLocation();
  const handlerSwitcherNav = (path: string) => {
    navigation(path);
  };
  return (
    <div className="DashboardNavigation">
      {data.map((elem) => (
        <nav
          onClick={() => handlerSwitcherNav(elem.link)}
          className={
            location.pathname == elem.link
              ? "DashboardNavigationActive "
              : "DashboardNavigationText"
          }
        >
          {elem.title}
        </nav>
      ))}
    </div>
  );
}
