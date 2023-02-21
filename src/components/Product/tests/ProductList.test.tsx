import { render, screen } from "utils/utils-for-tests";

import ProductList from "components/Product/ProductList";

import { MOCK_DATA_PRODUCTS } from "mocks/mockedData";

describe("Product List render test", () => {
  test("Products list renders correctly", async () => {
    const { asFragment } = render(<ProductList />);

    await screen.findByText(MOCK_DATA_PRODUCTS[0].name);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Products list renders correctly", async () => {
     render(<ProductList />);

  });
});
