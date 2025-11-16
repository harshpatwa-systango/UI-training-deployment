import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { WeatherPage } from "@/app/components/GeoApp";

describe("WeatherPage", () => {
  it("renders the default city", () => {
    render(<WeatherPage />);
    expect(screen.getByPlaceholderText("Enter city name...")).toHaveValue(
      "New York City"
    );
  });

  it("updates weather location when searching", () => {
    render(<WeatherPage />);

    const input = screen.getByPlaceholderText("Enter city name...");
    fireEvent.change(input, { target: { value: "London" } });

    fireEvent.click(screen.getByText(/Search/i));

    expect(
      screen.getByText(/Current Conditions in London/)
    ).toBeInTheDocument();
  });
});
