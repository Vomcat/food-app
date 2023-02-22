import { render, screen, fireEvent, waitFor } from "utils/utils-for-tests";

import Form from "components/Form/Form";

describe("Form component", () => {
  test("Render errors when value is invalid", async () => {
    render(<Form />);
    fireEvent.submit(screen.getByRole("button"));
    expect(await screen.findAllByRole("alert")).toHaveLength(8);
  });

  test("should not display error when value is valid", async () => {
    render(<Form />);

    fireEvent.input(screen.getByPlaceholderText("Name"), {
      target: {
        value: "name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Last Name"), {
      target: {
        value: "Last name",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Email"), {
      target: {
        value: "mail@wp.pl",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Phone number"), {
      target: {
        value: "12345678",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Street address"), {
      target: {
        value: "Address",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Street number"), {
      target: {
        value: "12",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("City"), {
      target: {
        value: "City",
      },
    });

    fireEvent.input(screen.getByPlaceholderText("Post code"), {
      target: {
        value: "12123",
      },
    });

    fireEvent.submit(screen.getByRole("button"));
    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
  });
});
