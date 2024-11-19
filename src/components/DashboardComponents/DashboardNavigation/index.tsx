import { data } from "./DashboardNavigation.data";
import "./dashboardNavigation.scss";
export default function DashboardNavigation() {
    //   const location = useLocation();
// location.pathname
  return (
    <div className="DashboardNavigation">
      {data.map((elem) => (
        <nav>{elem.title}</nav>
      ))}
    </div>
  ); 
}
