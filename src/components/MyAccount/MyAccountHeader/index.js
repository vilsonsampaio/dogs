import React from 'react';
import { useLocation } from 'react-router-dom';

import MyAccountHeaderNav from '../MyAccountHeaderNav';

import styles from './styles.module.css';

const MyAccountHeader = () => {
  const [title, setTitle] = React.useState('');
  
  const location = useLocation();

  React.useEffect(() => {
    const pathName = location.pathname.split('/')[2];

    switch (pathName) {
      case 'stats':
        setTitle('Estatísticas');
        break;
      case 'post':
        setTitle('Postar foto');
        break;
      default: 
        setTitle('Minha conta');
    }

  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <MyAccountHeaderNav />
    </header>
  );
}

export default MyAccountHeader;
