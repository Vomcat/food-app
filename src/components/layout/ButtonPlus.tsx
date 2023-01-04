import styled from "styled-components";

import { ButtonStyles } from "interfaces/Layout";

import { colors } from "styles";

import PlusIconWhite from "assets/images/plus.png";

const Button = styled.button<ButtonStyles>`
  position: relative;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
  background-color: ${(props) =>
    props.variant != "default" ? colors.lightGrey : colors.secondary};
  border-radius: ${(props) => (props.variant != "default" ? "50%" : "5px")};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.variant != "default" ? colors.dark : colors.primary};
  }
`;

const ButtonPlus: React.FC<ButtonStyles> = ({ variant = "default" }) => {
  return (
    <Button variant={variant} type="button">
      <img src={PlusIconWhite} alt="plus icon" />
    </Button>
  );
};

export default ButtonPlus;
