import React from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';

import Error from '../../../components/Helper/Error';

import Input from '../../../components/Form/Input';
import Button from '../../../components/Form/Button';

import { PASSWORD_RESET } from '../../../services/api';

const UserPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm();

  const { request, loading, error } = useFetch();

  const navigate = useNavigate();


  React.useEffect(() => {
    const { search } = window.location;

    const params = new URLSearchParams(search);

    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({ 
        login, 
        key,
        password: password.value,
      });
  
      const { response } = await request(url, options);
      
      if (response.ok) navigate('/user/sign-in');
    }
  }

  return (
    <div>
      <h1 className="title">Resete a senha</h1>

      <form onSubmit={handleSubmit}>
        <Input 
          label="Nova senha"   
          type="password" 
          name="password"
          {...password} 
        />

        {loading 
          ? <Button disabled>Resetando...</Button>
          : <Button>Resetar senha</Button>
        }
      </form>

      <Error error={error} />
    </div>
  );
}

export default UserPasswordReset;
