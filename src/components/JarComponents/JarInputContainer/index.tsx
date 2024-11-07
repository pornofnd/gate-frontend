import { Controller, useForm } from "react-hook-form";
import InputJar from "../InputJar";


export interface IInputJar{
    Name:string;
    Description:string;
}
export default function JarInputContainer() {
    const { handleSubmit, control } = useForm<IInputJar>({
        defaultValues: {
            Name: "",
            Description:""
        }
    })
    const onSubmit = data => console.log(data);
  
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name="Name"
      control={control}
      rules={{ required: "Имя обязательно", minLength: { value: 2, message: "Минимум 2 символа" } }}
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
      rules={{ required: "Имя обязательно", minLength: { value: 2, message: "Минимум 2 символа" } }}
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
