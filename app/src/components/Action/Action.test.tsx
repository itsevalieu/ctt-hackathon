import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Action", () => {
  test("should render actions", () => {
    render(<Action />);
    const linkElement = screen.getByText(/Action/i);
    expect(linkElement).toBeInTheDocument();
  });
  test.todo("should subscribe to clock");
  test.todo("should show action text");
  test.todo("should return event text");
  test.todo("should update state");
});
