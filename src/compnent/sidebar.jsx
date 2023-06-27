import React from 'react';
import Sign from './signin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faExchangeAlt, faCalendarAlt, faUser, faCog, faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        &nbsp;&nbsp;&nbsp;&nbsp;Board.
      </div>
      <div className="sidebar-menu">
        <div className="menu-item">
          <FontAwesomeIcon icon={faColumns} className="menu-icon" />
          <span className="menu-label"> <a href={Sign}>Dashboard</a></span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faExchangeAlt} className="menu-icon" />
          <span className="menu-label">Transaction</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCalendarAlt} className="menu-icon" />
          <span className="menu-label">Schedules</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUser} className="menu-icon" />
          <span className="menu-label">User</span>
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCog} className="menu-icon" />
          <span className="menu-label">Settings</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="footer-item">
          <FontAwesomeIcon icon={faQuestionCircle} className="footer-icon" />
          <span className="footer-label">Help</span>
        </div>
        <div className="footer-item">
          <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
          <span className="footer-label">Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
