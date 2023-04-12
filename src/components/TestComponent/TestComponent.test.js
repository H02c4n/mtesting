import { render, screen } from "@testing-library/react";
import TestComponent from ".";

it("should render the element correctly", () => {
  render(<TestComponent />);
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});
