// LocationPicker.js

import React from "react";
import PropTypes from "prop-types";

const LocationPicker = ({ selectedCity, onCityChange }) => {
  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Hyderabad",
    "Gujranwala",
    "Sialkot"
  ];

  return (
    <div>
      <label htmlFor="city-select">Choose a city:</label>
      <select id="city-select" value={selectedCity} onChange={onCityChange}>
        <option value="">--Please choose an option--</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

LocationPicker.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default LocationPicker;
