import { axiosWithAuth } from '../helpers';

export const START_COMMAND = 'START_COMMAND';

export const INITIALIZE = 'INITIALIZE';
export const INITIALIZE_FAILURE = 'INITIALIZE_FAILURE';

export const MOVE = 'MOVE';
export const MOVE_FAILURE = 'MOVE_FAILURE';

export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_FAILURE = 'GET_ROOMS_FAILURE';

export const SAY_SOMETHING = 'SAY_SOMETHING';
export const SAY_SOMETHING_FAILURE = 'SAY_SOMETHING_FAILURE';

export const initialize = () => dispatch => {
  dispatch({ type: START_COMMAND });
  return axiosWithAuth()
    .get('/api/adv/init/')
    .then(res => {
      dispatch({ type: INITIALIZE, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: INITIALIZE_FAILURE, payload: 'error starting up game' });
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

export const getRooms = () => dispatch => {
  return axiosWithAuth()
    .get('/api/adv/rooms/')
    .then(res => {
      dispatch({ type: GET_ROOMS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ROOMS_FAILURE,
        payload: 'error loading game rooms',
      });
    });
};

export const say = message => dispatch => {
  return axiosWithAuth()
    .post('/api/adv/say/', { message })
    .then(res => {
      dispatch({ type: SAY_SOMETHING });
    })
    .catch(err => {
      dispatch({
        type: SAY_SOMETHING_FAILURE,
      });
    });
};
