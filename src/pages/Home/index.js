import React from 'react';

import Head from '../../components/Helper/Head';

import Feed from '../../components/Feed';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head 
        title="Home" 
        description="Home do site Dogs, com o feed de fotos." 
      />

      <Feed />
    </section>
  );
}

export default Home;
