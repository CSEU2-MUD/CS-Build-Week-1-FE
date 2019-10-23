import { axiosWithAuth } from '../helpers';

export const START_COMMAND = 'START_COMMAND';
export const INITIALIZE = 'INITIALIZE';
export const INITIALIZE_FAILURE = 'INITIALIZE_FAILURE';

export const MOVE = 'MOVE';
export const MOVE_FAILURE = 'MOVE_FAILURE';

export const initialize = () => dispatch => {
  dispatch({ type: START_COMMAND });
  return axiosWithAuth()
    .get('/api/adv/init/')
    .then(res => {
      dispatch({ type: INITIALIZE, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: INITIALIZE_FAILURE, payload: err.response.data });
    });
};

export const move = direction => dispatch => {
  dispatch({ type: START_COMMAND });
  return axiosWithAuth()
    .post('/api/adv/move/', { direction })
    .then(res => {
      dispatch({ type: MOVE, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: MOVE_FAILURE, payload: err.response.data });
    });
};
