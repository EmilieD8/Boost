import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  // State to track the value of the slider
  const [value, setValue] = useState(1);

  // Handle the change event when the slider is moved
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-container">
      <div className="scale">
        {/* Labels for the scale */}
        <span className="scale-min">0</span>
        <span className="scale-max">5</span>
      </div>

      {/* Range slider with the value between 1 and 10 */}
      <input
        type="range"
        min="0"
        max="5"
        value={value}
        onChange={handleChange}
        className="slider"
        step="1"
      />

      {/* Display the current value */}
      <div className="value-display">
        {value}
      </div>
    </div>
  );
};

export default Slider;
