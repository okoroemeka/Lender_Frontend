/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonText, clickHandler, buttonType, buttonClassName,
}) => (
  <button className={buttonClassName} onClick={(e)=> clickHandler(e)} type={buttonType}>
    {buttonText}
  </button>
);

Button.defaultProps = {
  clickHandler: () => {},
  buttonType: 'submit',
  buttonClassName: '',
};
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  buttonType: PropTypes.string,
  buttonClassName: PropTypes.string,
};
export default Button;
