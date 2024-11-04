import Main from "components/Main";
import "./home.scss"


import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { IUserTelegram, IUserWallet } from "type/User";

import useGetMeApi from "utils/useGetMeApi";

import { useGetMeQuery } from "store/api/user";
export default function Home() {
    if (localStorage.getItem("token")) {   
 const {data,error} = useGetMeQuery() as Response<IUserWallet|IUserTelegram, IError<IGetMError>>;

    const dataInfo={
      data:data,
      error:error
    }
     useGetMeApi(dataInfo)
  }

  return (
    <div className="homebBody">
      <Main />
    </div>
  );
}
