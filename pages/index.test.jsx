import { render, screen } from "@testing-library/react";
import Index from "./index";

it("should render 'about' page", () => {
  render(<Index />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Welcome to Next.js!");
});
