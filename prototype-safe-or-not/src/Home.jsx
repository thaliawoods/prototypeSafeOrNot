import './Home.css'
import SearchBar from './SearchBar';
import Button from './Button';
import attentionMignon from './assets/attention-mignon.png';

const Home = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
    // add logique du bouton
  };
    return ( 
      <div className="home">
        <h2>Trouve le médecin qui te convient</h2>
        <SearchBar />
        <Button text="Afficher la Carte" onClick={handleButtonClick} />
        <h3>Sens toi en sécurité avec ta santé</h3>
        <img src={attentionMignon} alt="Attention Mignon" className="home-image" />
        <h3>Objectif Zéro Discrimination !!!</h3>
        </div>

     );
}
 
export default Home;