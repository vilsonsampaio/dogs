import React from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import Input from '../Input';
import Button from '../Button';

import { TOKEN_POST, USER_GET } from '../../services/api';
import { useEffect } from 'react';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('DOGS_token');
    
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    
    const response = await fetch (url, options);
    const json = await response.json();

    console.log(json);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      
      console.log(json);

      window.localStorage.setItem('DOGS_token', json.token);
      getUser(json.token);
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
