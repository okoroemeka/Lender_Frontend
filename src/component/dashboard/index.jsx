/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Table from '../reusables/table';
import { loanHistory } from '../../actions/loans';
import Modal from '../reusables/modal';
import Button from '../reusables/Button';
import ApplyForLoan from '../loan/ApplyForLoan';
import './dashboard.scss';

class Dashboard extends Component {
  state = {
    showModal: false,
  };

  componentDidMount = () => {
    const { loanHistory: getLoanHistory } = this.props;
    return getLoanHistory();
  };

  toggleModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  render() {
    const { loanHistoryData } = this.props;
    const { showModal } = this.state;
    return (
      <div className="dashboard">
        <div className="dashboard_button">
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
        </div>
        <div className="dashboard_main">
          <div className="pending_loans">
            <span className="pending_loans_table_title">Pending request</span>
            <Table />
            <div className="pagination_component">pagination</div>
          </div>
          <div className="approved_loans">
            <span className="approved_loans_table_title">Loan history</span>
            <Table
              loanHistoryData={
                loanHistoryData.status === 'Success' ? loanHistoryData.data : []
              }
            />
            <div className="pagination_component">pagination</div>
          </div>
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
}) => ({
  loanHistoryData,
  loanApplicationData: loanApplicationData || {},
});
export default connect(
  mapStateToProps,
  { loanHistory },
)(Dashboard);
