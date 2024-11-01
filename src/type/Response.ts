


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

  


