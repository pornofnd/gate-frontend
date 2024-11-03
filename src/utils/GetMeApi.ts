
import { useDispatch } from "react-redux"
import { useGetMeQuery } from "store/api/user"
import { userStateActions } from "store/reducer/stateUser"
import { IError, IGetMError } from "type/Error"
import { Response } from "type/Response"
import {  IUserWallet } from "type/user"

function GetMeApi(){

 
  const {data,error}= useGetMeQuery() as Response<IUserWallet,IError<IGetMError>>
  const dispatch = useDispatch();
       if(error){
        if(error.data.detail=="Token is not a valid UUID"){
            localStorage.removeItem('token')
            return
        }
      
    }
        if(data){
        
        dispatch(userStateActions.changeUserState(data.data))
     }

}
export default GetMeApi;