import actionCreator from '../actions/actionType';

const initialState = {};
const PENDING_LOAN = actionCreator('PENDING_LOAN', 'LOANS');
const LOG_OUT = actionCreator('LOGOUT', 'LOGOUT');

const getPendingLoan = (state = initialState, { type, payload }) => {
  switch (type) {
    case PENDING_LOAN.SUCCESS:
      return { ...state, ...payload };
    case PENDING_LOAN.ERROR:
      return { ...state, ...payload };
    case LOG_OUT.SUCCESS:
      return {};
    default:
      return state;
  }
};

export default getPendingLoan;
