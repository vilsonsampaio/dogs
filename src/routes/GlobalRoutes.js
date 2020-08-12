import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from '../UserContext';

import ProtectedRoute from './ProtectedRoute';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';

import UserRoutes from './UserRoutes';

const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/*" element={<UserRoutes />} />
          <ProtectedRoute path="my-account/*" element={<MyAccount />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>   
  );
}

export default GlobalRoutes;
