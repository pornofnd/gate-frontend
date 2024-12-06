import AppDashboardPath from "Atoms/AppDashboardPath";
import AppDashboardHeader from "Molecules/AppDashboardHeader";
import AppDsahboardNavigation from "Molecules/AppDsahboardNavigation";
import { Outlet, useParams } from "react-router-dom";
import { useAppGetOneQuery } from "store/api/appApi";

import { IAppGetList } from "type/App";

import { Response } from "type/Response";

export default function AppDashboardLayout() {
  let { id } = useParams();
  const app = useAppGetOneQuery(id ? id : "") as Response<IAppGetList, unknown>;
  // const product = useGetListPorductQuery(id ? id : "") as Response<
  //   IPorduct,
  //   unknown
  // >;
  // console.log(app.data?.data);
  return (
    <div>
      <AppDashboardPath domenPath="Stores" link="dashboard"  />
      {app?.data && <AppDashboardHeader data={app.data.data} />}
      <AppDsahboardNavigation />
      <Outlet />
    </div>
  );
}
