import actionCreator from './actionType';
import axios from '../utils/axiosInstance';

const USER = actionCreator('USER', 'USER');

const getUser = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.get('/auth/user');
    dispatch({ type: USER.SUCCESS, payload: data });
    return data;
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: USER.ERROR, payload: errorObj });
  }
};

export default { getUser };
