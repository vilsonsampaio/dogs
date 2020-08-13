import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { UserContext } from '../UserContext';

import Feed from '../components/Feed';
import MyAccountHeader from '../components/MyAccount/MyAccountHeader';

import MyAccountPost from '../pages/MyAccount/MyAccountPost';
import MyAccountStats from '../pages/MyAccount/MyAccountStats';
import NotFound from '../pages/NotFound';


const MyAccountRoutes = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <MyAccountHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<MyAccountPost />} />
        <Route path="stats" element={<MyAccountStats />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default MyAccountRoutes;
