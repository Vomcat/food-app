import { forwardRef, InputHTMLAttributes } from "react";

import styled from "styled-components";

import { colors, dimensions, respondFrom, breakpoints } from "styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeEl?: "small" | "big";
}

const InputMain = styled.input`
  outline: none;
  border-radius: 16px;
  border: 1px solid ${colors.secondary};
  padding: ${dimensions.spacing.sm}px ${dimensions.spacing.md}px;

  ${respondFrom(breakpoints.tablet)`
    padding: ${dimensions.spacing.sm}px ${dimensions.spacing.md}px;
  `}
`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { ...inpputAtributes } = props;
  return <InputMain ref={ref} {...inpputAtributes} />;
});

export default Input;
