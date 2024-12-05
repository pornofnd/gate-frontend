import { Controller, useForm } from "react-hook-form";
import InputJar from "../../../Atoms/InputJar";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { useJarCreateMutation } from "store/api/jarApi";
import { Response } from "type/Response";
import { IJarCreate } from "type/Jar";
import { useState } from "react";

export interface IInputJar {
  Name: string;
  Description: string;
  Image: any;
}

export default function JarInputContainer() {
  const websocketId = useSelector(
    (state: RootState) => state.jarStateReducer.websocket_id
  );
  const [JarCreateMutation] = useJarCreateMutation();
  const { handleSubmit, control } = useForm<IInputJar>({
    defaultValues: {
      Name: "",
      Description: "",
    },
  });
  const onSubmit = (inputData) => {
    // const date: IJarCreate = {
    //   websocket_id: websocketId,
    //   display_name: inputData.Name,
    //   description: inputData.Description,
    //   photo: null,
    //   banner_url: null,
    //   allowed_currencies: [],
    //   show_in_profile: true,
    // };
    const dataForm = new FormData();
    dataForm.append("photo", inputData.Image);
    dataForm.append("description", inputData.Description);
    dataForm.append("display_name", inputData.Name);
    dataForm.append("banner", inputData.Image);

    dataForm.append("allowed_currencies", "aa");
    dataForm.append("allowed_currencies", "aaaa");
    dataForm.append("show_in_profile", JSON.stringify(true));
    dataForm.append("websocket_id", websocketId);
    console.log(dataForm);
    const { data, error } = JarCreateMutation(
      dataForm as unknown as IJarCreate
    ) as Response<any, unknown>;
    console.log(data, error);
  };
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="Name"
        control={control}
        rules={{
          required: "Name required",
          minLength: { value: 2, message: "Minimum 2 characters" },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputJar {...field} />
            <div>{error && <p>{error.message}</p>}</div>
          </>
        )}
      />
      <Controller
        name="Description"
        control={control}
        rules={{
          required: "Description required",
          minLength: { value: 5, message: "Minimum 5 characters" },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputJar {...field} />
            <div>{error && <p>{error.message}</p>}</div>
          </>
        )}
      />
      <Controller
        name="Image"
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
                handleFileChange(e);
                if (e.target.files && e.target.files[0]) {
                  field.onChange(e.target.files[0]);
                }
              }}
            />
            {image && (
              <img
                src={image}
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
  );
}
