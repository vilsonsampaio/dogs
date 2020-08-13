import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from '../UserContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import Photo from '../pages/Photo';
import Profile from '../pages/Profile';

import ProtectedRoute from './ProtectedRoute';
import UserRoutes from './UserRoutes';
import MyAccountRoutes from './MyAccountRoutes';


const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/*" element={<UserRoutes />} />
          <ProtectedRoute path="my-account/*" element={<MyAccountRoutes />} />
          <Route path="/photo/:id" element={<Photo />} />
          <Route path="/profile/:user" element={<Profile />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>   
  );
}

export default GlobalRoutes;
