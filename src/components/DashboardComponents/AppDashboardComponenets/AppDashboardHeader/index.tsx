import { IApp, IAppGetList } from "type/App";
import "./appDashboardHeader.scss";
export default function AppDashboardHeader({ data }: { data: IAppGetList }) {
  console.log(data);
  return (
    <header className="AppDashboardHeader">
      <section className="AppDashboardHeaderTop">
        <img src={data.app.card.banner_urls[0]} alt="" />
      </section>
      <section className="AppDashboardHeaderBottom">
        <article className="AppDashboardHeaderBottomTitle">
          <section className="AppDashboardHeaderBottomTitleAvatar">
            <img src={data.app.card.logo_urls[0]} alt="" />
          </section>
          <section className="AppDashboardHeaderBottomTitleText">
            <h1>{data.app.card.name}</h1>
          </section>
        </article>
        <article></article>
      </section>
    </header>
  );
}
