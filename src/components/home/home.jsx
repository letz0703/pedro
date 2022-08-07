import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>Hello Flex</div>
      <div className={styles.item}>abc</div>
      <div className={styles.item}>helloflex</div>
    </div>
  );
};

export default Home;
