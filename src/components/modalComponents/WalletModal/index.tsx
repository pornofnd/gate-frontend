import HeaderModal from "components/modalComponents/HeaderModal";
import "./walletModal.scss";
import { useGetListQuery } from "store/api/walletApi";
import { IListWallet } from "type/wallets";
import { Response } from "type/Response";
import FooterModal from "../FooterModal";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

export default function WalletModal() {
  const { data } = useGetListQuery() as Response<IListWallet, unknown>;
  console.log(data);
  const pagemodalActive = useSelector(
    (state: RootState) => state.windowStateReducer.pageModal
  );
  return (
    <article className="WalletModal">
      <section className="WalletModalContent">
        {pagemodalActive == "Home" || pagemodalActive == "History" ? (
          <article>
            <HeaderModal />
          </article>
        ) : (
          <article></article>
        )}
        <FooterModal />
      </section>
    </article>
  );
}
