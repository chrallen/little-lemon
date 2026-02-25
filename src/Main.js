import Hero from "./components/Hero/Hero"
import Specials from "./components/Specials/Specials";
import Reviews from "./components/Reviews/Reviews";
import About from "./components/About/About"

const Main = () => {
  return (
    <main>
        <Hero />
        <Specials />
        <Reviews />
        <About />
    </main>
  );
}

export default Main;