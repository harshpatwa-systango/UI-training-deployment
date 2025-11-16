"use client"
import { render, screen } from "@testing-library/react";
import { HomePage } from "@/app/home/page"; // adjust import to your file path

describe("HomePage", () => {
  it("renders the main heading", () => {
    render(<HomePage />);
    expect(screen.getByText("Geosight Explorer")).toBeInTheDocument();
  });

  it("renders both navigation buttons", () => {
    render(<HomePage />);
    expect(screen.getByText("View Weather")).toBeInTheDocument();
    expect(screen.getByText("Explore Globe")).toBeInTheDocument();
  });
});
