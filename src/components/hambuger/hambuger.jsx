import React from 'react';
import styles from './hambuger.module.css';

const Hambuger = ({showmenu, setShowmenu}) => {
  const myStyle = {
    fontSize: '2rem'
  };
  return (
    <div style={myStyle}>
      <input
        type='checkbox'
        id='menuicon'
        onChange={(eve) => {
          setShowmenu(!showmenu);
        }}
      />
      <label htmlFor='menuicon' className={styles.menuicon}>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
      </label>
    </div>
  );
};

export default Hambuger;
