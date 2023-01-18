import { useDispatch } from "react-redux";
import styled from "styled-components";

import ButtonPlus from "components/Ui/ButtonPlus";

import { cartActions } from "store/cartSlice";

import { CartItemProps } from "interfaces/Cart";

import {
  respondFrom,
  breakpoints,
  errorText,
  dimensions,
  fonts,
  colors,
} from "styles";

const CartItemWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  gap: ${dimensions.spacing.sm}px;
  border-bottom: 1px solid ${colors.lightGrey};
  padding-bottom: ${dimensions.spacing.sm}px;

  ${respondFrom(breakpoints.tablet)`
    gap: ${dimensions.spacing.md}px;
    padding-bottom: ${dimensions.spacing.md}px;
    `};
`;

const ItemText = styled.p`
  text-align: right;
`;

const ItemRemove = styled.p`
  ${errorText}
`;

const ItemCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${dimensions.spacing.md}px;

  ${respondFrom(breakpoints.tablet)`
  gap: ${dimensions.spacing.md2}px;`}
`;

const ItemCountNumber = styled.p`
  font-family: ${fonts.secondary};
`;

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  id,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ name, quantity: 1, price, id, totalPrice }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  const removeOneItemHandler = () => {
    dispatch(cartActions.removeOneItem(id));
  };

  return (
    <CartItemWrapper>
      <p>{name}</p>
      <ItemText>${totalPrice.toFixed(2)}</ItemText>
      <ItemRemove onClick={removeOneItemHandler}>Remove</ItemRemove>
      <ItemCount>
        <ButtonPlus variant="grey" clickHandler={addItemHandler} />
        <ItemCountNumber>{quantity}</ItemCountNumber>
        <ButtonPlus
          variant="grey"
          plusIcon={false}
          clickHandler={removeItemHandler}
        />
      </ItemCount>
    </CartItemWrapper>
  );
};

export default CartItem;
