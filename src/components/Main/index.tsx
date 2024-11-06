import MainTitle from "components/MaintTitle/idnex";
import "./main.scss";
import SearchInput from "components/SearchInput";
import CardMenuContainer from "components/CardMenuContainer/idnex";
import WaletBlock from "components/WaletBlock";
import CollectionBlock from "components/CollectionBlock";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import WalletAuthModal from "components/WalletAuthModal";
import WalletModal from "components/WalletModal";



export default function Main() {
  const windowState = useSelector((state :RootState) => state.windowStateReducer.windowState);
  const authWindow = useSelector((state :RootState) => state.windowStateReducer.authWindow);
  return (
    <article className="main">
      {windowState ? <WalletAuthModal /> : null}
      {authWindow?<WalletModal />:null}
      <MainTitle />
      <SearchInput />
      <CardMenuContainer />
      <WaletBlock />
      <CollectionBlock />
    </article>
  );
}
