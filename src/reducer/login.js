import actionCreator from '../actions/actionType';

const initialState = {};
const LOGIN = actionCreator('LOGIN', 'AUTH');
const LOG_OUT = actionCreator('LOGOUT', 'LOGOUT');

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN.SUCCESS:
      return { ...state, ...payload, isLoggedIn: true };
    case LOGIN.ERROR:
      return { ...state, ...payload };
    case LOG_OUT.SUCCESS:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default loginReducer;
