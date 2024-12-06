import { IItemFooterModal } from "type/FooterModa";
import { RootState } from "store/store";
import { windowStateActions } from "store/reducer/stateModal";
import { useDispatch, useSelector } from "react-redux";
import "./ItemModalFooter.scss";
export default function ItemModalFooter({ elem }: { elem: IItemFooterModal }) {
  const dispatch = useDispatch();
  const pagemodalActive = useSelector(
    (state: RootState) => state.windowStateReducer.pageModal
  );
  const handlerPageModal = (data: string) => {
    dispatch(windowStateActions.pageModal(data));
  };
  return (
    <section
      className={
        pagemodalActive == elem.name
          ? "activeItemFooterModal itemFooterModal"
          : "itemFooterModal"
      }
      onClick={() => {
        handlerPageModal(elem.name);
      }}
    >
      <img
        src={pagemodalActive == elem.name ? elem.imgActive : elem.img}
        alt=""
      />
      <p>{elem.name}</p>
    </section>
  );
}
