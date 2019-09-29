import actionCreator from '../actions/actionType';

const initialState = {};
const SIGN_UP = actionCreator('SIGN_UP', 'AUTH');

const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP.SUCCESS:
      return { ...state, ...payload };
    case SIGN_UP.STATUS:
      return { ...state, status: payload };
    case SIGN_UP.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default signupReducer;
