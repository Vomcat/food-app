import styled from "styled-components";

import PageContentContainer from "components/ui/PageContentContainer";

import {
  breakpoints,
  colors,
  fonts,
  respondFrom,
  respondTo,
  dimensions
} from "styles";

import FoodImage from "assets/images/BannerImage.png";
import FoodImageMobile from "assets/images/BannerImageMobile.png";

const BannerMain = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: ${dimensions.spacing.md}px 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -70vw;
    width: 100vw;
    height: 100vw;
    transform: translateY(-50%);
    background-color: ${colors.primary};
    border-radius: 50%;
    z-index: -1;
  }
`;

const BannerMainWrapper = styled.div`
  display: grid;
  grid: "heading image" 1fr / 1.5fr 1fr;
  align-items: center;
  gap: ${dimensions.spacing.sm}px;
`;

const BannerHeading = styled.div`
  grid-area: heading;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;

  ${respondFrom(breakpoints.tablet)`
      font-size: 80px;
    `}

  ${respondFrom(breakpoints.desktop)`
      font-size: 110px;
    `}

    span {
    color: ${colors.primary};
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-family: ${fonts.secondaryBold};

  ${respondFrom(breakpoints.desktop)`
    font-size: 48px;
  `};
`;

const BannerImage = styled.div`
  grid-area: image;

  img {
    width: 100%;
    max-width: 100%;

    ${respondTo(breakpoints.tablet)`
      transform: translateX(16px);
  `}
  }
`;

const Banner = () => {
  return (
    <BannerMain>
      <PageContentContainer>
        <BannerMainWrapper>
          <BannerHeading>
            <Subtitle>Welcome to</Subtitle>
            <Title>
              <span>Papu</span> Store
            </Title>
          </BannerHeading>
          <BannerImage>
            <picture>
              <source media="(min-width: 500px)" srcSet={FoodImage} />
              <img src={FoodImageMobile} alt="Food" />
            </picture>
          </BannerImage>
        </BannerMainWrapper>
      </PageContentContainer>
    </BannerMain>
  );
};

export default Banner;
