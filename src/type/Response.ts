
export interface ITelegramResponse {
   auth_date: number;
   id: number;
   first_name: string;
   hash: string;
   photo_url: string | undefined;
   username:string | undefined;
  
}
export interface IToken {
    data: string;
  }
export interface IRes<T>{
    data:T,
    message:string,
    ok:boolean
}
export interface Response<T>{
    data?: IRes<T>;
    error?: unknown;
    meta?: { request: Request; response: Response<T> };
  }

  


