import React from 'react';
import Button from '../reusables/Button';
import Table from '../reusables/table';
import PendingLoan from '../reusables/card';

const pendingLoan = (pendingLoanData) => (
  <div className="pending_loans unpaid_loans">
    <span className="pending_loans_table_title">Pending request</span>
    <PendingLoan className="pending_loan_card">
      <div className="image_container" />
      <ul className="pending_loan_details">
        <li>
          <span className="details">Amount:&nbsp;&#x20A6;</span>
          {pendingLoanData[0].amount}
        </li>
        <li>
          <span className="details">Status: &nbsp;</span>
          {pendingLoanData[0].status}
        </li>
      </ul>
    </PendingLoan>
  </div>
);

const dashboardButton = (
  isAdmin,
  applyForLoanToggleModal,
  disabled = false,
) => (
  <>
    {isAdmin ? (
      <>
        <Button
          buttonText="History"
          buttonClassName="apply__loan"
          type="button"
        />
        <Button
          buttonText="Pending request"
          buttonClassName="apply__loan"
          type="button"
        />
      </>
    ) : (
      <Button
        buttonText="Apply"
        buttonClassName="apply__loan"
        clickHandler={applyForLoanToggleModal}
        disabled={disabled}
      />
    )}
  </>
);

const approvedLoan = (status, data) => (
  <div className="approved_loans">
    <span className="approved_loans_table_title">Loan history</span>
    <Table loanHistoryData={status === 'Success' ? data : []} />
    <div className="pagination_component">pagination</div>
  </div>
);

export { approvedLoan, dashboardButton, pendingLoan };
