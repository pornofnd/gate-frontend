import HeaderModal from "Organisms/HeaderModal";
import "./walletModal.scss";

import FooterModal from "../../Organisms/FooterModal";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import HomeModal from "../HomeModal";

export default function WalletModal() {

  const pagemodalActive = useSelector(
    (state: RootState) => state.windowStateReducer.pageModal
  );
  return (
    <article className="WalletModal">
      <section className="WalletModalContent">
        {pagemodalActive == "Home" || pagemodalActive == "History" ? (
          <article>
            <HeaderModal />
            {pagemodalActive == "Home" ?
            <HomeModal />
            :null}
          </article>
        ) : (
          <article></article>
        )}
        <FooterModal />
      </section>
    </article>
  );
}
