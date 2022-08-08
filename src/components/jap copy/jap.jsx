import React from 'react';
import {useParams} from 'react-router-dom';
//import styles from './jap.module.css'
import {useState, useContext} from 'react';
import {AppContext} from '../../App';

const Jap = () => {
  // const {japitem} = useParams();
  const [input, setInput] = useState('');
  const {japitem, setJapitem} = useContext(AppContext);

  return (
    <>
      <input
        onChange={(eve) => {
          setInput(eve.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          setJapitem(input);
        }}
      >
        update item
      </button>
      <div>Order {japitem} to Japan</div>
    </>
  );
};

export default Jap;
