import React from 'react';

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

import Head from '../../../components/Helper/Head';
import Error from '../../../components/Helper/Error';

import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';

import { PASSWORD_LOST } from '../../../services/api';

const UserPasswordForgot = () => {
  const login = useForm();

  const { request, data, loading, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      const { href } = window.location;

      const { url, options } = PASSWORD_LOST({ 
        login: login.value,
        url: href.replace('forgot', 'reset'), 
      });

      const { json } = await request(url, options);
      console.log(json)
    }


  }

  return (
    <section className="animeLeft">
      <Head title="Esqueci a senha" />

      <h1 className="title">Esqueceu a senha?</h1>

      {data 
        ? (
          <p style={{ color: '#4C1' }}>
            {data}
          </p>
        )
        : (
          <form onSubmit={handleSubmit}>
            <Input 
              label="E-mail / Usuário"
              type="text" 
              name="login"
              {...login}
            />
            {loading
              ? <Button disabled>Enviando...</Button>
              : <Button>Enviar e-mail</Button>
            }
          </form>
        )
      }

      <Error error={error} />
    </section>
  );
}

export default UserPasswordForgot;
