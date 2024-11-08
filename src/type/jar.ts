export interface IJarCreate{
    websocket_id:string;
    display_name:string;
    description:string;
    photo_url:string|null;
    banner_url:string|null;
    allowed_currencies: string[];
    show_in_profile: boolean;
}