import logo from "./logo.svg";
import "./App.css";
import {useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/home";
import Jap from "./components/jap/jap";
import Can from "./components/can/can";
import Together from "./components/together/together";
import NotFound from "./components/not_found/not_found";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Nav from "./components/nav/nav";

export const AppContext = createContext();

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  const [japitem, setJapitem] = useState(null);

  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{japitem, setJapitem}}>
          <Router>
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/jap' element={<Jap />} />
              <Route path='/together' element={<Together />} />
              <Route path='*' element={<NotFound />} /> // Not Found
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
