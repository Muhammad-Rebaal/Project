// src/NotificationHistory.js
import React from 'react';
import './App.css'; // Optional for styling

const NotificationHistory = ({ notifications }) => {
  return (
    <div className="notification-history">
      <h3>Notification History</h3>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((notif, index) => (
            <li key={index}>
              <strong>{notif.timestamp}</strong>: {notif.message}
            </li>
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </ul>
    </div>
  );
};

export default NotificationHistory;
