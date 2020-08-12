import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../UserContext';

import useForm from '../../hooks/useForm';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';

import styles from './styles.module.css';
import stylesButton from '../../components/Button/styles.module.css';


const UserSignIn = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    } 
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
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
        {loading 
          ? <Button disabled>Carregando...</Button>
          : <Button>Entrar</Button>  
        }
        <Error error={error}/>
      </form>
      
      <Link className={styles.forgotPassword} to="/user/forgot-password">Esqueci minha senha</Link>

      <div className={styles.signUp}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>

        <Link className={stylesButton.button} to="/user/sign-up">Cadastro</Link>
      </div>

    </section>
  )
}

export default UserSignIn;
