import { combineReducers } from 'redux';
import signupReducer from './signup';
import loginReducer from './login';

export default combineReducers({
  auth: signupReducer,
  authLogin: loginReducer,
});
