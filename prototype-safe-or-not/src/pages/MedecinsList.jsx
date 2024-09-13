import { useEffect, useState } from 'react';
import axios from 'axios';
import './MedecinsList.css'; 

const MedecinsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/medecins/records?limit=20'
        );
        console.log('Data received:', response.data.results); 
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Catégorie : Médecin</h1>
      {data && data.length > 0 ? (
        <ul>
          {data.map((record) => (
            <li key={record.recordid}>
              <h2>{record.nom || 'Nom non disponible'}</h2>
              <p>{record.adresse || 'Adresse non disponible'}</p>
              <p>{record.libelle_profession || 'Spécialité non disponible'}</p>
              <p>{record.type_dacte_realise || 'Type d\'acte non disponible'}</p>
              <p>{record.nom_acte || 'Nom de l\'acte non disponible'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MedecinsList;
