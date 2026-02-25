import Footer from '../components/Footer/Footer'
import Hero from "../components/Hero/Hero"
import Specials from "../components/Specials/Specials";
import Reviews from "../components/Reviews/Reviews";
import About from "../components/About/About"

const HomePage = () => {
	return (
		<>
      <Hero />
      <Specials />
      <Reviews />
      <About />
			<Footer />
		</>
	);
}

export default HomePage;
