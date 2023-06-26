import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="left-heading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</div>
      <div className="right-heading">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="notification-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="profile-avatar">Profile</div>
      </div>
    </nav>
  );
}

export default TopNavbar;
