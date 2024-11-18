import DashboardBalance from "components/DashboardComponents/DashboardBalance";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return <article>
   
   <DashboardBalance />


    <Outlet />
  </article>;
}
