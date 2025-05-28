import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="top-bar">
      <div className="search-section">
        <div className="search-box">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search"
          />
          <div className="search-icon-layout">
            <svg className="icon-layout" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-6-6M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </div>
        </div>

        <button className="notification-button">
          <svg className="icon-layout" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
          </svg>
          <span className="notification-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
 