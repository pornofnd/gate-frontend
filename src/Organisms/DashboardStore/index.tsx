import "./dashboardStore.scss";
import { useAppGetListQuery } from "store/api/appApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { appStateActions } from "store/reducer/storeApp";
import { IApp } from "type/App";
import { Response } from "type/Response";
import { RootState } from "store/store";
import AppCreateModal from "Organisms/AppCreateModal";
import DashboardStoreList from "Molecules/DashboardStoreList";
import DashboardStoreHeaderTitle from "Molecules/DashboardStoreHeaderTitle/idnex";
import DashboardLoadList from "Molecules/DashboardLoadList";


export default function DashboardStore() {
  const dispatch = useDispatch();
  const app = useSelector((state: RootState) => state.appStateReducer);
  const { data, error, isLoading } = useAppGetListQuery() as Response<IApp[], unknown>;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log(isLoading);
    if (data) {
      dispatch(appStateActions.addApp(data.data));
    }
  }, [data]);
  return (
    <section className="DashboardStore">
      <DashboardStoreHeaderTitle setIsOpen={setIsOpen} />
      {!isLoading ?
        <DashboardStoreList store={app.app} />
        :
        <DashboardLoadList />
      }
      <AppCreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
