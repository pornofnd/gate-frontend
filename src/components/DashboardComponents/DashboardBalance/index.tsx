import { useSelector } from "react-redux";
import "./dashboardBalance.scss";
import userPlus from "/img/Dashboard/user-plus.svg";
import { RootState } from "store/store";
export default function DashboardBalance() {
  const userWallet = useSelector((state: RootState) => state.walletStateRducer);

  return (
    <section className="DashboardBalance">
      <article className="DashboardBalanceTotalBalance">
        <section className="DashboardBalanceTotalBalanceFounds">
          <p>Total funds</p>
          <article className="DashboardBalanceTotalBalanceFoundsBalance">
            {userWallet[0]?.balance["TON"] ? (
              <h1>${userWallet[0].balance["TON"]}</h1>
            ) : (
              <h1>$0</h1>
            )}
          </article>
        </section>

        <button className="DashboardBalanceTotalBalanceInviteButton">
          <article>
            <img src={userPlus} alt="" />
            <p>Invite & Earn</p>
          </article>
        </button>
      </article>
      <article className="DashboardBalanceStoreJarBalance">
        <section className="DashboardBalanceStoreJarBalanceSection">
          <article className="DashboardBalanceStoreJarBalanceSectionName"></article>
          <h1 className="DashboardBalanceStoreJarBalanceSectionBalance">
            {userWallet[0]?.balance["TON"] ? (
              <h1>${userWallet[0].balance["TON"]}</h1>
            ) : (
              <h1>$0</h1>
            )}
          </h1>
        </section>
        <section className="DashboardBalanceStoreJarBalanceSection"></section>
      </article>
    </section>
  );
}
