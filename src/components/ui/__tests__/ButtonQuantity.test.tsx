import { render, screen } from "utils/utils-for-tests";
import renderer from "react-test-renderer";
import "jest-styled-components";
import "@testing-library/jest-dom";

import { colors } from "styles";

import ButtonQuantity from "components/Ui/ButtonQuantity";

describe("ButtonQuantity component", () => {
  test("Button render plus", () => {
    render(<ButtonQuantity />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("plus icon");
  });
  test("Button render minus", () => {
    render(<ButtonQuantity plusIcon={false} />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("minus icon");
  });

  test("Button default bg-color", () => {
    const tree = renderer.create(<ButtonQuantity />).toJSON();
    expect(tree).toHaveStyleRule("background-color", colors.secondary);
  });
  test("button minus bg-color", () => {
    const tree = renderer.create(<ButtonQuantity variant="grey" />).toJSON();
    expect(tree).toHaveStyleRule("background-color", colors.lightGrey);
  });
});
