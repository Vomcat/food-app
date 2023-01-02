import styled from "styled-components";

import ButtonPlus from "components/Layout/ButtonPlus";

import { colors, dimensions, fonts, respondFrom, breakpoints } from "styles";

import { ProductItemElements } from "interfaces/Product";

import ItemImg from "assets/images/item1.png"

const Item = styled.div`
    text-align: center;
    padding: ${dimensions.spacing.md}px ${dimensions.spacing.md3}px ${dimensions.spacing.md3}px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    gap: ${dimensions.spacing.md2}px;
    

    ${respondFrom(breakpoints.desktop)`
        flex: 0 0 33.33333%;
        max-width: 33%;
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


const ProductItem: React.FC<ProductItemElements> =({id,image, name, price})=>{
    return (
    <Item>
        <ItemImage><img src={image} alt="elo"/></ItemImage>
        <ItemTitle>{name}</ItemTitle>
        <ItemPrice><ItemTitle>{price}</ItemTitle><ButtonPlus color="grey"/></ItemPrice>
    </Item>
    )
}

export default ProductItem;