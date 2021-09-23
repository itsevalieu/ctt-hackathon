import { render, screen } from "@testing-library/react";
import Location, { LocationProps } from "./Location";

let location: LocationProps;
beforeEach(() => {
  location = {
    name: "Rookery",
    link: "rookery",
    active: true,
  };
});
describe("Location", () => {
  test("should render active links", () => {
    render(<Location {...location} />);
    const linkRookery = screen.queryByText(/Rookery/i);
    expect(linkRookery).toBeInTheDocument();
  });
});
