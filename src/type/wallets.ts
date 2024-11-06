export interface IWallet{
    "name": "string",
    "image": "string",
    "about_url": "string",
    "app_name": "string",
    "bridge_url": "string",
    "universal_url": "string"
}
interface IBalance {
    additionalProp1: string|null,
    additionalProp2: string|null,
    additionalProp3: string|null,
  }
interface IOnhHold{
    additionalProp1: string,
    additionalProp2: string,
    additionalProp3: string 
}
export interface IListWallet{
 id: string,
 user_id: string,
 balance:IBalance|{},
 on_hold: IOnhHold|{},
 display_name: string,
 priority: 0
}