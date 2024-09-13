import { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', query);
    // add logique de recherche
  };
  return (
    <div>
      <h1>Trouve le médecin qui te convient</h1>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Rechercher..."
          className="search-input"
        />
        <button type="submit" className="search-button">Rechercher</button>
      </form>
    </div>
  );
};


export default SearchBar;
