import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import { ChevronDown } from 'lucide-react';
import '../styles/DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-box">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="week-selector">
          <span>This Week</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="dashboard-content">
        <AnatomySection />
        <HealthStatusCards />
      </div>

      <ActivityFeed />
    </div>
  );
}

export default DashboardMainContent;
