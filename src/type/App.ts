export interface IAppResponseCereateData {
  type: "public";
  app: {
    id: string;
    card: {
      name: string;
      username: string;
      short_description: string;
      description: string;
      logo_urls: string[];
      banner_urls: string[];
    };
    wallet: {
      id: string;
      balance: Record<string, string>;
      total_balance: string;
    };
    flags: string[];
    suspicion_reason: string;
    ban_reason: string;
    payments_api_token: string;
    allowed_ips: string[];
    settings: {
      config_url: string;
      tg_required: boolean;
      wallet_required: boolean;
      tg_registration_required: boolean;
      wallet_registration_required: boolean;
      locales: string[];
      default_locale: string;
      subtract_our_fee: boolean;
      callback_url: string;
    };
  };
}
type WalletBalance = Record<string, string>;

interface Wallet {
  id: string;
  balance: WalletBalance;
  total_balance: string;
}

interface Card {
  name: string;
  username: string;
  short_description: string;
  description: string;
  logo_urls: string[];
  banner_urls: string[];
  links: string[];
}

interface Settings {
  config_url: string;
  tg_required: boolean;
  wallet_required: boolean;
  tg_registration_required: boolean;
  wallet_registration_required: boolean;
  locales: string[];
  default_locale: string;
  subtract_our_fee: boolean;
  callback_url: string;
}

export interface IApp {
  id: string;
  card: Card;
  wallet: Wallet;
  flags: string[];
  suspicion_reason: string;
  ban_reason: string;
  payments_api_token: string;
  allowed_ips: string[];
  settings: Settings;
}
export interface IAppGetList{
app:IApp
type:"private"|"public"
}