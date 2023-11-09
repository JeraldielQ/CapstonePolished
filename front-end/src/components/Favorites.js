import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './context/appContext';
import './Favorites.css';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const isFavorite = favorites.some((book) => book.id === id);
    return isFavorite;
  };

  return (
    <div className='favorites-container'>
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className='book-entry'>
            <h2>{book.title}</h2>
            <Link key={book.id} to={`/book/${book.id}`} className='book-entry-link'>
              <div>
                <img src={book.image_url} alt='#' className='book-image' />
              </div>
            </Link>
            <div className='button-container'>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)} className='remove-button'>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)} className='add-button'>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>No favorites</h1>
      )}
    </div>
  );
};

export default Favorites;