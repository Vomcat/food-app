import Banner from "../components/Banner/Banner";
import ProductList from "components/Product/ProductList";
import PageContentContainer from "components/Ui/PageContentContainer";
import ProductSearchBar from "components/Product/ProductSearchBar";

const Homepage = () => {
  return (
    <>
      <Banner />
      <PageContentContainer>
        <ProductList />
      </PageContentContainer>
    </>
  );
};

export default Homepage;
