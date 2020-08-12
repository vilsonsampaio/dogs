import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from '../../UserContext';

import LoginForm from '../../components/LoginForm';
import LoginCreate from '../../components/LoginCreate';
import LoginPasswordLost from '../../components/LoginPasswordLost';
import LoginPasswordReset from '../../components/LoginPasswordReset';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/my-account" />
  }
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<LoginForm />} />
        <Route path="sign-up" element={<LoginCreate />} />
        <Route path="forgot-password" element={<LoginPasswordLost />} />
        <Route path="reset-password" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
