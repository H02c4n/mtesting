import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button Component", () => {
  it("should render Button", () => {
    render(<Button />);
    const element = screen.getByText("Send");
    expect(element).toBeInTheDocument();
  });
});
