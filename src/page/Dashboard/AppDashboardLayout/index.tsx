import AppDashboardHeader from "components/DashboardComponents/AppDashboardComponenets/AppDashboardHeader";
import AppDashboardPath from "components/DashboardComponents/AppDashboardComponenets/AppDashboardPath";
import AppDsahboardNavigation from "components/DashboardComponents/AppDashboardComponenets/AppDsahboardNavigation";
import { useParams } from "react-router-dom";
import { useAppGetOneQuery } from "store/api/appApi";
import { useGetListPorductQuery } from "store/api/productApi";
import { IApp, IAppGetList } from "type/App";
import { IPorduct } from "type/Product";
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
      <AppDashboardPath />
      {app?.data && <AppDashboardHeader data={app.data.data} />}
      <AppDsahboardNavigation />
    </div>
  );
}
