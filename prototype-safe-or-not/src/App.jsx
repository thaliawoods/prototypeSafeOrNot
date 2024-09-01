import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './Map'; 
import MedecinsList from './MedecinsList'; 
import NavigationButtons from './NavigationButtons'; 

const App = () => {
  return (
    <div className='App'>
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
      </Router>
    </div>
  );
};

export default App;
