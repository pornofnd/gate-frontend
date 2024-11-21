import Button from "components/Button";
import "./dashboardStoreHeader.scss";
// import DashboardCategory from "../DashboardCategory";

export default function DashboardStoreHeader() {
  return (
    <header className="DashboardStoreHeader">
      <section className="DashboardStoreHeaderSectionName">
        <h1>My Store</h1>
        <Button
          text="Add Product"
          sizeClass="DashboardStoreHeaderSectionNameButton"
        />
      </section>
      {/* <DashboardCategory /> */}
    </header>
  );
}
