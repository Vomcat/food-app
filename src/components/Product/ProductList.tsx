import { useEffect, useState } from "react";

import styled from "styled-components";
import Item from "components/Product/ProductItem";

import { respondFrom, breakpoints, dimensions } from "styles";




const ProductListWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${dimensions.spacing.lg}px;

    ${respondFrom(breakpoints.tablet)`
        flex-wrap: wrap;
        gap: ${dimensions.spacing.lg3}px ${dimensions.spacing.lgmax}px;
    `}
`

const ProductList =()=>{
    const [items, setItems] = useState<any[]>([])

    useEffect(()=>{
        fetch(' http://localhost:3000/items').then(res =>res.json()).then( result => setItems(result))
    },[])

    {console.log(items)}
    return (
        <ProductListWrapper>
            {items.map(item=> <Item key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}/>)}
        </ProductListWrapper>
    )
}

export default ProductList;