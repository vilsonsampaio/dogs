import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../UserContext';

import { ReactComponent as FeedIcon } from '../../assets/images/icons/feed.svg';
import { ReactComponent as StatsIcon } from '../../assets/images/icons/estatisticas.svg';
import { ReactComponent as PostIcon } from '../../assets/images/icons/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/icons/sair.svg';

import styles from './styles.module.css';

const MyAccountHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);

  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
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
  )
}

export default MyAccountHeaderNav
