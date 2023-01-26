import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from "styled-components";

import { respondFrom, dimensions, breakpoints, colors, fonts } from "styles";

import { FormData } from "interfaces/Form";
import { orderSchema } from "components/Form/orderSchema";

import Input from "./Input";
import Button from "components/Ui/Button";

interface FormStylesProps {
  inputSize?: string;
}

const FormWrapper = styled.div``;

const FormHeading = styled.h1`
  font-size: ${dimensions.fonts.heading}px;
  padding-bottom: ${dimensions.spacing.md}px;

  ${respondFrom(breakpoints.tablet)`
    padding-bottom: ${dimensions.spacing.md2}px;
`}
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${respondFrom(breakpoints.tablet)`
    flex-direction: row;
    gap: ${dimensions.spacing.md}px;
`}
`;

const InputGroup = styled.div<FormStylesProps>`
  position: relative;
  padding-bottom: ${dimensions.spacing.md}px;
  display: flex;
  flex-direction: column;

  ${respondFrom(breakpoints.tablet)`
    padding-bottom: ${dimensions.spacing.md3}px;
    flex: ${(props: { inputSize: string }) =>
      props.inputSize === "small"
        ? `15%;`
        : props.inputSize === "big"
        ? "85%"
        : `50%`};
  `}
`;

const InputErrorMessage = styled.p`
  position: absolute;
  left: ${dimensions.spacing.md}px;
  bottom: ${dimensions.spacing.md}px;
  font-family: ${fonts.primaryItalic};
  font-size: ${dimensions.fonts.xsmall}px;
  color: ${colors.red};
`;

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(orderSchema) });

  const onSubmit = (data: any) => {
    console.log(data, errors.name);
  };

  return (
    <FormWrapper>
      <FormHeading>Checkout</FormHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <InputGroup>
            <Input placeholder="Name" type="text" {...register("name")} />
            <InputErrorMessage>{errors.name?.message}</InputErrorMessage>
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="Last Name"
              type="text"
              {...register("lastName")}
            />
            <InputErrorMessage>{errors.lastName?.message}</InputErrorMessage>
          </InputGroup>
        </InputsWrapper>
        <InputsWrapper>
          <InputGroup>
            <Input placeholder="Email" type="email" {...register("email")} />
            <InputErrorMessage>{errors.email?.message}</InputErrorMessage>
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="Phone number"
              type="text"
              {...register("phoneNumber")}
            />
            <InputErrorMessage>{errors.phoneNumber?.message}</InputErrorMessage>
          </InputGroup>
        </InputsWrapper>
        <InputsWrapper>
          <InputGroup inputSize="big">
            <Input
              placeholder="Street address"
              type="text"
              {...register("streetAddress")}
            />
            <InputErrorMessage>
              {errors.streetAddress?.message}
            </InputErrorMessage>
          </InputGroup>
          <InputGroup inputSize="small">
            <Input
              placeholder="Street number"
              type="text"
              {...register("streetNumber")}
            />
            <InputErrorMessage>
              {errors.streetNumber?.message}
            </InputErrorMessage>
          </InputGroup>
        </InputsWrapper>
        <InputsWrapper>
          <InputGroup inputSize="big">
            <Input placeholder="City" type="text" {...register("city")} />
            <InputErrorMessage>{errors.city?.message}</InputErrorMessage>
          </InputGroup>
          <InputGroup inputSize="small">
            <Input
              placeholder="Post code"
              type="text"
              {...register("postCode")}
            />
            <InputErrorMessage>{errors.postCode?.message}</InputErrorMessage>
          </InputGroup>
        </InputsWrapper>
        <Button type="submit">Order</Button>
      </form>
    </FormWrapper>
  );
};

export default Form;
