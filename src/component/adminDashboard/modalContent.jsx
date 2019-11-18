/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../reusables/Button';
import './modalContent.scss';

const ModalContent = ({
  loan: {
 amount, status, createdOn, dueDate, email, _id: loanId 
},
  handleCloseModal,
  handleLoanReaction,
}) => (
  <div className="modal_content_container">
    <div
      className="cancel_button"
      onClick={handleCloseModal}
      onKeyDown={handleCloseModal}
    >
      &times;
    </div>
    <ul className="loan_details">
      <li>
        <span className="loan_info">Amount:</span> <span>&#x20A6;{amount}</span>
      </li>
      <li>
        <span className="loan_info">Created On:</span>{' '}
        <span>{createdOn.split('T')[0]}</span>
      </li>
      <li>
        <span className="loan_info">Due Date:</span>{' '}
        <span>{dueDate.split('T')[0]}</span>
      </li>
      <li>
        <span className="loan_info">Status:</span> <span>{status}</span>
      </li>
      <li>
        <span className="loan_info">User Email:</span> <span>{email}</span>
      </li>
    </ul>
    <div className="button_contianer">
      {status === 'pending' && (
        <>
          <Button
            buttonText="approve"
            buttonClassName="approve__loan"
            clickHandler={(event) => handleLoanReaction(event, loanId)}
          />
          <Button
            buttonText="decline"
            buttonClassName="decline__loan"
            clickHandler={(event) => handleLoanReaction(event, loanId)}
          />
        </>
      )}
    </div>
  </div>
);

ModalContent.defaultProps = {
  amount: '',
  status: '',
  createdOn: '',
  dueDate: '',
  email: '',
  handleCloseModal: () => null,
};
ModalContent.propTypes = {
  amount: PropTypes.string,
  status: PropTypes.string,
  createdOn: PropTypes.string,
  dueDate: PropTypes.string,
  email: PropTypes.string,
  handleCloseModal: PropTypes.func,
};
export default ModalContent;
