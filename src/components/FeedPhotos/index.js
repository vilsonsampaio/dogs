import React from 'react';

import useFetch from '../../hooks/useFetch';

import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';

import { PHOTOS_GET } from '../../services/api';

import styles from './styles.module.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });

      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, [request])

  if (error) return <Error error={error}/>
  
  if (loading) return <Loading />
  
  if (data) return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotosItem 
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto} 
          />
        ))}
      </ul>
    );
  
  else return null;
}

export default FeedPhotos;
