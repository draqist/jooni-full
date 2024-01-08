export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

export type Cart = CartItem[];