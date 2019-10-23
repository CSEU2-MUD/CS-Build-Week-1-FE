export const setToken = payload => {
  try {
    const token = JSON.stringify(payload);
    localStorage.setItem('mud-token', token);
  } catch {
    return undefined;
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem('mud-token');
    if (token === null) {
      return undefined;
    }
    return JSON.parse(token);
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem('mud-token');
  window.location.href = '/';
};
