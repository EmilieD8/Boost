import React, { useState } from 'react';
import './YesNo.css';

const YesNoInput = () => {
  // Set the initial state to "Yes" so it's the default
  const [userChoice, setUserChoice] = useState("Yes");

  // Function to handle the Yes button click
  const handleYesClick = () => {
    setUserChoice("Yes");
  };

  // Function to handle the No button click
  const handleNoClick = () => {
    setUserChoice("No");
  };

  return (
    <div className="yes-no-container">      
      {/* Display buttons for Yes and No */}
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>
    </div>
  );
};

export default YesNoInput;
