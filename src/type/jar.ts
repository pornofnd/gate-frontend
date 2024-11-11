export interface IJarCreate{
    websocket_id:string;
    display_name:string;
    description:string;
    photo:string|null;
    banner:string|null;
    allowed_currencies: string[];
    show_in_profile: boolean;
}