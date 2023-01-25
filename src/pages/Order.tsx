import { useSelector } from "react-redux";

import styled from "styled-components";
import { respondFrom, dimensions, breakpoints } from "styles";

import { RootState } from "store/store";

import Cart from "components/Cart/Cart";
import Form from "components/Form/Form";
import PageContentContainer from "components/Ui/PageContentContainer";

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: ${dimensions.spacing.md}px 0;
  gap: 50px;

  ${respondFrom(breakpoints.tablet)`
    flex-direction: row;
    gap: 100px;
    padding: ${dimensions.spacing.md3}px 0;
`}
`;

const Order = () => {
  const cartItems = useSelector((state: RootState) => state.items);

  return (
    <>
      <PageContentContainer>
        <OrderWrapper>
          <Form />
          <Cart variant="default" items={cartItems} />
        </OrderWrapper>
      </PageContentContainer>
    </>
  );
};

export default Order;
