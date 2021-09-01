import { render, screen } from "@testing-library/react";
import Log from "./Log";

describe("Log", () => {
  test("renders active links", () => {
    render(<Log />);
    const linkElement = screen.getByText(/Log/i);
    expect(linkElement).toBeInTheDocument();
  });
  test.todo("should output a string message");
  test.todo("should push latest message to log history array");
  test.todo("should have a message printed every hour");
  test.todo("should have a log history that matches the state.history");
});
