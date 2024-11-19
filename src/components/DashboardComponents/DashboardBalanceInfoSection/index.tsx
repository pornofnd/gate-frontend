import DashboardButtonSection from "../DashboardButtonSection";
import arrowRight from "/img/Dashboard/arrow-right.svg";
import copyImg from "/img/Dashboard/Vector.svg";
import "./dashboardBalanceInfoSection.scss";
export default function DashboardBalanceInfoSection({
  name,
  userWallet,
  nameForCopy,
  state,
  data,
}) {
  const handlerCopy = () => {
    navigator.clipboard.writeText(nameForCopy);
  };

  return (
    <section className=" DashboardBalanceInfoSection">
      <article className=" DashboardBalanceInfoSectionName">
        <section>
          <p>{name}</p>
          {state && (
            <button onClick={handlerCopy}>
              <img src={copyImg} alt="" />
            </button>
          )}
        </section>
        <button>
          <img src={arrowRight} alt="arrow right" />
        </button>
      </article>
      <h1 className=" DashboardBalanceInfoSectionBalance">
        {userWallet[0]?.balance["TON"] ? (
          <h1>${userWallet[0].balance["TON"]}</h1>
        ) : (
          <h1>$0</h1>
        )}
      </h1>
      <DashboardButtonSection data={data} />
    </section>
  );
}
