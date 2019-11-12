import actionCreator from '../actions/actionType';

const initialState = {};
const PENDING_LOAN = actionCreator('PENDING_LOAN', 'LOANS');

const getPendingLoan = (state = initialState, { type, payload }) => {
  switch (type) {
    case PENDING_LOAN.SUCCESS:
      return { ...state, ...payload };
    case PENDING_LOAN.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default getPendingLoan;
