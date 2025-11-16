import { Cloud, Droplet, Wind, Sunrise, Sunset, Zap } from "lucide-react";

export const mockWeather = {
  current: {
    city: "New York City",
    temp: 18,
    condition: "Cloudy",
    icon: Cloud,
    details: [
      { label: "Humidity", value: "75%", icon: Droplet },
      { label: "Wind Speed", value: "12 km/h", icon: Wind },
      { label: "Sunrise", value: "6:05 AM", icon: Sunrise },
      { label: "Sunset", value: "5:45 PM", icon: Sunset },
    ],
  },
  forecast: [
    { day: "Mon", temp: 21, condition: "Sunny", icon: Zap },
    { day: "Tue", temp: 19, condition: "Rain", icon: Droplet },
    { day: "Wed", temp: 17, condition: "Cloudy", icon: Cloud },
    { day: "Thu", temp: 22, condition: "Clear", icon: Zap },
    { day: "Fri", temp: 20, condition: "Windy", icon: Wind },
  ],
};

export const mockLocations = [
  {
    name: "Mount Fuji",
    coordinates: "35.3606° N, 138.7278° E",
    elevation: "3,776 m",
  },
  {
    name: "Amazon River",
    coordinates: "0.1444° S, 51.5369° W",
    length: "6,400 km",
  },
  {
    name: "Great Barrier Reef",
    coordinates: "18.2871° S, 147.6992° E",
    area: "344,400 km²",
  },
  {
    name: "Sahara Desert",
    coordinates: "23.4162° N, 12.0000° E",
    size: "9.2 million km²",
  },
];
