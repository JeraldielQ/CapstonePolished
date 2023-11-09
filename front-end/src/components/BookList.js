// BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookList.css';
import { useAppContext } from './context/appContext';
import SearchBar from './SearchBar';

const API = 'https://example-data.draftbit.com/books?_limit=240';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const favoritesChecker = (id) => favorites.some((book) => book.id === id);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="book-list-container">
      <SearchBar onSearch={handleSearch} />

      <div className="book-list">
        {(searchResults.length > 0 ? searchResults : books).map((book) => (
          <div key={book.id} className="book-entry">
            <Link to={`/book/${book.id}`} className="book-entry-link">
              <img src={book.image_url} alt={book.title} className="book-image" />
              <h2 className="book-title">{book.title}</h2>
            </Link>
            <div className="button-container">
              {favoritesChecker(book.id) ? (
                <button
                  className="remove-button"
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Remove from Favorites
                </button>
              ) : (
                <button
                  className="add-button"
                  onClick={() => addToFavorites(book)}
                >
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
