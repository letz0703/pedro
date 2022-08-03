import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';

//import styles from './predict.module.css'

const Predict = () => {
  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = async () => {
    const res = await Axios.get(
      //
      `https://api.agify.io?name=${name}`
    ).then((res) => setPredictedAge(res.data));
  };

  return (
    <div>
      <input
        // type='text'
        placeholder={'Enter your name'}
        onChange={(eve) => {
          setName(eve.target.value);
        }}
      />
      <button onClick={fetchData}>Predict</button>
      <h1>Name:{predictedAge?.name}</h1>
      <h1>Predicted Age:{predictedAge?.age}</h1>
      <h1>Count:{predictedAge?.count}</h1>
    </div>
  );
};

export default Predict;
