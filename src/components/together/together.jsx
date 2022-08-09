import React from 'react';
import {useParams} from 'react-router-dom';
//import styles from './jap.module.css'
import {useState, useEffect, useContext} from 'react';
import {AppContext} from '../../App';

const Jap = () => {
  // const {japitem} = useParams();
  const [input, setInput] = useState('');
  const {japitem, setJapitem} = useContext(AppContext);
  const [newItem, setnewItem] = useState('');
  const basket = {...japitem, newItem};
  console.log(basket);

  return (
    <>
      <input onChange={(eve) => setnewItem(eve.target.value)} />
      <button>update item</button>
      <h1>Order Together {<div>hi</div>} to Japan</h1>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default Jap;
