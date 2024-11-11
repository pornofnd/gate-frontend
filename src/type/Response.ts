export interface ITelegramResponse {
  auth_date: number;
  id: number;
  first_name: string;
  hash: string;
  photo_url: string | undefined;
  username: string | undefined;
}
export interface ICurrencies {
  id: number;
  full_name: string;
  ticker: string;
  decimals: number;
  contract_address: string;
  icon_url: string;
  listed_on: string[];
}
export interface IToken {
  data: string;
}
export interface IRes<T> {
  data: T;
  message: string;
  ok: boolean;
}
export interface Response<T, Y> {
  data?: IRes<T>;
  error?: Y;
  meta?: { request: Request; response: Response<T, Y> };
}
