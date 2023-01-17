import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PageContentContainer from "components/Ui/PageContentContainer";
import Cart from "components/Cart/Cart";

import { RootState } from "store/store";

import {
  baseShadow,
  colors,
  dimensions,
  breakpoints,
  respondFrom,
} from "styles";

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
  padding: ${dimensions.spacing.sm}px 0;
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

const NavigationIcons = styled.div`
  display: flex;
  gap: ${dimensions.spacing.sm}px;
  cursor: pointer;

  img {
    height: 20px;
    width: 20px;
  }

  ${respondFrom(breakpoints.desktop)`
      gap: ${dimensions.spacing.md}px;
`}
`;

const Navigation = () => {
  const [isActiveCart, setIsActiveCart] = useState(false);

  const cartItems = useSelector((state: RootState) => state.items);

  const handleMouseOver = () => {};

  return (
    <NavigationMain>
      <PageContentContainer>
        <NavigationWrapper>
          <NavigationLogo>
            <a href="/">
              <img src={LogoImage} alt="Logo" />
            </a>
          </NavigationLogo>
          <NavigationIcons>
            <img
              src={ProfileIcon}
              alt="Profile Icon"
              onClick={() => {
                setIsActiveCart(!isActiveCart);
              }}
            />
            <img src={CartIcon} alt="Cart Icon" />
          </NavigationIcons>
          {isActiveCart && <Cart variant="menu" items={cartItems} />}
        </NavigationWrapper>
      </PageContentContainer>
    </NavigationMain>
  );
};

export default Navigation;
