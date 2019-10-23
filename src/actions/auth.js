import axios from 'axios';
import { API_HOST } from '../consts';
import { setToken } from '../helpers';

export const START = 'START';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const loggedIn = user => {
  return { type: SUCCESS, payload: user };
};

export const logIn = creds => dispatch => {
  dispatch({ type: START });
  return axios
    .post(`${API_HOST}/api/login/`, creds)
    .then(res => {
      setToken(res.data);
      dispatch({ type: SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err.response.data });
    });
};

export const signUp = creds => dispatch => {
  dispatch({ type: START });
  return axios
    .post(`${API_HOST}/api/registration/`, creds)
    .then(res => {
      dispatch({ type: SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err.response.data });
    });
};
