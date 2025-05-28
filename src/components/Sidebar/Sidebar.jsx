import React from 'react';
import './Sidebar.css';
import {
  LayoutDashboard,
  SortDesc,
  Calendar,
  PlusSquare,
  LineChart,
  MessageCircle,
  Phone,
  Settings
} from 'lucide-react';

const NavItem = ({ icon, label, active = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`nav-link ${active ? 'nav-active' : 'nav-default'}`}
      >
        <span className="nav-icon">
          {React.cloneElement(icon, {
            className: active ? 'icon-active' : 'icon-default',
            size: 20,
          })}
        </span>
        <span className="nav-label">{label}</span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-content">
        <div>
          <div className="sidebar-section-header">General</div>
          <nav>
            <ul className="sidebar-nav-list">
              <NavItem icon={<LayoutDashboard />} label="Dashboard" active />
              <NavItem icon={<SortDesc />} label="History" />
              <NavItem icon={<Calendar />} label="Calendar" />
              <NavItem icon={<PlusSquare />} label="Appointments" />
              <NavItem icon={<LineChart />} label="Statistics" />
            </ul>
          </nav>

          <div className="sidebar-section-header tools-header">Tools</div>
          <nav>
            <ul className="sidebar-nav-list">
              <NavItem icon={<MessageCircle />} label="Chat" />
              <NavItem icon={<Phone />} label="Support" />
            </ul>
          </nav>
        </div>

        <nav className="settings-nav">
          <ul className="sidebar-nav-list">
            <NavItem icon={<Settings />} label="Setting" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
