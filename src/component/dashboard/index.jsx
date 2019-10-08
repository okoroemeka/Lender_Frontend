/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../reusables/table';
import loans from '../../actions/loans';
import './dashboard.scss';

class Dashboard extends Component {
  state = {
    loanData: [],
  };

  componentDidMount = () => {
    const { loans: getLoanHistory } = this.props;
    return getLoanHistory();
  };

  render() {
    const { loanHistory } = this.props;
    return (
      <div className="dashboard">
        <div className="dashboard_button">
          <button type="button">Apply</button>
          <button type="button">Pending request</button>
          <button type="button">History</button>
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
                loanHistory.status === 'Success' ? loanHistory.data : []
              }
            />
            <div className="pagination_component">pagination</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ loans: loanHistory }) => ({
  loanHistory,
});
export default connect(
  mapStateToProps,
  { loans },
)(Dashboard);
