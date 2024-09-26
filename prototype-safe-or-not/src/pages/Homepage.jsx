import './Homepage.css';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import attentionMignon from '../assets/attention-mignon.png';
import Footer from '../components/Footer';

const Homepage = ({ token }) => {
  return (
    <div className="home">
      <Navbar />
      <SearchBar />
      {token ? (
        <div>
          <h3>Welcome back, {token.user.user_metadata.full_name}!</h3>
          <h3>Sens toi en sécurité avec ta santé</h3>
          <img src={attentionMignon} alt="Attention Mignon" className="home-image" />
          <h3>Objectif Zéro Discrimination !!!</h3>
        </div>
      ) : (
        <div>
          <h3>Bienvenue sur Safe or Not ?</h3>
          <h3>Sens toi en sécurité avec ta santé</h3>
          <img src={attentionMignon} alt="Attention Mignon" className="home-image" />
          <h3>Objectif Zéro Discrimination !!!</h3>
          <p>Veuillez vous connecter pour accéder à toutes les fonctionnalités.</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Homepage;
