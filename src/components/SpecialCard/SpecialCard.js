import './SpecialCard.css'

const SpecialCard = ({ image, title, price, description }) => {
  return (
    <article className="special-card">
      <img src={image} alt={title} />

      <div className='card-content'>
          <div className="card-header">
            <h3>{title}</h3>
            <span className="price">{price}</span>
          </div>
          <p className="description">{description}</p>
          <button className="alt-btn order-btn">Add To Order</button>
      </div>
    </article>
  );
}

export default SpecialCard;
