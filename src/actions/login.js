import actionCreator from './actionType';
import axios from '../utils/axiosInstance';
import tokenHelper from '../utils/auth';

const LOG_IN = actionCreator('LOGIN', 'AUTH');

const login = (userData) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.post('/auth/signin', userData);
    const { token } = data;
    tokenHelper.setToken(token);
    dispatch({ type: LOG_IN.SUCCESS, payload: data });
    // dispatch({ type: LOG_IN.STATUS, payload: status });
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: LOG_IN.ERROR, payload: errorObj });
  }
};

export default login;
