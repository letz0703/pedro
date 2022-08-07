import React from 'react';
import {Link} from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.item} to='/'>
        Home
      </Link>
      <Link className={styles.item} to='/jap'>
        Japan
      </Link>
      <Link className={styles.item} to='/can'>
        공동구매
      </Link>
    </div>
  );
};

export default Nav;
