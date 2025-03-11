import { IJarCreate } from "type/Jar";
import { Response } from "type/Response";

const useAppCreate = (websocketId: string) => {

  const onSubmit = (inputData: IInputApp) => {
    const dataForm: IJarCreate = new FormData();
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
