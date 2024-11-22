export interface IPorduct {
  id: string; // UUID
  app_id: string; // UUID
  display_name: string;
  internal_name: string;
  usdt_price: string;
  countable: boolean;
  additional_schema: Record<string, unknown>;
}
