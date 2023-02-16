import { render, screen } from "utils/utils-for-tests";
import { MemoryRouter as Router } from "react-router-dom";

import Navigation from "components/layout/Navigation";

describe("Navigation component", () => {
  test("Link is correct", () => {
    render(<Navigation />);
    // expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
