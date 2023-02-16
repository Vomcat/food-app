import styled from "styled-components";
import { respondFrom, breakpoints, dimensions, colors } from "styles";

import { OrderItemProps } from "interfaces/Order";

const OrderListStyle = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  padding: ${dimensions.spacing.sm}px 0;

  ${respondFrom(breakpoints.tablet)`
    gap: ${dimensions.spacing.md}px;
    padding: ${dimensions.spacing.md}px 0;
    `};

  p {
    margin-top: ${dimensions.spacing.md}px;
  }
`;

const OrderItem = (props: OrderItemProps) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    streetAddress,
    streetNumber,
    city,
    postCode,
    date,
    orderTotalPrice,
    orderItems,
  } = props;

  const itemsMap = orderItems
    .map((item) => `${item.name} x ${item.quantity}: ${item.totalPrice}$`)
    .join(", ");

  return (
    <OrderListStyle>
      <h3>
        {date} {orderTotalPrice}
      </h3>
      <p>{itemsMap}</p>
    </OrderListStyle>
  );
};

export default OrderItem;
