import styled from "styled-components";
import { baseShadow, colors } from "styles";

import { ProductSortBarProps } from "interfaces/Product";

const SearchBarWrapper = styled.div`
  ${baseShadow};
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
  overflow: hidden;
`;

const SelectElement = styled.select`
  display: block;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  background-color: white;
  margin: 0 10px;
  border: none;
  outline: none;
`;

const TextElement = styled.div`
  cursor: pointer;
  padding: 7px 10px;
  border-radius: 20px;
  white-space: nowrap;

  &:hover {
    background-color: ${colors.lightGrey};
  }
`;

const ProductSortBar = (props: ProductSortBarProps) => {
  const { changeHandler } = props;

  return (
    <SearchBarWrapper>
        <SelectElement name="Sort by" defaultValue={0} onChange={changeHandler}>
          <option value={0}>Default sorting</option>
          <option value={1}>Lowest price</option>
          <option value={2}>Highest price</option>
        </SelectElement>
    </SearchBarWrapper>
  );
};

export default ProductSortBar;
