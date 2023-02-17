import styled from "styled-components";
import { respondFrom, breakpoints, dimensions } from "styles";

import { SectionProps } from "interfaces/Ui";

const Wrapper = styled.section`
  padding: ${dimensions.spacing.md}px 0;
  position: relative;

  ${respondFrom(breakpoints.desktop)`
    padding: ${dimensions.spacing.md3}px 0;
   `}

  &.fullHeight {
    min-height: calc(100vh - 50px);

    ${respondFrom(breakpoints.desktop)`
      min-height: calc(100vh - 50px - 82px);
    `}
  }
`;

const Section = (props: SectionProps) => {
  const { children, styles } = props;
  return <Wrapper className={styles}>{children}</Wrapper>;
};

export default Section;
