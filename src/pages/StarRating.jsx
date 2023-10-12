import { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleClick = (event) => {
    // Calculate the rating based on the clicked star
    const star = parseInt(event.target.dataset.star);
    setRating(star);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const className = i <= rating ? 'text-yellow-500' : 'text-gray-300';
      stars.push(
        <svg
          key={i}
          className={`${className} w-5 h-5 cursor-pointer`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          data-star={i}
          onClick={handleClick}
        >
          <path
            fillRule="evenodd"
            d="M10 1.342l2.58 5.257c.158.322.46.547.807.595l7.13 1.035c.717.104 1 .99.45 1.478l-5.154 5.013c-.261.254-.364.63-.27.983l1.305 7.617c.134.78-.748 1.378-1.438.975L10 16.655l-6.858 3.593c-.69.362-1.572-.195-1.438-.975l1.305-7.617c.094-.354-.009-.73-.27-.983L1.124 9.221c-.55-.488-.267-1.374.45-1.478l7.13-1.035c.348-.048.65-.273.807-.595L10 1.342z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      <p className="ml-2">{rating} stars</p>
    </div>
  );
}

export default StarRating;
