import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Logout from './pages/Logout';
import About from './pages/About';

const App = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    } else {
      sessionStorage.removeItem('token');
    }
  }, [token]);

  return (
    <div className='App'>
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/login'} element={<Login setToken={setToken} />} />
        <Route path={'/logout'} element={<Logout setToken={setToken} />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/'} element={<Homepage token={token} />} />
      </Routes>
    </div>
  );
};

export default App;
