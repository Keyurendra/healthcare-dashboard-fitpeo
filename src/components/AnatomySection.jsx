import React from 'react';
import anatomy from '../assets/anatomy.png';
import magnifierIcon from '../assets/magnifier.png';
import '../styles/AnatomySection.css';

function AnatomySection() {
  return (
    <div className="body-status">
      <div className="body-image-wrapper">
        <img src={anatomy} alt="Body diagram" className="body-image" />
        <img src={magnifierIcon} alt="magnifier" className="magnifier-image" />

        {/* Heart Scanner */}
        <div className="scanner-frame heart-scanner">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
          <div className="scan-bar"></div>
        </div>

        {/* Leg Scanner */}
        <div className="scanner-frame leg-scanner">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
          <div className="scan-bar"></div>
        </div>

        {/* Tags */}
        <div className="tag heart-tag">❤️ Healthy Heart</div>
        <div className="tag leg-tag">🦵 Healthy Leg</div>
      </div>
    </div>
  );
}

export default AnatomySection;
