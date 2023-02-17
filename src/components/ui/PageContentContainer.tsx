import styled from "styled-components";
import { respondFrom, breakpoints, dimensions } from "styles";

import { Props } from "interfaces/Ui";

const Wrapper = styled.div`
  padding: 0 ${dimensions.spacing.md}px;
  position: relative;

  ${respondFrom(breakpoints.desktop)`
      max-width: ${dimensions.pageContentWidth}px;
      margin-inline: auto;
    `}
`;

const PageContentContainer = (props: Props) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

export default PageContentContainer;
