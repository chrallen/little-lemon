import "./Reviews.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import warren from "../../assets/images/warren.png";
import miriam from "../../assets/images/miriam.png";
import anna from "../../assets/images/anna.png";
import john from "../../assets/images/john.png"

function Reviews() {
  const specials = [
    {
      name: "Warren S.",
      image: warren,
      description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      name: "Miriam R.",
      image: miriam,
      description: "Our is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
      name: "Anna K.",
      image: anna,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },
    {
      name: "John J.",
      image: john,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">

        <h2>What Customers Are Saying</h2>

        <div className="test-grid">
          {specials.map((item) => (
            <ReviewCard key={item.title} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;
