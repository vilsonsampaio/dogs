import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import Head from '../../components/Helper/Head';
import Error from '../../components/Helper/Error';
import Loading from '../../components/Helper/Loading';

import PhotoContent from '../../components/Photo/PhotoContent';

import { PHOTO_GET } from '../../services/api';


const Photo = () => {
  const { id } = useParams();

  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);

    request(url, options);
  }, [id, request]);


  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />

        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
}

export default Photo;
