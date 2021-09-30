import { render, screen } from "@testing-library/react";
import Action, { ActionProps } from "./Action";

let actions: ActionProps[];
beforeEach(() => {
  actions = [
    {
      name: "gather",
    },
    {
      name: "build",
    },
    {
      name: "radio",
    },
  ];
});
describe("Action", () => {
  test("should render actions", () => {
    render(<Action actions={actions} />);
    const textElement = screen.getByText(/gather/i);
    expect(textElement).toBeInTheDocument();
  });
  test.todo("should subscribe to clock");
  test.todo("should show action text");
  test.todo("should return event text");
  test.todo("should update state");
});
