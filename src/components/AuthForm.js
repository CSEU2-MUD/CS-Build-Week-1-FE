import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp, logIn } from '../actions/auth';
import {
  FormContainer,
  ErrorMessage,
  AuthFormFooter,
  Button,
} from './styling/auth-form.style';

const AuthForm = ({ loading, error, logIn, signUp, history }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userInfo, updateUserInfo] = useState({
    username: '',
    password1: '',
    password2: '',
  });

  const onChangeHandler = ({ target }) => {
    updateUserInfo(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (isSignUp) {
      if (userInfo.username && userInfo.password1 && userInfo.password2) {
        signUp({ ...userInfo }).then(success => {
          if (success) {
            setIsSignUp(false);
            updateUserInfo(prev => ({ ...prev, password1: '' }));
          }
        });
      }
    } else {
      if (userInfo.username && userInfo.password1) {
        logIn({
          username: userInfo.username,
          password: userInfo.password1,
        }).then(success => {
          if (success) history.push('/game');
        });
      }
    }
  };

  return (
    <React.Fragment>
      <FormContainer>
        <form onSubmit={onSubmitHandler}>
          <h2>{isSignUp ? 'Create' : 'Login'} your Account</h2>

          {Object.values(error).map((errorMessage, index) => (
            <ErrorMessage key={`${index}-${error}`} className="error-message">
              {errorMessage[0]}
            </ErrorMessage>
          ))}

          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={onChangeHandler}
            value={userInfo.username}
          />
          <input
            type="password"
            name="password1"
            placeholder="password"
            onChange={onChangeHandler}
            value={userInfo.password1}
          />
          {isSignUp && (
            <input
              type="password"
              name="password2"
              placeholder="confirm password"
              onChange={onChangeHandler}
              value={userInfo.password2}
            />
          )}
          <Button
            type="submit"
            className={`${loading && 'loading'}`}
            disabled={loading}
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </Button>
        </form>
      </FormContainer>
      <AuthFormFooter>
        {isSignUp ? (
          <button onClick={() => setIsSignUp(false)}>
            Already have an Account, <span>Login</span>
          </button>
        ) : (
          <button onClick={() => setIsSignUp(true)}>
            Don't have an account, <span>Create Account</span>
          </button>
        )}
      </AuthFormFooter>
    </React.Fragment>
  );
};

const mapStateToProps = ({ authReducer }) => {
  return {
    loading: authReducer.loading,
    error: authReducer.error,
  };
};

const AuthFormWithRouter = withRouter(AuthForm);

export default connect(
  mapStateToProps,
  { logIn, signUp }
)(AuthFormWithRouter);
