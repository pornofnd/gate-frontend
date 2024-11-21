import { useNavHook } from "utils/navHook";
import "./dashboardStore.scss";
import { useAppGetListQuery } from "store/api/appApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { appStateActions } from "store/reducer/storeApp";
import { IApp } from "type/App";
import { Response } from "type/Response";
import { RootState } from "store/store";
import ItemApp from "../ItemApp";

export default function DashboardStore() {
  const dispatch = useDispatch();
  const app = useSelector((state: RootState) => state.appStateReducer);
  const { data, error } = useAppGetListQuery() as Response<IApp[], unknown>;
  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(appStateActions.addApp(data.data));
    }
  }, [data]);
  return (
    <section className="DashboardMenu">
      {app.app.map((elem) => (
        <ItemApp data={elem} key={elem.id} />
      ))}
    </section>
  );
}
