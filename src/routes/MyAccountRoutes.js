import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyAccountHeader from '../components/MyAccount/MyAccountHeader';

import Feed from '../pages/Feed';
import MyAccountPost from '../pages/MyAccount/MyAccountPost';
import MyAccountStats from '../pages/MyAccount/MyAccountStats';


const MyAccountRoutes = () => {
  return (
    <section className="container">
      <MyAccountHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<MyAccountPost />} />
        <Route path="stats" element={<MyAccountStats />} />
      </Routes>
    </section>
  );
}

export default MyAccountRoutes;
