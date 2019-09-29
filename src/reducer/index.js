import { combineReducers } from 'redux';
import signupReducer from './authReducer';

export default combineReducers({
  auth: signupReducer,
});
