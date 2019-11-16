import actionCreator from '../actions/actionType';

const initialState = {};
const USER = actionCreator('USER', 'USER');

const getUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER.SUCCESS:
      return { ...state, ...payload };
    case USER.ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default getUser;
