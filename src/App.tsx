import { GlobalStyles } from "./styles/GlobalStyles";

import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Banner from "./components/sections/Banner";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
