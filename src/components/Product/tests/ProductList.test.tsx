import { render, screen } from "utils/utils-for-tests";

import ProductList from "components/Product/ProductList";

describe("Product List render test", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<ProductList />);

    await screen.findByText("Mniam Mniam Food");

    expect(asFragment()).toMatchSnapshot();
  });
});
