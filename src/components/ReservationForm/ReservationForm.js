import './ReservationForm.css';
import { useState } from 'react';

const ReservationForm = ({ availableTimes, dispatch }) => {

  const [formData, setFormData] = useState ({
    date: "",
    time: "",
    guests: "",
    occasion: "Birthday",
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
        payload: value,
      });
    }
  };

  return (
    <section>
      <form className='reservation-form'>

        <div>
          <label htmlFor="res-date"><h3>Choose Date</h3></label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="res-time"><h3>Choose Time</h3></label>
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
          <label htmlFor="occasion"><h3>Occasion</h3></label>
          <select 
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Make Your Reservation" 
          className='primary-btn'
        />

      </form>
    </section>
  );
}

export default ReservationForm