import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { UserContext } from '../../UserContext';

import useMedia from '../../hooks/useMedia';

import { ReactComponent as FeedIcon } from '../../assets/images/icons/feed.svg';
import { ReactComponent as StatsIcon } from '../../assets/images/icons/estatisticas.svg';
import { ReactComponent as PostIcon } from '../../assets/images/icons/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/icons/sair.svg';

import styles from './styles.module.css';

const MyAccountHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');

  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button 
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav 
        className={`
        ${mobile 
          ? styles.navMobile 
          : styles.nav
        } 
        ${mobileMenu && styles.navMobileActive}
        `}
        >
        <NavLink to="/my-account" end activeClassName={styles.active}>
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </NavLink>

        <NavLink to="/my-account/stats" activeClassName={styles.active}>
          <StatsIcon />
          {mobile && "Estatísticas"}
        </NavLink>

        <NavLink to="/my-account/post" activeClassName={styles.active}>
          <PostIcon />
          {mobile && "Adicionar Foto"}
        </NavLink>

        <button onClick={userLogout}>
          <LogoutIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  )
}

export default MyAccountHeaderNav
