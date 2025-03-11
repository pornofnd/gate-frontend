import { Controller, set, useForm } from "react-hook-form";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { Response } from "type/Response";
import { IJarCreate } from "type/Jar";
import React, { useState } from "react";
import InputJar from "Atoms/InputJar";
import { useAppCreateMutation } from "store/api/appApi";
import { dataInput, dataInputAppTextArea } from "./AppInputForm.data";
import "./appInputForm.scss";
import Button from "Atoms/Button";
import { handleFileChange } from "utils/readFileAsDataURL";
import AppInputImg from "Atoms/AppInputImg/idnex";
import AppInputLabel from "Molecules/AppInputLabel";
export interface IInputApp {
  name: string;
  description: string;
  short_description: string;
  logo: any;
  banner: any;
  links: string;
}
interface IAppInputForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AppInputForm({ setIsOpen }: IAppInputForm) {
  const websocketId = useSelector(
    (state: RootState) => state.socketStateReducer.websocket_id
  );
  const [appCreateMutation] = useAppCreateMutation();
  const { handleSubmit, control } = useForm<IInputApp>({
    defaultValues: {
      name: "",
      description: "",
      short_description: "",
      links: "",
    },
  });
  const onSubmit = (inputData: IInputApp) => {
    const dataForm = new FormData();
    dataForm.append("logo", inputData.logo);
    dataForm.append("description", inputData.description);
    dataForm.append("name", inputData.name);
    dataForm.append("banner", inputData.banner);

    dataForm.append("short_description", inputData.short_description);
    dataForm.append("links", inputData.links);
    dataForm.append(" default_locale", "en");
    dataForm.append("websocket_id", websocketId);

    const { data, error } = appCreateMutation(
      dataForm as unknown as IJarCreate
    ) as Response<any, unknown>;
  };
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);

  return (
    <form className="AppInputForm" onSubmit={handleSubmit(onSubmit)}>
      <section className="AppInputFormSectionImg">
        <Controller
          name="logo"
          control={control}
          rules={{
            required: "Image is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <AppInputLabel field={field} setImg={setLogo} error={error} img={logo} typeInput="Logo" />

          )}
        />
        <Controller
          name="banner"
          control={control}
          // rules={{
          //   required: "Image is required",
          // }}
          render={({ field, fieldState: { error } }) => (
            <AppInputLabel field={field} setImg={setBanner} error={error} img={banner} typeInput="Banner" />
          )}
        />
      </section>
      <section className="AppInputFormInputSection">
        {dataInput.map((elem) => (
          <Controller
            key={elem.name}
            name={elem.name}
            control={control}
            rules={elem.rules}
            render={({ field, fieldState: { error } }) => (
              <>
                <InputJar
                  {...field}
                  inputClass={elem.inputClass}
                  placholderText={elem.placholderText}
                />
                <div>{error && <p>{error.message}</p>}</div>
              </>
            )}
          />
        ))}
        <Controller
          key={dataInputAppTextArea.name}
          name={dataInputAppTextArea.name}
          control={control}
          rules={dataInputAppTextArea.rules}
          render={({ field, fieldState: { error } }) => (
            <>
              <textarea className="AppInputFormTextArea" {...field}></textarea>
              <div>{error && <p>{error.message}</p>}</div>
            </>
          )}
        />
      </section>

      <section className="AppInputFormButtonSection">
        <Button
          type="submit"
          text="Publish store"
          sizeClass="AppInputFormButtonSectionButton"
        />
        <Button
          text="Cancel"
          sizeClass="AppInputFormButtonSectionButton"
          colorClass="AppInputFormButtonSectionCancel"
          type="button"
          func={() => {
            setIsOpen(false);
          }}
        />
      </section>
    </form>
  );
}
