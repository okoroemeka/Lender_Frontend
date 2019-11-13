import actionCreator from '../actions/actionType';

const initialState = {};
const LOAN_APPLICATION = actionCreator('LOAN_APPLICATION', 'LOANS');
const LOG_OUT = actionCreator('LOGOUT', 'LOGOUT');

const loanApplication = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAN_APPLICATION.SUCCESS:
      return { ...state, ...payload };
    case LOAN_APPLICATION.ERROR:
      return { ...state, ...payload };
    case LOG_OUT.SUCCESS:
      return {};
    default:
      return state;
  }
};

export default loanApplication;
