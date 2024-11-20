export interface IJarCreate {
  websocket_id: string;
  display_name: string;
  description: string;
  photo: string | null;
  banner: string | null;
  allowed_currencies: string[];
  show_in_profile: boolean;
}
export interface IJarResponse {
  jars: Jar[];
  total_balance: string;
}
export interface Jar {
  id: string;
  user_id: string;
  display_name: string;
  description: string;
  photo_urls: string[];
  banner_urls: string[];
  allowed_currencies: string[];
  show_in_profile: boolean;
  balance: Record<string, string>;
  total_balance: string;
}
