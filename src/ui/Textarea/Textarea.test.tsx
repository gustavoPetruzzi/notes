import { render, screen } from "@testing-library/react";
import Textarea from "./Textarea";

describe("Textarea component", () => {
  test("Renders an textarea with an id and a label with htmlFor and both should be equal to props.id", () => {
    render(<Textarea id="test" label="testLabel" register={() => {}} />);
    const textareaElement = screen.getByLabelText("testLabel");
    const labelElement = screen.getByText(/testLabel/);
    expect(textareaElement.id).toEqual("test");
    expect(labelElement).toBeInTheDocument();
  });
});
