import "./itemMoneyMenuModal.scss";
export default function ItemMoneyMenuModal({
  data,
  menuState,
  useMenuState,
}: {
  data: string;
  menuState: string;
  useMenuState: React.Dispatch<string>;
}) {
  const hanlderData = () => {
    useMenuState(data);
  };
  return (
    <article
      className={
        menuState == data
          ? "activeItemMoneyMenuModal ItemMoneyMenuModal"
          : "ItemMoneyMenuModal"
      }
      onClick={hanlderData}
    >
      
      <h1>{data}</h1>
     
    </article>
  );
}
