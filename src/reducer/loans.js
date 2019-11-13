import actionCreator from '../actions/actionType';

const initialState = {};
const LOAN_HISTORY = actionCreator('LOAN_HISTORY', 'LOANS');
const LOG_OUT = actionCreator('LOGOUT', 'LOGOUT');

const loanHistory = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAN_HISTORY.SUCCESS:
      return { ...state, ...payload };
    case LOAN_HISTORY.ERROR:
      return { ...state, ...payload };
    case LOG_OUT.SUCCESS:
      return {};
    default:
      return state;
  }
};

export default loanHistory;
