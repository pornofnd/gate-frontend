import "./dashboardStore.scss";
import { useAppGetListQuery } from "store/api/appApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { appStateActions } from "store/reducer/storeApp";
import { IApp } from "type/App";
import { Response } from "type/Response";
import { RootState } from "store/store";
import ItemApp from "../ItemApp";
import Button from "components/Button";
import AppCreateModal from "components/AppComponents/AppCreateModal";

export default function DashboardStore() {
  const dispatch = useDispatch();
  const app = useSelector((state: RootState) => state.appStateReducer);
  const { data, error } = useAppGetListQuery() as Response<IApp[], unknown>;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(appStateActions.addApp(data.data));
    }
  }, [data]);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="DashboardMenu">
      <Button
        text="New Stores"
        sizeClass="DashboardButtonSection"
        func={openModal}
      />
      <article className="DashboardStore">
        {app.app.map((elem) => (
          <ItemApp data={elem} key={elem.id} />
        ))}
      </article>
      <AppCreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
