import { GlobalStyles } from "styles/GlobalStyles";

import Navigation from "components/Layout/Navigation";
import Footer from "components/Layout/Footer";
import Banner from "components/Banner/Banner";
import ProductItem from "components/Product/ProductItem";
import ProductList from "components/Product/ProductList";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Banner />
      <ProductList/>
      <Footer />
    </>
  );
}

export default App;
