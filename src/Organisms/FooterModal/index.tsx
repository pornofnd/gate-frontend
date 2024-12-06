import { IItemFooterModal } from "type/FooterModa";
import ItemModalFooter from "../../Atoms/ItemModalFooter";
import { data } from "./footerModal.data";
import "./footerModal.scss";

export default function FooterModal() {
  return (
    <article className="footerModal">
      <section className="footerModalContainer">
        {data.map((elem: IItemFooterModal,key) => (
          <ItemModalFooter key={key} elem={elem} />
        ))}
      </section>
    </article>
  );
}
