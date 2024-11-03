import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {  IUserTelegram, IUserWallet } from "type/User";


const initialState:IUserWallet|IUserTelegram={
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
        changeUserState(state,action: PayloadAction<IUserWallet|IUserTelegram>) {
         
          Object.assign(state, action.payload);
         },
        //  RemoveUserState(state) {
        //    state={
        //     id: "",
        //     telegram_id: "",
        //     wallet_address:"" ,
        //     card: {
        //       name:"",
        //       username: "",
        //       short_description: "",
        //       description: "",
        //       logo_url: "",
        //       banner_url: "",
        //       websites: ""
        //     },
        //     settings: {
        //       primary_currency: "",
        //       primary_currency_type: ""
        //     }
        // }
        //  },
    }
})
export const userStateActions=userStateSlice.actions;
export const userStateReducer=userStateSlice.reducer