import { fireEvent, render, screen } from "utils/utils-for-tests";

import Navigation from "components/layout/Navigation";

describe("Navigation component", () => {
  test("On mouseEnter show cart", async () => {
    render(<Navigation />);

    const button  = screen.getByRole('img', {
      name: /profile icon/i
    })

    fireEvent.mouseEnter(button)
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument()

    fireEvent.mouseLeave(button)
    expect(screen.queryByText('Shopping Cart')).not.toBeInTheDocument()

  });
});
