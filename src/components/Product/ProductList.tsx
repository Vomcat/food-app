import { useEffect, useState } from "react";

import styled from "styled-components";
import Item from "components/Product/ProductItem";

import { respondFrom, breakpoints, dimensions } from "styles";

import { ProductItemElements } from "interfaces/Product";

const ProductListWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: minmax(215px, 320px);
  gap: ${dimensions.spacing.lg}px;

  ${respondFrom(breakpoints.tablet)`
        grid-template-columns: repeat(2,minmax(215px, 320px));
        gap: ${dimensions.spacing.lg3}px ${dimensions.spacing.lgmax}px;
    `}

  ${respondFrom(breakpoints.desktop)`
        grid-template-columns: repeat(3,minmax(215px, 1fr));
        gap: ${dimensions.spacing.lg3}px ${dimensions.spacing.lgmax}px;
    `}
`;

const ProductList = () => {
  const [items, setItems] = useState<ProductItemElements[]>([]);

  const fetchData = async () => {
    const response = await fetch(" http://localhost:3000/items");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductListWrapper>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
