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
  );
};

export default SearchBar;
