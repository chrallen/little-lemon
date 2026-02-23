import "./Hero.css"
import dish from "../../assets/images/dish.jpg"

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p>Nestled in the heart of bustling Chicago, Little Lemon is a family owned Mediterranean restaurant focused on traditional recipes with a modern twist. We invite you to experience our diverse, artisanal menu in a modern and accomodating space.</p>
            <a className="primary-btn" href="/">Reserve A Table</a>
        </div>
        <img src={dish} alt="people sharing food" />
      </div>
    </section>
  );
}

export default Hero;