import logo from './logo.svg';
import {useState} from 'react';
import OriginApp from './components/origin_app/origin_app';
import Lesson7 from './components/lesson_7/lesson_7';
import Predict from './components/predict/predict';
import Execuse from './components/excuse/excuse';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Execuse />
      {/* <Lesson7 /> */}
      {/* <Predict /> */}
      {/* <OriginApp /> */}
    </div>
  );
}

export default App;
