import React from 'react'
import plusImg from "img/AppInput/plus.svg";
export interface IAppInputImg{
   readonly banner:string|null,
   readonly typeInput:"Logo"|"Banner"
}
export default function AppInputImg({banner,typeInput}:IAppInputImg) {
  return banner ? (
                 <img
                    src={banner}
                    alt="Uploaded"
                    className={`AppInputFormImg${typeInput}`}
                  />
                ) : (
                  <div className={`AppInputFormEmpty${typeInput}`}>
                    <img src={plusImg} alt="" draggable="false" />
                    {typeInput=="Banner"&&<h1>Add picture. Optimal size 992 x 180px</h1>}
                  </div>
                )
  
}
