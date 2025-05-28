import React from 'react';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
  const organs = [
    { icon: '🫁', label: 'Lungs', color: 'red', width: '70%' },
    { icon: '🦷', label: 'Teeth', color: 'green', width: '70%' },
    { icon: '🦴', label: 'Bone', color: 'orange', width: '70%' },
  ];

  return (
    <div className="organ-status">
      {organs.map((item, index) => (
        <div className="status-card" key={index}>
          <div className="status-header">
            <span className="icon" role="img" aria-label={item.label} style={{ fontSize: '24px' }}>
              {item.icon}
            </span>
            <span className="label">{item.label}</span>
          </div>
          <p className="status-date">Date: 26 Oct 2021</p>
          <div className={`progress-bar ${item.color}`} style={{ '--bar-width': item.width }}></div>
        </div>
      ))}
      <div className="details-link">Details →</div>
    </div>
  );
}

export default HealthStatusCards;
