import { useState } from "react";
import styled from "styled-components";

import PageContentContainer from "components/Ui/PageContentContainer";
import Cart from "components/Cart/Cart";

import { baseShadow, colors, dimensions } from "styles";

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
  gap: 10px;
  cursor: pointer;

  img {
    height: 20px;
    width: 20px;
  }
`;

const Navigation = () => {
  const [isActiveCart, setIsActiveCart] = useState(false);

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
            <img src={ProfileIcon} alt="Profile Icon" />
            <img
              src={CartIcon}
              alt="Cart Icon"
              onMouseOver={() => {
                setIsActiveCart(!isActiveCart);
              }}
              onMouseOut={() => {
                setIsActiveCart(!isActiveCart);
              }}
            />
          </NavigationIcons>
          {isActiveCart && <Cart variant="menu" />}
        </NavigationWrapper>
      </PageContentContainer>
    </NavigationMain>
  );
};

export default Navigation;
