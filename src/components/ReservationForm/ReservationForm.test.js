import { render, screen } from "@testing-library/react";
import ReservationForm from "./ReservationForm";

test("renders Choose Date label", () => {
  render(
    <ReservationForm
      availableTimes={["5:00"]}
      dispatch={jest.fn()}
    />
  );

  const label = screen.getByText(/Choose Date/i);
  expect(label).toBeInTheDocument();
});