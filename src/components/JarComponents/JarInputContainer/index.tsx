import { Controller, useForm } from "react-hook-form";
import InputJar from "../InputJar";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { useJarCreateMutation } from "store/api/jarApi";
import { Response } from "type/Response";
import { IJarCreate } from "type/jar";


export interface IInputJar{
    Name:string;
    Description:string;
}

export default function JarInputContainer() {
    const websocketId = useSelector((state :RootState) => state.jarStateReducer.websocket_id);
    const [JarCreateMutation]=useJarCreateMutation()
    const { handleSubmit, control } = useForm<IInputJar>({
        defaultValues: {
            Name: "",
            Description:""
        }
    })
    const onSubmit = inputData => {
        const date:IJarCreate={
          websocket_id:websocketId,
          display_name:inputData.Name,
          description:inputData.Description,
          photo_url:null,
          banner_url:null,
          allowed_currencies: [],
          show_in_profile: true
        }
        console.log(date)
        const {data , error}=JarCreateMutation(date) as Response<any,unknown>;
        console.log(data,error)
 
    }

    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name="Name"
      control={control}
      rules={{ required: "Name required", minLength: { value: 2, message: "Minimum 2 characters" } }}
      render={({ field, fieldState: { error } }) => (
        <>
          <InputJar {...field} />
          <div>
            {error && <p>{error.message}</p>}
          </div>
        </>
      )}
    />
    <Controller
      name="Description"
      control={control}
      rules={{ required: "Description required", minLength: { value: 5, message: "Minimum 5 characters" } }}
      render={({ field, fieldState: { error } }) => (
        <>
          <InputJar {...field} />
          <div>
            {error && <p>{error.message}</p>}
          </div>
        </>
      )}
    />
    <input type="submit" />
  </form>
  )
}
