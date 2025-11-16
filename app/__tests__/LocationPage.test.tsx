"use client"
import { render, screen, fireEvent } from "@testing-library/react";
import { LocationPage } from "@/app/home/page";

describe("LocationPage", () => {
  it("renders the global view heading", () => {
    render(<LocationPage />);
    expect(
      screen.getByText("Global Geographic View")
    ).toBeInTheDocument();
  });

  it("filters locations when searching", () => {
    render(<LocationPage />);

    const input = screen.getByLabelText("Search geographic locations");

    fireEvent.change(input, { target: { value: "Fuji" } });
    fireEvent.click(screen.getByRole("button", { name: "" })); // search icon

    expect(screen.getByText(/fuji/i)).toBeInTheDocument();
  });

  it("shows no results message", () => {
    render(<LocationPage />);

    const input = screen.getByLabelText("Search geographic locations");

    fireEvent.change(input, { target: { value: "xyzxyz" } });
    fireEvent.click(screen.getByRole("button", { name: "" }));

    expect(
      screen.getByText(/No locations found/i)
    ).toBeInTheDocument();
  });
});
