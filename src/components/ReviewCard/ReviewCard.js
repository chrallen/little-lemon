import './ReviewCard.css'
import rating from '../../assets/images/rating.svg'

function ReviewCard({ image, name, description }) {
  return (
    <article className="review-card">


      <div className='review-card-content'>
          <div className="review-card-header">
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>

          {/*Star Rating Here */}
          <img src={rating} alt='star rating' className='rating'/>

          <p className="description">{description}</p>
      </div>
    </article>
  );
}

export default ReviewCard;