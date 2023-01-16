export interface CartStyleProps {
  variant: "default" | "menu";
  items: any[];
}

export interface CartItemProps {
  id?: number;
  name: string;
  price: number;
  quantity: number;
}
