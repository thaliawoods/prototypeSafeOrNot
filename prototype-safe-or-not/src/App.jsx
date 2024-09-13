import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './Map'; 
import MedecinsList from './MedecinsList'; 
import NavigationButtons from './NavigationButtons';
import { SignUp, Login, Homepage } from './pages';

const App = () => {

  const [token, setToken] = useState(false)

    if(token){
      sessionStorage.setItem('token',JSON.stringify(token))
    }

    useEffect(() => {
      if(sessionStorage.getItem('token')){
        let data = JSON.parse(sessionStorage.getItem('token'))
        setToken(data)
      }

    }, [])


  return (
    <div className='App'>
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/'} element={ <Login setToken={setToken}/>} />
        {token?<Route path={'/homepage'} element={ <Homepage token={token}/>} />:""}
      </Routes>

      {/* <Login/>
      <Router>
        <Navbar />
        <Home />
        <NavigationButtons />
        <nav>
        </nav>
        <div className='content'>
          <Routes>
            <Route path="/map" element={<MapComponent />} /> 
            <Route path="/medecins" element={<MedecinsList />} /> 
          </Routes>
        </div>
        <Footer />
      </Router> */}

    </div>
  );
};

export default App;
