/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Form from '../reusables/Form';
import Button from '../reusables/Button';
import './loanRepay.scss';

const LoanRepayment = ({
  data: [loanData],
  toggleModal,
  repayLoan: repayLoanAction,
}) => {
  const [amount, setAmount] = useState();
  /**
   * handles repayment of loan.
   */
  const handleSubmit = async () => {
    const repaymentDetails = { amount };
    const { _id: loanId } = loanData;
    await repayLoanAction(repaymentDetails, loanId);
  };
  /**
   * Handles updating of loan amount in state
   * @param {*} event
   */
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
        <div className="error__message">
          {amount <= 0 ? 'Invalid amount' : null}
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
            step="any"
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
          disabled={!(amount > 0)}
        />
      </Form>
    </div>
  );
};

export default LoanRepayment;
