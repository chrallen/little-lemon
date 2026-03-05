import './UnderConstruction.css'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <section className='single-column-center message'>
        <div className='message-content'>
          <h1 className='title'>This page is under construction</h1>
          <p>Please come back soon!</p>
          <Link to="/" className="primary-btn">Return Home</Link>
        </div>
    </section>
  );
}

export default Message