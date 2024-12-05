import { IDataDashboardCradBalance } from "../../Organisms/DashboardBalance/dashboardButtonSection.data";
import "./dashboardButtonSection.scss";

export default function DashboardButtonSection({
  data,
}: {
  data: IDataDashboardCradBalance[];
}) {
  return (
    <section className="DashboardButtonSection">
      {data.map((elem, index) => (
        <button
          key={index}
          className={
            elem.title
              ? "DashboardButtonSectionButton DashboardButtonSectionButtonActive"
              : "DashboardButtonSectionButton"
          }
        >
          <img src={elem.img} alt="" />
          <h1>{elem?.title}</h1>
        </button>
      ))}
    </section>
  );
}
