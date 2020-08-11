import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';

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
        <Input 
          label="Usuário" 
          type="text" 
          name="username"
        />
        
        <Input 
          label="Senha"
          type="password" 
          name="password"
        />

        <Button>
          Entrar  
        </Button>        
      </form>
      
      <Link to="/login/sign-up">Cadastro</Link>
    </section>
  )
}

export default LoginForm;
