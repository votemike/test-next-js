import { render, screen } from "@testing-library/react";
import About from "./about";

it("should render 'about' page", () => {
  render(<About />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("About");
});
