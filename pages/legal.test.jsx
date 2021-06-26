import { render, screen } from "@testing-library/react";
import Legal from "./legal";

it("should render 'legal' page", () => {
  render(<Legal />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Legal");
});
