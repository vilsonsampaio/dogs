import React from 'react';
import { useParams } from 'react-router-dom';

import Head from '../../components/Helper/Head';

import Feed from '../../components/Feed';

const Profile = () => {
  const { user } = useParams();
  return (
    <section className="container mainContainer">
      <Head title={user} />

      <h1 className="title">{user}</h1>

      <Feed user={user} />
    </section>
  );
}

export default Profile;
