import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render App component without crashing", () => {
  render(<App />);
  const element = screen.getByText("Modern testing");

  expect(element).toBeInTheDocument();
});

it("should render Button", () => {
  render(<App />);
  const element = screen.getByText("Button");

  expect(element).toBeInTheDocument();
});
