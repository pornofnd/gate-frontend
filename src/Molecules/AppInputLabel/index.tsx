import AppInputImg from 'Atoms/AppInputImg/idnex';
import React from 'react'
import { handleFileChange } from 'utils/readFileAsDataURL'
export interface IAppInputLabel{
    img:string| null
    setImg:React.Dispatch<React.SetStateAction<string|null>>
    field:any
    error:any
  typeInput:"Banner"|"Logo"
}
export default function AppInputLabel({img,setImg,field,error ,typeInput}:IAppInputLabel) {
  return (
            <>
              <input
                type="file"
                accept="image/*"
                id={`AppInputForm${typeInput}`}
                style={{ display: "none" }}
                onChange={(e) => {
                  handleFileChange(e, setImg);
                  if (e.target.files && e.target.files[0]) {
                    field.onChange(e.target.files[0]);
                  }
                  handleFileChange(e, setImg);
                  
                }}
              />
              <label
                htmlFor={`AppInputForm${typeInput}`}
                className={`AppInputFormLabel${typeInput}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file && file.type.startsWith("image/")) {
                    handleFileChange(e, setImg);
                    field.onChange(file);
                  }
                }}
              >
              <AppInputImg banner={img} typeInput={typeInput}/>
              </label>

              <div>{error && <p>{error.message}</p>}</div>
            </>
  )
}
