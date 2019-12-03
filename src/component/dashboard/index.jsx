/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import {
  loanHistory,
  getPendingLoan,
  loanApplicationAction,
  approvedButUnpaidLoan,
  repayLoan,
} from '../../actions/loans';
import Modal from '../reusables/modal';
import Button from '../reusables/Button';
import ApplyForLoan from '../loan/ApplyForLoan';
import { logout } from '../../actions/login';
import userAction from '../../actions/user';
import AmdinTable from '../adminDashboard';
import UnpaidLoan from './loanCard';
import LoanRepay from '../loanRepay';
import { dashboardButton, pendingLoan, approvedLoan } from './microComponents';
import Notification from '../reusables/notification';
import './dashboard.scss';

class Dashboard extends Component {
  state = {
    showModal: false,
    user: this.props.user,
    isApplyLoan: false,
    showNotification: false,
    message: '',
    unPaidLoanData: [],
    loanHistoryData: { status: '', data: [] },
  };

  componentDidMount = async () => {
    const {
      loanHistory: getLoanHistory,
      getPendingLoan: getPendingLoanAction,
      userAction: getUser,
      approvedButUnpaidLoan: unPaidLoanAction,
    } = this.props;
    const user = await getUser();
    await getPendingLoanAction();
    const loanHistoryData = await getLoanHistory();
    const { data } = await unPaidLoanAction();
    this.setState((prevState) => ({
      ...prevState,
      user,
      loanHistoryData:
        loanHistoryData.status === 'Error'
          ? { status: '', data: [] }
          : loanHistoryData,
      unPaidLoanData: data || [],
    }));
  };

  /**
   * Handles loan repayment
   */
  handleRepayLoan = async (repaymentDetails, loanId) => {
    const response = await this.props.repayLoan(repaymentDetails, loanId);
    if (response.status === 'Error') {
      return this.setState((prevState) => ({
        ...prevState,
        message: response.message,
      }));
    }
    this.toggleModal();
    this.setState((prevState) => ({
      ...prevState,
      message: 'Loan repayment was successful',
      showNotification: true,
    }));
    const res = await this.props.approvedButUnpaidLoan();
    return this.setState((prevState) => ({
      ...prevState,
      unPaidLoanData: res.data || [],
    }));
  };

  /**
   * Handles loan Application
   */
  handleLoanApplication = async (loanDetails) => {
    const result = await this.props.loanApplicationAction(loanDetails);
    if (result.status === 'Success') {
      this.toggleModal();
      const loanHistoryData = await this.props.loanHistory();
      return this.setState((prevState) => ({
        ...prevState,
        message: 'Your loan application was successful',
        showNotification: true,
        loanHistoryData,
      }));
    }
    return this.setState((prevState) => ({
      ...prevState,
      message: result.message,
      showNotification: true,
    }));
  };

  /**
   * Toggle modal
   */
  toggleModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  toggleApplyLoanContent = () => this.setState(() => ({ isApplyLoan: true }));

  applyForLoanToggleModal = () => {
    this.toggleApplyLoanContent();
    this.toggleModal();
  };

  toggleApplyUnpaidLoanContent = () => {
    this.setState(() => ({ isApplyLoan: false }));
  };

  toggleModalForUnPaidLoan = () => {
    this.toggleApplyUnpaidLoanContent();
    this.toggleModal();
  };

  /**
   * Handle cancle notification
   */
  toggleNotification = () => {
    this.setState((prevState) => ({
      ...prevState,
      showNotification: !prevState.showNotification,
    }));
  };

  /**
   * Set message for admin loan reaction
   */
  updateMessageForAdminLoanReaction = (message) => this.setState((prevState) => ({ ...prevState, message }));

  render() {
    const {
      logout: userLogout,
      pendingLoan: { data: pendingLoanData },
      unPaidLoan,
    } = this.props;
    const {
      loanHistoryData: { status, data, message },
      showModal,
      user,
      isApplyLoan,
      unPaidLoanData,
      message: messageFromState,
      showNotification,
    } = this.state;
    if (!user || message == 'jwt expired') {
      userLogout();
      return <Redirect to="/login" />;
    }
    const renderComponent = !Object.keys(user).length ? (
      <div>Loading</div>
    ) : (
      <>
        {Boolean(messageFromState.length)
          && showNotification
          && Notification(messageFromState, this.toggleNotification)}
        <div className="dashboard">
          <div className="dashboard_button">
            {dashboardButton(
              user.isAdmin,
              this.applyForLoanToggleModal,
              Boolean(unPaidLoanData.length) || Boolean(pendingLoanData),
            )}
          </div>
          <div className="dashboard_main">
            {!user.isAdmin ? (
              <>
                {Boolean(unPaidLoanData.length) && (
                  <>
                    <UnpaidLoan
                      data={unPaidLoanData[0]}
                      cardTitle="Loan"
                      needButton
                      buttonText="repay"
                      buttonClassName="repay_loan"
                      handleButtonClick={this.toggleModalForUnPaidLoan}
                    />
                    {/* this button guy only displays on mobile */}
                    <Button
                      buttonText="Apply for loan"
                      buttonClassName="apply__loan__mobile"
                      clickHandler={this.applyForLoanToggleModal}
                    />
                  </>
                )}
                {Boolean(pendingLoanData)
                  && Boolean(pendingLoanData.length)
                  && pendingLoan(pendingLoanData, unPaidLoan)}
                {Boolean(data) && approvedLoan(status, data)}
              </>
            ) : (
              <AmdinTable
                updateMessageForAdminLoanReaction={
                  this.updateMessageForAdminLoanReaction
                }
              />
            )}
          </div>
          {showModal && (
            <Modal>
              <div className="loan__container">
                {isApplyLoan ? (
                  <ApplyForLoan
                    toggleModal={this.toggleModal}
                    handleLoanApplication={this.handleLoanApplication}
                  />
                ) : (
                  <LoanRepay
                    data={unPaidLoan}
                    toggleModal={this.toggleModal}
                    repayLoan={this.handleRepayLoan}
                  />
                )}
              </div>
            </Modal>
          )}
        </div>
      </>
    );
    return renderComponent;
  }
}
const mapStateToProps = ({
  loans: loanHistoryData,
  loanApplication: loanApplicationData,
  pendingLoan: pendingLoanData,
  user,
  approvedButUnpaidLoan: { data },
  loanRepayment,
}) => ({
  loanHistoryData,
  loanApplicationData: loanApplicationData || {},
  pendingLoan: pendingLoanData,
  user: user || {},
  unPaidLoan: data,
  loanRepayment,
});
export default connect(
  mapStateToProps,
  {
    loanHistory,
    logout,
    getPendingLoan,
    loanApplicationAction,
    userAction: userAction.getUser,
    approvedButUnpaidLoan,
    repayLoan,
  },
)(Dashboard);
