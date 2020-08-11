import React, { useState } from 'react';

import api from '../../services/api';

const UserPost = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const fetch = await api.post('api/user', {
      username,
      email,
      password
    });

    console.log(fetch);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input 
        type="text"
        placeholder="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default UserPost;
