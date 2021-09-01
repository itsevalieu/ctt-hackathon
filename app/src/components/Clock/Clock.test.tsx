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
});
