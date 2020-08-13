import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './services/api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);

    window.localStorage.removeItem('DOGS_token');

    navigate('/user/sign-in');
  }, [navigate]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const response = await fetch (url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
  
      const tokenResponse = await fetch (url, options);
      const { token } = await tokenResponse.json();
  
      if (!tokenResponse.ok) throw new Error(`Error: Usuário ou senha inválido(s)`);
  
      window.localStorage.setItem('DOGS_token', token);
      await getUser(token);
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('DOGS_token');

      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
  
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');

          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  },[userLogout]);

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
      {children}   
    </UserContext.Provider>
  );
}


