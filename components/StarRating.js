import React from 'react';
import ReactStars from 'react-stars';

function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div>
      <ReactStars
        rating={rating}
        numReviews={numReviews}
        count={5}
        size={24}
        color2={'#ffd700'}
      />
    </div>
  );
}
export default Rating;
