import "./Specials.css"
import SpecialCard from "../SpecialCard/SpecialCard";
import greekSalad from "../../assets/images/greek-salad.jpg";
import bruschetta from "../../assets/images/bruschetta.jpg";
import lemonDessert from "../../assets/images/lemon-dessert.jpg";

function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      price: "$12.99",
      image: greekSalad,
      description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      image: bruschetta,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      image: lemonDessert,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },
  ];

  return (
    <section className="container specials">
      <div className="specials-header">
				<h2>This Week's Specials</h2>
				<a className="primary-btn" href="/">Order Online</a>
			</div>
      <div className="specials-grid">
        {specials.map((item) => (
          <SpecialCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Specials;
