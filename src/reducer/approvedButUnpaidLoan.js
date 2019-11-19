import actionCreator from '../actions/actionType';

const initialState = {};
const APPROVE_AND_UNPAID_LOAN = actionCreator(
  'APPROVE_AND_UNPAID_LOAN',
  'LOANS'
);

const approvedButUnpaidLoan = (state = initialState, { type, payload }) => {
  switch (type) {
    case APPROVE_AND_UNPAID_LOAN.SUCCESS:
      return { ...state, ...payload };
    case APPROVE_AND_UNPAID_LOAN.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default approvedButUnpaidLoan;
