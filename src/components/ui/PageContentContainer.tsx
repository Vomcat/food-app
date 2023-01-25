import styled from "styled-components";

import { Props } from "interfaces/Ui";

import { respondFrom, breakpoints, dimensions } from "styles";

const Wrapper = styled.div`
  padding: 0 ${dimensions.spacing.md}px;
  position: relative;

  ${respondFrom(breakpoints.desktop)`
      max-width: ${dimensions.pageContentWidth}px;
      margin-inline: auto;
    `}
`;

const PageContentContainer: React.FC<Props> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default PageContentContainer;
