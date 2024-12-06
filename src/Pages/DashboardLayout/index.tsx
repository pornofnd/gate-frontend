import DashboardBalance from "Organisms/DashboardBalance";
// import DashboardNavigation from "components/DashboardComponents/DashboardNavigation";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <article>
      <DashboardBalance />
      
      {/* <DashboardNavigation /> */}
      <Outlet />
    </article>
  );
}
