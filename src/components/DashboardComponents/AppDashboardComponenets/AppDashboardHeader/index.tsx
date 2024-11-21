import "./appDashboardHeader.scss";
export default function AppDashboardHeader({ name }: { name: string }) {
  return (
    <header className="AppDashboardHeader">
      <section className="AppDashboardHeaderTop"></section>
      <section className="AppDashboardHeaderBottom"></section>
    </header>
  );
}
