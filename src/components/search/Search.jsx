import React, { useState } from 'react';
import './search.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-button"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default Search;
