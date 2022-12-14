import styled from "styled-components";

import { respondFrom, breakpoints } from "../../styles";

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  padding: 0 16px;
  overflow: hidden;

  ${respondFrom(breakpoints.desktop)`
      max-width: 1232px;
      margin-inline: auto;
    `}
`;

const PageContentContainer: React.FC<Props> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default PageContentContainer;
