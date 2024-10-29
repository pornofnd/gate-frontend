import { IWallet } from "./wallets";


interface IResGood{
    data:IWallet[],
    message:string,
    ok:boolean
}
export type Response={
    data?: IResGood;
    error?: unknown;
    meta?: { request: Request; response: Response };
  }

  


