import React from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import Input from '../Input';
import Button from '../Button';

import api from '../../services/api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();


  async function handleSubmit(e) {
    e.preventDefault();
    
    if (username.validate() && password.validate()) {
      const fetchAPI = await api.post('jwt-auth/v1/token', {});

      console.log(fetchAPI)
    } 
  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input 
          label="Usuário" 
          type="text" 
          name="username"
          {...username}
        />
        
        <Input 
          label="Senha"
          type="password" 
          name="password"
          {...password}
        />

        <Button>Entrar</Button>        
      </form>
      
      <Link to="/login/sign-up">Cadastro</Link>
    </section>
  )
}

export default LoginForm;
