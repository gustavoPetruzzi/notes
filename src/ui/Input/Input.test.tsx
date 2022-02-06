import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  test("Renders an input with an id and a label with htmlFor and both should be equal to props.id", () => {
    render(
      <Input type="text" label="testLabel" id="test" register={() => {}} />
    );
    const inputElement = screen.getByLabelText("testLabel");
    const labelElement = screen.getByText(/testLabel/);
    expect(inputElement.id).toEqual("test");
    expect(labelElement).toBeInTheDocument();
  });
});
