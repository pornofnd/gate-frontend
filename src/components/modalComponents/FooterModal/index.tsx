
import { IItemFooterModal } from "type/FooterModa";
import ItemModalFooter from "../ItemModalFooter";
import { data } from "./footerModal.data";
import "./footerModal.scss";

export default function FooterModal() {
 
  return (
    <div className="footerModal">
      {data.map((elem:IItemFooterModal) => (
       <ItemModalFooter elem={elem} />
      ))}
    </div>
  );
}
