import actionCreator from './actionType';
import axios from '../utils/axiosInstance';

const LOAN_HISTORY = actionCreator('LOAN_HISTORY', 'LOANS');

const loanHistory = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.get('/loans');
    dispatch({ type: LOAN_HISTORY.SUCCESS, payload: data });
  } catch ({ response: { data: errorObj } }) {
    dispatch({ type: LOAN_HISTORY.ERROR, payload: errorObj });
  }
};

export default loanHistory;
