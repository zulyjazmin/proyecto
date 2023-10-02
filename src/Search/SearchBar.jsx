import React from 'react';
import '../layout/header.scss';
import { useSearch } from './SearchContext'; 

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <label htmlFor="search">Buscar</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar productos..."
      />
      <div className="boton">
        <button type="submit">
          <i id="lupa" className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
