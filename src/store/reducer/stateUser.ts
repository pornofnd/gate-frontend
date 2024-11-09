import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserTelegram, IUserWallet } from "type/User";

interface IInitialStateUser {
  data: IUserWallet | IUserTelegram;
  needsUserFetch: boolean;
}
const initialState: IInitialStateUser = {
  data: {
    id: "",
    telegram_id: "",
    wallet_address: "",
    card: {
      name: "",
      username: "",
      short_description: "",
      description: "",
      logo_url: "",
      banner_url: "",
      websites: "",
    },
    settings: {
      primary_currency: "",
      primary_currency_type: "",
    },
  },
  needsUserFetch: false,
};

export const userStateSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUserState(state, action: PayloadAction<IUserWallet | IUserTelegram>) {
      Object.assign(state.data, action.payload);
    },
    fetchStartGetMeTrue(state) {
      state.needsUserFetch = true;
    },
    fetchStartGetMeFalse(state) {
      state.needsUserFetch = false;
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
  },
});
export const userStateActions = userStateSlice.actions;
export const userStateReducer = userStateSlice.reducer;
