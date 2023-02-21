import {  render, screen } from "utils/utils-for-tests";

import OrderList from "components/Order/OrderList";
import { MOCK_DATA_ORDERS } from "mocks/mockedData";

describe("Product List render test", () => {
    it("Order data renders correctly", async () => {
      const { asFragment } = render(<OrderList />);
  
      await screen.findByText(MOCK_DATA_ORDERS[0].orderTotalPrice);
  
      expect(asFragment()).toMatchSnapshot();
    });
  });
