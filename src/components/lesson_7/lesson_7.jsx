import React from 'react';
//import styles from './lesson_7.module.css'

fetch('https://catfact.ninja/fact') //
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function Lesson7() {
  return <div>Lesson7</div>;
}

export default Lesson7;
