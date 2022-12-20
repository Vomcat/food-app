import styled from "styled-components";

import { colors, dimensions, fonts, respondFrom, breakpoints } from "styles";

import ItemImg from "assets/images/item1.png"

const Item = styled.div`
    text-align: center;
    padding: ${dimensions.spacing.md}px ${dimensions.spacing.md3}px ${dimensions.spacing.md3}px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    gap: ${dimensions.spacing.md2}px;
    max-width: 300px;

    ${respondFrom(breakpoints.desktop)`
        max-width: 330px;
    `}
`

const ItemImage = styled.div`
`

const ItemTitle = styled.p`
    font-size: 20px;
    font-family: ${fonts.secondaryBold}
`

const ItemPrice = styled.div`
    display: flex;
    justify-content: space-between;
`


const ProductItem =()=>{
    return (
    <Item>
        <ItemImage><img src={ItemImg} alt="elo"/></ItemImage>
        <ItemTitle>Very deciusules mniam mniam food</ItemTitle>
        <ItemPrice><ItemTitle>$5,90</ItemTitle><button>add</button></ItemPrice>
    </Item>
    )
}

export default ProductItem;