import React, { useState } from 'react';
import './YesNo.css';
import Button from '../Button/Button';

const YesNoInput = ({ value, onChange }) => {
  return (
    <div className="yes-no-container">
      <Button text="Ja" onClick={() => onChange("Yes")} className={value === "Yes" ? "active" : ""}/>
      <Button text="Nein" onClick={() => onChange("No")} className={value === "No" ? "active" : ""}/>
    </div>
  );
};

export default YesNoInput;
