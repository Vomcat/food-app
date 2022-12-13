import styled from "styled-components";
import { baseShadow, colors } from "../../styles";

import PageContentContainer from "../ui/PageContentContainer";

import LogoImage from "../../assets/images/Logo.png";
import CartIcon from "../../assets/svg/Cart-icon.svg";
import ProfileIcon from "../../assets/svg/Profile-icon.svg";

const NavigationMain = styled.nav`
  width: 100%;
  position: fixed;
  background-color: ${colors.white};
  ${baseShadow};
  padding: 13px 0;
`;

const NavigationWrapper = styled.div`
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
            <img src={CartIcon} alt="Cart Icon" />
          </NavigationIcons>
        </NavigationWrapper>
      </PageContentContainer>
    </NavigationMain>
  );
};

export default Navigation;
