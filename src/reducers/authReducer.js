import { FAILURE, START, SUCCESS } from '../actions/auth';

const initialState = {
  loading: false,
  loggedIn: false,
  error: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return { ...initialState };
    case SUCCESS:
      return { ...initialState, loggedIn: true };
    case FAILURE:
      return { ...initialState, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
