import React, { useState } from 'react';

import api from '../../services/api';

const PhotoPost = () => {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img', image);
    formData.append('nome', name);
    formData.append('peso', weight);
    formData.append('idade', age);

    const fetch = await api.post('api/photo', formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    console.log(fetch);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Token" 
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text"
        placeholder="weight" 
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input 
        type="text"
        placeholder="age" 
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input 
        type="file"
        placeholder="img" 
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default PhotoPost;
