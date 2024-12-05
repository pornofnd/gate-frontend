import AppDashboardHeader from "components/DashboardComponents/AppDashboardComponenets/AppDashboardHeader";
import AppDashboardPath from "Atoms/AppDashboardPath";
import { useParams } from "react-router-dom";
import { useAppGetOneQuery } from "store/api/appApi";

import { IAppGetList } from "type/App";

import { Response } from "type/Response";

export default function StoreOne() {
  let { id } = useParams();
  const app = useAppGetOneQuery(id ? id : "") as Response<IAppGetList, unknown>;
  return (
    <div>
      <AppDashboardPath domenPath="Stores" link="store" />
      {app?.data && <AppDashboardHeader data={app.data.data} />}
    </div>
  );
}
