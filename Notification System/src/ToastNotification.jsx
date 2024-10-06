import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ToastNotification = ({ message }) => {
    return (
        <div className="toast-notification">
            <p>{message}</p>
        </div>
    );
};

// Define prop types for the component
ToastNotification.propTypes = {
    message: PropTypes.string.isRequired, // Validate that 'message' is a string and required
};

export default ToastNotification;
