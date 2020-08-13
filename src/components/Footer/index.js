import React from 'react';

import { ReactComponent as LogoFooterIcon } from '../../assets/images/icons/dogs-footer.svg';

import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LogoFooterIcon />
      
      <p>Dogs - Alguns direitos reservados.</p>
    </footer>
  );
}

export default Footer;
