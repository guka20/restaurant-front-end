import { ProductCardTypes } from "src/types/Types";

export type CartType = {
  cart_item_id: string;
  quantity: number;
  product: ProductCardTypes;
};
