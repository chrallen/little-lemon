import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservationForm from "./ReservationForm";

const mockProps = {
  availableTimes: ["17:00", "18:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
  today: "2026-03-12",
};

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

/* HTML validation */

test("date input has required validation", () => {
  render(<ReservationForm {...mockProps} />);

  const dateInput = screen.getByLabelText(/choose date/i);

  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("required");
});

test("time select has required validation", () => {
  render(<ReservationForm {...mockProps} />);

  const timeSelect = screen.getByLabelText(/choose time/i);

  expect(timeSelect).toHaveAttribute("required");
});

test("guests input has min and max attributes", () => {
  render(<ReservationForm {...mockProps} />);

  const guestsInput = screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("required");
});

/* JavaScript validation and submission */

test("submit button is disabled when form is invalid", () => {
  render(<ReservationForm {...mockProps} />);

  const submitButton = screen.getByRole("button", {
    name: /reserve a table/i,
  });

  expect(submitButton).toBeDisabled();
});

test("submit button becomes enabled when form is valid", async () => {
  const user = userEvent;

  render(<ReservationForm {...mockProps} />);

  await user.type(
    screen.getByLabelText(/number of guests/i),
    "4"
  );
  await user.selectOptions(
    screen.getByLabelText(/choose time/i),
    "17:00"
  );

  const submitButton = screen.getByRole("button", {
    name: /reserve a table/i,
  });

  expect(submitButton).not.toBeDisabled();
});

test("form calls submitForm with correct data", async () => {
  const user = userEvent;

  render(<ReservationForm {...mockProps} />);

  await user.selectOptions(
    screen.getByLabelText(/choose time/i),
    "17:00"
  );
  await user.type(
    screen.getByLabelText(/number of guests/i),
    "3"
  );

  const submitButton = screen.getByRole("button", {
    name: /reserve a table/i,
  });

  await user.click(submitButton);

  expect(mockProps.submitForm).toHaveBeenCalled();
});