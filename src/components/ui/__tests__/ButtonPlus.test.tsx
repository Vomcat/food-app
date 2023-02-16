import { render, screen } from "utils/utils-for-tests";
import renderer from "react-test-renderer";
import "jest-styled-components";
import "@testing-library/jest-dom";

import ButtonPlus from "components/Ui/ButtonPlus";

describe("ButtonPlus component", () => {
  test("Button render plus", () => {
    render(<ButtonPlus />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("plus icon");
  });
  test("Button render minus", () => {
    render(<ButtonPlus plusIcon={false} />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("minus icon");
  });
  test("button minus bg-color", () => {
    const tree = renderer.create(<ButtonPlus variant="grey" />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#D9D9D9");
  });
  test("button minus bg-color", () => {
    const tree = renderer.create(<ButtonPlus variant="grey" />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#D9D9D9");
  });
});
