import { useNavigate } from 'react-router-dom';
import Button from './Button';

const NavigationButtons = () => {
  const navigate = useNavigate();

  const handleButtonClick = (text) => {
    console.log('Button clicked:', text);
    if (text === 'Afficher la Carte') {
      navigate('/map');
    } else if (text === 'Professions') {
      navigate('/medecins');
    }
  };

  return (
    <div>
      <Button text="Afficher la Carte" onClick={() => handleButtonClick('Afficher la Carte')} />
        <div></div>
      <Button text="Professions" onClick={() => handleButtonClick('Professions')} />
    </div>
  );
};

export default NavigationButtons;
