import styled from "styled-components";
import {
  colors,
  dimensions,
  respondFrom,
  respondTo,
  breakpoints,
} from "styles";

import PageContentContainer from "components/ui/PageContentContainer";

import Facebook from "assets/svg/Facebook.svg";
import Instagram from "assets/svg/Instagram.svg";
import Twitter from "assets/svg/Twitter.svg";

const FooterMain = styled.footer`
  width: 100%;
  background-color: ${colors.white};
  padding: 20px 0;

  ${respondFrom(breakpoints.desktop)`
        padding: 33px 0;
    `}
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${respondFrom(breakpoints.tablet)`
    flex-direction: row;
    `}

  ${respondTo(breakpoints.tablet)`
    gap: 20px;
    `}

  p {
    font-size: ${dimensions.fonts.small}px;
    color: ${colors.lightGrey};
  }
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 13px;
  cursor: pointer;

  img {
    height: 18px;
  }
`;

const Footer = () => {
  return (
    <FooterMain>
      <PageContentContainer>
        <FooterWrapper>
          <p className="italic">All Rights Reserved</p>
          <FooterIcons>
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
          </FooterIcons>
        </FooterWrapper>
      </PageContentContainer>
    </FooterMain>
  );
};

export default Footer;
