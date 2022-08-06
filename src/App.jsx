import logo from './logo.svg';
import './App.css';
import {useState, createContext} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/home';
import Jap from './components/jap/jap';
import Can from './components/can/can';
import NotFound from './components/not_found/not_found';
import Nav from './components/nav/nav';

export const AppContext = createContext();

function App() {
  const [japitem, setJapitem] = useState('');

  return (
    <div className='App'>
      <AppContext.Provider value={{japitem, setJapitem}}>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jap' element={<Jap />} />
            <Route path='/can' element={<Can />} />
            <Route path='*' element={<NotFound />} /> // Not Found
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
