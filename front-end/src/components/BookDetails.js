import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const books_url = 'https://example-data.draftbit.com/books?_limit=240';

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get(books_url)
      .then((res) => {
        const foundBook = res.data.find(book => book.id === parseInt(id));

        if (foundBook) {
          setBook(foundBook);
        } else {
          console.log('Book not found');
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className='book-details-container'>
      <div className='book-details-content'>
        <div className='book-details-header'>
          <h2 className='title'>{book?.title}</h2>
          <img src={book?.image_url} alt='#' className='thumbnail' />
        </div>
        <div className='book-details-info'>
          <div className='book-details-section'>
            <h2>Description</h2>
            <p className='description'>{book?.description}</p>
          </div>
          <div className='book-details-section'>
            <h2>Authors</h2>
            <p className='authors'>{book?.authors}</p>
          </div>
          <div className='book-details-section'>
            <h2>Genres</h2>
            <p>{book?.genres}</p>
          </div>
          <button className='go-back-button' onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
