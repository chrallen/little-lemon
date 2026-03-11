jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

import { initializeTimes, updateTimes } from "./ReservationPage";
import { fetchAPI } from "../../reservationAPI";

test("initializeTimes returns correct initial times", () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns same state when action type is unknown", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UNKNOWN" };

  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});

test("initializeTimes returns available times", () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns new times when date changes", () => {

  const state = ["17:00", "18:00"];

  const action = {
    type: "UPDATE_TIMES",
    date: "2026-03-10"
  };

  const result = updateTimes(state, action);

  expect(Array.isArray(result)).toBe(true);
});