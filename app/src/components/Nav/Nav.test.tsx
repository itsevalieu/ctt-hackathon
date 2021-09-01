import { render, screen } from "@testing-library/react";
import Nav, { LocationProps } from "./Nav";

let locations: LocationProps[];
beforeEach(() => {
  locations = [
    {
      name: "Rookery",
      link: "",
      active: true,
    },
    {
      name: "Station",
      link: "station",
      active: false,
    },
    {
      name: "Library",
      link: "library",
      active: false,
    },
  ];
});
describe("Nav", () => {
  test("should render active links", () => {
    render(<Nav locations={locations} />);
    const linkRookery = screen.queryByText(/Rookery/i);
    expect(linkRookery).toBeInTheDocument();
  });
  test("should not render inactive links", () => {
    render(<Nav locations={locations} />);
    const linkStation = screen.queryByText(/Station/i);
    const linkLibrary = screen.queryByText(/Library/i);
    expect(linkStation).not.toBeInTheDocument();
    expect(linkLibrary).not.toBeInTheDocument();
  });
});
