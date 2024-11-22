import { useLocation } from "react-router-dom";
import "./appDsahboardNavigation.scss";
import { data } from "./AppDsahboardNavigation.data";
import { INavData } from "components/DashboardComponents/DashboardNavigation/DashboardNavigation.data";
import AppDashboardItem from "../AppDashboardItem";

export default function AppDsahboardNavigation() {
  const location = useLocation();
  console.log(location);
  return (
    <section className="AppDsahboardNavigation">
      <article className="AppDsahboardNavigationContainer">
        {data.map((elem: INavData) => (
          <AppDashboardItem data={elem}  />
        ))}
      </article>
    </section>
  );
}

