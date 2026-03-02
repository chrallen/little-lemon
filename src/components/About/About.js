import "./About.css"
import chefs from "../../assets/images/marioAdrian.jpg"
import restaurant from "../../assets/images/restaurant.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about two-column-section">
      <div className="container two-column-content">
        <div className="section-text">
            <h1 className="title">Our Story</h1>
            <p>At Little Lemon, chefs Mario and Adrian bring traditional Mediterranean recipes with a creative twist that stands out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.</p>
            <Link to="ReservationPage" className="primary-btn">Reserve A Table</Link>
        </div>

        <div className="section-media about-images">
          <img src={chefs} alt="mario and adrian" className="img-front" />
          <img src={restaurant} alt="Little Lemon restaurant" className="img-back" />
        </div>
      </div>
    </section>
  );
}

export default About;