import {  render, screen } from "utils/utils-for-tests";

import Input from "components/Form/Input";

const inputProps = {
    type:"text",
    placeholder:"Post code",
}

describe("Product List render test", () => {
    test("Order data renders correctly", () => {
      render (<Input
       {...inputProps}
      />)

      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Post code')).toBeInTheDocument();
     
    });
  });
