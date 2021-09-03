import { render, screen } from "@testing-library/react";
import Event from "./Event";

describe("Event", () => {
  test("should render events", () => {
    render(<Event />);
    const linkElement = screen.getByText(/Event/i);
    expect(linkElement).toBeInTheDocument();
  });
  test.todo("should subscribe to clock");
  test.todo("should render event message at the given time");
  test.todo("should render event message at the hour");
  test.todo("should update game state");
});
