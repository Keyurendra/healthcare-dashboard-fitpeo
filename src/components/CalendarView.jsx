import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/CalendarView.css';

function CalendarView() {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const timeSlots = [
    ['10:00', '08:00', '12:00', '10:00', '—', '12:00', '09:00'],
    ['11:00', '09:00', '—', '11:00', '14:00', '14:00', '10:00'],
    ['12:00', '10:00', '13:00', '—', '16:00', '15:00', '11:00'],
  ];

  const activeSlot = { date: 26, time: '09:00' };
  const softHighlights = [
    { date: 28, time: '11:00' },
    { date: 30, time: '12:00' },
    { date: 31, time: '09:00' },
  ];

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2 className="calendar-month">October 2021</h2>
        <div className="nav-buttons">
          <button className="nav-button">
            <ChevronLeft className="nav-icon" />
          </button>
          <button className="nav-button">
            <ChevronRight className="nav-icon" />
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        {weekDays.map((day, colIndex) => {
          const date = dates[colIndex];
          const columnTimes = timeSlots.map(row => row[colIndex]);

          return (
            <div
              key={colIndex}
              className={`calendar-day-column ${date === 26 ? 'highlight-date' : ''}`}
            >
              <div className={`day ${colIndex === 6 ? 'inactive' : ''}`}>{day}</div>
              <div className={`date ${colIndex === 6 ? 'inactive' : ''}`}>{date}</div>

              {columnTimes.map((time, rowIndex) => {
                const isDisabled = time === '—';
                const isActive = date === activeSlot.date && time === activeSlot.time;
                const isSoftHighlighted = softHighlights.some(
                  slot => slot.date === date && slot.time === time
                );

                return (
                  <div
                    key={rowIndex}
                    className={`time-slot 
                      ${isDisabled ? 'disabled' : ''} 
                      ${isActive ? 'active' : ''} 
                      ${isSoftHighlighted ? 'soft-highlight' : ''}`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarView;
