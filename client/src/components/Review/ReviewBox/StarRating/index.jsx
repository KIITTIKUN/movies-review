import{ useState } from 'react';
import propTypes from 'prop-types'
import './index.scss'; 

function StarRating({ initialValue, onChange }) {
  const [rating, setRating] = useState(initialValue || 0);

  const handleMouseEnter = (value) => {
    setRating(value);
  };

  const handleMouseLeave = () => {
    setRating(initialValue || 0);
  };

  const handleClick = () => {
    onChange(rating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={i <= rating ? 'star-filled' : 'star-empty'}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
}

StarRating.propTypes={
    initialValue: propTypes.number.isRequired, 
    onChange: propTypes.number.isRequired
}


export default StarRating;
