import actionCreator from '../actions/actionType';

const initialState = {};
const REPAY_LOAN = actionCreator('REPAY_LOAN', 'LOANS');

const loanRepayment = (state = initialState, { type, payload }) => {
  switch (type) {
    case REPAY_LOAN.SUCCESS:
      return { ...state, ...payload };
    case REPAY_LOAN.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default loanRepayment;
