import './ConfirmationPage.css'
import { Link } from 'react-router-dom'

const Confirmed = () => {
  return (
    <section className='single-column-center message'>
        <div className='message-content'>
          <h1 className='title'>Reservation Confirmed!</h1>
          <p>We look forward to serving you!</p>
          <Link to="/" className="primary-btn">Return Home</Link>
        </div>
    </section>
  );
}

export default Confirmed