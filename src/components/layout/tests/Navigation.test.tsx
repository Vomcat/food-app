import { render, screen } from "@testing-library/react";

import Navigation from "components/layout/Navigation";

describe("Navigation component", () => {
  test("Link is correct", () => {
    render(<Navigation />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
