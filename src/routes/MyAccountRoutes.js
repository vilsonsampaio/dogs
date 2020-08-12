import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyAccountHeader from '../components/MyAccountHeader';
import Feed from '../components/Feed';
import MyAccountPost from '../pages/MyAccountPost';
import MyAccountStats from '../pages/MyAccountStats';



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