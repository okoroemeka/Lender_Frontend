/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../reusables/Form';
import Button from '../reusables/Button';
import { repayLoan } from '../../actions/loans';
import './loanRepay.scss';

const LoanRepayment = ({
  data: [loanData],
  toggleModal,
  repayLoan: repayLoanAction,
}) => {
  const [amount, setAmount] = useState();
  const handleSubmit = async () => {
    const repaymentDetails = { amount };
    const { _id: loanId } = loanData;
    const response = await repayLoanAction(repaymentDetails, loanId);
    if (response.status === 'Error') {
      return alert('Error occured, please try Again');
    }
    toggleModal();
    alert(`${response.status}`);
    window.location.reload();
  };
  console.log('loanData', loanData);
  const handleClickOnLoanRepayment = async (e) => {
    const { innerText } = e.target;
    const formatedAmount = Number(innerText.slice(1));
    await setAmount(formatedAmount);
  };
  return (
    <div className="loan__repayment__container">
      <Form handleSubmit={handleSubmit} formClassName="repay__loan__form">
        <div className="loan__repayment__details">
          <div>
            <span className="loan__balance__text">Full payment:</span>
            <span
              className="loan__balance full"
              onClick={handleClickOnLoanRepayment}
              onKeyDown={handleClickOnLoanRepayment}
            >
              &#x20A6;
              {loanData.balance}
            </span>
          </div>
          <div>
            <span className="loan__balance__text">Installment:</span>
            <span
              className="loan__balance"
              onClick={handleClickOnLoanRepayment}
              onKeyDown={handleClickOnLoanRepayment}
            >
              &#x20A6;
              {loanData.monthlyInstallment}
            </span>
          </div>
        </div>

        <label htmlFor="loanRepayment">
          <span className="naira__symbol">&#x20A6;</span>
          <input
            className="form__input__number"
            autoComplete="off"
            type="number"
            placeholder="Enter amount"
            name="email"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0"
            max={loanData.balance}
          />
        </label>

        <Button
          buttonClassName="loan__form__button cancel__button"
          buttonText="Cancel"
          clickHandler={toggleModal}
        />
        <Button
          buttonClassName="loan__form__button complete__button"
          buttonText="Complete"
        />
      </Form>
    </div>
  );
};

const mapStateToProps = ({ loanRepayment }) => ({
  loanRepayment,
});
export default connect(
  mapStateToProps,
  { repayLoan },
)(LoanRepayment);
