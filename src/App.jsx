import logo from './logo.svg';
import {useState} from 'react';
import OriginApp from './components/origin_app/origin_app';
import Lesson7 from './components/lesson_7/lesson_7';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Lesson7 />
      {/* <OriginApp /> */}
    </div>
  );
}

export default App;
