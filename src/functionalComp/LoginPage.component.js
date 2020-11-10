import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from './ProvideAuth.component';
import React, { useState } from 'react';
import { validateForm } from '../constants/app.constant';

export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  let state = {
    errors: {
      userName: '',
      password: ''
    }
  }
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'userName':
        {
          state.errors.userName = value.length < 5 ? 'User Name must be at least 5 characters long!' : '';
          setUserName(value);
          setUserNameError(state.errors.userName);
          break;
        }
      case 'password':
        {
          state.errors.password = value.length < 8 ? 'Password must be at least 5 characters long!' : '';
          setPassword(value);
          setPasswordError(state.errors.password);
          break;
        }
      default: break;
    }
  }

  const login = (event) => {
    event.preventDefault();
    let { from } = location.state || { from: { pathname: "/home" } };
    if (validateForm(state.errors)) {
      auth.signin(() => {
        history.replace(from);
      });
    }
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2> Account Login</h2>
        <form onSubmit={login}>
          <div className="userName">
            <label to="userName"></label>
            <input name="userName" type="text" onChange={handleChange} value={userName}></input>
            {userNameError.length > 0 &&
              <span className='error'>{userNameError}</span>}
          </div>
          <div className="password">
            <label to="password"></label>
            <input name="password" type="password" onChange={handleChange} value={password}></input>
            {passwordError.length > 0 &&
              <span className='error'>{passwordError}</span>}
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  )
}