import React from 'react';
import '../styles/UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming">
      <h2 className="section-title">The Upcoming Schedule</h2>

      <div className="day-section">
        <h3 className="day-label">On Thursday</h3>
        <div className="event-grid">
          <div className="event-card primary">
            <div className="appointment-header">
              <div>
                <h4 className="event-title">Health checkup complete</h4>
                <p className="time">11:00 AM</p>
              </div>
              <span>💉</span>
            </div>
          </div>
          <div className="event-card secondary">
            <div className="appointment-header">
              <div>
                <h4 className="event-title">Ophthalmologist</h4>
                <p className="time">14:00 PM</p>
              </div>
              <span>👁️</span>
            </div>
          </div>
        </div>
      </div>

      <div className="day-section">
        <h3 className="day-label">On Saturday</h3>
        <div className="event-grid-cardio">
          <div className="event-card-cardio">
            <div className="appointment-header">
              <div>
                <h4 className="event-title">Cardiologist</h4>
                <p className="time">12:00 AM</p>
              </div>
              <span>❤️</span>
            </div>
          </div>
          <div className="event-card-cardio">
            <div className="appointment-header">
              <div>
                <h4 className="event-title">Neurologist</h4>
                <p className="time">16:00 PM</p>
              </div>
              <span>👨🏻‍⚕</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
