import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {  IUserWallet } from "type/user";


const initialState:IUserWallet={
    id: "",
    telegram_id:"",
    wallet_address:"" ,
    card: {
      name:"",
      username:"",
      short_description:"",
      description:"",
      logo_url:"",
      banner_url:"",
      websites:""
    },
    settings: {
      primary_currency: "",
      primary_currency_type: ""
    }
}

export const userStateSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        changeUserState(state,action: PayloadAction<IUserWallet>) {
            console.log(action.payload)
            state=action.payload;
             console.log(state)
         },
         RemoveUserState(state) {
           state={
            id: "",
            telegram_id: "",
            wallet_address:"" ,
            card: {
              name:"",
              username: "",
              short_description: "",
              description: "",
              logo_url: "",
              banner_url: "",
              websites: ""
            },
            settings: {
              primary_currency: "",
              primary_currency_type: ""
            }
        }
         },
    }
})
export const userStateActions=userStateSlice.actions;
export const userStateReducer=userStateSlice.reducer