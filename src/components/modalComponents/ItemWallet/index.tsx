import { IWallet } from "type/Wallets";
import "./itemWallet.scss";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { useGenerateWalletAuthMutation } from "../../../store/api/connectAuthApi";
import { Response } from "type/Response";

export default function ItemWallet({ elem }: { elem: IWallet }) {
  const websocketId = useSelector(
    (state: RootState) => state.windowStateReducer.websocket_id
  );
  // const userState = useSelector((state :RootState) => state.userStateReducer.data);
  const [generateWalletAuth] = useGenerateWalletAuthMutation();
  const handlerChooseWallet = async (elem: IWallet) => {
    try {
      if (websocketId) {
        const { data } = (await generateWalletAuth({
          walletData: elem,
          websocket_id: websocketId,
        })) as Response<string, unknown>;
        if (data) {
          window.open(data.data, "_blank");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      onClick={() => handlerChooseWallet(elem)}
      className="walletConnectModalWalletsItem"
    >
      <img src={elem.image} alt="" />
      <h1>{elem.name}</h1>
    </div>
  );
}
