import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from '../UserContext';

import UserSignIn from '../pages/UserSignIn';
import UserSignUp from '../pages/UserSignUp';
import UserPasswordForgot from '../pages/UserPasswordForgot';
import UserPasswordReset from '../pages/UserPasswordReset';

const UserRoutes = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/my-account" />
  }
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<UserSignIn />} />
        <Route path="sign-up" element={<UserSignUp />} />
        <Route path="forgot-password" element={<UserPasswordForgot />} />
        <Route path="reset-password" element={<UserPasswordReset />} />
      </Routes>
    </div>
  );
}

export default UserRoutes;
