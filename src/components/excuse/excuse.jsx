import React, {useState, useEffect} from 'react';
import Axios from 'axios';
//import styles from './excuse.module.css'
const Excuse = () => {
  const [generatedExcuse, setGeneratedExcuse] = useState('');
  const fetchData = async (excuse) => {
    const res = await Axios.get(
      //
      `https://excuser.herokuapp.com/v1/excuse/${excuse}`
    ).then((res) => {
      setGeneratedExcuse(res.data[0].excuse);
    });
  };

  return (
    <div>
      <h1>Generate Execuse</h1>
      <button
        className='buttonParty'
        onClick={() => {
          fetchData('party');
        }}
      >
        Parth
      </button>
      <button
        className='buttonFamily'
        onClick={() => {
          fetchData('family');
        }}
      >
        Family
      </button>
      <button className='buttonOffice' onClick={() => fetchData('office')}>
        Office
      </button>
      <h1>{generatedExcuse}</h1>
    </div>
  );
};

export default Excuse;
