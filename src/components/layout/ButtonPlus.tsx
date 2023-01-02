import styled from "styled-components";

import { ButtonStyles } from "interfaces/Layout";

import { colors } from "styles";

const Button = styled.button`
    border: none;
    width: 28px;
    height: 28px;
    background-color: ${props => props.color ? colors.lightGrey : colors.secondary};;
    border-radius: 5px;
`

const ButtonPlus: React.FC<ButtonStyles> = ({plus, color, shape})=>{

    return <Button plus ></Button>

}

export default ButtonPlus;