import './ReviewCard.css'
import star from '../../assets/icons/star.svg'

function ReviewCard({ image, name, description, rating }) {
  return (
    <article className="review-card">
      <div className='review-card-content'>
          <div className="review-card-header">
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>

          {/*Star Rating Here
          <img src={rating} alt='star rating' className='rating'/>
          */}

          <div className='rating'>
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={index}
                src={star}
                alt='star'
                className={index < rating ? "star filled" : "star"}
              />
            ))}
          </div>

          <p className="description">{description}</p>
      </div>
    </article>
  );
}

export default ReviewCard;