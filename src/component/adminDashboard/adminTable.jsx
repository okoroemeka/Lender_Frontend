/* eslint-disable no-underscore-dangle */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../reusables/table';
import { loanHistory } from '../../actions/loans';
import Modal from '../reusables/modal';

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

  handleClick = (id, data) => {
    const loan = data.find((element) => element._id === id);
    this.setState((prevState) => ({ ...prevState, loan }));
    return this.toggleModal();
  };

  /**
   * Add the modal here, create the onclick handler here too.
   * the onclick event handler should take in the id of the loan clicked on
   * then fetch then retrieve the loan from the array of all loans passed  in as prop
   * to the table.
   * the retrieved loan data should then be passed in as prop to the modal
   * the modal should have an accept and reject button.
   */
  render() {
    const {
      loans: { status, data },
    } = this.props;
    const { showModal } = this.state;
    const renderAdminTable = (
      <>
        <div className="loan__applications">Loan Applications</div>
        <Table
          handleClick={this.handleClick}
          loanHistoryData={status === 'Success' ? data : []}
        />
        {showModal && (
          <Modal>
            <div>I am a modal</div>
          </Modal>
        )}
      </>
    );
    return renderAdminTable;
  }
}

const mapStateToProps = ({ loans }) => ({
  loans,
});
export default connect(
  mapStateToProps,
  { allLons },
)(AdminTable);
// export default AdminTable;
