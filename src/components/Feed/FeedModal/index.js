import React from 'react';

import useFetch from '../../../hooks/useFetch';

import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';

import PhotoContent from '../../Photo/PhotoContent';

import { PHOTO_GET } from '../../../services/api';

import styles from './styles.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch(); 

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
