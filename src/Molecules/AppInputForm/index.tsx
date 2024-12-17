import { Controller, useForm } from "react-hook-form";

import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { Response } from "type/Response";
import { IJarCreate } from "type/Jar";
import { useState } from "react";
import InputJar from "Atoms/InputJar";
import { useAppCreateMutation } from "store/api/appApi";
import { dataInput } from "./AppInputForm.data";
export interface IInputApp {
  name: string;
  description: string;
  short_description: string;
  logo: any;
  banner: any;
  links: string;
}
export default function AppInputForm() {
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
    console.log(websocketId);
    dataForm.append("logo", inputData.logo);
    dataForm.append("description", inputData.description);
    dataForm.append("name", inputData.name);
    dataForm.append("banner", inputData.banner);

    dataForm.append("short_description", inputData.short_description);
    dataForm.append("links", inputData.links);
    dataForm.append(" default_locale", "en");
    dataForm.append("websocket_id", websocketId);
    console.log(dataForm);
    const { data, error } = appCreateMutation(
      dataForm as unknown as IJarCreate
    ) as Response<any, unknown>;
    console.log(data, error);
  };
  const [logo, setLogo] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setHook: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHook(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {dataInput.map((elem) => (
          <Controller
            key={elem.name}
            name={elem.name}
            control={control}
            rules={elem.rules}
            render={({ field, fieldState: { error } }) => (
              <>
                <InputJar {...field} />
                <div>{error && <p>{error.message}</p>}</div>
              </>
            )}
          />
        ))}

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
                onChange={(e) => {
                  handleFileChange(e, setLogo);
                  if (e.target.files && e.target.files[0]) {
                    field.onChange(e.target.files[0]);
                  }
                }}
              />
              {logo && (
                <img
                  src={logo}
                  alt="Uploaded"
                  style={{ maxWidth: "400px", marginTop: "20px" }}
                />
              )}
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
                onChange={(e) => {
                  handleFileChange(e, setBanner);
                  if (e.target.files && e.target.files[0]) {
                    field.onChange(e.target.files[0]);
                  }
                }}
              />
              {banner && (
                <img
                  src={banner}
                  alt="Uploaded"
                  style={{ maxWidth: "400px", marginTop: "20px" }}
                />
              )}
              <div>{error && <p>{error.message}</p>}</div>
            </>
          )}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
