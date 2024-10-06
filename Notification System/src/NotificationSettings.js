// src/NotificationSettings.js
import React, { useState } from 'react';
import './App.css'; // For styling

const NotificationSettings = ({ onTimeChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    onTimeChange(e.target.value, selectedTime);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    onTimeChange(selectedDate, e.target.value);
  };

  return (
    <div className="notification-settings">
      <h3>Select Notification Time</h3>
      <div className="date-time-picker">
        <label htmlFor="date">Date: </label>
        <input 
          type="date" 
          id="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
        />

        <label htmlFor="time">Time: </label>
        <input 
          type="time" 
          id="time" 
          value={selectedTime} 
          onChange={handleTimeChange} 
        />
      </div>
    </div>
  );
};

export default NotificationSettings;
