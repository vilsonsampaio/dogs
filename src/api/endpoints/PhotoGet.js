import React from 'react';

import api from '../../services/api';

const PhotoGet = () => {
  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await api.get('api/photo');

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"/>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default PhotoGet;
