/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import Table from '../reusables/table';
import { loanHistory, getPendingLoan } from '../../actions/loans';
import Modal from '../reusables/modal';
import Button from '../reusables/Button';
import ApplyForLoan from '../loan/ApplyForLoan';
import { logout } from '../../actions/login';
import PendingLoan from '../reusables/card';
import './dashboard.scss';

class Dashboard extends Component {
  state = {
    showModal: false,
  };

  componentDidMount = async () => {
    const {
      loanHistory: getLoanHistory,
      getPendingLoan: getPendingLoanAction,
    } = this.props;
    await getPendingLoanAction();
    return getLoanHistory();
  };

  toggleModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  pendingLoan = (pendingLoanData) => (
    <div className="pending_loans">
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

  dashboardButton = () => (
    <>
      <Button
        buttonText="Apply"
        buttonClassName="apply__loan"
        clickHandler={this.toggleModal}
      />
      <Button
        buttonText="Pending request"
        buttonClassName="apply__loan"
        type="button"
      />
      <Button
        buttonText="History"
        buttonClassName="apply__loan"
        type="button"
      />
    </>
  );

  approvedLoan = (status, data) => (
    <div className="approved_loans">
      <span className="approved_loans_table_title">Loan history</span>
      <Table loanHistoryData={status == 'Success' ? data : []} />
      <div className="pagination_component">pagination</div>
    </div>
  );

  render() {
    const {
      loanHistoryData: { status, data, message },
      logout: userLogout,
      pendingLoan: { data: pendingLoanData },
    } = this.props;
    const { showModal } = this.state;
    if (message == 'jwt expired') {
      userLogout();
      return <Redirect to="/login" />;
    }
    return (
      <div className="dashboard">
        <div className="dashboard_button">{this.dashboardButton()}</div>
        <div className="dashboard_main">
          {this.approvedLoan(status, data)}
          {Boolean(pendingLoanData)
            && Boolean(pendingLoanData.length)
            && this.pendingLoan(pendingLoanData)}
        </div>
        {showModal && (
          <Modal>
            <div className="loan__container">
              <ApplyForLoan toggleModal={this.toggleModal} />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({
  loans: loanHistoryData,
  loanApplication: loanApplicationData,
  pendingLoan,
}) => ({
  loanHistoryData,
  loanApplicationData: loanApplicationData || {},
  pendingLoan,
});
export default connect(
  mapStateToProps,
  { loanHistory, logout, getPendingLoan },
)(Dashboard);
