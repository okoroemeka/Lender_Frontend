/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonText,
  clickHandler,
  buttonType,
  buttonClassName,
  disabled,
}) => (
  <button
    className={`button ${buttonClassName}`}
    onClick={clickHandler}
    type={buttonType}
    disabled={disabled}
  >
    {buttonText}
  </button>
);

Button.defaultProps = {
  clickHandler: () => null,
  buttonType: 'submit',
  buttonClassName: '',
  disabled: false,
};
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  buttonType: PropTypes.string,
  buttonClassName: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Button;
