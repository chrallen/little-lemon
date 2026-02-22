import './ReviewCard.css'

function ReviewCard({ image, name, description }) {
  return (
    <article className="review-card">


      <div className='card-content'>
          <div className="card-header">
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>

          {/*Star Rating Here */}
          
          <p className="description">{description}</p>
      </div>
    </article>
  );
}

export default ReviewCard;