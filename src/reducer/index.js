import { combineReducers } from 'redux';
import signupReducer from './signup';
import loginReducer from './login';
import loanHistory from './loans';
import loanApplication from './loanApplication';
import PendingLoan from './PendingLoan';
import user from './user';
import allLoanApplication from './allLoanApplication';
import loanReaction from './loanReaction';
import approvedButUnpaidLoan from './approvedButUnpaidLoan';

export default combineReducers({
  auth: signupReducer,
  authLogin: loginReducer,
  loans: loanHistory,
  loanApplicationData: loanApplication,
  pendingLoan: PendingLoan,
  user,
  allLoanApplication,
  loanReaction,
  approvedButUnpaidLoan,
});
