import { FormData } from "interfaces/Form";
import { CartItemProps } from "interfaces/Cart";

export interface OrderItemProps extends FormData {
  date: string;
  orderTotalPrice: number;
  orderItems: CartItemProps[];
}
