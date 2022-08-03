import React, {useState, useEffect} from 'react';
import Axios from 'axios';
//import styles from './lesson_7.module.css'

// fetch('https://catfact.ninja/fact') //
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function Lesson7() {
  const [cat, setCat] = useState('');

  const fetchCat = async () => {
    const res = await Axios.get('https://catfact.ninja/fact');
    setCat(res.data.fact);
  };

  useEffect(() => fetchCat(), []);

  // useEffect(() => {
  //   Axios.get('https://catfact.ninja/fact') //
  //     .then((res) => setCat(res.data.fact));
  // }, []);

  return (
    <div>
      <h1>Lesson7</h1>
      <button onClick={fetchCat}>Generate Cat Fact</button>
      <p>{cat}</p>
    </div>
  );
}

export default Lesson7;
