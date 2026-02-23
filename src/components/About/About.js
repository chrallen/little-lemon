import "./About.css"
import chefs from "../../assets/images/marioAdrian.jpg"
import restaurant from "../../assets/images/restaurant.jpg"

function About() {
  return (
    <section className="about">
      <div className="container about-content">
        <div className="about-text">
            <h1 className="title">Our Story</h1>
            <p>At Little Lemon, chefs Mario and Adrian bring traditional Mediterranean recipes with a creative twist that stands out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.</p>
            <a className="primary-btn" href="/">Reserve A Table</a>
        </div>

        <div className="about-images">
          <img src={chefs} alt="mario and adrian" className="img-front" />
          <img src={restaurant} alt="Little Lemon restaurant" className="img-back" />
        </div>
      </div>
    </section>
  );
}

export default About;