import React, {useState, useEffect} from 'react';
import Axios from 'axios';
//import styles from './excuse.module.css'
const Excuse = () => {
  const [excuse, setExcuse] = useState('');
  const [excuseCase, setExcuseCase] = useState('');

  const handleCase = (excuseCase) => {
    switch (excuseCase) {
      case 'party':
        setExcuseCase('party');
        break;
      case 'family':
        setExcuseCase('family');
        break;
      case 'office':
        setExcuseCase('office');
        break;
      default:
        setExcuseCase('work');
        break;
    }
  };

  useEffect(() => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuseCase}`) //
      .then((res) => setExcuse(res.data[0].excuse));
  }, [excuseCase]);

  return (
    <div>
      <h1>Generate Execuse</h1>
      <button
        className='buttonParty'
        onClick={() => {
          handleCase('party');
        }}
      >
        Parth
      </button>
      <button
        className='buttonFamily'
        onClick={() => {
          handleCase('family');
        }}
      >
        Family
      </button>
      <button className='buttonOffice' onClick={() => handleCase('office')}>
        Office
      </button>
      <h1>{excuse}</h1>
    </div>
  );
};

export default Excuse;
