import actionCreator from '../actions/actionType';

const ALL_APPLICATION = actionCreator('LOAN_HISTORY', 'LOANS');
const initialState = [];

const getAllLoanApplications = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_APPLICATION.SUCCESS:
      return { ...state, ...payload };
    case ALL_APPLICATION.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default getAllLoanApplications;
