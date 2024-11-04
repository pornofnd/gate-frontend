import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userStateActions } from "store/reducer/stateUser";
import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { IUserTelegram, IUserWallet } from "type/User";

function useGetMeApi(data:Response<IUserWallet|IUserTelegram, IError<IGetMError>>) {
  const dispatch = useDispatch();

  if(!localStorage.getItem('token')){
    return ;
  }
  // const { data, error } = useGetMeQuery() as Response<IUserWallet|IUserTelegram, IError<IGetMError>>;

  useEffect(() => {
    if (data.error && data.error.data.detail === "Token is not a valid UUID") {
      localStorage.removeItem("token");
      return;
    }

    if (data.data) {
      console.log(data.data)
      dispatch(userStateActions.changeUserState(data.data.data));
    }
  }, [data.data, data.error, dispatch]);
}

export default useGetMeApi;