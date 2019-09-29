import actionCreator from './actionType';
import axios from '../utils/axiosInstance';
import tokenHelper from '../utils/auth';

const SIGN_UP = actionCreator('SIGN_UP', 'AUTH');

const signup = (userData) => async (dispatch) => {
  try {
    const {
      data: { data, status },
    } = await axios.post('/auth/signup', userData);
    const { token } = data;
    tokenHelper.setToken(token);
    dispatch({ type: SIGN_UP.SUCCESS, payload: data });
    dispatch({ type: SIGN_UP.STATUS, payload: status });
  } catch ({ response: { data: errorObj } }) {
    console.log('error', errorObj);
    dispatch({ type: SIGN_UP.ERROR, payload: errorObj });
  }
};

export default signup;
