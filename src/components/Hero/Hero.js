import "./Hero.css"
import dish from "../../assets/images/dish.jpg"

const Hero = () => {
  return (
    <section className="hero two-column-section">
      <div className="container two-column-content">
        <div className="section-text">
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p>Nestled in the heart of bustling Chicago, Little Lemon is a family owned Mediterranean restaurant focused on traditional recipes with a modern twist. We invite you to experience our diverse, artisanal menu in a modern and accomodating space.</p>
            <a className="primary-btn" href="/">Reserve A Table</a>
        </div>
        <div className="section-media"><img src={dish} alt="people sharing food" /></div>
      </div>
    </section>
  );
}

export default Hero;