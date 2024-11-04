import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetMeQuery } from "store/api/user";
import { userStateActions } from "store/reducer/stateUser";
import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { IUserTelegram, IUserWallet } from "type/User";

function useGetMeApi(isAuthorized: boolean) {
  const dispatch = useDispatch();

  if (!isAuthorized || !localStorage.getItem('token')) {
    return; // Exit if not authorized or token is missing
  }

  const { data, error } = useGetMeQuery(undefined, { skip: !isAuthorized }) as Response<IUserWallet | IUserTelegram, IError<IGetMError>>;

  useEffect(() => {
    if (error && error.data?.detail === "Token is not a valid UUID") {
      localStorage.removeItem("token");
      return;
    }

    if (data) {
      dispatch(userStateActions.changeUserState(data.data));
    }
  }, [data, error, dispatch]);
}

export default useGetMeApi;
