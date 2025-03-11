import { IDataInputApp } from "Organisms/AppInputForm/AppInputForm.data";
import { useAppCreateMutation } from "store/api/appApi";
import { IInputApp } from "type/createApp";
import { IJarCreate } from "type/Jar";
import { Response } from "type/Response";
import { RootState } from "store/store";
import { useSelector } from "react-redux";

const useAppCreate = () => {
  const [appCreateMutation] = useAppCreateMutation();
  const websocketId = useSelector(
    (state: RootState) => state.socketStateReducer.websocket_id
  );

  const onSubmit = (inputData: IInputApp) => {
    const dataForm = new FormData();
    dataForm.append("logo", inputData.logo);
    dataForm.append("description", inputData.description);
    dataForm.append("name", inputData.name);
    dataForm.append("banner", inputData.banner);
    dataForm.append("short_description", inputData.short_description);
    dataForm.append("links", inputData.links);
    dataForm.append("default_locale", "en");
    dataForm.append("websocket_id", websocketId);

    const { data, error } = appCreateMutation(
      dataForm as unknown as IJarCreate
    ) as Response<any, unknown>;

    return { data, error };
  };

  return { onSubmit };
};

export default useAppCreate;
