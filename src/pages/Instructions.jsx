import React from 'react';
import '../styles/Instructions.css';

function Instructions({ onClose }) {
  return (
    <div className="instructions-comp">
      <h1 className="zen-title">ZEN</h1>
      <p className="instructions-title">Instructions</p>
      <div className="instructions-steps">
        <div className="instruction-step">
          <div className="step-num">1</div>
          <p className="step-text">Pick up the plant and hold it gently</p>
        </div>
        <div className="instruction-step">
          <div className="step-num">2</div>
          <p className="step-text">Put on the headphones</p>
        </div>
        <div className="instruction-step">
          <div className="step-num">3</div>
          <p className="step-text">Press Zen to start your meditation</p>
        </div>
        <button className="instruction-button" onClick={onClose}>Continue</button>
      </div>
    </div>
  );
}

export default Instructions;
