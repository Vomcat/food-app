import styled from "styled-components";
import Item from "components/Product/ProductItem";

import { respondFrom, breakpoints, dimensions } from "styles";

const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${dimensions.spacing.lg}px;

    ${respondFrom(breakpoints.tablet)`
        flex-wrap: wrap;
        flex-direction: row;
        gap: ${dimensions.spacing.lg3}px ${dimensions.spacing.lgmax}px;
    `}
`

const ProductList =()=>{
    return <ProductListWrapper>
    <Item/><Item/><Item/><Item/><Item/></ProductListWrapper>
}

export default ProductList;