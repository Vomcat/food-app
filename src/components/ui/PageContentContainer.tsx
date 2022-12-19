import styled from "styled-components";

import { respondFrom, breakpoints, dimensions } from "styles";

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  padding: 0 ${dimensions.spacing.md}px;

  ${respondFrom(breakpoints.desktop)`
      max-width: ${dimensions.pageContentWidth}px;
      margin-inline: auto;
      color: red;
    `}
`;

const PageContentContainer: React.FC<Props> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default PageContentContainer;
