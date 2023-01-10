import { GlobalStyles } from "styles/GlobalStyles";

import Navigation from "components/layout/Navigation";
import Footer from "components/layout/Footer";
import Banner from "components/Banner/Banner";
import ProductItem from "components/Product/ProductItem";
import ProductList from "components/Product/ProductList";
import PageContentContainer from "components/Ui/PageContentContainer";
import ProductSearchBar from "components/Product/ProductSearchBar";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Banner />
      <PageContentContainer>
        <ProductSearchBar />
        <ProductList />
      </PageContentContainer>
      <Footer />
    </>
  );
}

export default App;
