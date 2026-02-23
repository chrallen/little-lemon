import "./Reviews.css"
import ReviewCard from "../ReviewCard/ReviewCard";
import warren from "../../assets/images/warren.png";
import miriam from "../../assets/images/miriam.png";
import anna from "../../assets/images/anna.png";
import john from "../../assets/images/john.png"

function Reviews() {
  const reviews = [
    {
      name: "Warren S.",
      image: warren,
      description: "The lemon ricotta pancakes were light, fresh, and perfectly balanced. Absolutely delicious! Can't wait to try the other items on the menu.",
      rating: 5,
    },
    {
      name: "Miriam R.",
      image: miriam,
      description: "From the cozy atmosphere to the flawless service, everything about our dinner felt special. I look forward to returning with my family.",
      rating: 5,
    },
    {
      name: "Anna K.",
      image: anna,
      description: "Great flavors and friendly staff, but they were understaffed during my visit so my dish was not as warm as I would have preferred.",
      rating: 3,
    },
    {
      name: "John J.",
      image: john,
      description: "The Greek Salad was delicious and beautifully plated but some of the ingredients seemed to b",
      rating: 4,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">

        <h2>What Customers Are Saying</h2>

        <div className="test-grid">
          {reviews.map((item) => (
            <ReviewCard key={item.title} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;
