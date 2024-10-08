import { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const MapComponent = () => {
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
    <div className="map-container">
      <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data && data.length > 0 ? (
          data.map((record) => {
            const { coordonnees } = record;
            if (coordonnees) {
              const { lat, lon } = coordonnees;
              return (
                <Marker key={record.recordid} position={[lat, lon]}>
                  <Popup>
                    <div>
                      <h2>{record.nom}</h2>
                      <p>{record.adresse}</p>
                      <p>{record.libelle_profession}</p>
                    </div>
                  </Popup>
                </Marker>
              );
            }
            return null;
          })
        ) : (
          <div>Loading...</div>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;


