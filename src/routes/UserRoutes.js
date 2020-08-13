import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserContext } from '../UserContext';

import UserSignIn from '../pages/User/UserSignIn';
import UserSignUp from '../pages/User/UserSignUp';
import UserPasswordForgot from '../pages/User/UserPasswordForgot';
import UserPasswordReset from '../pages/User/UserPasswordReset';
import NotFound from '../pages/NotFound';

import styles from './UserRoutes.module.css';


const UserRoutes = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/my-account" />
  }
  
  return (
    <section className={styles.userRoutes}>
      <div className={styles.forms}>
        <Routes>
          <Route path="sign-in" element={<UserSignIn />} />
          <Route path="sign-up" element={<UserSignUp />} />
          <Route path="forgot-password" element={<UserPasswordForgot />} />
          <Route path="reset-password" element={<UserPasswordReset />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default UserRoutes;
