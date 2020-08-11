import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

import Input from '../Input';
import Button from '../Button';

import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
