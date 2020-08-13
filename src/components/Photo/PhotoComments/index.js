import React from 'react';

import { UserContext } from '../../../UserContext';

import PhotoCommentsForm from '../PhotoCommentsForm';

import styles from './styles.module.css';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setComments(props.comments);
  }, [props.comments])

  return (
    <>
      <ul className={styles.comments}>
        {comments.map(comment => (
          <li key={comment._ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;
