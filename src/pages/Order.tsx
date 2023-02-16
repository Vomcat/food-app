import { useSelector } from "react-redux";

import styled from "styled-components";
import { respondFrom, dimensions, breakpoints, respondTo } from "styles";

import { RootState } from "store/store";

import Cart from "components/Cart/Cart";
import Form from "components/Form/Form";
import PageContentContainer from "components/Ui/PageContentContainer";
import Section from "components/Ui/Section";

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
    <Section styles="fullHeight">
      <PageContentContainer>
        <h1>Checkout</h1>
        <OrderWrapper>
          <Form />
          <Cart variant="default" items={cartItems} />
        </OrderWrapper>
      </PageContentContainer>
    </Section>
  );
};

export default Order;
