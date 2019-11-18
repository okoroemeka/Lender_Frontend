/* eslint-disable no-underscore-dangle */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../reusables/table';
import { loanHistory, approveLoan } from '../../actions/loans';
import Modal from '../reusables/modal';
import ModalContent from './modalContent';

import './adminDashboard.scss';

const allLons = loanHistory;
class AdminTable extends Component {
  state = {
    loan: {},
    isFetching: false,
    showModal: false,
  };

  componentDidMount = async () => {
    const { allLons: retreiveAllLoan } = this.props;
    this.setState(({ isFetching }) => ({ isFetching: !isFetching }));
    await retreiveAllLoan();
    this.setState(({ isFetching }) => ({ isFetching: !isFetching }));
  };

  toggleModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  /**
   * add the onclick handler for loan rejection/approval button here
   * pass it down as a prop to the loan content component
   * the handler should take the loan id as an argument
   * call the action for loan reaction in the onclick handler with the loan id.
   * */
  handleLoanReaction = async (event, ...argument) => {
    const {
      target: { innerText },
    } = event;
    const [loanId] = argument;
    const { approveLoan: approveLoanAction } = this.props;
    const status = innerText === 'approve' ? 'approved' : 'rejected';
    await approveLoanAction(loanId, { status });
    this.toggleModal();
    window.location.reload();
  };

  /**
   * Add the modal here, create the onclick handler here too.
   * the onclick event handler should take in the id of the loan clicked on
   * then fetch then retrieve the loan from the array of all loans passed  in as prop
   * to the table.
   * the retrieved loan data should then be passed in as prop to the modal
   * the modal should have an accept and reject button.
   */
  handleClick = (id, data) => {
    const loan = data.find((element) => element._id === id);
    this.setState((prevState) => ({ ...prevState, loan }));
    return this.toggleModal();
  };

  render() {
    const {
      loans: { status, data },
    } = this.props;
    const { showModal, loan } = this.state;
    const renderAdminTable = (
      <>
        <div className="loan__applications">Loan Applications</div>
        <Table
          handleClick={this.handleClick}
          loanHistoryData={status === 'Success' ? data : []}
        />
        {showModal && Boolean(Object.keys(loan).length) && (
          <Modal>
            <ModalContent
              handleLoanReaction={this.handleLoanReaction}
              loan={loan}
              handleCloseModal={this.toggleModal}
            />
          </Modal>
        )}
      </>
    );
    return renderAdminTable;
  }
}

const mapStateToProps = ({ loans, loanReaction }) => ({
  loans,
  loanReaction,
});
export default connect(
  mapStateToProps,
  { allLons, approveLoan },
)(AdminTable);
