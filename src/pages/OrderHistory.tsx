import OrederList from "components/Order/OrderList";
import PageContentContainer from "components/Ui/PageContentContainer";
import Section from "components/Ui/Section";

const OrderHistory = () => {
  return (
    <Section styles="fullHeight">
      <PageContentContainer>
        <h1>Order History</h1>
        <OrederList />
      </PageContentContainer>
    </Section>
  );
};

export default OrderHistory;
