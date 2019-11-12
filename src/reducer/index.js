import { combineReducers } from 'redux';
import signupReducer from './signup';
import loginReducer from './login';
import loanHistory from './loans';
import loanApplication from './loanApplication';
import PendingLoan from './PendingLoan';

export default combineReducers({
  auth: signupReducer,
  authLogin: loginReducer,
  loans: loanHistory,
  loanApplicationData: loanApplication,
  pendingLoan: PendingLoan,
});
