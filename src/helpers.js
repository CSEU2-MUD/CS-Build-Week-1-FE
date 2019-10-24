import axios from 'axios';
import { API_HOST } from './consts';

const KEY = 'mud-token';

export const setToken = payload => {
  try {
    const token = JSON.stringify(payload);
    localStorage.setItem(KEY, token);
  } catch {
    return undefined;
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem(KEY);
    if (token === null) {
      return undefined;
    }
    return JSON.parse(token);
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem(KEY);
  window.location.href = '/';
};

export const axiosWithAuth = () => {
  const token = getToken();
  return axios.create({
    headers: {
      Authorization: `Token ${token.key}`,
    },
    baseURL: API_HOST,
  });
};

export const generateMatrix = () => {
  var matrix = [];
  for (var y = 0; y < 25; y++) {
    matrix[y] = [];
    for (var x = 0; x < 25; x++) {
      matrix[y][x] = {
        "id": null,
        "title": null,
        "description": null,
        "n_to": null,
        "s_to": null,
        "e_to": null,
        "w_to": null,
        "x": x,
        "y": y
      };
    }
  }
  return matrix
}