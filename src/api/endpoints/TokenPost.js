import React, { useState } from 'react';

import api from '../../services/api';

const TokenPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await api.post('jwt-auth/v1/token', {
      username,
      password
    });

    setToken(data.token);
    console.log(data);
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
      <button type="submit">Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  );
}

export default TokenPost;
