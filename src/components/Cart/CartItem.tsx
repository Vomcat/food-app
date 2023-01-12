import styled from "styled-components";

import ButtonPlus from "components/layout/ButtonPlus";

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

const CartItem = () => {
  return (
    <CartItemWrapper>
      <p>Mniam</p>
      <ItemText>$5,90</ItemText>
      <ItemRemove>Remove</ItemRemove>
      <ItemCount>
        <ButtonPlus variant="grey" />
        <ItemCountNumber>2</ItemCountNumber>
        <ButtonPlus variant="grey" plusIcon={false} />
      </ItemCount>
    </CartItemWrapper>
  );
};

export default CartItem;
