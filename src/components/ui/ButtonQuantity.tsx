import styled from "styled-components";

import { ButtonQuantityProps } from "interfaces/Ui";

import { colors } from "styles";

import PlusIconWhite from "assets/images/plus.png";
import PlusIconBlack from "assets/images/plusBlack.png";
import MinusIconBlack from "assets/images/minus.png";

const Button = styled.button<Omit<ButtonQuantityProps, "addItem">>`
  position: relative;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
  background-color: ${(props) =>
    props.variant !== "default" ? colors.lightGrey : colors.secondary};
  border-radius: ${(props) => (props.variant !== "default" ? "50%" : "5px")};
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "default" ? colors.lightGrey : colors.primary};
  }
`;

const ButtonQuantity = (props: ButtonQuantityProps) => {
  const { variant = "default", plusIcon = true, clickHandler } = props;

  return (
    <Button variant={variant} type="button" onClick={clickHandler}>
      {plusIcon ? (
        <img
          src={variant === "default" ? PlusIconWhite : PlusIconBlack}
          alt="plus icon"
        />
      ) : (
        <img src={MinusIconBlack} alt="minus icon" />
      )}
    </Button>
  );
};

export default ButtonQuantity;
