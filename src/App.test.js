import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render App component without crashing", () => {
  render(<App />);
  const element = screen.getByText("Modern testing");

  expect(element).toBeInTheDocument();
});

// it("should render Button", () => {
//   render(<App />);
//   const element = screen.getByText("Button");

//   expect(element).toBeInTheDocument();
// });

function Test({ products }) {
  return (
    <ul>
      {products.map((p, i) => {
        return <li key={i}> {p} </li>;
      })}
    </ul>
  );
}

it("should render the element correctly", () => {
  const products = ["apple", "orange", "banana"];
  render(<Test products={products} />);
  const elements = screen.getAllByRole("listitem");

  //expect(elements).toHaveLength(3);
  expect(elements.length).toBe(products.length);
});
