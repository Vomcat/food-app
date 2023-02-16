import { useDispatch } from "react-redux";
import styled from "styled-components";

import ButtonPlus from "components/Ui/ButtonPlus";

import { cartActions } from "store/cartSlice";

import { colors, dimensions, fonts, respondFrom, breakpoints } from "styles";

import { ProductItemProps } from "interfaces/Product";

const Item = styled.div`
  text-align: center;
  padding: ${dimensions.spacing.md}px ${dimensions.spacing.md3}px
    ${dimensions.spacing.md3}px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  gap: ${dimensions.spacing.md2}px;

  ${respondFrom(breakpoints.tablet)`
       height: 100%;
    `}
`;

const ItemImage = styled.div``;

const ItemTitle = styled.p`
  font-size: 20px;
  font-family: ${fonts.secondaryBold};
`;

const ItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  imageURI,
  name,
  price,
}) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ name, price, id, quantity: 1 }));
  };
  return (
    <Item>
      <ItemImage>
        <img src={imageURI} alt={name} />
      </ItemImage>
      <ItemTitle>{name}</ItemTitle>
      <ItemPrice>
        <ItemTitle>{price} $</ItemTitle>
        <ButtonPlus clickHandler={addItemHandler} />
      </ItemPrice>
    </Item>
  );
};

export default ProductItem;
