// src/NotificationIcon.js
import React from 'react';
import './App.css'; // Optional for styling

const NotificationIcon = ({ unreadCount, onClick }) => {
  return (
    <div className="notification-icon" onClick={onClick}>
      <span role="img" aria-label="notifications">🔔</span>
      {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
    </div>
  );
};

export default NotificationIcon;
