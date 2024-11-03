import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetMeQuery } from "store/api/user";
import { userStateActions } from "store/reducer/stateUser";
import { IError, IGetMError } from "type/Error";
import { Response } from "type/Response";
import { IUserTelegram, IUserWallet } from "type/User";

function useGetMeApi() {
  const dispatch = useDispatch();
  const { data, error } = useGetMeQuery() as Response<IUserWallet|IUserTelegram, IError<IGetMError>>;

  useEffect(() => {
    if (error && error.data.detail === "Token is not a valid UUID") {
      localStorage.removeItem("token");
      return;
    }

    if (data) {
      dispatch(userStateActions.changeUserState(data.data));
    }
  }, [data, error, dispatch]);
}

export default useGetMeApi;