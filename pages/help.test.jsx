import { render, screen } from "@testing-library/react";
import Help from "./help";

it("should render 'help' page", () => {
  render(<Help />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Help");
});
