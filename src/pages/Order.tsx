import { useSelector } from "react-redux";

import styled from "styled-components";
import { respondFrom, dimensions, breakpoints, respondTo } from "styles";

import { RootState } from "store/store";

import Cart from "components/Cart/Cart";
import Form from "components/Form/Form";
import PageContentContainer from "components/Ui/PageContentContainer";

const HeadingStyle = styled.h1`
  font-size: ${dimensions.fonts.heading}px;
  padding-bottom: ${dimensions.spacing.md3}px;

  ${respondFrom(breakpoints.tablet)`
    padding-bottom: ${dimensions.spacing.md2}px;
`}
`;

const OrderContainer = styled.div`
  min-height: calc(100vh - 50px);
  padding: ${dimensions.spacing.md}px 0;

  ${respondFrom(breakpoints.desktop)`
    padding: ${dimensions.spacing.md3}px 0;
    min-height: calc(100vh - 50px - 82px);
`}
`;

const OrderWrapper = styled.div`
  display: grid;
  gap: 50px;

  ${respondFrom(breakpoints.desktop)`
    grid-template-columns: 1fr 30%;
    gap: 100px;
`}

  >*:last-child {
    ${respondTo(breakpoints.desktop)`
        order: -1;
      `}
  }
`;

const Order = () => {
  const cartItems = useSelector((state: RootState) => state.items);

  return (
    <>
      <PageContentContainer>
        <OrderContainer>
          <HeadingStyle>Checkout</HeadingStyle>
          <OrderWrapper>
            <Form />
            <Cart variant="default" items={cartItems} />
          </OrderWrapper>
        </OrderContainer>
      </PageContentContainer>
    </>
  );
};

export default Order;
