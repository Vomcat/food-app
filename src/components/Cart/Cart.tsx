import { useSelector, useDispatch } from "react-redux";

import { RootState } from "store/store";

import { cartActions } from "store/cartSlice";

import styled from "styled-components";

import CartItem from "./CartItem";

import { CartStyleProps } from "interfaces/Cart";

import {
  respondFrom,
  breakpoints,
  errorText,
  dimensions,
  fonts,
  colors,
} from "styles";

const CartWrapper = styled.div<Pick<CartStyleProps, "variant">>`
  display: flex;
  flex-direction: column;
  gap: ${dimensions.spacing.md}px;
  ${(props) =>
    props.variant === "menu" &&
    `position: absolute; top: 42px; right:0; padding: 50px; width:500px;  background-color: ${colors.white}; border-bottom-left-radius:17px; border-bottom-right-radius:17px;`}
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${dimensions.spacing.md};

  ${respondFrom(breakpoints.tablet)`
  padding-bottom: ${dimensions.spacing.md2}
  `}
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${dimensions.spacing.md}px;

  ${respondFrom(breakpoints.tablet)`
    max-height: 194px;
    overflow-y: scroll;
  `}
`;

const RemoveAllText = styled.p`
  ${errorText}
`;

const SummaryBlock = styled.div`
  align-self: end;
  display: flex;
  gap: 80px;
`;

const SummaryText = styled.p`
  font-family: ${fonts.secondaryBold};
  font-size: ${dimensions.fonts.medium}px;
`;

const Cart: React.FC<CartStyleProps> = ({ variant, items }) => {
  const totalPrice = useSelector((state: RootState) => state.totalAmount);
  const dispatch = useDispatch();

  const removeAllItemsHandler = () => {
    dispatch(cartActions.removeAllItems());
  };

  return (
    <CartWrapper variant={variant}>
      <HeaderWrapper>
        <h3>Shopping Cart</h3>
        {items.length > 0 && (
          <RemoveAllText onClick={removeAllItemsHandler}>
            Remove All
          </RemoveAllText>
        )}
      </HeaderWrapper>
      <CartItemWrapper>
        {items.length > 0
          ? items.map(({ id, name, price, totalPrice, quantity }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                price={price}
                totalPrice={totalPrice}
                quantity={quantity}
              />
            ))
          : "Cart is empty"}
      </CartItemWrapper>
      <SummaryBlock>
        <SummaryText>Total:</SummaryText>
        <SummaryText>{totalPrice.toFixed(2)}$</SummaryText>
      </SummaryBlock>
    </CartWrapper>
  );
};

export default Cart;
