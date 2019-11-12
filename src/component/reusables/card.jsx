import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, children }) => (
  <div className={className}>{children}</div>
);

Card.defaultProps = {
  className: 'card',
};
Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};
export default Card;
