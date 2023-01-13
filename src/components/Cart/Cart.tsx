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

const CartWrapper = styled.div<CartStyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${dimensions.spacing.md}px;
  ${(props) =>
    props.variant === "menu" &&
    `position: absolute; top: 42px; right:0; padding: 50px; width:500px; background-color: ${colors.white}; border-bottom-left-radius:17px; border-bottom-right-radius:17px;`}
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

const Cart: React.FC<CartStyleProps> = ({ variant }) => {
  return (
    <CartWrapper variant={variant}>
      <HeaderWrapper>
        <h3>Shopping Cart</h3>
        <RemoveAllText>Remove All</RemoveAllText>
      </HeaderWrapper>
      <CartItem />
      <CartItem />
      <SummaryBlock>
        <SummaryText>Total:</SummaryText>
        <SummaryText>20$</SummaryText>
      </SummaryBlock>
    </CartWrapper>
  );
};

export default Cart;
