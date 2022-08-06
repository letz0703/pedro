import React from 'react';
import {Link} from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to='/'>Nav</Link>
      <Link to='/jap'>Japane</Link>
      <Link to='/can'>공동구매</Link>
    </div>
  );
};

export default Nav;
