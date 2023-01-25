import styled from "styled-components";

import { ButtonProps } from "interfaces/Ui";
import { colors, dimensions, fonts } from "styles";

const ButtonMain = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  border-radius: 18px;
  font-family: ${fonts.secondaryBold};
  font-size: ${dimensions.fonts.regular}px;
  color: ${colors.white};
  background-color: ${colors.secondary};
  padding: ${dimensions.spacing.sm}px 0;
  transition: 0.4s;

  &:hover {
    background-color: ${colors.primary};
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { type, clickHandler, children } = props;
  return (
    <ButtonMain onClick={clickHandler} type={type}>
      {children}
    </ButtonMain>
  );
};

export default Button;
