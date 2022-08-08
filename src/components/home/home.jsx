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
      <div className={styles.item}>일본주문</div>
      <div className={styles.item}>통관번호 필요 / 일주일간 해외주문 금지</div>
    </div>
  );
};

export default Home;
