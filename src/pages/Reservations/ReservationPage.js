import './ReservationPage.css';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../reservationAPI';
import { useNavigate } from 'react-router-dom';

// Gets today's date formatted as YYYY-MM-DD for use in the reservation form
const today = new Date().toISOString().split("T")[0];

/**
 * Initializes available reservation times using today's date.
 */
export const initializeTimes = () => {
  return fetchAPI(new Date(today));
};

/**
 * Reducer that updates available reservation times when the selected date changes.
 */
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const newTimes = fetchAPI(new Date(action.date));
    return newTimes;
  }

  return state;
};

/**
 * Page component
 */
const ReservationPage = () => {

  const navigate = useNavigate();

  /**
   * Submits reservation data and navigates to the confirmation page if successful.
   */
  const submitForm = formData => {
    const success = submitAPI(formData);

    if (success) {
      navigate('/ConfirmationPage')
    };
  };

  // Stores available booking times and updates them via reducer actions
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <section className='single-column-center form'>
      <h1 className='title'>Make a Reservation</h1>
        <div className='form-content'>
          <ReservationForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            today={today}
            submitForm={submitForm}
          />
        </div>
    </section>
  );
}

export default ReservationPage;