import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import attentionMignon from '../assets/attention-mignon.png';
import './About.css'; 

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div>
        <h3>Sens toi en sécurité avec ta santé</h3>
        {/* <img src={attentionMignon} alt="Attention Mignon" className="about-image" /> */}
        <h3>Objectif Zéro Discrimination !!!</h3>
        <h4>crée pour changer ta prise en charge médical</h4>
      </div>
      <Footer />
    </div>
  );
}

export default About;
