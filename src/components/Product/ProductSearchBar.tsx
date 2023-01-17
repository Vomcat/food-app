import PageContentContainer from "components/Ui/PageContentContainer";

import styled from "styled-components";

import { baseShadow, colors } from "styles";

const SearchBarWrapper = styled.div`
  ${baseShadow};
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
`;

const SearchBarLeftElements = styled.div`
  display: flex;
  gap: 20px;
`;

const SearchBarRightElements = styled.div``;

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

const ProductSearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarLeftElements>
        <TextElement>All products</TextElement>
        <TextElement>Vege</TextElement>
        <TextElement>With Rice</TextElement>
        <TextElement>Noodle</TextElement>
      </SearchBarLeftElements>
      <SearchBarRightElements>
        <SelectElement name="Sort by">
          <option>Default sorting</option>
          <option>Alphabetical</option>
          <option>Lowest price</option>
          <option>Highest price</option>
        </SelectElement>
      </SearchBarRightElements>
    </SearchBarWrapper>
  );
};

export default ProductSearchBar;
