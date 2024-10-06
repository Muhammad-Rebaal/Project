// src/App.js
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import LocationPicker from './LocationPicker';
import Navbar from './Navbar';
import NotificationHistory from './NotificationHistory'; // Import NotificationHistory

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [satelliteDistance, setSatelliteDistance] = useState(1000); // Dummy distance
  const [notificationDate, setNotificationDate] = useState("");
  const [notificationTime, setNotificationTime] = useState("");
  const [satelliteMessage, setSatelliteMessage] = useState("");
  const [isSatelliteVisible, setIsSatelliteVisible] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0); // For unread notifications
  const [notifications, setNotifications] = useState([]); // Store notifications
  const [showNotifications, setShowNotifications] = useState(false); // Control notification box visibility

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate satellite position changing
      setSatelliteDistance(prev => Math.max(0, prev - Math.floor(Math.random() * 10)));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const handleSetNotification = () => {
    const notificationDateTime = new Date(`${notificationDate}T${notificationTime}`);
    const currentTime = new Date();
    
    if (notificationDateTime > currentTime) {
      const waitTime = notificationDateTime - currentTime;

      setTimeout(() => {
        const message = `Satellite will be at ${satelliteDistance} km away from ${selectedCity}!`;
        const timestamp = new Date().toLocaleString();

        toast(message);
        setSatelliteMessage("Hello User! Here's your satellite data.");
        setIsSatelliteVisible(true);

        // Add the notification to the list
        setNotifications(prevNotifications => [
          ...prevNotifications,
          { timestamp, message }
        ]);

        // Increment unread notification count
        setUnreadCount(prev => prev + 1);

      }, waitTime);
    } else {
      toast.error("Please set a future date and time.");
    }
  };

  const handleShowNotifications = () => {
    // Toggle visibility of the notification history box
    setShowNotifications(prev => !prev);

    // Mark all notifications as read (reset unread count)
    setUnreadCount(0);
  };

  return (
    <div className="app-container">
      <Navbar unreadCount={unreadCount} onShowNotifications={handleShowNotifications} />
      
      <div className="location-picker">
  <LocationPicker selectedCity={selectedCity} onCityChange={handleCityChange} />
</div>

<div className="date-time-picker">
  <label htmlFor="date-picker">Choose a date:</label>
  <input
    type="date"
    id="date-picker"
    value={notificationDate}
    onChange={(e) => setNotificationDate(e.target.value)}
  />
</div>
<div className="date-time-picker">
  <label htmlFor="time-picker">Choose a time:</label>
  <input
    type="time"
    id="time-picker"
    value={notificationTime}
    onChange={(e) => setNotificationTime(e.target.value)}
  />
</div>

<button className="setNotification" onClick={handleSetNotification}>Set Notification</button>

<div className="satellite-info">
  <h3>Current Satellite Distance:</h3>
  <p>{satelliteDistance} km</p>
</div>

{isSatelliteVisible && (
  <div className="satellite-data">
    <h2>Satellite Data</h2>
    <p>{satelliteMessage}</p>
    <button>Download Data</button>
  </div>
)}

      {/* Render Notification History if box is toggled */}
      {showNotifications && <NotificationHistory notifications={notifications} />}

      <ToastContainer />
    </div>
  );
};

export default App;
