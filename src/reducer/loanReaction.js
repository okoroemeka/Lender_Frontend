import actionCreator from '../actions/actionType';

const initialState = {};
const APPROVE_LOAN = actionCreator('APPROVE_LOAN', 'LOANS');

const approveLoan = (state = initialState, { type, payload }) => {
  switch (type) {
    case APPROVE_LOAN.SUCCESS:
      return { ...state, ...payload };
    case APPROVE_LOAN.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default approveLoan;
