import React, { useState } from 'react';
import './YesNo.css';
import Button from '../Button/Button';

const YesNoInput = ({ value, onChange }) => {
  return (
    <div className="yes-no-container">
      <Button className='button' text="Ja" onClick={() => onChange("Yes")}/>
      <Button className='button' text="Nein" onClick={() => onChange("No")}/>
    </div>
  );
};

export default YesNoInput;
