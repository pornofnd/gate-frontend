import { useLocation } from "react-router-dom";
import "./appDsahboardNavigation.scss";
import { data } from "./AppDsahboardNavigation.data";
import { INavData } from "Molecules/DashboardNavigation/DashboardNavigation.data";
import AppDashboardItem from "../../Atoms/AppDashboardItem";

export default function AppDsahboardNavigation() {
  const location = useLocation();
  console.log(location);
  return (
    <section className="AppDsahboardNavigation">
      <article className="AppDsahboardNavigationContainer">
        {data.map((elem: INavData) => (
          <AppDashboardItem
            key={elem.link}
            data={elem}
            activeMenu={
              location.pathname.split("/")[
                location.pathname.split("/").length - 1
              ] 
            }
          />
        ))}
      </article>
    </section>
  );
}
