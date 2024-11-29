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
      <h2>Do you want to continue?</h2>
      
      {/* Display buttons for Yes and No */}
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>

      {/* Optionally, display a message based on user's choice */}
      <p>You selected: {userChoice}</p>
    </div>
  );
};

export default YesNoInput;
