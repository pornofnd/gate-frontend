import { Controller, set, useForm } from "react-hook-form";
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
import { IInputApp } from "type/createApp";
import useAppCreate from "hooks/api/appFormCreate";

interface IAppInputForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppInputForm({ setIsOpen }: IAppInputForm) {
  const [error, setError] = useState<any>()

  const { onSubmit } = useAppCreate();
  const { handleSubmit, control, reset } = useForm<IInputApp>({
    defaultValues: {
      name: "",
      description: "",
      short_description: "",
      links: "",
    }
  });
  const handleFormSubmit = async (inputData: IInputApp) => {
    const { error, data } = await onSubmit(inputData)
    if (data) {
      reset()
      setIsOpen(false)
    }
    if (error) {
      console.log(error)
    }
  }
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);

  return (
    <form className="AppInputForm" onSubmit={handleSubmit(handleFormSubmit)}>
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
      <h1 className="errorText">{error}</h1>
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
