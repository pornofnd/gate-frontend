export interface IUserWallet{
    id: string,
    telegram_id: string,
    wallet_address: string,
    card: {
      banner_url:string
      description: string
      logo_url: string
      name: string
      short_description: string
      username: string
      websites: string
    },
    settings: {
      primary_currency: string,
      primary_currency_type: string
    }
}
export interface IUserTelegram{
    id: string,
    telegram_id: number,
    wallet_address: null,
    card: {
      banner_url:string
      description: string
      logo_url: string
      name: string
      short_description: string
      username: string
      websites: string[]
    },
    settings: {
      primary_currency: null,
      primary_currency_type: null
    }
}