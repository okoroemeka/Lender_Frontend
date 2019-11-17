/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import Table from '../reusables/table';
import {
  loanHistory,
  getPendingLoan,
  loanApplicationAction,
} from '../../actions/loans';
import Modal from '../reusables/modal';
import Button from '../reusables/Button';
import ApplyForLoan from '../loan/ApplyForLoan';
import { logout } from '../../actions/login';
import userAction from '../../actions/user';
import PendingLoan from '../reusables/card';
import AmdinTable from '../adminDashboard';
import './dashboard.scss';

class Dashboard extends Component {
  state = {
    showModal: false,
    user: this.props.user,
  };

  componentDidMount = async () => {
    const {
      loanHistory: getLoanHistory,
      getPendingLoan: getPendingLoanAction,
      userAction: getUser,
    } = this.props;
    const user = await getUser();
    await getPendingLoanAction();
    await getLoanHistory();
    return this.setState((prevState) => ({ ...prevState, user }));
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

  dashboardButton = (isAdmin) => (
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
          clickHandler={this.toggleModal}
        />
      )}
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
    const { showModal, user } = this.state;
    if (message == 'jwt expired') {
      userLogout();
      return <Redirect to="/login" />;
    }

    const renderComponent = !Object.keys(user).length ? (
      <div>Loading</div>
    ) : (
      <div className="dashboard">
        <div className="dashboard_button">
          {this.dashboardButton(user.isAdmin)}
        </div>
        <div className="dashboard_main">
          {!user.isAdmin ? (
            <>
              {Boolean(pendingLoanData)
                && Boolean(pendingLoanData.length)
                && this.pendingLoan(pendingLoanData)}
              {Boolean(data) && this.approvedLoan(status, data)}
            </>
          ) : (
            <AmdinTable />
          )}
        </div>
        {showModal && (
          <Modal>
            <div className="loan__container">
              <ApplyForLoan
                reRender={this.causeRerender}
                toggleModal={this.toggleModal}
              />
            </div>
          </Modal>
        )}
      </div>
    );
    return renderComponent;
  }
}
const mapStateToProps = ({
  loans: loanHistoryData,
  loanApplication: loanApplicationData,
  pendingLoan,
  user,
}) => ({
  loanHistoryData,
  loanApplicationData: loanApplicationData || {},
  pendingLoan,
  user: user || {},
});
export default connect(
  mapStateToProps,
  {
    loanHistory,
    logout,
    getPendingLoan,
    loanApplicationAction,
    userAction: userAction.getUser,
  },
)(Dashboard);
