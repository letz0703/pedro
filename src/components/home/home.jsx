import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <input type='checkbox' id='menuicon' />
      <label htmlFor='menuicon' className={styles.menuicon}>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
      </label>
    </div>
  );
};

export default Home;
