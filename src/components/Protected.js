import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../helpers';

export const Protected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUserKey = getToken();
      if (!currentUserKey) {
        return <Redirect to="/" />;
      }

      return <Component {...props} />;
    }}
  />
);

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUserKey = getToken();
      if (currentUserKey) {
        return <Redirect to="/game" />;
      }

      return <Component {...props} />;
    }}
  />
);
