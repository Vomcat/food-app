import { useSelector } from "react-redux";

import styled from "styled-components";

import { RootState } from "store/store";

import Cart from "components/Cart/Cart";
import Form from "components/Form/Form";

const Order = () => {
  const cartItems = useSelector((state: RootState) => state.items);

  return (
    <>
      <Form />
      <Cart variant="default" items={cartItems} />
    </>
  );
};

export default Order;
