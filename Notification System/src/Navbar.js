// src/Navbar.js
import React from 'react';
import NotificationIcon from './NotificationIcon'; // Import the NotificationIcon component
import './App.css'; // For styling

const Navbar = ({ unreadCount, onShowNotifications }) => {
  return (
    <nav className="navbar">
      <h1>Satellite Notification App</h1>
      <NotificationIcon unreadCount={unreadCount} onClick={onShowNotifications} />
    </nav>
  );
};

export default Navbar;
