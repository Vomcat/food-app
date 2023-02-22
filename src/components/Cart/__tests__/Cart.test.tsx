import { render, screen } from "utils/utils-for-tests";

import Cart from "components/Cart/Cart";

const items = [
  {
    id: 2,
    name: "Rice with garlic chicken",
    price: 4.2,
    quantity: 2,
    totalPrice: 8.4,
  },
];

describe("Cart component", () => {
  test("Cart in navigation with items render correctly", () => {
    render(<Cart variant="menu" items={items} />);

    expect(screen.getByText("Rice with garlic chicken")).toBeInTheDocument();
    expect(screen.getByText("Remove All")).toBeInTheDocument();
    expect(screen.getByText("Order")).toBeInTheDocument();
  });

  test("Cart in form with items render correctly", () => {
    render(<Cart variant="default" items={items} />);

    expect(screen.getByText("Rice with garlic chicken")).toBeInTheDocument();
    expect(screen.getByText("Remove All")).toBeInTheDocument();
    expect(screen.queryByText("Order")).not.toBeInTheDocument();
  });
});
