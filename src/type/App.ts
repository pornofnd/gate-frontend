export interface IAppResponseData {
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
  