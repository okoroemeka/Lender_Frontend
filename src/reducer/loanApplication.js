import actionCreator from '../actions/actionType';

const initialState = {};
const LOAN_APPLICATION = actionCreator('LOAN_APPLICATION', 'LOANS');

const loanApplication = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAN_APPLICATION.SUCCESS:
      return { ...state, ...payload };
    case LOAN_APPLICATION.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default loanApplication;
