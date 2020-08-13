import React from 'react';

import useFetch from '../../../hooks/useFetch';

import Error from '../../Helper/Error';

import { ReactComponent as SendCommentIcon } from '../../../assets/images/icons/enviar.svg';

import { COMMENT_POST } from '../../../services/api';

import styles from './styles.module.css';


const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  
  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    
    const token = window.localStorage.getItem('DOGS_token');

    if (token) {
      const { url, options } = COMMENT_POST(id, { comment }, token);

      const { response, json } = await request(url, options);

      if (response.ok) {
        setComment('');

        setComments((comments) => [...comments, json]);
      }
    }

  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea 
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente...."
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
      />

      <button className={styles.button}>
        <SendCommentIcon />
      </button>

      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;