import { Controller, useForm } from "react-hook-form";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { Response } from "type/Response";
import { IJarCreate } from "type/Jar";
import React, { useState } from "react";
import InputJar from "Atoms/InputJar";
import { useAppCreateMutation } from "store/api/appApi";
import { dataInput, dataInputAppTextArea } from "./AppInputForm.data";
import "./appInputForm.scss";
import plusImg from "img/AppInput/plus.svg";
import Button from "Atoms/Button";
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
    console.log(inputData.logo);
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
    console.log(data, error);
  };
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const handleFileChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLLabelElement>,
    setHook: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    let file;
    if ("dataTransfer" in event) {
      file = event.dataTransfer.files?.[0];
    } else {
      file = event.target.files?.[0];
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHook(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
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
            <>
              <input
                type="file"
                accept="image/*"
                id="AppInputFormLogo"
                style={{ display: "none" }}
                onChange={(e) => { 
                  
                  console.log(e)
                  handleFileChange(e, setLogo);
                console.log(e)
                if (e.target.files && e.target.files[0]) {
                  field.onChange(e.target.files[0]);
                }
                }}
              />
              <label
                htmlFor="AppInputFormLogo"
                className="AppInputFormLabelLogo"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  console.log("sika")
                  const file = e.dataTransfer.files[0];
                  if (file && file.type.startsWith("image/")) {
                    handleFileChange(e, setLogo);
                    field.onChange(file);
                  }
                }}
              >
                {logo ? (
                  <img
                    src={logo}
                    alt="Uploaded"
                    className="AppInputFormImgLogo"
                  />
                ) : (
                  <div className="AppInputFormEmptyLogo">
                    <img src={plusImg} alt="" draggable="false" />
                  </div>
                )}
              </label>
              <div>{error && <p>{error.message}</p>}</div>
            </>
          )}
        />
        <Controller
          name="banner"
          control={control}
          // rules={{
          //   required: "Image is required",
          // }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                type="file"
                accept="image/*"
                id="AppInputFormBanner"
                style={{ display: "none" }}
                onChange={(e) => {
                  handleFileChange(e, setBanner);
                  if (e.target.files && e.target.files[0]) {
                    field.onChange(e.target.files[0]);
                  }
                  handleFileChange(e, setBanner);
                  
                }}
              />
              <label
                htmlFor="AppInputFormBanner"
                className="AppInputFormLabelBanner"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file && file.type.startsWith("image/")) {
                    handleFileChange(e, setBanner);
                    field.onChange(file);
                  }
                }}
              >
                {banner ? (
                  <img
                    src={banner}
                    alt="Uploaded"
                    className="AppInputFormImgBanner"
                  />
                ) : (
                  <div className="AppInputFormEmptyBanner">
                    <img src={plusImg} alt="" draggable="false" />
                    <h1>Add picture. Optimal size 992 x 180px</h1>
                  </div>
                )}
              </label>

              <div>{error && <p>{error.message}</p>}</div>
            </>
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
