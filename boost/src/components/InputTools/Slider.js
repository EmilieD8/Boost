import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ value, onChange }) => {
  return (
    <div className="slider-container">
      <div className="scale">
        <span className="scale-min">0</span>
        <span className="scale-max">5</span>
      </div>

      <input
        type="range"
        min="0"
        max="5"
        value={value}
        onChange={(e) => onChange(e.target.value)}  // Call the parent handler
        className="slider"
        step="1"
      />

      <div className="value-display">
        {value}
      </div>
    </div>
  );
};

export default Slider;
