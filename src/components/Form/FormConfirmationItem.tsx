import styled from "styled-components";
import { respondFrom, breakpoints, dimensions, colors } from "styles";

import { CartItemProps } from "interfaces/Cart";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const FormConfirmationItem = (props: CartItemProps) => {
  const { name, totalPrice, quantity } = props;

  return (
    <ItemWrapper>
      <p>
        {quantity} x {name}
      </p>
      <ItemText>${totalPrice.toFixed(2)}</ItemText>
    </ItemWrapper>
  );
};

export default FormConfirmationItem;
