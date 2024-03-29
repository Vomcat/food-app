import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import {
  respondFrom,
  breakpoints,
  errorText,
  dimensions,
  fonts,
  colors,
} from "styles";

import { RootState } from "store/store";
import { cartActions } from "store/cartSlice";

import { CartProps } from "interfaces/Cart";

import CartItem from "./CartItem";
import Button from "components/Ui/Button";

const CartWrapper = styled.div<Pick<CartProps, "variant">>`
  display: flex;
  flex-direction: column;
  gap: ${dimensions.spacing.md}px;

  ${(props) =>
    props.variant === "menu" &&
    `
      position: absolute;
      top: ${dimensions.spacing.lg2}px;
      right:0;
      padding: ${dimensions.spacing.md}px;
      width:400px;
      max-width:100%;
      background-color: ${colors.white};
      border-bottom-left-radius:17px;
      border-bottom-right-radius:17px;
    `}
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
    overflow-y: auto;
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

const Cart = (props: CartProps) => {
  const { variant, items, onMouseEnter, onMouseLeave } = props;

  const navigate = useNavigate();

  const totalPrice = useSelector((state: RootState) => state.totalAmount);
  const dispatch = useDispatch();

  const removeAllItemsHandler = () => {
    dispatch(cartActions.removeAllItems());
  };

  const redirectHendler = () => {
    navigate("/order");
    onMouseLeave && onMouseLeave();
  };

  return (
    <CartWrapper
      variant={variant}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HeaderWrapper>
        <h3>Shopping Cart</h3>
        {items?.length > 0 && (
          <RemoveAllText onClick={removeAllItemsHandler}>
            Remove All
          </RemoveAllText>
        )}
      </HeaderWrapper>
      <CartItemWrapper>
        {items?.length > 0
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
        <SummaryText>{totalPrice?.toFixed(2)}$</SummaryText>
      </SummaryBlock>
      {variant === "menu" && items?.length > 0 && (
        <Button clickHandler={redirectHendler}>Order</Button>
      )}
    </CartWrapper>
  );
};

export default Cart;
