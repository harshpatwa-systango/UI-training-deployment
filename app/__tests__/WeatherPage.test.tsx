"use client"
import { render, screen, fireEvent } from "@testing-library/react";
import { WeatherPage } from "@/app/home/page";

describe("WeatherPage", () => {
  it("renders current weather heading", () => {
    render(<WeatherPage />);
    expect(
      screen.getByText("Real-Time Weather (Mock Data)")
    ).toBeInTheDocument();
  });

  it("updates city name when searching", () => {
    render(<WeatherPage />);

    const input = screen.getByLabelText("Search for city weather");
    fireEvent.change(input, { target: { value: "Mumbai" } });

    fireEvent.click(screen.getByText(/search/i));

    expect(
      screen.getByText("Current Conditions in Mumbai")
    ).toBeInTheDocument();
  });
});
