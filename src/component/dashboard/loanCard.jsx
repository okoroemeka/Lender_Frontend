import React from 'react';
import UnpaidLoanCard from '../reusables/card';
import Button from '../reusables/Button';

const UnpaidLoan = ({
  data,
  cardTitle,
  needButton,
  buttonText,
  handleButtonClick,
  // buttonType,
  buttonClassName,
}) => (
  <div className="pending_loans unpaid_loans">
    <span className="pending_loans_table_title">{cardTitle}</span>
    <UnpaidLoanCard className="pending_loan_card">
      <div className="image_container" />
      <ul className="pending_loan_details">
        <li>
          <span className="details">Amount:&nbsp;&#x20A6;</span>
          {data[0].amount}
        </li>
        <li>
          <span className="details">Status: &nbsp;</span>
          {data[0].status}
        </li>
        <li>
          <span className="details">Balance: &nbsp;&#x20A6;</span>
          {data[0].balance}
        </li>
        <li>
          <span className="details">Due Date:&nbsp;</span>
          {data[0].dueDate.split('T')[0]}
        </li>
      </ul>
      {needButton && (
        <Button
          buttonText={buttonText}
          buttonClassName={buttonClassName}
          clickHandler={handleButtonClick}
        />
      )}
    </UnpaidLoanCard>
  </div>
);

export default UnpaidLoan;
