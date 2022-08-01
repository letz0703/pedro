import logo from './logo.svg';
import {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [text, setText] = useState('');
  useEffect(() => {
    console.log('Monuted');
    return () => {
      console.log('unmounted');
    };
  });
  return (
    <div className='App'>
      <input
        onChange={(eve) => {
          setText(eve.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
}

export default App;
