import React from 'react';

import useFetch from '../../../hooks/useFetch';

import Head from '../../../components/Helper/Head';
import Loading from '../../../components/Helper/Loading';
import Error from '../../../components/Helper/Error';

import { STATS_GET } from '../../../services/api';

const MyAccountStatsGraphs = React.lazy(
  () => import('../../../components/MyAccount/MyAccountStatsGraphs')
);


const MyAccountStatics = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    const token = window.localStorage.getItem('DOGS_token');

    async function getData() {
      const { url, options } = STATS_GET(token);
      
      await request(url, options);
    }

    if (token) {
      getData();
    }
  }, [request]);

  if (loading) return <Loading />

  if (error) return <Error error={error} />

  if (data) 
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />

        <MyAccountStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null; 
}

export default MyAccountStatics;
