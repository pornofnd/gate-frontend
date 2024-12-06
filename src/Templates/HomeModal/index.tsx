import BalanceModal from "../../Molecules/BalanceModal";
import ComponentsMoney from "../../Organisms/ComponentsMoney";
import "./HomeModal.scss";

export default function HomeModal() {
  return (
    <section className="HomeModal">
      <BalanceModal />
      <ComponentsMoney/>
    </section>
  );
}
