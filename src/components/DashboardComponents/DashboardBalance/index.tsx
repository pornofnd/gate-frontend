import { useSelector } from "react-redux";
import "./dashboardBalance.scss";
import userPlus from "/img/Dashboard/user-plus.svg";

import { RootState } from "store/store";
import { useEffect, useState } from "react";
import DashboardBalanceInfoSection from "../DashboardBalanceInfoSection";
import { FirstData, SecondData } from "./dashboardButtonSection.data";
// import { useJarCountAndBalanceQuery } from "store/api/jarApi";
// import { IJarResponse } from "type/Jar";
// import { Response } from "type/Response";

export default function DashboardBalance() {
  const userWallet = useSelector((state: RootState) => state.walletStateRducer);
  const [name, setName] = useState<string>("");
  const [nameForCopy, setNameForCopy] = useState<string>("");
  const userState = useSelector(
    (state: RootState) => state.userStateReducer.data
  );
  // const { data } = useJarCountAndBalanceQuery() as Response<
  //   IJarResponse,
  //   unknown
  // >;
  // console.log(data);
  // name bank
  useEffect(() => {
    const fullName =
      userWallet[0]?.display_name ??
      userState.wallet_address ??
      userState.telegram_id;
    setNameForCopy(fullName);
    let seeName;
    if (userWallet[0]?.display_name) {
      seeName = fullName;
    } else {
      seeName = `${fullName.slice(0, 5)}...${fullName.slice(-4)}`;
    }
    setName(seeName);
  }, [userWallet, userState]);

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
        <DashboardBalanceInfoSection
          nameForCopy={nameForCopy}
          name={name}
          userWallet={userWallet}
          state={true}
          data={FirstData}
        />
        <DashboardBalanceInfoSection
          nameForCopy={nameForCopy}
          name={"My jars"}
          userWallet={""}
          state={false}
          data={SecondData}
        />
      </article>
    </section>
  );
}
