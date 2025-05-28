import React from 'react';
import '../styles/Layout.css';
import Sidebar from './Sidebar/Sidebar';
import DashboardContent from './DashboardMainContent';
import CalendarView from './CalendarView';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import UpcomingSchedule from './UpcomingSchedule';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar">
        <div className="logo-container">
          <h1 className="logo-text">
            <span className="logo-highlight">Health</span>
            <span className="logo-dark">care.</span>
          </h1>
        </div>
        <Sidebar />
      </div>

      <div className="main-area">
        <div className="center-content">
          <Header /> 
          <div className="dashboard-content">
            <DashboardContent />
          </div>
        </div>

        <div className="right-section">
          <div className="top-actions">
            <div className="avatar">👨‍⚕️</div>
            <button className="add-button">
              <svg className="icon-layout" viewBox="0 0 24 24" stroke="white">
                <path d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <div className="right-content">
            <CalendarView />
            <SimpleAppointmentCard />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
