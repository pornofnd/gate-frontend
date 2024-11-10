import ItemMoneyMenuModal from "../ItemMoneyMenuModal";
import "./moneyMenuContainer.scss";
const data = ["All", "Coins", "Digital Goods "];

export default function MoneyMenuModal({
  menuState,
  useMenuState,
}: {
  menuState: string;
  useMenuState: React.Dispatch<string>;
}) {
  return (
    <section className="MoneyMenuModal">
      {data.map((elem: string) => (
        <ItemMoneyMenuModal
          menuState={menuState}
          useMenuState={useMenuState}
          key={elem}
          data={elem}
        />
      ))}
    </section>
  );
}
