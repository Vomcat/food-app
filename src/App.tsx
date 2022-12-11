import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";

import { respondFrom } from "./styles/mixins";
import { breakpoints } from "./styles";

const StyledDiv = styled.div`
  background-color: black;
  height: 150px;
  width: 150px;

  ${respondFrom(breakpoints.mobile)`background-color: red;`}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledDiv></StyledDiv>
    </>
  );
}

export default App;
