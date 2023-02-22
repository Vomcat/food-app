import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import styled from "styled-components";
import {
  baseShadow,
  colors,
  dimensions,
  breakpoints,
  respondFrom,
} from "styles";

import { RootState } from "store/store";

import PageContentContainer from "components/Ui/PageContentContainer";
import Cart from "components/Cart/Cart";

import LogoImage from "assets/images/Logo.png";
import CartIcon from "assets/svg/Cart-icon.svg";
import ProfileIcon from "assets/svg/Profile-icon.svg";

const NavigationMain = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background-color: ${colors.white};
  ${baseShadow};
  z-index: 999;
`;

const NavigationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationLogo = styled.div`
  img {
    height: 32px;
  }
`;

const NavigationItemsCounter = styled.div`
  position: absolute;
  top: ${dimensions.spacing.sm}px;
  left: ${dimensions.spacing.xsm}px;
  width: ${dimensions.fonts.regular}px;
  height: ${dimensions.fonts.regular}px;
  border-radius: 50%;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${dimensions.fonts.small}px;
  }
`;

const CartIconStyles = styled.div`
  position: relative;
  height: 100%;
  padding: 14px;
`;

const NavigationIcons = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  img {
    height: 20px;
    width: 20px;
  }
`;

const Navigation = () => {
  const [isOnIcon, setIsOnIcon] = useState(false);
  const [isOnCart, setIsOnCart] = useState(false);

  const cartItems = useSelector((state: RootState) => state.items);
  const cartItemsQuantity = useSelector(
    (state: RootState) => state.totalQuantity
  );

  return (
    <NavigationMain>
      <PageContentContainer>
        <NavigationWrapper>
          <NavigationLogo>
            <Link to="/">
              <img src={LogoImage} alt="Logo" />
            </Link>
          </NavigationLogo>
          <NavigationIcons>
            <CartIconStyles onMouseEnter={() => {
              setIsOnIcon(true);
            }}
              onMouseLeave={() => {
                setIsOnIcon(false);
              }}>
              {cartItemsQuantity > 0 && (
                <NavigationItemsCounter>
                  <p>{cartItemsQuantity}</p>
                </NavigationItemsCounter>
              )}
              <img
                src={ProfileIcon}
                alt="Profile Icon"
              />
            </CartIconStyles>
            <CartIconStyles>
              <Link to="/order-history">
                <img src={CartIcon} alt="Cart Icon" />
              </Link>
            </CartIconStyles>
          </NavigationIcons>
          {(isOnIcon || isOnCart) && (
            <Cart
              variant="menu"
              items={cartItems}
              onMouseEnter={() => {
                setIsOnCart(true);
              }}
              onMouseLeave={() => {
                setIsOnCart(false);
              }}
            />
          )}
        </NavigationWrapper>
      </PageContentContainer>
    </NavigationMain>
  );
};

export default Navigation;
