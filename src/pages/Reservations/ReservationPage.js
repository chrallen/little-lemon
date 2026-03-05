import './ReservationPage.css';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import { useReducer } from 'react';

export const initializeTimes = () => {
  return [
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
  ];
};

export const  updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes();

    default:
      return state;
  }
};

const ReservationPage = () => {
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
          />
        </div>
    </section>
  );
}

export default ReservationPage;