import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  test("Renders an input with an id and a label with htmlFor and both should be equal to props.id", () => {
    render(
      <Input type="text" label="testLabel" id="test" register={() => {}} />
    );
  });
});
