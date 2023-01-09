import { render, screen } from "@testing-library/react";

import ProductList from "components/Product/ProductList";

const MOCK_DATA = [
  {
    id: 1,
    image: "/assets/images/item1.png",
    name: "Mniam Mniam Food",
    price: 5,
  },
  {
    id: 2,
    image: "/assets/images/item2.png",
    name: "Mniam Mniam Food as adsdasdasd",
    price: 5,
  },
];

describe("Product List render test", () => {
  it("renders correctly", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
        ) as jest.Mock
      );
    const { asFragment } = render(<ProductList />);

    await screen.findByText("Mniam Mniam Food");

    expect(asFragment()).toMatchSnapshot();
  });
});
