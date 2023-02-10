import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { dimensions, breakpoints, respondFrom, colors } from "styles";

import { RootState } from "store/store";

import { FormConfimationProps } from "interfaces/Form";

import useFetch from "hooks/useFetch";

import FormConfirmationItem from "./FormConfirmationItem";
import Button from "components/Ui/Button";

const HeadingStyle = styled.h2`
  font-size: ${dimensions.fonts.medium}px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${dimensions.spacing.md}px 0;
  gap: ${dimensions.spacing.lg2}px;

  ${respondFrom(breakpoints.desktop)`
    gap: ${dimensions.spacing.lg}px;
    padding: ${dimensions.spacing.md3}px 0;
  `}
`;

const FormDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${dimensions.spacing.md}px;
  word-break: break-all;

  ${respondFrom(breakpoints.tablet)`
    flex-direction: row;
    gap: ${dimensions.spacing.md}px;
  `}
`;

const DataSummary = styled.div`
  flex: 50%;
`;

const DataSummaryHeading = styled.p`
  padding-bottom: ${dimensions.spacing.sm}px;
`;

const OrderData = styled.div``;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${dimensions.spacing.md2}px;
`;

const OrderSummaryPrice = styled.p`
  text-align: right;
`;

const ButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${dimensions.spacing.md3}px 0;
  gap: ${dimensions.spacing.md}px;

  ${respondFrom(breakpoints.tablet)`
    flex-direction: row;
    gap: ${dimensions.spacing.md}px;
    padding: ${dimensions.spacing.md3}px 0;
  `}
`;

const ErrorTextStyle = styled.p`
  position: absolute;
  color: ${colors.red};
  top: 0;
  left: 0;
`;

const SuccesStyle = styled.div`
  text-align: center;

  p {
    padding: ${dimensions.spacing.md}px;
  }
`;

const FormConfirmation = (props: FormConfimationProps) => {
  const {
    clickHandler,
    data: {
      name,
      lastName,
      email,
      phoneNumber,
      streetAddress,
      streetNumber,
      postCode,
      city,
    },
  } = props;

  const [stateOfFetch, setStateOfFetch] = useState(false);

  const orderItems = useSelector((state: RootState) => state.items);
  const orderTotalPrice = useSelector((state: RootState) => state.totalAmount);

  const { error, sendRequest } = useFetch();

  const navigate = useNavigate();

  const date = new Date();

  const senDataHandler = async () => {
    await sendRequest({
      url: "order",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        orderItems,
        orderTotalPrice,
        name,
        lastName,
        email,
        phoneNumber,
        streetAddress,
        streetNumber,
        postCode,
        city,
        date: date.toLocaleDateString(),
      },
    });

    setStateOfFetch(true);
  };

  const redirectHendler = () => {
    navigate("/");
  };

  if (!error && stateOfFetch)
    return (
      <SuccesStyle>
        <HeadingStyle>Your order has been accepted!</HeadingStyle>
        <p>Go back to the home page</p>
        <Button clickHandler={redirectHendler}>Go back</Button>
      </SuccesStyle>
    );

  return (
    <>
      <HeadingStyle>Your Order</HeadingStyle>
      <Wrapper>
        <FormDataWrapper>
          <DataSummary>
            <DataSummaryHeading>Address:</DataSummaryHeading>
            <p>
              {streetAddress} {streetNumber}
            </p>
            <p>
              {postCode} {city}
            </p>
          </DataSummary>
          <DataSummary>
            <DataSummaryHeading>Orderer:</DataSummaryHeading>
            <p>
              {name} {lastName}
            </p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
          </DataSummary>
        </FormDataWrapper>
        <OrderData>
          <OrderSummary>
            {orderItems.map((item) => (
              <FormConfirmationItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))}
            <OrderSummaryPrice>Total: ${orderTotalPrice}</OrderSummaryPrice>
          </OrderSummary>
        </OrderData>
      </Wrapper>
      <ButtonsWrapper>
        {error && <ErrorTextStyle>{error}</ErrorTextStyle>}
        <Button color="red" clickHandler={clickHandler}>
          Back
        </Button>
        <Button clickHandler={senDataHandler}>Confirm</Button>
      </ButtonsWrapper>
    </>
  );
};

export default FormConfirmation;
