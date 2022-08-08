import React from 'react';
import {Link} from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <div className={styles.container}>
      <img src='./logo.svg' alt='Logo' className={styles.logo} />
      <Link className={styles.item} to='/'>
        canmart
      </Link>
      <Link className={styles.item} to='/jap'>
        Japan
      </Link>
      <Link className={styles.item} to='/together'>
        together
      </Link>
    </div>
  );
};

export default Nav;
