import BalanceModal from "../BalanceModal";
import ComponentsMoney from "../ComponentsMoney";
import "./HomeModal.scss";

export default function HomeModal() {
  return (
    <section className="HomeModal">
      <BalanceModal />
      <ComponentsMoney/>
    </section>
  );
}
