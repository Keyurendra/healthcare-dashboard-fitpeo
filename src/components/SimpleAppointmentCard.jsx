import React from 'react';
import '../styles/SimpleAppointmentCard.css';

function SimpleAppointmentCard() {
  return (
    <div className="appointments">
      <div className="appointment primary">
        <div className="appointment-header">
          <span>Dentist</span>
          <span>🦷</span>
        </div>
        <div className="time-up">09:00–11:00</div>
        <div className="doctor">Dr. Cameron Williamson</div>
      </div>
      <div className="appointment secondary">
        <div className="appointment-header">
          <span>Physiotherapy Appointment</span>
          <span>💪🏻</span>
        </div>
        <div className="time">11:00–12:00</div>
        <div className="docto">Dr. Kevin Djones</div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
