import './ReservationForm.css';
import { useState } from 'react';

const ReservationForm = ({ 
  availableTimes, 
  dispatch, 
  submitForm, 
  today, 
}) => {

  const [formData, setFormData] = useState ({
    date: today,
    time: "",
    guests: "1",
    occasion: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    if (id === "date") {
      dispatch({
        type: "UPDATE_TIMES",
        date: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  }

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
          />
        </div>

        <div>
          <label htmlFor="time"><h3>Choose Time</h3></label>
          <select
            id="time"
            value={formData.time}
            onChange={handleChange}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
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
          />
        </div>

        <div>
          <label htmlFor="occasion"><h3>Special Occasion?</h3></label>
          <select 
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
              <option>Make a selection</option>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
        </div>

        <button 
          type="submit" 
          className='primary-btn'
        >
          Reserve A Table
        </button>

      </form>
    </section>
  );
}

export default ReservationForm