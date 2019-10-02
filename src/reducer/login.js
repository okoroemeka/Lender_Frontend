import actionCreator from '../actions/actionType';

const initialState = {};
const LOGIN = actionCreator('LOGIN', 'AUTH');

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN.SUCCESS:
      return { ...state, ...payload, isLoggedIn: true };
    case LOGIN.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default loginReducer;
