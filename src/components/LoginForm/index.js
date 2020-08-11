import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const fetchAPI = await api.post('jwt-auth/v1/token', {
      username,
      password
    });

    console.log(fetchAPI)

  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />

        <input 
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit">Entrar</button>
      </form>
      
      <Link to="/login/sign-up">Cadastro</Link>
    </section>
  )
}

export default LoginForm;
