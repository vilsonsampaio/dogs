import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/icons/dogs.svg';

import styles from './styles.module.css';

const Header = () => {
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
        <Link 
          to="/login"
          className={styles.login}
        >
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}

export default Header;
