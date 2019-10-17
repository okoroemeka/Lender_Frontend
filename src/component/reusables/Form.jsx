import React from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const ApplyForLoan = ({ children, handleSubmit, formClassName }) => (
  <form
    className={formClassName}
    onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}
  >
    {children}
  </form>
);
ApplyForLoan.defaultProps = {
  formClassName: '',
  handleSubmit: () => {},
  children: [],
};
ApplyForLoan.propTypes = {
  formClassName: PropTypes.string,
  handleSubmit: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};
export default ApplyForLoan;
