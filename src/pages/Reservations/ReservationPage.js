import './ReservationPage.css';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../reservationAPI';
import { useNavigate } from 'react-router-dom';

const today = new Date().toISOString().split("T")[0];

export const initializeTimes = () => {
  return fetchAPI(new Date(today));
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const newTimes = fetchAPI(new Date(action.date));
    return newTimes;
  }

  return state;
};

const ReservationPage = () => {

  const navigate = useNavigate();

  const submitForm = formData => {
    const success = submitAPI(formData);

    if (success) {
      navigate('/ConfirmationPage')
    };
  };

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