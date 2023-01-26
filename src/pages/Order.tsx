import { useSelector } from "react-redux";

import styled from "styled-components";
import { respondFrom, dimensions, breakpoints } from "styles";

import { RootState } from "store/store";

import Cart from "components/Cart/Cart";
import Form from "components/Form/Form";
import PageContentContainer from "components/Ui/PageContentContainer";

const OrderWrapper = styled.div`
  display: grid;
  padding: ${dimensions.spacing.md}px 0;
  gap: 50px;
  min-height: calc(100vh - 50px);

  ${respondFrom(breakpoints.tablet)`
    grid-template-columns: 1fr 30%;
    gap: 100px;
    padding: ${dimensions.spacing.md3}px 0;
    min-height: calc(100vh - 50px - 82px);
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
