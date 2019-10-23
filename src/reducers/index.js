import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  authReducer,
  gameReducer,
});

export default rootReducer;
