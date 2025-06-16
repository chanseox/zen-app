import React, { useState } from 'react';
import '../styles/Instructions.css';

function Instructions({ onClose }) {

  return (
    <div className="instructions-comp">
    <div
      className="dropdown"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>INSTRUCTIONS</span>
      </div>
        <div className="dropdown-content">
          <p>1. Pick up the plant. </p>
          <p>2. Put on the headphones. </p>
          <p>3. Press Zen to start your meditation. </p>
        </div>
        <button className="instruction-button" onClick={onClose}>Continue</button>
    </div>
  );
}

export default Instructions;
