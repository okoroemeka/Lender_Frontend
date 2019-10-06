import actionCreator from './actionType';
import axios from '../utils/axiosInstance';
import tokenHelper from '../utils/auth';

const LOG_IN = actionCreator('LOGIN', 'AUTH');
const LOG_OUT = actionCreator('LOGOUT', 'LOGOUT');

const login = (userData) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.post('/auth/signin', userData);
    const { token } = data;
    tokenHelper.setToken(token);
    dispatch({ type: LOG_IN.SUCCESS, payload: data });
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: LOG_IN.ERROR, payload: errorObj });
  }
};

export const logout = () => (dispatch) => {
  tokenHelper.removeToken();
  dispatch({ type: LOG_OUT.SUCCESS });
};

export default login;
