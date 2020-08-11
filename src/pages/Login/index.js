import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import LoginCreate from '../../components/LoginCreate';
import LoginPasswordLost from '../../components/LoginPasswordLost';
import LoginPasswordReset from '../../components/LoginPasswordReset';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="sign-up" element={<LoginCreate />} />
        <Route path="forgot-password" element={<LoginPasswordLost />} />
        <Route path="reset-password" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
