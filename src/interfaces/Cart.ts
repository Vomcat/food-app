export interface CartProps {
  variant: "default" | "menu";
  items: CartItemProps[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  totalPrice: number;
  quantity: number;
}
