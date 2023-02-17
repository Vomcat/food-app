import { useEffect, useState } from "react";

import styled from "styled-components";
import { respondFrom, breakpoints, dimensions } from "styles";

import { ProductItemProps } from "interfaces/Product";

import ProductSortBar from "components/Product/ProductSortBar";
import Item from "components/Product/ProductItem";

const ProductListWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: minmax(215px, 320px);
  gap: ${dimensions.spacing.lg}px;
  padding: 50px 0;

  ${respondFrom(breakpoints.tablet)`
        grid-template-columns: repeat(2,minmax(215px, 320px));
        gap: ${dimensions.spacing.lg3}px ${dimensions.spacing.lgmax}px;
    `}

  ${respondFrom(breakpoints.desktop)`
        grid-template-columns: repeat(3,minmax(215px, 1fr));
        gap: ${dimensions.spacing.lg3}px ${dimensions.spacing.lgmax}px;
        padding: 100px 0;
    `}
`;

const ProductList = () => {
  const [items, setItems] = useState<ProductItemProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(" http://localhost:3000/items");
      const data = await response.json();
      setItems(data);
    } catch (err) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSelectSortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortDirection = e.target.value;
    const copyArray = [...items];

    copyArray.sort((a: ProductItemProps, b: ProductItemProps) => {
      return sortDirection === "0"
        ? a.id - b.id
        : sortDirection === "1"
        ? a.name.localeCompare(b.name)
        : sortDirection === "2"
        ? a.price - b.price
        : b.price - a.price;
    });

    setItems(copyArray);
  };

  return (
    <>
      <ProductSortBar changeHandler={onSelectSortHandler} />
      <ProductListWrapper>
        {items.map(({ id, name, price, imageURI }) => (
          <Item
            key={id}
            id={id}
            name={name}
            price={price}
            imageURI={imageURI}
          />
        ))}
      </ProductListWrapper>
    </>
  );
};

export default ProductList;
