import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'; 

const API = 'https://example-data.draftbit.com/books?_limit=240';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      let response;

      if (query.trim() === '') {
        response = await axios.get(API);
      } else {
        response = await axios.get(`${API}&q=${encodeURIComponent(query)}`);
      }

      onSearch(response.data || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
