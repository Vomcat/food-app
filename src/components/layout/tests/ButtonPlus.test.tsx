import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

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

  test("Button default bg-color", () => {
    const tree = renderer.create(<ButtonPlus />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#95E1D3");
  });

  test("button minus bg-color", () => {
    const tree = renderer.create(<ButtonPlus variant="grey" />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#D9D9D9");
  });
});
