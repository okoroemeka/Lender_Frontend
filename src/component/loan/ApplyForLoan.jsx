/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../reusables/Form';
import Button from '../reusables/Button';
import { loanApplicationAction } from '../../actions/loans';
import './loan.scss';

const ApplyForLoan = ({ toggleModal, loanApplicationAction: postLoan }) => {
  const [loanAmount, setLoan] = useState('');
  const [loanDuration, setDuration] = useState('');
  const handleSubmit = async () => {
    const userData = {
      tenor: loanDuration,
      amount: loanAmount,
    };
    const result = await postLoan(userData);
    if (result.status === 'Success') {
      toggleModal();
      window.location.reload();
      return alert('Loan request successful');
    }
    alert(result.message);
    return toggleModal();
  };
  return (
    <Form formClassName="loan__form" handleSubmit={handleSubmit}>
      <h3>Apply</h3>
      <label htmlFor="loanApplication">
        <span className="naira_symbol">&#x20A6;</span>
        <input
          className="form__input__number"
          id="loan__form__amount"
          autoComplete="off"
          type="number"
          placeholder="Enter amount"
          name="email"
          value={loanAmount}
          onChange={(e) => setLoan(e.target.value)}
          required
          min="0"
        />
      </label>
      <label htmlFor="duration">
        <input
          className="form__input__number"
          id="loan__duration"
          type="number"
          autoComplete="off"
          placeholder="Enter loan duration in months"
          name="duration"
          value={loanDuration}
          onChange={(e) => setDuration(e.target.value)}
          required
          min="0"
          max="12"
        />
      </label>
      <Button
        buttonClassName="loan__form__button cancel__button"
        buttonText="Cancel"
        clickHandler={toggleModal}
      />
      <Button buttonClassName="loan__form__button" buttonText="Apply" />
    </Form>
  );
};
const mapStateToProps = ({ loanApplication: loanApplicationData }) => ({
  loanApplicationData,
});
export default connect(
  mapStateToProps,
  { loanApplicationAction },
)(ApplyForLoan);
