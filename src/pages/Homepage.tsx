import Banner from "../components/Banner/Banner";
import ProductList from "components/Product/ProductList";
import PageContentContainer from "components/Ui/PageContentContainer";

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
