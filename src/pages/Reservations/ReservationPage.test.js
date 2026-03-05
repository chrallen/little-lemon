import { initializeTimes } from "./ReservationPage";
import { updateTimes } from "./ReservationPage";

test("initializeTimes returns correct initial times", () => {
  const result = initializeTimes();

  expect(result).toEqual([
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
  ]);
});

test("updateTimes returns same state when action type is unknown", () => {
  const state = ["5:00", "6:00"];
  const action = { type: "UNKNOWN" };

  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});

test("updateTimes returns initialized times when UPDATE_TIMES action is dispatched", () => {
  const state = [];
  const action = { type: "UPDATE_TIMES", payload: "2026-03-04" };

  const result = updateTimes(state, action);

  expect(result).toEqual(initializeTimes());
});