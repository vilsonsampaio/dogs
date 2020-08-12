import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/icons/dogs.svg';

import styles from './styles.module.css';

import { UserContext } from '../../UserContext';

const Header = () => {
  const { userLogout, data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link 
          to="/"
          className={styles.logo} 
          aria-label="Dogs - Home"
        >
          <Logo />
        </Link>
        {data 
          ? (
            <Link to="/my-account" className={styles.login}>
              {data.nome}
              <button onClick={userLogout}>Sair</button>
            </Link>
          )
          : (
            <Link to="/user/sign-in" className={styles.login}>
              Login / Criar
            </Link>
          )
        }
      </nav>
    </header>
  );
}

export default Header;
