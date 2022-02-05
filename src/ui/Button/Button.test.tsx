import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("Renders a button using the props.children", () => {
    render(<Button type="submit"> test </Button>);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("Renders a button and the type should be equal to the type in props", () => {
    render(<Button type="submit"> test </Button>);
    const buttonElement = screen.getByText(/test/);
    expect(buttonElement.getAttribute("type")).toEqual("submit");
  });

  test("Renders a button and the classes should have the class in props", () => {
    render(
      <Button type="submit" color="primary">
        test
      </Button>
    );
    const buttonElement = screen.getByText(/test/);
    expect(buttonElement.classList.contains("primary")).toBeTruthy();
  });
});
