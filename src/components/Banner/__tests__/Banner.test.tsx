import { render, screen } from "utils/utils-for-tests";

import Banner from "components/Banner/Banner";

describe("Navigation component", () => {
  test("Text is correct", () => {
    render(<Banner />);
  

    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', {
        name: /papu store/i
      })).toBeInTheDocument();
  });
});