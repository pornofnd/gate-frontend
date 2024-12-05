import { data } from "./dashboardCategory.data";
import "./dashboardCategory.scss";

export default function DashboardCategory() {
  return (
    <section className="DashboardCategory">
    
      {data.map((elem) => (
        <nav>{elem}</nav>
      ))}
    </section>
  );
}
