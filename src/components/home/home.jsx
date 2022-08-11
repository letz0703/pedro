import React, {useState, Link} from 'react';
import styles from './home.module.css';
import Intro from '../intro/intro';
//https://youtu.be/LlvBzyy-558?t=419
const Home = () => {
  const [menu, setMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.threeline}>
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
      <div>{showmenu && <Intro />}</div>
    </div>
  );
};

export default Home;
