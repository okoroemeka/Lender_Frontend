/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './notification.scss';

const Notification = (message, toggleNotification = () => null) => (
  <div className="notification__container">
    <div
      className="close__button"
      onClick={() => toggleNotification()}
      onKeyDown={() => toggleNotification()}
    >
      &times;
    </div>
    <p>{message}</p>
  </div>
);
export default Notification;
