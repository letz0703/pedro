import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/home';
import Jap from './components/jap/jap';
import Can from './components/can/can';
import NotFound from './components/not_found/not_found';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jap' element={<Jap />} />
          <Route path='/can' element={<Can />} />
          <Route path='*' element={<NotFound />} /> // Not Found
        </Routes>
      </Router>
    </div>
  );
}

export default App;
