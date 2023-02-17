import { render, screen } from "utils/utils-for-tests";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { colors } from "styles";

import Button from "components/Ui/Button";

describe("Button component", () => {
  test("Button default bg-color", () => {
    const tree = renderer.create(<Button>Test</Button>).toJSON();
    expect(tree).toHaveStyleRule("background-color", colors.secondary);
  });
  test("Button red bg-color", () => {
    const tree = renderer.create(<Button color="red">Test</Button>).toJSON();
    expect(tree).toHaveStyleRule("background-color", colors.primary);
  });
});
