import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('the lost world');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState('');

  const fetchBooks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: searchTerm,
          key: API_KEY,
          maxResults: 20,
        },
      });

      const { items } = response.data;

      if (items) {
        const newBooks = items.map((book) => {
          const { id, volumeInfo } = book;

          return {
            id,
            author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown',
            cover_id: volumeInfo.imageLinks?.thumbnail,
            edition_count: 1,
            first_publish_year: volumeInfo.publishedDate ? parseInt(volumeInfo.publishedDate) : null,
            title: volumeInfo.title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 0) {
          setResultTitle('Your Search Result');
        } else {
          setResultTitle('No Search Result Found!');
        }
      } else {
        setBooks([]);
        setResultTitle('No Search Result Found!');
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
