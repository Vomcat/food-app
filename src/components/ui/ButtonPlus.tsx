import styled from "styled-components";

import { ButtonPlusProps } from "interfaces/Ui";

import { colors } from "styles";

import PlusIconWhite from "assets/images/plus.png";
import PlusIconBlack from "assets/images/plusBlack.png";
import MinusIconBlack from "assets/images/minus.png";

const Button = styled.button<Omit<ButtonPlusProps, "addItem">>`
  position: relative;
  border: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
  background-color: ${(props) =>
    props.variant !== "default" ? colors.lightGrey : colors.secondary};
  border-radius: ${(props) => (props.variant !== "default" ? "50%" : "5px")};
  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "default" ? colors.lightGrey : colors.primary};
  }
`;

const ButtonPlus: React.FC<ButtonPlusProps> = ({
  variant = "default",
  plusIcon = true,
  clickHandler,
}) => {
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

export default ButtonPlus;
