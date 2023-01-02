import { GlobalStyles } from "styles/GlobalStyles";

import Navigation from "components/Layout/Navigation";
import Footer from "components/Layout/Footer";
import Banner from "components/Banner/Banner";
import ProductItem from "components/Product/ProductItem";
import ProductList from "components/Product/ProductList";
import PageContentContainer from "components/Ui/PageContentContainer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Banner />
      <PageContentContainer><ProductList/></PageContentContainer>
      
      <Footer />
    </>
  );
}

export default App;
