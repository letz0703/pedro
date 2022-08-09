import React from 'react';
import styles from './intro.module.css';

const Intro = () => {
  const myStyle = {
    backgroundColor: 'blue'
  };
  return (
    <div className={styles.intro}>
      <div className={styles.slidebox}>
        <input type='radio' name='slide' id='slide01' checked />
        <input type='radio' name='slide' id='slide02' />
        <input type='radio' name='slide' id='slide03' />
        <input type='radio' name='slide' id='slide04' />
        <ul className={styles.slideitem}>
          <li className={styles.slideitem}>
            <div>
              <label htmlFor='slide04' className={styles.left}></label>
              <label htmlFor='slide02' className={styles.right}></label>
              <a>
                <img src='images/1.jpeg' alt='slide image' />
              </a>
            </div>
          </li>
          <li className={styles.slideitem}>
            <div>
              <label htmlFor='slide01' className={styles.left}></label>
              <label htmlFor='slide03' className={styles.right}></label>
              <a>
                <img src='images/1.jpeg' alt='slide image' />
              </a>
            </div>
          </li>
          <li className={styles.slideitem}>
            <div>
              <label htmlFor='slide02' className={styles.left}></label>
              <label htmlFor='slide04' className={styles.right}></label>
              <a>
                <img src='./img/slideimg3.jpg' alt='slide image' />
              </a>
            </div>
          </li>
          <li className={styles.slideitem}>
            <div>
              <label htmlFor='slide03' className={styles.left}></label>
              <label htmlFor='slide01' className={styles.right}></label>
              <a>
                <img src='./img/slideimg4.jpg' alt='slide image' />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
