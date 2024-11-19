import { data } from "./dashboardButtonSection.data";
import "./dashboardButtonSection.scss";

export default function DashboardButtonSection() {
  return (
    <div>
      {data.map((elem) => (
        <img src={elem} alt="" />
      ))}
    </div>
  );
}
