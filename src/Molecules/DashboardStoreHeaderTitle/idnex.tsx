import Button from "Atoms/Button";
import "./dashboardStoreHeaderTitle.scss";
import React from "react";
interface DashboardStoreHeaderTitleProps {
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function DashboardStoreHeaderTitle({
  setIsOpen,
}: DashboardStoreHeaderTitleProps) {
  function openModal() {
    setIsOpen(true);
  }
  return (
    <header className="DashboardStoreHeaderTitle">
      <h1>My stores</h1>
      <Button
        text="New Stores"
        sizeClass="DashboardStoreHeaderTitleButton"
        func={openModal}
      />
    </header>
  );
}
