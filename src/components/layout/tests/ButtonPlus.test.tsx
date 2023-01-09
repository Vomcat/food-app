import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ButtonPlus from "components/layout/ButtonPlus";

describe("button default image", () => {
  test("Button render", () => {
    render(<ButtonPlus />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("plus icon");
  });
});

describe("button minus image", () => {
  test("Button render", () => {
    render(<ButtonPlus plusIcon={false} />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("minus icon");
  });
});

describe("button default bg-color", () => {
  test("Button render", () => {
    const tree = renderer.create(<ButtonPlus />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#95E1D3");
  });
});

describe("button minus bg-color", () => {
  test("Button render", () => {
    const tree = renderer.create(<ButtonPlus variant="grey" />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#D2CDCD");
  });
});
