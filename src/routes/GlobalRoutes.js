import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from '../UserContext';

import UserRoutes from './UserRoutes';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';


const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/*" element={<UserRoutes />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>   
  );
}

export default GlobalRoutes;
