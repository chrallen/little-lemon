import './ReservationForm.css';
import { useState } from 'react';

const ReservationForm = ({ availableTimes, dispatch, submitForm, today, }) => {

  // -----------------------------
  // State
  // -----------------------------

  // Stores user input values for the reservation form
  const [formData, setFormData] = useState({
    date: today,
    time: "",
    guests: "",
    occasion: "",
  });

  // Stores validation error messages
  const [errors, setErrors] = useState({});


  // -----------------------------
  // Event Handlers
  // -----------------------------

  /**
   * Updates form state when an input changes and runs validation.
   * If the date changes, it dispatches an action to update available times.
   */
  const handleChange = (e) => {
    const { id, value } = e.target;

    const updatedData = {
      ...formData,
      [id]: value,
    };

    setFormData(updatedData);
    setErrors(validate(updatedData));

    if (id === "date") {
      dispatch({
        type: "UPDATE_TIMES",
        date: value,
      });
    }
  };

  /**
   * Handles form submission and sends reservation data upward.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };


  // -----------------------------
  // Validation
  // -----------------------------

  /**
   * Validates reservation form inputs and returns an error object.
   */
  const validate = (data) => {
    const newErrors = {};

    if (!data.date) {
      newErrors.date = "Please select a date";
    }

    if (!data.time) {
      newErrors.time = "Please select a time";
    }

    if (!data.guests) {
      newErrors.guests = "Please enter number of guests";
    } else if (data.guests < 1 || data.guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10";
    }

    return newErrors;
  };


  // -----------------------------
  // Derived State
  // -----------------------------

  /**
   * Determines whether the form is valid and ready for submission.
   */
  const isFormValid = () => {
    return (
      Object.keys(errors).length === 0 &&
      formData.date &&
      formData.time &&
      formData.guests
    );
  };


  // -----------------------------
  // Render
  // -----------------------------

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className='reservation-form'
      >

        <div>
          <label htmlFor="date"><h3>Choose Date</h3></label>
          <input
            type="date"
            id="date"
            value={formData.date}
            min={today}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="time"><h3>Choose Time</h3></label>
          <select
            id="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="form-error">{errors.time}</p>
          )}
        </div>

        <div>
          <label htmlFor="guests"><h3>Number of Guests</h3></label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          {errors.guests && (
            <p className="form-error">{errors.guests}</p>
          )}
        </div>

        <div>
          <label htmlFor="occasion"><h3>Special Occasion?</h3></label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
              <option value="">Select an Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
        </div>

        <button
          type="submit"
          className='primary-btn'
          disabled={!isFormValid()}
        >
          Reserve A Table
        </button>

      </form>
    </section>
  );
}

export default ReservationForm