import actionCreator from './actionType';
import axios from '../utils/axiosInstance';

const LOAN_HISTORY = actionCreator('LOAN_HISTORY', 'LOANS');
const LOAN_APPLICATION = actionCreator('LOAN_APPLICATION', 'LOANS');
const PENDING_LOAN = actionCreator('PENDING_LOAN', 'LOANS');

const loanHistory = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/loans');
    dispatch({ type: LOAN_HISTORY.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: LOAN_HISTORY.ERROR, payload: errorObj });
    return errorObj;
  }
};

const loanApplicationAction = (loanData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/loans', loanData);
    dispatch({ type: LOAN_APPLICATION.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: LOAN_APPLICATION.ERROR, payload: errorObj });
    return errorObj;
  }
};
const getPendingLoan = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/pending-loan');
    dispatch({ type: PENDING_LOAN.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: PENDING_LOAN.ERROR, payload: errorObj });
    return errorObj;
  }
};

const ALL_APPLICATION = actionCreator('LOAN_HISTORY', 'LOANS');

const getAllLoan = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/loans');
    dispatch({ type: ALL_APPLICATION.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: ALL_APPLICATION.ERROR, payload: errorObj });
    return errorObj;
  }
};
const APPROVE_LOAN = actionCreator('APPROVE_LOAN', 'LOANS');
const approveLoan = (loanId, status) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/loans/${loanId}`, status);
    dispatch({ type: APPROVE_LOAN.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: APPROVE_LOAN.ERROR, payload: errorObj });
    return errorObj;
  }
};
const APPROVE_AND_UNPAID_LOAN = actionCreator(
  'APPROVE_AND_UNPAID_LOAN',
  'LOANS',
);
const approvedButUnpaidLoan = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/approved&unpaid');
    dispatch({ type: APPROVE_AND_UNPAID_LOAN.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: APPROVE_AND_UNPAID_LOAN.ERROR, payload: errorObj });
    return errorObj;
  }
};

const REPAY_LOAN = actionCreator('REPAY_LOAN', 'LOANS');
const repayLoan = (loanDetails, loanId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/loans/${loanId}/repayment`,
      loanDetails,
    );
    dispatch({ type: REPAY_LOAN.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: REPAY_LOAN.ERROR, payload: errorObj });
    return errorObj;
  }
};

export {
  loanHistory,
  loanApplicationAction,
  getPendingLoan,
  getAllLoan,
  approveLoan,
  approvedButUnpaidLoan,
  repayLoan,
};
