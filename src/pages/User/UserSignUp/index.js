import React from 'react';

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

import { UserContext } from '../../../UserContext';

import Head from '../../../components/Helper/Head';
import Error from '../../../components/Helper/Error';

import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';

import { USER_POST } from '../../../services/api';

const UserSignUp = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Cadastro" />
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input 
          label="Usuário" 
          type="text" 
          name="username" 
          {...username} 
        />

        <Input 
          label="E-mail" 
          type="email" 
          name="email" 
          {...email} 
        />

        <Input 
          label="Senha" 
          type="password" 
          name="password" 
          {...password} 
        />
        
        { loading 
          ? <Button disabled>Cadastrando...</Button>
          : <Button>Cadastrar</Button>
        }

        <Error error={error}/>
      </form>
    </section>
  );
}

export default UserSignUp;
