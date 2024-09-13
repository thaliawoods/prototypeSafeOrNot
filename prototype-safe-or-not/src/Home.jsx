import './Home.css'
import SearchBar from './components/SearchBar';
import attentionMignon from './assets/attention-mignon.png';

const Home = () => {
    return ( 
      <div className="home">
        <SearchBar />
        <h3>Sens toi en sécurité avec ta santé</h3>
        <img src={attentionMignon} alt="Attention Mignon" className="home-image" />
        <h3>Objectif Zéro Discrimination !!!</h3>
        </div>

     );
}

 
export default Home;