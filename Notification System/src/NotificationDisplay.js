// components/NotificationDisplay.js
import React from "react";
import PropTypes from "prop-types"; // Import prop-types

const NotificationDisplay = ({ notificationTime }) => {
  return (
    <div className="centered">
      <h2>Notification Display</h2>
      <p>You will be notified {notificationTime} before the satellite passes.</p>
    </div>
  );
};

// Define the expected prop types
NotificationDisplay.propTypes = {
  notificationTime: PropTypes.string.isRequired, // 'string' type and required
};

export default NotificationDisplay;
