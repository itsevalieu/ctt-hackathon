import { render, screen, waitFor } from "@testing-library/react";
import Clock from "./Clock";
import clockSubject from "../../helpers/ClockSubject";

describe("Clock", () => {
  test("renders active links", () => {
    render(<Clock />);
    const linkElement = screen.getByText(/Clock/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("should render current time", async () => {
    const { queryByTestId } = render(<Clock />);
    const currentTime = clockSubject.fetchClock();
    const time = queryByTestId("current-time");
    await waitFor(() => {
      expect(time?.textContent).toContain(currentTime.time);
    });
  });
  test.todo("should update current time");
  test("should format time HH:MM", () => {
    render(<Clock />);
    const currentTime = clockSubject.fetchClock();
    expect(currentTime.time).toMatch(
      /^([0-1]?\d|2[0-3])(?::([0-5]?\d))?(?::([0-5]?\d))?$/i
    ); //matches for mandatory HH, optional :MM:SS
  });
});
