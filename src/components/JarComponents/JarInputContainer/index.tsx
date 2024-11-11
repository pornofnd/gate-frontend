import { Controller, useForm } from "react-hook-form";
import InputJar from "../InputJar";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { useJarCreateMutation } from "store/api/jarApi";
import { Response } from "type/Response";
import { IJarCreate } from "type/jar";

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
   
    dataForm.append("allowed_currencies", 'aa');
    dataForm.append("allowed_currencies", 'aaaa');
    dataForm.append("show_in_profile", JSON.stringify(true));
    dataForm.append("websocket_id", websocketId);
    console.log(dataForm);
    const { data, error } = JarCreateMutation(
      dataForm as unknown as IJarCreate
    ) as Response<any, unknown>;
    console.log(data, error);
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
                if (e.target.files && e.target.files[0]) {
                  field.onChange(e.target.files[0]);
                }
              }}
            />
            <div>{error && <p>{error.message}</p>}</div>
          </>
        )}
      />

      <input type="submit" />
    </form>
  );
}
